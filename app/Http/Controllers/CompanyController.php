<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('info.Companies');
        }
    }


    public function create(Request $request)
    {
       $data=[
        'getCompany' => Company::orderBy('Com_RowID','ASC')->get(),
       ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $rowid=Company::max('Com_RowID');
        $Company = new Company([
            'Com_Name' => $request->post('Com_Name'),
            'Com_RowID' => $rowid + 1,
            // 'Com_UserGuid' => session('User')
        ]);
        $Company->save();

        return response()->json(['status' => 'Adding Data Successfully..']);
    }


    public function show(Request $request)
    {
        // $id = $request->input('getid');
        // $data = Company::find($id);
        // return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        $Guid = $request->post('Com_Guid');
        $data = Company::find($Guid);
        $data->Com_Name = $request->post('Com_Name');
        // $data->Com_UserName = session('User');
        $data->update();

        return response()->json(['status' => ' Updating Successfully...']);
    }


    public function destroy(Request $request)
    {
        $Guid = $request->post('Com_Guid');
        Company::find($Guid)->delete();
        return response()->json(['status' => 'Deleting Successfully...']);
    }
}
