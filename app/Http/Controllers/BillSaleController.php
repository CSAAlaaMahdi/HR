<?php

namespace App\Http\Controllers;

use App\Models\BillSale;
use App\Models\Currency;
use App\Models\Stories;
use Illuminate\Http\Request;

class BillSaleController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('bills.saling');
        }
    }


    public function create(Request $request)
    {
        $totalFilteredRecord = $totalDataRecord = $draw_val = "";
        $columnIT_list = array(
            0 => 'id',
            1 => 'BS_BillNumber',
            2 => 'BS_BillDate',
            3 => 'BS_Customer',
            4 => 'BS_Provider',
            5 => 'BS_StoreName',
            6 => 'BS_BillType'
        );

        $totalDataRecord = BillSale::count();

        $totalFilteredRecord = $totalDataRecord;

        $limit_val = $request->input('length');
        $start_val = $request->input('start');
        $dir_val = $request->input('order.0.dir');

        if (empty($request->input('search.value'))) {
            if (empty($request->input('order.0.column'))) {
                $post_data = BillSale::offset($start_val)
                    ->limit($limit_val)
                    ->get();
            } else {
                $order_val = $columnIT_list[$request->input('order.0.column')];
                $post_data = BillSale::offset($start_val)
                    ->limit($limit_val)
                    ->orderBy($order_val, $dir_val)
                    ->get();
            }
        } else {
            $search_text = $request->input('search.value');
            if (empty($request->input('order.0.column'))) {
                $post_data =  BillSale::where('BS_BillNumber', 'LIKE', "%{$search_text}%")
                    ->orWhere('BS_BillDate', 'LIKE', "%{$search_text}%")
                    ->orWhere('BS_Customer', 'LIKE', "%{$search_text}%")
                    ->orWhere('BS_Provider', 'LIKE', "%{$search_text}%")
                    ->orWhere('BS_StoreName', 'LIKE', "%{$search_text}%")
                    ->orWhere('BS_BillType', 'LIKE', "%{$search_text}%")
                    ->offset($start_val)
                    ->limit($limit_val)
                    ->get();

                $totalFilteredRecord = BillSale::where('BS_BillNumber', 'LIKE', "%{$search_text}%")
                    ->orWhere('BS_BillDate', 'LIKE', "%{$search_text}%")
                    ->orWhere('BS_Customer', 'LIKE', "%{$search_text}%")
                    ->orWhere('BS_Provider', 'LIKE', "%{$search_text}%")
                    ->orWhere('BS_StoreName', 'LIKE', "%{$search_text}%")
                    ->orWhere('BS_BillType', 'LIKE', "%{$search_text}%")
                    ->count();
            } else {
                $order_val = $columnIT_list[$request->input('order.0.column')];
                $post_data =  BillSale::where('BS_BillNumber', 'LIKE', "%{$search_text}%")
                    ->orWhere('BS_BillDate', 'LIKE', "%{$search_text}%")
                    ->orWhere('BS_Customer', 'LIKE', "%{$search_text}%")
                    ->orWhere('BS_Provider', 'LIKE', "%{$search_text}%")
                    ->orWhere('BS_StoreName', 'LIKE', "%{$search_text}%")
                    ->orWhere('BS_BillType', 'LIKE', "%{$search_text}%")
                    ->offset($start_val)
                    ->limit($limit_val)
                    ->orderBy($order_val, $dir_val)
                    ->get();

                $totalFilteredRecord = BillSale::where('BS_BillNumber', 'LIKE', "%{$search_text}%")
                    ->orWhere('BS_BillDate', 'LIKE', "%{$search_text}%")
                    ->orWhere('BS_Customer', 'LIKE', "%{$search_text}%")
                    ->orWhere('BS_Provider', 'LIKE', "%{$search_text}%")
                    ->orWhere('BS_StoreName', 'LIKE', "%{$search_text}%")
                    ->orWhere('BS_BillType', 'LIKE', "%{$search_text}%")
                    ->count();
            }
        }

        $draw_val = $request->input('draw');
        $get_json_data = array(
            "draw"            => intval($draw_val),
            "recordsTotal"    => intval($totalDataRecord),
            "recordsFiltered" => intval($totalFilteredRecord),
            "data"            => $post_data
        );
        return response()->json($get_json_data);
    }


    public function store(Request $request)
    {
        $BillSale = new BillSale([
            'BS_BillNumber' => $request->post('BS_BillNumber'),
            'BS_BillDate' => $request->post('BS_BillDate'),
            'BS_Customer' => $request->post('BS_Customer'),
            'BS_Provider' => $request->post('BS_Provider'),
            'BS_BillType' => $request->post('BS_BillType'),
            'BS_Currency' => $request->post('BS_Currency'),
            'BS_CurrencyCost' => $request->post('BS_CurrencyCost'),
            'BS_Credit' => $request->post('BS_Credit'),
            'BS_Debt' => $request->post('BS_Debt'),
            'BS_TotalMoney' => $request->post('BS_TotalMoney'),
            'BS_StoreName' => $request->post('BS_StoreName'),
            'BS_Notes' => $request->post('BS_Notes'),
            'BS_State' => $request->post('BS_State'),
            'BS_UserName' => session('User'),

        ]);
        $BillSale->save();

        return response()->json(['status' => 'Adding Data Successfully..']);
    }


    public function show(Request $request)
    {
        $id = $request->input('getid');
        $data = BillSale::find($id);
        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        $id = $request->post('BS_ID');
        $data = BillSale::find($id);
        $data->BS_BillNumber = $request->post('BS_BillNumber');
        $data->BS_BillDate = $request->post('BS_BillDate');
        $data->BS_Customer = $request->post('BS_Customer');
        $data->BS_Provider = $request->post('BS_Provider');
        $data->BS_BillType = $request->post('BS_BillType');
        $data->BS_Currency = $request->post('BS_Currency');
        $data->BS_CurrencyCost = $request->post('BS_CurrencyCost');
        $data->BS_Credit = $request->post('BS_Credit');
        $data->BS_Debt = $request->post('BS_Debt');
        $data->BS_TotalMoney = $request->post('BS_TotalMoney');
        $data->BS_StoreName = $request->post('BS_StoreName');
        $data->BS_Notes = $request->post('BS_Notes');
        $data->BS_State = $request->post('BS_State');
        $data->BS_UserName = session('User');
        $data->update();

        return response()->json(['status' => ' Updating Successfully...']);
    }


    public function destroy(Request $request)
    {
        $id = $request->post('getid');
        BillSale::find($id)->delete();
        return response()->json(['status' => 'Deleting Successfully...']);
    }

    public function filldata()
    {

        $data = [
            'getStories' => Stories::select('St_Name', 'St_Code')->groupBy('St_Name', 'St_Code')->get(),
            'getCurrencyType' => Currency::select('Cur_Name')->groupBy('Cur_Name')->get(),
        ];
        return response()->json($data);
    }

    public function getBillNumber()
    {
        $billNumber = BillSale::latest()->first();
        $data = [
            'billNumber' => $billNumber,
        ];
        return response()->json($data);
    }
}
