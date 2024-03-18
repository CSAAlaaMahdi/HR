<?php

namespace App\Http\Controllers;

use App\Models\ItemsBarcode;
use Illuminate\Http\Request;

class ItemsBarcodeController extends Controller
{

    public function index()
    {
        // if (session()->has('User')) {
        //     return view('info.kinds');
        // }
    }


    public function create(Request $request)
    {
        $id = $request->input('IT_ID');
        $data = [
            'getItemsBarcode' => ItemsBarcode::where('ITB_FK_IT', $id)->get(),
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {

        $ItemsBarcode = ItemsBarcode::updateOrCreate(
            [
                'id' => $request->input('ITB_ID'),
            ],
            [
                'ITB_FK_IT' => $request->input('ITB_FK_IT'),
                'ITB_Barcode' => $request->input('ITB_Barcode'),
            ]
        );


        return response()->json(['status' => 'تم اجراء العملية بنجاح']);
    }


    public function show(Request $request)
    {
        // $Guid = $request->input('K_Guid');
        // $data = Kind::find($Guid);
        // return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        // $Guid = $request->post('K_Guid');
        // $data = Kind::find($Guid);
        // $data->K_Name = $request->post('K_Name');
        // // $data->K_UserGuid = session('User');
        // $data->update();

        // return response()->json(['status' => ' تم تحديث البيانات بنجاح']);
    }


    public function destroy(Request $request)
    {
        $Guid = $request->post('ITB_ID');
        ItemsBarcode::find($Guid)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }
}
