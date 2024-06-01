<?php

namespace App\Http\Controllers;

use App\Models\Forms;
use App\Models\UserGroupPermissions;
use App\Models\UserPermissions;
use Faker\Core\Number;
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
            ->map(function ($item) {
                $item->GroupName = UserGroupPermissions::find($item['GroupID'])->GroupName;
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
        $getGroup = UserPermissions::where('GroupID', $PermissionsBody[0]['GroupID'])->get();
        if ($getGroup->count() === 0) {
            foreach ($PermissionsBody as $value) {

                $UserPermissions = UserPermissions::updateOrCreate(
                    [
                        'id' => $value['id'],
                    ],
                    [
                        'GroupID' => $value['GroupID'],
                        'FormName' => $value['FormName'],
                        'Enable' => $value['Enable'],
                        'OptionAdd' => $value['OptionAdd'],
                        'OptionEdit' => $value['OptionEdit'],
                        'OptionDel' => $value['OptionDel'],
                        // 'ReadOnly' => $value['ReadOnly'],
                        'UserID' => $UserID,

                    ]
                );
            }
        } else {

            foreach ($PermissionsBody as $value) {

                $UserPermissions = UserPermissions::updateOrCreate(
                    [
                        'id' => $value['id'],
                    ],
                    [
                        'GroupID' => $value['GroupID'],
                        'FormName' => $value['FormName'],
                        'Enable' => $value['Enable'],
                        'OptionAdd' => $value['OptionAdd'],
                        'OptionEdit' => $value['OptionEdit'],
                        'OptionDel' => $value['OptionDel'],
                        // 'ReadOnly' => $value['ReadOnly'],
                        'UserID' => $UserID,

                    ]
                );
            }
        }





        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $GroupID = $request->input('GroupID');
        $UserPermissions = UserPermissions::where('GroupID', '=', $GroupID)->get();
        foreach ($UserPermissions as  $value) {
            $value['OptionAdd'] = $value['OptionAdd'] === '1' ? true : false;
            $value['OptionEdit'] = $value['OptionEdit'] === '1' ? true : false;
            $value['OptionDel'] = $value['OptionDel'] === '1' ? true : false;
            $value['ReadOnly'] = $value['ReadOnly'] === '1' ? true : false;
            $value['Enable'] = $value['Enable'] === '1' ? true : false;
        }
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
        $GetForms = $GetForms->map(function ($form) use ($GroupID) {
            $form->GroupID = $GroupID;
            return $form;
        });
        $getUserPermissions = UserPermissions::where('GroupID', $GroupID)->get();
        foreach ($getUserPermissions as  $value) {
            $value['OptionAdd'] = $value['OptionAdd'] === '1' ? true : false;
            $value['OptionEdit'] = $value['OptionEdit'] === '1' ? true : false;
            $value['OptionDel'] = $value['OptionDel'] === '1' ? true : false;
            $value['ReadOnly'] = $value['ReadOnly'] === '1' ? true : false;
        }
        $data = [
            'GetForms' => $GetForms,
            'GetPermissionsCount' => $getUserPermissions->count(),
            'GetPermissions' => $getUserPermissions,
        ];
        return response()->json($data);
    }
}
