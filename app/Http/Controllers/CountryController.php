<?php

namespace App\Http\Controllers;

use App\Models\Country;
use Illuminate\Http\Request;

class CountryController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('info.countries');
        }
    }


    public function create(Request $request)
    {
       $data=[
        'getCountry' => Country::orderBy('C_RowID','ASC')->get(),
       ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $rowid=Country::max('C_RowID');
        $Country = new Country([
            'C_Name' => $request->post('C_Name'),
            'C_RowID' => $rowid +1,
            // 'C_UserGuid' => session('User')
        ]);
        $Country->save();

        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        // $Guid = $request->input('C_Guid');
        // $data = Country::find($Guid);
        // return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        $Guid = $request->post('C_Guid');
        $data = Country::find($Guid);
        $data->C_Name = $request->post('C_Name');
        // $data->C_UserGuid = session('User');
        $data->update();

        return response()->json(['status' => ' تم تحديث البيانات بنجاح']);
    }


    public function destroy(Request $request)
    {
        $Guid = $request->post('C_Guid');
        Country::find($Guid)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }
}
