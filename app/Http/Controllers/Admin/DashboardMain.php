<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DashboardMain extends Controller
{
    public function index()
    {


        if (session()->has('user')) {
            return view('admin.maindashboard');

        }
    }

    public function cardsData(Request $request)
    {
        if ($request->id == 0) {
            $data = [
                'employeescount' => collect(DB::select("SET NOCOUNT ON ; exec Sp_MechanismsAD_EmployeeCount"))->all(),
                'carscount' => collect(DB::select("SET NOCOUNT ON ; exec Sp_MechanismsAD_DCS_CarsCount"))->all(),
                'attendance' => collect(DB::select("SET NOCOUNT ON ; exec Sp_Attendance"))->all(),
                'movementsanddispatches' => collect(DB::select("SET NOCOUNT ON ; exec Sp_DispatchesAndMovements"))->all(),
            ];


            return response()->json($data);
        }
    }
}
