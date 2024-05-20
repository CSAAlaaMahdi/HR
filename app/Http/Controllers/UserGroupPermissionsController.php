<?php

namespace App\Http\Controllers;

use App\Models\Attachments;
use App\Models\UserGroupPermissions;
use App\Models\Employees;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Str;

class UserGroupPermissionsController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('administration.userGroupPermissions');
        }
    }


    public function create(Request $request)
    {
        $getData = UserGroupPermissions::orderBy('id')->get()
            ->map(function($item){
                $item['Status'] = $item['Status'] > 0 ? 'نشطة':'غير نشطة';
                return $item;
            });
        $data = [
            'getUserGroupPermissions' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $id = $request->post('id');
        $UserID = session('id');
        $UserGroupPermissions = UserGroupPermissions::updateOrCreate(
            [
                'id' => $id,
            ],
            [
                'GroupName' => $request->post('GroupName'),
                'Status' => $request->post('Status'),
                'UserID' => $UserID,


            ]
        );
        
        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('id');
        $UserGroupPermissions = UserGroupPermissions::find($id);
        $data = [
            'UserGroupPermissions' => $UserGroupPermissions,
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
        UserGroupPermissions::find($id)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getUserGroupPermissions = UserGroupPermissions::select('GroupName')
            ->whereNotNull('GroupName')
            ->where('GroupName', '<>', '')
            ->distinct()
            ->orderBy('GroupName')
            ->get();


        $data = [
            'getUserGroupPermissions' => $getUserGroupPermissions,

        ];
        return response()->json($data);
    }

  
}
