@extends('admin.layout.mainarabic')
{{-- @section('title', 'Countries') --}}
@section('content')

<div class="col p-4">
    <div class="col-md-12 mt-2">
        <div class="card " id="firstCard">
            <div class="card-header"   style="background-color: #343A40">



                <h4 style="color: white;">الدول</h4>

            </div>
            <div class="card-body">

                <div class="datagrid" id="countrydatagrid">

                </div>

                <div id="context-menu">

                </div>
                <div id="notificationContainer"></div>

            </div>
        </div>
    </div>
    <div class="col-md-12 mt-5">
        <div class="card countryaction" id="countryaction" >
            <div class="card-header " style="background-color: #343A40">
                <div id="danger-contained" style="float:left"></div>
                <h4 style="color: white;" id="card_countrytitle" class="card_countrytitle"> </h4>

            </div>
            <div class="card-body">
                <div class="row ">

                    @csrf
                    <div class="col-md-6">
                        <div class="form-group ">
                            <div class="ms-12 row pt-3">


                            </div>
                            <div class="dx-fieldset" id="CGuid-container" hidden>
                                <div class="dx-field">
                                  <div class="dx-field-label">country Guid</div>
                                  <div class="dx-field-value">
                                    <div id="C_Guid"></div>
                                  </div>
                                  <span id="error_C_Guid" class="text-danger"></span>
                                </div>
                              </div>
                            <div class="dx-fieldset" id="CName-container">
                                <div class="dx-field">
                                  <div class="dx-field-label">اسم الدولة</div>
                                  <div class="dx-field-value">
                                    <div id="C_Name"></div>
                                  </div>
                                  <span id="error_C_Name" class="text-danger"></span>
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

    <script type="text/javascript" src="{{url('assets/js/pro_js/countries.js')}}"></script>
    <script>
        $("#countryaction").hide();
    </script>

    @endSection()
