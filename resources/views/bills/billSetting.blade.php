@extends('admin.layout.main')
{{-- @section('title', 'Buying BillsSetting') --}}
@section('content')
    {{--
<style>
    /* Custom CSS to change header background color */
    .custom-header {
      background-color: #3498db; /* Set your desired color here */
      color: white; /*Set text color to make it readable */
    }
  </style> --}}
    <div class="col-md-12 ">
        <div class="card BillsSettingaction" id="BillsSettingaction">
            <div class="card-header" style="background-color: #283741">
                <div id="btnNewAdd" style="float: left"></div>
                <div id="btnSave" style="float: left;margin-left: 15px"></div>
                <h4 style="color: white;float: right;margin-right: 50%" id="card_BillsSettingtitle"
                    class="card_BillsSettingtitle">
                    Bill Setting</h4>


            </div>
            <div id="notificationContainer"></div>
            <div class="card-body">
                <div class="row">

                    @csrf
                    <div class="col-md-12 row flex">
                        <div class="dx-fieldset" id="Header-Search">
                            <div class="dx-field">
                                <div class="dx-field-label">Searech</div>
                                <div class="dx-field-value">
                                    <div id="GetBill"></div>
                                </div>
                                <span id="error_GetBill" class="text-danger"></span>
                            </div>
                        </div>
                        <ul class="nav nav-tabsBills">
                            <li class="nav-item"><a href="#VisibleTab" class="nav-link active" data-bs-toggle="tab">Visible
                                </a>
                            </li>
                            <li class="nav-item" ><a href="#DefualtValue" class="nav-link " data-bs-toggle="tab">Defualt
                                    Value</a></li>


                        </ul>
                        <div class="tab-content ">

                            <div class="tab-pane mt-3 active" id="VisibleTab">
                                <div class="row border g-0 rounded shadow-sm">
                                    <div class="col p-4">
                                        <div class="col-md-12 mt-1 row flex">
                                            <div class="col-md-3">
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Pay Type</div>
                                                        <div class="dx-field-value">
                                                            <div id="Pay_Type"></div>
                                                        </div>
                                                        <span id="error_Pay_Type" class="text-danger"></span>
                                                    </div>

                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Is Combine</div>
                                                        <div class="dx-field-value">
                                                            <div id="IsCombine"></div>
                                                        </div>
                                                        <span id="error_IsCombine" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Print Copy No</div>
                                                        <div class="dx-field-value">
                                                            <div id="No_Copy_Print"></div>
                                                        </div>
                                                        <span id="error_No_Copy_Print" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Qty > 0 </div>
                                                        <div class="dx-field-value">
                                                            <div id="Qty_MustGreaterThanZero"></div>
                                                        </div>
                                                        <span id="error_Qty_MustGreaterThanZero" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Qty > 0 In Store</div>
                                                        <div class="dx-field-value">
                                                            <div id="Qty_MustGreaterThanZeroInStore"></div>
                                                        </div>
                                                        <span id="error_Qty_MustGreaterThanZeroInStore"
                                                            class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Save And New</div>
                                                        <div class="dx-field-value">
                                                            <div id="Save_And_New"></div>
                                                        </div>
                                                        <span id="error_Save_And_New" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Cost Price Affect</div>
                                                        <div class="dx-field-value">
                                                            <div id="CostPriceAffectedByDissAdd"></div>
                                                        </div>
                                                        <span id="error_CostPriceAffectedByDissAdd"
                                                            class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Close Bill After Payment</div>
                                                        <div class="dx-field-value">
                                                            <div id="CloseBillAfterPayment"></div>
                                                        </div>
                                                        <span id="error_CloseBillAfterPayment" class="text-danger"></span>
                                                    </div>
                                                </div>

                                            </div>
                                            <div class="col-md-3">
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Account Visible</div>
                                                        <div class="dx-field-value">
                                                            <div id="Acc_Visible"></div>
                                                        </div>
                                                        <span id="error_Acc_Visible" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Acc_Contra Visible</div>
                                                        <div class="dx-field-value">
                                                            <div id="Acc_Contra_Visible"></div>
                                                        </div>
                                                        <span id="error_Acc_Contra_Visible" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Customer Visible</div>
                                                        <div class="dx-field-value">
                                                            <div id="Cust_Acc_Visible"></div>
                                                        </div>
                                                        <span id="error_Cust_Acc_Visible" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Store Visible</div>
                                                        <div class="dx-field-value">
                                                            <div id="Store_Visible"></div>
                                                        </div>
                                                        <span id="error_Store_Visible" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Acc_Discount</div>
                                                        <div class="dx-field-value">
                                                            <div id="Discount_Visible"></div>
                                                        </div>
                                                        <span id="error_Discount_Visible" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Currency Visible</div>
                                                        <div class="dx-field-value">
                                                            <div id="Currency_Visible"></div>
                                                        </div>
                                                        <span id="error_Currency_Visible" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Header CashAmount</div>
                                                        <div class="dx-field-value">
                                                            <div id="Header_Cash_Visible"></div>
                                                        </div>
                                                        <span id="error_Header_Cash_Visible" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Header Notes</div>
                                                        <div class="dx-field-value">
                                                            <div id="Header_Notes_Visible"></div>
                                                        </div>
                                                        <span id="error_Header_Notes_Visible" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Footer BillTotal</div>
                                                        <div class="dx-field-value">
                                                            <div id="Footer_BillTotal"></div>
                                                        </div>
                                                        <span id="error_Footer_BillTotal" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Footer Item Dis</div>
                                                        <div class="dx-field-value">
                                                            <div id="Footer_ItemDiscount"></div>
                                                        </div>
                                                        <span id="error_Footer_ItemDiscount" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Footer BillDis</div>
                                                        <div class="dx-field-value">
                                                            <div id="Footer_BillDiscount"></div>
                                                        </div>
                                                        <span id="error_Footer_BillDiscount" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Footer BillAdd</div>
                                                        <div class="dx-field-value">
                                                            <div id="Footer_BillAdd"></div>
                                                        </div>
                                                        <span id="error_Footer_BillAdd" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Footer ItemAdd</div>
                                                        <div class="dx-field-value">
                                                            <div id="Footer_ItemAdd"></div>
                                                        </div>
                                                        <span id="error_Footer_ItemAdd" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Footer TotalAdd</div>
                                                        <div class="dx-field-value">
                                                            <div id="Footer_TotalAdd"></div>
                                                        </div>
                                                        <span id="error_Footer_TotalAdd" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Footer TotalDis</div>
                                                        <div class="dx-field-value">
                                                            <div id="Footer_TotalDiscount"></div>
                                                        </div>
                                                        <span id="error_Footer_TotalDiscount" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">DisAdd Grid</div>
                                                        <div class="dx-field-value">
                                                            <div id="DisAddGrid_Visible"></div>
                                                        </div>
                                                        <span id="error_DisAddGrid_Visible" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Body Grid</div>
                                                        <div class="dx-field-value">
                                                            <div id="BodyGrid_Visible"></div>
                                                        </div>
                                                        <span id="error_BodyGrid_Visible" class="text-danger"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Item High</div>
                                                        <div class="dx-field-value">
                                                            <div id="Item_Ch_Highx"></div>
                                                        </div>
                                                        <span id="error_Item_Ch_Highx" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Item Low</div>
                                                        <div class="dx-field-value">
                                                            <div id="Item_Ch_Lowx"></div>
                                                        </div>
                                                        <span id="error_Item_Ch_Lowx" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Order Limit</div>
                                                        <div class="dx-field-value">
                                                            <div id="Item_Ch_OrderLimitx"></div>
                                                        </div>
                                                        <span id="error_Item_Ch_OrderLimitx" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Check Zero</div>
                                                        <div class="dx-field-value">
                                                            <div id="Item_Ch_Zero"></div>
                                                        </div>
                                                        <span id="error_Item_Ch_Zero" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSetting-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Cost</div>
                                                        <div class="dx-field-value">
                                                            <div id="Cost_Guid"></div>
                                                        </div>
                                                        <span id="error_Cost_Guid" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Cost Visible</div>
                                                        <div class="dx-field-value">
                                                            <div id="Cost_Visible"></div>
                                                        </div>
                                                        <span id="error_Cost_Visible" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Save_Print</div>
                                                        <div class="dx-field-value">
                                                            <div id="Save_And_Print"></div>
                                                        </div>
                                                        <span id="error_Save_And_Print" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Show Before Print</div>
                                                        <div class="dx-field-value">
                                                            <div id="Show_Before_Print"></div>
                                                        </div>
                                                        <span id="error_Show_Before_Print" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Item Barcode</div>
                                                        <div class="dx-field-value">
                                                            <div id="Item_Barcode"></div>
                                                        </div>
                                                        <span id="error_Item_Barcode" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Item Code</div>
                                                        <div class="dx-field-value">
                                                            <div id="Item_Code"></div>
                                                        </div>
                                                        <span id="error_Item_Code" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Item Name</div>
                                                        <div class="dx-field-value">
                                                            <div id="Item_Name"></div>
                                                        </div>
                                                        <span id="error_Item_Name" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Dis Amount</div>
                                                        <div class="dx-field-value">
                                                            <div id="Dis_Amount"></div>
                                                        </div>
                                                        <span id="error_Dis_Amount" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Dis Amount Percent</div>
                                                        <div class="dx-field-value">
                                                            <div id="Dis_Amount_Percent"></div>
                                                        </div>
                                                        <span id="error_Dis_Amount_Percent" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Dis Percent Affect</div>
                                                        <div class="dx-field-value">
                                                            <div id="Dis_Percent_Affect"></div>
                                                        </div>
                                                        <span id="error_Dis_Percent_Affect" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Add Amount</div>
                                                        <div class="dx-field-value">
                                                            <div id="Add_Amount"></div>
                                                        </div>
                                                        <span id="error_Add_Amount" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Add Amount Percent</div>
                                                        <div class="dx-field-value">
                                                            <div id="Add_Amount_Percent"></div>
                                                        </div>
                                                        <span id="error_Add_Amount_Percent" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Add Percent Affect</div>
                                                        <div class="dx-field-value">
                                                            <div id="Add_Percent_Affect"></div>
                                                        </div>
                                                        <span id="error_Add_Percent_Affect" class="text-danger"></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Item Qty1</div>
                                                        <div class="dx-field-value">
                                                            <div id="Item_Qty1"></div>
                                                        </div>
                                                        <span id="error_Item_Qty1" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Item Qty2</div>
                                                        <div class="dx-field-value">
                                                            <div id="Item_Qty2"></div>
                                                        </div>
                                                        <span id="error_Item_Qty2" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Item Qty3</div>
                                                        <div class="dx-field-value">
                                                            <div id="Item_Qty3"></div>
                                                        </div>
                                                        <span id="error_Item_Qty3" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Item Price</div>
                                                        <div class="dx-field-value">
                                                            <div id="Item_Price"></div>
                                                        </div>
                                                        <span id="error_Item_Price" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Item Price Total</div>
                                                        <div class="dx-field-value">
                                                            <div id="Item_Price_Total"></div>
                                                        </div>
                                                        <span id="error_Item_Price_Total" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Item Discount</div>
                                                        <div class="dx-field-value">
                                                            <div id="Item_Discount"></div>
                                                        </div>
                                                        <span id="error_Item_Discount" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Item Extra</div>
                                                        <div class="dx-field-value">
                                                            <div id="Item_Extra"></div>
                                                        </div>
                                                        <span id="error_Item_Extra" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Item Price Net</div>
                                                        <div class="dx-field-value">
                                                            <div id="Item_Price_Net"></div>
                                                        </div>
                                                        <span id="error_Item_Price_Net" class="text-danger"></span>
                                                    </div>
                                                </div>

                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Item Notes</div>
                                                        <div class="dx-field-value">
                                                            <div id="Item_Notes_Show"></div>
                                                        </div>
                                                        <span id="error_Item_Notes_Show" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Item Length</div>
                                                        <div class="dx-field-value">
                                                            <div id="Item_Length"></div>
                                                        </div>
                                                        <span id="error_Item_Length" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Item Width</div>
                                                        <div class="dx-field-value">
                                                            <div id="Item_Width"></div>
                                                        </div>
                                                        <span id="error_Item_Width" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Item Count</div>
                                                        <div class="dx-field-value">
                                                            <div id="Item_Count"></div>
                                                        </div>
                                                        <span id="error_Item_Count" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Item Image</div>
                                                        <div class="dx-field-value">
                                                            <div id="Item_Image"></div>
                                                        </div>
                                                        <span id="error_Item_Image" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Production Date</div>
                                                        <div class="dx-field-value">
                                                            <div id="ProductionDate"></div>
                                                        </div>
                                                        <span id="error_ProductionDate" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Expire Date Alert</div>
                                                        <div class="dx-field-value">
                                                            <div id="ExpireDateAlert"></div>
                                                        </div>
                                                        <span id="error_ExpireDateAlert" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Brnach</div>
                                                        <div class="dx-field-value">
                                                            <div id="Branch_Guid"></div>
                                                        </div>
                                                        <span id="error_Branch_Guid" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Percentage Price</div>
                                                        <div class="dx-field-value">
                                                            <div id="PercentagePrice"></div>
                                                        </div>
                                                        <span id="error_PercentagePrice" class="text-danger"></span>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane mt-3" id="DefualtValue">
                                <div class="row border g-0 rounded shadow-sm">
                                    <div class="col p-4">
                                        <div class="col-md-12 mt-1 row flex">


                                            <div class="col-md-3">
                                                <div class="dx-fieldset" id="BillsSetting-container" hidden>
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">SettingID</div>
                                                        <div class="dx-field-value">
                                                            <div id="SettingID"></div>
                                                        </div>
                                                        <span id="error_SettingID" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSetting-container" hidden>
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">st_Guid</div>
                                                        <div class="dx-field-value">
                                                            <div id="st_Guid"></div>
                                                        </div>
                                                        <span id="error_st_Guid" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSetting-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Bill type</div>
                                                        <div class="dx-field-value">
                                                            <div id="Bill_Type_FK"></div>
                                                        </div>
                                                        <span id="error_Bill_Type_FK" class="text-danger"></span>
                                                    </div>
                                                </div>

                                                <div class="dx-fieldset" id="BillsSetting-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Form Text</div>
                                                        <div class="dx-field-value">
                                                            <div id="FormText"></div>
                                                        </div>
                                                        <span id="error_FormText" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSetting-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Print Template</div>
                                                        <div class="dx-field-value">
                                                            <div id="Print_Temp"></div>
                                                        </div>
                                                        <span id="error_Print_Temp" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSetting-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Print Count</div>
                                                        <div class="dx-field-value">
                                                            <div id="Print_Count"></div>
                                                        </div>
                                                        <span id="error_Print_Count" class="text-danger"></span>
                                                    </div>
                                                </div>



                                            </div>
                                            <div class="col-md-3">
                                                <div class="dx-fieldset" id="BillsSetting-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Account</div>
                                                        <div class="dx-field-value">
                                                            <div id="Acc_Guid"></div>
                                                        </div>
                                                        <span id="error_Acc_Guid" class="text-danger"></span>
                                                    </div>
                                                </div>

                                                <div class="dx-fieldset" id="BillsSetting-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Contra Account</div>
                                                        <div class="dx-field-value">
                                                            <div id="Acc_Contra_Account"></div>
                                                        </div>
                                                        <span id="error_Acc_Contra_Account" class="text-danger"></span>
                                                    </div>
                                                </div>

                                                <div class="dx-fieldset" id="BillsSetting-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Customer Account</div>
                                                        <div class="dx-field-value">
                                                            <div id="Cust_Acc_Guid"></div>
                                                        </div>
                                                        <span id="error_Cust_Acc_Guid" class="text-danger"></span>
                                                    </div>
                                                </div>

                                                <div class="dx-fieldset" id="BillsSetting-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Store</div>
                                                        <div class="dx-field-value">
                                                            <div id="Store_Guid"></div>
                                                        </div>
                                                        <span id="error_Store_Guid" class="text-danger"></span>
                                                    </div>
                                                </div>

                                                <div class="dx-fieldset" id="BillsSetting-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Discount Account</div>
                                                        <div class="dx-field-value">
                                                            <div id="Discount_Guid"></div>
                                                        </div>
                                                        <span id="error_Discount_Guid" class="text-danger"></span>
                                                    </div>
                                                </div>

                                                <div class="dx-fieldset" id="BillsSetting-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Currency</div>
                                                        <div class="dx-field-value">
                                                            <div id="Currency_Guid"></div>
                                                        </div>
                                                        <span id="error_Currency_Guid" class="text-danger"></span>
                                                    </div>
                                                </div>
                                                <div class="dx-fieldset" id="BillsSetting-container">
                                                    <div class="dx-field">
                                                        <div class="dx-field-label">Unit Type</div>
                                                        <div class="dx-field-value">
                                                            <div id="Unit_Type"></div>
                                                        </div>
                                                        <span id="error_Unit_Type" class="text-danger"></span>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                        </div>


                        <div id="notificationContainer"></div>



                        <hr>

                    </div>



                </div>
            </div>
        </div>



    </div>


    <script type="text/javascript" src="{{ url('resources/js/pro_js/BillsSetting.js') }}"></script>
    <script id="individualTemplate" type="text/html">
        <p>This is Contacts Tab</p>
    </script>
@endSection()
