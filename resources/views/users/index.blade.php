@extends('admin.layout.mainarabic')
@section('content')
<div class="row border g-0 rounded shadow-sm ">
    <div class="col p-4">
        <div class="col-md-12 mt-2">
            <div class="card " id="firstCard">
                <div class="card-header"   style="background-color: #343A40">
                    <div id="btnNewAdd" style="float: right"></div>
                    <h4 style="color: white;float: right;margin-right: 40%">المستخدمون</h4>

                </div>
                <div class="card-body">

                    <div class="datagrid" id="Usersdatagrid">

                    </div>
                    <div id="pagerContainer"></div>
                    <div id="context-menu">

                    </div>

                </div>
            </div>
        </div>
        <div class="col-md-12 mt-5">
            <div class="card Usersaction" id="Usersaction" >
                <div class="card-header " style="background-color: #343A40">
                    <div id="danger-contained" style="float:left"></div>
                    <h4 style="color: white;" id="card_Userstitle" class="card_Userstitle"> </h4>

                </div>
                <div class="card-body">
                    <div class="row ">

                        @csrf
                        <div class="col-md-6">
                            <div class="form-group ">
                                <div class="ms-12 row pt-3">


                                </div>
                                <div class="dx-fieldset" id="Users-container" hidden>
                                    <div class="dx-field">
                                      <div class="dx-field-label">UserGuid</div>
                                      <div class="dx-field-value">
                                        <div id="U_Guid"></div>
                                      </div>
                                      <span id="error_U_Guid" class="text-danger"></span>
                                    </div>
                                  </div>
                                <div class="dx-fieldset" id="Users-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">البريد الالكتروني</div>
                                      <div class="dx-field-value">
                                        <div id="U_Email"></div>
                                      </div>
                                      <span id="error_U_Email" class="text-danger"></span>
                                    </div>
                                    <div class="dx-field">
                                        <div class="dx-field-label">الاسم </div>
                                        <div class="dx-field-value">
                                          <div id="U_Name"></div>
                                        </div>
                                        <span id="error_U_Name" class="text-danger"></span>
                                      </div>
                                  </div>
                                  <div class="dx-fieldset" id="Users-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">كلمة المرور</div>
                                      <div class="dx-field-value">
                                        <div id="U_Password"></div>
                                      </div>
                                      <span id="error_U_Password" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="Users-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">الحالة </div>
                                      <div class="dx-field-value">
                                        <div id="U_State"></div>
                                      </div>
                                      <span id="error_U_State" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="Users-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">القسم </div>
                                      <div class="dx-field-value">
                                        <div id="U_Department"></div>
                                      </div>
                                      <span id="error_U_Department" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="Users-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">المجموعة </div>
                                      <div class="dx-field-value">
                                        <div id="U_PermissionsGroup"></div>
                                      </div>
                                      <span id="error_U_PermissionsGroup" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="Users-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">صورة شخصية </div>
                                      <div class="dx-field-value">
                                        <div id="U_Image"></div>
                                      </div>
                                      <span id="error_U_Image" class="text-danger"></span>
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
    <script type="text/javascript" src="{{url('assets/js/pro_js/users.js')}}"></script>
    <script>
        $("#Usersaction").hide();
    </script>
</div>

    @endSection()
