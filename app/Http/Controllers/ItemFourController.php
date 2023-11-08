<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use App\Models\ItemsFour;
use App\Models\Modell;

class ItemFourController extends Controller
{

    public function index()
    {

        if (session()->has('User')) {
            return view('store.index');
        }
    }


    public function create(Request $request)
    {
        $id=$request->input('IT_ID');
        $data=[
            'getItemsFour'=> ItemsFour::with('itemsFive')->where('IT4_FK_IT',$id)->get(),
        ];

        return response()->json($data);
    }


    public function store(Request $request)
    {

        $ItemsFour = new ItemsFour([
            'IT4_FK_IT' => $request->post('IT4_FK_IT'),
            'IT4_DateRange' => $request->post('IT4_DateRange'),
            'IT4_Model' => $request->post('IT4_Model'),
            'IT4_FramesOptions' => $request->post('IT4_FramesOptions'),
            'IT4_UserName' => session('User'),


        ]);
        $ItemsFour->save();

        return response()->json(['status' => 'تم اضافة البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('IT4_ID');
        $data = ItemsFour::find($id);
        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        $id = $request->post('IT4_ID');
        $data = ItemsFour::find($id);
        $data->IT4_FK_IT = $request->post('IT4_FK_IT');
        $data->IT4_DateRange = $request->post('IT4_DateRange');
        $data->IT4_Model = $request->post('IT4_Model');
        $data->IT4_FramesOptions = $request->post('IT4_FramesOptions');
        $data->update();



        return response()->json(['status' => 'تم تحديث البيانات بنجاح']);
    }


    public function destroy(Request $request)
    {
        $id = $request->input('IT4_ID');
        ItemsFour::find($id)->delete();
        return response()->json([
            'status' => 'تم حذف البيانات بنجاح'
        ]);
    }



}
