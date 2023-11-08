@extends('admin.layout.mainarabic')
{{-- @section('title', 'Buying Bonds') --}}
@section('content')

    <div class="col-md-12 ">
        <div class="card Bondsaction" id="Bondsaction">
            <div class="card-header" style="background-color: #283741">
                <div id="btnNewAdd" style="float: right"></div>
                <div id="btnSave" style="float: right;margin-right: 15px"></div>
                <h4 style="color: white;float: right;margin-right: 35%" id="card_Bondstitle" class="card_Bondstitle">
                    {{ $BondType }}</h4>


            </div>
            <div id="notificationContainer"></div>
            <div class="card-body">
                <div class="row">

                    @csrf
                    <div class="col-md-6">
                        <div class="dx-fieldset" id="Bond-Search">
                            <div class="dx-field">
                                <div class="dx-field-label">بحث</div>
                                <div class="dx-field-value">
                                    <div id="B_GetBonds"></div>
                                </div>
                                <span id="error_B_GetBonds" class="text-danger"></span>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="col-md-12 row">

                        <div class="col-md-3">
                            <div class="dx-fieldset" id="Bond-container" hidden>
                                <div class="dx-field">
                                    <div class="dx-field-label">Guid</div>
                                    <div class="dx-field-value">
                                        <div id="B_Guid"></div>
                                    </div>
                                    <span id="error_B_Guid" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Bond-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id="Account">الحساب</div>
                                    <div class="dx-field-value">
                                        <div id="B_Account"></div>
                                    </div>
                                    <span id="error_B_Account" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Bond-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">رقم السند</div>
                                    <div class="dx-field-value">
                                        <div id="B_Doc_Number"></div>
                                    </div>
                                    <span id="error_B_Doc_Number" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Bond-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">تاريخ</div>
                                    <div class="dx-field-value">
                                        <div id="B_Datex"></div>
                                    </div>
                                    <span id="error_B_Datex" class="text-danger"></span>
                                </div>
                            </div>
                            {{-- <div class="dx-fieldset" id="HeaderToggle-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">Cash</div>
                                    <div class="dx-field-value">
                                        <div id="B_Pay_Type"></div>
                                    </div>
                                    <span id="error_B_Pay_Type" class="text-danger"></span>
                                </div>
                            </div> --}}

                        </div>


                        <div class="col-md-3">
                            <div class="dx-fieldset" id="Header-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">رقم القيد</div>
                                    <div class="dx-field-value">
                                        <div id="B_Bond_Number"></div>
                                    </div>
                                    <span id="error_B_Bond_Number" class="text-danger"></span>
                                </div>

                            </div>
                            <div class="dx-fieldset" id="Header-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">العملة</div>
                                    <div class="dx-field-value">
                                        <div id="B_Currency_Guid"></div>
                                    </div>
                                    <span id="error_B_Currency_Guid" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Header-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">التعادل</div>
                                    <div class="dx-field-value">
                                        <div id="B_Currency_Equal"></div>
                                    </div>
                                    <span id="error_B_Currency_Equal" class="text-danger"></span>
                                </div>

                            </div>


                        </div>
                        <div class="col-md-3">
                            <div class="dx-fieldset" id="Bond-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">البيان</div>
                                    <div class="dx-field-value">
                                        <div id="B_Note"></div>
                                    </div>
                                    <span id="error_B_Note" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Bond-container" hidden>
                                <div class="dx-field">
                                    <div class="dx-field-label">Bond Type</div>
                                    <div class="dx-field-value">
                                        <div id="B_Bond_Type"></div>
                                    </div>
                                    <span id="error_B_Bond_Type" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Bond-container" hidden>
                                <div class="dx-field">
                                    <div class="dx-field-label">st Guid</div>
                                    <div class="dx-field-value">
                                        <div id="B_st_Guid"></div>
                                    </div>
                                    <span id="error_B_st_Guid" class="text-danger"></span>
                                </div>
                            </div>

                        </div>
                        <div class="col-md-3">
                            <div class="dx-fieldset" id="BondToggle-container" hidden>
                                <div class="dx-field">
                                    <div class="dx-field-label">فاتورة</div>
                                    <div class="dx-field-value">
                                        <div id="B_IsBill"></div>
                                    </div>
                                    <span id="error_B_IsBill" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="BondToggle-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">مقبول</div>
                                    <div class="dx-field-value">
                                        <div id="B_IsAccept"></div>
                                    </div>
                                    <span id="error_B_IsAccept" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="BondToggle-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">مغلق </div>
                                    <div class="dx-field-value">
                                        <div id="B_IsLock"></div>
                                    </div>
                                    <span id="error_B_IsLock" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="BondToggle-container" hidden>
                                <div class="dx-field">
                                    <div class="dx-field-label">مدفوعة</div>
                                    <div class="dx-field-value">
                                        <div id="B_IsPaidBill"></div>
                                    </div>
                                    <span id="error_B_IsPaidBill" class="text-danger"></span>
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



                </div>
            </div>
        </div>



    </div>


    <script type="text/javascript" src="{{ url('assets/js/pro_js/Bonds.js') }}"></script>
    <script id="individualTemplate" type="text/html">
        <p>This is Contacts Tab</p>
    </script>
@endSection()
