<?php

namespace App\Http\Controllers;

use App\Models\Group;
use App\Models\State;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{

    public function index()
    {

        if (session()->has('User')) {
            return view('Users.index');
        }
    }


    public function create(Request $request)
    {
        $totalFilteredRecord = $totalDataRecord = $draw_val = "";
        $columns_list = array(
            0 => 'id',
            1 => 'U_Name',
            3 => 'U_State',
            4 => 'U_WorkPalce',
            5 => 'U_PermissionGroup',
        );

        $totalDataRecord = User::count();

        $totalFilteredRecord = $totalDataRecord;

        $limit_val = $request->input('length');
        $start_val = $request->input('start');
        $dir_val = $request->input('order.0.dir');

        if (empty($request->input('search.value'))) {
            if (empty($request->input('order.0.column'))) {
                $post_data = User::offset($start_val)
                    ->limit($limit_val)
                    ->get();
            } else {
                $order_val = $columns_list[$request->input('order.0.column')];
                $post_data = User::offset($start_val)
                    ->limit($limit_val)
                    ->orderBy($order_val, $dir_val)
                    ->get();
            }
        } else {
            $search_text = $request->input('search.value');
            if (empty($request->input('order.0.column'))) {
                $post_data =  User::where('id', 'LIKE', "%{$search_text}%")
                    ->orWhere('U_Name', 'LIKE', "%{$search_text}%")
                    ->orWhere('U_State', 'LIKE', "%{$search_text}%")
                    ->orWhere('U_WorkPlace', 'LIKE', "%{$search_text}%")
                    ->orWhere('U_PermissionGroup', 'LIKE', "%{$search_text}%")
                    ->offset($start_val)
                    ->limit($limit_val)
                    ->get();

                $totalFilteredRecord = User::where('id', 'LIKE', "%{$search_text}%")
                    ->orWhere('U_Name', 'LIKE', "%{$search_text}%")
                    ->orWhere('U_State', 'LIKE', "%{$search_text}%")
                    ->orWhere('U_WorkPlace', 'LIKE', "%{$search_text}%")
                    ->orWhere('U_PermissionGroup', 'LIKE', "%{$search_text}%")
                    ->count();
            } else {
                $order_val = $columns_list[$request->input('order.0.column')];
                $post_data =  User::where('id', 'LIKE', "%{$search_text}%")
                    ->orWhere('U_Name', 'LIKE', "%{$search_text}%")
                    ->orWhere('U_State', 'LIKE', "%{$search_text}%")
                    ->orWhere('U_WorkPlace', 'LIKE', "%{$search_text}%")
                    ->orWhere('U_PermissionGroup', 'LIKE', "%{$search_text}%")
                    ->offset($start_val)
                    ->limit($limit_val)
                    ->orderBy($order_val, $dir_val)
                    ->get();

                $totalFilteredRecord = User::where('id', 'LIKE', "%{$search_text}%")
                    ->orWhere('U_Name', 'LIKE', "%{$search_text}%")
                    ->orWhere('U_State', 'LIKE', "%{$search_text}%")
                    ->orWhere('U_WorkPlace', 'LIKE', "%{$search_text}%")
                    ->orWhere('U_PermissionGroup', 'LIKE', "%{$search_text}%")
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
        $User = new User([
            'U_Name' => $request->post('u_Username'),
            'U_State' => $request->post('u_state'),
            'U_WorkPlace' => $request->post('u_workplace'),
            'U_PermissionGroup' => $request->post('u_permissiongroup'),
            'U_Password' => Hash::make($request->post('u_password')),

        ]);
        $User->save();

        return response()->json(['status' => 'Adding Data Successfully...']);
    }


    public function show(Request $request)
    {
        $id = $request->input('getid');
        $data = User::find($id);
        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        $id = $request->post('u_id');
        $data = User::find($id);
        $data->U_Name = $request->post('u_username');
        $data->U_State = $request->post('u_state');
        $data->U_PermissionGroup = $request->post('u_permissiongroup');
        $data->U_WorkPlace = $request->post('u_workplace');
        $data->update();

        return response()->json(['status' => 'Updating Data ... Successfully. ']);
    }


    public function destroy(Request $request)
    {
        $id = $request->input('getid');
        User::find($id)->delete();
        return response()->json([
            'status' => 'Deleting Successfully....'
        ]);
    }
    public function filldata()
    {

        $data = [
          
        ];
        return response()->json($data);
    }
}
