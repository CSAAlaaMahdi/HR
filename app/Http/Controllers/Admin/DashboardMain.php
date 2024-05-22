<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\User2;
use App\Models\UserPermissions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
    // public function cardsData(Request $request)
    // {
    //     if ($request->id == 0) {
    //         $data = [
    //             'employeescount' => collect(DB::select("SET NOCOUNT ON ; exec Sp_MechanismsAD_EmployeeCount"))->all(),
    //             'carscount' => collect(DB::select("SET NOCOUNT ON ; exec Sp_MechanismsAD_DCS_CarsCount"))->all(),
    //             'attendance' => collect(DB::select("SET NOCOUNT ON ; exec Sp_Attendance"))->all(),
    //             'movementsanddispatches' => collect(DB::select("SET NOCOUNT ON ; exec Sp_DispatchesAndMovements"))->all(),
    //         ];


    //         return response()->json($data);
    //     }
    // }
}
