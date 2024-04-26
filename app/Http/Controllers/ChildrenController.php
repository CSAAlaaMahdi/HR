<?php

namespace App\Http\Controllers;

use App\Models\Children;
use App\Models\Employees;
use Illuminate\Http\Request;


class ChildrenController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('administration.children');
        }
    }


    public function create(Request $request)
    {
        $getData = Children::orderByDesc('id')->get()->map(function ($item) {
            $item['eid'] = Employees::find($item['eid']) != null ? Employees::find($item['eid'])->fullname : "";
            return $item;
        });

        $data = [
            'getChildren' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $id = $request->post('id');
        $Children = Children::updateOrCreate(
            [
                'id' => $id,
            ],
            [
                'eid' => $request->post('eid'),
                'chname' => $request->post('chname'),
                'chsex' => $request->post('chsex'),
                'chdob' => $request->post('chdob'),
                'csid' => $request->post('csid'),


            ]
        );
        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('id');
        $Children = Children::find($id);

        return response()->json($Children);
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
        $id = $request->post('id');
        Children::find($id)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getChildrenType = Children::select('csid')
            ->whereNotNull('csid')
            ->where('csid', '<>', '')
            ->distinct()
            ->orderBy('csid')
            ->get();
        $getChildrenSex = Children::select('chsex')
            ->whereNotNull('chsex')
            ->where('chsex', '<>', '')
            ->distinct()
            ->orderBy('chsex')
            ->get();
        $getEmp = Employees::select('eid', 'fullname')
            ->orderBy('fullname')
            ->get();

        $data = [
            'getChildrenType' => $getChildrenType,
            'getEmp' => $getEmp,
            'getChildrenSex' => $getChildrenSex,


        ];
        return response()->json($data);
    }
}
