<?php

namespace App\Http\Controllers;

use App\Models\Depts;
use App\Models\Employees;
use Illuminate\Http\Request;


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
        $Employee = Employees::updateOrCreate(
            [
                'eid' => $empid,
            ],
            [
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
            ]
        );
        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('eid');
        $Emp = Employees::find($id);
        $data = [
            'Emp' => $Emp,
            'Dept' => Depts::find($Emp->deptid),

        ];
        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        // $Guid = $request->post('Ui_Guid');
        // $data = User::find($Guid);
        // $data->Ui_Name = $request->post('Ui_Name');
        // $data->Ui_Piece = $request->post('Ui_Piece');
        // $data->Ui_PieceType = $request->post('Ui_PieceType');
        // // $data->Ui_UserName = session('User');
        // $data->update();

        // return response()->json(['status' => 'تم تحديث البيانات بنجاح']);
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
}
