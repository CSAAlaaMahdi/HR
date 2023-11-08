@extends('admin.layout.mainarabic')
{{-- @section('title', 'Items Tree') --}}
@section('content')

<div class="row border g-0 rounded shadow-sm ">
    <div class="col p-4">
        <div class="col-md-12 mt-2">
            <div class="card " id="firstCard">
                <div class="card-header bg-dark">

                    <h4 style="color: white;">شجرة المواد</h4>

                </div>
                <div class="card-body">

                    <div  id="itemTree">

                    </div>
                    <div id="Popup"></div>
                    <div id="context-menu">

                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12 mt-5">
            <div class="card ItemsTreeaction" id="ItemsTreeaction">
                <div class="card-header bg-dark">
                    <div id="danger-contained" style="float:left"></div>
                    <h4 style="color: white;" id="card_ItemsTreetitle" class="card_ItemsTreetitle"> </h4>

                </div>
                <div class="card-body ">
                    <div class="row ">

                        @csrf
                        <div class="col-md-6 ">
                            <div class="dx-fieldset" id="IT_ID-container" hidden>
                                <div class="dx-field">
                                  <div class="dx-field-label">IT_ID</div>
                                  <div class="dx-field-value">
                                    <div id="IT_ID"></div>
                                  </div>
                                  <span id="error_IT_ID" class="text-danger"></span>
                                </div>
                              </div>
                            <div class="dx-fieldset" id="IT_Name-container">
                                <div class="dx-field">
                                  <div class="dx-field-label">اسم المادة</div>
                                  <div class="dx-field-value">
                                    <div id="IT_Name"></div>
                                  </div>
                                  <span id="error_IT_Name" class="text-danger"></span>
                                </div>
                              </div>
                              <div class="dx-fieldset" id="IT_ParentID-container">
                                <div class="dx-field">
                                  <div class="dx-field-label">المجموعة</div>
                                  <div class="dx-field-value">
                                    <div id="IT_ParentID"></div>
                                  </div>
                                  <span id="error_IT_ParentID" class="text-danger"></span>
                                </div>
                              </div>
                              <div class="dx-fieldset" id="IT_Code-container">
                                <div class="dx-field">
                                  <div class="dx-field-label">كود المادة</div>
                                  <div class="dx-field-value">
                                    <div id="IT_Code"></div>
                                  </div>
                                  <span id="error_IT_Code" class="text-danger"></span>
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
    <script type="text/javascript" src="{{url('assets/js/pro_js/itemsTree.js')}}"></script>
    <script>
        $("#ItemsTreeaction").hide();
    </script>


    @endSection()
