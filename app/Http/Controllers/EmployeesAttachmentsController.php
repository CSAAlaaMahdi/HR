<?php

namespace App\Http\Controllers;

use App\Models\Attachments;
use App\Models\AttachmentsEmp;
use App\Models\EmployeesAttachments;
use App\Models\EmployeeComity;
use App\Models\Employees;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Str;

class ComityController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('administration.employeesAttachments');
        }
    }


    public function create(Request $request)
    {
        $getData = EmployeesAttachments::orderByDesc('id')->get();

        $data = [
            'getEmployeesAttachments' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $id = $request->post('id');
        $Guid = $request->post('Guid');
        $eid = $request->post('eid');
        $eidArray = explode(',', $eid);


        if ($Guid == 'null' || $Guid == '' || empty($Guid)) {
            $Guid = strtoupper(Uuid::uuid4()->toString());
        }
        $UserID = session('id');

        if ($id != "") {
            if ($request->hasFile('image')) {
                $images = $request->file('image');
                foreach ($images as $image) {
                    $imageName = $image->getClientOriginalName();
                    $checkImage = AttachmentsEmp::where([
                        ['ParentGuid', $Guid],
                        ['FilePath', $imageName]
                    ])->count('id');
                    if ($checkImage > 0) {
                    } else {
                        $uploadPath = 'assets/img/employeesImage';
                        $newImageName = Str::random(20) . '.' . $imageName;
                        $image->move($uploadPath, $newImageName);
                        $Attachments = AttachmentsEmp::updateOrCreate(
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
            else{

            }
            $Attachmentemp = EmployeesAttachments::updateOrCreate(
                [
                    'id' => $id,
                ],
                [
                    'Guid' => $Guid,
                    'eid' => $request->post('eid'),
                    'Title' => $request->post('Title'),
                    'UserID' => $UserID,

                ]
            );
        } else {
            $newID = EmployeesAttachments::max('id') > 0 ? EmployeesAttachments::max('id') + 1 : 1;

            $Attachmentemp = EmployeesAttachments::updateOrCreate(
                [
                    'id' => $newID,
                ],
                [
                    'Guid' => $Guid,
                    'eid' => $request->post('eid'),
                    'Title' => $request->post('Title'),
                    'UserID' => $UserID,

                ]
            );

            if ($request->hasFile('image')) {
                $images = $request->file('image');
                foreach ($images as $image) {
                    $imageName = $image->getClientOriginalName();
                    $checkImage = AttachmentsEmp::where([
                        ['ParentGuid', $Guid],
                        ['FilePath', $imageName]
                    ])->count('id');
                    if ($checkImage > 0) {
                    } else {
                        $uploadPath = 'assets/img/employeesImage';
                        $newImageName = Str::random(20) . '.' . $imageName;
                        $image->move($uploadPath, $newImageName);
                        $Attachments = AttachmentsEmp::updateOrCreate(
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


        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('id');
        $AttachmentsEmp = EmployeesAttachments::find($id);
        $Attachments = AttachmentsEmp::where('ParentGuid', $AttachmentsEmp->Guid)->get();

        $data = [
            'AttachmentsEmp' => $AttachmentsEmp,
            'Attachments' => $Attachments,
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
        $AttachmentsEmp = EmployeesAttachments::find($id);
        AttachmentsEmp::where('ParentGuid', $AttachmentsEmp->Guid)->delete();
        EmployeesAttachments::find($id)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getEmpAttachments = EmployeesAttachments::select('Title')
            ->whereNotNull('Title')
            ->where('Title', '<>', '')
            ->distinct()
            ->orderBy('Title')
            ->get();
        $getEmployees = Employees::select('eid', 'fullname')
            ->whereNotNull('fullname')
            ->where('fullname', '<>', '')
            ->distinct()
            ->orderBy('fullname')
            ->get();
        $data = [
            'getComity' => $getEmpAttachments,
            'getEmployees' => $getEmployees,


        ];
        return response()->json($data);
    }
    public function DeleteImages(Request $request)
    {
        $id = $request->input('id');
        $Guid = $request->input('Guid');
        $imageName = $request->input('imageName');

        $deleteImage = AttachmentsEmp::where([['ParentGuid', $Guid], ['FilePath', $imageName]])->delete();
        if ($deleteImage) {
            $uploadPath = 'assets/img/employeesImage';
            $filePath = $uploadPath . '/' . $imageName;
            if (File::exists($filePath)) {
                File::delete($filePath);
            }
            return response()->json(['status' => 'تم حذف الكتاب بنجاح']);
        }
    }
}
