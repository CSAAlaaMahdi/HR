<?php

namespace App\Http\Controllers;

use App\Models\Places;
use App\Models\Employees;
use Illuminate\Http\Request;


class PlacesController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('store.places');
        }
    }


    public function create(Request $request)
    {
        $getData = Places::orderBy('ID')->get();
        $data = [
            'getPlaces' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $ID = $request->post('ID');
        $Places = Places::updateOrCreate(
            [
                'ID' => $ID,
            ],
            [
                'perID' => $request->post('perID') != 0 ? $request->post(   'perID') : null,
                'placeName' => $request->post('placeName'),


            ]
        );
        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $ID = $request->input('ID');
        $Places = Places::find($ID);

        return response()->json($Places);
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
        $ID = $request->post('ID');
        Places::find($ID)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getPlaces = Places::where('perID', null)->get();

        $data = [
            'getPlaces' => $getPlaces,

        ];
        return response()->json($data);
    }
}
