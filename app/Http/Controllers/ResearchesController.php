<?php

namespace App\Http\Controllers;


use App\Models\Attachments;
use App\Models\EmployeeResearches;
use App\Models\Researches;
use App\Models\Employees;
use App\Models\User2;
use App\Models\UserPermissions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Str;

class ResearchesController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('administration.researches');
        }
    }


    public function create(Request $request)
    {
        $id2 = session('id');
        $user = User2::find($id2);
        $Permission = UserPermissions::where('GroupID', '=', $user->GroupID)
            ->where('FormName', 'البحوث والنشر')
            ->get()
            ->last();
        $Permission->OptionAdd = $Permission->OptionAdd == true ? true : false;
        $Permission->OptionEdit = $Permission->OptionEdit == true ? true : false;
        $Permission->OptionDel = $Permission->OptionDel == true ? true : false;
        $Permission->ReadOnly = $Permission->ReadOnly == true ? true : false;
        $Permission->Enable = $Permission->Enable == true ? true : false;

        $getData = Researches::orderByDesc('rid')->get();
        $data = [
            'getResearches' => $getData,
            'Permission' => $Permission,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $rid = $request->post('rid');
        $Guid = $request->post('Guid');
        $eid = $request->post('eid');
        $eidArray = explode(',', $eid);
        if ($Guid == 'null' || $Guid == '' || empty($Guid)) {
            $Guid = strtoupper(Uuid::uuid4()->toString());
        }
        $UserID = session('id');

        if ($rid != "") {
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
                            $getEmpResearch = EmployeeResearches::Where('Rid', '=', $rid)->get() != null ? EmployeeResearches::Where('Rid', '=', $rid)->get() : null;
                            if ($getEmpResearch != null) {
                                EmployeeResearches::where('Rid', '=', $rid)->delete();
                                foreach ($eidArray as $value) {

                                    $EmpResearch = EmployeeResearches::updateOrCreate(
                                        [
                                            'erid' => EmployeeResearches::max('erid') > 0 ? EmployeeResearches::max('erid') + 1 : 1,
                                        ],
                                        [
                                            'Rid' => $rid,
                                            'Eid' => $value,
                                            'EmpSeq' => 1,
                                            'UserID' => $UserID
                                        ]
                                    );
                                }
                            } else {
                                foreach ($eidArray as $value) {

                                    $EmpResearch = EmployeeResearches::updateOrCreate(
                                        [
                                            'erid' => EmployeeResearches::max('erid') > 0 ? EmployeeResearches::max('erid') + 1 : 1,
                                        ],
                                        [
                                            'Rid' => $rid,
                                            'Eid' => $value,
                                            'EmpSeq' => 1,
                                            'UserID' => $UserID
                                        ]
                                    );
                                }
                            }
                        }
                    }
                }
            } else {
                if (count($eidArray) > 0) {
                    $getEmpResearch = EmployeeResearches::Where([['Rid', $rid]])->get() != null ? EmployeeResearches::Where([['Rid', $rid]])->get() : null;
                    if ($getEmpResearch != null) {
                        EmployeeResearches::where([['Rid', $rid]])->delete();
                        foreach ($eidArray as $value) {

                            $EmpResearch = EmployeeResearches::updateOrCreate(
                                [
                                    'erid' => EmployeeResearches::max('erid') > 0 ? EmployeeResearches::max('erid') + 1 : 1,
                                ],
                                [
                                    'Rid' => $rid,
                                    'Eid' => $value,
                                    'EmpSeq' => 1,
                                    'UserID' => $UserID
                                ]
                            );
                        }
                    } else {
                        foreach ($eidArray as $value) {

                            $EmpResearch = EmployeeResearches::updateOrCreate(
                                [
                                    'erid' => EmployeeResearches::max('erid') > 0 ? EmployeeResearches::max('erid') + 1 : 1,
                                ],
                                [
                                    'Rid' => $rid,
                                    'Eid' => $value,
                                    'EmpSeq' => 1,
                                    'UserID' => $UserID
                                ]
                            );
                        }
                    }
                }
            }
            $Researches = Researches::updateOrCreate(
                [
                    'rid' => $rid,
                ],
                [
                    'ResType' => $request->post('ResType'),
                    'Title' => $request->post('Title'),
                    'JournalName' => $request->post('JournalName'),
                    'PubDate' => $request->post('PubDate'),
                    'JournalType' => $request->post('JournalType'),
                    'Jpos' => $request->post('Jpos'),
                    'Numb' => $request->post('Numb'),
                    'Page' => $request->post('Page'),
                    'Isconf' => $request->post('Isconf'),
                    'ConfName' => $request->post('ConfName'),
                    'ConfPlace' => $request->post('ConfPlace'),
                    'Rtype' => $request->post('Rtype'),
                    'CiteScor' => $request->post('CiteScor'),
                    'ImpactFactor' => $request->post('ImpactFactor'),
                    'JournalQuartile' => $request->post('JournalQuartile'),
                    'ISSN' => $request->post('ISSN'),
                    'DOI' => $request->post('DOI'),
                    'Rlink' => $request->post('Rlink'),
                    'Extaut' => $request->post('Extaut'),


                ]
            );
        } else {
            $newID = Researches::max('rid') > 0 ? Researches::max('rid') + 1 : 1;

            $Researches = Researches::updateOrCreate(
                [
                    'rid' => $newID,
                ],
                [
                    'ResType' => $request->post('ResType'),
                    'Title' => $request->post('Title'),
                    'JournalName' => $request->post('JournalName'),
                    'PubDate' => $request->post('PubDate'),
                    'JournalType' => $request->post('JournalType'),
                    'Jpos' => $request->post('Jpos'),
                    'Numb' => $request->post('Numb'),
                    'Page' => $request->post('Page'),
                    'Isconf' => $request->post('Isconf'),
                    'ConfName' => $request->post('ConfName'),
                    'ConfPlace' => $request->post('ConfPlace'),
                    'Rtype' => $request->post('Rtype'),
                    'CiteScor' => $request->post('CiteScor'),
                    'ImpactFactor' => $request->post('ImpactFactor'),
                    'JournalQuartile' => $request->post('JournalQuartile'),
                    'ISSN' => $request->post('ISSN'),
                    'DOI' => $request->post('DOI'),
                    'Rlink' => $request->post('Rlink'),
                    'Extaut' => $request->post('Extaut'),


                ]
            );
            if ($Researches) {
                if (count($eidArray) > 0) {
                    foreach ($eidArray as $value) {

                        $EmpResearch = EmployeeResearches::updateOrCreate(
                            [
                                'erid' => EmployeeResearches::max('erid') > 0 ? EmployeeResearches::max('erid') + 1 : 1,
                            ],
                            [
                                'Rid' => $rid,
                                'Eid' => $value,
                                'EmpSeq' => 1,
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







        // if ($request->hasFile('image')) {
        //     $images = $request->file('image');
        //     foreach ($images as $image) {

        //         $imageName =  $image->getClientOriginalName();
        //         if ($rid != "") {
        //             $checkImage = Attachments::where([
        //                 ['ParentGuid', $Guid],
        //                 ['FilePath', $imageName]
        //             ])->count('id');
        //             if ($checkImage > 0) {
        //             } else {
        //                 $uploadPath = 'assets/img/administrationImage';
        //                 $newImageName = Str::random(20) . '.' . $imageName;
        //                 $image->move($uploadPath, $newImageName);
        //                 $Attachments = Attachments::updateOrCreate(
        //                     [
        //                         'ParentGuid' => $Guid,
        //                         'DocTitle' => $request->post('DocTitle'),
        //                         'FilePath' => $newImageName,
        //                         'UserID' => $UserID,

        //                     ]

        //                 );

        //             }
        //         } else {
        //             $uploadPath = 'assets/img/administrationImage';
        //             $newImageName = Str::random(20) . '.' . $imageName;
        //             $image->move($uploadPath, $newImageName);
        //             $Attachments = Attachments::updateOrCreate(
        //                 [
        //                     'ParentGuid' => $Guid,
        //                     'DocTitle' => $request->post('DocTitle'),
        //                     'FilePath' => $newImageName,
        //                     'UserID' => $UserID,


        //                 ]

        //             );
        //         }
        //     }
        //     $Researches = Researches::updateOrCreate(
        //         [
        //             'rid' => $rid,
        //         ],
        //         [
        //             'Guid' => $Guid,
        //             'ResType' => $request->post('ResType'),
        //             'Title' => $request->post('Title'),
        //             'JournalName' => $request->post('JournalName'),
        //             'PubDate' => $request->post('PubDate'),
        //             'JournalType' => $request->post('JournalType'),
        //             'Jpos' => $request->post('Jpos'),
        //             'Numb' => $request->post('Numb'),
        //             'Page' => $request->post('Page'),
        //             'Isconf' => $request->post('Isconf'),
        //             'ConfName' => $request->post('ConfName'),
        //             'ConfPlace' => $request->post('ConfPlace'),
        //             'Rtype' => $request->post('Rtype'),
        //             'CiteScor' => $request->post('CiteScor'),
        //             'ImpactFactor' => $request->post('ImpactFactor'),
        //             'JournalQuartile' => $request->post('JournalQuartile'),
        //             'ISSN' => $request->post('ISSN'),
        //             'DOI' => $request->post('DOI'),
        //             'Rlink' => $request->post('Rlink'),
        //             'Extaut' => $request->post('Extaut'),
        //             'UserID' => $UserID,


        //         ]
        //     );

        // } else {

        //     $Researches = Researches::updateOrCreate(
        //         [
        //             'rid' => $rid,
        //         ],
        //         [
        //             'Guid' => $Guid,
        //             'ResType' => $request->post('ResType'),
        //             'Title' => $request->post('Title'),
        //             'JournalName' => $request->post('JournalName'),
        //             'PubDate' => $request->post('PubDate'),
        //             'JournalType' => $request->post('JournalType'),
        //             'Jpos' => $request->post('Jpos'),
        //             'Numb' => $request->post('Numb'),
        //             'Page' => $request->post('Page'),
        //             'Isconf' => $request->post('Isconf'),
        //             'ConfName' => $request->post('ConfName'),
        //             'ConfPlace' => $request->post('ConfPlace'),
        //             'Rtype' => $request->post('Rtype'),
        //             'CiteScor' => $request->post('CiteScor'),
        //             'ImpactFactor' => $request->post('ImpactFactor'),
        //             'JournalQuartile' => $request->post('JournalQuartile'),
        //             'ISSN' => $request->post('ISSN'),
        //             'DOI' => $request->post('DOI'),
        //             'Rlink' => $request->post('Rlink'),
        //             'Extaut' => $request->post('Extaut'),
        //             'UserID' => $UserID,


        //         ]
        //     );
        // }
        // $Researches = Researches::updateOrCreate(
        //     [
        //         'rid' => $rid,
        //     ],
        //     [
        //         'ResType' => $request->post('ResType'),
        //         'Title' => $request->post('Title'),
        //         'JournalName' => $request->post('JournalName'),
        //         'PubDate' => $request->post('PubDate'),
        //         'JournalType' => $request->post('JournalType'),
        //         'Jpos' => $request->post('Jpos'),
        //         'Numb' => $request->post('Numb'),
        //         'Page' => $request->post('Page'),
        //         'Isconf' => $request->post('Isconf'),
        //         'ConfName' => $request->post('ConfName'),
        //         'ConfPlace' => $request->post('ConfPlace'),
        //         'Rtype' => $request->post('Rtype'),
        //         'CiteScor' => $request->post('CiteScor'),
        //         'ImpactFactor' => $request->post('ImpactFactor'),
        //         'JournalQuartile' => $request->post('JournalQuartile'),
        //         'ISSN' => $request->post('ISSN'),
        //         'DOI' => $request->post('DOI'),
        //         'Rlink' => $request->post('Rlink'),
        //         'Extaut' => $request->post('Extaut'),


        //     ]
        // );
        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $rid = $request->input('rid');
        $Researches = Researches::find($rid);
        $Attachments = Attachments::where('ParentGuid', $Researches->Guid)->get();
        $EmpResearch = EmployeeResearches::where([['Rid', $rid]])->get();
        $EmpResearch2 = EmployeeResearches::where([['Rid', $rid]])->get()
            ->map(function ($item) {
                $item['Eid'] = Employees::find($item['Eid'])->fullname;
                return $item;
            });
        $id2 = session('id');
        $user = User2::find($id2);
        $Permission = UserPermissions::where('GroupID', '=', $user->GroupID)
            ->where('FormName', 'البحوث والنشر')
            ->get()
            ->last();
        $Permission->OptionAdd = $Permission->OptionAdd == true ? true : false;
        $Permission->OptionEdit = $Permission->OptionEdit == true ? true : false;
        $Permission->OptionDel = $Permission->OptionDel == true ? true : false;
        $Permission->ReadOnly = $Permission->ReadOnly == true ? true : false;
        $Permission->Enable = $Permission->Enable == true ? true : false;

        $data = [
            'Researches' => $Researches,
            'Attachments' => $Attachments,
            'EmpResearch' => $EmpResearch,
            'EmpResearch2' => $EmpResearch2,
            'Permission' => $Permission,
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
        $Researches = Researches::find($rid);
        Attachments::where('ParentGuid', $Researches->Guid)->delete();
        Researches::find($rid)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getResType = Researches::select('ResType')
            ->whereNotNull('ResType')
            ->where('ResType', '<>', '')
            ->distinct()
            ->orderBy('ResType')
            ->get();
        $getJournalType = Researches::select('JournalType')
            ->whereNotNull('JournalType')
            ->where('JournalType', '<>', '')
            ->distinct()
            ->orderBy('JournalType')
            ->get();
        $getJpos = Researches::select('Jpos')
            ->whereNotNull('Jpos')
            ->where('Jpos', '<>', '')
            ->distinct()
            ->orderBy('Jpos')
            ->get();
        $getIsconf = Researches::select('Isconf')
            ->whereNotNull('Isconf')
            ->where('Isconf', '<>', '')
            ->distinct()
            ->orderBy('Isconf')
            ->get();
        $getRtype = Researches::select('Rtype')
            ->whereNotNull('Rtype')
            ->where('Rtype', '<>', '')
            ->distinct()
            ->orderBy('Rtype')
            ->get();
        $getEmployees = Employees::select('eid', 'fullname')
            ->whereNotNull('fullname')
            ->where('fullname', '<>', '')
            ->distinct()
            ->orderBy('fullname')
            ->get();
        $data = [
            'getResType' => $getResType,
            'getJournalType' => $getJournalType,
            'getJpos' => $getJpos,
            'getIsconf' => $getIsconf,
            'getRtype' => $getRtype,
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
