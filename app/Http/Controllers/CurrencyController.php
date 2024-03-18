<?php

namespace App\Http\Controllers;

use App\Models\Currency;
use Illuminate\Http\Request;

class CurrencyController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('info.currencies');
        }
    }


    public function create(Request $request)
    {
        $data=[
            'getCurrency' => Currency::orderBy('Cur_RowID','ASC')->get(),
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $rowid= Currency::max('Cur_RowID');
        $Currency = new Currency([
            'Cur_Name' => $request->post('Cur_Name'),
            'Cur_Cost' => $request->post('Cur_Cost'),
            'Cur_IsMain' => $request->post('Cur_IsMain'),
            'Cur_RowID' => $rowid +1,
            // 'Cur_UserGuid' => session('User')
        ]);
        $Currency->save();

        return response()->json(['status' => 'تم اضافة البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $Guid = $request->input('Cur_Guid');
        $data = Currency::find($Guid);
        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        $Guid = $request->post('Cur_Guid');
        $data = Currency::find($Guid);
        $data->Cur_Name = $request->post('Cur_Name');
        $data->Cur_Cost = $request->post('Cur_Cost');
        $data->Cur_IsMain = $request->post('Cur_IsMain');
        // $data->Cur_UserGuid = session('User');
        $data->update();

        return response()->json(['status' => ' تم تحديث البيانات بنجاح']);
    }


    public function destroy(Request $request)
    {
        $Guid = $request->post('Cur_Guid');
        Currency::find($Guid)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }
}
