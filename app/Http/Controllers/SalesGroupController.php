<?php

namespace App\Http\Controllers;

use App\Models\Item;
use App\Models\SalesGroup;
use App\Models\State;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class SalesGroupController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('info.salesgroups');
        }
    }


    public function create(Request $request)
    {

        $getData = SalesGroup::select('Gs_Guid','Gs_Name',DB::raw("CASE WHEN Gs_State = 1 THEN 'Active' ELSE 'Inactive' END AS Gs_State"),'Gs_SalesRatio','Gs_RowID')-> orderBy('Gs_RowID', 'ASC')->get();
        $data = [
            'getSalesGroup' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $row = SalesGroup::max('Gs_RowID');
        $SalesGroup = new SalesGroup([
            'Gs_Guid' => (string) Str::uuid(),
            'Gs_Name' => $request->post('Gs_Name'),
            'Gs_State' => $request->post('Gs_State'),
            'Gs_SalesRatio' => $request->post('Gs_Ratio'),
            'Gs_RowID' => $row + 1,
            // 'Gs_UserName'=>session('User')
        ]);
        $SalesGroup->save();

        return response()->json(['status' => 'Adding Data Successfully..']);
    }


    public function show(Request $request)
    {
        // $id = $request->input('getid');
        // $data = SalesGroup::find($id);
        // return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        $guid = $request->post('Gs_Guid');
        $data = SalesGroup::find($guid);
        $data->Gs_Name = $request->post('Gs_Name');
        $data->Gs_State = $request->post('Gs_State');
        $data->Gs_SalesRatio = $request->post('Gs_Ratio');
        // $data->Gs_UserName = session('User');
        $data->update();

        return response()->json(['status' => ' Updating Successfully...']);
    }


    public function destroy(Request $request)
    {
        // $id = $request->post('getid');
        // SalesGroup::find($id)->delete();
        // return response()->json(['status' => 'Deleting Successfully...']);
    }


}
