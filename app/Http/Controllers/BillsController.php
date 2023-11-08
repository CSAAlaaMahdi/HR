<?php

namespace App\Http\Controllers;

use App\Models\AccountTree;
use App\Models\BillBody;
use App\Models\BillDiscount;
use App\Models\BillFooter;
use App\Models\BillHeader;
use App\Models\BillSetting;
use App\Models\BillsType;
use App\Models\Currency;
use App\Models\CustomerSupplier;
use App\Models\ItemsThree;
use App\Models\Itemstwo;
use App\Models\Stories;
use App\Models\Unitname;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;


class BillsController extends Controller
{

    public function index(Request $request)
    {
        if (session()->has('User')) {
            $data = [
                'billType' => $request->input('billType'),
            ];
            return view('bills.buying', $data);
        }
    }


    public function create(Request $request)
    {
        $headerGuid = $request->input('Bill_Header_Guid');
        $billType = $request->input('Bill_Type');
        $getBillSetting = BillSetting::where('FormText','=',$billType)->first();
        $data = [
            'getBillSetting' => BillSetting::where('FormText', '=', $billType)->first(),
            'getItems' => Itemstwo::where('IT_Tree', null)->select('id', 'IT_PartNumber', 'IT_Name')->get(),
            'getBillBody' => BillBody::addSelect(['Item_Name' => Itemstwo::select('IT_Name')
                ->whereColumn('Item_Guid', 'id'), 'Item_PartNumber' => Itemstwo::select('IT_PartNumber')
                ->whereColumn('Item_Guid', 'id')])
                ->where('Header_Guid', $headerGuid)
                ->get(),
            'getUnits' => Unitname::all(),
            'getAccounts' => AccountTree::select('Guid', 'Ac_Name', 'Ac_Code_Mask')->orderBy('Ac_RowID', 'ASC')->get(),
            'getDisCount' => BillDiscount::where('Header_Guid', $headerGuid)->get(),
            'getCurrencyAll' =>Currency::all(),
            'getCurrency' =>Currency::find($getBillSetting->Currency_Guid),
            
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $billType = BillsType::find($request->input("H_Bill_Type"))->N_BillName;
        switch ($billType) {
            case 'Buying Bills':
                $billType = 1;
                break;
            case 'Saling Bills':
                $billType = 2;
                break;

            default:

                break;
        }
        $billID = BillHeader::max('Bill_ID');
        if ($billID == null || $billID == 0) {
            $billID = 1;
        } else {
            $billID++;
        }
        $headerGuid = $request->input('H_Guid');
        if ($headerGuid == null) {
            $headerGuid = strtoupper(Uuid::uuid4()->toString());
        }


        $currencyGuid = $request->input('H_Currency_Guid');
        $currencyEqual = $request->input('H_Currency_Equal');

        #region Bill Header ...
        $billHeader = BillHeader::updateOrCreate(
            [
                'Guid' => $headerGuid,
            ],
            [
                'Cust_Guid' => $request->input("H_Cust_Guid"),
                'Store_Guid' => $request->input("H_Store_Guid"),
                'Acc_Guid' => $request->input("H_Acc_Guid"),
                'Bill_Type' => $request->input("H_Bill_Type"),
                'Bill_Number' => $request->input("H_Bill_Number"),
                'Bill_Date' => $request->input("H_Bill_Date"),
                'Pay_Type' => $request->input("H_Pay_Type"),
                'Cash_Amount' => $request->input("H_Cash_Amount"),
                'Currency_Guid' => $currencyGuid,
                'Currency_Equal' => $currencyEqual,
                'Bill_ID' => $billID,
                'Note_Header' => $request->input('H_Note_Header'),
            ]
        );

        $billBody = $request->input('Bill_Body');
        if (empty($billBody)) {
        } else {
            foreach ($billBody as $billBodyData) {
                $bodyRowID = BillBody::max('RowID');
                $guidBody = $billBodyData['Guid'];
                if ($guidBody === '00000000-0000-0000-0000-000000000000') {
                    $guidBody = strtoupper(Uuid::uuid4()->toString());
                    $bodyRowID = $bodyRowID + 1;
                }
                $Bill_Body =  BillBody::updateOrCreate(
                    [
                        'Guid' => $guidBody
                    ],
                    [
                        'Item_Guid' => $billBodyData['Item_Guid'],
                        'Item_Unit' => $billBodyData['Item_Unit'],
                        'Item_Count' => $billBodyData['Item_Count'],
                        'Item_Price' => $billBodyData['Item_Price'],
                        'Item_Price_Total' => $billBodyData['Item_Price_Total'],
                        'Item_Discount' => $billBodyData['Item_Discount'],
                        'Item_Extra' => $billBodyData['Item_Extra'],
                        'Item_Price_Final' => $billBodyData['Item_Price_Final'],
                        'Currency_Guid' => $currencyGuid,
                        'Currency_Equal' => $currencyEqual,
                        'Header_Guid' => $headerGuid,
                        'RowID' => $bodyRowID,
                    ]
                );

                // Update Item Store......
                $storeMovement = ItemsThree::updateOrCreate(
                    [
                        'IT2_BillGuid' => $guidBody,
                    ],
                    [
                        'IT2_FK_IT' => $billBodyData['Item_Guid'],
                        'IT2_Count_Kind' => $billBodyData['Item_Unit'],
                        'IT2_Count' => $billBodyData['Item_Count'],
                        'IT2_SmallestCount' => (Unitname::find($billBodyData['Item_Unit'])->Ui_Piece) * ($billBodyData['Item_Count']),
                        'IT2_State' => true,
                        'IT2_StoreName' => $request->input("H_Store_Guid"),
                        'IT2_BillType' => $billType,

                    ]
                );
                // Update Count of Item....
                $this->updateItemCount($billBodyData['Item_Guid']);
            }
        }



        #endregion
        // operation on Bill Header....


        #region Bill Footer...
        $billFooterGuid = $request->input('F_Guid');
        $footerRowID = BillFooter::max('RowID');
        if ($footerRowID == null || $footerRowID == 0) {
            $footerRowID = 1;
        } else {
            $footerRowID = $footerRowID + 1;
        }
        if ($billFooterGuid == null || $billFooterGuid == "") {
            $billFooterGuid = strtoupper(Uuid::uuid4()->toString());
        }

        $bill_Footer = BillFooter::updateOrCreate(
            [
                'Guid' => $billFooterGuid,
            ],
            [
                'Header_Guid' => $headerGuid,
                'Total_Price_Bill' => $request->input('F_Total_Price_Bill'),
                'Total_Discount' => $request->input('F_Total_Discount'),
                'Item_Discount' => $request->input('F_Item_Discount'),
                'Bill_Discount' => $request->input('F_Bill_Discount'),
                'TotalAward' => $request->input('F_TotalAward'),
                'checkAward' => $request->input('F_checkAward'),
                'Currency_Guid' => $request->input('F_Currency_Guid'),
                'Currency_Equal' => $request->input('F_Currency_Equal'),
                'RowID' => $footerRowID,
            ]
        );


        #endregion


        #region Bill DisAdd....
        $billDisAdd = $request->input('Bill_DisAdd');
        if ($billDisAdd != null) {
            foreach ($billDisAdd as $billDisAddData) {
                $billDisAddRow = BillDiscount::max('RowIndex');
                if ($billDisAddRow == null || $billDisAddRow == 0) {
                    $billDisAddRow = 0;
                } else {
                    $billDisAddRow = $billDisAddRow + 1;
                }
                $guidDisAdd = $billDisAddData['Guid'];
                if ($guidDisAdd === '00000000-0000-0000-0000-000000000000') {
                    $guidDisAdd = strtoupper(Uuid::uuid4()->toString());
                    $billDisAddRow = $billDisAddRow;
                }
                $billDiscount =  BillDiscount::updateOrCreate([
                    'Guid' => $guidDisAdd
                ], [
                    'Header_Guid' => $headerGuid,
                    'Account_Guid' => $billDisAddData['Account_Guid'],
                    'Dis_Amount' => $billDisAddData['Dis_Amount'],
                    'Add_Amount' => $billDisAddData['Add_Amount'],
                    'Notes' => $billDisAddData['Notes'],
                    'Currency_Guid' => $currencyGuid,
                    'Currency_Equal' => $currencyEqual,
                    'RowIndex' => $billDisAddRow,
                ]);
            }
        }

        #endregion


        return response()->json(['status' => 'Adding Data Successfully..']);
    }


    public function show(Request $request)
    {
        $billGuid = $request->input('HeaderGuid');
        $billinfo = BillHeader::find($billGuid);
        $billFooter = BillFooter::where('Header_Guid', $billGuid)->first();
        $billBody = BillBody::addSelect(['Item_Name' => Itemstwo::select('IT_Name')
            ->whereColumn('Item_Guid', 'id'), 'Item_PartNumber' => Itemstwo::select('IT_PartNumber')
            ->whereColumn('Item_Guid', 'id')])
            ->where('Header_Guid', $billGuid)
            ->get();
        $billDisAdd = BillDiscount::where('Header_Guid', $billGuid)->get() ? BillDiscount::where('Header_Guid', $billGuid)->get() : null;

        $data = [
            'getBillHeader' => $billinfo,
            'getBillBody' => $billBody,
            'getBillDisAdd' => $billDisAdd,
            'getBillFooter' => $billFooter,

        ];

        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        // $id = $request->post('BB_ID');
        // $data = BillBuying::find($id);
        // $data->BB_BillNumber = $request->post('BB_BillNumber');
        // $data->BB_BillDate = $request->post('BB_BillDate');
        // $data->BB_Customer = $request->post('BB_Customer');
        // $data->BB_Provider = $request->post('BB_Provider');
        // $data->BB_BillType = $request->post('BB_BillType');
        // $data->BB_Currency = $request->post('BB_Currency');
        // $data->BB_CurrencyCost = $request->post('BB_CurrencyCost');
        // $data->BB_Credit = $request->post('BB_Credit');
        // $data->BB_Debt = $request->post('BB_Debt');
        // $data->BB_TotalMoney = $request->post('BB_TotalMoney');
        // $data->BB_StoreName = $request->post('BB_StoreName');
        // $data->BB_Notes = $request->post('BB_Notes');
        // $data->BB_State = $request->post('BB_State');
        // $data->BB_UserName = session('User');
        // $data->update();

        // return response()->json(['status' => ' Updating Successfully...']);
    }


    public function destroy(Request $request)
    {
        $guid = $request->post('Guid');
        if (BillBody::find($guid)) {
            $itemthreeGuid = ItemsThree::where('IT2_BillGuid', $guid)->first()->id;
            $itemGuid = ItemsThree::where('IT2_BillGuid', $guid)->first()->IT2_FK_IT;
            BillBody::find($guid)->delete();
            ItemsThree::find($itemthreeGuid)->delete();
            $this->updateItemCount($itemGuid);

            return response()->json(['status' => 'Deleting Successfully...']);
        } else if (BillDiscount::find($guid)) {
            BillDiscount::find($guid)->delete();
            return response()->json(['status' => 'Deleting Successfully...']);
        }
    }

    public function filldata(Request $request)
    {
        $billType = $request->input('BillType');
        $getBillType = BillsType::where('N_BillName', $billType)->select('Guid')->first();
        $billSetting = BillSetting::where('FormText', '=', $billType)->first();

        $data = [
            'getStores' => Stories::where('St_IsGroup', False)->orderBy('St_RowID', 'ASC')->get(),
            'getAccounts' => AccountTree::select('Guid', 'Ac_Name', 'Ac_Code_Mask')->orderBy('Ac_RowID', 'ASC')->get(),
            'getCustomers' => CustomerSupplier::select('Cs_Guid', 'Cs_Name', 'Cs_Account')->orderBy('Cs_RowID', 'ASC')->get(),
            'getCurrency' => Currency::all(),
            'getBillsType' => BillsType::all(),
            'getBill' => BillHeader::where('Bill_Type', $getBillType->Guid)->get(),
            'billSetting' => $billSetting,

        ];
        return response()->json($data);
    }

    public function getCurrencyEqual(Request $request)
    {
        $currencyGuid = $request->input('CurrencyGuid');
        $currency = Currency::find($currencyGuid);
        $currencyEqual = [
            'getCurrencyEqual' => $currency->Cur_Cost,
            'CurrencyGuid' => $currencyGuid,
        ];
        return response()->json($currencyEqual);
    }

    public function getBillNumber(Request $request)
    {
        $billType = $request->input('BillType');
        $getBillNumber = BillHeader::where('Bill_Type','=', $billType)->first();
        if($getBillNumber === null) {
            $getBillNumber = 0;}
            else{
                $getBillNumber = $getBillNumber->max('Bill_Number');
            }
        $data =[
            'BillNumber'=> $getBillNumber,
        ];
       
        return response()->json($data);
    }

    public function getItemID(Request $request)
    {
        $partNumber = $request->input('PartNumber');

        $data = [
            'ItemID' => Itemstwo::where('IT_PartNumber', $partNumber)->first()->id,
        ];
        return response()->json($data);
    }

    public function updateItemCount($item)
    {
        $CountIn = ItemsThree::where([['IT2_BillType', 1], ['IT2_FK_IT', $item]])->sum('IT2_SmallestCount');
        if ($CountIn == null || $CountIn == "" || $CountIn == 0) {
            $CountIn = 0;
        };

        $CounOut = ItemsThree::where([['IT2_BillType', 2], ['IT2_FK_IT', $item]])->sum('IT2_SmallestCount');
        if ($CounOut == null || $CounOut == "" || $CounOut == 0) {
            $CounOut = 0;
        }

        $result = $CountIn - $CounOut;

        $itemTwo = Itemstwo::find($item);
        $itemTwo->IT_ItemCount = $result;
        $itemTwo->update();
    }
    public function GetBillSetting(Request $request){
        $BillSetting = $request->input("billType");
        $BillSettingState = BillSetting::where("FormText", $BillSetting)->first();
        $Data =[
            "BillSettingState"=> $BillSettingState,
        ];
        return response()->json($Data);
       
    }
}
