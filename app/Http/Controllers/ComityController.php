<?php

namespace App\Http\Controllers;

use App\Models\Attachments;
use App\Models\Comity;
use App\Models\EmployeeComity;
use App\Models\Employees;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Str;

class ComityController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('administration.comity');
        }
    }


    public function create(Request $request)
    {
        $getData = Comity::orderByDesc('id')->get();

        $data = [
            'getComity' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $id = $request->post('id');
        $Guid = $request->post('Guid');
        $eid = $request->post('eid');
        $eidArray = explode(',', $eid);


        if ($Guid == 'null' || $Guid == '' || empty($Guid)) {
            $Guid = strtoupper(Uuid::uuid4()->toString());
        }
        $UserID = session('id');



        if ($id != "") {
            if ($request->hasFile('image')) {
                $images = $request->file('image');
                foreach ($images as $image) {
                    $imageName = $image->getClientOriginalName();
                    $checkImage = Attachments::where([
                        ['ParentGuid', $Guid],
                        ['FilePath', $imageName]
                    ])->count('id');
                    if ($checkImage > 0) {
                    } else {
                        $uploadPath = 'assets/img/administrationImage';
                        $newImageName = Str::random(20) . '.' . $imageName;
                        $image->move($uploadPath, $newImageName);
                        $Attachments = Attachments::updateOrCreate(
                            [
                                'ParentGuid' => $Guid,
                                'DocTitle' => $request->post('DocTitle'),
                                'FilePath' => $newImageName,
                                'UserID' => $UserID,

                            ]

                        );
                        if (count($eidArray) > 0) {
                            $getEmpComity = EmployeeComity::Where('cid', '=', $id)->get() != null ? EmployeeComity::Where('cid', '=', $id)->get() : null;
                            if ($getEmpComity != null) {
                                EmployeeComity::where('cid', '=', $id)->delete();
                                foreach ($eidArray as $value) {

                                    $EmpComity = EmployeeComity::updateOrCreate(
                                        [
                                            'id' => EmployeeComity::max('id') > 0 ? EmployeeComity::max('id') + 1 : 1,
                                        ],
                                        [
                                            'cid' => $id,
                                            'eid' => $value,
                                            'UserID' => $UserID
                                        ]
                                    );
                                }
                            } else {
                                foreach ($eidArray as $value) {

                                    $EmpComity = EmployeeComity::updateOrCreate(
                                        [
                                            'id' => EmployeeComity::max('id') > 0 ? EmployeeComity::max('id') + 1 : 1,
                                        ],
                                        [
                                            'cid' => $id,
                                            'eid' => $value,
                                            'UserID' => $UserID
                                        ]
                                    );
                                }
                            }
                        }
                    }
                }
            }
            else{
                if (count($eidArray) > 0) {
                    $getEmpComity = EmployeeComity::Where('cid', '=', $id)->get() != null ? EmployeeComity::Where('cid', '=', $id)->get() : null;
                    if ($getEmpComity != null) {
                        EmployeeComity::where('cid', '=', $id)->delete();
                        foreach ($eidArray as $value) {

                            $EmpComity = EmployeeComity::updateOrCreate(
                                [
                                    'id' => EmployeeComity::max('id') > 0 ? EmployeeComity::max('id') + 1 : 1,
                                ],
                                [
                                    'cid' => $id,
                                    'eid' => $value,
                                    'UserID' => $UserID
                                ]
                            );
                        }
                    } else {
                        foreach ($eidArray as $value) {

                            $EmpComity = EmployeeComity::updateOrCreate(
                                [
                                    'id' => EmployeeComity::max('id') > 0 ? EmployeeComity::max('id') + 1 : 1,
                                ],
                                [
                                    'cid' => $id,
                                    'eid' => $value,
                                    'UserID' => $UserID
                                ]
                            );
                        }
                    }
                }
            }
            $Comity = Comity::updateOrCreate(
                [
                    'id' => $id,
                ],
                [
                    'Guid' => $Guid,
                    'ctype' => $request->post('ctype'),
                    'docno' => $request->post('docno'),
                    'docdate' => $request->post('docdate'),
                    'notes' => $request->post('notes'),
                    'UserID' => $UserID,


                ]
            );
        } else {
            $newID = Comity::max('id') > 0 ? Comity::max('id') + 1 : 1;

            $comity = Comity::updateOrCreate(
                [
                    'id' => $newID,
                ],
                [
                    'Guid' => $Guid,
                    'ctype' => $request->post('ctype'),
                    'docno' => $request->post('docno'),
                    'docdate' => $request->post('docdate'),
                    'notes' => $request->post('notes'),
                    'UserID' => $UserID,

                ]
            );
            if ($comity) {
                if (count($eidArray) > 0) {
                    foreach ($eidArray as $value) {

                        $empcomity = EmployeeComity::updateOrCreate(
                            [
                                'id' => EmployeeComity::max('id') > 0 ? EmployeeComity::max('id') + 1 : 1
                            ],
                            [
                                'cid' => $newID,
                                'eid' => $value,
                                'UserID' => $UserID
                            ]
                        );
                    }
                }
            }
            if ($request->hasFile('image')) {
                $images = $request->file('image');
                foreach ($images as $image) {
                    $imageName = $image->getClientOriginalName();
                    $checkImage = Attachments::where([
                        ['ParentGuid', $Guid],
                        ['FilePath', $imageName]
                    ])->count('id');
                    if ($checkImage > 0) {
                    } else {
                        $uploadPath = 'assets/img/administrationImage';
                        $newImageName = Str::random(20) . '.' . $imageName;
                        $image->move($uploadPath, $newImageName);
                        $Attachments = Attachments::updateOrCreate(
                            [
                                'ParentGuid' => $Guid,
                                'DocTitle' => $request->post('DocTitle'),
                                'FilePath' => $newImageName,
                                'UserID' => $UserID,

                            ]

                        );

                    }
                }
            }
        }

      
        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('id');
        $Comity = Comity::find($id);
        $Attachments = Attachments::where('ParentGuid', $Comity->Guid)->get();
        $EmpComity = EmployeeComity:: where('cid',$id)->get();
        $EmpComity2 = EmployeeComity:: where('cid',$id)->get()
                    ->map(function($item){
                        $item['eid'] = Employees::find($item['eid'])->fullname;
                        return $item;
                    });

        $data = [
            'Comity' => $Comity,
            'Attachments' => $Attachments,
            'EmpComity' => $EmpComity,
            'EmpComity2' => $EmpComity2,
        ];
        return response()->json($data);
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
        $Comity = Comity::find($id);
        Attachments::where('ParentGuid', $Comity->Guid)->delete();
        Comity::find($id)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getComity = Comity::select('ctype')
            ->whereNotNull('ctype')
            ->where('ctype', '<>', '')
            ->distinct()
            ->orderBy('ctype')
            ->get();
        $getEmployees = Employees::select('eid', 'fullname')
            ->whereNotNull('fullname')
            ->where('fullname', '<>', '')
            ->distinct()
            ->orderBy('fullname')
            ->get();
        $data = [
            'getComity' => $getComity,
            'getEmployees' => $getEmployees,


        ];
        return response()->json($data);
    }
    public function DeleteImages(Request $request)
    {
        $id = $request->input('id');
        $Guid = $request->input('Guid');
        $imageName = $request->input('imageName');

        $deleteImage = Attachments::where([['ParentGuid', $Guid], ['FilePath', $imageName]])->delete();
        if ($deleteImage) {
            $uploadPath = 'assets/img/administrationImage';
            $filePath = $uploadPath . '/' . $imageName;
            if (File::exists($filePath)) {
                File::delete($filePath);
            }
            return response()->json(['status' => 'تم حذف الكتاب بنجاح']);
        }
    }
}
