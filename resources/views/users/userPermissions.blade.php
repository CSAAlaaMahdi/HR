@extends('admin.layout.mainarabic')
@section('content')
    <div class="row border g-0 rounded shadow-sm ">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card " id="firstCard">
                    <div class="card-header" style="background-color: #343A40">
                        <div id="btnNewAdd" style="float: right"></div>
                        <h4 style="color: white;float: right;margin-right: 40%">صلاحيات المجموعة</h4>

                    </div>
                    <div class="card-body">

                        <div class="datagrid" id="UserPermissionsdatagrid">

                        </div>


                    </div>

                </div>
            </div>
        </div>
        <div class="col-md-12 mt-5">
            <div class="card UserPermissionsaction" id="UserPermissionsaction">
                <div class="card-header " style="background-color: #343A40">
                    <div id="danger-contained" style="float:left"></div>
                    <h4 style="color: white;" id="card_UserPermissionstitle" class="card_UserPermissionstitle"> </h4>

                </div>
                <div class="card-body">
                    <div class="row ">

                        @csrf
                        <div class="col-md-6">
                            <div class="form-group ">
                                <div class="ms-12 row pt-3">


                                </div>
                                <div class="dx-fieldset" id="UserPermissions-container" hidden>
                                    <div class="dx-field">
                                        <div class="dx-field-label">id</div>
                                        <div class="dx-field-value">
                                            <div id="id"></div>
                                        </div>
                                        <span id="error_id" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="UserPermissions-container">

                                    <div class="dx-field">
                                        <div class="dx-field-label">المجموعة </div>
                                        <div class="dx-field-value">
                                            <div id="GroupID"></div>
                                        </div>
                                        <span id="error_GroupID" class="text-danger"></span>
                                    </div>
                                </div>

                                <div id="btnAddPermissions" style="float:right"></div>
                                <hr style="background-color: orangered">




                            </div>
                        </div>
                        <div class="col-md-12">
                          <div class="datagrid" id="UserPermissionsdatagrid2">

                          </div>
                        </div>

                        <div class="col-md-12 pt-5">
                          <hr style="background-color: orangered">
                          <div id="btnSave" style="float:right"></div>
                        </div>


                    </div>
                </div>
            </div>



        </div>


    </div>
    <script type="text/javascript" src="{{ url('assets/js/pro_js/UserPermissions.js') }}"></script>
    <script>
        $("#UserPermissionsaction").hide();
    </script>
    </div>
@endSection()
