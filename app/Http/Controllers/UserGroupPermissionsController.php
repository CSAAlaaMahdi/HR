<?php

namespace App\Http\Controllers;

use App\Models\Attachments;
use App\Models\UserGroupPermissions;
use App\Models\Employees;
use App\Models\User2;
use App\Models\UserPermissions;
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
        $id = session('id');
        $user = User2::find($id);
        $Permission = UserPermissions::where('GroupID', '=', $user->GroupID)
            ->where('FormName', 'المجموعات')
            ->get()
            ->last();
        $Permission->OptionAdd = $Permission->OptionAdd == true ? true : false;
        $Permission->OptionEdit = $Permission->OptionEdit == true ? true : false;
        $Permission->OptionDel = $Permission->OptionDel == true ? true : false;
        $Permission->ReadOnly = $Permission->ReadOnly == true ? true : false;
        $Permission->Enable = $Permission->Enable == true ? true : false;

        $getData = UserGroupPermissions::orderBy('id')->get()
            ->map(function($item){
                $item['Status'] = $item['Status'] > 0 ? 'نشطة':'غير نشطة';
                return $item;
            });
        $data = [
            'getUserGroupPermissions' => $getData,
            'Permission' => $Permission,
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
