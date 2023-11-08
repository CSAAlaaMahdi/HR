@extends('admin.layout.mainarabic')
{{-- @section('title', 'Accounts Tree') --}}
@section('content')

<div class="row border g-0 rounded shadow-sm ">
    <div class="col p-4">
        <div class="col-md-12 mt-2">
            <div class="card" id="firstCard">
                <div class="card-header bg-dark">



                    <h4 style="color: white;"> شجرة الحسابات </h4>

                </div>
                <div class="card-body">

                    <div id="app-container">
                        <div id="tree-list"></div>
                        <div id="context-menu"></div>
                        <p id="selected-employee"></p>
                    </div>

                </div>
            </div>
        </div>
        <div class="col-md-12 mt-5">
            <div class="card accounttreeaction" id="accounttreeaction">
                <div class="card-header bg-dark">
                    <div id="danger-contained" style="float:left"></div>
                    <h4 style="color: white;" id="card_accounttreetitle" class="card_accounttreetitle"> </h4>

                </div>
                <div class="card-body ">
                    <div class="row ">

                        @csrf
                        <div class="col-md-12 row flex">
                            <div class="col-md-6 ">
                                <div class="dx-fieldset" id="AcGuid-container" hidden>
                                    <div class="dx-field">
                                      <div class="dx-field-label">AccountGuid</div>
                                      <div class="dx-field-value">
                                        <div id="Ac_Guid"></div>
                                      </div>
                                      <span id="error_Ac_Guid" class="text-danger"></span>
                                    </div>
                                  </div>
                                <div class="dx-fieldset" id="AcName-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">اسم الحساب</div>
                                      <div class="dx-field-value">
                                        <div id="Ac_Name"></div>
                                      </div>
                                      <span id="error_Ac_Name" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="Ac_ParentAccount-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">الحساب الاب</div>
                                      <div class="dx-field-value">
                                        <div id="Ac_ParentAccount"></div>
                                      </div>
                                      <span id="error_Ac_ParentAccount" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="Ac_Code-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">كود الحساب</div>
                                      <div class="dx-field-value">
                                        <div id="Ac_Code"></div>
                                      </div>
                                      <span id="error_Ac_Code" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <hr>
                                  <div id="btnSave" style="float:right"></div>
                            </div>
                            <div class="col-md-6 ">

                            </div>
                        </div>


                    </div>
                </div>
            </div>



        </div>

    </div>
    <script type="text/javascript" src="{{url('assets/js/pro_js/accountstree.js')}}"></script>
    <script>
        $("#accounttreeaction").hide();
    </script>
 <script>

</script>

    @endSection()
