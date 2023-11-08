@extends('admin.layout.mainarabic')
{{-- @section('title', 'Currencies') --}}
@section('content')

<div class="col p-4">
    <div class="col-md-12 mt-2">
        <div class="card " id="firstCard">
            <div class="card-header"   style="background-color: #343A40">



                <h4 style="color: white;">العملات</h4>

            </div>
            <div class="card-body">

                <div class="datagrid" id="currencydatagrid">

                </div>

                <div id="context-menu">

                </div>
                <div id="notificationContainer"></div>

            </div>
        </div>
    </div>
    <div class="col-md-12 mt-5">
        <div class="card currencyaction" id="currencyaction" >
            <div class="card-header " style="background-color: #343A40">
                <div id="danger-contained" style="float:left"></div>
                <h4 style="color: white;" id="card_currencytitle" class="card_currencytitle"> </h4>

            </div>
            <div class="card-body">
                <div class="row ">

                    @csrf
                    <div class="col-md-6">
                        <div class="form-group ">
                            <div class="ms-12 row pt-3">


                            </div>
                            <div class="dx-fieldset" id="CurGuid-container" hidden>
                                <div class="dx-field">
                                  <div class="dx-field-label">Currency Guid</div>
                                  <div class="dx-field-value">
                                    <div id="Cur_Guid"></div>
                                  </div>
                                  <span id="error_Cur_Guid" class="text-danger"></span>
                                </div>
                              </div>
                            <div class="dx-fieldset" id="CurName-container">
                                <div class="dx-field">
                                  <div class="dx-field-label">اسم العملة</div>
                                  <div class="dx-field-value">
                                    <div id="Cur_Name"></div>
                                  </div>
                                  <span id="error_Cur_Name" class="text-danger"></span>
                                </div>
                              </div>
                              <div class="dx-fieldset" id="CurCost-container">
                                <div class="dx-field">
                                  <div class="dx-field-label">القيمة</div>
                                  <div class="dx-field-value">
                                    <div id="Cur_Cost"></div>
                                  </div>
                                  <span id="error_Cur_Cost" class="text-danger"></span>
                                </div>
                              </div>
                              <hr>
                              <div id="btnSave" style="float:right"></div>

                        </div>
                    </div>


                </div>
            </div>
        </div>



    </div>


</div>


    <script type="text/javascript" src="{{url('assets/js/pro_js/currencies.js')}}"></script>
    <script>
        $("#currencyaction").hide();
    </script>
 @endSection()
