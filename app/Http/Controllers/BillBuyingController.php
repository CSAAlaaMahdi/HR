<?php

namespace App\Http\Controllers;

use App\Models\BillBuying;
use App\Models\Currency;
use App\Models\Stories;
use Illuminate\Http\Request;

class BillBuyingController extends Controller
{

    public function index()
    {
        if (session()->has('User')) {
            return view('bills.buying');
        }
    }


    public function create(Request $request)
    {
        $totalFilteredRecord = $totalDataRecord = $draw_val = "";
        $columnIT_list = array(
            0 => 'id',
            1 => 'BB_BillNumber',
            2 => 'BB_BillDate',
            3 => 'BB_Customer',
            4 => 'BB_Provider',
            5 => 'BB_StoreName',
            6 => 'BB_BillType'
        );

        $totalDataRecord = BillBuying::count();

        $totalFilteredRecord = $totalDataRecord;

        $limit_val = $request->input('length');
        $start_val = $request->input('start');
        $dir_val = $request->input('order.0.dir');

        if (empty($request->input('search.value'))) {
            if (empty($request->input('order.0.column'))) {
                $post_data = BillBuying::offset($start_val)
                    ->limit($limit_val)
                    ->get();
            } else {
                $order_val = $columnIT_list[$request->input('order.0.column')];
                $post_data = BillBuying::offset($start_val)
                    ->limit($limit_val)
                    ->orderBy($order_val, $dir_val)
                    ->get();
            }
        } else {
            $search_text = $request->input('search.value');
            if (empty($request->input('order.0.column'))) {
                $post_data =  BillBuying::where('BB_BillNumber', 'LIKE', "%{$search_text}%")
                    ->orWhere('BB_BillDate', 'LIKE', "%{$search_text}%")
                    ->orWhere('BB_Customer', 'LIKE', "%{$search_text}%")
                    ->orWhere('BB_Provider', 'LIKE', "%{$search_text}%")
                    ->orWhere('BB_StoreName', 'LIKE', "%{$search_text}%")
                    ->orWhere('BB_BillType', 'LIKE', "%{$search_text}%")
                    ->offset($start_val)
                    ->limit($limit_val)
                    ->get();

                $totalFilteredRecord = BillBuying::where('BB_BillNumber', 'LIKE', "%{$search_text}%")
                    ->orWhere('BB_BillDate', 'LIKE', "%{$search_text}%")
                    ->orWhere('BB_Customer', 'LIKE', "%{$search_text}%")
                    ->orWhere('BB_Provider', 'LIKE', "%{$search_text}%")
                    ->orWhere('BB_StoreName', 'LIKE', "%{$search_text}%")
                    ->orWhere('BB_BillType', 'LIKE', "%{$search_text}%")
                    ->count();
            } else {
                $order_val = $columnIT_list[$request->input('order.0.column')];
                $post_data =  BillBuying::where('BB_BillNumber', 'LIKE', "%{$search_text}%")
                    ->orWhere('BB_BillDate', 'LIKE', "%{$search_text}%")
                    ->orWhere('BB_Customer', 'LIKE', "%{$search_text}%")
                    ->orWhere('BB_Provider', 'LIKE', "%{$search_text}%")
                    ->orWhere('BB_StoreName', 'LIKE', "%{$search_text}%")
                    ->orWhere('BB_BillType', 'LIKE', "%{$search_text}%")
                    ->offset($start_val)
                    ->limit($limit_val)
                    ->orderBy($order_val, $dir_val)
                    ->get();

                $totalFilteredRecord = BillBuying::where('BB_BillNumber', 'LIKE', "%{$search_text}%")
                    ->orWhere('BB_BillDate', 'LIKE', "%{$search_text}%")
                    ->orWhere('BB_Customer', 'LIKE', "%{$search_text}%")
                    ->orWhere('BB_Provider', 'LIKE', "%{$search_text}%")
                    ->orWhere('BB_StoreName', 'LIKE', "%{$search_text}%")
                    ->orWhere('BB_BillType', 'LIKE', "%{$search_text}%")
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
        $BillBuying = new BillBuying([
            'BB_BillNumber' => $request->post('BB_BillNumber'),
            'BB_BillDate' => $request->post('BB_BillDate'),
            'BB_Customer' => $request->post('BB_Customer'),
            'BB_Provider' => $request->post('BB_Provider'),
            'BB_BillType' => $request->post('BB_BillType'),
            'BB_Currency' => $request->post('BB_Currency'),
            'BB_CurrencyCost' => $request->post('BB_CurrencyCost'),
            'BB_Credit' => $request->post('BB_Credit'),
            'BB_Debt' => $request->post('BB_Debt'),
            'BB_TotalMoney' => $request->post('BB_TotalMoney'),
            'BB_StoreName' => $request->post('BB_StoreName'),
            'BB_Notes' => $request->post('BB_Notes'),
            'BB_State' => $request->post('BB_State'),
            'BB_UserName' => session('User'),

        ]);
        $BillBuying->save();

        return response()->json(['status' => 'Adding Data Successfully..']);
    }


    public function show(Request $request)
    {
        // $query= BillBuying::with(['billBuyingItems','billBuyingItems.Itemstwo'])->where('id',$request->input('getid'))->get();
        $id = $request->input('getid');
        $data = BillBuying::find($id);
        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        $id = $request->post('BB_ID');
        $data = BillBuying::find($id);
        $data->BB_BillNumber = $request->post('BB_BillNumber');
        $data->BB_BillDate = $request->post('BB_BillDate');
        $data->BB_Customer = $request->post('BB_Customer');
        $data->BB_Provider = $request->post('BB_Provider');
        $data->BB_BillType = $request->post('BB_BillType');
        $data->BB_Currency = $request->post('BB_Currency');
        $data->BB_CurrencyCost = $request->post('BB_CurrencyCost');
        $data->BB_Credit = $request->post('BB_Credit');
        $data->BB_Debt = $request->post('BB_Debt');
        $data->BB_TotalMoney = $request->post('BB_TotalMoney');
        $data->BB_StoreName = $request->post('BB_StoreName');
        $data->BB_Notes = $request->post('BB_Notes');
        $data->BB_State = $request->post('BB_State');
        $data->BB_UserName = session('User');
        $data->update();

        return response()->json(['status' => ' Updating Successfully...']);
    }


    public function destroy(Request $request)
    {
        $id = $request->post('getid');
        BillBuying::find($id)->delete();
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
        $billNumber = BillBuying::latest()->first();
        $data = [
            'billNumber' => $billNumber,
        ];
        return response()->json($data);
    }
}
