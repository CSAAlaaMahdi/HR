<?php

namespace App\Http\Controllers;

use App\Models\BillSale;
use App\Models\BillSaleItems;
use App\Models\ItemsThree;
use App\Models\Itemstwo;
use App\Models\Unitname;
use Illuminate\Http\Request;

class BillSaleItemsController extends Controller
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
            1 => 'BSI_ItemName',
            2 => 'BSI_C_PartNumber',
        );
        $id = $request->input('BS_ID');
        $totalDataRecord = BillSaleItems::where('BSI_FK_BS', $id)->count();

        $totalFilteredRecord = $totalDataRecord;

        $limit_val = $request->input('length');
        $start_val = $request->input('start');
        $dir_val = $request->input('order.0.dir');

        if (empty($request->input('search.value'))) {
            if (empty($request->input('order.0.column'))) {
                $post_data = BillSaleItems::where('BSI_FK_BS', $id)->offset($start_val)
                    ->limit($limit_val)
                    ->get();
            } else {
                $order_val = $columnIT_list[$request->input('order.0.column')];
                $post_data = BillSaleItems::where('BSI_FK_BS', $id)->offset($start_val)
                    ->limit($limit_val)
                    ->orderBy($order_val, $dir_val)
                    ->get();
            }
        } else {
            $search_text = $request->input('search.value');
            if (empty($request->input('order.0.column'))) {
                $post_data =  BillSaleItems::where('BSI_FK_BS', $id)
                    ->where('BSI_ItemName', 'LIKE', "%{$search_text}%")
                    ->orWhere('BSI_C_PartNumber', 'LIKE', "%{$search_text}%")
                    ->where('BSI_FK_BS', $id)
                    ->offset($start_val)
                    ->limit($limit_val)
                    ->get();

                $totalFilteredRecord = BillSaleItems::where('BSI_FK_BS', $id)
                    ->where('BSI_ItemName', 'LIKE', "%{$search_text}%")
                    ->orWhere('BSI_C_PartNumber', 'LIKE', "%{$search_text}%")
                    ->where('BSI_FK_BS', $id)
                    ->count();
            } else {
                $order_val = $columnIT_list[$request->input('order.0.column')];
                $post_data =  BillSaleItems::where('BSI_FK_BS', $id)
                    ->where('BSI_ItemName', 'LIKE', "%{$search_text}%")
                    ->orWhere('BSI_C_PartNumber', 'LIKE', "%{$search_text}%")
                    ->where('BSI_FK_BS', $id)
                    ->offset($start_val)
                    ->limit($limit_val)
                    ->orderBy($order_val, $dir_val)
                    ->get();

                $totalFilteredRecord = BillSaleItems::where('BSI_FK_BS', $id)
                    ->where('BSI_ItemName', 'LIKE', "%{$search_text}%")
                    ->orWhere('BSI_C_PartNumber', 'LIKE', "%{$search_text}%")
                    ->where('BSI_FK_BS', $id)
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
        $BillSaleItems = new BillSaleItems([
            'BSI_FK_BS' => $request->post('BSI_FK_BS'),
            'BSI_ItemName' => $request->post('BSI_ItemName'),
            'BSI_C_PartNumber' => $request->post('BSI_C_PartNumber'),
            'BSI_Count' => $request->post('BSI_Count'),
            'BSI_CountType' => $request->post('BSI_CountType'),
            'BSI_UnitPrice' => $request->post('BSI_UnitPrice'),
            'BSI_TotalMoney' => $request->post('BSI_TotalMoney'),
            'BSI_UserName' => session('User'),

        ]);

        $partnumber = $request->post('BSI_C_PartNumber');
        $storeName = $request->post('BS_StoreName');
        $count = $request->post('BSI_Count');
        $countType = $request->post('BSI_CountType');
        $itemstwo = Itemstwo::with('itemsthrees')->where('IT_C_PartNumber', $partnumber)->get();

        if (count($itemstwo) != null || count($itemstwo) != 0) {
            if (count($itemstwo[0]->itemsthrees) != null || count($itemstwo[0]->itemsthrees) != '') {
                $flag1 = false;
                $storeid = '';
                foreach ($itemstwo[0]->itemsthrees as $key => $value) {
                    if ($value->IT2_StoreName == $storeName) {
                        if ($value->IT2_Count >= $count) {
                            $flag1 = true;
                            $storeid = $value->id;
                        }else{
                            return response()->json(['status' => 'Error :: Item in the Store Not enough']);
                        }
                    }
                }
                if ($flag1) {
                    $newdata = ItemsThree::find($storeid);
                    $newdata->IT2_Count -=  $count;
                    $newdata->update();
                    $BillSaleItems->save();
                    $this->sumItems($request->post('BSI_FK_BS'));
                    return response()->json(['status' => 'Adding Data Successfully.. The Store Updated']);
                } else {
                    // $newdata = new ItemsThree([
                    //     'IT2_FK_IT' => $itemstwo[0]->id,
                    //     'IT2_Count' => $count,
                    //     'IT2_Count_Kind' => $countType,
                    //     'IT2_State' => 1,
                    //     'IT2_StoreName' => $storeName,
                    //     'IT2_UserName' => session('User'),

                    // ]);
                    // $newdata->save();
                    // $BillSaleItems->save();
                    // $this->sumItems($request->post('BSI_FK_BS'));
                    return response()->json(['status' => 'Error :: This Item Not Exist...']);
                }
            } else {
                // $newdata = new ItemsThree([
                //     'IT2_FK_IT' => $itemstwo[0]->id,
                //     'IT2_Count' => $count,
                //     'IT2_Count_Kind' => $countType,
                //     'IT2_State' => 1,
                //     'IT2_StoreName' => $storeName,
                //     'IT2_UserName' => session('User'),
                // ]);
                // $newdata->save();
                // $BillSaleItems->save();
                // $this->sumItems($request->post('BSI_FK_BS'));
                return response()->json(['status' => 'Error :: This Item Not Exist...']);
            }
        } else {
            return response()->json(['status' => 'This Part Number Does not Exist in the Store ....']);
        }
    }


    public function show(Request $request)
    {
        $id = $request->input('getid');
        $data = BillSaleItems::find($id);
        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        // $id = $request->post('BSI_ID');
        // $data = BillSaleItems::find($id);
        // $data->BSI_FK_BS = $request->post('BSI_FK_BS');
        // $data->BSI_ItemName = $request->post('BSI_ItemName');
        // $data->BSI_C_PartNumber = $request->post('BSI_C_PartNumber');
        // $data->BSI_Count = $request->post('BSI_Count');
        // $data->BSI_CountType = $request->post('BSI_CountType');
        // $data->BSI_UnitPrice = $request->post('BSI_UnitPrice');
        // $data->BSI_TotalMoney = $request->post('BSI_TotalMoney');
        // $data->BSI_Currency = $request->post('BSI_Currency');
        // $data->BSI_UnitPriceC = $request->post('BSI_UnitPriceC');
        // $data->BSI_TotalMoneyC = $request->post('BSI_TotalMoneyC');
        // $data->BSI_UserName = session('User');
        // $data->update();




        // return response()->json(['status' => ' Updating Successfully...']);
    }


    public function destroy(Request $request)
    {
        $id = $request->post('ID');
        $billnumber = $request->post('BillNumber');
        $partnumber = $request->post('PartNumber');
        $storename = $request->post('StoreName');
        $count = $request->post('Count');
        if (BillSaleItems::find($id)) {
            $getItem = Itemstwo::with('itemsthrees')->where('IT_C_PartNumber', $partnumber)->get();
            if (count($getItem[0]->itemsthrees) != null || count($getItem[0]->itemsthrees) != '') {
                $flag1 = false;
                $storeid = '';
                foreach ($getItem[0]->itemsthrees as $key => $value) {
                    if ($value->IT2_StoreName == $storename) {
                        $flag1 = true;
                        $storeid = $value->id;
                    }
                }
                if ($flag1) {
                    $newdata = ItemsThree::find($storeid);
                    $newdata->IT2_Count +=  $count;
                    $newdata->update();
                    BillSaleItems::find($id)->delete();
                    $this->sumItems($billnumber);

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
            'getPartNumber' => Itemstwo::select('IT_C_PartNumber')->where('IT_Tree', NULL)->groupBy('IT_C_PartNumber')->get(),
            'getUnits' => Unitname::select('Ui_Name')->groupBy('Ui_Name')->get(),
        ];
        return response()->json($data);
    }

    public function checkItemIfExist(Request $request)
    {
        $getPartNumber = $request->input('getPartNumber');
        $storeName = $request->input('storeName');
        $partinfo = Itemstwo::with(['itemsthrees' => function ($query) use ($storeName) {
            $query->where('IT2_StoreName', $storeName);
        }])->where('IT_C_PartNumber', $getPartNumber)->get();
        // $prices=array();
        $prices[]= "IT_Prices";
        $prices['IT_Prices'][0]=$partinfo[0]->IT_PL01;
        $prices['IT_Prices'][1]=$partinfo[0]->IT_PL02;
        $prices['IT_Prices'][2]=$partinfo[0]->IT_PL03;
        $prices['IT_Prices'][3]=$partinfo[0]->IT_PL04;
        $prices['IT_Prices'][4]=$partinfo[0]->IT_PL05;
        $prices['IT_Prices'][5]=$partinfo[0]->IT_PL06;
        $data = [
            'getPartNumber' => $partinfo,
            'prices' =>$prices

        ];

        return response()->json($data);
    }

    // Addition the Summation of Items Prices to the Main Bill (TotalMoney)
    public function sumItems($billid)
    {

        $itemsBill = BillSale::with('billSaleItems')->find($billid);
        $itemsBill->BS_TotalMoney = $itemsBill->billSaleItems->sum('BSI_TotalMoney');
        $itemsBill->update();
    }
}
