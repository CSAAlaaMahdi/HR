<?php

namespace App\Http\Controllers;

use App\Models\AdministrationOrders;
use App\Models\AdministrationOrdersImages;
use App\Models\Attachments;
use App\Models\Employees;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Str;

class AdministrationOrdersController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('administration.administrationOrders');
        }
    }


    public function create(Request $request)
    {
        $getData = AdministrationOrders::orderByDesc('id')->get()->map(function ($item) {
            $item['eid'] = Employees::find($item['eid']) != null ? Employees::find($item['eid'])->fullname : "";
            return $item;
        });

        $data = [
            'getAdministrationOrders' => $getData,
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

                        // $AdministrationOrders = AdministrationOrders::updateOrCreate(
                        //     [
                        //         'id' => $id,
                        //     ],
                        //     [
                        //         'eid' => $request->post('eid'),
                        //         'Guid' => $Guid,
                        //         'Title' => $request->post('Title'),
                        //         'DocNumber' => $request->post('DocNumber'),
                        //         'DocDate' => $request->post('DocDate'),
                        //         'FromDir' => $request->post('FromDir'),
                        //         'Notes' => $request->post('Notes'),
                        //         'UserID' => $UserID,

                        //     ]
                        // );
                    }
                } else {
                    $uploadPath = 'assets/img/administrationImage';
                    $newImageName = Str::random(20) . '.' . $imageName;
                    $image->move($uploadPath, $newImageName);

                    // $AdministrationOrders = AdministrationOrders::updateOrCreate(
                    //     [
                    //         'id' => $id,
                    //     ],
                    //     [
                    //         'Guid' => $Guid,
                    //         'eid' => $request->post('eid'),
                    //         'Title' => $request->post('Title'),
                    //         'DocNumber' => $request->post('DocNumber'),
                    //         'DocDate' => $request->post('DocDate'),
                    //         'FromDir' => $request->post('FromDir'),
                    //         'Notes' => $request->post('Notes'),
                    //         'UserID' => $UserID,


                    //     ]
                    // );

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
            $AdministrationOrders = AdministrationOrders::updateOrCreate(
                [
                    'id' => $id,
                ],
                [
                    'Guid' => $Guid,
                    'eid' => $request->post('eid'),
                    'Title' => $request->post('Title'),
                    'DocNumber' => $request->post('DocNumber'),
                    'DocDate' => $request->post('DocDate'),
                    'FromDir' => $request->post('FromDir'),
                    'Notes' => $request->post('Notes'),
                    'UserID' => $UserID,


                ]
            );
        } else {

            $AdministrationOrders = AdministrationOrders::updateOrCreate(
                [
                    'id' => $id,
                ],
                [
                    'eid' => $request->post('eid'),
                    'Guid' => strtoupper(Uuid::uuid4()->toString()),
                    'Title' => $request->post('Title'),
                    'DocNumber' => $request->post('DocNumber'),
                    'DocDate' => $request->post('DocDate'),
                    'FromDir' => $request->post('FromDir'),
                    'Notes' => $request->post('Notes'),

                ]
            );
        }

        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('id');
        $AdministrationOrders = AdministrationOrders::find($id);
        $Attachments = Attachments::where('ParentGuid', $AdministrationOrders->Guid)->get();
        $data = [
            'AdministrationOrders' => $AdministrationOrders,
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
        $AdministrationOrders = AdministrationOrders::find($id);
        AdministrationOrders::find($id)->delete();
        Attachments::where('ParentGuid', $AdministrationOrders->Guid)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getTitle = AdministrationOrders::select('Title')
            ->whereNotNull('Title')
            ->where('Title', '<>', '')
            ->distinct()
            ->orderBy('Title')
            ->get();
        $getFromDir = AdministrationOrders::select('FromDir')
            ->whereNotNull('FromDir')
            ->where('FromDir', '<>', '')
            ->distinct()
            ->orderBy('FromDir')
            ->get();
        $getEmp = Employees::select('eid', 'fullname')
            ->orderBy('fullname')
            ->get();

        $data = [
            'getTitle' => $getTitle,
            'getFromDir' => $getFromDir,
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
