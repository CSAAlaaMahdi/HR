@extends('admin.layout.mainarabic')
{{-- @section('title', 'Saling Groups') --}}
@section('content')
    <div class="row border g-0 rounded shadow-sm ">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card " id="firstCard">
                    <div class="card-header" style="background-color: #343A40">

                        <div id="btnNewAdd" style="float: right"></div>
                        <h4 style="color: white;float: right;margin-right: 35%">المجموعات</h4>

                    </div>
                    <div class="card-body">

                        <div class="datagrid" id="UserGroupPermissionsdatagrid">

                        </div>
                        <div id="pagerContainer"></div>
                        <div id="context-menu">

                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <div class="card UserGroupPermissionsaction" id="UserGroupPermissionsaction">
                    <div class="card-header " style="background-color: #343A40">
                        <div id="danger-contained" style="float:left"></div>
                        <h4 style="color: white;" id="card_UserGroupPermissionstitle" class="card_UserGroupPermissionstitle"> </h4>

                    </div>
                    <div class="card-body">
                        <div class="row ">

                            @csrf
                            <div class="col-md-4">
                                <div class="dx-fieldset" id="UserGroupPermissions-container" hidden>
                                    <div class="dx-field">
                                        <div class="dx-field-label">id </div>
                                        <div class="dx-field-value">
                                            <div id="id"></div>
                                        </div>
                                        <span id="error_id" class="text-danger"></span>
                                    </div>
                                </div>
                              

                                <div class="dx-fieldset" id="UserGroupPermissions-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">اسم المجموعة </div>
                                        <div class="dx-field-value">
                                            <div id="GroupName"></div>
                                        </div>
                                        <span id="error_GroupName" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="UserGroupPermissions-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">حالة المجموعة  </div>
                                        <div class="dx-field-value">
                                            <div id="Status"></div>
                                        </div>
                                        <span id="error_Status" class="text-danger"></span>
                                    </div>
                                </div>


                            </div>
                                                 
                        <div class="col-md-12">
                            <div id="image-container" class="row"></div>
                        </div>

                        <hr>
                        <div id="btnSave" style="float:right;margin-right:25px"></div>
                    </div>
                </div>



            </div>


        </div>
        <script type="text/javascript" src="{{ url('assets/js/pro_js/UserGroupPermissions.js') }}"></script>



        <script>
            $("#UserGroupPermissionsaction").hide();
        </script>
    @endSection()
