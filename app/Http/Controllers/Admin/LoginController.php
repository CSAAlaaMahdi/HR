<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\User2;

class LoginController extends Controller
{
    public function index()
    {
        return view('admin.login.login');
    }
    public function checking(Request $request)
    {
        $data=$request->input();
        $Username = $request->input('username');
        $password = $request->input('password');
        $info = User2::all();
        if (count($info) > 0) {

            $Userinfo = User2::where('username', $Username)->get();
            if (count($Userinfo) > 0) {
                if ($Userinfo[0]->pwd == $password) {
                    $request->session()->put('id',$Userinfo[0]->userid);
                    $request->session()->put('User',$Userinfo[0]->username);
                    $data=[
                        'User'=>session('User'),
                        'id'=>session('id'),
                    ];
                    return response()->json($data);
                } else {
                    $data = ['password' => 'خطأ كلمة المرور'];
                    return response()->json($data);
                }
            } else {
                $data = ['Username' => 'هذا المستخدم غير موجود'];
                return response()->json($data);
            }
        }

    }
}
