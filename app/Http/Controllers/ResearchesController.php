<?php

namespace App\Http\Controllers;


use App\Models\Attachments;
use App\Models\Researches;
use App\Models\Employees;
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
        $getData = Researches::orderByDesc('rid')->get();
        $data = [
            'getResearches' => $getData,
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
            $Researches = Researches::updateOrCreate(
                [
                    'rid' => $rid,
                ],
                [
                    'Guid' => $Guid,
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
                    'UserID' => $UserID,
    
    
                ]
            );

        } else {
           
            $Researches = Researches::updateOrCreate(
                [
                    'rid' => $rid,
                ],
                [
                    'Guid' => $Guid,
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
                    'UserID' => $UserID,
    
    
                ]
            );
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
        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $rid = $request->input('rid');
        $Researches = Researches::find($rid);
        $Attachments = Attachments::where('ParentGuid', $Researches->Guid)->get();

        $data = [
            'Researches' => $Researches,
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
        $data = [
            'getResType' => $getResType,
            'getJournalType' => $getJournalType,
            'getJpos' => $getJpos,
            'getIsconf' => $getIsconf,
            'getRtype' => $getRtype,


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
