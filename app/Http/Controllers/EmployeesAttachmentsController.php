<?php

namespace App\Http\Controllers;


use App\Models\AttachmentsEmp;
use App\Models\EmployeesAttachments;
use App\Models\Employees;
use App\Models\User2;
use App\Models\UserPermissions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Str;

class EmployeesAttachmentsController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('employee.employeesAttachments');
        }
    }


    public function create(Request $request)
    {
        $id = session('id');
        $user = User2::find($id);
        $Permission = UserPermissions::where('GroupID', '=', $user->GroupID)
            ->where('FormName', 'الاضبارة الالكترونية')
            ->get()
            ->last();
        $Permission->OptionAdd = $Permission->OptionAdd == true ? true : false;
        $Permission->OptionEdit = $Permission->OptionEdit == true ? true : false;
        $Permission->OptionDel = $Permission->OptionDel == true ? true : false;
        $Permission->ReadOnly = $Permission->ReadOnly == true ? true : false;
        $Permission->Enable = $Permission->Enable == true ? true : false;

        $getData = EmployeesAttachments::orderByDesc('id')->get()
            ->map(function($item){
                $item['eid'] = Employees::find($item['eid']) !=null ? Employees::find($item['eid'])->fullname :null;
                return $item;
            });

        $data = [
            'getEmployeesAttachments' => $getData,
            'Permission' => $Permission,
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
                    'atType' => $request->post('atType'),
                    'notes' => $request->post('notes'),
                    'UserID' => $UserID,

                ]
            );
        } else {
            // $newID = EmployeesAttachments::max('id') > 0 ? EmployeesAttachments::max('id') + 1 : 1;

            $Attachmentemp = EmployeesAttachments::updateOrCreate(
                [
                    'id' => $id,
                ],
                [
                    'Guid' => $Guid,
                    'eid' => $request->post('eid'),
                    'atType' => $request->post('atType'),
                    'notes' => $request->post('notes'),
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
        $id2 = session('id');
        $user = User2::find($id2);
        $Permission = UserPermissions::where('GroupID', '=', $user->GroupID)
            ->where('FormName', 'الاضبارة الالكترونية')
            ->get()
            ->last();
        $Permission->OptionAdd = $Permission->OptionAdd == true ? true : false;
        $Permission->OptionEdit = $Permission->OptionEdit == true ? true : false;
        $Permission->OptionDel = $Permission->OptionDel == true ? true : false;
        $Permission->ReadOnly = $Permission->ReadOnly == true ? true : false;
        $Permission->Enable = $Permission->Enable == true ? true : false;

        $data = [
            'AttachmentsEmp' => $AttachmentsEmp,
            'Attachments' => $Attachments,
            'Permission' =>$Permission,
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

        $getatType = EmployeesAttachments::select('atType')
            ->whereNotNull('atType')
            ->where('atType', '<>', '')
            ->distinct()
            ->orderBy('atType')
            ->get();
        $getEmp = Employees::select('eid', 'fullname')
            ->whereNotNull('fullname')
            ->where('fullname', '<>', '')
            ->distinct()
            ->orderBy('fullname')
            ->get();
        $data = [
            'getatType' => $getatType,
            'getEmp' => $getEmp,


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
