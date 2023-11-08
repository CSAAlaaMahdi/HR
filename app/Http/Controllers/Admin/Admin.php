<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Movement;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use PhpOffice\PhpSpreadsheet\Calculation\DateTimeExcel\Month;
use Response;

class Admin extends Controller
{
    public function index()
    {
        // if(session()->has('user'))
        // {
        // $data=Movement::select('M_Department','M_ReportDate')->get()->groupBy(function($data){
        //     return Carbon::parse($data->M_ReportDate)->format('M');
        // });

        return view('admin.dashboard');
        // }

    }
    public function departmentMovements(Request $request)
    {

        $mon=$request->input('monthvalue');
        if($mon==='non')
        {
            $data = Movement::select('id', 'M_Department')->whereMonth('M_ReportDate',now())->get()->groupBy('M_Department');
            $months = [];
            $monthcount = [];
            foreach ($data as $month => $values) {
                $months[] = $month;
                $monthcount[] = count($values);
            }

            return response()->json([
                'month' => $months,
                'monthcount' => $monthcount
            ]);
        }
        else{
            $data = Movement::select('id', 'M_Department')->whereMonth('M_ReportDate',$mon)->get()->groupBy('M_Department');
            $months = [];
            $monthcount = [];
            foreach ($data as $month => $values) {
                $months[] = $month;
                $monthcount[] = count($values);
            }

            return response()->json([
                'month' => $months,
                'monthcount' => $monthcount
            ]);
        }

    }

    public function monthsMovements()
    {
            $data=collect(DB::select("SET NOCOUNT ON ; exec Sp_YearMovements"))->all();
            $months = [];
            $movement=[];
            $dispatches=[];
            foreach ($data as $month => $values) {
                $months[] =$values->NameofMonth ;
                $movement[]=$values->Movements;
                $dispatches[]=$values->Dispatches;

            }

            return response()->json(['montname'=>$months,'movements'=>$movement,'dispatches'=>$dispatches
            ]);

    }

   
}
