<?php

namespace App\Http\Controllers;

use App\Models\Thanks;
use App\Models\Employees;
use Illuminate\Http\Request;


class ThanksController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('administration.thanks');
        }
    }


    public function create(Request $request)
    {
        $getData = Thanks::orderByDesc('id')->get()->map(function($item){
            $item['eid'] = Employees::find($item['eid']) != null ? Employees::find($item['eid'])->fullname : "" ;
            return $item;
        });

        $data = [
            'getThanks' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $id = $request->post('id');
        $Thanks = Thanks::updateOrCreate(
            [
                'id' => $id,
            ],
            [
                'eid' => $request->post('eid'),
                'ttype' => $request->post('ttype'),
                'reason' => $request->post('reason'),
                'docno' => $request->post('docno'),
                'docdate' => $request->post('docdate'),
                'notes' => $request->post('notes'),


            ]
        );
        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('id');
        $Thanks = Thanks::find($id);

        return response()->json($Thanks);
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
        Thanks::find($id)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getThanksType = Thanks::select('ttype')
            ->whereNotNull('ttype')
            ->where('ttype', '<>', '')
            ->distinct()
            ->orderBy('ttype')
            ->get();
        $getEmp = Employees::select('eid', 'fullname')
            ->orderBy('fullname')
            ->get();

        $data = [
            'getThanksType' => $getThanksType,
            'getEmp' => $getEmp,


        ];
        return response()->json($data);
    }
}
