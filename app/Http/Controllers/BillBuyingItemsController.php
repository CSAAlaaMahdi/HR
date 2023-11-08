<?php

namespace App\Http\Controllers;

use App\Models\BillBuying;
use App\Models\BillBuyingItems;
use App\Models\Currency;
use App\Models\ItemsThree;
use App\Models\Itemstwo;
use App\Models\Unitname;
use Illuminate\Http\Request;

class BillBuyingItemsController extends Controller
{

    public function index()
    {
        // if (session()->has('User')) {
        //     return view('bills.buying');
        // }
    }


    public function create(Request $request)
    {
        $totalFilteredRecord = $totalDataRecord = $draw_val = "";
        $columnIT_list = array(
            0 => 'id',
            1 => 'BI_ItemName',
            2 => 'BI_PartNumber',
        );
        $id = $request->input('BB_ID');
        $totalDataRecord = BillBuyingItems::where('BI_FK_BB', $id)->count();

        $totalFilteredRecord = $totalDataRecord;

        $limit_val = $request->input('length');
        $start_val = $request->input('start');
        $dir_val = $request->input('order.0.dir');

        if (empty($request->input('search.value'))) {
            if (empty($request->input('order.0.column'))) {
                $post_data = BillBuyingItems::where('BI_FK_BB', $id)->offset($start_val)
                    ->limit($limit_val)
                    ->get();
            } else {
                $order_val = $columnIT_list[$request->input('order.0.column')];
                $post_data = BillBuyingItems::where('BI_FK_BB', $id)->offset($start_val)
                    ->limit($limit_val)
                    ->orderBy($order_val, $dir_val)
                    ->get();
            }
        } else {
            $search_text = $request->input('search.value');
            if (empty($request->input('order.0.column'))) {
                $post_data =  BillBuyingItems::where('BI_FK_BB', $id)
                    ->where('BI_ItemName', 'LIKE', "%{$search_text}%")
                    ->orWhere('BI_PartNumber', 'LIKE', "%{$search_text}%")
                    ->where('BI_FK_BB', $id)
                    ->offset($start_val)
                    ->limit($limit_val)
                    ->get();

                $totalFilteredRecord = BillBuyingItems::where('BI_FK_BB', $id)
                    ->where('BI_ItemName', 'LIKE', "%{$search_text}%")
                    ->orWhere('BI_PartNumber', 'LIKE', "%{$search_text}%")
                    ->where('BI_FK_BB', $id)
                    ->count();
            } else {
                $order_val = $columnIT_list[$request->input('order.0.column')];
                $post_data =  BillBuyingItems::where('BI_FK_BB', $id)
                    ->where('BI_ItemName', 'LIKE', "%{$search_text}%")
                    ->orWhere('BI_PartNumber', 'LIKE', "%{$search_text}%")
                    ->where('BI_FK_BB', $id)
                    ->offset($start_val)
                    ->limit($limit_val)
                    ->orderBy($order_val, $dir_val)
                    ->get();

                $totalFilteredRecord = BillBuyingItems::where('BI_FK_BB', $id)
                    ->where('BI_ItemName', 'LIKE', "%{$search_text}%")
                    ->orWhere('BI_PartNumber', 'LIKE', "%{$search_text}%")
                    ->where('BI_FK_BB', $id)
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
        $BillBuyingItems = new BillBuyingItems([
            'BI_FK_BB' => $request->post('BI_FK_BB'),
            'BI_ItemName' => $request->post('BI_ItemName'),
            'BI_PartNumber' => $request->post('BI_PartNumber'),
            'BI_Count' => $request->post('BI_Count'),
            'BI_CountType' => $request->post('BI_CountType'),
            'BI_UnitPrice' => $request->post('BI_UnitPrice'),
            'BI_TotalMoney' => $request->post('BI_TotalMoney'),
            'BI_Currency' => $request->post('BI_Currency'),
            'BI_UnitPriceC' => $request->post('BI_UnitPriceC'),
            'BI_TotalMoneyC' => $request->post('BI_TotalMoneyC'),
            'BI_UserName' => session('User'),

        ]);

        $partnumber = $request->post('BI_PartNumber');
        $storeName = $request->post('BB_StoreName');
        $count = $request->post('BI_Count');
        $countType = $request->post('BI_CountType');
        $itemstwo = Itemstwo::with('itemsthrees')->where('IT_PartNumber', $partnumber)->get();

        if (count($itemstwo) != null || count($itemstwo) != 0) {
            if (count($itemstwo[0]->itemsthrees) != null || count($itemstwo[0]->itemsthrees) != '') {
                $flag1 = false;
                $storeid = '';
                foreach ($itemstwo[0]->itemsthrees as $key => $value) {
                    if ($value->IT2_StoreName == $storeName) {
                        $flag1 = true;
                        $storeid = $value->id;
                    }
                }
                if ($flag1) {
                    $newdata = ItemsThree::find($storeid);
                    $newdata->IT2_Count +=  $count;
                    $newdata->update();
                    $BillBuyingItems->save();
                    $this->sumItems($request->post('BI_FK_BB'));
                    return response()->json(['status' => 'Adding Data Successfully.. The Store Updated']);
                } else {
                    $newdata = new ItemsThree([
                        'IT2_FK_IT' => $itemstwo[0]->id,
                        'IT2_Count' => $count,
                        'IT2_Count_Kind' => $countType,
                        'IT2_State' => 1,
                        'IT2_StoreName' => $storeName,
                        'IT2_UserName' => session('User'),

                    ]);
                    $newdata->save();
                    $BillBuyingItems->save();
                    $this->sumItems($request->post('BI_FK_BB'));
                    return response()->json(['status' => 'Adding Data Successfully.. The Store Updated']);
                }
            } else {
                $newdata = new ItemsThree([
                    'IT2_FK_IT' => $itemstwo[0]->id,
                    'IT2_Count' => $count,
                    'IT2_Count_Kind' => $countType,
                    'IT2_State' => 1,
                    'IT2_StoreName' => $storeName,
                    'IT2_UserName' => session('User'),
                ]);
                $newdata->save();
                $BillBuyingItems->save();
                $this->sumItems($request->post('BI_FK_BB'));
                return response()->json(['status' => 'Adding Data Successfully.. The Store Updated']);
            }
        } else {
            return response()->json(['status' => 'This Part Number Does not Exist in the Store ....']);
        }
    }


    public function show(Request $request)
    {
        $id = $request->input('getid');
        $data = BillBuyingItems::find($id);
        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        // $id = $request->post('BI_ID');
        // $data = BillBuyingItems::find($id);
        // $data->BI_FK_BB = $request->post('BI_FK_BB');
        // $data->BI_ItemName = $request->post('BI_ItemName');
        // $data->BI_PartNumber = $request->post('BI_PartNumber');
        // $data->BI_Count = $request->post('BI_Count');
        // $data->BI_CountType = $request->post('BI_CountType');
        // $data->BI_UnitPrice = $request->post('BI_UnitPrice');
        // $data->BI_TotalMoney = $request->post('BI_TotalMoney');
        // $data->BI_Currency = $request->post('BI_Currency');
        // $data->BI_UnitPriceC = $request->post('BI_UnitPriceC');
        // $data->BI_TotalMoneyC = $request->post('BI_TotalMoneyC');
        // $data->BI_UserName = session('User');
        // $data->update();




        // return response()->json(['status' => ' Updating Successfully...']);
    }


    public function destroy(Request $request)
    {
        $id = $request->post('ID');
        $partnumber = $request->post('PartNumber');
        $storename = $request->post('StoreName');
        $count = $request->post('Count');
        $billnumber = $request->post('BillNumber');
        if (BillBuyingItems::find($id)) {
            $getItem = Itemstwo::with('itemsthrees')->where('IT_PartNumber', $partnumber)->get();
            if (count($getItem[0]->itemsthrees) != null || count($getItem[0]->itemsthrees) != '') {
                $flag1 = false;
                $storeid = '';
                foreach ($getItem[0]->itemsthrees as $key => $value) {
                    if ($value->IT2_StoreName == $storename && $value->IT2_Count >= $count) {
                        $flag1 = true;
                        $storeid = $value->id;
                    }
                }
                if ($flag1) {
                    $newdata = ItemsThree::find($storeid);
                    $newdata->IT2_Count -=  $count;
                    $newdata->update();
                    BillBuyingItems::find($id)->delete();
                    $this->sumItems($request->post('BillNumber'));
                    return response()->json(['status' => 'Deleting Successfully... The Store Updated']);
                } else {
                    return response()->json(['status' => 'ERROR: THERE IS NO DATA TO DELETE FROM THE STORE...']);
                }
            } else {
                return response()->json(['status' => 'ERROR: THERE IS NO DATA TO DELETE FROM THE STORE...']);
            }
        }

        return response()->json(['status' => 'Deleting Successfully...']);
    }

    public function filldata()
    {

        $data = [
            'getItemName' => Itemstwo::select('IT_Name')->where('IT_Tree', NULL)->groupBy('IT_Name')->get(),
            'getPartNumber' => Itemstwo::select('IT_PartNumber')->where('IT_Tree', NULL)->groupBy('IT_PartNumber')->get(),
            'getCurrency' => Currency::select('Cur_Name')->groupBy('Cur_Name')->get(),
            'getUnits' => Unitname::select('Ui_Name')->groupBy('Ui_Name')->get(),
        ];
        return response()->json($data);
    }

    public function checkItemIfExist(Request $request)
    {
        $getPartNumber = $request->input('getPartNumber');
        $data = [
            'getPartNumber' => Itemstwo::where('IT_PartNumber', $getPartNumber)->get(),

        ];

        return response()->json($data);
    }

    // Addition the Summation of Items Prices to the Main Bill (TotalMoney)
    public function sumItems($billid)
    {

        $itemsBill = BillBuying::with('billBuyingItems')->find($billid);
        $itemsBill->BB_TotalMoney = $itemsBill->billBuyingItems->sum('BI_TotalMoneyC');
        $itemsBill->update();


    }
}
