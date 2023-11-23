<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('info.Items');
        }
    }


    public function create(Request $request)
    {

        $data = [
            'getItems' => Item::all(),
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $Item = Item::updateOrCreate(
            [
                'id' => $request->input('IT_Guid'),
            ],
            [
                // 'IT2_FK_IT' => $billBodyData['Item_Guid'],
                // 'IT2_Count_Kind' => $billBodyData['Item_Unit'],
                // 'IT2_Count' => $billBodyData['Item_Count'],
                // 'IT2_SmallestCount' => (Unitname::find($billBodyData['Item_Unit'])->Ui_Piece) * ($billBodyData['Item_Count']),
                // 'IT2_State' => true,
                // 'IT2_StoreName' => $request->input("H_Store_Guid"),
                // 'IT2_BillType' => $billTypeState,

            ]
        );
        $Item->save();

        return response()->json(['status' => 'Adding Data Successfully..']);
    }


    public function show(Request $request)
    {
        $id = $request->input('getid');
        $data = Item::find($id);
        return response()->json($data);
    }


    public function edit($id)
    {

    }


    public function update(Request $request)
    {
        $id = $request->post('IT_id');
        $data = Item::find($id);
        $data->IT_ItemType = $request->post('IT_ItemType');
        $data->IT_ItemName = $request->post('IT_ItemName');
        $data->IT_PartNumber = $request->post('IT_PartNumber');
        $data->IT_QY = $request->post('IT_QY');
        $data->IT_CarType = $request->post('IT_CarType');
        $data->IT_Engine = $request->post('IT_Engine');
        $data->IT_ModelCode = $request->post('IT_ModelCode');
        $data->IT_FuelSystem = $request->post('IT_FuelSystem');
        $data->IT_Transmission = $request->post('IT_Transmission');
        $data->IT_CarNo = $request->post('IT_CarNo');
        $data->IT_VIN = $request->post('IT_VIN');
        $data->IT_Year = $request->post('IT_Year');
        $data->update();

        return response()->json(['status' => ' Updating Successfully...']);
    }


    public function destroy(Request $request)
    {
        $id = $request->post('getid');
        Item::find($id)->delete();
        return response()->json(['status' => 'Deleting Successfully...']);
    }

    public function filldata()
    {

        $data = [
            'ItemType' => Item::whereNotNull('IT_ItemType')->orderBy('IT_ItemType','asc')->distinct()->pluck('IT_ItemType'),
            'ItemName' => Item::whereNotNull('IT_ItemName')->orderBy('IT_ItemName','asc')->distinct()->pluck('IT_ItemName'),
            'CarType' => Item::whereNotNull('IT_CarType')->orderBy('IT_CarType','asc')->distinct()->pluck('IT_CarType'),
            'Engine' => Item::whereNotNull('IT_Engine')->orderBy('IT_Engine','asc')->distinct()->pluck('IT_Engine'),
            'ModelCode' => Item::whereNotNull('IT_ModelCode')->orderBy('IT_ModelCode','asc')->distinct()->pluck('IT_ModelCode'),
            'FuelSystem' => Item::whereNotNull('IT_FuelSystem')->orderBy('IT_FuelSystem','asc')->distinct()->pluck('IT_FuelSystem'),
            'Transmission' => Item::whereNotNull('IT_Transmission')->orderBy('IT_Transmission','asc')->distinct()->pluck('IT_Transmission'),
        ];
        return response()->json($data);
    }

    public function advancedsearching(Request $request){

        $itemname=$request->input('itemname');

    }
    public function addNewRow(){
        // $getInfo = item::latest()->first();
        // $data =[
        //     'getLast'=> $getInfo,
        // ];
        // return response()->json($data);
    }
}
