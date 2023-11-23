@extends('admin.layout.mainarabic')
{{-- @section('title', 'Saling Groups') --}}
@section('content')

<style>
    .custom-link {
        background-color: rgb(202, 237, 253);
        padding: 8px 16px;
        margin: 5px;
        text-align: center;
        font-size: 14px;
        border-radius: 4px;
        text-decoration: underline;
        color: blue;
        cursor: pointer;
    }
    .dx-datagrid .dx-data-row > td.bullet {
        padding-top: 0;
        padding-bottom: 0;
    }
</style>
<div class="row border g-0 rounded shadow-sm " >
    <div class="col p-4">
        <div class="col-md-12 mt-2">
            <div class="card " id="firstCard">
                <div class="card-header"   style="background-color: #343A40">

                    {{-- <button class="btn btn-primary btn-sm m-1 float-end MainStoreAdd">Add Main Store
                    </button>
                    <button class="btn btn-warning btn-sm m-1 float-end SalesGroupsEdit">Edit Store
                    </button> --}}

                    <h4 style="color: white;">مجموعة البيع</h4>

                </div>
                <div class="card-body">
                    {{-- <input type="search" name="searching" id="searching" class="form-control mb-3" placeholder="searching..."> --}}
                    <div class="datagrid" id="salegroupdatagrid">

                    </div>
                    <div id="pagerContainer"></div>
                    <div id="context-menu">

                    </div>

                </div>
            </div>
        </div>
        <div class="col-md-12 mt-5">
            <div class="card SalesGroupsaction" id="SalesGroupsaction" >
                <div class="card-header " style="background-color: #343A40">
                    <div id="danger-contained" style="float:left"></div>
                    <h4 style="color: white;" id="card_SalesGroupstitle" class="card_SalesGroupstitle"> </h4>

                </div>
                <div class="card-body">
                    <div class="row ">

                        @csrf
                        <div class="col-md-6">
                            <div class="form-group ">
                                <div class="ms-12 row pt-3">


                                </div>
                                <div class="dx-fieldset" id="GsGuid-container" hidden>
                                    <div class="dx-field">
                                      <div class="dx-field-label">GsGuid</div>
                                      <div class="dx-field-value">
                                        <div id="Gs_Guid"></div>
                                      </div>
                                      <span id="error_Gs_Guid" class="text-danger"></span>
                                    </div>
                                  </div>
                                <div class="dx-fieldset" id="GsName-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">اسم المجموعة</div>
                                      <div class="dx-field-value">
                                        <div id="Gs_Name"></div>
                                      </div>
                                      <span id="error_Gs_Name" class="text-danger"></span>
                                    </div>
                                  </div>

                                  <div class="dx-fieldset" id="Gs_State-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">الحالة</div>
                                      <div class="dx-field-value">
                                        <div id="Gs_State"></div>
                                      </div>
                                      <span id="error_Gs_State" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="GsRatio-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">نسبة البيع</div>
                                      <div class="dx-field-value">
                                        <div id="Gs_Ratio"></div>
                                      </div>
                                      <span id="error_Gs_Raio" class="text-danger"></span>
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
    <script type="text/javascript" src="{{url('assets/js/pro_js/salesGroups.js')}}"></script>



       <script>

            $("#SalesGroupsaction").hide();
        </script>


 @endSection()
