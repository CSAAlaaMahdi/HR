<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\CarsInfo;
use App\Models\Company;
use Illuminate\Http\Request;

class CarsInfoController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('information.carsinfo');
        }
    }


    public function create(Request $request)
    {
        $data=[
            'getCarsInfo' => CarsInfo::addSelect([
                'Company_Name' =>Company::select('Com_Name')
                ->whereColumn('Com_Guid','Company'),
                'Brand_Name' => Brand::select("B_Name")
                ->whereColumn('B_Guid','Brand')
            ])->orderBy('RowID','ASC')->get(),
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        // $rowid=Brand::max('B_RowID');
        // $Brand = new Brand([
        //     'B_Name' => $request->post('B_Name'),
        //     'B_RowID' =>$rowid +1,
        //     'B_UserName'=>session('User')
        // ]);
        // $Brand->save();

        // return response()->json(['status' => 'Adding Data Successfully..']);
    }


    public function show(Request $request)
    {
        // $id = $request->input('getid');
        // $data = Brand::find($id);
        // return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        // $Guid = $request->post('B_Guid');
        // $data = Brand::find($Guid);
        // $data->B_Name = $request->post('B_Name');
        // // $data->B_UserName = session('User');
        // $data->update();

        // return response()->json(['status' => ' Updating Successfully...']);
    }


    public function destroy(Request $request)
    {
        // $id = $request->post('getid');
        // Brand::find($id)->delete();
        // return response()->json(['status' => 'Deleting Successfully...']);
    }


}
