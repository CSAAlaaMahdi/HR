<?php

namespace App\Http\Controllers;

use App\Models\UsersGroups;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Ramsey\Uuid\Uuid;

class UsersGroupsController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('info.usersgroups');
        }
    }


    public function create(Request $request)
    {
        $getData = UsersGroups::all()->map(function($item){
            $item['UG_State'] = $item['UG_State'] > 0 ? 'نشطة' : 'غير نشطة';
            return $item;
        });
        $data = [
            'getUsersGroups' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $getid = UsersGroups::max('UG_RowID');
        $rowID = $getid != null ? $getid + 1 : 1;
        $Guid = $request->post('UG_Guid');
        if($Guid == null || $Guid == ""){
            $Guid = strtoupper(Uuid::uuid4()->toString());
        }
        $UsersGroups =  UsersGroups::updateOrCreate(
            [
                'UG_Guid' => $Guid,
            ],
            [
                'UG_Name' => $request->post('UG_Name'),
                'UG_State' => $request->post('UG_State'),
                'UG_RowID' => $rowID,
            ]
        );
        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('UG_Guid');
        $data = UsersGroups::find($id);
        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        // $Guid = $request->post('Ui_Guid');
        // $data = User::find($Guid);
        // $data->Ui_Name = $request->post('Ui_Name');
        // $data->Ui_Piece = $request->post('Ui_Piece');
        // $data->Ui_PieceType = $request->post('Ui_PieceType');
        // // $data->Ui_UserName = session('User');
        // $data->update();

        // return response()->json(['status' => 'تم تحديث البيانات بنجاح']);
    }


    public function destroy(Request $request)
    {
        $guid = $request->post('UG_Guid');
        UsersGroups::find($guid)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata(){

        // $getUsersGroups = UsersGroups::orderBy('G_RowID')->get();

        // $data = [
        //     'getUsersGroups' => $getUsersGroups,
        // ];
        // return response()->json($data);

    }
}
