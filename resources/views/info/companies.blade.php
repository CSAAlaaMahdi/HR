@extends('admin.layout.mainarabic')
{{-- @section('title', 'Companies') --}}
@section('content')
<style>
    /* Define a custom CSS class for the custom notification */
    .custom-notification {
      background-color: #ffcc00;
      color: #333;
      font-size: 16px;
      /* Add any other custom styles you want */
      border: 1px solid #333;
      padding: 10px;
      width: 300px;
    }
  </style>
<div class="row border g-0 rounded shadow-sm ">
    <div class="col p-4">
        <div class="col-md-12 mt-2">
            <div class="card " id="firstCard">
                <div class="card-header"   style="background-color: #343A40">



                    <h4 style="color: white;">الشركات</h4>

                </div>
                <div class="card-body">

                    <div class="datagrid" id="companydatagrid">

                    </div>

                    <div id="context-menu">

                    </div>
                    

                </div>
            </div>
        </div>
        <div class="col-md-12 mt-5">
            <div class="card companyaction" id="companyaction" >
                <div class="card-header " style="background-color: #343A40">
                    <div id="danger-contained" style="float:left"></div>
                    <h4 style="color: white;" id="card_companytitle" class="card_companytitle"> </h4>

                </div>
                <div class="card-body">
                    <div class="row ">

                        @csrf
                        <div class="col-md-6">
                            <div class="form-group ">
                                <div class="ms-12 row pt-3">


                                </div>
                                <div class="dx-fieldset" id="ComGuid-container" hidden>
                                    <div class="dx-field">
                                      <div class="dx-field-label">companyGuid</div>
                                      <div class="dx-field-value">
                                        <div id="Com_Guid"></div>
                                      </div>
                                      <span id="error_Com_Guid" class="text-danger"></span>
                                    </div>
                                  </div>
                                <div class="dx-fieldset" id="ComName-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">اسم الشركة</div>
                                      <div class="dx-field-value">
                                        <div id="Com_Name"></div>
                                      </div>
                                      <span id="error_Com_Name" class="text-danger"></span>
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
    <script type="text/javascript" src="{{url('assets/js/pro_js/companies.js')}}"></script>
    <script>
        $("#companyaction").hide();
    </script>
</div>
    @endSection()
