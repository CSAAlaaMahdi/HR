<?php

namespace App\Http\Controllers;


use App\Models\Attachments;
use App\Models\Jobs;
use App\Models\Employees;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Str;

class JobsController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('administration.jobs');
        }
    }


    public function create(Request $request)
    {
        $getData = Jobs::all()->map(function ($item) {
            $item['eid'] = Employees::find($item['eid']) != null ? Employees::find($item['eid'])->fullname : "";
            return $item;
        });

        $data = [
            'getJobs' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $jid = $request->post('jid');
        $Guid = $request->post('Guid');
        if ($Guid == 'null' || $Guid == '' || empty($Guid)) {
            $Guid = strtoupper(Uuid::uuid4()->toString());
        }
        $UserID = session('id');
        if ($request->hasFile('image')) {
            $images = $request->file('image');
            foreach ($images as $image) {

                $imageName =  $image->getClientOriginalName();
                if ($jid != "") {
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
            $Job = Jobs::updateOrCreate(
                [
                    'jid' => $jid,
                ],
                [
                    'eid' => $request->post('eid'),
                    'Guid' => $Guid,
                    'jtitle' => $request->post('jtitle'),
                    'jdegree' => $request->post('jdegree'),
                    'jstage' => $request->post('jstage'),
                    'getdate' => $request->post('getdate'),
                    'docno' => $request->post('docno'),
                    'docdate' => $request->post('docdate'),
                    'UserID' => $UserID
    
    
                ]
            );

        } else {
           
            $Job = Jobs::updateOrCreate(
                [
                    'jid' => $jid,
                ],
                [
                    'eid' => $request->post('eid'),
                    'Guid' => $Guid,
                    'jtitle' => $request->post('jtitle'),
                    'jdegree' => $request->post('jdegree'),
                    'jstage' => $request->post('jstage'),
                    'getdate' => $request->post('getdate'),
                    'docno' => $request->post('docno'),
                    'docdate' => $request->post('docdate'),
                    'UserID' => $UserID
    
    
                ]
            );
        }
        
        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $jid = $request->input('jid');
        $Job = Jobs::find($jid);
        $Attachments = Attachments::where('ParentGuid', $Job->Guid)->get();

        $data = [
            'Job' => $Job,
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
        $jid = $request->post('jid');
        $Jobs = Jobs::find($jid);
        Attachments::where('ParentGuid', $Jobs->Guid)->delete();
        Jobs::find($jid)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getEmp = Employees::select('eid', 'fullname')->orderBy('fullname')->get();
        $getJobTitle = Jobs::select('jtitle')
            ->whereNotNull('jtitle')
            ->where('jtitle', '<>', '')
            ->distinct()
            ->orderBy('jtitle')
            ->get();
        $data = [
            'getEmp' => $getEmp,
            'getJobTitle' => $getJobTitle,


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
