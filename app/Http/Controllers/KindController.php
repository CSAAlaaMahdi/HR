<?php

namespace App\Http\Controllers;

use App\Models\Kind;
use Illuminate\Http\Request;

class KindController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('info.kinds');
        }
    }


    public function create(Request $request)
    {
        $data=[
            'getKinds' => Kind::orderBy('K_RowID','ASC')->get(),
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $rowid=Kind::max('K_RowID');
        $Kind = new Kind([
            'K_Name' => $request->post('K_Name'),
            'K_RowID' =>$rowid +1,
            // 'K_UserGuid' => session('User')
        ]);
        $Kind->save();

        return response()->json(['status' => 'تم اضافة البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $Guid = $request->input('K_Guid');
        $data = Kind::find($Guid);
        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        $Guid = $request->post('K_Guid');
        $data = Kind::find($Guid);
        $data->K_Name = $request->post('K_Name');
        // $data->K_UserGuid = session('User');
        $data->update();

        return response()->json(['status' => ' تم تحديث البيانات بنجاح']);
    }


    public function destroy(Request $request)
    {
        $Guid = $request->post('K_Guid');
        Kind::find($Guid)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }
}
