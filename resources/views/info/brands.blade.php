@extends('admin.layout.mainarabic')
{{-- @section('title', 'Brands') --}}
@section('content')

    <div class="row border g-0 rounded shadow-sm ">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card " id="firstCard">
                    <div class="card-header"   style="background-color: #343A40">



                        <h4 style="color: white;">الماركات</h4>

                    </div>
                    <div class="card-body">

                        <div class="datagrid" id="branddatagrid">

                        </div>
                        <div id="pagerContainer"></div>
                        <div id="context-menu">

                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <div class="card brandaction" id="brandaction" >
                    <div class="card-header " style="background-color: #343A40">
                        <div id="danger-contained" style="float:left"></div>
                        <h4 style="color: white;" id="card_brandtitle" class="card_brandtitle"> </h4>

                    </div>
                    <div class="card-body">
                        <div class="row ">

                            @csrf
                            <div class="col-md-6">
                                <div class="form-group ">
                                    <div class="ms-12 row pt-3">


                                    </div>
                                    <div class="dx-fieldset" id="BGuid-container" hidden>
                                        <div class="dx-field">
                                          <div class="dx-field-label">BrandGuid</div>
                                          <div class="dx-field-value">
                                            <div id="B_Guid"></div>
                                          </div>
                                          <span id="error_B_Guid" class="text-danger"></span>
                                        </div>
                                      </div>
                                    <div class="dx-fieldset" id="BName-container">
                                        <div class="dx-field">
                                          <div class="dx-field-label">الماركة</div>
                                          <div class="dx-field-value">
                                            <div id="B_Name"></div>
                                          </div>
                                          <span id="error_B_Name" class="text-danger"></span>
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
        <script type="text/javascript" src="{{url('assets/js/pro_js/brands.js')}}"></script>
        <script>
            $("#brandaction").hide();
        </script>
    </div>
    @endSection()
