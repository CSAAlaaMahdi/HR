<?php

namespace App\Http\Controllers;


use App\Models\Activity;
use App\Models\Employees;
use Illuminate\Http\Request;


class ActivityController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('administration.activity');
        }
    }


    public function create(Request $request)
    {
        $getData = Activity::orderByDesc('aid')->get();

        $data = [
            'getActivity' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $aid = $request->post('aid');
        $Job = Activity::updateOrCreate(
            [
                'aid' => $aid,
            ],
            [
                'act_id' => $request->post('act_id'),
                'Aname' => $request->post('Aname'),
                'Place' => $request->post('Place'),
                'ActDate' => $request->post('ActDate'),
                'NoDays' => $request->post('NoDays'),
                'Participants' => $request->post('Participants'),
                'Notes' => $request->post('Notes'),


            ]
        );
        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $aid = $request->input('aid');
        $Job = Activity::find($aid);

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
        $aid = $request->post('aid');
        Activity::find($aid)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {


        $getAct_ID = Activity::select('act_id')
            ->whereNotNull('act_id')
            ->where('act_id', '<>', '')
            ->distinct()
            ->orderBy('act_id')
            ->get();
        $data = [
            'getAct_ID' => $getAct_ID,


        ];
        return response()->json($data);
    }
}
