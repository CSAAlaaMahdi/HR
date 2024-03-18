<?php

namespace App\Http\Controllers;

use App\Models\AccountTree;
use App\Models\BillBody;
use App\Models\BillDiscount;
use App\Models\BillFooter;
use App\Models\BillHeader;
use App\Models\BillSetting;
use App\Models\BillsType;
use App\Models\Bonds;
use App\Models\Currency;
use App\Models\CustomerSupplier;
use App\Models\ItemsBarcode;
use App\Models\ItemsThree;
use App\Models\Itemstwo;
use App\Models\SalesGroup;
use App\Models\Stories;
use App\Models\Unitname;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Nette\Utils\Floats;
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
        $getBillSetting = BillSetting::where('FormText', '=', $billType)->first();
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
            'getCurrencyAll' => Currency::all(),
            'getCurrency' => Currency::find($getBillSetting->Currency_Guid),

        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $billType = BillsType::find($request->input("H_Bill_Type"))->N_BillName;
        $billTypeState = 0;
        switch ($billType) {
            case 'فاتورة مشتريات':
                $billTypeState = 1;
                break;
            case 'فاتورة مبيعات':
                $billTypeState = 2;
                break;
            case 'فاتورة طلبيات':
                $billTypeState = 3;
                break;
            case 'فاتورة تسليم':
                $billTypeState = 4;
                break;
            case 'فاتورة استلام':
                $billTypeState = 5;
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
                'SalingType' => $request->input('H_SalingType'),
                'Header_Guid' => $request->input('H_Header_Guid'),
                'Note_Header' => $request->input('H_Note_Header'),
            ]
        );
        #endregion operation on Bill Header....

        #region Bill Body ...
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
                        'Item_Barcode' => $billBodyData['Item_Barcode'],
                        'Item_Unit' => $billBodyData['Item_Unit'],
                        'Item_Count' => $billBodyData['Item_Count'],
                        'Item_Qty1' => $billBodyData['Item_Qty1'],
                        'Item_Qty2' => $billBodyData['Item_Qty2'],
                        'Item_Qty3' => $billBodyData['Item_Qty3'],
                        'Item_Price' => $billBodyData['Item_Price'],
                        'Item_Price_Total' => $billBodyData['Item_Price_Total'],
                        'Item_Discount' => $billBodyData['Item_Discount'],
                        'Item_Extra' => $billBodyData['Item_Extra'],
                        'Item_Price_Final' => $billBodyData['Item_Price_Final'],
                        'CostPrice' => $billBodyData['CostPrice'],
                        'ProductionDate' => $billBodyData['ProductionDate'],
                        'ExpireDate' => $billBodyData['ExpireDate'],
                        'Store_Guid' => $request->input('H_Store_Guid'),
                        'Branch_Guid' => null,
                        'Currency_Guid' => $currencyGuid,
                        'Currency_Equal' => $currencyEqual,
                        'Profits' => $billBodyData['Profits'],
                        'Header_Guid' => $headerGuid,
                        'RowID' => $bodyRowID,
                    ]
                );


                #region Update The Store and Item Count....
                // Update Item Store......

                if ($Bill_Body) {
                    $billSettingState = BillSetting::find($billTypeState);
                    $idState = $billSettingState->id;
                    $effectState = $billSettingState->AffectOfStore;
                    // dd($billSettingState->AffectOfStore);
                    $combineState = $idState . $effectState;
                    $PayType = $request->input('H_Pay_Type');
                    $count = 0;

                    if ($billSettingState->Item_Qty1 === '1') {
                        $count = $billBodyData['Item_Qty1'];
                    } else if ($billSettingState->Item_Qty2 === '1') {
                        $count = $billBodyData['Item_Qty2'];
                    } else {
                        $count = $billBodyData['Item_Qty3'];
                    }

                    //dd($combineState);
                    switch ($combineState) {
                        case '11':
                            $storeMovement = ItemsThree::updateOrCreate(
                                [
                                    'IT2_BillGuid' => $guidBody,
                                ],
                                [
                                    'IT2_FK_IT' => $billBodyData['Item_Guid'],
                                    'IT2_Count_Kind' => $billBodyData['Item_Unit'],
                                    'IT2_Count' => $count,
                                    'IT2_SmallestCount' => (Unitname::find($billBodyData['Item_Unit'])->Ui_Piece) * ($count),
                                    'IT2_State' => true,
                                    'IT2_StoreName' => $request->input("H_Store_Guid"),
                                    'IT2_BillType' => $billTypeState,

                                ]
                            );
                            // Update Count of Item....
                            $this->updateItemCount($billBodyData['Item_Guid']);
                            $this->updateItemPrices($billBodyData['Item_Guid'], $billBodyData['CostPrice'] * $currencyEqual);

                            break;
                        case '10':
                            $this->updateItemPrices($billBodyData['Item_Guid'], $billBodyData['CostPrice'] * $currencyEqual);
                            break;
                        case '21':
                            $storeMovement = ItemsThree::updateOrCreate(
                                [
                                    'IT2_BillGuid' => $guidBody,
                                ],
                                [
                                    'IT2_FK_IT' => $billBodyData['Item_Guid'],
                                    'IT2_Count_Kind' => $billBodyData['Item_Unit'],
                                    'IT2_Count' => $count,
                                    'IT2_SmallestCount' => (Unitname::find($billBodyData['Item_Unit'])->Ui_Piece) * ($count),
                                    'IT2_State' => true,
                                    'IT2_StoreName' => $request->input("H_Store_Guid"),
                                    'IT2_BillType' => $billTypeState,

                                ]
                            );
                            // Update Count of Item....
                            $this->updateItemCount($billBodyData['Item_Guid']);
                            break;
                        case '20':

                            break;
                        case '41':
                            $storeMovement = ItemsThree::updateOrCreate(
                                [
                                    'IT2_BillGuid' => $guidBody,
                                ],
                                [
                                    'IT2_FK_IT' => $billBodyData['Item_Guid'],
                                    'IT2_Count_Kind' => $billBodyData['Item_Unit'],
                                    'IT2_Count' => $count,
                                    'IT2_SmallestCount' => (Unitname::find($billBodyData['Item_Unit'])->Ui_Piece) * ($count),
                                    'IT2_State' => true,
                                    'IT2_StoreName' => $request->input("H_Store_Guid"),
                                    'IT2_BillType' => $billTypeState,

                                ]
                            );
                            // Update Count of Item....
                            $this->updateItemCount($billBodyData['Item_Guid']);
                            break;
                        case '40':

                            break;

                        case '51':
                            $storeMovement = ItemsThree::updateOrCreate(
                                [
                                    'IT2_BillGuid' => $guidBody,
                                ],
                                [
                                    'IT2_FK_IT' => $billBodyData['Item_Guid'],
                                    'IT2_Count_Kind' => $billBodyData['Item_Unit'],
                                    'IT2_Count' => $count,
                                    'IT2_SmallestCount' => (Unitname::find($billBodyData['Item_Unit'])->Ui_Piece) * ($count),
                                    'IT2_State' => true,
                                    'IT2_StoreName' => $request->input("H_Store_Guid"),
                                    'IT2_BillType' => $billTypeState,

                                ]
                            );
                            // Update Count of Item....
                            $this->updateItemCount($billBodyData['Item_Guid']);
                            break;
                        case '50':

                            break;
                        default:

                            break;
                    }
                }

                #endregion
            }
        }
        #endregion

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
                'Total_Add' => $request->input('F_Total_Add'),
                'Item_Add' => $request->input('F_Item_Add'),
                'Bill_AddAmount' => $request->input('F_Bill_AddAmount'),
                'Currency_Guid' => $request->input('F_Currency_Guid'),
                'Currency_Equal' => $request->input('F_Currency_Equal'),
                'RowID' => $footerRowID,
            ]
        );
        $info = [
            'headerGuid' => $headerGuid,
            'Total_Price_Bill' => $request->input('F_Total_Price_Bill'),
            'Total_Discount' => $request->input('F_Total_Discount'),
            'Total_Add' => $request->input('F_Total_Add'),
            'Currency_Guid' => $currencyGuid,
            'Currency_Equal' => $currencyEqual,
            'Acc_Guid' => $request->input('H_Acc_Guid'),
            'Cust_Guid' => $request->input('H_Cust_Guid'),
            'Store_Guid' => $request->input('H_Store_Guid'),
            'Notes' => $request->input('H_Note_Header'),
            'BillType' => $billTypeState,
            'Bill_Account' => $request->input('H_Bill_Account'),
            'Discount_Account' => $request->input('H_Discount_Account'),
            'PayType' => $request->input('H_Pay_Type'),
            'Doc_Number' => $request->input('H_Bill_Number'),
            'Datex' => $request->input('H_Bill_Date'),

        ];

        $this->UpdateOrCreateBonds($info);
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
                    'Dis_Percent' => $billDisAddData['Dis_Percent'],
                    'Add_Amount' => $billDisAddData['Add_Amount'],
                    'Add_Percent' => $billDisAddData['Add_Percent'],
                    'Notes' => $billDisAddData['Notes'],
                    'Currency_Guid' => $currencyGuid,
                    'Currency_Equal' => $currencyEqual,
                    'RowIndex' => $billDisAddRow,
                ]);
            }
        }

        #endregion


        return response()->json(['status' => 'تمت العملية بنجاح']);
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

        switch ($billSetting->id) {
            case 1:
                $data = [
                    'getStores' => Stories::where('St_IsGroup', False)->orderBy('St_RowID', 'ASC')->get(),
                    'getAccounts' => AccountTree::select('Guid', 'Ac_Name', 'Ac_Code_Mask')->orderBy('Ac_RowID', 'ASC')->get(),
                    'getCustomers' => CustomerSupplier::where('Cs_Type', 'مجهز')
                        ->select('Cs_Guid', 'Cs_Name', 'Cs_Account')->orderBy('Cs_RowID', 'ASC')->get(),
                    'getCurrency' => Currency::all(),
                    'getBillsType' => BillsType::all(),
                    'getBill' => BillHeader::where('Bill_Type', $getBillType->Guid)->get(),

                    'getBillsDeliveryAndReceive' => BillHeader::where('Header_Guid', null)
                        ->whereIn('Bill_Type', function ($query) {
                            $query->select('Bill_Type_FK')->from('Tb_Bill_Setting')
                                ->whereIn('id', [4, 5]);
                        })
                        ->addSelect(['Doc_Name' => BillSetting::select('FormText')
                            ->whereColumn('Bill_Type', 'Bill_Type_FK')])
                        ->get(),

                    'billSetting' => $billSetting,


                ];
                return response()->json($data);
                break;
            case 2:
                $data = [
                    'getStores' => Stories::where('St_IsGroup', False)->orderBy('St_RowID', 'ASC')->get(),
                    'getAccounts' => AccountTree::select('Guid', 'Ac_Name', 'Ac_Code_Mask')->orderBy('Ac_RowID', 'ASC')->get(),
                    'getCustomers' => CustomerSupplier::where('Cs_Type', 'عميل')
                        ->select('Cs_Guid', 'Cs_Name', 'Cs_Account')->orderBy('Cs_RowID', 'ASC')->get(),
                    'getCurrency' => Currency::all(),
                    'getBillsType' => BillsType::all(),
                    'getBill' => BillHeader::where('Bill_Type', $getBillType->Guid)->get(),

                    'getBillsDeliveryAndReceive' => BillHeader::where('Header_Guid', null)
                        ->whereIn('Bill_Type', function ($query) {
                            $query->select('Bill_Type_FK')->from('Tb_Bill_Setting')
                                ->whereIn('id', [4, 5]);
                        })
                        ->addSelect(['Doc_Name' => BillSetting::select('FormText')
                            ->whereColumn('Bill_Type', 'Bill_Type_FK')])
                        ->get(),

                    'billSetting' => $billSetting,


                ];
                return response()->json($data);
                break;
            case 3:
                $data = [
                    // 'getStores' => Stories::where('St_IsGroup', False)->orderBy('St_RowID', 'ASC')->get(),
                    // 'getAccounts' => AccountTree::select('Guid', 'Ac_Name', 'Ac_Code_Mask')->orderBy('Ac_RowID', 'ASC')->get(),
                    // 'getCustomers' => CustomerSupplier::where('Cs_Type', 'عميل')
                    //     ->select('Cs_Guid', 'Cs_Name', 'Cs_Account')->orderBy('Cs_RowID', 'ASC')->get(),
                    'getCurrency' => Currency::all(),
                    // 'getBillsType' => BillsType::all(),
                    // 'getBill' => BillHeader::where('Bill_Type', $getBillType->Guid)->get(),

                    // 'getBillsDeliveryAndReceive' => BillHeader::where('Header_Guid', null)
                    //     ->whereIn('Bill_Type', function ($query) {
                    //         $query->select('Bill_Type_FK')->from('Tb_Bill_Setting')
                    //             ->whereIn('id', [4, 5]);
                    //     })
                    //     ->addSelect(['Doc_Name' => BillSetting::select('FormText')
                    //         ->whereColumn('Bill_Type', 'Bill_Type_FK')])
                    //     ->get(),

                    'billSetting' => $billSetting,


                ];
                return response()->json($data);
                break;
            case 4:
                $data = [
                    'getStores' => Stories::where('St_IsGroup', False)->orderBy('St_RowID', 'ASC')->get(),
                    // 'getAccounts' => AccountTree::select('Guid', 'Ac_Name', 'Ac_Code_Mask')->orderBy('Ac_RowID', 'ASC')->get(),
                    'getCustomers' => CustomerSupplier::where('Cs_Type', 'عميل')
                        ->select('Cs_Guid', 'Cs_Name', 'Cs_Account')->orderBy('Cs_RowID', 'ASC')->get(),
                    'getCurrency' => Currency::all(),
                    // 'getBillsType' => BillsType::all(),
                    'getBill' => BillHeader::where('Bill_Type', $getBillType->Guid)->get(),

                    // 'getBillsDeliveryAndReceive' => BillHeader::where('Header_Guid', null)
                    //     ->whereIn('Bill_Type', function ($query) {
                    //         $query->select('Bill_Type_FK')->from('Tb_Bill_Setting')
                    //             ->whereIn('id', [4, 5]);
                    //     })
                    //     ->addSelect(['Doc_Name' => BillSetting::select('FormText')
                    //         ->whereColumn('Bill_Type', 'Bill_Type_FK')])
                    //     ->get(),

                    'billSetting' => $billSetting,


                ];
                return response()->json($data);
                break;
            case 5:
                $data = [
                    'getStores' => Stories::where('St_IsGroup', False)->orderBy('St_RowID', 'ASC')->get(),
                    // 'getAccounts' => AccountTree::select('Guid', 'Ac_Name', 'Ac_Code_Mask')->orderBy('Ac_RowID', 'ASC')->get(),
                    'getCustomers' => CustomerSupplier::where('Cs_Type', 'مجهز')
                        ->select('Cs_Guid', 'Cs_Name', 'Cs_Account')->orderBy('Cs_RowID', 'ASC')->get(),
                    'getCurrency' => Currency::all(),
                    // 'getBillsType' => BillsType::all(),
                    'getBill' => BillHeader::where([['Bill_Type', $getBillType->Guid], ['Bill_Number', '<>', null]])
                        ->orderBy('Bill_Number')->get(),

                    // 'getBillsDeliveryAndReceive' => BillHeader::where('Header_Guid', null)
                    //     ->whereIn('Bill_Type', function ($query) {
                    //         $query->select('Bill_Type_FK')->from('Tb_Bill_Setting')
                    //             ->whereIn('id', [4, 5]);
                    //     })
                    //     ->addSelect(['Doc_Name' => BillSetting::select('FormText')
                    //         ->whereColumn('Bill_Type', 'Bill_Type_FK')])
                    //     ->get(),

                    'billSetting' => $billSetting,


                ];
                return response()->json($data);
                break;
            default:
                # code...
                break;
        }
    }

    public function getCurrencyEqual(Request $request)
    {
        $currencyGuid = $request->input('CurrencyGuid');
        $currency = Currency::find($currencyGuid)->Cur_Cost;
        $currencyEqual = [
            'getCurrencyEqual' => $currency,
            'CurrencyGuid' => $currencyGuid,
        ];
        return response()->json($currencyEqual);
    }

    public function getBillNumber(Request $request)
    {
        $billType = $request->input('BillType');
        $getBillNumber = BillHeader::where('Bill_Type', $billType)->max('Bill_Number');
        if ($getBillNumber === null || $getBillNumber == 0) {
            $getBillNumber = 0;
        } else {
            $getBillNumber = $getBillNumber;
        }
        $data = [
            'BillNumber' => $getBillNumber,
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
        $CountIn = ItemsThree::where([['IT2_BillType', 1], ['IT2_FK_IT', $item]])
            ->orWhere([['IT2_BillType', 5], ['IT2_FK_IT', $item]])
            ->sum('IT2_SmallestCount');
        if ($CountIn == null || $CountIn == "" || $CountIn == 0) {
            $CountIn = 0;
        };

        $CounOut = ItemsThree::where([['IT2_BillType', 2], ['IT2_FK_IT', $item]])
            ->orWhere([['IT2_BillType', 4], ['IT2_FK_IT', $item]])
            ->sum('IT2_SmallestCount');
        if ($CounOut == null || $CounOut == "" || $CounOut == 0) {
            $CounOut = 0;
        }

        $result = $CountIn - $CounOut;

        $itemTwo = Itemstwo::find($item);
        $itemTwo->IT_ItemCount = $result;
        $itemTwo->update();
    }
    public function updateItemPrices($item, $price)
    {
        $ratio = SalesGroup::orderBy('Gs_RowID', 'ASC')->get();

        $itemTwo = Itemstwo::find($item);
        $itemTwo->IT_Normal_1_1 = ((($ratio[0]->Gs_SalesRatio) / 100) * $price) + $price;
        $itemTwo->IT_Mid_1_1 = ((($ratio[1]->Gs_SalesRatio) / 100) * $price) + $price;
        $itemTwo->IT_Good_1_1 = ((($ratio[2]->Gs_SalesRatio) / 100) * $price) + $price;
        $itemTwo->IT_VeryGood_1_1 = ((($ratio[3]->Gs_SalesRatio) / 100) * $price) + $price;
        $itemTwo->IT_Excellent_1_1 = ((($ratio[4]->Gs_SalesRatio) / 100) * $price) + $price;
        $itemTwo->IT_Supper_1_1 = ((($ratio[5]->Gs_SalesRatio) / 100) * $price) + $price;

        $itemTwo->update();
    }
    public function GetBillSetting(Request $request)
    {
        $BillSetting = $request->input("billType");
        $BillSettingState = BillSetting::where("FormText", $BillSetting)->first();
        $Data = [
            "BillSettingState" => $BillSettingState,
        ];
        return response()->json($Data);
    }

    public function GetItemInfoUsingBarcode(Request $request)
    {

        $itemBarcode = $request->input('Item_Barcode');
        $itemInfo = ItemsBarcode::with('itemsBarcode')->where('ITB_Barcode', $itemBarcode)->first();
        if ($itemInfo != null) {
            $data = [
                'ItemInfo' => $itemInfo,
            ];
        } else {
            $data = [
                'ItemInfo' => 'null',
            ];
        }


        return response()->json($data);
    }

    public function GetItemsQuantitiesAnaPrice(Request $request)
    {
        $ItemGuid = $request->input('ItemGuid');
        $colName = $request->input('ColName');

        switch ($colName) {
            case 'Item_Count':
                $itemcount = ItemsThree::with('itemtwos')
                    ->select('IT2_StoreName')
                    ->addSelect([
                        'Store_Name' => Stories::select('St_Name')
                            ->whereColumn('IT2_StoreName', 'St_Guid')
                    ])
                    ->selectRaw('(SELECT SUM(IT2_Count) FROM itemsthrees WHERE IT2_FK_IT = ? AND (IT2_BillType = 1 OR IT2_BillType = 5)) -
                             (SELECT SUM(IT2_Count) FROM itemsthrees WHERE IT2_FK_IT = ? AND (IT2_BillType = 2 OR IT2_BillType = 4)) AS Item_Count', [$ItemGuid, $ItemGuid])
                    ->where('IT2_FK_IT', $ItemGuid)
                    ->groupBy('IT2_StoreName')
                    ->get();
                $data = [
                    'ItemCount' => $itemcount,
                ];
                break;
            case 'Item_Price':
                $itemPrice = Itemstwo::where('id', $ItemGuid)
                    ->first();
                $data = [
                    'ItemPrice' => $itemPrice,
                ];

                break;

            default:
                # code...
                break;
        }


        return response()->json($data);
    }

    function GetRowID(Request $request)
    {
        $CustGuid = $request->input('CustomerGuid');
        $SalesGroup = CustomerSupplier::find($CustGuid)->Cs_GroupSales;

        $RowID = SalesGroup::find($SalesGroup)->Gs_RowID;
        $data = [
            'GetRowID' => $RowID,
        ];

        return response()->json($data);
    }

    function GetBillsDeliveryOrReceive(Request $request)
    {
        $guid = $request->input('Guid');
        $currencyEqual = $request->input('CurrencyEqual');
        $CustGuid = $request->input('CustomerGuid');
        $SalesGroup = CustomerSupplier::find($CustGuid)->Cs_GroupSales;
        $RowID = SalesGroup::find($SalesGroup) ? SalesGroup::find($SalesGroup)->Gs_RowID : 0;

        $data = [
            'getBillDOR' => BillBody::addSelect([
                'Item_Name' => Itemstwo::select('IT_Name')
                    ->whereColumn('Item_Guid', 'id'), // Use the correct table and column names
                'Item_PartNumber' => Itemstwo::select('IT_PartNumber')
                    ->whereColumn('Item_Guid', 'id') // Use the correct table and column names
            ])
                ->where('Header_Guid', $guid)
                ->get()
                ->map(function ($item) use ($RowID, $currencyEqual) {
                    $item['Guid'] = '00000000-0000-0000-0000-000000000000';
                    $item['Header_Guid'] = '00000000-0000-0000-0000-000000000000';
                    $item['CostPrice'] = $this->GetLastCostPriceByItem($item['Item_Guid'], 'فاتورة مبيعات', $currencyEqual) ?
                        $this->GetLastCostPriceByItem($item['Item_Guid'], 'فاتورة مبيعات', $currencyEqual) : 0;
                    $item['Item_Price'] = $this->GetItemPrice($RowID, $item['Item_Guid']);
                    $item['Item_Price_Total'] = $item['Item_Price'] * $item['Item_Count'];
                    $item['Item_Price_Final'] = ($item['Item_Price_Total'] - $item['Item_Discount']) + $item['Item_Extra'];
                    $item['Profits'] = $item['Item_Price_Final'] - ($item['CostPrice'] * $item['Item_Count']);

                    return $item;
                }),
        ];

        return response()->json($data);
    }

    function GetLastCostPrice(Request $request)
    {
        $itemGuid = $request->input('ItemGuid');
        $billType = $request->input('BillType');
        $currencyEqual = $request->input('CurrencyEqual');
        switch ($billType) {
            case 'فاتورة مبيعات':

                $getBillType = BillSetting::where('FormText', 'فاتورة مشتريات')->first();
                $data = [
                    'costPrice' => BillBody::join('Tb_Bill_Header', 'Tb_Bill_Header.Guid', '=', 'Tb_Bill_Body.Header_Guid')
                        ->where([
                            ['Item_Guid', $itemGuid],
                            ['Tb_Bill_Header.Bill_Type', $getBillType->Bill_Type_FK]
                        ])
                        ->latest()
                        ->select('Tb_Bill_Body.*', 'Tb_Bill_Header.created_at as header_created_at')
                        // ->orderBy('body_created_at','desc')
                        ->first()
                        ->map(function ($item) use ($currencyEqual) {
                            $item['CostPrice'] = $item['CostPrice'] > $currencyEqual ? $item['CostPrice'] * $item['Currency_Equal'] : ($item['CostPrice'] * $item['Currency_Equal']) / $currencyEqual;
                            return $item;
                        }),
                ];
                $costPrice = $data['CostPrice'];
                return response()->json($costPrice);
                break;

            default:
                $costPrice = 'null';
                return response()->json($costPrice);
                break;
        }
    }
    function GetLastCostPriceByItem($ItemGuid, $BillType, $CurrencyEqual)
    {
        $itemGuid = $ItemGuid;
        $billType = $BillType;
        $currencyEqual = $CurrencyEqual;
        switch ($billType) {
            case 'فاتورة مبيعات':

                $getBillType = BillSetting::where('FormText', 'فاتورة مشتريات')->first();
                $data = [
                    'costPrice' => BillBody::join('Tb_Bill_Header', 'Tb_Bill_Header.Guid', '=', 'Tb_Bill_Body.Header_Guid')
                        ->where([
                            ['Item_Guid', $itemGuid],
                            ['Tb_Bill_Header.Bill_Type', $getBillType->Bill_Type_FK]
                        ])
                        // ->latest()
                        ->select('Tb_Bill_Body.*', 'Tb_Bill_Header.created_at as header_created_at')
                        // ->first(),
                        // ->select('Tb_Bill_Body.CostPrice')
                        ->get()->map(function ($item) use ($currencyEqual) {
                            $item['CostPrice'] = $item['CostPrice'] > $currencyEqual ? $item['CostPrice'] * $item['Currency_Equal'] : ($item['CostPrice'] * $item['Currency_Equal']) / $currencyEqual;
                            return $item;
                        }),
                ];
                $costPrices = $data['costPrice']->pluck('CostPrice')->toArray();

                return count($costPrices) > 0 ? array_sum($costPrices) / count($costPrices) : 0;
                // return $data['costPrice'] ? $data['costPrice']->CostPrice : 0;
                break;

            default:
                $data = [
                    'costPrice' => 0
                ];
                return $data['costPrice'];
                break;
        }
    }
    function GetLastCostPriceByItem2(Request $request)
    {
        $itemGuid =  $request->input('ItemGuid');
        $billType = $request->input('BillType');
        $currencyEqual = $request->input('Currency_Equal');
        switch ($billType) {
            case 'فاتورة مبيعات':

                $getBillType = BillSetting::where('FormText', 'فاتورة مشتريات')->first();
                $data = [
                    'costPrice' => BillBody::join('Tb_Bill_Header', 'Tb_Bill_Header.Guid', '=', 'Tb_Bill_Body.Header_Guid')
                        ->where([
                            ['Item_Guid', $itemGuid],
                            ['Tb_Bill_Header.Bill_Type', $getBillType->Bill_Type_FK]
                        ])
                        // ->latest()
                        ->select('Tb_Bill_Body.*', 'Tb_Bill_Header.created_at as header_created_at')
                        // ->first(),
                        // ->select('Tb_Bill_Body.CostPrice')
                        ->get()
                        ->map(function ($item) use ($currencyEqual) {
                            $item['CostPrice'] = $item['CostPrice'] > $currencyEqual ? $item['CostPrice'] * $item['Currency_Equal'] : ($item['CostPrice'] * $item['Currency_Equal']) / $currencyEqual;
                            return $item;
                        }),
                ];
                $costPrices = $data['costPrice']->pluck('CostPrice')->toArray();

                return count($costPrices) > 0 ? array_sum($costPrices) / count($costPrices) : 0;

                break;

            default:
                $data = [
                    'costPrice' => 0
                ];
                return $data['costPrice'];
                break;
        }
    }


    function GetItemPrice($RowID, $ItemGuid)
    {
        $iteminfo = Itemstwo::find($ItemGuid);

        if ($iteminfo->IT_ItemUnitDefualt === '1') {
            switch ($RowID) {
                case '1':
                    return $iteminfo->IT_Normal_1_1;
                    break;
                case '2':
                    return $iteminfo->IT_Mid_1_1;
                    break;
                case '3':
                    return $iteminfo->IT_Good_1_1;
                    break;
                case '4':
                    return $iteminfo->IT_VeryGood_1_1;
                    break;
                case '5':
                    return $iteminfo->IT_Excellent_1_1;
                    break;
                case '6':
                    return $iteminfo->IT_Supper_1_1;
                    break;

                default:
                    return $iteminfo->IT_Normal_1_1;
                    break;
            }
        } else if ($iteminfo->IT_ItemUnit2Defualt === '1') {
            switch ($RowID) {
                case '1':
                    return $iteminfo->IT_Normal_2_1;
                    break;
                case '2':
                    return $iteminfo->IT_Mid_2_1;
                    break;
                case '3':
                    return $iteminfo->IT_Good_2_1;
                    break;
                case '4':
                    return $iteminfo->IT_VeryGood_2_1;
                    break;
                case '5':
                    return $iteminfo->IT_Excellent_2_1;
                    break;
                case '6':
                    return $iteminfo->IT_Supper_2_1;
                    break;

                default:
                    return $iteminfo->IT_Normal_2_1;
                    break;
            }
        } else {
            switch ($RowID) {
                case '1':
                    return $iteminfo->IT_Normal_3_1;
                    break;
                case '2':
                    return $iteminfo->IT_Mid_3_1;
                    break;
                case '3':
                    return $iteminfo->IT_Good_3_1;
                    break;
                case '4':
                    return $iteminfo->IT_VeryGood_3_1;
                    break;
                case '5':
                    return $iteminfo->IT_Excellent_3_1;
                    break;
                case '6':
                    return $iteminfo->IT_Supper_3_1;
                    break;

                default:
                    return $iteminfo->IT_Normal_3_1;
                    break;
            }
        }
    }

    function UpdateOrCreateBonds($info)
    {
        $getinfoBond = Bonds::where('Source_Guid', $info['headerGuid'])->get();
        // $getDocNumber = Bonds::where('st_Guid', '39b27745-39eb-4b56-a584-cbc9dda29359')
        //     ->max('Bond_Number');

        $parentGuidBond = strtoupper(Uuid::uuid4()->toString());
        $Vou_Row_No = 0;
        switch ($info['BillType']) {
            case 1:
                if ($info['Total_Add'] == 0) {
                    if ($info['PayType'] === '1') {
                        Bonds::where('Source_Guid', $info['headerGuid'])->delete();
                        $getDocNumber = Bonds::where('st_Guid', '39b27745-39eb-4b56-a584-cbc9dda29359')
                            ->max('Bond_Number');
                        $getDocNumber = $getDocNumber ? $getDocNumber + 1 : 1;

                        for ($i = 0; $i < 4; $i++) {

                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Acc_Guid'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => $info['Total_Price_Bill'],
                                    'Debit' => 0,
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );

                            $Vou_Row_No++;
                            $i++;
                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Cust_Guid'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => 0,
                                    'Debit' => $info['Total_Price_Bill'],
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );
                            $Vou_Row_No++;
                            $i++;
                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Cust_Guid'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => $info['Total_Price_Bill'],
                                    'Debit' => 0,
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );
                            $Vou_Row_No++;
                            $i++;
                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Bill_Account'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => 0,
                                    'Debit' => $info['Total_Price_Bill'],
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );
                            $i++;
                        }
                    } else {
                        Bonds::where('Source_Guid', $info['headerGuid'])->delete();
                        $getDocNumber = Bonds::where('st_Guid', '39b27745-39eb-4b56-a584-cbc9dda29359')
                            ->max('Bond_Number');
                        $getDocNumber = $getDocNumber ? $getDocNumber + 1 : 1;

                        for ($i = 0; $i < 2; $i++) {

                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Cust_Guid'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => $info['Total_Price_Bill'],
                                    'Debit' => 0,
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );

                            $Vou_Row_No++;
                            $i++;
                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Bill_Account'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => 0,
                                    'Debit' => $info['Total_Price_Bill'],
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );

                            $i++;
                        }
                    }
                } else {
                    if ($info['PayType'] === '1') {
                        Bonds::where('Source_Guid', $info['headerGuid'])->delete();
                        $getDocNumber = Bonds::where('st_Guid', '39b27745-39eb-4b56-a584-cbc9dda29359')
                            ->max('Bond_Number');
                        $getDocNumber = $getDocNumber ? $getDocNumber + 1 : 1;

                        for ($i = 0; $i < 5; $i++) {

                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Acc_Guid'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => $info['Total_Price_Bill'],
                                    'Debit' => 0,
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );

                            $Vou_Row_No++;
                            $i++;
                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Cust_Guid'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => 0,
                                    'Debit' => $info['Total_Price_Bill'] - $info['Total_Add'],
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );
                            $Vou_Row_No++;
                            $i++;
                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Cust_Guid'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => $info['Total_Price_Bill'] - $info['Total_Add'],
                                    'Debit' => 0,
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );
                            $Vou_Row_No++;
                            $i++;
                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Bill_Account'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => 0,
                                    'Debit' => $info['Total_Price_Bill'] - $info['Total_Add'],
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );
                            $Vou_Row_No++;
                            $i++;
                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Discount_Account'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => 0,
                                    'Debit' => $info['Total_Add'],
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );
                            $i++;
                        }
                    } else {
                        Bonds::where('Source_Guid', $info['headerGuid'])->delete();
                        $getDocNumber = Bonds::where('st_Guid', '39b27745-39eb-4b56-a584-cbc9dda29359')
                            ->max('Bond_Number');
                        $getDocNumber = $getDocNumber ? $getDocNumber + 1 : 1;

                        for ($i = 0; $i < 3; $i++) {

                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Cust_Guid'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => $info['Total_Price_Bill'] - $info['Total_Add'],
                                    'Debit' => 0,
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );

                            $Vou_Row_No++;
                            $i++;
                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Bill_Account'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => 0,
                                    'Debit' => $info['Total_Price_Bill'] - $info['Total_Add'],
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );
                            $Vou_Row_No++;
                            $i++;
                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Discount_Account'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => 0,
                                    'Debit' =>  $info['Total_Add'],
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );
                            $i++;
                        }
                    }
                }

                break;
            case 2:
                if ($info['Total_Discount'] == 0) {
                    if ($info['PayType'] === '1') {
                        Bonds::where('Source_Guid', $info['headerGuid'])->delete();
                        $getDocNumber = Bonds::where('st_Guid', '39b27745-39eb-4b56-a584-cbc9dda29359')
                            ->max('Bond_Number');
                        $getDocNumber = $getDocNumber ? $getDocNumber + 1 : 1;

                        for ($i = 0; $i < 4; $i++) {

                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Acc_Guid'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => 0,
                                    'Debit' => $info['Total_Price_Bill'],
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );

                            $Vou_Row_No++;
                            $i++;
                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Cust_Guid'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => 0,
                                    'Debit' => $info['Total_Price_Bill'],
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );
                            $Vou_Row_No++;
                            $i++;
                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Cust_Guid'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => $info['Total_Price_Bill'],
                                    'Debit' => 0,
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );
                            $Vou_Row_No++;
                            $i++;
                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Bill_Account'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => $info['Total_Price_Bill'],
                                    'Debit' => 0,
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );
                            $i++;
                        }
                    } else {
                        Bonds::where('Source_Guid', $info['headerGuid'])->delete();
                        $getDocNumber = Bonds::where('st_Guid', '39b27745-39eb-4b56-a584-cbc9dda29359')
                            ->max('Bond_Number');
                        $getDocNumber = $getDocNumber ? $getDocNumber + 1 : 1;

                        for ($i = 0; $i < 2; $i++) {

                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Cust_Guid'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => 0,
                                    'Debit' => $info['Total_Price_Bill'],
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );

                            $Vou_Row_No++;
                            $i++;
                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Bill_Account'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => $info['Total_Price_Bill'],
                                    'Debit' => 0,
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );

                            $i++;
                        }
                    }
                } else {
                    if ($info['PayType'] === '1') {
                        Bonds::where('Source_Guid', $info['headerGuid'])->delete();
                        $getDocNumber = Bonds::where('st_Guid', '39b27745-39eb-4b56-a584-cbc9dda29359')
                            ->max('Bond_Number');
                        $getDocNumber = $getDocNumber ? $getDocNumber + 1 : 1;

                        for ($i = 0; $i < 5; $i++) {

                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Acc_Guid'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => 0,
                                    'Debit' => $info['Total_Price_Bill'],
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );

                            $Vou_Row_No++;
                            $i++;
                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Cust_Guid'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => 0,
                                    'Debit' => $info['Total_Price_Bill'] + $info['Total_Discount'],
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );
                            $Vou_Row_No++;
                            $i++;
                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Cust_Guid'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => $info['Total_Price_Bill'] + $info['Total_Discount'],
                                    'Debit' => 0,
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );
                            $Vou_Row_No++;
                            $i++;
                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Bill_Account'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => $info['Total_Price_Bill'] + $info['Total_Discount'],
                                    'Debit' => 0,
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );
                            $Vou_Row_No++;
                            $i++;
                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Discount_Account'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' =>  0,
                                    'Debit' => $info['Total_Discount'],
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );
                            $i++;
                        }
                    } else {
                        Bonds::where('Source_Guid', $info['headerGuid'])->delete();
                        $getDocNumber = Bonds::where('st_Guid', '39b27745-39eb-4b56-a584-cbc9dda29359')
                            ->max('Bond_Number');
                        $getDocNumber = $getDocNumber ? $getDocNumber + 1 : 1;

                        for ($i = 0; $i < 3; $i++) {

                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Cust_Guid'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => 0,
                                    'Debit' => $info['Total_Price_Bill'],
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );

                            $Vou_Row_No++;
                            $i++;
                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Bill_Account'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => $info['Total_Price_Bill'] + $info['Total_Discount'],
                                    'Debit' => 0,
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );
                            $Vou_Row_No++;
                            $i++;
                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => strtoupper(Uuid::uuid4()->toString()),

                                ],
                                [
                                    'Parent_Guid' => $parentGuidBond,
                                    'Bond_Number' => $getDocNumber,
                                    'Doc_Number' => $info['Doc_Number'],
                                    'Acc_Guid' => $info['Discount_Account'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $info['headerGuid'],
                                    'Datex' => $info['Datex'],
                                    'Currency_Guid' => $info['Currency_Guid'],
                                    'Currency_Equal' => $info['Currency_Equal'],
                                    'st_Guid' => '39b27745-39eb-4b56-a584-cbc9dda29359',
                                    'Vou_Type' => 3,
                                    'Is_Bill' => true,
                                    // 'isAccept' => $IsAccept,
                                    'IsPaidBill' => true,
                                    // 'isLock' => $IsLock,
                                    'Notes' => $info['Notes'],
                                    'Credit' => 0,
                                    'Debit' => $info['Total_Discount'],
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );

                            $i++;
                        }
                    }
                }



                break;
            default:
                # code...
                break;
        }
    }

    function CreatePrint(Request $request)
    {
        $headerGuid = $request->input('Header_Guid');
        $request->session()->put('Header_Guid', $headerGuid);
    }

    function BillPrint(Request $request)
    {

        $mpdf = new \Mpdf\Mpdf([
            'mode' => 'utf-8',
            'format' => 'A4',
            'margin_left' => 0,
            'margin_right' => 0,
            'margin_top' => 50,
            'margin_bottom' => 10,
            'margin_header' => 3,
            'margin_footer' => 5,
        ]);
        $mpdf->autoScriptToLang = true;
        $mpdf->autoLangToFont = true;
        $footer = $this->Setfooter();
        $header = $this->Setheader();
        $mpdf->SetHTMLHeader($header);
        $mpdf->SetHTMLFooter($footer);
        $stylesheet = file_get_contents(url('assets/css/Pro_css/PrintBill.css'));
        try {
            $html = $this->PrintPage();
            $mpdf->WriteHTML($stylesheet, 1);
            $mpdf->WriteHTML($html);
            return redirect()->to($mpdf->Output('filename.pdf', 'I'));
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function PrintPage()
    {
        $Guid = session('Header_Guid');
        $billHeader = BillHeader::find($Guid);
        $billHeader->Pay_Type = ($billHeader->Pay_Type) == 1 ? 'نقدي' : 'آجل';
        $billHeader->Cust_Guid = AccountTree::find($billHeader->Cust_Guid)->Ac_Name;
        $billHeader->Store_Guid = Stories::find($billHeader->Store_Guid)->St_Name;
        $billHeader->Currency_Guid = Currency::find($billHeader->Currency_Guid)->Cur_Name;

        $billFooter = BillFooter::where('Header_Guid', $Guid)->first();
        $billItems = BillBody::addSelect(['Item_PartNumber' => Itemstwo::select('IT_PartNumber')
            ->whereColumn('Item_Guid', 'id')])
            ->where('Header_Guid', $Guid)->get()
            ->map(function ($item) {
                $item['Item_Guid'] = Itemstwo::find($item['Item_Guid'])->IT_ArabicName;

                return $item;
            });
        $query = [
            'BillHeader' => $billHeader,
            'BillFooter' => $billFooter,
            'BillItems' => $billItems,
            'Count' => 0,

        ];


        return view('bills.billprint', $query);
    }

    public function Setheader()
    {
        $Guid = session('Header_Guid');
        $billHeader = BillHeader::find($Guid);
        $billName = BillSetting::where('Bill_Type_FK', $billHeader->Bill_Type)->first()->FormText;
        $query = [
            'BillName' => $billName,
        ];
        return view('bills.billheader', $query)->render();
    }

    public function Setfooter()
    {
        return view('bills.billfooter')->render();
    }
}
