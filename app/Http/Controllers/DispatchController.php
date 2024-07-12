<?php

namespace App\Http\Controllers;

use App\Models\Attachments;
use App\Models\Dispatch;
use App\Models\Employees;
use App\Models\User2;
use App\Models\UserPermissions;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Ramsey\Uuid\Uuid;
use Illuminate\Support\Str;

class DispatchController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('administration.dispatch');
        }
    }


    public function create(Request $request)
    {
        $id2 = session('id');
        $user = User2::find($id2);
        $Permission = UserPermissions::where('GroupID', '=', $user->GroupID)
            ->where('FormName', 'الايفادات')
            ->get()
            ->last();
        $Permission->OptionAdd = $Permission->OptionAdd == true ? true : false;
        $Permission->OptionEdit = $Permission->OptionEdit == true ? true : false;
        $Permission->OptionDel = $Permission->OptionDel == true ? true : false;
        $Permission->ReadOnly = $Permission->ReadOnly == true ? true : false;
        $Permission->Enable = $Permission->Enable == true ? true : false;

        $getData = Dispatch::orderByDesc('id')->get()->map(function ($item) {
            $item['eid'] = Employees::find($item['eid']) != null ? Employees::find($item['eid'])->fullname : "";
            return $item;
        });

        $data = [
            'getDispatch' => $getData,
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
        if ($request->hasFile('image')) {
            $images = $request->file('image');
            foreach ($images as $image) {

                $imageName =  $image->getClientOriginalName();
                if ($id != "") {
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
            $Dispatch = Dispatch::updateOrCreate(
                [
                    'id' => $id,
                ],
                [
                    'eid' => $request->post('eid'),
                    'Guid' => $Guid,
                    'dtype' => $request->post('dtype'),
                    'ddirection' => $request->post('ddirection'),
                    'datefrom' => $request->post('datefrom'),
                    'dateto' => $request->post('dateto'),
                    'docno' => $request->post('docno'),
                    'docdate' => $request->post('docdate'),
                    'notes' => $request->post('notes'),
                    'UserID' => $UserID,


                ]
            );
        } else {

            $Dispatch = Dispatch::updateOrCreate(
                [
                    'id' => $id,
                ],
                [
                    'eid' => $request->post('eid'),
                    'Guid' => $Guid,
                    'dtype' => $request->post('dtype'),
                    'ddirection' => $request->post('ddirection'),
                    'datefrom' => $request->post('datefrom'),
                    'dateto' => $request->post('dateto'),
                    'docno' => $request->post('docno'),
                    'docdate' => $request->post('docdate'),
                    'notes' => $request->post('notes'),
                    'UserID' => $UserID,


                ]
            );
        }

        return response()->json(['status' => 'تم ادخال البيانات بنجاح']);
    }


    public function show(Request $request)
    {
        $id = $request->input('id');
        $Dispatch = Dispatch::find($id);
        $Attachments = Attachments::where('ParentGuid', $Dispatch->Guid)->get();
        $id2 = session('id');
        $user = User2::find($id2);
        $Permission = UserPermissions::where('GroupID', '=', $user->GroupID)
            ->where('FormName', 'الايفادات')
            ->get()
            ->last();
        $Permission->OptionAdd = $Permission->OptionAdd == true ? true : false;
        $Permission->OptionEdit = $Permission->OptionEdit == true ? true : false;
        $Permission->OptionDel = $Permission->OptionDel == true ? true : false;
        $Permission->ReadOnly = $Permission->ReadOnly == true ? true : false;
        $Permission->Enable = $Permission->Enable == true ? true : false;

        $data = [
            'Dispatch' => $Dispatch,
            'Attachments' => $Attachments,
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
        $id = $request->post('id');
        $Dispatch = Dispatch::find($id);
        Attachments::where('ParentGuid', $Dispatch->Guid)->delete();
        Dispatch::find($id)->delete();
        return response()->json(['status' => 'تم حذف البيانات بنجاح']);
    }

    public function filldata()
    {

        $getDispatchType = Dispatch::select('dtype')
            ->whereNotNull('dtype')
            ->where('dtype', '<>', '')
            ->distinct()
            ->orderBy('dtype')
            ->get();
        $getDispatchDirection = Dispatch::select('ddirection')
            ->whereNotNull('ddirection')
            ->where('ddirection', '<>', '')
            ->distinct()
            ->orderBy('ddirection')
            ->get();
        $getEmp = Employees::select('eid', 'fullname')
            ->orderBy('fullname')
            ->get();

        $data = [
            'getDispatchType' => $getDispatchType,
            'getDispatchDirection' => $getDispatchDirection,
            'getEmp' => $getEmp,


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
