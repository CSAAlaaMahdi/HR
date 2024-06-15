<?php

namespace App\Http\Controllers;

use App\Models\Items;
use App\Models\ItemsGroups;
use App\Models\Places;
use Illuminate\Http\Request;


class ItemsGroupsController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('store.itemsGroups');
        }
    }


    public function create(Request $request)
    {
        $getData = Items::orderBy('id')->get() -> map(function ($item) {
            $checkCount = Items::where([['ParentID', $item['id']],['IsGroup',true]])->count() != 0 ? Items::where('ParentID', $item['id'])->count() : 0;
            if($checkCount > 0){
                $item['Quantity'] = Items::where([['ParentID', $item['id']],['IsGroup',true]])->sum('Quantity');
            }
            $checkCount2 = Items::where([['ParentID', $item['id']],['IsGroup',false]])->count() != 0 ? Items::where('ParentID', $item['id'])->count() : 0;
            if($checkCount2 > 0){
                $item['Quantity'] = Items::where([['ParentID', $item['id']],['IsGroup',false]])->sum('Quantity');
            }
            $item['ItemPlace'] = Places::find($item['ItemPlace']) !=null ? Places::find($item['ItemPlace'])->placeName : "";
            return $item;
        });
        $data = [
            'getItemsGroups' => $getData,
        ];
        return response()->json($data);

    }


    public function store(Request $request)
    {
        $ID = $request->post('ID');
        $ItemsGroups = Items::updateOrCreate(
            [
                'id' => $ID,
            ],
            [
                'ParentID' => $request->post('ParentID') != 0 ? $request->post('ParentID') : 0,
                'ItemName' => $request->post('ItemName'),
                'ItemCode' => $request->post('ItemCode'),
                'IsGroup' => true,

            ]
        );
        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $ID = $request->input('ID');
        $ItemsGroups = Items::find($ID);
        return response()->json($ItemsGroups);
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

        $getItemsGroups = Items::where('IsGroup', true)->get();

        $data = [
            'getItemsGroups' => $getItemsGroups,

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
