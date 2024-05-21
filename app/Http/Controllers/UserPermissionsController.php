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
        $getData = UserPermissions::select('GroupID')
            ->groupBy('GroupID')
            ->get()
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
        
        $UserID = session('id');
        $PermissionsBody = $request->post('PermissionsBody');
        
        foreach ($PermissionsBody as $value) {
            
            $UserPermissions = UserPermissions::updateOrCreate(
                [
                    'id' => $value['id'],
                ],
                [
                    'GroupID' => $value['GroupName'],
                    'FormName' =>$value['FormName'],
                    'Enable' => $value['Enable'],
                    'OptionAdd' => $value['OptionAdd'],
                    'OptionEdit' => $value['OptionEdit'],
                    'OptionDel' =>$value['OptionDel'],
                    'ReadOnly' => $value['ReadOnly'],
                    'UserID' => $UserID,
    
                ]
            );
        }
        

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
