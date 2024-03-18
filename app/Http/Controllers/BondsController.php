<?php

namespace App\Http\Controllers;

use App\Models\AccountTree;
use App\Models\Bonds;
use App\Models\BondsSetting;
use App\Models\Currency;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;


class BondsController extends Controller
{

    public function index(Request $request)
    {
        if (session()->has('User')) {
            $data = [
                'BondType' => $request->input('BondType'),
            ];
            return view('bonds.index', $data);
        }
    }


    public function create(Request $request)
    {
        $getBond = $request->input('B_Guid');
        $BondType = $request->input('BondType');
        $BondTypeSetting = BondsSetting::where('Form_Text', $BondType)->first();

        $data = [

            'getAccounts' => AccountTree::select('Guid', 'Ac_Name', 'Ac_Code_Mask')->orderBy('Ac_RowID', 'ASC')->get(),
            'getBonds' => Bonds::where('Guid', $getBond)->get(),
            'State' => $BondTypeSetting,

        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {

        $Note = $request->post('B_Note');
        $DocNumber = $request->post('B_Doc_Number');
        $BondNumber = $request->post('B_Bond_Number');
        $Datex = $request->post('B_Datex');
        $Account = $request->post('B_Account');
        $StGuid = $request->post('B_st_Guid');
        $BondType = $request->post('B_Bond_Type');
        $CurrencyGuid = $request->post('B_Currency_Guid');
        $CurrencyEqual = $request->post('B_Currency_Equal');
        $IsBill = $request->post('B_IsBill');
        $IsAccept = $request->post('B_IsAccept');
        $IsLock = $request->post('B_IsLock');
        $IsPaidBill = $request->post('B_IsPaidBill');

        $BondBody = $request->post('Bond_Body');


        if (empty($BondBody)) {
        } else {
            $ParentGuidBody = "";
            // $Vou_Row_No = 0;
            $countZero = 0;
            for ($j = 0; $j < count($BondBody); $j++) {
                if ($BondBody[$j]['Guid'] === '00000000-0000-0000-0000-000000000000')
                    $countZero++;
            }
            if ($countZero == count($BondBody)) {

                $ParentGuidBody = strtoupper(Uuid::uuid4()->toString());
            } else {
                for ($k = 0; $k < count($BondBody); $k++) {
                    if ($BondBody[$k]['Parent_Guid'] !== '00000000-0000-0000-0000-000000000000') {
                        $ParentGuidBody = $BondBody[$k]['Parent_Guid'];
                    }
                }
            }
            for ($i = 0; $i < count($BondBody); $i++) {
                switch ($BondType) {
                    case "1":
                        $guidBody = $BondBody[$i]['Guid'];
                        if ($guidBody === '00000000-0000-0000-0000-000000000000') {
                            $guidBody = strtoupper(Uuid::uuid4()->toString());
                            $guidBodyGuid = strtoupper(Uuid::uuid4()->toString());
                            $guidBody2 = $ParentGuidBody;

                            $Vou_Row_No = Bonds::where([['Bond_Number', $BondNumber], ['st_Guid', $StGuid]])->max('Vou_Row_No');
                            if ($Vou_Row_No == null || $Vou_Row_No == 0) {
                                $Vou_Row_No = 0;
                            } else {
                                $Vou_Row_No = $Vou_Row_No + 1;
                            }



                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => $guidBody,

                                ],
                                [
                                    'Parent_Guid' => $guidBody2,
                                    'Bond_Number' => $BondNumber,
                                    'Doc_Number' => $DocNumber,
                                    'Acc_Guid' => $Account,
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $ParentGuidBody,
                                    'Datex' => $Datex,
                                    'Currency_Guid' => $CurrencyGuid,
                                    'Currency_Equal' => $CurrencyEqual,
                                    'st_Guid' => $StGuid,
                                    'Vou_Type' => $BondType,
                                    'Is_Bill' => $IsBill,
                                    'isAccept' => $IsAccept,
                                    'IsPaidBill' => $IsPaidBill,
                                    'isLock' => $IsLock,
                                    'Notes' => $Note,
                                    'NotesAll' => $BondBody[$i]['NotesAll'],
                                    'Credit' => 0,
                                    'Debit' => $BondBody[$i]['Credit'],
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );
                            $Vou_Row_No++;
                            $Bond_Body2 =  Bonds::updateOrCreate(
                                [
                                    'Guid' => $guidBodyGuid,

                                ],
                                [
                                    'Parent_Guid' => $guidBody2,
                                    'Bond_Number' => $BondNumber,
                                    'Doc_Number' => $DocNumber,
                                    'Acc_Guid' => $BondBody[$i]['Acc_Guid'],
                                    'Acc_Contra_Guid' => $Account,
                                    'Source_Guid' => $ParentGuidBody,
                                    'Datex' => $Datex,
                                    'Currency_Guid' => $CurrencyGuid,
                                    'Currency_Equal' => $CurrencyEqual,
                                    'st_Guid' => $StGuid,
                                    'Vou_Type' => $BondType,
                                    'Is_Bill' => $IsBill,
                                    'isAccept' => $IsAccept,
                                    'IsPaidBill' => $IsPaidBill,
                                    'isLock' => $IsLock,
                                    'NotesAll' => $BondBody[$i]['NotesAll'],
                                    'Notes' => $Note,
                                    'Credit' => $BondBody[$i]['Credit'],
                                    'Debit' => 0,
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );
                        } else {

                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => $guidBody,

                                ],
                                [
                                    'Acc_Guid' => $Account,
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Currency_Guid' => $CurrencyGuid,
                                    'Currency_Equal' => $CurrencyEqual,
                                    'Notes' => $Note,
                                    'NotesAll' => $BondBody[$i]['NotesAll'],
                                    'Credit' => 0,
                                    'Debit' => $BondBody[$i + 1]['Credit'],
                                ]
                            );

                            $i++;
                            $guidBodyGuid = $BondBody[$i]['Guid'];
                            $Bond_Body2 =  Bonds::updateOrCreate(
                                [
                                    'Guid' => $guidBodyGuid,

                                ],
                                [
                                    'Acc_Guid' => $BondBody[$i]['Acc_Guid'],
                                    'Acc_Contra_Guid' => $Account,
                                    'Currency_Guid' => $CurrencyGuid,
                                    'Currency_Equal' => $CurrencyEqual,
                                    'NotesAll' => $BondBody[$i]['NotesAll'],
                                    'Notes' => $Note,
                                    'Credit' => $BondBody[$i]['Credit'],
                                    'Debit' => 0,

                                ]
                            );
                        }
                        break;
                    case "2":
                        $guidBody = $BondBody[$i]['Guid'];
                        if ($guidBody === '00000000-0000-0000-0000-000000000000') {
                            $guidBody = strtoupper(Uuid::uuid4()->toString());
                            $guidBodyGuid = strtoupper(Uuid::uuid4()->toString());
                            $guidBody2 = $ParentGuidBody;

                            $Vou_Row_No = Bonds::where([['Bond_Number', $BondNumber], ['st_Guid', $StGuid]])->max('Vou_Row_No');
                            if ($Vou_Row_No == null || $Vou_Row_No == 0) {
                                $Vou_Row_No = 0;
                            } else {
                                $Vou_Row_No = $Vou_Row_No + 1;
                            }



                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => $guidBody,

                                ],
                                [
                                    'Parent_Guid' => $guidBody2,
                                    'Bond_Number' => $BondNumber,
                                    'Doc_Number' => $DocNumber,
                                    'Acc_Guid' => $Account,
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $ParentGuidBody,
                                    'Datex' => $Datex,
                                    'Currency_Guid' => $CurrencyGuid,
                                    'Currency_Equal' => $CurrencyEqual,
                                    'st_Guid' => $StGuid,
                                    'Vou_Type' => $BondType,
                                    'Is_Bill' => $IsBill,
                                    'isAccept' => $IsAccept,
                                    'IsPaidBill' => $IsPaidBill,
                                    'isLock' => $IsLock,
                                    'Notes' => $Note,
                                    'NotesAll' => $BondBody[$i]['NotesAll'],
                                    'Credit' => $BondBody[$i]['Debit'],
                                    'Debit' => 0,
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );
                            $Vou_Row_No++;
                            $Bond_Body2 =  Bonds::updateOrCreate(
                                [
                                    'Guid' => $guidBodyGuid,

                                ],
                                [
                                    'Parent_Guid' => $guidBody2,
                                    'Bond_Number' => $BondNumber,
                                    'Doc_Number' => $DocNumber,
                                    'Acc_Guid' => $BondBody[$i]['Acc_Guid'],
                                    'Acc_Contra_Guid' => $Account,
                                    'Source_Guid' => $ParentGuidBody,
                                    'Datex' => $Datex,
                                    'Currency_Guid' => $CurrencyGuid,
                                    'Currency_Equal' => $CurrencyEqual,
                                    'st_Guid' => $StGuid,
                                    'Vou_Type' => $BondType,
                                    'Is_Bill' => $IsBill,
                                    'isAccept' => $IsAccept,
                                    'IsPaidBill' => $IsPaidBill,
                                    'isLock' => $IsLock,
                                    'NotesAll' => $BondBody[$i]['NotesAll'],
                                    'Notes' => $Note,
                                    'Credit' =>0 ,
                                    'Debit' => $BondBody[$i]['Debit'],
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );
                        } else {

                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => $guidBody,

                                ],
                                [
                                    'Acc_Guid' => $Account,
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Currency_Guid' => $CurrencyGuid,
                                    'Currency_Equal' => $CurrencyEqual,
                                    'Notes' => $Note,
                                    'NotesAll' => $BondBody[$i]['NotesAll'],
                                    'Credit' => $BondBody[$i + 1]['Credit'],
                                    'Debit' => 0,
                                ]
                            );

                            $i++;
                            $guidBodyGuid = $BondBody[$i]['Guid'];
                            $Bond_Body2 =  Bonds::updateOrCreate(
                                [
                                    'Guid' => $guidBodyGuid,

                                ],
                                [
                                    'Acc_Guid' => $BondBody[$i]['Acc_Guid'],
                                    'Acc_Contra_Guid' => $Account,
                                    'Currency_Guid' => $CurrencyGuid,
                                    'Currency_Equal' => $CurrencyEqual,
                                    'NotesAll' => $BondBody[$i]['NotesAll'],
                                    'Notes' => $Note,
                                    'Credit' =>0 ,
                                    'Debit' => $BondBody[$i]['Credit'],

                                ]
                            );
                        }
                        break;
                    default:
                        $guidBody = $BondBody[$i]['Guid'];
                        if ($guidBody === '00000000-0000-0000-0000-000000000000') {
                            $guidBody = strtoupper(Uuid::uuid4()->toString());
                            $guidBodyGuid = strtoupper(Uuid::uuid4()->toString());
                            $guidBody2 = $ParentGuidBody;

                            $Vou_Row_No = Bonds::where([['Bond_Number', $BondNumber], ['st_Guid', $StGuid]])->max('Vou_Row_No');
                            if ($Vou_Row_No == null || $Vou_Row_No == 0) {
                                $Vou_Row_No = 0;
                            } else {
                                $Vou_Row_No = $Vou_Row_No + 1;
                            }



                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => $guidBody,
                                ],
                                [
                                    'Parent_Guid' => $guidBody2,
                                    'Bond_Number' => $BondNumber,
                                    'Doc_Number' => $DocNumber,
                                    'Acc_Guid' => $BondBody[$i]['Acc_Guid'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $ParentGuidBody,
                                    'Datex' => $Datex,
                                    'Currency_Guid' => $CurrencyGuid,
                                    'Currency_Equal' => $CurrencyEqual,
                                    'st_Guid' => $StGuid,
                                    'Vou_Type' => $BondType,
                                    'Is_Bill' => $IsBill,
                                    'isAccept' => $IsAccept,
                                    'IsPaidBill' => $IsPaidBill,
                                    'isLock' => $IsLock,
                                    'Notes' => $Note,
                                    'NotesAll' => $BondBody[$i]['NotesAll'],
                                    'Credit' => $BondBody[$i]['Credit'],
                                    'Debit' => $BondBody[$i]['Debit'],
                                    'Vou_Row_No' => $Vou_Row_No,

                                ]
                            );
                            $Vou_Row_No++;
                        } else {

                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => $guidBody,
                                ],
                                [
                                    'Acc_Guid' => $BondBody[$i]['Acc_Guid'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Currency_Guid' => $CurrencyGuid,
                                    'Currency_Equal' => $CurrencyEqual,
                                    'Notes' => $Note,
                                    'NotesAll' => $BondBody[$i]['NotesAll'],
                                    'Credit' => $BondBody[$i]['Credit'],
                                    'Debit' => $BondBody[$i]['Debit'],
                                ]
                            );
                        }
                        break;
                }
            }
        }


        return response()->json(['status' => 'تم اجراء العملية بنجاح']);
    }


    public function show(Request $request)
    {
        // where('Acc_Contra_Guid','!=','00000000-0000-0000-0000-000000000000')->
        $B_Guid = $request->input('B_Guid');
        $B_Type = $request->input('B_Type');
        $getParentGuid = Bonds::where([['Bond_Number', $B_Guid], ['Vou_Type', $B_Type]])->select('Parent_Guid')->first()->Parent_Guid;
        $BondInfo = Bonds::where('Parent_Guid', $getParentGuid)->orderBy('Vou_Row_No')->get();

        $data = [
            'getBondBody' => $BondInfo,
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
        // $guid = $request->post('Guid');
        // if (BillBody::find($guid)) {
        //     $itemthreeGuid = ItemsThree::where('IT2_BillGuid', $guid)->first()->id;
        //     $itemGuid = ItemsThree::where('IT2_BillGuid', $guid)->first()->IT2_FK_IT;
        //     BillBody::find($guid)->delete();
        //     ItemsThree::find($itemthreeGuid)->delete();
        //     $this->updateItemCount($itemGuid);

        //     return response()->json(['status' => 'Deleting Successfully...']);
        // } else if (BillDiscount::find($guid)) {
        //     BillDiscount::find($guid)->delete();
        //     return response()->json(['status' => 'Deleting Successfully...']);
        // }
    }

    public function filldata(Request $request)
    {
        $BondType = $request->input('BondType');
        $getBondType = BondsSetting::where('Form_Text', $BondType)->first();
        $data = [
            'getAccounts' => AccountTree::select('Guid', 'Ac_Name', 'Ac_Code_Mask')->orderBy('Ac_RowID', 'ASC')->get(),
            'getCurrency' => Currency::all(),
            'defualtAccount' => $getBondType->Acc_Guid,
            'getBondsType' => BondsSetting::all(),
            'defualtCurrencyGuid' => $getBondType->CurrencyGuid,
            'defualtCurrencyEqual' => Currency::where('Cur_Guid', $getBondType->CurrencyGuid)->first()->Cur_Cost,
            'getBonds' => $getBondType,
            'getBondsNumbers' => Bonds::select('Bond_Number')->where('Vou_Type', $getBondType->id)->groupBy('Bond_Number')->get(),
        ];
        return response()->json($data);

    }

    public function getBondNumber(Request $request)
    {
        $BondType = $request->input('BondType');
        $BondNumber = Bonds::where('Vou_Type', $BondType)->max('Bond_Number');
        $data = [
            'BondNumber' => $BondNumber ? $BondNumber : 0,
        ];
        return response()->json($data);
    }


}
