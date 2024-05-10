<?php

namespace App\Http\Controllers;

use App\Models\Attachments;
use App\Models\Depts;
use App\Models\Certifications;
use App\Models\Employees;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Str;

class CertificationsController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('administration.certification');
        }
    }


    public function create(Request $request)
    {
        $getData = Certifications::all()->map(function ($item) {
            $item['eid'] = Employees::find($item['eid']) != null ? Employees::find($item['eid'])->fullname : "";
            return $item;
        });

        $data = [
            'getCertification' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $cid = $request->post('cid');
        $Guid = $request->post('Guid');
        if ($Guid == 'null' || $Guid == '' || empty($Guid)) {
            $Guid = strtoupper(Uuid::uuid4()->toString());
        }
        $UserID = session('id');
        if ($request->hasFile('image')) {
            $images = $request->file('image');
            foreach ($images as $image) {

                $imageName =  $image->getClientOriginalName();
                if ($cid != "") {
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
            $Certification = Certifications::updateOrCreate(
                [
                    'cid' => $cid,
                ],
                [
                    'eid' => $request->post('eid'),
                    'Guid' => $Guid,
                    'certification' => $request->post('certification'),
                    'college' => $request->post('college'),
                    'university' => $request->post('university'),
                    'country' => $request->post('country'),
                    'cyears' => $request->post('cyears'),
                    'gspetailest' => $request->post('gspetailest'),
                    'sspetailest' => $request->post('sspetailest'),
                    'cer_no' => $request->post('cer_no'),
                    'cerdate' => $request->post('cerdate'),
                    'equivlent_no' => $request->post('equivlent_no'),
                    'equivlent_date' => $request->post('equivlent_date'),
                    'UserID' => $UserID

                ]
            );
        } else {

            $Certification = Certifications::updateOrCreate(
                [
                    'cid' => $cid,
                ],
                [
                    'eid' => $request->post('eid'),
                    'Guid' => $Guid,
                    'certification' => $request->post('certification'),
                    'college' => $request->post('college'),
                    'university' => $request->post('university'),
                    'country' => $request->post('country'),
                    'cyears' => $request->post('cyears'),
                    'gspetailest' => $request->post('gspetailest'),
                    'sspetailest' => $request->post('sspetailest'),
                    'cer_no' => $request->post('cer_no'),
                    'cerdate' => $request->post('cerdate'),
                    'equivlent_no' => $request->post('equivlent_no'),
                    'equivlent_date' => $request->post('equivlent_date'),
                    'UserID' => $UserID

                ]
            );
        }

        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('cid');
        $Certification = Certifications::find($id);
        $Attachments = Attachments::where('ParentGuid', $Certification->Guid)->get();

        $data = [
            'Certification' => $Certification,
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
        $cid = $request->post('cid');
        $Certification = Certifications::find($cid);
        Attachments::where('ParentGuid', $Certification->Guid)->delete();
        Certifications::find($cid)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getCollege = Certifications::select('college')
            ->whereNotNull('college')
            ->where('college', '<>', '')
            ->distinct()
            ->orderBy('college')
            ->get();
        $getUniversity = Certifications::select('university')
            ->whereNotNull('university')
            ->where('university', '<>', '')
            ->distinct()
            ->orderBy('university')
            ->get();
        $getCountry = Certifications::select('country')
            ->whereNotNull('country')
            ->where('country', '<>', '')
            ->distinct()
            ->orderBy('country')
            ->get();
        $getGspetailest = Certifications::select('gspetailest')
            ->whereNotNull('gspetailest')
            ->where('gspetailest', '<>', '')
            ->distinct()
            ->orderBy('gspetailest')
            ->get();
        $getSspetailest = Certifications::select('sspetailest')
            ->whereNotNull('sspetailest')
            ->where('sspetailest', '<>', '')
            ->distinct()
            ->orderBy('sspetailest')
            ->get();
        $getCertification = Certifications::select('certification')
            ->whereNotNull('certification')
            ->where('certification', '<>', '')
            ->distinct()
            ->orderBy('certification')
            ->get();
        $getEmployees = Employees::select('eid', 'fullname')
            ->whereNotNull('fullname')
            ->where('fullname', '<>', '')
            ->distinct()
            ->orderBy('fullname')
            ->get();
        $data = [
            'getCollege' => $getCollege,
            'getUniversity' => $getUniversity,
            'getCountry' => $getCountry,
            'getGspetailest' => $getGspetailest,
            'getSspetailest' => $getSspetailest,
            'getCertification' => $getCertification,
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
