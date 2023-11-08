<?php

namespace App\Http\Controllers;

use App\Models\AccountTree;
use App\Models\Stories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Guid\Guid;
use Illuminate\Support\Str;
use Ramsey\Uuid\Uuid;

class StoriesTreeController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('store.stories');
        }
    }


    public function create(Request $request)
    {

        $data =[
            'StoresTree' => collect(DB::select("SET NOCOUNT ON ; exec Stores_GetTree"))
                ->all()
        ];

        return response()->json($data);
    }


    public function store(Request $request)
    {


        $guid  = strtoupper(Uuid::uuid4()->toString());
        $account = AccountTree::where('Parent_Guid', $request->post('St_Account'))->orderBy('Ac_RowID', 'DESC')->first();
        $maskCode = "";
        $parent = "";

        if ($account == null) {
            $parent =  AccountTree::where('Guid', $request->post('St_Account'))->select('Ac_Code_Mask')->first();
            $maskCode = $parent->Ac_Code_Mask . 1;
        } else {
            $parent = AccountTree::where('Guid', $request->post('St_Account'))->select('Ac_Code_Mask')->first();
            $child =  AccountTree::where('Parent_Guid', $request->post('St_Account'))->orderBy('Ac_RowID', 'DESC')->select('Ac_Code_Mask')->first();
            $codemaskparent = $parent->Ac_Code_Mask;
            $codemaskchild = $child->Ac_Code_Mask;

            $result = 0;
            $finalResult = 0;
            $count = 1;
            while ($codemaskchild != $codemaskparent) {
                $result = $codemaskchild % 10;
                $finalResult = ($finalResult * $count) + $result;
                $count *= 10;
                $codemaskchild = intval($codemaskchild / 10);

            }
            $finalResult++;
            $maskCode = $parent->Ac_Code_Mask . $finalResult;

        }
        $rowAccount = AccountTree::max('Ac_RowID');

        $NewAccount = new AccountTree([
            'Guid' =>$guid,
            'Parent_Guid' => $request->post('St_Account') ? $request->post("St_Account") :null,
            'Ac_Code_Mask' => $maskCode,
            'Ac_Name' => $request->post('St_Name'),
            'Ac_RowID' =>$rowAccount + 1,

        ]);
        $NewAccount->save();

        $rowID= Stories::max("St_RowID");
        if($rowID !=null || $rowID==0){
            $rowID = $rowID;
        }else{
            $rowID= 0;
        }
        $Stories = new Stories([
            'St_Guid' =>$guid,
            'St_ParentGuid'=> $request->post('St_ParentGuid') ? $request->post('St_ParentGuid') :   null,
            'St_Code' => $maskCode,
            'St_Name' => $request->post('St_Name'),
            'St_State' => $request->post('St_State'),
            'St_Account' => $request->post('St_Account') ? $request->post("St_Account") : null,
            'St_Address' => $request->post('St_Address'),
            // 'St_StockKeeper' => $request->post('St_StockKeeper'),
            'St_Notes' => $request->post('St_Notes'),
            'St_IsGroup' => $request->post('St_IsGroup'),
            'St_RowID' => ($rowID) + 1,
            // 'St_UserName'=>session('User')
        ]);
        $Stories->save();

        return response()->json(['status' => 'Adding Data Successfully..']);
    }


    public function show(Request $request)
    {
        $St_Guid = $request->input('St_Guid');
        $data = Stories::find($St_Guid);
        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        $guid = $request->post('St_Guid');
        $data = Stories::find($guid);
        $data->St_ParentGuid = $request->post('St_ParentGuid');
        $data->St_Code = $request->post('St_Code');
        $data->St_Name = $request->post('St_Name');
        $data->St_State = $request->post('St_State');
        $data->St_Account = $request->post('St_Account');
        $data->St_Address = $request->post('St_Address');
        $data->St_StoreKeeper = $request->post('St_StoreKeeper');
        $data->St_IsGroup = $request->post('St_IsGroup');
        $data->St_RowID = $request->post('St_RowID');
        $data->St_Notes = $request->post('St_Notes');
        // $data->St_UserName = session('User');
        $data->update();

        return response()->json(['status' => ' Updating Successfully...']);
    }


    public function destroy(Request $request)
    {
        // $id = $request->post('getid');
        // Stories::find($id)->delete();
        // return response()->json(['status' => 'Deleting Successfully...']);
    }

    public function filldata()
    {
        $accounts= AccountTree::select('Guid','Parent_Guid','Ac_Name','Ac_Code_Mask','Ac_RowID')->orderBy('Ac_RowID','ASC')->get();
        $stores = Stories::select('St_Guid','St_ParentGuid','St_Name','St_Code','St_RowID')->orderBy('St_RowID','ASC')->get();
        $data = [
            'getAccount' =>$accounts,
            'getStores' =>$stores,
            // 'getAccount2' =>collect(DB::table('accounttreemains'))->all()
        ];
        return response()->json($data);
    }


    public function setStCode(Request $request){
        $parentID=$request->post('St_ParentID');
         $data = [
            'setStCode' => Stories::select('St_Code')->where('St_ParentID',$parentID)->get()->last(),

        ];
        return response()->json($data);
    }

    public function setCode(Request $request){
        $st_Guid = $request->post('St_Guid');

        $getdata= Stories::where('St_ParentGuid',$st_Guid)->orderBy('St_RowID','DESC')->first();
        $getParent = Stories::where('St_Guid',$st_Guid)->first();
        $data=[
            'getData'=>$getdata,
            'getParent'=>$getParent,
        ];
        return response()->json($data);


    }
}
