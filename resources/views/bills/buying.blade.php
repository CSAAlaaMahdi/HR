@extends('admin.layout.main')
{{-- @section('title', 'Buying Bills') --}}
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
        <div class="card Billsaction" id="Billsaction">
            <div class="card-header" style="background-color: #283741">
                <div id="btnNewAdd" style="float: left"></div>
                <div id="btnSave" style="float: left;margin-left: 15px"></div>
                <h4 style="color: white;float: right;margin-right: 50%" id="card_Billstitle" class="card_Billstitle">
                    {{ $billType }}</h4>


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
                                    <div id="H_GetBill"></div>
                                </div>
                                <span id="error_H_GetBill" class="text-danger"></span>
                            </div>
                        </div>
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
                                    <div class="dx-field-label">Bill Number</div>
                                    <div class="dx-field-value">
                                        <div id="H_Bill_Number"></div>
                                    </div>
                                    <span id="error_H_Bill_Number" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Header-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">Bill Date</div>
                                    <div class="dx-field-value">
                                        <div id="H_Bill_Date"></div>
                                    </div>
                                    <span id="error_H_Bill_Date" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="HeaderToggle-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id="lb_PayType">Debit</div>
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
                                    <div class="dx-field-label" id="H_Cust_Label">Customer</div>
                                    <div class="dx-field-value">
                                        <div id="H_Cust_Guid"></div>
                                    </div>
                                    <span id="error_H_Cust_Guid" class="text-danger"></span>
                                </div>
                            </div>

                            
                            <div class="dx-fieldset" id="Header-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id = "L_Store_Guid">Store</div>
                                    <div class="dx-field-value">
                                        <div id="H_Store_Guid"></div>
                                    </div>
                                    <span id="error_H_Store_Guid" class="text-danger"></span>
                                </div>
                            </div>

                            <div class="dx-fieldset" id="Header-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id="L_Acc_Guid">Account</div>
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
                                    <div class="dx-field-label" id="H_Currency_Visible">Currency</div>
                                    <div class="dx-field-value">
                                        <div id="H_Currency_Guid"></div>
                                    </div>
                                    <span id="error_H_Currency_Guid" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Header-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id="H_Currency_Visible2">Equal</div>
                                    <div class="dx-field-value">
                                        <div id="H_Currency_Equal"></div>
                                    </div>
                                    <span id="error_H_Currency_Equal" class="text-danger"></span>
                                </div>

                            </div>
                            <div class="dx-fieldset" id="Header-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id="H_CashAmount_Lable">Cash Amount</div>
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
                                    <div class="dx-field-label">Notes</div>
                                    <div class="dx-field-value">
                                        <div id="H_Note_Header"></div>
                                    </div>
                                    <span id="error_H_Note_Header" class="text-danger"></span>
                                </div>
                            </div>

                            <div class="dx-fieldset" id="Header-container" hidden >
                                <div class="dx-field">
                                    <div class="dx-field-label">Bill Type</div>
                                    <div class="dx-field-value">
                                        <div id="H_Bill_Type"></div>
                                    </div>
                                    <span id="error_H_Bill_Type" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Header-container" >
                                <div class="dx-field">
                                    <div class="dx-field-label" id="L_Bill_Account">Bill Account</div>
                                    <div class="dx-field-value" >
                                        <div id="H_Bill_Account"></div>
                                    </div>
                                    <span id="error_H_Bill_Account" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Header-container" >
                                <div class="dx-field">
                                    <div class="dx-field-label" id="L_Discount_Account">Discount Account</div>
                                    <div class="dx-field-value">
                                        <div id="H_Discount_Account"></div>
                                    </div>
                                    <span id="error_H_Discount_Account" class="text-danger"></span>
                                </div>
                            </div>
                        </div>
                        <hr>

                    </div>
                    <div class="demo-container">
                        <div id="data-grid-demo">
                            <div id="gridDeleteSelected"></div>
                            <div id="gridContainer"></div>
                        </div>
                    </div>

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
                                <div class="dx-field-label">Bill Total</div>
                                <div class="dx-field-value">
                                    <div id="F_Total_Price_Bill"></div>
                                </div>
                                <span id="error_F_Total_Price_Bill" class="text-danger"></span>
                            </div>
                        </div>
                        <div class="dx-fieldset" id="Footer-container">
                            <div class="dx-field">
                                <div class="dx-field-label">Item Discount</div>
                                <div class="dx-field-value">
                                    <div id="F_Item_Discount"></div>
                                </div>
                                <span id="error_F_Item_Discount" class="text-danger"></span>
                            </div>
                        </div>
                        <div class="dx-fieldset" id="Footer-container">
                            <div class="dx-field">
                                <div class="dx-field-label">Bill Discount</div>
                                <div class="dx-field-value">
                                    <div id="F_Bill_Discount"></div>
                                </div>
                                <span id="error_F_Bill_Discount" class="text-danger"></span>
                            </div>
                        </div>
                        <div class="dx-fieldset" id="Footer-container">
                            <div class="dx-field">
                                <div class="dx-field-label">Bill Add</div>
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
                                <div class="dx-field-label">Currency Guid</div>
                                <div class="dx-field-value">
                                    <div id="F_Currency_Guid"></div>
                                </div>
                                <span id="error_F_Currency_Guid" class="text-danger"></span>
                            </div>
                        </div>
                        <div class="dx-fieldset" id="Footer-container" hidden>
                            <div class="dx-field">
                                <div class="dx-field-label">Currency Equal</div>
                                <div class="dx-field-value">
                                    <div id="F_Currency_Equal"></div>
                                </div>
                                <span id="error_F_Currency_Equal" class="text-danger"></span>
                            </div>
                        </div>
                        <div class="dx-fieldset" id="Footer-container">
                            <div class="dx-field">
                                <div class="dx-field-label"> Total Discount</div>
                                <div class="dx-field-value">
                                    <div id="F_Total_Discount"></div>
                                </div>
                                <span id="error_F_Total_Discount" class="text-danger"></span>
                            </div>
                        </div>
                        <div class="dx-fieldset" id="Footer-container">
                            <div class="dx-field">
                                <div class="dx-field-label"> Item Add</div>
                                <div class="dx-field-value">
                                    <div id="F_Item_Add"></div>
                                </div>
                                <span id="error_F_Item_Add" class="text-danger"></span>
                            </div>
                        </div>
                        <div class="dx-fieldset" id="Footer-container">
                            <div class="dx-field">
                                <div class="dx-field-label"> Total Add</div>
                                <div class="dx-field-value">
                                    <div id="F_Total_Add"></div>
                                </div>
                                <span id="error_F_Total_Add" class="text-danger"></span>
                            </div>
                        </div>

                    </div>

                    <ul class="nav nav-tabs">
                        <li class="nav-item"><a href="#BillDiscount" class="nav-link active" data-bs-toggle="tab">Bill Discount</a>
                        </li>
                        <li class="nav-item"><a href="#CashAmount" class="nav-link " data-bs-toggle="tab">Cash Amount</a></li>


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


    <script type="text/javascript" src="{{ url('resources/js/pro_js/Bills.js') }}"></script>
    <script id="individualTemplate" type="text/html">
        <p>This is Contacts Tab</p>
    </script>
@endSection()
