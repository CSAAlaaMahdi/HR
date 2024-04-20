<?php

namespace App\Http\Controllers;


use App\Models\Researches;
use App\Models\Employees;
use Illuminate\Http\Request;


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

        return response()->json($Researches);
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
}
