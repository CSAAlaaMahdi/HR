@extends('admin.layout.mainarabic')
{{-- @section('title', 'UsersGroups') --}}
@section('content')
    <div class="row border g-0 rounded shadow-sm ">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card " id="firstCard">

                    <div class="card-header" style="background-color: #343A40">
                        <div id="btnAddNew" style="float:right"></div>
                        <h4 style="color: white;margin-right:40%">مجموعة الصلاحيات</h4>

                    </div>
                    <div class="card-body">

                        <div class="datagrid" id="UsersGroupsdatagrid">
                        </div>

                    </div>

                </div>
            </div>
        </div>
        <div class="col-md-12 mt-5">
            <div class="card UsersGroupsaction" id="UsersGroupsaction">
                <div class="card-header " style="background-color: #343A40">
                    <div id="danger-contained" style="float:left"></div>
                    <h4 style="color: white;" id="card_UsersGroupstitle" class="card_UsersGroupstitle"> </h4>

                </div>
                <div class="card-body">
                    <div class="row ">

                        @csrf
                        <div class="col-md-6">
                            <div class="form-group ">
                                <div class="ms-12 row pt-3">


                                </div>
                                <div class="dx-fieldset" id="UsersGroups-container" hidden>
                                    <div class="dx-field">
                                        <div class="dx-field-label">UserGroupGuid</div>
                                        <div class="dx-field-value">
                                            <div id="UG_Guid"></div>
                                        </div>
                                        <span id="error_UG_Guid" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="UsersGroups-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">اسم المجموعة </div>
                                        <div class="dx-field-value">
                                            <div id="UG_Name"></div>
                                        </div>
                                        <span id="error_UG_Name" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="UsersGroups-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">حالة المجموعة</div>
                                        <div class="dx-field-value">
                                            <div id="UG_State"></div>
                                        </div>
                                        <span id="error_UG_State" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="UsersGroups-container" hidden>
                                    <div class="dx-field">
                                        <div class="dx-field-label">التسلسل </div>
                                        <div class="dx-field-value">
                                            <div id="UG_RowID"></div>
                                        </div>
                                        <span id="error_UG_RowID" class="text-danger"></span>
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
    <script type="text/javascript" src="{{ url('assets/js/pro_js/UsersGroups.js') }}"></script>
    <script>
        $("#UsersGroupsaction").hide();
    </script>
    </div>
@endSection()
