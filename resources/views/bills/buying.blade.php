@extends('admin.layout.mainarabic')
{{-- @section('title', 'Buying Bills') --}}
@section('content')

    <div class="col-md-12 ">
        <div class="card Billsaction" id="Billsaction">
            <div class="card-header" style="background-color: #283741">
                <div id="btnNewAdd" style="float: right"></div>
                <div id="btnSave" style="float: right;margin-right: 15px"></div>
                <h4 style="color: white;float: left;margin-left: 50%" id="card_Billstitle" class="card_Billstitle">
                    {{ $billType }}</h4>


            </div>
            <div id="notificationContainer"></div>
            <div class="card-body">
                <div class="row">

                    @csrf
                    <div class="col-md-6">
                        <div class="dx-fieldset" id="Header-Search">
                            <div class="dx-field">
                                <div class="dx-field-label">بحث</div>
                                <div class="dx-field-value">
                                    <div id="H_GetBill"></div>
                                </div>
                                <span id="error_H_GetBill" class="text-danger"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 row">

                        <div class="col-md-3">
                            <div class="dx-fieldset" id="Header-container" hidden>
                                <div class="dx-field">
                                    <div class="dx-field-label">Guid</div>
                                    <div class="dx-field-value">
                                        <div id="H_Guid"></div>
                                    </div>
                                    <span id="error_H_Guid" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Header-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">رقم </div>
                                    <div class="dx-field-value">
                                        <div id="H_Bill_Number"></div>
                                    </div>
                                    <span id="error_H_Bill_Number" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Header-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">تاريخ </div>
                                    <div class="dx-field-value">
                                        <div id="H_Bill_Date"></div>
                                    </div>
                                    <span id="error_H_Bill_Date" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="HeaderToggle-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id="lb_PayType">آجل</div>
                                    <div class="dx-field-value" >
                                        <div id="H_Pay_Type"></div>
                                    </div>
                                    <span id="error_H_Pay_Type" class="text-danger"></span>
                                </div>
                            </div>

                        </div>

                        <div class="col-md-3">
                            <div class="dx-fieldset" id="Header-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id="H_Cust_Label">العميل</div>
                                    <div class="dx-field-value">
                                        <div id="H_Cust_Guid"></div>
                                    </div>
                                    <span id="error_H_Cust_Guid" class="text-danger"></span>
                                </div>
                            </div>


                            <div class="dx-fieldset" id="Header-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id = "L_Store_Guid">المخزن</div>
                                    <div class="dx-field-value">
                                        <div id="H_Store_Guid"></div>
                                    </div>
                                    <span id="error_H_Store_Guid" class="text-danger"></span>
                                </div>
                            </div>

                            <div class="dx-fieldset" id="Header-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id="L_Acc_Guid">الحساب</div>
                                    <div class="dx-field-value">
                                        <div id="H_Acc_Guid"></div>
                                    </div>
                                    <span id="error_H_Acc_Guid" class="text-danger"></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="dx-fieldset" id="Header-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id="H_Currency_Visible">العملة</div>
                                    <div class="dx-field-value">
                                        <div id="H_Currency_Guid"></div>
                                    </div>
                                    <span id="error_H_Currency_Guid" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Header-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id="H_Currency_Visible2">التعادل</div>
                                    <div class="dx-field-value">
                                        <div id="H_Currency_Equal"></div>
                                    </div>
                                    <span id="error_H_Currency_Equal" class="text-danger"></span>
                                </div>

                            </div>
                            <div class="dx-fieldset" id="Header-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id="H_CashAmount_Lable">القبض</div>
                                    <div class="dx-field-value">
                                        <div id="H_Cash_Amount"></div>
                                    </div>
                                    <span id="error_H_Cash_Amount" class="text-danger"></span>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-3">
                            <div class="dx-fieldset" id="Header-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">البيان</div>
                                    <div class="dx-field-value">
                                        <div id="H_Note_Header"></div>
                                    </div>
                                    <span id="error_H_Note_Header" class="text-danger"></span>
                                </div>
                            </div>

                            <div class="dx-fieldset" id="Header-container" hidden >
                                <div class="dx-field">
                                    <div class="dx-field-label">نوع الفاتورة</div>
                                    <div class="dx-field-value">
                                        <div id="H_Bill_Type"></div>
                                    </div>
                                    <span id="error_H_Bill_Type" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Header-container" >
                                <div class="dx-field">
                                    <div class="dx-field-label" id="L_Bill_Account">حساب الفاتورة</div>
                                    <div class="dx-field-value" >
                                        <div id="H_Bill_Account"></div>
                                    </div>
                                    <span id="error_H_Bill_Account" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Header-container" >
                                <div class="dx-field">
                                    <div class="dx-field-label" id="L_Discount_Account">الخصم</div>
                                    <div class="dx-field-value">
                                        <div id="H_Discount_Account"></div>
                                    </div>
                                    <span id="error_H_Discount_Account" class="text-danger"></span>
                                </div>
                            </div>
                        </div>
                        <hr>

                    </div>
                    <div class="col-md-12">
                        <div class="demo-container">
                            <div id="data-grid-demo">
                                <div id="gridDeleteSelected"></div>
                                <div id="gridContainer"></div>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-12 row">
                        <div class="col-md-3">
                            <div class="dx-fieldset" id="Footer-container" hidden>
                                <div class="dx-field">
                                    <div class="dx-field-label">Guid</div>
                                    <div class="dx-field-value">
                                        <div id="F_Guid"></div>
                                    </div>
                                    <span id="error_F_Guid" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Footer-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id="F_Total_Price_Bill_lb">اجمالي الفاتورة</div>
                                    <div class="dx-field-value">
                                        <div id="F_Total_Price_Bill"></div>
                                    </div>
                                    <span id="error_F_Total_Price_Bill" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Footer-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id="F_Item_Discount_lb">خصم المواد</div>
                                    <div class="dx-field-value">
                                        <div id="F_Item_Discount"></div>
                                    </div>
                                    <span id="error_F_Item_Discount" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Footer-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id="F_Bill_Discount_lb">خصم الفاتورة</div>
                                    <div class="dx-field-value">
                                        <div id="F_Bill_Discount"></div>
                                    </div>
                                    <span id="error_F_Bill_Discount" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Footer-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id="F_Bill_AddAmount_lb">اضافة الفاتورة</div>
                                    <div class="dx-field-value">
                                        <div id="F_Bill_AddAmount"></div>
                                    </div>
                                    <span id="error_F_Bill_AddAmount" class="text-danger"></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="dx-fieldset" id="Footer-container" hidden>
                                <div class="dx-field">
                                    <div class="dx-field-label">العملة</div>
                                    <div class="dx-field-value">
                                        <div id="F_Currency_Guid"></div>
                                    </div>
                                    <span id="error_F_Currency_Guid" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Footer-container" hidden>
                                <div class="dx-field">
                                    <div class="dx-field-label">التعادل</div>
                                    <div class="dx-field-value">
                                        <div id="F_Currency_Equal"></div>
                                    </div>
                                    <span id="error_F_Currency_Equal" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Footer-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id="F_Total_Discount_lb">اجمالي الخصم</div>
                                    <div class="dx-field-value">
                                        <div id="F_Total_Discount"></div>
                                    </div>
                                    <span id="error_F_Total_Discount" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Footer-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id="F_Item_Add_lb"> اضافة للمواد</div>
                                    <div class="dx-field-value">
                                        <div id="F_Item_Add"></div>
                                    </div>
                                    <span id="error_F_Item_Add" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Footer-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id="F_Total_Add_lb"> اجمالي الاضافة</div>
                                    <div class="dx-field-value">
                                        <div id="F_Total_Add"></div>
                                    </div>
                                    <span id="error_F_Total_Add" class="text-danger"></span>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="col-md-12 DisAddGrid">
                        <ul class="nav nav-tabsBillsbills">
                            <li class="nav-item"><a href="#BillDiscount" class="nav-link active" data-bs-toggle="tab">الخصومات والاضافة</a>
                            </li>
                            <li class="nav-item"><a href="#CashAmount" class="nav-link " data-bs-toggle="tab">التسديد</a></li>

                        </ul>

                        <div class="tab-content ">

                            <div class="tab-pane mt-3 active" id="BillDiscount">
                                <div class="row border g-0 rounded shadow-sm">
                                    <div class="col p-4">

                                        <div class="col-md-12 mt-1 row flex">

                                            <div class="demo-container">
                                                <div id="data-grid-demo">
                                                    <div id="gridDeleteSelectedDiscount"></div>
                                                    <div id="gridContainerDiscount"></div>
                                                </div>
                                            </div>


                                        </div>


                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane mt-3" id="CashAmount">
                                <div class="row border g-0 rounded shadow-sm">
                                    <div class="col p-4">

                                        <div class="col-md-12 mt-1 row flex">




                                        </div>


                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>




                </div>
            </div>
        </div>



    </div>


    <script type="text/javascript" src="{{ url('assets/js/pro_js/Bills.js') }}"></script>
    {{-- <script id="individualTemplate" type="text/html">
        <p>This is Contacts Tab</p>
    </script> --}}
@endSection()
