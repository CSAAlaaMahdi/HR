<?php

namespace App\Http\Controllers;

use App\Models\Attachments;
use App\Models\Children;
use App\Models\Employees;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Str;

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
        $Guid = $request->post('Guid');
        if ($Guid == 'null' || $Guid == '' || empty($Guid)) {
            $Guid = strtoupper(Uuid::uuid4()->toString());
        }
        $UserID = session('id');

        if ($request->hasFile('image')) {
            $images = $request->file('image');
            foreach ($images as $image) {

                $imageName =  $image->getClientOriginalName();
                if ($id != "") {
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
            $Children = Children::updateOrCreate(
                [
                    'id' => $id,
                ],
                [
                    'eid' => $request->post('eid'),
                    'Guid' => $Guid,
                    'chname' => $request->post('chname'),
                    'chsex' => $request->post('chsex'),
                    'chdob' => $request->post('chdob'),
                    'csid' => $request->post('csid'),
                    'UserID' => $UserID,


                ]
            );

        } else {
           
            $Children = Children::updateOrCreate(
                [
                    'id' => $id,
                ],
                [
                    'eid' => $request->post('eid'),
                    'Guid' => $Guid,
                    'chname' => $request->post('chname'),
                    'chsex' => $request->post('chsex'),
                    'chdob' => $request->post('chdob'),
                    'csid' => $request->post('csid'),
                    'UserID' => $UserID

                ]
            );
        }



        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('id');
        $Children = Children::find($id);
        $Attachments = Attachments::where('ParentGuid', $Children->Guid)->get();

        $data = [
            'Children' => $Children,
            'Attachments' => $Attachments
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
        $Children = Children::find($id);
        Attachments::where('ParentGuid', $Children->Guid)->delete();
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
