@extends('admin.layout.mainarabic')
{{-- @section('title', 'دليل المخازن') --}}
@section('content')

<div class="row border g-0 rounded shadow-sm " >
    <div class="col p-4">
        <div class="col-md-12 mt-2">
            <div class="card " id="firstCard">
                <div class="card-header"   style="background-color: #343A40">

                    {{-- <button class="btn btn-primary btn-sm m-1 float-end MainStoreAdd">Add Main Store
                    </button>
                    <button class="btn btn-warning btn-sm m-1 float-end StoriesTreeEdit">Edit Store
                    </button> --}}

                    <h4 style="color: white;">المخازن والمستودعات</h4>

                </div>
                <div class="card-body">
                    {{-- <input type="search" name="searching" id="searching" class="form-control mb-3" placeholder="searching..."> --}}
                    <div class="tree">

                    </div>
                    <div id ="Popup">

                    </div>
                    <div id="context-menu">

                    </div>

                </div>
            </div>
        </div>
        <div class="col-md-12 mt-5">
            <div class="card StoriesTreeaction" id="StoriesTreeaction" >
                <div class="card-header " style="background-color: #343A40">
                    <div id="danger-contained" style="float:left"></div>
                    <h4 style="color: white;" id="card_StoriesTreetitle" class="card_StoriesTreetitle"> </h4>

                </div>
                <div class="card-body">
                    <div class="row ">

                        @csrf
                        <div class="col-md-6">
                            <div class="form-group ">
                                <div class="ms-12 row pt-3">


                                </div>
                                <div class="dx-fieldset" id="StGuid-container" hidden>
                                    <div class="dx-field">
                                      <div class="dx-field-label">StoreGuid</div>
                                      <div class="dx-field-value">
                                        <div id="St_Guid"></div>
                                      </div>
                                      <span id="error_St_Guid" class="text-danger"></span>
                                    </div>
                                  </div>
                                <div class="dx-fieldset" id="StName-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">اسم المخزن</div>
                                      <div class="dx-field-value">
                                        <div id="St_Name"></div>
                                      </div>
                                      <span id="error_St_Code" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="St_ParentStore-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">الاب</div>
                                      <div class="dx-field-value">
                                        <div id="St_ParentStore"></div>
                                      </div>
                                      <span id="error_St_ParentStore" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="St_Code-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">كود المخزن</div>
                                      <div class="dx-field-value">
                                        <div id="St_Code"></div>
                                      </div>
                                      <span id="error_St_Code" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="St_Address-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">العنوان</div>
                                      <div class="dx-field-value">
                                        <div id="St_Address"></div>
                                      </div>
                                      <span id="error_St_Address" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="St_Account-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">الحساب</div>
                                      <div class="dx-field-value">
                                        <div id="St_Account"></div>
                                      </div>
                                      <span id="error_St_Account" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="St_StockKeeper-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">امين المخزن</div>
                                      <div class="dx-field-value">
                                        <div id="St_StockKeeper"></div>
                                      </div>
                                      <span id="error_St_StockKeeper" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="St_State-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">حالة المخزن</div>
                                      <div class="dx-field-value">
                                        <div id="St_State"></div>
                                      </div>
                                      <span id="error_St_State" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="St_IsGroup-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">مجموعة</div>
                                      <div class="dx-field-value">
                                        <div id="St_IsGroup"></div>
                                      </div>
                                      <span id="error_St_IsGroup" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="St_Notes-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">ملاحظات</div>
                                      <div class="dx-field-value">
                                        <div id="St_Notes"></div>
                                      </div>
                                      <span id="error_St_Notes" class="text-danger"></span>
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
    <script type="text/javascript" src="{{url('assets/js/pro_js/storiesTree.js')}}"></script>
    <script>
        $("#StoriesTreeaction").hide();
    </script>


    @endSection()
