<?php

namespace App\Http\Controllers;

use App\Models\AccountTree;
use App\Models\CustomerSupplier;
use App\Models\SalesGroup;
use Illuminate\Http\Client\ResponseSequence;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Guid\Guid;
use Illuminate\Support\Str;
use Ramsey\Uuid\Uuid;

class CustomerSupplierController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('customersupplier.CustomerSupplier');
        }
    }


    public function create(Request $request)
    {

        $data = [
            'CustomerSupplier' => collect(DB::select("SET NOCOUNT ON ; exec CustomerSupplier_GetData"))
                ->all()
        ];

        return response()->json($data);
    }


    public function store(Request $request)
    {
        $rowID = CustomerSupplier::max('Cs_RowID');

        $guid  = strtoupper(Uuid::uuid4()->toString());
        $account = AccountTree::where('Parent_Guid', $request->post('Cs_Account'))->orderBy('Ac_RowID', 'DESC')->first();
        $maskCode = "";
        $parent = "";

        if ($account == null) {
            $parent =  AccountTree::where('Guid', $request->post('Cs_Account'))->select('Ac_Code_Mask')->first();
            $maskCode = $parent->Ac_Code_Mask . 1;
        } else {
            $parent = AccountTree::where('Guid', $request->post('Cs_Account'))->select('Ac_Code_Mask')->first();
            $child =  AccountTree::where('Parent_Guid', $request->post('Cs_Account'))->orderBy('Ac_RowID', 'DESC')->select('Ac_Code_Mask')->first();
            $codemaskparent = $parent->Ac_Code_Mask;
            $codemaskchild = $child->Ac_Code_Mask;

            $result = 0;
            $finalResult = 0;
            $count = 1;
            while ($codemaskchild != $codemaskparent) {
                $result = $codemaskchild % 10;
                $finalResult = ($finalResult * $count) + $result;
                $count *= 10;
                $codemaskchild = intval($codemaskchild / 10);

            }
            $finalResult++;
            $maskCode = $parent->Ac_Code_Mask . $finalResult;

        }
        $rowAccount = AccountTree::max('Ac_RowID');

        $NewAccount = new AccountTree([
            'Guid' =>$guid,
            'Parent_Guid' => $request->post('Cs_Account') ? $request->post("Cs_Account") :null,
            'Ac_Code_Mask' => $maskCode,
            'Ac_Name' => $request->post('Cs_Name'),
            'Ac_RowID' =>$rowAccount + 1,

        ]);
        $NewAccount->save();


        $CustomerSupplier = new CustomerSupplier([
            'Cs_Guid' =>$guid,
            'Cs_Name'=> $request->post('Cs_Name'),
            'Cs_State' => $request->post('Cs_State'),
            'Cs_GroupSales' => $request->post('Cs_SalesGroup') ? $request->post('Cs_SalesGroup') : null,
            'Cs_Address' => $request->post('Cs_Address'),
            'Cs_Email' => $request->post('Cs_Email'),
            'Cs_Mobile' => $request->post('Cs_Mobile'),
            'Cs_Type' =>$request->post('Cs_Type'),
            'Cs_Account' => $request->post('Cs_Account') ? $request->post("Cs_Account") : null,
            'Cs_Notes' => $request->post('Cs_Notes'),
            'Cs_RowID' => $rowID + 1,
            // 'Cs_UserName'=>session('User')
        ]);
        $CustomerSupplier->save();





        return response()->json(['status' => 'تم اضافة الحساب بنجاح']);
    }


    public function show(Request $request)
    {
        // $id = $request->input('getid');
        // $data = CustomerSupplier::find($id);
        // return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        $guid = $request->post('Cs_Guid');
        $data = CustomerSupplier::find($guid);
        $data->Cs_Name = $request->post('Cs_Name');
        $data->Cs_State = $request->post('Cs_State');
        $data->Cs_GroupSales = $request->post('Cs_SalesGroup');
        $data->Cs_Address = $request->post('Cs_Address');
        $data->Cs_Email = $request->post('Cs_Email');
        $data->Cs_Mobile = $request->post('Cs_Mobile');
        $data->Cs_Type = $request->post('Cs_Type');
        $data->Cs_Account = $request->post('Cs_Account');
        $data->Cs_Notes = $request->post('Cs_Notes');
        // $data->Cs_UserName = session('User');
        $data->update();

        return response()->json(['status' => 'تم تحديث البيانات بنجاح']);
    }


    public function destroy(Request $request)
    {
        // $id = $request->post('getid');
        // CustomerSupplier::find($id)->delete();
        // return response()->json(['status' => 'Deleting Successfully...']);
    }

    public function filldata()
    {
        $selectData = [
            [
                'Name' => 'عميل',
            ],
            [
                'Name' => 'مجهز',
            ],

            // Add more data as needed
        ];

        $dxselect = [];

        // Creating an array of objects from $data
        foreach ($selectData as $item) {
            $user = new \stdClass(); // Create a new empty object
            $user->Name = $item['Name'];
            $dxselect[] = $user;
        }
        $accounts = AccountTree::select('Guid', 'Parent_Guid', 'Ac_Name', 'Ac_Code_Mask', 'Ac_RowID')->orderBy('Ac_RowID', 'ASC')->get();
        $salesGroups = SalesGroup::select('Gs_Guid', 'Gs_Name', 'Gs_SalesRatio', 'Gs_RowID')->orderBy('Gs_RowID', 'ASC')->get();
        $data = [
            'getAccount' => $accounts,
            'getSalesGroup' => $salesGroups,
            'getType' => $dxselect,
            // 'getAccount2' =>collect(DB::table('accounttreemains'))->all()
        ];
        return response()->json($data);
    }
}
