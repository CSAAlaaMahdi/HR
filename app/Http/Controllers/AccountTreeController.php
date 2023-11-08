<?php

namespace App\Http\Controllers;

use App\Models\Account;
use App\Models\AccountTree;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Guid\Guid;
use Illuminate\Support\Str;
class AccountTreeController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('accounts.index');
        }
    }


    public function getTreeListData()
    {
        // Fetch data from your database or any other source

        $query =[
            'AccountTree' => collect(DB::select("SET NOCOUNT ON ; exec Account_GetTree"))
                ->all()
        ];


        return response()->json($query);
    }

    public function create(Request $request)
    {
        $data =[
            'AccountTree' => collect(DB::select("SET NOCOUNT ON ; exec Account_GetTree"))
                ->all()
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {   $rowID= AccountTree::max('Ac_RowID');
        $AccountTree = new AccountTree([
            'Guid' =>(String) Str::uuid(),
            'Parent_Guid'=> $request->post('Ac_ParentGuid') ? $request->post('Ac_ParentGuid') :   null,
            'Ac_Name' => $request->post('Ac_Name'),
            'Ac_Code_Mask' => $request->post('Ac_Code'),
            'Ac_RowID' => $rowID + 1,
            // 'Ac_UserName'=>session('User')
        ]);
        $AccountTree->save();

        return response()->json(['status' => 'Adding Data Successfully..']);
    }


    public function show(Request $request)
    {
        // $id = $request->input('getid');
        // $data = AccountTree::find($id);
        // return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        $guid = $request->post('Ac_Guid');
        $data = AccountTree::find($guid);
        $data->Ac_Name = $request->post('Ac_Name');
        $data->Ac_Code_Mask = $request->post('Ac_Code');
        $data->Parent_Guid = $request->post('Ac_ParentGuid');
        // $data->Ac_UserName = session('User');
        $data->update();

        return response()->json(['status' => ' Updating Successfully...']);
    }


    public function destroy(Request $request)
    {
        // $id = $request->post('getid');
        // AccountTree::find($id)->delete();
        // return response()->json(['status' => 'Deleting Successfully...']);
    }

    public function filldata()
    {

        $accounts= AccountTree::select('Guid','Parent_Guid','Ac_Name','Ac_Code_Mask','Ac_RowID')->orderBy('Ac_RowID','ASC')->get();
        $data = [
            'getAccount' =>$accounts,
        ];
        return response()->json($data);
    }
    public function setCode(Request $request){
        $ac_Guid = $request->post('Ac_Guid');

        $getdata= AccountTree::where('Parent_Guid',$ac_Guid)->orderBy('Ac_RowID','DESC')->first();
        $getParent = AccountTree::where('Guid',$ac_Guid)->first();
        $data=[
            'getData'=>$getdata,
            'getParent'=>$getParent,
        ];
        return response()->json($data);


    }

}
