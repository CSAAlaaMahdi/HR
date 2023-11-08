<?php

namespace App\Http\Controllers;

use App\Models\Modell;
use Illuminate\Http\Request;

class ModelController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('info.modells');
        }
    }


    public function create(Request $request)
    {
       $data=[
        'getModels' => Modell::orderBy("M_RowID","ASC")->get(),
       ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $rowid= Modell::max("M_RowID");
        $Modell = new Modell([
            'M_Name' => $request->post('M_Name'),
            'M_RowID' => $rowid + 1,
            // 'M_UserName' => session('User')
        ]);
        $Modell->save();

        return response()->json(['status' => 'تم اضافة البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $Guid = $request->input('M_Guid');
        $data = Modell::find($Guid);
        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        $Guid = $request->post('M_Guid');
        $data = Modell::find($Guid);
        $data->M_Name = $request->post('M_Name');
        $data->M_RowID = $request->post('M_RowID');
        // $data->Mo_UserName = session('User');
        $data->update();

        return response()->json(['status' => ' تم تحديث البيانات بنجاح']);
    }


    public function destroy(Request $request)
    {
        $Guid = $request->post('M_Guid');
        Modell::find($Guid)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }
}
