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
        // $getBond = $request->input('B_Guid');
        // $BondType = $request->input('BondType');
        // $BondTypeSetting = BondsSetting::where('Form_Text', $BondType)->first();

        // $data = [

        //     'getAccounts' => AccountTree::select('Guid', 'Ac_Name', 'Ac_Code_Mask')->orderBy('Ac_RowID', 'ASC')->get(),
        //     'getBonds' => Bonds::where('Guid', $getBond)->get(),
        //     'State' => $BondTypeSetting,

        // ];
        // return response()->json($data);
    }


    public function store(Request $request)
    {



        // return response()->json(['status' => 'تم اجراء العملية بنجاح']);
    }


    public function show(Request $request)
    {
        // where('Acc_Contra_Guid','!=','00000000-0000-0000-0000-000000000000')->
        // $B_Guid = $request->input('B_Guid');
        // $B_Type = $request->input('B_Type');
        // $getParentGuid = Bonds::where([['Bond_Number', $B_Guid], ['Vou_Type', $B_Type]])->select('Parent_Guid')->first()->Parent_Guid;
        // $BondInfo = Bonds::where('Parent_Guid', $getParentGuid)->orderBy('Vou_Row_No')->get();

        // $data = [
        //     'getBondBody' => $BondInfo,
        // ];

        // return response()->json($data);
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
        // $BondType = $request->input('BondType');
        // $getBondType = BondsSetting::where('Form_Text', $BondType)->first();
        // $data = [
        //     'getAccounts' => AccountTree::select('Guid', 'Ac_Name', 'Ac_Code_Mask')->orderBy('Ac_RowID', 'ASC')->get(),
        //     'getCurrency' => Currency::all(),
        //     'defualtAccount' => $getBondType->Acc_Guid,
        //     'getBondsType' => BondsSetting::all(),
        //     'defualtCurrencyGuid' => $getBondType->CurrencyGuid,
        //     'defualtCurrencyEqual' => Currency::where('Cur_Guid', $getBondType->CurrencyGuid)->first()->Cur_Cost,
        //     'getBonds' => $getBondType,
        //     'getBondsNumbers' => Bonds::select('Bond_Number')->where('Vou_Type', $getBondType->id)->groupBy('Bond_Number')->get(),
        // ];
        // return response()->json($data);

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
