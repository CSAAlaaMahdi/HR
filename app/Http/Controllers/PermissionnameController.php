<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Permissionname;
use Illuminate\Support\Facades\DB;

class PermissionnameController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('info.permissionname');
        }
    }


    public function create(Request $request)
    {
        $totalFilteredRecord = $totalDataRecord = $draw_val = "";
        $columns_list = array(
            0 => 'id',
            1 => 'P_Name',
        );

        $totalDataRecord = Permissionname::count();

        $totalFilteredRecord = $totalDataRecord;

        $limit_val = $request->input('length');
        $start_val = $request->input('start');
        $dir_val = $request->input('order.0.dir');

        if (empty($request->input('search.value'))) {
            if (empty($request->input('order.0.column'))) {
                $post_data = Permissionname::offset($start_val)
                    ->limit($limit_val)
                    ->get();
            } else {
                $order_val = $columns_list[$request->input('order.0.column')];
                $post_data = Permissionname::offset($start_val)
                    ->limit($limit_val)
                    ->orderBy($order_val, $dir_val)
                    ->get();
            }
        } else {
            $search_text = $request->input('search.value');
            if (empty($request->input('order.0.column'))) {
                $post_data =  Permissionname::where('id', 'LIKE', "%{$search_text}%")
                    ->orWhere('P_Name', 'LIKE', "%{$search_text}%")
                    ->offset($start_val)
                    ->limit($limit_val)
                    ->get();

                $totalFilteredRecord = Permissionname::where('id', 'LIKE', "%{$search_text}%")
                    ->orWhere('P_Name', 'LIKE', "%{$search_text}%")
                    ->count();
            } else {
                $order_val = $columns_list[$request->input('order.0.column')];
                $post_data =  Permissionname::where('id', 'LIKE', "%{$search_text}%")
                    ->orWhere('P_Name', 'LIKE', "%{$search_text}%")
                    ->offset($start_val)
                    ->limit($limit_val)
                    ->orderBy($order_val, $dir_val)
                    ->get();

                $totalFilteredRecord = Permissionname::where('id', 'LIKE', "%{$search_text}%")
                    ->orWhere('P_Name', 'LIKE', "%{$search_text}%")
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
        $permissionname= new Permissionname([
            'P_Name'=>$request->post('p_name'),
            'P_UserName'=>session('User')
        ]);
        $permissionname->save();

        return response()->json(['status' => 'Adding Data Successfully...']);
    }


    public function show(Request $request)
    {
        $id=$request->input('getid');
        $data=Permissionname::find($id);
        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        $id=$request->post('p_id');
        $data=Permissionname::find($id);
        $data->P_Name=$request->post('p_name');
        $data->P_UserName=session('User');
        $data->update();

        return response()->json(['status'=>'Updating Data Successfully...']);
    }


    public function destroy(Request $request)
    {
        $id=$request->post('getid');
        Permissionname::find($id)->delete();
        return response()->json(['status'=>'Deleting Data Successfully.']);
    }


}
