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
                'IT_ItemType' => $request->input('IT_ItemType'),
                'IT_ItemName' => $request->input('IT_ItemName'),
                'IT_PartNumber' => $request->input('IT_PartNumber'),
                'IT_QY' => $request->input('IT_QY'),
                'IT_CarType' => $request->input('IT_CarType'),
                'IT_Engine' => $request->input('IT_Engine'),
                'IT_ModelCode' => $request->input('IT_ModelCode'),
                'IT_FuelSystem' => $request->input('IT_FuelSystem'),
                'IT_Transmission' => $request->input('IT_Transmission'),
                'IT_CarNo' => $request->input('IT_CarNo'),
                'IT_VIN' => $request->input('IT_VIN'),
                'IT_Year' => $request->input('IT_Year'),
                'IT_Notes' => $request->input('IT_Notes'),


            ]
        );

        return response()->json(['status' => 'تم اجراء العملية بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('IT_Guid');
        $data = Item::find($id);
        return response()->json($data);
    }


    public function edit($id)
    {

    }


    public function update(Request $request)
    {

    }


    public function destroy(Request $request)
    {
        $id = $request->post('IT_Guid');
        Item::find($id)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
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
