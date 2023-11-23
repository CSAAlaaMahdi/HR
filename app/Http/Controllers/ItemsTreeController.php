<?php

namespace App\Http\Controllers;

use App\Models\Itemstwo;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;


class ItemsTreeController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('store.itemsTree');
        }
    }


    public function create(Request $request)
    {
        $data =[
            'ItemsTree' => collect(DB::select("SET NOCOUNT ON ; exec Tb_Items_GetTree"))
                ->all()
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $Items = new Itemstwo([
            'IT_ParentID'=>$request->post('IT_ParentID'),
            'IT_Code' => $request->post('IT_Code'),
            'IT_Name' => $request->post('IT_Name'),
            'IT_Tree'=>true,
            // 'IT_UserName'=>session('User')
        ]);
        $Items->save();

        return response()->json(['status' => 'Adding Data Successfully..']);
    }


    public function show(Request $request)
    {
        $IT_ID = $request->input('IT_ID');
        $data = Itemstwo::find($IT_ID);
        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        $id = $request->post('IT_ID');
        $data = Itemstwo::find($id);
        $data->IT_ParentID = $request->post('IT_ParentID');
        $data->IT_Code = $request->post('IT_Code');
        $data->IT_Name = $request->post('IT_Name');
        // $data->IT_UserName = session('User');
        $data->update();

        return response()->json(['status' => ' Updating Successfully...']);
    }


    public function destroy(Request $request)
    {
        // $id = $request->post('getid');
        // Items::find($id)->delete();
        // return response()->json(['status' => 'Deleting Successfully...']);
    }

    public function filldata()
    {

        $data = [
            'getItemsGroup' => Itemstwo::select('id','IT_Name','IT_Code')->where('IT_Tree',true)
            ->groupBy('id','IT_Name','IT_Code')
            ->get(),
            // 'getsalesgroup'=>SalesGroup::select('Gs_Name')->get(),
        ];
        return response()->json($data);
    }
    // public function updatedata()
    // {
    //     $query = DB::table('Itemss')->orderBy('id', 'ASC')->get();
    //     $query2 = DB::table('Itemss')->orderBy('id', 'ASC')->get();
    //     for ($i = 0; $i < count($query); $i++) {
    //         $count = 0;
    //         for ($j = 0; $j < count($query2); $j++) {
    //             if ($query2[$j]->Parent_Guid === $query[$i]->Guid) {
    //                 $count++;
    //                 DB::table('Itemss')->where('id', '=', $query2[$j]->id)
    //                     ->orderBy('id','ASC')
    //                     ->update(['Ac_Code_Mask' => $query[$i]->Ac_Code_Mask . '_' . $count]);
    //             }
    //         }
    //     }
    // }
    // public function insertdata()
    // {
    //     $query = DB::table('Tb_Accounts_Tree')->orderBy('RowID', 'ASC')->get();
    //     foreach ($query as  $value) {
    //         DB::table('Itemss')
    //             ->insert([
    //                 'Guid' => $value->RowID,
    //                 'Ac_Code_Mask' => $value->Ac_Code_Mask,
    //                 'Ac_Name' => $value->Ac_Name,
    //                 'Ac_Debit' => $value->Ac_Debit,
    //                 'Ac_Credit' => $value->Ac_Credit,
    //                 'Ac_Type' => $value->Ac_Type,
    //                 'id' => $value->RowID,
    //                 'Ac_FirstDigit' => $value->Ac_FirstDigit,
    //                 'Ac_SecondDigit' => $value->Ac_SecondDigit,
    //                 'Ac_ThirdDigit' => $value->Ac_ThirdDigit,
    //                 'Ac_FourthDigit' => $value->Ac_FourthDigit,
    //                 'Ac_FifthDigit' => $value->Ac_FifthDigit,
    //                 'Ac_SixthDigit' => $value->Ac_SixthDigit,
    //                 'Ac_SeventhDigit' => $value->Ac_SeventhDigit,
    //                 'Ac_EighthDigit' => $value->Ac_EighthDigit,
    //                 'Ac_NinthDigit' => $value->Ac_NinthDigit,
    //                 'Ac_TenthDigit' => $value->Ac_TenthDigit,


    //             ]);
    //     }
    // }

    public function setCode(Request $request){
        $IT_ID=$request->post('IT_ID');
         $data = [
            'setCode' => Itemstwo::where('IT_ParentID',$IT_ID)->orderBy('id',"DESC")->first(),
            'setCode2' => Itemstwo::where('id',$IT_ID)->first(),

        ];
        return response()->json($data);
    }
}
