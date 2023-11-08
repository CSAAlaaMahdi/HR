<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\OrderSecondary;
use Illuminate\Support\Str;

class OrderSecondaryController extends Controller
{

    public function index(Request $request)
    {
        if (empty($request->input('getid'))) {
            $data=['id'=>session('IDordermain')];
            if (session()->has('User')) {
                return view('order.ordersecondary', $data);
            }
        }else{
            $id = $request->input('getid');
            $request->session()->put('IDordermain', $id);
            $data=['id'=>session('IDordermain')];
            if (session()->has('User')) {
                return view('order.ordersecondary', $data);
            }
        }
    }


    public function create(Request $request)
    {
        $totalFilteredRecord = $totalDataRecord = $draw_val = "";
        $columnCur_list = array(
            0 => 'id',
            1 => 'Ors_ItemName',
            2 => 'Ors_PartNumber',
            3 => 'Ors_Quantity',
        );

        $idordermain = $request->input('Ors_FK_Orm');


        $totalDataRecord = OrderSecondary::where('Ors_FK_Orm','=', $idordermain)->count();
        $totalFilteredRecord = $totalDataRecord;

        $limit_val = $request->input('length');
        $start_val = $request->input('start');
        $dir_val = $request->input('order.0.dir');
        $data = [];


        if (empty($request->input('search.value'))) {
            if (empty($request->input('order.0.column'))) {
                $post_data = OrderSecondary::where('Ors_FK_Orm','=', $idordermain)
                    ->offset($start_val)
                    ->limit($limit_val)
                    ->get();

                foreach ($post_data as $key => $value) {
                    $sub_data['id'] = $value->id;
                    $sub_data['Ors_FK_Orm'] = $value->Ors_FK_Orm;
                    $sub_data['Ors_ItemName'] = decrypt($value->Ors_ItemName);
                    $sub_data['Ors_PartNumber'] = decrypt($value->Ors_PartNumber);
                    $sub_data['Ors_Quantity'] = $value->Ors_Quantity;
                    $sub_data['Ors_Notes'] = $value->Ors_Notes;
                    $sub_data['Ors_UserName'] = $value->Ors_UserName;
                    $data[] = $sub_data;
                }
                // echo dd($post_data);
            } else {
                $order_val = $columnCur_list[$request->input('order.0.column')];
                $post_data = OrderSecondary::where('Ors_FK_Orm','=', $idordermain)
                    ->offset($start_val)
                    ->limit($limit_val)
                    ->orderBy($order_val, $dir_val)
                    ->get();
                foreach ($post_data as $key => $value) {
                    $sub_data['id'] = $value->id;
                    $sub_data['Ors_FK_Orm'] = $value->Ors_FK_Orm;
                    $sub_data['Ors_ItemName'] = decrypt($value->Ors_ItemName);
                    $sub_data['Ors_PartNumber'] = decrypt($value->Ors_PartNumber);
                    $sub_data['Ors_Quantity'] = $value->Ors_Quantity;
                    $sub_data['Ors_Notes'] = $value->Ors_Notes;
                    $sub_data['Ors_UserName'] = $value->Ors_UserName;
                    $data[] = $sub_data;
                }
                // echo dd($post_data);
            }
        } else {
            $search_text = $request->input('search.value');
            if (empty($request->input('order.0.column'))) {

                $post_data =  OrderSecondary::where('Ors_FK_Orm','=', $idordermain)->get();
                $post_data=$post_data
                    ->filter(function ($record) use ($search_text) {
                        $search_text = Str::of($search_text)->lower();
                        if (
                            Str::of(decrypt($record->Ors_ItemName))->lower() == $search_text ||
                            Str::of(decrypt($record->Ors_PartNumber))->lower() == $search_text

                        ) {
                            return $record;
                        }
                    });

                foreach ($post_data as $key => $value) {
                    $sub_data['id'] = $value->id;
                    $sub_data['Ors_FK_Orm'] = $value->Ors_FK_Orm;
                    $sub_data['Ors_ItemName'] = decrypt($value->Ors_ItemName);
                    $sub_data['Ors_PartNumber'] = decrypt($value->Ors_PartNumber);
                    $sub_data['Ors_Quantity'] = $value->Ors_Quantity;
                    $sub_data['Ors_Notes'] = $value->Ors_Notes;
                    $sub_data['Ors_UserName'] = $value->Ors_UserName;
                    $data[] = $sub_data;
                }


                $totalFilteredRecord = count($data);
            } else {
                $order_val = $columnCur_list[$request->input('order.0.column')];
                $post_data =  $post_data =  OrderSecondary::where('Ors_FK_Orm','=', $idordermain)->get();
                $post_data=$post_data
                    ->filter(function ($record) use ($search_text) {
                        $search_text = Str::of($search_text)->lower();
                        if (
                            Str::of(decrypt($record->Ors_ItemName))->lower() == $search_text ||
                            Str::of(decrypt($record->Ors_PartNumber))->lower() == $search_text
                        ) {
                            return $record;
                        }
                    })->offset(0)
                    ->limit($limit_val)
                    ->orderBy($order_val, $dir_val)
                    ->get();
                foreach ($post_data as $key => $value) {
                    $sub_data['id'] = $value->id;
                    $sub_data['Ors_FK_Orm'] = $value->Ors_FK_Orm;
                    $sub_data['Ors_ItemName'] = decrypt($value->Ors_ItemName);
                    $sub_data['Ors_PartNumber'] = decrypt($value->Ors_PartNumber);
                    $sub_data['Ors_Quantity'] = $value->Ors_Quantity;
                    $sub_data['Ors_Notes'] = $value->Ors_Notes;
                    $sub_data['Ors_UserName'] = $value->Ors_UserName;
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
        $OrderSecondary = new OrderSecondary([
            'Ors_FK_Orm' => $request->post('Ors_FK_Orm'),
            'Ors_ItemName' => encrypt($request->post('Ors_ItemName')),
            'Ors_PartNumber' => encrypt($request->post('Ors_PartNumber')),
            'Ors_Quantity' => $request->post('Ors_Quantity'),
            'Ors_Notes' => $request->post('Ors_Notes'),
            'Ors_UserName' => session('User'),


        ]);
        $OrderSecondary->save();

        return response()->json(['status' => 'Adding Data Successfully...']);
    }


    public function show(Request $request)
    {

        $id = $request->input('getid');
        $data = OrderSecondary::find($id);
        $data->Ors_ItemName = decrypt($data->Ors_ItemName);
        $data->Ors_PartNumber = decrypt($data->Ors_PartNumber);
        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {


        $id = $request->post('Ors_ID');
        $data = OrderSecondary::find($id);
        $data->Ors_FK_Orm = $request->post('Ors_FK_Orm');
        $data->Ors_ItemName = encrypt($request->post('Ors_ItemName'));
        $data->Ors_PartNumber = encrypt($request->post('Ors_PartNumber'));
        $data->Ors_Quantity = ($request->post('Ors_Quantity'));
        $data->Ors_Notes = ($request->post('Ors_Notes'));
        $data->Ors_UserName = $request->post('Ors_UserName');
        $data->update();

        return response()->json(['status' => 'Updating Data ... Successfully. ']);
    }


    public function destroy(Request $request)
    {
        $id = $request->input('getid');
        OrderSecondary::find($id)->delete();
        return response()->json([
            'status' => 'Deleting Successfully....'
        ]);
    }
    public function filldata()
    {

        $data = [

            'getItemName' => OrderSecondary::select('Ors_ItemName')->groupBy('Ors_ItemName')->get(),
            'getPartNumber' => OrderSecondary::select('Ors_PartNumber')->groupBy('Ors_partNumber')->get(),
            // 'IDordermain' => session('IDordermain'),

        ];
        return response()->json($data);
    }
}
