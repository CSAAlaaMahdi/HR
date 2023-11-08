<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Unitname;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class UnitnameController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('info.unitname');
        }
    }


    public function create(Request $request)
    {
        $getData = Unitname::orderBy('Ui_RowID', 'ASC')->get();
        $data = [
            'getUnits' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $rowid = Unitname::max('Ui_RowID');
        $Unitname = new Unitname([
            'Ui_Guid' => (string) Str::uuid(),
            'Ui_Name' => $request->post('Ui_Name'),
            'Ui_Piece' => $request->post('Ui_Piece'),
            'Ui_PieceType' => $request->post('Ui_PieceType'),
            'Ui_RowID' => $rowid + 1,
            // 'Ui_UserGuid'=>session('User')
        ]);
        $Unitname->save();

        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        // $id = $request->input('getid');
        // $data = Unitname::find($id);
        // return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        $Guid = $request->post('Ui_Guid');
        $data = Unitname::find($Guid);
        $data->Ui_Name = $request->post('Ui_Name');
        $data->Ui_Piece = $request->post('Ui_Piece');
        $data->Ui_PieceType = $request->post('Ui_PieceType');
        // $data->Ui_UserName = session('User');
        $data->update();

        return response()->json(['status' => 'تم تحديث البيانات بنجاح']);
    }


    public function destroy(Request $request)
    {
        $guid = $request->post('Ui_Guid');
        Unitname::find($guid)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }
}
