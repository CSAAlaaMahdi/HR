<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;

use Illuminate\Support\Carbon;


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
   

   

   
}
