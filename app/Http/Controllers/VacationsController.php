<?php

namespace App\Http\Controllers;

use App\Models\Attachments;
use App\Models\Vacations;
use App\Models\Employees;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Str;
class VacationsController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('administration.vacations');
        }
    }


    public function create(Request $request)
    {
        $getData = Vacations::orderByDesc('vcid')->get()->map(function($item){
            $item['eid'] = Employees::find($item['eid']) != null ? Employees::find($item['eid'])->fullname : "" ;
            return $item;
        });

        $data = [
            'getVacations' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $vcid = $request->post('vcid');
        $Guid = $request->post('Guid');
        if ($Guid == 'null' || $Guid == '' || empty($Guid)) {
            $Guid = strtoupper(Uuid::uuid4()->toString());
        }
        $UserID = session('id');
        if ($request->hasFile('image')) {
            $images = $request->file('image');
            foreach ($images as $image) {

                $imageName =  $image->getClientOriginalName();
                if ($vcid != "") {
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
            $Vacations = Vacations::updateOrCreate(
                [
                    'vcid' => $vcid,
                ],
                [
                    'eid' => $request->post('eid'),
                    'Guid' => $Guid,
                    'vtid' => $request->post('vtid'),
                    'vdate' => $request->post('vdate'),
                    'nodays' => $request->post('nodays'),
                    'docno' => $request->post('docno'),
                    'docdate' => $request->post('docdate'),
                    'UserID' => $UserID,
    
    
                ]
            );

        } else {
           
            $Vacations = Vacations::updateOrCreate(
                [
                    'vcid' => $vcid,
                ],
                [
                    'eid' => $request->post('eid'),
                    'Guid' => $Guid,
                    'vtid' => $request->post('vtid'),
                    'vdate' => $request->post('vdate'),
                    'nodays' => $request->post('nodays'),
                    'docno' => $request->post('docno'),
                    'docdate' => $request->post('docdate'),
                    'UserID' => $UserID,
    
    
                ]
            );
        }
       
        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $vcid = $request->input('vcid');
        $Vacations = Vacations::find($vcid);
        $Attachments = Attachments::where('ParentGuid', $Vacations->Guid)->get();

        $data = [
            'Vacations' => $Vacations,
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
        $vcid = $request->post('vcid');
        $Vacations = Vacations::find($vcid);
        Attachments::where('ParentGuid', $Vacations->Guid)->delete();
        Vacations::find($vcid)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getVtID = Vacations::select('vtid')
            ->whereNotNull('vtid')
            ->where('vtid', '<>', '')
            ->distinct()
            ->orderBy('vtid')
            ->get();
        $getEmp = Employees::select('eid', 'fullname')
            ->orderBy('fullname')
            ->get();

        $data = [
            'getVtID' => $getVtID,
            'getEmp' => $getEmp,


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
