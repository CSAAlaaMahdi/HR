<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Employees;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;

class Admin extends Controller
{
    public function index()
    {
        if(session()->has('User'))
        {
            return view('admin.dashboard');
        };


        // }

    }

    public function cardsData(Request $request)
    {
        if ($request->id == 0) {



            $data = [
                'Employees' => collect(DB::select("SET NOCOUNT ON ; exec Sp_EmpCount"))->first(),
                'GetVacations' => collect(DB::select("SET NOCOUNT ON ; exec Sp_GetVacations"))->first(),
                'GetDispatches' => collect(DB::select("SET NOCOUNT ON ; exec Sp_GetDispatches"))->first(),
                'GetResearches' => collect(DB::select("SET NOCOUNT ON ; exec Sp_GetResearches"))->first(),
                // 'GetCertifications' => $certifications,

            ];


            return response()->json($data);
        }
    }

    public function GetCertifications(Request $request)
    {
        $certifications = DB::table('certification_data')
        ->select('certification', DB::raw('count(*) as total'))
        ->groupBy('certification')
        ->get();
        $count = 0;
        $certifications->map(function ($item) use ( $count) {
            $item->id = $count ++;
            return $item;
        });
        $jCategory = DB::table('emp_data')
        ->select('jcategory', DB::raw('count(*) as total'))
        ->groupBy('jcategory')
        ->get();
        $count = 0;
        $jCategory->map(function ($item) use ( $count) {
            $item->id = $count ++;
            return $item;
        });
        $data = [

            'GetCertifications' => $certifications,
            'GetCategory' => $jCategory,

        ];
        return response()->json($data);
    }


}
