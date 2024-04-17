<?php

namespace App\Http\Controllers;

use App\Models\Comity;
use App\Models\Employees;
use Illuminate\Http\Request;


class ComityController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('administration.comity');
        }
    }


    public function create(Request $request)
    {
        $getData = Comity::all();

        $data = [
            'getComity' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $id = $request->post('id');
        $Comity = Comity::updateOrCreate(
            [
                'id' => $id,
            ],
            [
                'ctype' => $request->post('ctype'),
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
        $Comity = Comity::find($id);

        return response()->json($Comity);
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
        Comity::find($id)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getComity = Comity::select('ctype')
            ->whereNotNull('ctype')
            ->where('ctype', '<>', '')
            ->distinct()
            ->orderBy('ctype')
            ->get();
       
        $data = [
            'getComity' => $getComity,


        ];
        return response()->json($data);
    }
}
