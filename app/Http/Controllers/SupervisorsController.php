<?php

namespace App\Http\Controllers;

use App\Models\Supervisors;
use App\Models\Employees;
use Illuminate\Http\Request;


class SupervisorsController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('administration.supervisor');
        }
    }


    public function create(Request $request)
    {
        $getData = Supervisors::orderByDesc('id')->get()->map(function($item){
            $item['eid'] = Employees::find($item['eid']) != null ? Employees::find($item['eid'])->fullname : "" ;
            return $item;
        });

        $data = [
            'getSupervisors' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $id = $request->post('id');
        $Supervisors = Supervisors::updateOrCreate(
            [
                'id' => $id,
            ],
            [
                'eid' => $request->post('eid'),
                'sdeg' => $request->post('sdeg'),
                'sname' => $request->post('sname'),
                'docno' => $request->post('docno'),
                'docdate' => $request->post('docdate'),


            ]
        );
        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('id');
        $Supervisors = Supervisors::find($id);

        return response()->json($Supervisors);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
    }


    public function destroy(Request $request)
    {
        $id = $request->post('id');
        Supervisors::find($id)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getSdeg = Supervisors::select('sdeg')
            ->whereNotNull('sdeg')
            ->where('sdeg', '<>', '')
            ->distinct()
            ->orderBy('sdeg')
            ->get();
        $getEmp = Employees::select('eid', 'fullname')
            ->orderBy('fullname')
            ->get();

        $data = [
            'getSdeg' => $getSdeg,
            'getEmp' => $getEmp,


        ];
        return response()->json($data);
    }
}
