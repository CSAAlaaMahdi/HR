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
             
            ];


            return response()->json($data);
        }
    }



}
