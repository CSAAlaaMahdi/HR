<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use Illuminate\Http\Request;

class BrandController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('info.Brands');
        }
    }


    public function create(Request $request)
    {
        $data=[
            'getBrands' => Brand::orderBy('B_RowID','ASC')->get(),
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $rowid=Brand::max('B_RowID');
        $Brand = new Brand([
            'B_Name' => $request->post('B_Name'),
            'B_RowID' =>$rowid +1,
            'B_UserName'=>session('User')
        ]);
        $Brand->save();

        return response()->json(['status' => 'Adding Data Successfully..']);
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
        $Guid = $request->post('B_Guid');
        $data = Brand::find($Guid);
        $data->B_Name = $request->post('B_Name');
        // $data->B_UserName = session('User');
        $data->update();

        return response()->json(['status' => ' تم تحديث البيانات بنجاح']);
    }


    public function destroy(Request $request)
    {
        $guid = $request->post('B_Guid');
        Brand::find($guid)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }


}
