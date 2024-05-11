<?php

namespace App\Http\Controllers;

use App\Models\AttachmentsEmp;
use App\Models\Depts;
use App\Models\Employees;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Str;

class EmployeesController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('employee.index');
        }
    }


    public function create(Request $request)
    {
        // $getData = UsersGroups::all()->map(function($item){
        //     $item['UG_State'] = $item['UG_State'] > 0 ? 'نشطة' : 'غير نشطة';
        //     return $item;
        // });
        // $data = [
        //     'getUsersGroups' => $getData,
        // ];
        // return response()->json($data);
    }


    public function store(Request $request)
    {
        $empid = $request->post('eid');
        $Guid = $request->post('Guid');
        if ($Guid == 'null' || $Guid == '' || empty($Guid)) {
            $Guid = strtoupper(Uuid::uuid4()->toString());
        }
        $UserID = session('id');
        if ($request->hasFile('image')) {
            $images = $request->file('image');
            foreach ($images as $image) {

                $imageName =  $image->getClientOriginalName();
                if ($empid != "") {
                    $checkImage = AttachmentsEmp::where([
                        ['ParentGuid', $Guid],
                        ['FilePath', $imageName]
                    ])->count('id');
                    if ($checkImage > 0) {
                    } else {
                        $uploadPath = 'assets/img/employeesImage';
                        $newImageName = Str::random(20) . '.' . $imageName;
                        $image->move($uploadPath, $newImageName);
                        $AttachmentsEmp = AttachmentsEmp::updateOrCreate(
                            [
                                'ParentGuid' => $Guid,
                                'DocTitle' => $request->post('DocTitle'),
                                'FilePath' => $newImageName,
                                'UserID' => $UserID,

                            ]

                        );
                    }
                } else {
                    $uploadPath = 'assets/img/employeesImage';
                    $newImageName = Str::random(20) . '.' . $imageName;
                    $image->move($uploadPath, $newImageName);
                    $AttachmentsEmp = AttachmentsEmp::updateOrCreate(
                        [
                            'ParentGuid' => $Guid,
                            'DocTitle' => $request->post('DocTitle'),
                            'FilePath' => $newImageName,
                            'UserID' => $UserID,


                        ]

                    );
                }
            }
            $Employee = Employees::updateOrCreate(
                [
                    'eid' => $empid,
                ],
                [
                    'Guid'  => $Guid,
                    'firstname' => $request->post('firstname'),
                    'secondname' => $request->post('secondname'),
                    'thirdname' => $request->post('thirdname'),
                    'forthname' => $request->post('forthname'),
                    'surname' => $request->post('surname'),
                    'fullname' => $request->post('fullname'),
                    'mothername' => $request->post('mothername'),
                    'address' => $request->post('address'),
                    'wifename' => $request->post('wifename'),
                    'email' => $request->post('email'),
                    'mobile' => $request->post('mobile'),
                    'idno' => $request->post('idno'),
                    'idcerno' => $request->post('idcerno'),
                    'homeid' => $request->post('homeid'),
                    'rationo' => $request->post('rationo'),
                    'notes' => $request->post('notes'),
                    'dob' => $request->post('dob'),
                    'iddate' => $request->post('iddate'),
                    'idcerdate' => $request->post('idcerdate'),
                    'homedate' => $request->post('homedate'),
                    'hiredate' => $request->post('hiredate'),
                    'rehiredate' => $request->post('rehiredate'),
                    'moh_wdate' => $request->post('moh_wdate'),
                    'bplace' => $request->post('bplace'),
                    'governorate' => $request->post('governorate'),
                    'MaritalStatus' => $request->post('MaritalStatus'),
                    'wifejob' => $request->post('wifejob'),
                    'issueplace' => $request->post('issueplace'),
                    'jclass' => $request->post('jclass'),
                    'jcategory' => $request->post('jcategory'),
                    'genralspt' => $request->post('genralspt'),
                    'spacifspt' => $request->post('spacifspt'),
                    'deptid' => $request->post('deptid'),
                    'bloodtype' => $request->post('bloodtype'),
                    'gender' => $request->post('gender'),
                    'active' => $request->post('active'),
                    'UserID' => $UserID,
                ]
            );
        } else {

            $Employee = Employees::updateOrCreate(
                [
                    'eid' => $empid,
                ],
                [
                    'Guid'  => $Guid,
                    'firstname' => $request->post('firstname'),
                    'secondname' => $request->post('secondname'),
                    'thirdname' => $request->post('thirdname'),
                    'forthname' => $request->post('forthname'),
                    'surname' => $request->post('surname'),
                    'fullname' => $request->post('fullname'),
                    'mothername' => $request->post('mothername'),
                    'address' => $request->post('address'),
                    'wifename' => $request->post('wifename'),
                    'email' => $request->post('email'),
                    'mobile' => $request->post('mobile'),
                    'idno' => $request->post('idno'),
                    'idcerno' => $request->post('idcerno'),
                    'homeid' => $request->post('homeid'),
                    'rationo' => $request->post('rationo'),
                    'notes' => $request->post('notes'),
                    'dob' => $request->post('dob'),
                    'iddate' => $request->post('iddate'),
                    'idcerdate' => $request->post('idcerdate'),
                    'homedate' => $request->post('homedate'),
                    'hiredate' => $request->post('hiredate'),
                    'rehiredate' => $request->post('rehiredate'),
                    'moh_wdate' => $request->post('moh_wdate'),
                    'bplace' => $request->post('bplace'),
                    'governorate' => $request->post('governorate'),
                    'MaritalStatus' => $request->post('MaritalStatus'),
                    'wifejob' => $request->post('wifejob'),
                    'issueplace' => $request->post('issueplace'),
                    'jclass' => $request->post('jclass'),
                    'jcategory' => $request->post('jcategory'),
                    'genralspt' => $request->post('genralspt'),
                    'spacifspt' => $request->post('spacifspt'),
                    'deptid' => $request->post('deptid'),
                    'bloodtype' => $request->post('bloodtype'),
                    'gender' => $request->post('gender'),
                    'active' => $request->post('active'),
                    'UserID' => $UserID,
                ]
            );
        }

        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('eid');
        $Emp = Employees::with(
            'EmpCertification.CerAttachments','EmpThanks.ThanksAttachments',
            'EmpVacations.VacAttachments','EmpJobs.JobsAttachments',
            'EmpPositions.PositionsAttachments','EmpSupervisors.SupervisorsAttachments',

            )->find($id);

       foreach ($Emp->EmpCertification as  $value) {
         $value->eid = $Emp->fullname;
       }
       foreach ($Emp->EmpThanks as  $value) {
        $value->eid = $Emp->fullname;
      }
      foreach ($Emp->EmpVacations as  $value) {
        $value->eid = $Emp->fullname;
      }
      foreach ($Emp->EmpJobs as  $value) {
        $value->eid = $Emp->fullname;
      }
      foreach ($Emp->EmpPositions as  $value) {
        $value->eid = $Emp->fullname;
      }
      foreach ($Emp->EmpSupervisors as  $value) {
        $value->eid = $Emp->fullname;
      }
      
        $Attachments = AttachmentsEmp::where('ParentGuid', $Emp->Guid)->get();
        $data = [
            'Emp' => $Emp,
            'Dept' => Depts::find($Emp->deptid),
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
        // $guid = $request->post('UG_Guid');
        // UsersGroups::find($guid)->delete();
        // return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getBPlace = Employees::select('bplace')
            ->whereNotNull('bplace')
            ->where('bplace', '<>', '')
            ->distinct()
            ->get();
        $getGovernorate = Employees::select('governorate')
            ->whereNotNull('governorate')
            ->where('governorate', '<>', '')
            ->distinct()
            ->get();
        $getBloodType = Employees::select('bloodtype')
            ->whereNotNull('bloodtype')
            ->where('bloodtype', '<>', '')
            ->distinct()
            ->get();
        $getMaritalStatus = Employees::select('MaritalStatus')
            ->whereNotNull('MaritalStatus')
            ->where('MaritalStatus', '<>', '')
            ->distinct()
            ->get();
        $getWifeJobe = Employees::select('wifejobe')
            ->whereNotNull('wifejobe')
            ->where('wifejobe', '<>', '')
            ->distinct()
            ->get();
        $getIssuePlace = Employees::select('issueplace')
            ->whereNotNull('issueplace')
            ->where('issueplace', '<>', '')
            ->distinct()
            ->get();
        $getJClass = Employees::select('jclass')
            ->whereNotNull('jclass')
            ->where('jclass', '<>', '')
            ->distinct()
            ->get();
        $getJCategory = Employees::select('jcategory')
            ->whereNotNull('jcategory')
            ->where('jcategory', '<>', '')
            ->distinct()
            ->get();
        $getGenralSpt = Employees::select('genralspt')
            ->whereNotNull('genralspt')
            ->where('genralspt', '<>', '')
            ->distinct()
            ->get();
        $getSpacifSpt = Employees::select('spacifspt')
            ->whereNotNull('spacifspt')
            ->where('spacifspt', '<>', '')
            ->distinct()
            ->get();
        $getDepts = Depts::whereNotNull('deptname')
            ->where('deptname', '<>', '')
            ->distinct()
            ->get();
        $getEmployees = Employees::select('eid', 'fullname')
            ->whereNotNull('fullname')
            ->where('fullname', '<>', '')
            ->distinct()
            ->orderBy('fullname')
            ->get();
        $getImage = Employees::select('notes')
            ->whereNotNull('notes')
            ->where('notes', '<>', '')
            ->distinct()
            ->get();
        $getGender = Employees::select('gender')
            ->whereNotNull('gender')
            ->where('gender', '<>', '')
            ->distinct()
            ->get();
        $data = [
            'getBPlace' => $getBPlace,
            'getGovernorate' => $getGovernorate,
            'getBloodType' => $getBloodType,
            'getMaritalStatus' => $getMaritalStatus,
            'getWifeJobe' => $getWifeJobe,
            'getIssuePlace' => $getIssuePlace,
            'getJClass' => $getJClass,
            'getJCategory' => $getJCategory,
            'getGenralSpt' => $getGenralSpt,
            'getSpacifSpt' => $getSpacifSpt,
            'getDepts' => $getDepts,
            'getEmployees' => $getEmployees,
            'getImage' => $getImage,
            'getGender' => $getGender,
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
