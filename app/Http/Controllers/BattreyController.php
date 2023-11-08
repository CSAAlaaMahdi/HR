<?php

namespace App\Http\Controllers;

use App\Models\Battrey;
use Illuminate\Http\Request;

class BattreyController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('info.battreys');
        }
    }


    public function create(Request $request)
    {
        $totalFilteredRecord = $totalDataRecord = $draw_val = "";
        $columnB_list = array(
            0 => 'id',
            1 => 'B_Group',
            2 => 'B_Model',
            3 => 'B_Ref',
            4 => 'B_AH',
            5 => 'B_L',
            6 => 'B_R',
            7 => 'B_H',
            8 => 'B_CarType',
            9 => 'B_Brand',
        );

        $totalDataRecord = Battrey::count();

        $totalFilteredRecord = $totalDataRecord;

        $limit_val = $request->input('length');
        $start_val = $request->input('start');
        $dir_val = $request->input('order.0.dir');

        if (empty($request->input('search.value'))) {
            if (empty($request->input('order.0.column'))) {
                $post_data = Battrey::offset($start_val)
                    ->limit($limit_val)
                    ->get();
            } else {
                $order_val = $columnB_list[$request->input('order.0.column')];
                $post_data = Battrey::offset($start_val)
                    ->limit($limit_val)
                    ->orderBy($order_val, $dir_val)
                    ->get();
            }
        } else {
            $search_text = $request->input('search.value');
            if (empty($request->input('order.0.column'))) {
                $post_data =  Battrey::where('id', 'LIKE', "%{$search_text}%")
                    ->orWhere('B_AH', 'LIKE', "%{$search_text}%")
                    ->orWhere('B_Model', 'LIKE', "%{$search_text}%")
                    ->orWhere('B_CarType', 'LIKE', "%{$search_text}%")
                    ->orWhere('B_Brand', 'LIKE', "%{$search_text}%")
                    ->offset($start_val)
                    ->limit($limit_val)
                    ->get();

                $totalFilteredRecord = Battrey::where('id', 'LIKE', "%{$search_text}%")
                    ->orWhere('B_AH', 'LIKE', "%{$search_text}%")
                    ->orWhere('B_Model', 'LIKE', "%{$search_text}%")
                    ->orWhere('B_CarType', 'LIKE', "%{$search_text}%")
                    ->orWhere('B_Brand', 'LIKE', "%{$search_text}%")
                    ->count();
            } else {
                $order_val = $columnB_list[$request->input('order.0.column')];
                $post_data =  Battrey::where('id', 'LIKE', "%{$search_text}%")
                    ->orWhere('B_AH', 'LIKE', "%{$search_text}%")
                    ->orWhere('B_Model', 'LIKE', "%{$search_text}%")
                    ->orWhere('B_CarType', 'LIKE', "%{$search_text}%")
                    ->orWhere('B_Brand', 'LIKE', "%{$search_text}%")
                    ->offset($start_val)
                    ->limit($limit_val)
                    ->orderBy($order_val, $dir_val)
                    ->get();

                $totalFilteredRecord = Battrey::where('id', 'LIKE', "%{$search_text}%")
                    ->orWhere('B_AH', 'LIKE', "%{$search_text}%")
                    ->orWhere('B_Model', 'LIKE', "%{$search_text}%")
                    ->orWhere('B_CarType', 'LIKE', "%{$search_text}%")
                    ->orWhere('B_Brand', 'LIKE', "%{$search_text}%")
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
        $Battrey = new Battrey([
            'B_Group' => $request->post('B_Group'),
            'B_Model' => $request->post('B_Model'),
            'B_CarType' => $request->post('B_CarType'),
            'B_Ref' => $request->post('B_Ref'),
            'B_AH' => $request->post('B_AH'),
            'B_L' => $request->post('B_L'),
            'B_R' => $request->post('B_R'),
            'B_H' => $request->post('B_H'),
            'B_Brand' => $request->post('B_Brand'),
            'B_Price' => $request->post('B_Price'),
            'B_CarType' => $request->post('B_CarType'),
            'B_Count' => $request->post('B_Count'),
            'B_QY' => $request->post('B_QY'),
        ]);
        $Battrey->save();

        return response()->json(['status' => 'Adding Data Successfully..']);
    }


    public function show(Request $request)
    {
        $id = $request->input('getid');
        $data = Battrey::find($id);
        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        $id = $request->post('B_id');
        $data = Battrey::find($id);
        $data->B_Group = $request->post('B_Group');
        $data->B_Model = $request->post('B_Model');
        $data->B_Ref = $request->post('B_Ref');
        $data->B_AH = $request->post('B_AH');
        $data->B_L = $request->post('B_L');
        $data->B_R = $request->post('B_R');
        $data->B_H = $request->post('B_H');
        $data->B_Brand = $request->post('B_Brand');
        $data->B_Price = $request->post('B_Price');
        $data->B_CarType = $request->post('B_CarType');
        $data->B_Count = $request->post('B_Count');
        $data->B_QY = $request->post('B_QY');
        $data->update();

        return response()->json(['status' => ' Updating Successfully...']);
    }


    public function destroy(Request $request)
    {
        $id = $request->post('getid');
        Battrey::find($id)->delete();
        return response()->json(['status' => 'Deleting Successfully...']);
    }

    public function filldata()
    {

        // $data = [
        //     'getstate' => State::select('St_Name')->get(),
        // ];
        // return response()->json($data);
    }
}
