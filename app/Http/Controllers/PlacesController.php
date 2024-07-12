<?php

namespace App\Http\Controllers;

use App\Models\Places;
use App\Models\Employees;
use App\Models\User2;
use App\Models\UserPermissions;
use Illuminate\Http\Request;


class PlacesController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('store.places');
        }
    }


    public function create(Request $request)
    {
        $id2 = session('id');
        $user = User2::find($id2);
        $Permission = UserPermissions::where('GroupID', '=', $user->GroupID)
            ->where('FormName', 'مواقع وذمم')
            ->get()
            ->last();
        $Permission->OptionAdd = $Permission->OptionAdd == true ? true : false;
        $Permission->OptionEdit = $Permission->OptionEdit == true ? true : false;
        $Permission->OptionDel = $Permission->OptionDel == true ? true : false;
        $Permission->ReadOnly = $Permission->ReadOnly == true ? true : false;
        $Permission->Enable = $Permission->Enable == true ? true : false;

        $getData = Places::orderBy('ID')->get();
        $data = [
            'getPlaces' => $getData,
            'Permission' => $Permission,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $ID = $request->post('ID');
        $Places = Places::updateOrCreate(
            [
                'ID' => $ID,
            ],
            [
                'perID' => $request->post('perID') != 0 ? $request->post(   'perID') : null,
                'placeName' => $request->post('placeName'),


            ]
        );
        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $ID = $request->input('ID');
        $Places = Places::find($ID);

        return response()->json($Places);
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
        Places::where('perID',$ID)->get() !=null ?Places::where('perID',$ID)->delete() : null;
        Places::find($ID)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getPlaces = Places::where('perID', null)->get();

        $data = [
            'getPlaces' => $getPlaces,

        ];
        return response()->json($data);
    }
}
