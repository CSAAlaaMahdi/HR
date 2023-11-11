@extends('admin.layout.mainarabic')
{{-- @section('title', 'Customer And Supplier') --}}
@section('content')


<div class="row border g-0 rounded shadow-sm " >
    <div class="col p-4">
        <div class="col-md-12 mt-2">
            <div class="card " id="firstCard">
                <div class="card-header"   style="background-color: #343A40">
                
                    <h4 style="color: white;">العملاء والمجهزون</h4>

                </div>
                <div class="card-body">
                    {{-- <input type="search" name="searching" id="searching" class="form-control mb-3" placeholder="searching..."> --}}
                    <div class="gridCustomerSupplier" id="gridCustomerSupplier">

                    </div>

                    <div id="context-menu">

                    </div>

                </div>
            </div>
        </div>
        <div class="col-md-12 mt-5">
            <div class="card CustomerSupplieraction" id="CustomerSupplieraction" >
                <div class="card-header " style="background-color: #343A40">
                    <div id="danger-contained" style="float:left"></div>
                    <h4 style="color: white;" id="card_CustomerSuppliertitle" class="card_CustomerSuppliertitle"> </h4>

                </div>
                <div class="card-body">
                    <div class="row">

                        @csrf
                        <div class="col-md-12 row flex">
                            <div class="col-md-6">
                                <div class="ms-12 row pt-3">

                                </div>
                                <div class="dx-fieldset" id="CsGuid-container" hidden>
                                    <div class="dx-field">
                                      <div class="dx-field-label">CsGuid</div>
                                      <div class="dx-field-value">
                                        <div id="Cs_Guid"></div>
                                      </div>
                                      <span id="error_Cs_Guid" class="text-danger"></span>
                                    </div>
                                  </div>
                                <div class="dx-fieldset" id="CsName-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">الاسم</div>
                                      <div class="dx-field-value">
                                        <div id="Cs_Name"></div>
                                      </div>
                                      <span id="error_Cs_Name" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="Cs_State-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">الحالة</div>
                                      <div class="dx-field-value">
                                        <div id="Cs_State"></div>
                                      </div>
                                      <span id="error_Cs_State" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="Cs_GroupSales-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">مجموعة البيع</div>
                                      <div class="dx-field-value">
                                        <div id="Cs_GroupSales"></div>
                                      </div>
                                      <span id="error_Cs_GroupSales" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="Cs_Account-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">الحساب الاب</div>
                                      <div class="dx-field-value">
                                        <div id="Cs_Account"></div>
                                      </div>
                                      <span id="error_Cs_Account" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="Cs_Type-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">نوع الحساب</div>
                                      <div class="dx-field-value">
                                        <div id="Cs_Type"></div>
                                      </div>
                                      <span id="error_Cs_Type" class="text-danger"></span>
                                    </div>
                                  </div>


                            </div>
                            <div class="col-md-6">

                                <div class="dx-fieldset" id="Cs_Address-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">العنوان</div>
                                      <div class="dx-field-value">
                                        <div id="Cs_Address"></div>
                                      </div>
                                      <span id="error_Cs_Address" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="Cs_Email-container" >
                                    <div class="dx-field">
                                      <div class="dx-field-label">البريد</div>
                                      <div class="dx-field-value">
                                        <div id="Cs_Email"></div>
                                      </div>
                                      <span id="error_Cs_Email" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="Cs_Mobile-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">موبايل</div>
                                      <div class="dx-field-value">
                                        <div id="Cs_Mobile"></div>
                                      </div>
                                      <span id="error_Cs_Mobile" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="Cs_Notes-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">ملاحظات</div>
                                      <div class="dx-field-value">
                                        <div id="Cs_Notes"></div>
                                      </div>
                                      <span id="error_Cs_Notes" class="text-danger"></span>
                                    </div>
                                  </div>

                            </div>
                        </div>
                        <hr>
                        <div id="btnSave" style="float:right"></div>

                    </div>
                </div>
            </div>



        </div>


    </div>
    <script type="text/javascript" src="{{url('assets/js/pro_js/CustomerSupplier.js')}}"></script>
    <script>
        $("#CustomerSupplieraction").hide();
    </script>


    @endSection()
