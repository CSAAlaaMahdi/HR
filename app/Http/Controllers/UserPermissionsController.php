<?php

namespace App\Http\Controllers;

use App\Models\Forms;
use App\Models\UserGroupPermissions;
use App\Models\UserPermissions;
use Illuminate\Http\Request;

class UserPermissionsController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('users.userPermissions');
        }
    }


    public function create(Request $request)
    {
        $getData = UserPermissions::orderBy('id')->get()
            ->map(function($item){
                $item['GroupID'] = UserGroupPermissions::find($item['GroupID'])->GroupName;
                return $item;
            });
        $data = [
            'getUserPermissions' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $id = $request->post('id');
        $UserID = session('id');
        $UserPermissions = UserPermissions::updateOrCreate(
            [
                'id' => $id,
            ],
            [
                'GroupID' => $request->post('GroupID'),
                'FromName' => $request->post('FromName'),
                'OptionAdd' => $request->post('OptionAdd'),
                'OptionEdit' => $request->post('OptionEdit'),
                'OptionDel' => $request->post('OptionDel'),
                'ReadOnly' => $request->post('ReadOnly'),
                'UserID' => $UserID,

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

        $getFromsNames = UserPermissions::select('FormName')
            ->whereNotNull('FormName')
            ->where('FormName', '<>', '')
            ->distinct()
            ->orderBy('FormName')
            ->get();
        $getUserGroup = UserGroupPermissions::orderBy('id')->get();


        $data = [
            'getFromsNames' => $getFromsNames,
            'getUserGroups'  => $getUserGroup,

        ];
        return response()->json($data);
    }
    public function GetForms(Request $request)
    {
        $GroupID = (int)$request->input('GroupID');
        $GetForms = Forms::all();
        $GetForms = $GetForms->map(function ($form) use( $GroupID) {
            $form->GroupID = $GroupID ;
            return $form;
        });
        $data = [
            'GetForms' => $GetForms,
        ];
        return response()->json($data);
    }


}
