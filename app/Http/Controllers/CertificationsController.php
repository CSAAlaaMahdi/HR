<?php

namespace App\Http\Controllers;

use App\Models\Depts;
use App\Models\Certifications;
use App\Models\Employees;
use Illuminate\Http\Request;


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
        $Certification = Certifications::updateOrCreate(
            [
                'cid' => $cid,
            ],
            [
                'eid' => $request->post('eid'),
                'certification' => $request->post('certification'),
                'college' => $request->post('college'),
                'university' => $request->post('university'),
                'country' => $request->post('country'),
                'cyears' => $request->post('cyears'),
                'gspetailest' => $request->post('gspetailest'),
                'sspetailest' => $request->post('sspetailest'),
                'cer_no' => $request->post('cer_no'),
                'cer_date' => $request->post('cer_date'),
                'equivlent_no' => $request->post('equivlent_no'),
                'equivlent_date' => $request->post('equivlent_date'),
    
            ]
        );
        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('cid');
        $Certification = Certifications::find($id);

        return response()->json($Certification);
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
}
