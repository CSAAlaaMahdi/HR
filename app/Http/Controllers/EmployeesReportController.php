<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use App\Models\AttachmentsEmp;
use App\Models\Comity;
use App\Models\Depts;
use App\Models\EmployeeComity;
use App\Models\Employees;
use App\Models\EmployeesActivity;
use Illuminate\Http\Request;


class EmployeesReportController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('employee.employeesReport');
        }
    }


    public function create(Request $request)
    {
        $getData = Employees::orderBy('eid')->get()
            ->map(function($item){
                $item['active'] = $item['active'] ==="1" ? 'نشط':'غير نشط';
                return $item;
            });
        $data = [
            'getEmployees' => $getData,
        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {
      
    }


    public function show(Request $request)
    {
        $id = $request->input('eid');
        $Emp = Employees::with(
            'EmpCertification.CerAttachments',
            'EmpThanks.ThanksAttachments',
            'EmpVacations.VacAttachments',
            'EmpJobs.JobsAttachments',
            'EmpPositions.PositionsAttachments',
            'EmpSupervisors.SupervisorsAttachments',
            'EmpArticles.ArticlesAttachments',
            'EmpChildren.ChildrenAttachments',


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
        foreach ($Emp->EmpArticles as  $value) {
            $value->did = $Emp->fullname;
        }
        foreach ($Emp->EmpChildren as  $value) {
            $value->eid = $Emp->fullname;
        }
        $GetActivity = EmployeesActivity::where('eid', $id)->get()
            ->map(function ($item) {
                $item->Type =Activity::find($item['aid']) != null ? Activity::find($item['aid'])->act_id : "";
                $item->Name =Activity::find($item['aid']) != null ? Activity::find($item['aid'])->Aname : "";
                $item->Place =Activity::find($item['aid']) != null ? Activity::find($item['aid'])->Place : "";
                $item->ActDate =Activity::find($item['aid']) != null ? Activity::find($item['aid'])->ActDate : "";
                $item->NoDays =Activity::find($item['aid']) != null ? Activity::find($item['aid'])->NoDays : "";
                $item->Participants =Activity::find($item['aid']) != null ? Activity::find($item['aid'])->Participants : "";
                return $item;
            });
        $GetComity = EmployeeComity::where('eid', $id)->get()
            ->map(function ($item) {
                $item->ctype = Comity::find($item['cid']) != null ? Comity::find($item['cid'])->ctype : "";
                $item->docno = Comity::find($item['cid']) != null ? Comity::find($item['cid'])->docno : "";
                $item->docdate = Comity::find($item['cid']) != null ?  Comity::find($item['cid'])->docdate : "";
                $item->notes = Comity::find($item['cid']) != null ? Comity::find($item['cid'])->notes : "";
                return $item;
            })->sortBy('docdate')->values()->toArray();
        
        $Attachments = AttachmentsEmp::where('ParentGuid', $Emp->Guid)->get();
        $data = [
            'Emp' => $Emp,
            'Dept' => Depts::find($Emp->deptid),
            'Attachments' => $Attachments,
            'EmpActivity' => $GetActivity,
            'EmpComity' => $GetComity,


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
      
    }

    public function filldata()
    {

       
    }

  
}
