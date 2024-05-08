<?php

namespace App\Http\Controllers;

use App\Models\Attachments;
use App\Models\Positions;
use App\Models\Employees;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Str;

class PositionsController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('administration.positions');
        }
    }


    public function create(Request $request)
    {
        $getData = Positions::orderByDesc('id')->get()->map(function ($item) {
            $item['eid'] = Employees::find($item['eid']) != null ? Employees::find($item['eid'])->fullname : "";
            return $item;
        });

        $data = [
            'getPositions' => $getData,
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
            $Positions = Positions::updateOrCreate(
                [
                    'id' => $id,
                ],
                [
                    'eid' => $request->post('eid'),
                    'Guid' => $Guid,
                    'ptypeid' => $request->post('ptypeid'),
                    'pname' => $request->post('pname'),
                    'docno' => $request->post('docno'),
                    'docdate' => $request->post('docdate'),
                    'datefrom' => $request->post('datefrom'),
                    'dateto' => $request->post('dateto'),
                    'UserID' => $UserID
    
    
                ]
            );

        } else {
           
            $Positions = Positions::updateOrCreate(
                [
                    'id' => $id,
                ],
                [
                    'eid' => $request->post('eid'),
                    'Guid' => $Guid,
                    'ptypeid' => $request->post('ptypeid'),
                    'pname' => $request->post('pname'),
                    'docno' => $request->post('docno'),
                    'docdate' => $request->post('docdate'),
                    'datefrom' => $request->post('datefrom'),
                    'dateto' => $request->post('dateto'),
                    'UserID' => $UserID
    
    
                ]
            );
        }
        $Positions = Positions::updateOrCreate(
            [
                'id' => $id,
            ],
            [
                'eid' => $request->post('eid'),
                'ptypeid' => $request->post('ptypeid'),
                'pname' => $request->post('pname'),
                'docno' => $request->post('docno'),
                'docdate' => $request->post('docdate'),
                'datefrom' => $request->post('datefrom'),
                'dateto' => $request->post('dateto'),


            ]
        );
        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('id');
        $Positions = Positions::find($id);
        $Attachments = Attachments::where('ParentGuid', $Positions->Guid)->get();

        $data = [
            'Positions' => $Positions,
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
        $Positions = Positions::find($id);
        Attachments::where('ParentGuid', $Positions->Guid)->delete();
        Positions::find($id)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getPName = Positions::select('pname')
            ->whereNotNull('pname')
            ->where('pname', '<>', '')
            ->distinct()
            ->orderBy('pname')
            ->get();
        $getPType = Positions::select('ptypeid')
            ->whereNotNull('ptypeid')
            ->where('ptypeid', '<>', '')
            ->distinct()
            ->orderBy('ptypeid')
            ->get();
        $getEmp = Employees::select('eid', 'fullname')
            ->orderBy('fullname')
            ->get();

        $data = [
            'getPName' => $getPName,
            'getEmp' => $getEmp,
            'getPType' => $getPType,


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
