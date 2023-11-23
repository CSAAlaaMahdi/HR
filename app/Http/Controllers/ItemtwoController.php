<?php

namespace App\Http\Controllers;

use App\Models\AccountTree;
use App\Models\Brand;
use App\Models\Company;
use App\Models\Currency;
use App\Models\ItemsThree;
use Illuminate\Http\Request;
use App\Models\Itemstwo;
use App\Models\Unitname;
use Illuminate\Support\Facades\DB;

class ItemtwoController extends Controller
{

    public function index()
    {

        if (session()->has('User')) {
            return view('store.Items');
        }
    }


    public function create(Request $request)
    {

        $id=$request->post('IT_ID');
        $data=[
            'getItemThree' =>collect(DB::select("SET NOCOUNT ON ; exec ItemThree_GetData @id ='" . $id . "'"))->all()
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {

        $Itemstwo = new Itemstwo([
            'IT_ParentID' => $request->post('IT_ParentID'),
            'IT_Code' => $request->post('IT_Code'),
            'IT_Barcode' => $request->post('IT_Barcode'),
            'IT_Name' => $request->post('IT_Name'),
            'IT_ArabicName' => $request->post('IT_ArabicName'),
            'IT_PartNumber' => $request->post('IT_PartNumber'),
            'IT_PartNumber2' => $request->post('IT_PartNumber2'),
            'IT_C_PartNumber' => $request->post('IT_CPartNumber'),
            'IT_GenuinePartNumber' => $request->post('IT_GenuinePartNumber'),
            'IT_Company' => $request->post('IT_Company'),
            'IT_Brand' => $request->post('IT_Brand'),
            'IT_Kind' => $request->post('IT_Kind'),
            'IT_State' => $request->post('IT_State'),
            'IT_Ask_Stop' => $request->post('IT_Ask_Stop'),
            'IT_Description' => $request->post('IT_Description'),
            'IT_Notes' => $request->post('IT_Notes'),
            'IT_Dim' => $request->post('IT_Dim'),
            'IT_Color' => $request->post('IT_Color'),
            'IT_CountIn' => $request->post('IT_CountIn'),
            'IT_ItemCount' => $request->post('IT_ItemCount'),
            'IT_Higx' => $request->post('IT_Higx'),
            'IT_Lowx' => $request->post('IT_Lowx'),
            'IT_ItemUnit' => $request->post('IT_ItemUnit'),
            'IT_ItemUnit2' => $request->post('IT_ItemUnit2'),
            'IT_ItemUnit3' => $request->post('IT_ItemUnit3'),
            'IT_Factory2' => $request->post('IT_Factory2'),
            'IT_Factory3' => $request->post('IT_Factory3'),
            'IT_ItemUnitDefualt' => $request->post('IT_ItemUnitDefualt'),
            'IT_ItemUnit2Defualt' => $request->post('IT_ItemUnitDefualt2'),
            'IT_ItemUnit2Defualt' => $request->post('IT_ItemUnitDefualt3'),
            // 'IT_CurrencyGuid' => $request->post('IT_CurrencyGuid'),
            // 'IT_CurrencyGuid2' => $request->post('IT_CurrencyGuid2'),
            // 'IT_CurrencyTrans' => $request->post('IT_CurrencyTrans'),
            'IT_Normal_1_1' => $request->post('IT_Normal_1_1'),
            'IT_Mid_1_1' => $request->post('IT_Mid_1_1'),
            'IT_Good_1_1' => $request->post('IT_Good_1_1'),
            'IT_VeryGood_1_1' => $request->post('IT_VeryGood_1_1'),
            'IT_Excellent_1_1' => $request->post('IT_Excellent_1_1'),
            'IT_Supper_1_1' => $request->post('IT_Supper_1_1'),
            'IT_Normal_2_1' => $request->post('IT_Normal_2_1'),
            'IT_Mid_2_1' => $request->post('IT_Mid_2_1'),
            'IT_Good_2_1' => $request->post('IT_Good_2_1'),
            'IT_VeryGood_2_1' => $request->post('IT_VeryGood_2_1'),
            'IT_Excellent_2_1' => $request->post('IT_Excellent_2_1'),
            'IT_Supper_2_1' => $request->post('IT_Supper_2_1'),
            'IT_Normal_3_1' => $request->post('IT_Normal_3_1'),
            'IT_Mid_3_1' => $request->post('IT_Mid_3_1'),
            'IT_Good_3_1' => $request->post('IT_Good_3_1'),
            'IT_VeryGood_3_1' => $request->post('IT_VeryGood_3_1'),
            'IT_Excellent_3_1' => $request->post('IT_Excellent_3_1'),
            'IT_Supper_3_1' => $request->post('IT_Supper_3_1'),
            // 'IT_UserName' => session('User'),


        ]);
        $Itemstwo->save();

        return response()->json(['status' => 'Adding Data Successfully...']);
    }


    public function show(Request $request)
    {
        // $getData = SalesGroup::select('Gs_Guid','Gs_Name',DB::raw("CASE WHEN Gs_State = 1 THEN 'Active' ELSE 'Inactive' END AS Gs_State"),'Gs_SalesRatio','Gs_RowID')-> orderBy('Gs_RowID', 'ASC')->get();
        $id = $request->input('IT_ID');
        if($id){
            $data = [
                'getItemTwo' =>Itemstwo::with('itemsthrees')-> find($id),

            ];

        return response()->json($data);
        }else{
            $data = false;
        return response()->json($data);
        }

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
        $data->IT_Name = $request->post('IT_Name');
        $data->IT_PartNumber = $request->post('IT_PartNumber');
        $data->IT_PartNumber2 = $request->post('IT_PartNumber2');
        $data->IT_C_PartNumber = $request->post('IT_CPartNumber');
        $data->IT_GenuinePartNumber = $request->post('IT_GenuinePartNumber');
        $data->IT_Company = $request->post('IT_Company');
        $data->IT_Brand = $request->post('IT_Brand');
        $data->IT_Kind = $request->post('IT_Kind');
        $data->IT_State = $request->post('IT_State');
        $data->IT_Ask_Stop = $request->post('IT_Ask_Stop');
        $data->IT_Description = $request->post('IT_Description');
        $data->IT_Notes = $request->post('IT_Notes');
        $data->IT_Dim = $request->post('IT_Dim');
        $data->IT_Color = $request->post('IT_Color');
        $data->IT_CountIn = $request->post('IT_CountIn');
        $data->IT_ItemCount = $request->post('IT_ItemCount');
        $data->IT_Higx = $request->post('IT_Higx');
        $data->IT_Lowx = $request->post('IT_Lowx');
        $data->IT_ItemUnit = $request->post('IT_ItemUnit');
        $data->IT_ItemUnit2 = $request->post('IT_ItemUnit2');
        $data->IT_ItemUnit3 = $request->post('IT_ItemUnit3');
        $data->IT_Factory2 = $request->post('IT_Factory2');
        $data->IT_Factory3 = $request->post('IT_Factory3');
        $data->IT_ItemUnitDefualt = $request->post('IT_ItemUnitDefualt');
        $data->IT_ItemUnit2Defualt = $request->post('IT_ItemUnitDefualt2');
        $data->IT_ItemUnit3Defualt = $request->post('IT_ItemUnitDefualt3');
        // $data->IT_CurrencyGuid = $request->post('IT_CurrencyGuid');
        // $data->IT_CurrencyGuid2 = $request->post('IT_CurrencyGuid2');
        // $data->IT_CurrencyTrans = $request->post('IT_CurrencyTrans');
        $data->IT_Normal_1_1 = $request->post('IT_Normal_1_1');
        $data->IT_Mid_1_1 = $request->post('IT_Mid_1_1');
        $data->IT_Good_1_1 = $request->post('IT_Good_1_1');
        $data->IT_VeryGood_1_1 = $request->post('IT_VeryGood_1_1');
        $data->IT_Excellent_1_1 = $request->post('IT_Excellent_1_1');
        $data->IT_Supper_1_1 = $request->post('IT_Supper_1_1');
        $data->IT_Normal_2_1 = $request->post('IT_Normal_2_1');
        $data->IT_Mid_2_1 = $request->post('IT_Mid_2_1');
        $data->IT_Good_2_1 = $request->post('IT_Good_2_1');
        $data->IT_VeryGood_2_1 = $request->post('IT_VeryGood_2_1');
        $data->IT_Excellent_2_1 = $request->post('IT_Excellent_2_1');
        $data->IT_Supper_2_1 = $request->post('IT_Supper_2_1');
        $data->IT_Normal_3_1 = $request->post('IT_Normal_3_1');
        $data->IT_Mid_3_1 = $request->post('IT_Mid_3_1');
        $data->IT_Good_3_1 = $request->post('IT_Good_3_1');
        $data->IT_VeryGood_3_1 = $request->post('IT_VeryGood_3_1');
        $data->IT_Excellent_3_1 = $request->post('IT_Excellent_3_1');
        $data->IT_Supper_3_1 = $request->post('IT_Supper_3_1');

        $data->update();

        return response()->json(['status' => 'Updating Data ... Successfully. ']);
    }
    public function updateItemThree(Request $request)
    {
        $id = $request->post('IT2_ID');
        $data = ItemsThree::find($id);
        $data->IT2_State = $request->post('IT2_State');
        $data->IT2_ItemPosition = $request->post('IT2_ItemPosition');
        $data->update();

        return response()->json(['status' => 'Updating Data ... Successfully. ']);
    }

    public function destroy(Request $request)
    {
        $id = $request->input('IT_ID');
        Itemstwo::find($id)->delete();
        return response()->json([
            'status' => 'Deleting Successfully....'
        ]);
    }
    public function filldata()
    {

        $data = [
            'getItems' => Itemstwo::select('IT_Name','IT_Code','id')->where('IT_Tree',true)->groupBy('IT_Name','IT_Code','id')->get(),
            'getItemsToEdit' => Itemstwo::select('IT_Name','IT_Code','IT_PartNumber','IT_PartNumber2','id')->where('IT_Tree',null)
                                        ->groupBy('IT_Name','IT_Code','id','IT_PartNumber','IT_PartNumber2')->get(),
            'getCompanies' => Company::orderBy('Com_RowID','ASC')->get(),
            'getBrands' => Brand::orderBy('B_RowID','ASC')->get(),
            'getAccounts' => AccountTree::orderBy('Ac_RowID','ASC')->get(),
            'getUnits' =>Unitname::orderBy('Ui_RowID','ASC')->get(),
            'getCurrency' => Currency::orderBy('Cur_RowID','ASC')->get(),
        ];
        return response()->json($data);
    }
    public function setMaskCode(Request $request){
        $IT_ID = $request->input('IT_ID');

        $getdata= Itemstwo::where('IT_ParentID',$IT_ID)->orderBy('id','DESC')->first();
        $getParent = Itemstwo::where('id',$IT_ID)->first();
        $data=[
            'getData'=>$getdata,
            'getParent'=>$getParent,
        ];
        return response()->json($data);
    }

    // This Function for Getting the main Category information
    public function getITemCategory(Request $request)
    {

        $itemCode = $request->post('itemCode');
        $itemCategoryInfo = Itemstwo::where('IT_Code', '=', $itemCode)->get();
        $id = $itemCategoryInfo[0]->id;
        $itemChildren = Itemstwo::where('IT_ParentID', $id)->get();
        $data = [
            'itemCategoryInfo' => $itemCategoryInfo,
            'itemChildren' => $itemChildren,
        ];
        return response()->json($data);
    }


    public function getmainaccountnumber(Request $request)
    {
        $accountname = $request->post('accountname');
        $data = AccountTree::where('Ac_Name', '=', $accountname)->get();

        return response()->json($data);
    }

    public function checkCPartNumber(Request $request)
    {
        $cpartnumber = $request->post('IT_C_PartNumber');
        $data = Itemstwo::where([['IT_C_PartNumber', $cpartnumber],['IT_Tree',null]])->first();
        $data= $data ? $data : null;
        return response()->json(['getCpartNumber'=> $data]);
    }
    public function checkPartNumber(Request $request)
    {
        $partnumber = $request->post('PartNumber');
        $data = Itemstwo::where([['IT_PartNumber', $partnumber],['IT_Tree',null]])->first();
        $data = $data ? $data->IT_PartNumber:null;
        return response()->json(['getPartNumber'=> $data]);
    }
    public function checkPartNumber2(Request $request)
    {
        $partnumber2 = $request->post('PartNumber2');
        $data = Itemstwo::where([['IT_PartNumber2', $partnumber2],['IT_Tree',null]])->first();
        $data= $data ? $data->IT_PartNumber2:null;
        return response()->json(['getPartNumber2'=> $data]);
    }

    public function checkBarcode(Request $request)
    {
        $barcode = $request->post('IT_Barcode');
        $data = Itemstwo::where('IT_Barcode', '=', $barcode);
        return response()->json($data);
    }

    public function generateaccountnumber(Request $request)
    {
        $ac_code_mask = $request->input('mainaccountnumber');
        $data = AccountTree::where('Ac_Code_Mask', 'like', $ac_code_mask)->get();
        $getcount = AccountTree::where('Parent_Guid', 'like', $data[0]->Guid)->get();

        return response()->json(['getdata' => count($getcount)]);
    }


    public function getPartNumber(Request $request)
    {
        $partNumber = $request->input('getPartNumber');
        $getInfo = Itemstwo::where('IT_PartNumber', '=', $partNumber)->get();
        $data = [
            'getPartNumber' => $getInfo,
        ];
        return response()->json($data);
    }
}
