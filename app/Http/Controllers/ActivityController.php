<?php

namespace App\Http\Controllers;


use App\Models\Activity;
use App\Models\Attachments;
use App\Models\Employees;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Str;

class ActivityController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('administration.activity');
        }
    }


    public function create(Request $request)
    {
        $getData = Activity::orderByDesc('aid')->get();

        $data = [
            'getActivity' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $aid = $request->post('aid');
        $Guid = $request->post('Guid');
        if ($Guid == 'null' || $Guid == '' || empty($Guid)) {
            $Guid = strtoupper(Uuid::uuid4()->toString());
        }
        $UserID = session('id');
        if ($request->hasFile('image')) {
            $images = $request->file('image');
            foreach ($images as $image) {

                $imageName =  $image->getClientOriginalName();
                if ($aid != "") {
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
            $Job = Activity::updateOrCreate(
                [
                    'aid' => $aid,
                ],
                [
                    'Guid' => $Guid,
                    'act_id' => $request->post('act_id'),
                    'Aname' => $request->post('Aname'),
                    'Place' => $request->post('Place'),
                    'ActDate' => $request->post('ActDate'),
                    'NoDays' => $request->post('NoDays'),
                    'Participants' => $request->post('Participants'),
                    'Notes' => $request->post('Notes'),
                    'UserID' => $UserID,


                ]
            );
        } else {

            $Job = Activity::updateOrCreate(
                [
                    'aid' => $aid,
                ],
                [
                    'Guid' => $Guid,
                    'act_id' => $request->post('act_id'),
                    'Aname' => $request->post('Aname'),
                    'Place' => $request->post('Place'),
                    'ActDate' => $request->post('ActDate'),
                    'NoDays' => $request->post('NoDays'),
                    'Participants' => $request->post('Participants'),
                    'Notes' => $request->post('Notes'),
                    'UserID' => $UserID,


                ]
            );
        }

        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $aid = $request->input('aid');
        $Activity = Activity::find($aid);
        $Attachments = Attachments::where('ParentGuid', $Activity->Guid)->get();

        $data = [
            'Activity' => $Activity,
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
        $aid = $request->post('aid');
        $Activity = Activity::find($aid);
        Attachments::where('ParentGuid', $Activity->Guid)->delete();
        Activity::find($aid)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {


        $getAct_ID = Activity::select('act_id')
            ->whereNotNull('act_id')
            ->where('act_id', '<>', '')
            ->distinct()
            ->orderBy('act_id')
            ->get();
        $data = [
            'getAct_ID' => $getAct_ID,


        ];
        return response()->json($data);
    }
    public function DeleteImages(Request $request)
    {
        $aid = $request->input('aid');
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
