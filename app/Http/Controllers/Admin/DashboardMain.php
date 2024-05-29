<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Employees;
use App\Models\User2;
use App\Models\UserPermissions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;

class DashboardMain extends Controller
{
    public function index()
    {


        if (session()->has('User')) {
            $id = session('id');
            // $user = User2::find($id);
            // $data = [
            //     'User' => $user,
            // ];
            // dd($data);
            return view('admin.maindashboard');
        }
    }

    public function filldata()
    {
        $id = session('id');
        $user = User2::find($id)->loginname;
        $data = [
            'User' => $user,
        ];
        return response()->json($data);
    }
    public function getPermissions()
    {
        $id = session('id');
        $user = User2::find($id);
        $Permission = UserPermissions::where('GroupID', '=', $user->GroupID)->get();

        foreach ($Permission as $value) {
            $value['Enable'] = $value['Enable'] === '1' ? true : false;
            $value['OptionAdd'] = $value['OptionAdd'] === '1' ? true : false;
            $value['OptionEdit'] = $value['OptionEdit'] === '1' ? true : false;
            $value['OptionDel'] = $value['OptionDel'] === '1' ? true : false;
            $value['ReadOnly'] = $value['ReadOnly'] === '1' ? true : false;
        }
        $data = [
            'Permission' => $Permission,
        ];
        return response()->json($data);
    }
    
}
