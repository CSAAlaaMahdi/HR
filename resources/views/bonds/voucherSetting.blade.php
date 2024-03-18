@extends('admin.layout.mainarabic')
{{-- @section('title', 'Buying VoucherSetting') --}}
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
        <div class="card VoucherSettingaction" id="VoucherSettingaction">
            <div class="card-header" style="background-color: #283741">
                <div id="btnNewAdd" style="float: right"></div>
                <div id="btnSave" style="float: right;margin-right: 15px"></div>
                <h4 style="color: white;float: left;margin-left: 50%" id="card_VoucherSettingtitle"
                    class="card_VoucherSettingtitle">
                    اعدادات السندات</h4>


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
                                        <div id="GetVoucherSetting"></div>
                                    </div>
                                    <span id="error_GetVoucherSetting" class="text-danger"></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <ul class="nav nav-tabsVoucherSetting">
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
                                                    <div class="dx-fieldset" id="VoucherSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">مدين </div>
                                                            <div class="dx-field-value">
                                                                <div id="Debit_Visible"></div>
                                                            </div>
                                                            <span id="error_Debit_Visible" class="text-danger"></span>
                                                        </div>

                                                    </div>
                                                    <div class="dx-fieldset" id="VoucherSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">دائن</div>
                                                            <div class="dx-field-value">
                                                                <div id="Credit_Visible"></div>
                                                            </div>
                                                            <span id="error_Credit_Visible" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="VoucherSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">البيان </div>
                                                            <div class="dx-field-value">
                                                                <div id="NoteAll_Visible"></div>
                                                            </div>
                                                            <span id="error_NoteAll_Visible" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="VoucherSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label"> البيان 2</div>
                                                            <div class="dx-field-value">
                                                                <div id="Note_Acc_Visible"></div>
                                                            </div>
                                                            <span id="error_Note_Acc_Visible" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="VoucherSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">الحساب</div>
                                                            <div class="dx-field-value">
                                                                <div id="Acc_Guid_Visible"></div>
                                                            </div>
                                                            <span id="error_Acc_Guid_Visible" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="VoucherSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">نص1 </div>
                                                            <div class="dx-field-value">
                                                                <div id="txtUserVisible01"></div>
                                                            </div>
                                                            <span id="error_txtUserVisible01" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="VoucherSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">نص2 </div>
                                                            <div class="dx-field-value">
                                                                <div id="txtUserVisible02"></div>
                                                            </div>
                                                            <span id="error_txtUserVisible02" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="VoucherSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">نص3</div>
                                                            <div class="dx-field-value">
                                                                <div id="txtUserVisible03"></div>
                                                            </div>
                                                            <span id="error_txtUserVisible03" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="VoucherSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">نص4 </div>
                                                            <div class="dx-field-value">
                                                                <div id="txtUserVisible04"></div>
                                                            </div>
                                                            <span id="error_txtUserVisible04" class="text-danger"></span>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div class="col-md-3">
                                                    <div class="dx-fieldset" id="VoucherSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">العملة</div>
                                                            <div class="dx-field-value">
                                                                <div id="CurrencyVisible"></div>
                                                            </div>
                                                            <span id="error_Currency_Visible" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="VoucherSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">الفرع </div>
                                                            <div class="dx-field-value">
                                                                <div id="BranchVisible"></div>
                                                            </div>
                                                            <span id="error_BranchVisible" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="VoucherSettingToggle-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">التكلفة</div>
                                                            <div class="dx-field-value">
                                                                <div id="CostVisible"></div>
                                                            </div>
                                                            <span id="error_CostVisible" class="text-danger"></span>
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
                                                    <div class="dx-fieldset" id="VoucherSetting-container" hidden>
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">SettingID</div>
                                                            <div class="dx-field-value">
                                                                <div id="SettingID"></div>
                                                            </div>
                                                            <span id="error_SettingID" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="VoucherSetting-container" hidden>
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">st_Guid</div>
                                                            <div class="dx-field-value">
                                                                <div id="st_Guid"></div>
                                                            </div>
                                                            <span id="error_st_Guid" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="VoucherSetting-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">نوع الفاتورة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Bill_Type_FK"></div>
                                                            </div>
                                                            <span id="error_Bill_Type_FK" class="text-danger"></span>
                                                        </div>
                                                    </div>

                                                    <div class="dx-fieldset" id="VoucherSetting-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">اسم الفاتورة</div>
                                                            <div class="dx-field-value">
                                                                <div id="FormText"></div>
                                                            </div>
                                                            <span id="error_FormText" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="VoucherSetting-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">نموذج الطباعة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Print_Temp"></div>
                                                            </div>
                                                            <span id="error_Print_Temp" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="VoucherSetting-container">
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
                                                    <div class="dx-fieldset" id="VoucherSetting-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">الحساب</div>
                                                            <div class="dx-field-value">
                                                                <div id="Acc_Guid"></div>
                                                            </div>
                                                            <span id="error_Acc_Guid" class="text-danger"></span>
                                                        </div>
                                                    </div>

                                                    <div class="dx-fieldset" id="VoucherSetting-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">الحساب المقابل</div>
                                                            <div class="dx-field-value">
                                                                <div id="Acc_Contra_Account"></div>
                                                            </div>
                                                            <span id="error_Acc_Contra_Account"
                                                                class="text-danger"></span>
                                                        </div>
                                                    </div>

                                                    <div class="dx-fieldset" id="VoucherSetting-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">حساب العميل\المورد</div>
                                                            <div class="dx-field-value">
                                                                <div id="Cust_Acc_Guid"></div>
                                                            </div>
                                                            <span id="error_Cust_Acc_Guid" class="text-danger"></span>
                                                        </div>
                                                    </div>

                                                    <div class="dx-fieldset" id="VoucherSetting-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">المخزن</div>
                                                            <div class="dx-field-value">
                                                                <div id="Store_Guid"></div>
                                                            </div>
                                                            <span id="error_Store_Guid" class="text-danger"></span>
                                                        </div>
                                                    </div>

                                                    <div class="dx-fieldset" id="VoucherSetting-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">حساب الخصومات</div>
                                                            <div class="dx-field-value">
                                                                <div id="Discount_Guid"></div>
                                                            </div>
                                                            <span id="error_Discount_Guid" class="text-danger"></span>
                                                        </div>
                                                    </div>

                                                    <div class="dx-fieldset" id="VoucherSetting-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">العملة</div>
                                                            <div class="dx-field-value">
                                                                <div id="Currency_Guid"></div>
                                                            </div>
                                                            <span id="error_Currency_Guid" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="VoucherSetting-container">
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


    <script type="text/javascript" src="{{ url('assets/js/pro_js/VoucherSetting.js') }}"></script>
    <script id="individualTemplate" type="text/html">
        <p>This is Contacts Tab</p>
    </script>
@endSection()
