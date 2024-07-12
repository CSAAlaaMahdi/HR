<?php

namespace App\Http\Controllers;

use App\Models\Items;
use App\Models\Places;
use App\Models\User2;
use App\Models\UserPermissions;
use Illuminate\Http\Request;


class ItemsController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('store.items');
        }
    }


    public function create(Request $request)
    {
        $id2 = session('id');
        $user = User2::find($id2);
        $Permission = UserPermissions::where('GroupID', '=', $user->GroupID)
            ->where('FormName', 'المواد')
            ->get()
            ->last();
        $Permission->OptionAdd = $Permission->OptionAdd == true ? true : false;
        $Permission->OptionEdit = $Permission->OptionEdit == true ? true : false;
        $Permission->OptionDel = $Permission->OptionDel == true ? true : false;
        $Permission->ReadOnly = $Permission->ReadOnly == true ? true : false;
        $Permission->Enable = $Permission->Enable == true ? true : false;

        $getData = Items::where('IsGroup',false)-> orderBy('id')->get()->map(function($item){
            $item['ParentID'] = Items::find($item['ParentID']) !=null ? Items::find($item['ParentID'])->ItemName : "";
            $item['ItemPlace'] = Places::find($item['ItemPlace']) !=null ? Places::find($item['ItemPlace'])->placeName : "";
            return $item;
        });
        $data = [
            'getItems' => $getData,
            'Permission' => $Permission,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $ID = $request->post('ID');
        $Items = Items::updateOrCreate(
            [
                'id' => $ID,
            ],
            [
                'ParentID' => $request->post('ParentID') != 0 ? $request->post('ParentID') : 0,
                'ItemName' => $request->post('ItemName'),
                'ItemCode' => $request->post('ItemCode'),
                'Brand' => $request->post('Brand'),
                'ItemUnit' => $request->post('ItemUnit'),
                'Quantity' => $request->post('ItemQuantity'),
                'ItemPlace' => $request->post('ItemPlace'),
                'ItemStatus' => $request->post('ItemStatus'),
                'Description' => $request->post('Description'),
                'IsGroup' => false,

            ]
        );
        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $ID = $request->input('ID');
        $Items = Items::find($ID);
        return response()->json($Items);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
    }


    public function destroy(Request $request)
    {
        $ID = $request->post('ID');
        Items::find($ID)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getItems = Items::where('IsGroup', true)->get();
        $getItemUnit = Items::select('ItemUnit')
            ->whereNotNull('ItemUnit')
            ->where('ItemUnit', '<>', '')
            ->distinct()
            ->orderBy('ItemUnit')
            ->get();
        $getBrand = Items::select('Brand')
            ->whereNotNull('Brand')
            ->where('Brand', '<>', '')
            ->distinct()
            ->orderBy('Brand')
            ->get();
        $getItemPlace = Places::where('perID',null)->get();
        $getItemStatus = Items::select('ItemStatus')
            ->whereNotNull('ItemStatus')
            ->where('ItemStatus', '<>', '')
            ->distinct()
            ->orderBy('ItemStatus')
            ->get();
        $data = [
            'getItems' => $getItems,
            'getItemUnit' => $getItemUnit,
            'getBrand' => $getBrand,
            'getItemPlace' => $getItemPlace,
            'getItemStatus' => $getItemStatus,

        ];
        return response()->json($data);
    }

    public function setCode(Request $request)
    {
        $ParentID = $request->input('ParentID');
        if ($ParentID == 0) {
            $getData = Items::max('ItemCode') != null ? Items::max('ItemCode') + 1 : 1;

            $data = [
                'getData' => $getData,
            ];
            return response()->json($data);
        } else {
            $getdata = Items::where('ParentID', $ParentID)->orderBy('id', 'DESC')->first();
            $getParent = Items::where('id', $ParentID)->first();
            $data = [
                'getData' => $getdata,
                'getParent' => $getParent,
            ];
            return response()->json($data);
        }
    }
    public function CheckRoot(Request $request)
    {
        $IDValue = $request->input('IDValue');
        $checkRoot = Items::where('ParentID', $IDValue) != null ? true : false;
        return response()->json($checkRoot);
    }
}
