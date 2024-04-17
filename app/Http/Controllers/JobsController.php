<?php

namespace App\Http\Controllers;


use App\Models\Jobs;
use App\Models\Employees;
use Illuminate\Http\Request;


class JobsController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('administration.jobs');
        }
    }


    public function create(Request $request)
    {
        $getData = Jobs::all()->map(function ($item) {
            $item['eid'] = Employees::find($item['eid']) != null ? Employees::find($item['eid'])->fullname : "";
            return $item;
        });

        $data = [
            'getJobs' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $jid = $request->post('jid');
        $Job = Jobs::updateOrCreate(
            [
                'jid' => $jid,
            ],
            [
                'eid' => $request->post('eid'),
                'jtitle' => $request->post('jtitle'),
                'jdegree' => $request->post('jdegree'),
                'jstage' => $request->post('jstage'),
                'getdate' => $request->post('getdate'),
                'docno' => $request->post('docno'),
                'docdate' => $request->post('docdate'),


            ]
        );
        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $jid = $request->input('jid');
        $Job = Jobs::find($jid);

        return response()->json($Job);
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
        $jid = $request->post('jid');
        Jobs::find($jid)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getEmp = Employees::select('eid', 'fullname')->orderBy('fullname')->get();
        $getJobTitle = Jobs::select('jtitle')
            ->whereNotNull('jtitle')
            ->where('jtitle', '<>', '')
            ->distinct()
            ->orderBy('jtitle')
            ->get();
        $data = [
            'getEmp' => $getEmp,
            'getJobTitle' => $getJobTitle,


        ];
        return response()->json($data);
    }
}
