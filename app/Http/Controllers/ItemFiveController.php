<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Models\ItemsFive;
use App\Models\Modell;

class ItemFiveController extends Controller
{

    public function index()
    {

        if (session()->has('User')) {
            return view('store.index');
        }
    }


    public function create(Request $request)
    {

    }


    public function store(Request $request)
    {
        $ItemsFive = new ItemsFive([
            'IT5_FK_IT4' => $request->post('IT5_FK_IT4'),
            'IT5_ModelDate' => $request->post('IT5_ModelDate'),
            'IT5_MatchingModels' => $request->post('IT5_MatchingModels'),
            'IT5_ModelOptions' => $request->post('IT5_ModelOptions'),
            // 'IT5_UserGuid' => session('User'),
        ]);
        $ItemsFive->save();

        return response()->json(['status' => 'تم اضافة البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('IT5_ID');
        $data = ItemsFive::find($id);
        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        $id = $request->post('IT5_ID');
        $data = ItemsFive::find($id);
        $data->IT5_FK_IT4 = $request->post('IT5_FK_IT4');
        $data->IT5_ModelDate = $request->post('IT5_ModelDate');
        $data->IT5_MatchingModels = $request->post('IT5_MatchingModels');
        $data->IT5_ModelOptions = $request->post('IT5_ModelOptions');
        // $data->IT5_UserName=session('User');
        $data->update();



        return response()->json(['status' => 'تم تحديث البيانات بنجاح']);
    }


    public function destroy(Request $request)
    {
        // $id = $request->input('getid');
        // ItemsFive::find($id)->delete();
        // return response()->json([
        //     'status' => 'Deleting Successfully....'
        // ]);
    }
    public function filldata()
    {

        // $data = [
        //     'getModel' => Modell::select('Mo_Name')->groupBy('Mo_Name')->get(),
        // ];
        // return response()->json($data);
    }
}
