<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrderMain;
use App\Models\Company;
use App\Models\Modell;
use Illuminate\Support\Str;

class OrderMainController extends Controller
{

    public function index()
    {

        if (session()->has('User')) {
            return view('order.index');
        }
    }


    public function create(Request $request)
    {
        $totalFilteredRecord = $totalDataRecord = $draw_val = "";
        $columnCur_list = array(
            0 => 'id',
            1 => 'Orm_OrderNo',
            2 => 'Orm_OrderDate',
            3 => 'Orm_Company',
            4 => 'Orm_Model',
            5 => 'Orm_VIN',
            6 => 'Orm_Description',
            7 => 'Orm_ItemsType',
            8 => 'Orm_Complete',
        );


        // $nric = 'Audi';
        // $items = OrderMain::whereLike(decrypt('Orm_Company',$nric))->get();
        // // $data=[];
        // // foreach ($items as $key => $value) {
        // //     $sub_data['id']=$value->id;
        // //     $sub_data['Orm_OrderNo']=$value->Orm_OrderNo;
        // //     $sub_data['Orm_OrderDate']=$value->Orm_OrderDate;
        // //     $sub_data['Orm_Company']=decrypt($value->Orm_Company);
        // //     $sub_data['Orm_Model']=decrypt($value->Orm_Model);
        // //     $sub_data['Orm_VIN']=decrypt($value->Orm_VIN);
        // //     $sub_data['Orm_Description']=decrypt($value->Orm_Description);
        // //     $sub_data['Orm_ItemsType']=decrypt($value->Orm_ItemsType);
        // //     $data[]=$sub_data;
        // // }


        // return response()->json($items);
        // return response()->json($data);

        $totalDataRecord = OrderMain::count();
        $totalFilteredRecord = $totalDataRecord;

        $limit_val = $request->input('length');
        $start_val = $request->input('start');
        $dir_val = $request->input('order.0.dir');
        $data = [];


        if (empty($request->input('search.value'))) {
            if (empty($request->input('order.0.column'))) {
                $post_data = OrderMain::offset($start_val)
                    ->limit($limit_val)
                    ->get();

                foreach ($post_data as $key => $value) {
                    $sub_data['id'] = $value->id;
                    $sub_data['Orm_OrderNo'] = $value->Orm_OrderNo;
                    $sub_data['Orm_OrderDate'] = $value->Orm_OrderDate;
                    $sub_data['Orm_Company'] = decrypt($value->Orm_Company);
                    $sub_data['Orm_Model'] = decrypt($value->Orm_Model);
                    $sub_data['Orm_VIN'] = decrypt($value->Orm_VIN);
                    $sub_data['Orm_Description'] = decrypt($value->Orm_Description);
                    $sub_data['Orm_ItemsType'] = decrypt($value->Orm_ItemsType);
                    $sub_data['Orm_Complete'] = $value->Orm_Complete;
                    $data[] = $sub_data;
                }
                // echo dd($post_data);
            } else {
                $order_val = $columnCur_list[$request->input('order.0.column')];
                $post_data = OrderMain::offset($start_val)
                    ->limit($limit_val)
                    ->orderBy($order_val, $dir_val)
                    ->get();
                foreach ($post_data as $key => $value) {
                    $sub_data['id'] = $value->id;
                    $sub_data['Orm_OrderNo'] = $value->Orm_OrderNo;
                    $sub_data['Orm_OrderDate'] = $value->Orm_OrderDate;
                    $sub_data['Orm_Company'] = decrypt($value->Orm_Company);
                    $sub_data['Orm_Model'] = decrypt($value->Orm_Model);
                    $sub_data['Orm_VIN'] = decrypt($value->Orm_VIN);
                    $sub_data['Orm_Description'] = decrypt($value->Orm_Description);
                    $sub_data['Orm_ItemsType'] = decrypt($value->Orm_ItemsType);
                    $sub_data['Orm_Complete'] = $value->Orm_Complete;
                    $data[] = $sub_data;
                }
                // echo dd($post_data);
            }
        } else {
            $search_text = $request->input('search.value');
            if (empty($request->input('order.0.column'))) {

                $post_data =  OrderMain::all()->filter(function ($record) use ($search_text) {
                    $search_text = Str::of($search_text)->lower();
                    if (
                        Str::of(decrypt($record->Orm_Company))->lower() == $search_text ||
                        Str::of(decrypt($record->Orm_Model))->lower() == $search_text ||
                        Str::of(decrypt($record->Orm_VIN))->lower() == $search_text
                    ) {
                        return $record;
                    }
                });

                foreach ($post_data as $key => $value) {
                    $sub_data['id'] = $value->id;
                    $sub_data['Orm_OrderNo'] = $value->Orm_OrderNo;
                    $sub_data['Orm_OrderDate'] = $value->Orm_OrderDate;
                    $sub_data['Orm_Company'] = decrypt($value->Orm_Company);
                    $sub_data['Orm_Model'] = decrypt($value->Orm_Model);
                    $sub_data['Orm_VIN'] = decrypt($value->Orm_VIN);
                    $sub_data['Orm_Description'] = decrypt($value->Orm_Description);
                    $sub_data['Orm_ItemsType'] = decrypt($value->Orm_ItemsType);
                    $sub_data['Orm_Complete'] = $value->Orm_Complete;
                    $data[] = $sub_data;
                }


                $totalFilteredRecord = count($data);
            } else {
                $order_val = $columnCur_list[$request->input('order.0.column')];
                $post_data =  OrderMain::all()->filter(function ($record) use ($search_text) {
                    $search_text = Str::of($search_text)->lower();
                    if (
                        Str::of(decrypt($record->Orm_Company))->lower() == $search_text ||
                        Str::of(decrypt($record->Orm_Model))->lower() == $search_text ||
                        Str::of(decrypt($record->Orm_VIN))->lower() == $search_text
                    ) {
                        return $record;
                    }
                })->offset(0)
                    ->limit($limit_val)
                    ->orderBy($order_val, $dir_val)
                    ->get();
                foreach ($post_data as $key => $value) {
                    $sub_data['id'] = $value->id;
                    $sub_data['Orm_OrderNo'] = $value->Orm_OrderNo;
                    $sub_data['Orm_OrderDate'] = $value->Orm_OrderDate;
                    $sub_data['Orm_Company'] = decrypt($value->Orm_Company);
                    $sub_data['Orm_Model'] = decrypt($value->Orm_Model);
                    $sub_data['Orm_VIN'] = decrypt($value->Orm_VIN);
                    $sub_data['Orm_Description'] = decrypt($value->Orm_Description);
                    $sub_data['Orm_ItemsType'] = decrypt($value->Orm_ItemsType);
                    $sub_data['Orm_Complete'] = $value->Orm_Complete;
                    $data[] = $sub_data;
                }

                $totalFilteredRecord = count($data);
            }
        }

        $draw_val = $request->input('draw');
        $get_json_data = array(
            "draw"            => intval($draw_val),
            "recordsTotal"    => intval($totalDataRecord),
            "recordsFiltered" => intval($totalFilteredRecord),
            "data"            => $data
        );
        return response()->json($get_json_data);
    }



    public function store(Request $request)
    {
        $OrderMain = new OrderMain([
            'Orm_OrderNo' => $request->post('Orm_OrderNo'),
            'Orm_OrderDate' => $request->post('Orm_OrderDate'),
            'Orm_Company' => encrypt($request->post('Orm_Company')),
            'Orm_Model' => encrypt($request->post('Orm_Model')),
            'Orm_VIN' => encrypt($request->post('Orm_VIN')),
            'Orm_Description' => encrypt($request->post('Orm_Description')),
            'Orm_ItemsType' => encrypt($request->post('Orm_ItemsType')),
            'Orm_Complete' => $request->post('Orm_Complete'),
            'Orm_UserName' => session('User'),


        ]);
        $OrderMain->save();

        return response()->json(['status' => 'Adding Data Successfully...']);
    }


    public function show(Request $request)
    {

        $id = $request->input('getid');
        $data = OrderMain::find($id);

        $data->Orm_Company = decrypt($data->Orm_Company);
        $data->Orm_Model = decrypt($data->Orm_Model);
        $data->Orm_VIN = decrypt($data->Orm_VIN);
        $data->Orm_Description = decrypt($data->Orm_Description);
        $data->Orm_ItemsType = decrypt($data->Orm_ItemsType);
        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {


        $id = $request->post('Orm_ID');
        $data = OrderMain::find($id);
        $data->Orm_OrderNo = $request->post('Orm_OrderNo');
        $data->Orm_OrderDate = $request->post('Orm_OrderDate');
        $data->Orm_Company = encrypt($request->post('Orm_Company'));
        $data->Orm_Model = encrypt($request->post('Orm_Model'));
        $data->Orm_VIN = encrypt($request->post('Orm_VIN'));
        $data->Orm_Description = encrypt($request->post('Orm_Description'));
        $data->Orm_ItemsType = encrypt($request->post('Orm_ItemsType'));
        $data->Orm_Complete = $request->post('Orm_Complete');
        $data->Orm_UserName = $request->post('Orm_UserName');
        $data->update();

        return response()->json(['status' => 'Updating Data ... Successfully. ']);
    }


    public function destroy(Request $request)
    {
        $id = $request->input('getid');
        OrderMain::find($id)->delete();
        return response()->json([
            'status' => 'Deleting Successfully....'
        ]);
    }
    public function filldata()
    {

        $data = [

            'getcompany' => Company::select('Co_Name')->groupBy('Co_Name')->get(),
            'getmodel' => Modell::select('Mo_Name')->groupBy('Mo_Name')->get(),

        ];
        return response()->json($data);
    }
}
