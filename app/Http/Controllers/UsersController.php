<?php

namespace App\Http\Controllers;

use App\Models\Depts;
use App\Models\User2;
use Illuminate\Http\Request;



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
        if ($Guid == null || $Guid == "") {
            $Guid = strtoupper(Uuid::uuid4()->toString());
        }
        $User = User2::updateOrCreate(
            [
                'userid' => $Guid,
            ],
            [
                'loginname' => $request->post('loginname'),
                'username' => $request->post('username'),
                'pwd' => $request->post('pwd'),
                'deptid' => $request->post('deptid'),
                'ulvl' => $request->post('ulvl'),
                'UserPassW' => $request->post('UserPassW'),
                'teachno' => $request->post('teachno'),


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

        $data = [
            'getDepts' => $getDepts,
        ];
        return response()->json($data);
    }
}
