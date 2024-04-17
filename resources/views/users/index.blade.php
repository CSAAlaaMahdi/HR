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
                                        <div id="userid"></div>
                                      </div>
                                      <span id="error_userid" class="text-danger"></span>
                                    </div>
                                  </div>
                                <div class="dx-fieldset" id="Users-container">
                                    
                                    <div class="dx-field">
                                        <div class="dx-field-label">الاسم </div>
                                        <div class="dx-field-value">
                                          <div id="loginname"></div>
                                        </div>
                                        <span id="error_loginname" class="text-danger"></span>
                                      </div>
                                  </div>
                                  <div class="dx-fieldset" id="Users-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label"> اسم المستخدم</div>
                                      <div class="dx-field-value">
                                        <div id="username"></div>
                                      </div>
                                      <span id="error_username" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="Users-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">كلمة المرور </div>
                                      <div class="dx-field-value">
                                        <div id="pwd"></div>
                                      </div>
                                      <span id="error_pwd" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="Users-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">المستوى </div>
                                      <div class="dx-field-value">
                                        <div id="ulvl"></div>
                                      </div>
                                      <span id="error_ulvl" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="Users-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">القسم </div>
                                      <div class="dx-field-value">
                                        <div id="deptid"></div>
                                      </div>
                                      <span id="error_deptid" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="Users-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">userPassW  </div>
                                      <div class="dx-field-value">
                                        <div id="UserPassW"></div>
                                      </div>
                                      <span id="error_UserPassW" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="Users-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">teachno  </div>
                                      <div class="dx-field-value">
                                        <div id="teachno"></div>
                                      </div>
                                      <span id="error_teachno" class="text-danger"></span>
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
