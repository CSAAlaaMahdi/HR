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
        $totalFilteredRecord = $totalDataRecord = $draw_val = "";
        $columnIT_list = array(
            0 => 'id',
            1 => 'IT_ItemType',
            2 => 'IT_ItemName',
            3 => 'IT_PartNumber',
            4 => 'IT_CarType',
            5 => 'IT_Engine',
            6 => 'IT_ModelCode',
            7 => 'IT_VIN',
            8 => 'IT_FuelSystem',
            9 => 'IT_Transmission',
            10 => 'IT_CarNo',
            11 => 'IT_Year'
        );

        $totalDataRecord = Item::count();

        $totalFilteredRecord = $totalDataRecord;

        $limit_val = $request->input('length');
        $start_val = $request->input('start');
        $dir_val = $request->input('order.0.dir');

        if (empty($request->input('search.value'))) {
            if (empty($request->input('order.0.column'))) {
                $post_data = Item::offset($start_val)
                    ->limit($limit_val)
                    ->get();
            } else {
                $order_val = $columnIT_list[$request->input('order.0.column')];
                $post_data = Item::offset($start_val)
                    ->limit($limit_val)
                    ->orderBy($order_val, $dir_val)
                    ->get();
            }
        } else {
            $search_text = $request->input('search.value');
            if (empty($request->input('order.0.column'))) {
                $post_data =  Item::where('IT_ItemName', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_ItemType', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_PartNumber', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_CarType', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_Engine', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_ModelCode', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_VIN', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_FuelSystem', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_Transmission', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_CarNo', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_Year', 'LIKE', "%{$search_text}%")
                    ->offset($start_val)
                    ->limit($limit_val)
                    ->get();

                $totalFilteredRecord = Item::where('IT_ItemName', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_ItemType', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_PartNumber', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_CarType', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_Engine', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_ModelCode', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_VIN', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_FuelSystem', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_Transmission', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_CarNo', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_Year', 'LIKE', "%{$search_text}%")
                    ->count();
            } else {
                $order_val = $columnIT_list[$request->input('order.0.column')];
                $post_data =  Item::where('IT_ItemName', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_ItemType', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_PartNumber', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_CarType', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_Engine', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_ModelCode', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_VIN', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_FuelSystem', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_Transmission', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_CarNo', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_Year', 'LIKE', "%{$search_text}%")
                    ->offset($start_val)
                    ->limit($limit_val)
                    ->orderBy($order_val, $dir_val)
                    ->get();

                $totalFilteredRecord = Item::where('IT_ItemName', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_ItemType', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_PartNumber', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_CarType', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_Engine', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_ModelCode', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_VIN', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_FuelSystem', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_Transmission', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_CarNo', 'LIKE', "%{$search_text}%")
                    ->orWhere('IT_Year', 'LIKE', "%{$search_text}%")
                    ->count();
            }
        }

        $draw_val = $request->input('draw');
        $get_json_data = array(
            "draw"            => intval($draw_val),
            "recordsTotal"    => intval($totalDataRecord),
            "recordsFiltered" => intval($totalFilteredRecord),
            "data"            => $post_data
        );
        return response()->json($get_json_data);
    }


    public function store(Request $request)
    {
        $Item = new Item([
            'IT_ItemType' => $request->post('IT_ItemType'),
            'IT_ItemName' => $request->post('IT_ItemName'),
            'IT_PartNumber' => $request->post('IT_PartNumber'),
            'IT_QY' => $request->post('IT_QY'),
            'IT_CarType' => $request->post('IT_CarType'),
            'IT_Engine' => $request->post('IT_Engine'),
            'IT_ModelCode' => $request->post('IT_ModelCode'),
            'IT_FuelSystem' => $request->post('IT_FuelSystem'),
            'IT_Transmission' => $request->post('IT_Transmission'),
            'IT_CarNo' => $request->post('IT_CarNo'),
            'IT_VIN' => $request->post('IT_VIN'),
            'IT_Year' => $request->post('IT_Year'),

        ]);
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
            'getItemType' => Item::select('IT_ItemType')->groupBy('IT_ItemType')->get(),
            'getItemName' => Item::select('IT_ItemName')->groupBy('IT_ItemName')->get(),
            'getCarType' => Item::select('IT_CarType')->groupBy('IT_CarType')->get(),
            'getEngine' => Item::select('IT_Engine')->groupBy('IT_Engine')->get(),
            'getModelCode' => Item::select('IT_ModelCode')->groupBy('IT_ModelCode')->get(),
            'getFuelSystem' => Item::select('IT_FuelSystem')->groupBy('IT_FuelSystem')->get(),
            'getTransmission' => Item::select('IT_Transmission')->groupBy('IT_Transmission')->get(),
        ];
        return response()->json($data);
    }

    public function advancedsearching(Request $request){

        $itemname=$request->input('itemname');

    }
    public function addNewRow(){
        $getInfo = item::latest()->first();
        $data =[
            'getLast'=> $getInfo,
        ];
        return response()->json($data);
    }
}
