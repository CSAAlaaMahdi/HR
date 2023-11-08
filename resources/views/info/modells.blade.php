@extends('admin.layout.mainarabic')
{{-- @section('title', 'Models') --}}
@section('content')


<div class="col p-4">
    <div class="col-md-12 mt-2">
        <div class="card " id="firstCard">
            <div class="card-header"   style="background-color: #343A40">



                <h4 style="color: white;">الطراز </h4>

            </div>
            <div class="card-body">

                <div class="datagrid" id="modelsdatagrid">

                </div>

                <div id="context-menu">

                </div>
                <div id="notificationContainer"></div>

            </div>
        </div>
    </div>
    <div class="col-md-12 mt-5">
        <div class="card modelsaction" id="modelsaction" >
            <div class="card-header " style="background-color: #343A40">
                <div id="danger-contained" style="float:left"></div>
                <h4 style="color: white;" id="card_modelstitle" class="card_modelstitle"> </h4>

            </div>
            <div class="card-body">
                <div class="row ">

                    @csrf
                    <div class="col-md-6">
                        <div class="form-group ">
                            <div class="ms-12 row pt-3">


                            </div>
                            <div class="dx-fieldset" id="MGuid-container" hidden>
                                <div class="dx-field">
                                  <div class="dx-field-label">Model Guid</div>
                                  <div class="dx-field-value">
                                    <div id="M_Guid"></div>
                                  </div>
                                  <span id="error_M_Guid" class="text-danger"></span>
                                </div>
                              </div>
                            <div class="dx-fieldset" id="MName-container">
                                <div class="dx-field">
                                  <div class="dx-field-label">الطراز</div>
                                  <div class="dx-field-value">
                                    <div id="M_Name"></div>
                                  </div>
                                  <span id="error_M_Name" class="text-danger"></span>
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
<script type="text/javascript" src="{{url('assets/js/pro_js/modells.js')}}"></script>
    <script>
        $("#modelsaction").hide();
    </script>
    @endSection()
