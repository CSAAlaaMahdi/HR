<?php

namespace App\Http\Controllers;

use App\Models\Group;
use Illuminate\Http\Request;
use App\Models\Permission;
use Illuminate\Support\Facades\DB;

class PermissionController extends Controller
{

    public function index()
    {
        if (session()->has('user')) {
            return view('info.permissions');
        }
    }


    public function create(Request $request)
    {
        $totalFilteredRecord = $totalDataRecord = $draw_val = "";
        $columns_list = array(
            0 => 'id',
            1 => 'P_GroupName',

        );

        $totalDataRecord = Permission::count();

        $totalFilteredRecord = $totalDataRecord;

        $limit_val = $request->input('length');
        $start_val = $request->input('start');
        $dir_val = $request->input('order.0.dir');

        if (empty($request->input('search.value'))) {
            if (empty($request->input('order.0.column'))) {
                $post_data = Permission::offset($start_val)
                    ->limit($limit_val)
                    ->get();
            } else {
                $order_val = $columns_list[$request->input('order.0.column')];
                $post_data = Permission::offset($start_val)
                    ->limit($limit_val)
                    ->orderBy($order_val, $dir_val)
                    ->get();
            }
        } else {
            $search_text = $request->input('search.value');
            if (empty($request->input('order.0.column'))) {
                $post_data =  Permission::where('id', 'LIKE', "%{$search_text}%")
                    ->orWhere('P_GroupName', 'LIKE', "%{$search_text}%")
                    ->offset($start_val)
                    ->limit($limit_val)
                    ->get();

                $totalFilteredRecord = Permission::where('id', 'LIKE', "%{$search_text}%")
                    ->orWhere('P_GroupName', 'LIKE', "%{$search_text}%")
                    ->count();
            } else {
                $order_val = $columns_list[$request->input('order.0.column')];
                $post_data =  Permission::where('id', 'LIKE', "%{$search_text}%")
                    ->orWhere('P_GroupName', 'LIKE', "%{$search_text}%")
                    ->offset($start_val)
                    ->limit($limit_val)
                    ->orderBy($order_val, $dir_val)
                    ->get();

                $totalFilteredRecord = Permission::where('id', 'LIKE', "%{$search_text}%")
                    ->orWhere('P_GroupName', 'LIKE', "%{$search_text}%")
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
        $permission= new Permission([
            'P_GroupName'=>$request->post('P_GroupName'),
            'P_Create'=>$request->post('P_Create'),
            'P_Update'=>$request->post('P_Update'),
            'P_Delete'=>$request->post('P_Delete'),
            'P_Dashboard'=>$request->post('P_Dashboard'),
            'P_Users'=>$request->post('P_Users'),
            'P_Backup'=>$request->post('P_Backup'),
            'P_Recovery'=>$request->post('P_Recovery'),
            'P_Permissions'=>$request->post('P_Permissions'),
            'P_Groups'=>$request->post('P_Groups'),
            'P_State'=>$request->post('P_State'),

        ]);
        $permission->save();

        return response()->json(['status' => 'تم اضافة البيانات']);
    }


    public function show(Request $request)
    {
        $id=$request->input('getid');
        $data=Permission::find($id);
        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        $id=$request->post('P_ID');
        $data=Permission::find($id);
        $data->P_GroupName=$request->post('P_GroupName');
        $data->P_Create=$request->post('P_Create');
        $data->P_Update=$request->post('P_Update');
        $data->P_Delete=$request->post('P_Delete');
        $data->P_Dashboard=$request->post('P_Dashboard');
        $data->P_Users=$request->post('P_Users');
        $data->P_Backup=$request->post('P_Backup');
        $data->P_Recovery=$request->post('P_Recovery');
        $data->P_Groups=$request->post('P_Groups');
        $data->P_Permissions=$request->post('P_Permissions');
        $data->P_State=$request->post('P_State');
        $data->update();

        return response()->json(['status'=>'تم تحديث البيانات']);
    }


    public function destroy(Request $request)
    {
        $id=$request->input('getid');
        Permission::find($id)->delete();
        return response()->json([
            'status'=>'تم حذف البيانات بنجاح'
        ]);
    }

    public function filldata()
    {

        $data=[
            'getgroups'=>Group::select('G_Name')->get(),
        ];
        return response()->json($data);
    }

    public function getpermissions()
    {
        $id=session('id');
        $users = DB::table('users')
                    ->join('permissions','permissions.P_GroupName','=','users.groupuser')
                    ->select('users.name','permissions.*')
                    ->where('users.id','=',$id)
                    ->get();

        return response()->json($users);

    }
}
