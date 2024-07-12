<?php

namespace App\Http\Controllers;

use App\Models\Items;
use App\Models\ItemsGroups;
use App\Models\Places;
use App\Models\User2;
use App\Models\UserPermissions;
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
        $id2 = session('id');
        $user = User2::find($id2);
        $Permission = UserPermissions::where('GroupID', '=', $user->GroupID)
            ->where('FormName', 'دليل المواد')
            ->get()
            ->last();
        $Permission->OptionAdd = $Permission->OptionAdd == true ? true : false;
        $Permission->OptionEdit = $Permission->OptionEdit == true ? true : false;
        $Permission->OptionDel = $Permission->OptionDel == true ? true : false;
        $Permission->ReadOnly = $Permission->ReadOnly == true ? true : false;
        $Permission->Enable = $Permission->Enable == true ? true : false;

        $getData = Items::orderBy('id')->get()->map(function ($item) {
            $checkCount = Items::where([['ParentID', $item['id']]])->count() != 0 ? Items::where('ParentID', $item['id'])->count() : 0;
            if ($checkCount > 0) {
                $item['Quantity'] = Items::where([['ParentID', $item['id']]])->sum('Quantity');
            }

            $item['ItemPlace'] = Places::find($item['ItemPlace']) !=null ? Places::find($item['ItemPlace'])->placeName : "";
            return $item;
        });
        $getData2 = $getData->map(function ($item) use ($getData) {
            if ($item['IsGroup']) {
                $item['Quantity'] = $getData->where('ParentID', $item['id'])->sum('Quantity');
            }
            return $item;
        });
        $data = [
            'getItemsGroups' => $getData2,
            'Permission' => $Permission,
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
        Items::where('ParentID',$ID)->get() !=null ? Items::where('ParentID',$ID)->delete() : null ;
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

    function  checkTree($item)
    {
    }
}
