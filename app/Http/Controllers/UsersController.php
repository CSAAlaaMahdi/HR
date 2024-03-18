<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\User2;
use App\Models\UsersGroups;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Foundation\Auth\User as Authenticatable;
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
        $getData = User2::all()->map(function ($item) {
            $item['U_State'] = $item['U_State'] > 0 ? 'نشط' : 'خامل';
            return $item;
        });
        $data = [
            'getUsers' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {

        $Guid = $request->post('U_Guid');
        if ($Guid == null || $Guid == "") {
            $Guid = strtoupper(Uuid::uuid4()->toString());
        }
        $User = User2::updateOrCreate(
            [
                'id' => $Guid,
            ],
            [
                'U_Email' => $request->post('U_Email'),
                'U_Name' => $request->post('U_Name'),
                'U_Password' => $request->post('U_Password'),
                'U_State' => $request->post('U_State'),
                'U_Department' => $request->post('U_Department'),
                'U_PermissionsGroup' => $request->post('U_PermissionsGroup'),


            ]
        );

        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('U_Guid');
        $data = User2::find($id);
        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        $Guid = $request->post('Ui_Guid');
        $data = User::find($Guid);
        $data->Ui_Name = $request->post('Ui_Name');
        $data->Ui_Piece = $request->post('Ui_Piece');
        $data->Ui_PieceType = $request->post('Ui_PieceType');
        // $data->Ui_UserName = session('User');
        $data->update();

        return response()->json(['status' => 'تم تحديث البيانات بنجاح']);
    }


    public function destroy(Request $request)
    {
        $guid = $request->post('U_Guid');
        User2::find($guid)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getUsersGroups = UsersGroups::orderBy('UG_RowID')->get();

        $data = [
            'getUsersGroups' => $getUsersGroups,
        ];
        return response()->json($data);
    }
}
