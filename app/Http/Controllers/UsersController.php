<?php

namespace App\Http\Controllers;

use App\Models\Depts;
use App\Models\User2;
use App\Models\UserGroupPermissions;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;

class UsersController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('users.index');
        }
    }


    public function create(Request $request)
    {
        $getData = User2::orderBy('userid')->get()->map(function ($item) {
            $item['deptid'] = Depts::find($item['deptid'])->deptname;
            $item['GroupID'] = UserGroupPermissions::find($item['GroupID']) != null? UserGroupPermissions::find($item['GroupID'])->GroupName : null ;
            return $item;
        });
        $data = [
            'getUsers' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {

        $Guid = $request->post('userid');
        // if ($Guid == null || $Guid == "") {
        //     $Guid = strtoupper(Uuid::uuid4()->toString());
        // }
        $User = User2::updateOrCreate(
            [
                'userid' => $Guid,
            ],
            [
                'loginname' => $request->post('loginname'),
                'username' => $request->post('username'),
                'pwd' => $request->post('pwd'),
                'deptid' => $request->post('deptid'),
                // 'ulvl' => $request->post('ulvl'),
                // 'UserPassW' => $request->post('UserPassW'),
                'GroupID' => $request->post('GroupID'),


            ]
        );

        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('userid');
        $data = User2::find($id);
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
        $guid = $request->post('userid');
        User2::find($guid)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getDepts = Depts::all();
        $getGroups = UserGroupPermissions::all();

        $data = [
            'getDepts' => $getDepts,
            'getGroups' => $getGroups,
        ];
        return response()->json($data);
    }
}
