<?php

namespace App\Http\Controllers;

use App\Models\Attachments;
use App\Models\Disapear;
use App\Models\Employees;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Str;

class DisapearController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('administration.disapear');
        }
    }


    public function create(Request $request)
    {
        $getData = Disapear::orderByDesc('rid')->get()->map(function ($item) {
            $item['eid'] = Employees::find($item['eid']) != null ? Employees::find($item['eid'])->fullname : "";
            return $item;
        });

        $data = [
            'getDisapear' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $rid = $request->post('rid');
        $Guid = $request->post('Guid');
        if ($Guid == 'null' || $Guid == '' || empty($Guid)) {
            $Guid = strtoupper(Uuid::uuid4()->toString());
        }
        $UserID = session('id');
        if ($request->hasFile('image')) {
            $images = $request->file('image');
            foreach ($images as $image) {

                $imageName =  $image->getClientOriginalName();
                if ($rid != "") {
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
            $Disapear = Disapear::updateOrCreate(
                [
                    'rid' => $rid,
                ],
                [
                    'eid' => $request->post('eid'),
                    'Guid' => $Guid,
                    'rtype' => $request->post('rtype'),
                    'ndirection' => $request->post('ndirection'),
                    'duration_from' => $request->post('duration_from'),
                    'duration_to' => $request->post('duration_to'),
                    'docno' => $request->post('docno'),
                    'docdate' => $request->post('docdate'),
                    'notes' => $request->post('notes'),
                    'UserID' => $UserID,


                ]
            );
        } else {

            $Disapear = Disapear::updateOrCreate(
                [
                    'rid' => $rid,
                ],
                [
                    'eid' => $request->post('eid'),
                    'Guid' => $Guid,
                    'rtype' => $request->post('rtype'),
                    'ndirection' => $request->post('ndirection'),
                    'duration_from' => $request->post('duration_from'),
                    'duration_to' => $request->post('duration_to'),
                    'docno' => $request->post('docno'),
                    'docdate' => $request->post('docdate'),
                    'notes' => $request->post('notes'),
                    'UserID' => $UserID,


                ]
            );
        }

        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $rid = $request->input('rid');
        $Disapear = Disapear::find($rid);
        $Attachments = Attachments::where('ParentGuid', $Disapear->Guid)->get();

        $data = [
            'Disapear' => $Disapear,
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
        $rid = $request->post('rid');
        $Disapear = Disapear::find($rid);
        Attachments::where('ParentGuid', $Disapear->Guid)->delete();
        Disapear::find($rid)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getDisapearType = Disapear::select('rtype')
            ->whereNotNull('rtype')
            ->where('rtype', '<>', '')
            ->distinct()
            ->orderBy('rtype')
            ->get();
        $getDisapearDirection = Disapear::select('ndirection')
            ->whereNotNull('ndirection')
            ->where('ndirection', '<>', '')
            ->distinct()
            ->orderBy('ndirection')
            ->get();
        $getEmp = Employees::select('eid', 'fullname')
            ->orderBy('fullname')
            ->get();

        $data = [
            'getDisapearType' => $getDisapearType,
            'getDisapearDirection' => $getDisapearDirection,
            'getEmp' => $getEmp,


        ];
        return response()->json($data);
    }

    public function DeleteImages(Request $request)
    {
        $rid = $request->input('rid');
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
