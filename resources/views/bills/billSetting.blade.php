@extends('admin.layout.mainarabic')
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
                <div id="btnNewAdd" style="float: right"></div>
                <div id="btnSave" style="float: right;margin-right: 15px"></div>
                <h4 style="color: white;float: left;margin-left: 50%" id="card_BillsSettingtitle"
                    class="card_BillsSettingtitle">
                    اعدادات الفواتير</h4>


            </div>
            <div id="notificationContainer"></div>
            <div class="card-body">
                <div class="row">

                    @csrf
                    <div class="col-md-12 row flex">
                        <div class="col-md-6">
                            <div class="dx-fieldset" id="Header-Search">
                                <div class="dx-field">
                                    <div class="dx-field-label">بحث</div>
                                    <div class="dx-field-value">
                                        <div id="GetBill"></div>
                                    </div>
                                    <span id="error_GetBill" class="text-danger"></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <ul class="nav nav-tabsBillsSetting">
                                <li class="nav-item"><a href="#VisibleTab" class="nav-link active" data-bs-toggle="tab">مرئي
                                    </a>
                                </li>
                                <li class="nav-item"><a href="#DefualtValue" class="nav-link " data-bs-toggle="tab">قيم
                                        افتراضية </a></li>


                            </ul>
                            <div class="tab-content ">

                                <div class="tab-pane mt-3 active" id="VisibleTab">
                                    <div class="row border g-0 rounded shadow-sm">
                                        <div class="col p-4">
                                            <div class="col-md-12 mt-1 row flex">
                                                <div class="col-md-3">
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">نوع الدفع</div>
                                                            <div class="dx-field-value">
                                                                <div id="Pay_Type"></div>
                                                            </div>
                                                            <span id="error_Pay_Type" class="text-danger"></span>
                                                        </div>

                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">تجميع</div>
                                                            <div class="dx-field-value">
                                                                <div id="IsCombine"></div>
                                                            </div>
                                                            <span id="error_IsCombine" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">عدد نسخ الطباعة</div>
                                                            <div class="dx-field-value">
                                                                <div id="No_Copy_Print"></div>
                                                            </div>
                                                            <span id="error_No_Copy_Print" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">الكمية اكبر من صفر </div>
                                                            <div class="dx-field-value">
                                                                <div id="Qty_MustGreaterThanZero"></div>
                                                            </div>
                                                            <span id="error_Qty_MustGreaterThanZero"
                                                                class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">الكمية في المخزن كبر من 0</div>
                                                            <div class="dx-field-value">
                                                                <div id="Qty_MustGreaterThanZeroInStore"></div>
                                                            </div>
                                                            <span id="error_Qty_MustGreaterThanZeroInStore"
                                                                class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">حفظ وجديد</div>
                                                            <div class="dx-field-value">
                                                                <div id="Save_And_New"></div>
                                                            </div>
                                                            <span id="error_Save_And_New" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">تأثير سعر التكلفة</div>
                                                            <div class="dx-field-value">
                                                                <div id="CostPriceAffectedByDissAdd"></div>
                                                            </div>
                                                            <span id="error_CostPriceAffectedByDissAdd"
                                                                class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">غلق الفاتورة بعد الدفع</div>
                                                            <div class="dx-field-value">
                                                                <div id="CloseBillAfterPayment"></div>
                                                            </div>
                                                            <span id="error_CloseBillAfterPayment"
                                                                class="text-danger"></span>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="col-md-3">
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">الحساب</div>
                                                            <div class="dx-field-value">
                                                                <div id="Acc_Visible"></div>
                                                            </div>
                                                            <span id="error_Acc_Visible" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">الحساب المقابل</div>
                                                            <div class="dx-field-value">
                                                                <div id="Acc_Contra_Visible"></div>
                                                            </div>
                                                            <span id="error_Acc_Contra_Visible"
                                                                class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">العميل</div>
                                                            <div class="dx-field-value">
                                                                <div id="Cust_Acc_Visible"></div>
                                                            </div>
                                                            <span id="error_Cust_Acc_Visible" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">المخزن</div>
                                                            <div class="dx-field-value">
                                                                <div id="Store_Visible"></div>
                                                            </div>
                                                            <span id="error_Store_Visible" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">حساب الخصم</div>
                                                            <div class="dx-field-value">
                                                                <div id="Discount_Visible"></div>
                                                            </div>
                                                            <span id="error_Discount_Visible" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">العملة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Currency_Visible"></div>
                                                            </div>
                                                            <span id="error_Currency_Visible" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">التسديد</div>
                                                            <div class="dx-field-value">
                                                                <div id="Header_Cash_Visible"></div>
                                                            </div>
                                                            <span id="error_Header_Cash_Visible"
                                                                class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">البيان</div>
                                                            <div class="dx-field-value">
                                                                <div id="Header_Notes_Visible"></div>
                                                            </div>
                                                            <span id="error_Header_Notes_Visible"
                                                                class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">اجمالي الفاتورة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Footer_BillTotal"></div>
                                                            </div>
                                                            <span id="error_Footer_BillTotal" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">خصم المواد</div>
                                                            <div class="dx-field-value">
                                                                <div id="Footer_ItemDiscount"></div>
                                                            </div>
                                                            <span id="error_Footer_ItemDiscount"
                                                                class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">خصم الفاتورة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Footer_BillDiscount"></div>
                                                            </div>
                                                            <span id="error_Footer_BillDiscount"
                                                                class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">الاضافة على الفاتورة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Footer_BillAdd"></div>
                                                            </div>
                                                            <span id="error_Footer_BillAdd" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">اضافة على المواد</div>
                                                            <div class="dx-field-value">
                                                                <div id="Footer_ItemAdd"></div>
                                                            </div>
                                                            <span id="error_Footer_ItemAdd" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">اجمالي الاضافة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Footer_TotalAdd"></div>
                                                            </div>
                                                            <span id="error_Footer_TotalAdd" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">اجمالي الخصم</div>
                                                            <div class="dx-field-value">
                                                                <div id="Footer_TotalDiscount"></div>
                                                            </div>
                                                            <span id="error_Footer_TotalDiscount"
                                                                class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">قائمة الخصم والاضافة</div>
                                                            <div class="dx-field-value">
                                                                <div id="DisAddGrid_Visible"></div>
                                                            </div>
                                                            <span id="error_DisAddGrid_Visible"
                                                                class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">قائمة المواد</div>
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
                                                            <div class="dx-field-label">الحد الاعلى</div>
                                                            <div class="dx-field-value">
                                                                <div id="Item_Ch_Highx"></div>
                                                            </div>
                                                            <span id="error_Item_Ch_Highx" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">الحد الادنى</div>
                                                            <div class="dx-field-value">
                                                                <div id="Item_Ch_Lowx"></div>
                                                            </div>
                                                            <span id="error_Item_Ch_Lowx" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">حد السحب</div>
                                                            <div class="dx-field-value">
                                                                <div id="Item_Ch_OrderLimitx"></div>
                                                            </div>
                                                            <span id="error_Item_Ch_OrderLimitx"
                                                                class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">تدقيق الصفر</div>
                                                            <div class="dx-field-value">
                                                                <div id="Item_Ch_Zero"></div>
                                                            </div>
                                                            <span id="error_Item_Ch_Zero" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSetting-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">التكلفة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Cost_Guid"></div>
                                                            </div>
                                                            <span id="error_Cost_Guid" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">اظهار التكلفة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Cost_Visible"></div>
                                                            </div>
                                                            <span id="error_Cost_Visible" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">حفظ وطباعة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Save_And_Print"></div>
                                                            </div>
                                                            <span id="error_Save_And_Print" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">العرض قبل الطباعة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Show_Before_Print"></div>
                                                            </div>
                                                            <span id="error_Show_Before_Print" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">باركود المادة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Item_Barcode"></div>
                                                            </div>
                                                            <span id="error_Item_Barcode" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">كود المادة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Item_Code"></div>
                                                            </div>
                                                            <span id="error_Item_Code" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">اسم المادة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Item_Name"></div>
                                                            </div>
                                                            <span id="error_Item_Name" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">كمية الخصم</div>
                                                            <div class="dx-field-value">
                                                                <div id="Dis_Amount"></div>
                                                            </div>
                                                            <span id="error_Dis_Amount" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">كمية الخصمم مئوية</div>
                                                            <div class="dx-field-value">
                                                                <div id="Dis_Amount_Percent"></div>
                                                            </div>
                                                            <span id="error_Dis_Amount_Percent"
                                                                class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">تأئير الخصم </div>
                                                            <div class="dx-field-value">
                                                                <div id="Dis_Percent_Affect"></div>
                                                            </div>
                                                            <span id="error_Dis_Percent_Affect"
                                                                class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">كمية الاضافة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Add_Amount"></div>
                                                            </div>
                                                            <span id="error_Add_Amount" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">كمية الاضافة مئوية</div>
                                                            <div class="dx-field-value">
                                                                <div id="Add_Amount_Percent"></div>
                                                            </div>
                                                            <span id="error_Add_Amount_Percent"
                                                                class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">تأثير الاضافة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Add_Percent_Affect"></div>
                                                            </div>
                                                            <span id="error_Add_Percent_Affect"
                                                                class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">كمية1</div>
                                                            <div class="dx-field-value">
                                                                <div id="Item_Qty1"></div>
                                                            </div>
                                                            <span id="error_Item_Qty1" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">كمية2</div>
                                                            <div class="dx-field-value">
                                                                <div id="Item_Qty2"></div>
                                                            </div>
                                                            <span id="error_Item_Qty2" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">كمية3</div>
                                                            <div class="dx-field-value">
                                                                <div id="Item_Qty3"></div>
                                                            </div>
                                                            <span id="error_Item_Qty3" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">سعر المفرد</div>
                                                            <div class="dx-field-value">
                                                                <div id="Item_Price"></div>
                                                            </div>
                                                            <span id="error_Item_Price" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">اجمالي السعر</div>
                                                            <div class="dx-field-value">
                                                                <div id="Item_Price_Total"></div>
                                                            </div>
                                                            <span id="error_Item_Price_Total" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">خصم المادة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Item_Discount"></div>
                                                            </div>
                                                            <span id="error_Item_Discount" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">اضافة على المادة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Item_Extra"></div>
                                                            </div>
                                                            <span id="error_Item_Extra" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">السعر النهائي</div>
                                                            <div class="dx-field-value">
                                                                <div id="Item_Price_Net"></div>
                                                            </div>
                                                            <span id="error_Item_Price_Net" class="text-danger"></span>
                                                        </div>
                                                    </div>

                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">ملاحظات المادة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Item_Notes_Show"></div>
                                                            </div>
                                                            <span id="error_Item_Notes_Show" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">طول المادة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Item_Length"></div>
                                                            </div>
                                                            <span id="error_Item_Length" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">عرض المادة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Item_Width"></div>
                                                            </div>
                                                            <span id="error_Item_Width" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">كمية المادة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Item_Count"></div>
                                                            </div>
                                                            <span id="error_Item_Count" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">صورة المادة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Item_Image"></div>
                                                            </div>
                                                            <span id="error_Item_Image" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">تاريخ الانتاج</div>
                                                            <div class="dx-field-value">
                                                                <div id="ProductionDate"></div>
                                                            </div>
                                                            <span id="error_ProductionDate" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">تنبه تاريخ النفاذ</div>
                                                            <div class="dx-field-value">
                                                                <div id="ExpireDateAlert"></div>
                                                            </div>
                                                            <span id="error_ExpireDateAlert" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">الفرع</div>
                                                            <div class="dx-field-value">
                                                                <div id="Branch_Guid"></div>
                                                            </div>
                                                            <span id="error_Branch_Guid" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">النسبة المئوية للسعر</div>
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
                                                            <div class="dx-field-label">نوع الفاتورة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Bill_Type_FK"></div>
                                                            </div>
                                                            <span id="error_Bill_Type_FK" class="text-danger"></span>
                                                        </div>
                                                    </div>

                                                    <div class="dx-fieldset" id="BillsSetting-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">اسم الفاتورة</div>
                                                            <div class="dx-field-value">
                                                                <div id="FormText"></div>
                                                            </div>
                                                            <span id="error_FormText" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSetting-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">نموذج الطباعة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Print_Temp"></div>
                                                            </div>
                                                            <span id="error_Print_Temp" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSetting-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">عددا لطابعات</div>
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
                                                            <div class="dx-field-label">الحساب</div>
                                                            <div class="dx-field-value">
                                                                <div id="Acc_Guid"></div>
                                                            </div>
                                                            <span id="error_Acc_Guid" class="text-danger"></span>
                                                        </div>
                                                    </div>

                                                    <div class="dx-fieldset" id="BillsSetting-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">الحساب المقابل</div>
                                                            <div class="dx-field-value">
                                                                <div id="Acc_Contra_Account"></div>
                                                            </div>
                                                            <span id="error_Acc_Contra_Account"
                                                                class="text-danger"></span>
                                                        </div>
                                                    </div>

                                                    <div class="dx-fieldset" id="BillsSetting-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">حساب العميل\المورد</div>
                                                            <div class="dx-field-value">
                                                                <div id="Cust_Acc_Guid"></div>
                                                            </div>
                                                            <span id="error_Cust_Acc_Guid" class="text-danger"></span>
                                                        </div>
                                                    </div>

                                                    <div class="dx-fieldset" id="BillsSetting-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">المخزن</div>
                                                            <div class="dx-field-value">
                                                                <div id="Store_Guid"></div>
                                                            </div>
                                                            <span id="error_Store_Guid" class="text-danger"></span>
                                                        </div>
                                                    </div>

                                                    <div class="dx-fieldset" id="BillsSetting-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">حساب الخصومات</div>
                                                            <div class="dx-field-value">
                                                                <div id="Discount_Guid"></div>
                                                            </div>
                                                            <span id="error_Discount_Guid" class="text-danger"></span>
                                                        </div>
                                                    </div>

                                                    <div class="dx-fieldset" id="BillsSetting-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">العملة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Currency_Guid"></div>
                                                            </div>
                                                            <span id="error_Currency_Guid" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="BillsSetting-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">نوع الوحدة</div>
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
                        </div>





                        <hr>

                    </div>



                </div>
            </div>
        </div>



    </div>


    <script type="text/javascript" src="{{ url('assets/js/pro_js/BillsSetting.js') }}"></script>
    <script id="individualTemplate" type="text/html">
        <p>This is Contacts Tab</p>
    </script>
@endSection()
