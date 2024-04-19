<?php

namespace App\Http\Controllers;

use App\Models\Vacations;
use App\Models\Employees;
use Illuminate\Http\Request;


class VacationsController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('administration.vacations');
        }
    }


    public function create(Request $request)
    {
        $getData = Vacations::orderByDesc('vcid')->get()->map(function($item){
            $item['eid'] = Employees::find($item['eid']) != null ? Employees::find($item['eid'])->fullname : "" ;
            return $item;
        });

        $data = [
            'getVacations' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $vcid = $request->post('vcid');
        $Vacations = Vacations::updateOrCreate(
            [
                'vcid' => $vcid,
            ],
            [
                'eid' => $request->post('eid'),
                'vtid' => $request->post('vtid'),
                'vdate' => $request->post('vdate'),
                'nodays' => $request->post('nodays'),
                'docno' => $request->post('docno'),
                'docdate' => $request->post('docdate'),


            ]
        );
        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $vcid = $request->input('vcid');
        $Vacations = Vacations::find($vcid);

        return response()->json($Vacations);
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
        $vcid = $request->post('vcid');
        Vacations::find($vcid)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getVtID = Vacations::select('vtid')
            ->whereNotNull('vtid')
            ->where('vtid', '<>', '')
            ->distinct()
            ->orderBy('vtid')
            ->get();
        $getEmp = Employees::select('eid', 'fullname')
            ->orderBy('fullname')
            ->get();

        $data = [
            'getVtID' => $getVtID,
            'getEmp' => $getEmp,


        ];
        return response()->json($data);
    }
}
