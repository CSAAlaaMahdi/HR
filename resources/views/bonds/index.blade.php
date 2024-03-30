@extends('admin.layout.mainarabic')
{{-- @section('title', 'Buying Bonds') --}}
@section('content')

    <div class="col-md-12 ">
        <div class="card Bondsaction" id="Bondsaction">
            <div class="card-header" style="background-color: #283741">
                <div id="btnNewAdd" style="float: right"></div>
                <div id="btnSave" style="float: right;margin-right: 15px"></div>
                <h4 style="color: white;float: right;margin-right: 25%" id="card_Bondstitle" class="card_Bondstitle">
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

                        <div class="col-md-4">
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
                            <div class="dx-fieldset" id="User01-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id="L_txtUser01Optional">نص1</div>
                                    <div class="dx-field-value">
                                        <div id="B_txtUser01Optional"></div>
                                    </div>
                                    <span id="error_B_txtUser01Optional" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="User02-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id="L_txtUser02Optional">نص2</div>
                                    <div class="dx-field-value">
                                        <div id="B_txtUser02Optional"></div>
                                    </div>
                                    <span id="error_B_txtUser02Optional" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="User03-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id="L_txtUser03Optional">نص3</div>
                                    <div class="dx-field-value">
                                        <div id="B_txtUser03Optional"></div>
                                    </div>
                                    <span id="error_B_txtUser03Optional" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="User04-container">
                                <div class="dx-field">
                                    <div class="dx-field-label" id="L_txtUser04Optional">نص4</div>
                                    <div class="dx-field-value">
                                        <div id="B_txtUser04Optional"></div>
                                    </div>
                                    <span id="error_B_txtUser04Optional" class="text-danger"></span>
                                </div>
                            </div>

                        </div>


                        <div class="col-md-4">
                            <div class="dx-fieldset" id="Bond-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">رقم القيد</div>
                                    <div class="dx-field-value">
                                        <div id="B_Bond_Number"></div>
                                    </div>
                                    <span id="error_B_Bond_Number" class="text-danger"></span>
                                </div>

                            </div>
                            <div class="dx-fieldset" id="Bond-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">العملة</div>
                                    <div class="dx-field-value">
                                        <div id="B_Currency_Guid"></div>
                                    </div>
                                    <span id="error_B_Currency_Guid" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Bond-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">التعادل</div>
                                    <div class="dx-field-value">
                                        <div id="B_Currency_Equal"></div>
                                    </div>
                                    <span id="error_B_Currency_Equal" class="text-danger"></span>
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

                        <div class="col-md-4">
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
                                    <div class="dx-field-label">مدقق</div>
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
                    <div class="col-md-12 row">
                        <div class="col-md-10">
                            <div class="dx-fieldset" id="BondNote-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">البيان</div>
                                    <div class="dx-field-value">
                                        <div id="B_Note"></div>
                                    </div>
                                    <span id="error_B_Note" class="text-danger"></span>
                                </div>
                            </div>
                        </div>

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
