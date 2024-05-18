<?php

namespace App\Http\Controllers;

use App\Models\Attachments;
use App\Models\UserPermissions;
use App\Models\Employees;
use App\Models\User2;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Str;

class UserPermissionsController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('administration.userPermissions');
        }
    }


    public function create(Request $request)
    {
        // $getData = UserPermissions::orderByDesc('id')->get()->map(function($item){
        //     $item['eid'] = Employees::find($item['eid']) != null ? Employees::find($item['eid'])->fullname : "" ;
        //     return $item;
        // });

        // $data = [
        //     'getUserPermissions' => $getData,
        // ];
        // return response()->json($data);
    }


    public function store(Request $request)
    {
        $id = $request->post('id');
        $UserPermissions = UserPermissions::updateOrCreate(
            [
                'id' => $id,
            ],
            [
                'userid' => $request->post('userid'),
                'form' => $request->post('form'),
                'enable' => $request->post('enable'),
                'readOnly' => $request->post('readOnly'),
                'readWrite' => $request->post('readWrite'),
                'deleteOption' => $request->post('deleteOption'),

            ]
        );

        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('id');
        $UserPermissions = UserPermissions::find($id);

        $data = [
            'UserPermissions' => $UserPermissions,
        ];
        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
    }


    public function destroy(Request $request)
    {
        $id = $request->post('id');
        UserPermissions::find($id)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getUsers = User2::select('userid', 'username')
            ->orderBy('username')
            ->get();

        $data = [
            'getUsers' => $getUsers,


        ];
        return response()->json($data);
    }

  
}
