<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ItemsThree;
use App\Models\Stories;
use Illuminate\Support\Facades\DB;

class ItemThreeController extends Controller
{

    public function index()
    {

        // if (session()->has('User')) {
        //     return view('store.index');
        // }
    }


    public function create(Request $request)
    {
        $id=$request->input('IT_ID');
        $data=[
            'getItemThree' =>collect(DB::select("SET NOCOUNT ON ; exec ItemThree_GetData @id ='" . $id . "'"))->all()
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {


        // return response()->json(['status' => 'Adding Data Successfully...']);
    }


    public function show(Request $request)
    {
        $id = $request->input('IT2_ID');
        $data = ItemsThree::find($id);
        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        $id = $request->post('IT2_ID');
        $data = ItemsThree::find($id);
        $data->IT2_State = $request->post('IT2_State');
        $data->IT2_ItemPosition = $request->post('IT2_ItemPosition');
        $data->update();

        return response()->json(['status' => 'تم تحديث البيانات بنجاح']);
    }


    public function destroy(Request $request)
    {

    }
    public function filldata()
    {


    }

    public function getMainStoreName(Request $request)
    {


    }
}
