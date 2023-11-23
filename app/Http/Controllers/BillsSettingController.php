<?php

namespace App\Http\Controllers;

use App\Models\AccountTree;
use App\Models\BillSetting;
use App\Models\BillsType;
use App\Models\Currency;
use App\Models\Stories;
use App\Models\Unitname;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;


class BillsSettingController extends Controller
{

    public function index(Request $request)
    {
        if (session()->has('User')) {
            return view('bills.billSetting');
        }
    }


    public function create(Request $request)
    {

    }


    public function store(Request $request)
    {

    }


    public function show(Request $request)
    {
        $BillSettingID = $request->input('BillSettingID');
        $BillSetting = BillSetting::find($BillSettingID);


        $data = [
            'getBillSetting' => $BillSetting,

        ];

        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
        $SettingID = $request->post('SettingID');
        $data = BillSetting::find($SettingID);
        $data->st_Guid = $request->post('st_Guid');
        $data->Bill_Type_FK = $request->post('Bill_Type_FK');
        $data->FormText = $request->post('FormText');
        $data->No_Copy_Print = $request->post('No_Copy_Print');
        $data->Print_Count = $request->post('Print_Count');
        $data->Acc_Guid = $request->post('Acc_Guid');
        $data->Acc_Contra_Guid = $request->post('Acc_Contra_Account');
        $data->Cust_Acc_Guid = $request->post('Cust_Acc_Guid');
        $data->Store_Guid = $request->post('Store_Guid');
        $data->Discount_Guid = $request->post('Discount_Guid');
        $data->Currency_Guid = $request->post('Currency_Guid');
        $data->Unit_Type = $request->post('Unit_Type');
        $data->Pay_Type = $request->post('Pay_Type');
        $data->IsCombine = $request->post('IsCombine');
        $data->Qty_MustGreaterThanZero = $request->post('Qty_MustGreaterThanZero');
        $data->Qty_MustGreaterThanZeroInStore = $request->post('Qty_MustGreaterThanZeroInStore');
        $data->Save_And_New = $request->post('Save_And_New');
        $data->CostPriceAffectedByDissAdd = $request->post('CostPriceAffectedByDissAdd');
        $data->CloseBillAfterPayment = $request->post('CloseBillAfterPayment');
        $data->Acc_Visible = $request->post('Acc_Visible');
        $data->Cust_Acc_Visible = $request->post('Cust_Acc_Visible');
        $data->Acc_Contra_Visible = $request->post('Acc_Contra_Visible');
        $data->Store_Visible = $request->post('Store_Visible');
        $data->Discount_Visible = $request->post('Discount_Visible');
        $data->Currency_Visible = $request->post('Currency_Visible');
        $data->Item_Ch_Highx = $request->post('Item_Ch_Highx');
        $data->Item_Ch_Lowx = $request->post('Item_Ch_Lowx');
        $data->Item_Ch_Zero = $request->post('Item_Ch_Zero');
        $data->Item_Ch_OrderLimitx = $request->post('Item_Ch_OrderLimitx');
        $data->Cost_Visible = $request->post('Cost_Visible');
        $data->Save_And_Print = $request->post('Save_And_Print');
        $data->Show_Before_Print = $request->post('Show_Before_Print');
        $data->Item_Barcode = $request->post('Item_Barcode');
        $data->Item_Code = $request->post('Item_Code');
        $data->Item_Count = $request->post('Item_Count');
        $data->Item_Name = $request->post('Item_Name');
        $data->Item_Qty1 = $request->post('Item_Qty1');
        $data->Item_Qty2 = $request->post('Item_Qty2');
        $data->Item_Qty3 = $request->post('Item_Qty3');
        $data->Item_Price = $request->post('Item_Price');
        $data->Item_Price_Total = $request->post('Item_Price_Total');
        $data->Item_Price_Net = $request->post('Item_Price_Net');
        $data->Item_Discount = $request->post('Item_Discount');
        $data->Item_Extra = $request->post('Item_Extra');
        $data->Item_Notes_Show = $request->post('Item_Notes_Show');
        $data->Item_Length = $request->post('Item_Length');
        $data->Item_width = $request->post('Item_Width');
        $data->Item_Count = $request->post('Item_Count');
        $data->Item_Image = $request->post('Item_Image');
        $data->ProductionDate = $request->post('ProductionDate');
        $data->ExpireDateAlert = $request->post('ExpireDateAlert');
        $data->Branch_Guid = $request->post('Branch_Guid');
        $data->PercentagePrice = $request->post('PercentagePrice');
        $data->DiscountAmount = $request->post('Dis_Amount');
        $data->DiscountPercent = $request->post('Dis_Amount_Percent');
        $data->DiscountPercentAffect = $request->post('Dis_Percent_Affect');
        $data->AddAmount = $request->post('Add_Amount');
        $data->AddAmountPercent = $request->post('Add_Amount_Percent');
        $data->AddPercentAffect = $request->post('Add_Percent_Affect');
        $data->Header_Cash_Visible = $request->post('Header_Cash_Visible');
        $data->Header_Notes_Visible = $request->post('Header_Notes_Visible');
        $data->Footer_BillTotal = $request->post('Footer_BillTotal');
        $data->Footer_ItemDiscount = $request->post('Footer_ItemDiscount');
        $data->Footer_BillDiscount = $request->post('Footer_BillDiscount');
        $data->Footer_BillAdd = $request->post('Footer_BillAdd');
        $data->Footer_ItemAdd = $request->post('Footer_ItemAdd');
        $data->Footer_TotalAdd = $request->post('Footer_TotalAdd');
        $data->Footer_TotalDiscount = $request->post('Footer_TotalDiscount');
        $data->DisAddGrid_Visible = $request->post('DisAddGrid_Visible');
        $data->BodyGrid_Visible = $request->post('BodyGrid_Visible');
        $data->AffectOfStore = $request->post('AffectOfStore');
        $data->Profits = $request->post('Profits');

        $data->update();

        return response()->json(['status' => 'تم تحديث اعدادات الفاتورة']);
    }


    public function destroy(Request $request)
    {
        // $guid = $request->post('Guid');
        // if (BillBody::find($guid)) {
        //     $itemthreeGuid = ItemsThree::where('IT2_BillGuid', $guid)->first()->id;
        //     $itemGuid = ItemsThree::where('IT2_BillGuid', $guid)->first()->IT2_FK_IT;
        //     BillBody::find($guid)->delete();
        //     ItemsThree::find($itemthreeGuid)->delete();
        //     $this->updateItemCount($itemGuid);

        //     return response()->json(['status' => 'Deleting Successfully...']);
        // } else if (BillDiscount::find($guid)) {
        //     BillDiscount::find($guid)->delete();
        //     return response()->json(['status' => 'Deleting Successfully...']);
        // }
    }

    public function filldata(Request $request)
    {
       $data=[
        'getAccounts' => AccountTree::orderBy('Ac_RowID')-> get(),
        'getCurrency' =>Currency::all(),
        'getStores' => Stories::all(),
        'BillsType'=>BillsType::all(),
        'getBillType' =>BillSetting::all(),
        'getUnit' =>Unitname::all(),
       ];
       return response()->json($data);
    }


}
