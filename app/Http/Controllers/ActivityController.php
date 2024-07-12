<?php

namespace App\Http\Controllers;


use App\Models\Activity;
use App\Models\Attachments;
use App\Models\Employees;
use App\Models\EmployeesActivity;
use App\Models\User2;
use App\Models\UserPermissions;
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
        $id2 = session('id');
        $user = User2::find($id2);
        $Permission = UserPermissions::where('GroupID', '=', $user->GroupID)
            ->where('FormName', 'الانشطة والفعاليات')
            ->get()
            ->last();
        $Permission->OptionAdd = $Permission->OptionAdd == true ? true : false;
        $Permission->OptionEdit = $Permission->OptionEdit == true ? true : false;
        $Permission->OptionDel = $Permission->OptionDel == true ? true : false;
        $Permission->ReadOnly = $Permission->ReadOnly == true ? true : false;
        $Permission->Enable = $Permission->Enable == true ? true : false;

        $getData = Activity::orderByDesc('aid')->get();

        $data = [
            'getActivity' => $getData,
            'Permission' => $Permission,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
        $aid = $request->post('aid');
        $Guid = $request->post('Guid');
        $eid = $request->post('eid');
        $eidArray = explode(',', $eid);
        $eid2 = $request->post('eid2');
        $eidArray2 = explode(',', $eid2);
        if ($Guid == 'null' || $Guid == '' || empty($Guid)) {
            $Guid = strtoupper(Uuid::uuid4()->toString());
        }
        $UserID = session('id');

        if ($aid != "") {
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
                            $getEmpActivity = EmployeesActivity::Where('aid', '=', $aid)->get() != null ? EmployeesActivity::Where('aid', '=', $aid)->get() : null;
                            if ($getEmpActivity != null) {
                                EmployeesActivity::where('aid', '=', $aid)->delete();
                                foreach ($eidArray as $value) {

                                    $EmpActivity = EmployeesActivity::updateOrCreate(
                                        [
                                            'eaid' => EmployeesActivity::max('eaid') > 0 ? EmployeesActivity::max('eaid') + 1 : 1,
                                        ],
                                        [
                                            'aid' => $aid,
                                            'eid' => $value,
                                            'atype' => 'القاء',
                                            'UserID' => $UserID
                                        ]
                                    );
                                }
                            } else {
                                foreach ($eidArray as $value) {

                                    $EmpActivity = EmployeesActivity::updateOrCreate(
                                        [
                                            'id' => EmployeesActivity::max('eaid') > 0 ? EmployeesActivity::max('eaid') + 1 : 1,
                                        ],
                                        [
                                            'aid' => $aid,
                                            'eid' => $value,
                                            'atype' => 'القاء',
                                            'UserID' => $UserID
                                        ]
                                    );
                                }
                            }
                        }
                        if (count($eidArray2) > 0) {
                            $getEmpActivity = EmployeesActivity::Where('aid', '=', $aid)->get() != null ? EmployeesActivity::Where('aid', '=', $aid)->get() : null;
                            if ($getEmpActivity != null) {
                                EmployeesActivity::where('aid', '=', $aid)->delete();
                                foreach ($eidArray2 as $value2) {

                                    $EmpActivity = EmployeesActivity::updateOrCreate(
                                        [
                                            'eaid' => EmployeesActivity::max('eaid') > 0 ? EmployeesActivity::max('eaid') + 1 : 1,
                                        ],
                                        [
                                            'aid' => $aid,
                                            'eid' => $value2,
                                            'atype' => 'حضور',
                                            'UserID' => $UserID
                                        ]
                                    );
                                }
                            } else {
                                foreach ($eidArray2 as $value2) {

                                    $EmpActivity = EmployeesActivity::updateOrCreate(
                                        [
                                            'id' => EmployeesActivity::max('eaid') > 0 ? EmployeesActivity::max('eaid') + 1 : 1,
                                        ],
                                        [
                                            'aid' => $aid,
                                            'eid' => $value2,
                                            'atype' => 'حضور',
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
                    $getEmpActivity = EmployeesActivity::Where([['aid', $aid], ['atype', '=', 'القاء']])->get() != null ? EmployeesActivity::Where([['aid', $aid], ['atype', '=', 'القاء']])->get() : null;
                    if ($getEmpActivity != null) {
                        EmployeesActivity::where([['aid', $aid], ['atype', '=', 'القاء']])->delete();
                        foreach ($eidArray as $value) {

                            $EmpActivity = EmployeesActivity::updateOrCreate(
                                [
                                    'eaid' => EmployeesActivity::max('eaid') > 0 ? EmployeesActivity::max('eaid') + 1 : 1,
                                ],
                                [
                                    'aid' => $aid,
                                    'eid' => $value,
                                    'atype' => 'القاء',
                                    'UserID' => $UserID
                                ]
                            );
                        }
                    } else {
                        foreach ($eidArray as $value) {

                            $EmpActivity = EmployeesActivity::updateOrCreate(
                                [
                                    'eaid' => EmployeesActivity::max('eaid') > 0 ? EmployeesActivity::max('eaid') + 1 : 1,
                                ],
                                [
                                    'aid' => $aid,
                                    'eid' => $value,
                                    'atype' => 'القاء',
                                    'UserID' => $UserID
                                ]
                            );
                        }
                    }
                }
                if (count($eidArray2) > 0) {
                    $getEmpActivity = EmployeesActivity::Where([['aid', $aid], ['atype', '=', 'حضور']])->get() != null ? EmployeesActivity::Where([['aid', $aid], ['atype', '=', 'حضور']])->get() : null;
                    if ($getEmpActivity != null) {
                        EmployeesActivity::where([['aid', $aid], ['atype', '=', 'حضور']])->delete();
                        foreach ($eidArray2 as $value2) {

                            $EmpActivity = EmployeesActivity::updateOrCreate(
                                [
                                    'eaid' => EmployeesActivity::max('eaid') > 0 ? EmployeesActivity::max('eaid') + 1 : 1,
                                ],
                                [
                                    'aid' => $aid,
                                    'eid' => $value2,
                                    'atype' => 'حضور',
                                    'UserID' => $UserID
                                ]
                            );
                        }
                    } else {
                        foreach ($eidArray2 as $value2) {

                            $EmpActivity = EmployeesActivity::updateOrCreate(
                                [
                                    'id' => EmployeesActivity::max('eaid') > 0 ? EmployeesActivity::max('eaid') + 1 : 1,
                                ],
                                [
                                    'aid' => $aid,
                                    'eid' => $value2,
                                    'atype' => 'حضور',
                                    'UserID' => $UserID
                                ]
                            );
                        }
                    }
                }
            }
            $Activity = Activity::updateOrCreate(
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
            $newID = Activity::max('aid') > 0 ? Activity::max('aid') + 1 : 1;

            $Activity = Activity::updateOrCreate(
                [
                    'aid' => $newID,
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
            if ($Activity) {
                if (count($eidArray) > 0) {
                    foreach ($eidArray as $value) {

                        $EmpActivity = EmployeesActivity::updateOrCreate(
                            [
                                'eaid' => EmployeesActivity::max('eaid') > 0 ? EmployeesActivity::max('eaid') + 1 : 1
                            ],
                            [
                                'aid' => $newID,
                                'eid' => $value,
                                'atype' => 'القاء',
                                'UserID' => $UserID
                            ]
                        );
                    }
                }
                if (count($eidArray2) > 0) {
                    foreach ($eidArray2 as $value2) {

                        $EmpActivity = EmployeesActivity::updateOrCreate(
                            [
                                'eaid' => EmployeesActivity::max('eaid') > 0 ? EmployeesActivity::max('eaid') + 1 : 1
                            ],
                            [
                                'aid' => $newID,
                                'eid' => $value2,
                                'atype' => 'حضور',
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




        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $aid = $request->input('aid');
        $Activity = Activity::find($aid);
        $Attachments = Attachments::where('ParentGuid', $Activity->Guid)->get();
        $EmpActivity = EmployeesActivity::where([['aid', $aid], ['atype', '=', 'القاء']])->get();
        $EmpActivity2 = EmployeesActivity::where([['aid', $aid], ['atype', '=', 'القاء']])->get()
            ->map(function ($item) {
                $item['eid'] = Employees::find($item['eid'])->fullname;
                return $item;
            });
        $EmpActivity3 = EmployeesActivity::where([['aid', $aid], ['atype', '=', 'حضور']])->get();
        $EmpActivity4 = EmployeesActivity::where([['aid', $aid], ['atype', '=', 'حضور']])->get()
            ->map(function ($item) {
                $item['eid'] = Employees::find($item['eid'])->fullname;
                return $item;
            });
        $id2 = session('id');
        $user = User2::find($id2);
        $Permission = UserPermissions::where('GroupID', '=', $user->GroupID)
            ->where('FormName', 'الانشطة والفعاليات')
            ->get()
            ->last();
        $Permission->OptionAdd = $Permission->OptionAdd == true ? true : false;
        $Permission->OptionEdit = $Permission->OptionEdit == true ? true : false;
        $Permission->OptionDel = $Permission->OptionDel == true ? true : false;
        $Permission->ReadOnly = $Permission->ReadOnly == true ? true : false;
        $Permission->Enable = $Permission->Enable == true ? true : false;

        $data = [
            'Activity' => $Activity,
            'Attachments' => $Attachments,
            'EmpActivity' => $EmpActivity,
            'EmpActivity2' => $EmpActivity2,
            'EmpActivity3' => $EmpActivity3,
            'EmpActivity4' => $EmpActivity4,
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
        $getEmployees = Employees::select('eid', 'fullname')
            ->whereNotNull('fullname')
            ->where('fullname', '<>', '')
            ->distinct()
            ->orderBy('fullname')
            ->get();
        $data = [
            'getAct_ID' => $getAct_ID,
            'getEmployees' => $getEmployees,


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
