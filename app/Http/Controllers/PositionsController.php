<?php

namespace App\Http\Controllers;

use App\Models\Positions;
use App\Models\Employees;
use Illuminate\Http\Request;


class PositionsController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('administration.positions');
        }
    }


    public function create(Request $request)
    {
        $getData = Positions::orderByDesc('id')->get()->map(function ($item) {
            $item['eid'] = Employees::find($item['eid']) != null ? Employees::find($item['eid'])->fullname : "";
            return $item;
        });

        $data = [
            'getPositions' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $id = $request->post('id');
        $Positions = Positions::updateOrCreate(
            [
                'id' => $id,
            ],
            [
                'eid' => $request->post('eid'),
                'ptypeid' => $request->post('ptypeid'),
                'pname' => $request->post('pname'),
                'docno' => $request->post('docno'),
                'docdate' => $request->post('docdate'),
                'datefrom' => $request->post('datefrom'),
                'dateto' => $request->post('dateto'),


            ]
        );
        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('id');
        $Positions = Positions::find($id);

        return response()->json($Positions);
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
        Positions::find($id)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getPName = Positions::select('pname')
            ->whereNotNull('pname')
            ->where('pname', '<>', '')
            ->distinct()
            ->orderBy('pname')
            ->get();
        $getPType = Positions::select('ptypeid')
            ->whereNotNull('ptypeid')
            ->where('ptypeid', '<>', '')
            ->distinct()
            ->orderBy('ptypeid')
            ->get();
        $getEmp = Employees::select('eid', 'fullname')
            ->orderBy('fullname')
            ->get();

        $data = [
            'getPName' => $getPName,
            'getEmp' => $getEmp,
            'getPType' => $getPType,


        ];
        return response()->json($data);
    }
}
