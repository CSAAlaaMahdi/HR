<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;
use App\Models\User2;
use Illuminate\Support\Facades\Session;

class LoginController extends Controller
{
    public function index()
    {
        return view('admin.login.login');
    }
    public function checking(Request $request)
    {
        $data = $request->input();
        $Username = $request->input('username');
        $password = $request->input('password');
        $info = User2::all();
        if (count($info) > 0) {

            $Userinfo = User2::where('username', $Username)->get();
            if (count($Userinfo) > 0) {
                if ($Userinfo[0]->pwd == $password) {
                    $request->session()->put('id', $Userinfo[0]->userid);
                    $request->session()->put('User', $Userinfo[0]->username);
                    $data = [
                        'User' => session('User'),
                        'id' => session('id'),
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

    public function logOut(Request $request)
    {
        // Flush all session data
        Session::flush();

        // Optionally, you can also invalidate the session and regenerate the session token
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        // Redirect to the login page or return a JSON response
        return response()->json(['status' => 'تم تسجيل الخروج بنجاح']);
    }
}
