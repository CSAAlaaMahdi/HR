<?php

namespace App\Http\Controllers;

use App\Models\AccountTree;
use App\Models\Bonds;
use App\Models\BondsSetting;
use App\Models\Currency;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;


class BondsSettingController extends Controller
{

    public function index(Request $request)
    {
        if (session()->has('User')) {
            $data = [
                'BondsSetting' => '',
            ];
            return view('bonds.voucherSetting', $data);
        }
    }


    public function create(Request $request)
    {




    }


    public function store(Request $request)
    {

        $BondsSetting = BondsSetting::updateOrCreate(
            [
                'id' => $request->post('id'),
            ],
            [
                'st_Guid' => $request->post('st_Guid'),
                'RowsNoGrid' => $request->post('RowsNoGrid'),
                'No_Copy_Print' => $request->post('No_Copy_Print'),
                'txtUser01Optional' => $request->post('txtUser01Optional'),
                'txtUser02Optional' => $request->post('txtUser02Optional'),
                'txtUser03Optional' => $request->post('txtUser03Optional'),
                'txtUser04Optional' => $request->post('txtUser04Optional'),
                'Debit_Visible' => $request->post('Debit_Visible'),
                'Credit_Visible' => $request->post('Credit_Visible'),
                'NoteAll_Visible' => $request->post('NoteAll_Visible'),
                'Note_Acc_Visible' => $request->post('Note_Acc_Visible'),
                'Acc_Guid_Visible' => $request->post('Acc_Guid_Visible'),
                'txtUserVisible01' => $request->post('txtUserVisible01'),
                'txtUserVisible02' => $request->post('txtUserVisible02'),
                'txtUserVisible03' => $request->post('txtUserVisible03'),
                'txtUserVisible04' => $request->post('txtUserVisible04'),
                'CurrencyVisible' => $request->post('CurrencyVisible'),
                'BranchVisible' => $request->post('BranchVisible'),
                'CostVisible' => $request->post('CostVisible'),
                'SaveAndNew' => $request->post('SaveAndNew'),
                'AcceptZero' => $request->post('AcceptZero'),
                'Save_And_Print' => $request->post('SaveAndPrint'),
            ]
            );

        return response()->json(['status' => 'تم اجراء العملية بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('BondsSettingID');
        $getBondsSetting = BondsSetting::find($id);
        $getBondsSetting->Debit_Visible = $getBondsSetting->Debit_Visible > 0 ? True:False;
        $getBondsSetting->Credit_Visible = $getBondsSetting->Credit_Visible > 0 ? True:False;
        $getBondsSetting->NoteAll_Visible = $getBondsSetting->NoteAll_Visible > 0 ? True:False;
        $getBondsSetting->Note_Acc_Visible = $getBondsSetting->Note_Acc_Visible > 0 ? True:False;
        $getBondsSetting->Acc_Guid_Visible = $getBondsSetting->Acc_Guid_Visible > 0 ? True:False;
        $getBondsSetting->txtUserVisible01 = $getBondsSetting->txtUserVisible01 > 0 ? True:False;
        $getBondsSetting->txtUserVisible02 = $getBondsSetting->txtUserVisible02 > 0 ? True:False;
        $getBondsSetting->txtUserVisible03 = $getBondsSetting->txtUserVisible03 > 0 ? True:False;
        $getBondsSetting->txtUserVisible04 = $getBondsSetting->txtUserVisible04 > 0 ? True:False;
        $getBondsSetting->CurrencyVisible = $getBondsSetting->CurrencyVisible > 0 ? True:False;
        $getBondsSetting->BranchVisible = $getBondsSetting->BranchVisible > 0 ? True:False;
        $getBondsSetting->CostVisible = $getBondsSetting->CostVisible > 0 ? True:False;
        $getBondsSetting->Save_And_Print = $getBondsSetting->Save_And_Print > 0 ? True:False;
        $getBondsSetting->SaveAndNew = $getBondsSetting->SaveAndNew > 0 ? True:False;
        $getBondsSetting->AcceptZero = $getBondsSetting->AcceptZero > 0 ? True:False;
        $data = [
            'getBondsSetting' => $getBondsSetting,
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

    }

    public function filldata(Request $request)
    {
        $data = [
            'getAccounts' => AccountTree::select('Guid', 'Ac_Name', 'Ac_Code_Mask')->orderBy('Ac_RowID', 'ASC')->get(),
            'getCurrency' => Currency::all(),
            'getBondsSetting' => BondsSetting::all(),

        ];
        return response()->json($data);

    }

    public function getBondNumber(Request $request)
    {
        // $BondType = $request->input('BondType');
        // $BondNumber = Bonds::where('Vou_Type', $BondType)->max('Bond_Number');
        // $data = [
        //     'BondNumber' => $BondNumber ? $BondNumber : 0,
        // ];
        // return response()->json($data);
    }


}
