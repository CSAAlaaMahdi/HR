<?php

namespace App\Http\Controllers;

use App\Models\AdministrationOrders;
use App\Models\AdministrationOrdersImages;
use App\Models\Employees;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;

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
        if ($request->hasFile('image')) {
            $images = $request->file('image');
            foreach ($images as $image) {

                $imageName =  $image->getClientOriginalName();
                if ($id != "") {
                    $checkImage = AdministrationOrdersImages::where([
                        ['Aid', $id],
                        ['FilePath', $imageName]
                    ])->count('id');
                    if ($checkImage > 0) {
                    } else {
                        $uploadPath = 'assets/img/administrationImage';
                        $image->move($uploadPath, $imageName);
                        $AdministrationOrdersImages = AdministrationOrdersImages::updateOrCreate(
                            [
                                'Aid' => $id,
                                'FilePath' => $imageName,


                            ]

                        );
                        $AdministrationOrders = AdministrationOrders::updateOrCreate(
                            [
                                'id' => $id,
                            ],
                            [
                                'eid' => $request->post('eid'),
                                'Title' => $request->post('Title'),
                                'DocNumber' => $request->post('DocNumber'),
                                'DocDate' => $request->post('DocDate'),
                                'FromDir' => $request->post('FromDir'),
                                'Notes' => $request->post('Notes'),


                            ]
                        );
                    }
                } else {
                    $uploadPath = 'assets/img/administrationImage';
                    $image->move($uploadPath, $imageName);
                    
                    $AdministrationOrders = AdministrationOrders::updateOrCreate(
                        [
                            'id' => $id,
                        ],
                        [
                            'eid' => $request->post('eid'),
                            'Title' => $request->post('Title'),
                            'DocNumber' => $request->post('DocNumber'),
                            'DocDate' => $request->post('DocDate'),
                            'FromDir' => $request->post('FromDir'),
                            'Notes' => $request->post('Notes'),


                        ]
                    );
                    $id = AdministrationOrders::max('id');
                    $AdministrationOrdersImages = AdministrationOrdersImages::updateOrCreate(
                        [
                            'Aid' => $id,
                            'FilePath' => $imageName,


                        ]

                    );
                   
                }
            }
        } else {
            $AdministrationOrders = AdministrationOrders::updateOrCreate(
                [
                    'id' => $id,
                ],
                [
                    'eid' => $request->post('eid'),
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
        $AdministrationOrddersImages = AdministrationOrdersImages::where('Aid', $id)->get();
        $data = [
            'AdministrationOrders' => $AdministrationOrders,
            'AdministrationOrdersImages' => $AdministrationOrddersImages
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
        AdministrationOrders::find($id)->delete();
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
        $imageName = $request->input('imageName');

        $uploadPath = 'assets/img/administrationImage';
        $filePath = $uploadPath . '/' . $imageName;
        if (File::exists($filePath)) {
            File::delete($filePath);
        }

        $deleteImage = AdministrationOrdersImages::where([['Aid', $id], ['FilePath', $imageName]])->delete();

        if ($deleteImage) {
            return response()->json(['status' => 'تم حذف الكتاب بنجاح']);
        }
    }
}
