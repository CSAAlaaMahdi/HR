@extends('admin.layout.mainarabic')
{{-- @section('title', 'Units') --}}
@section('content')

<div class="row border g-0 rounded shadow-sm ">
    <div class="col p-4">
        <div class="col-md-12 mt-2">
            <div class="card " id="firstCard">
                <div class="card-header"   style="background-color: #343A40">



                    <h4 style="color: white;">الوحدات</h4>

                </div>
                <div class="card-body">

                    <div class="datagrid" id="Unitsdatagrid">

                    </div>
                    <div id="pagerContainer"></div>
                    <div id="context-menu">

                    </div>

                </div>
            </div>
        </div>
        <div class="col-md-12 mt-5">
            <div class="card Unitsaction" id="Unitsaction" >
                <div class="card-header " style="background-color: #343A40">
                    <div id="danger-contained" style="float:left"></div>
                    <h4 style="color: white;" id="card_Unitstitle" class="card_Unitstitle"> </h4>

                </div>
                <div class="card-body">
                    <div class="row ">

                        @csrf
                        <div class="col-md-6">
                            <div class="form-group ">
                                <div class="ms-12 row pt-3">


                                </div>
                                <div class="dx-fieldset" id="UiGuid-container" hidden>
                                    <div class="dx-field">
                                      <div class="dx-field-label">UnitGuid</div>
                                      <div class="dx-field-value">
                                        <div id="Ui_Guid"></div>
                                      </div>
                                      <span id="error_Ui_Guid" class="text-danger"></span>
                                    </div>
                                  </div>
                                <div class="dx-fieldset" id="UiName-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">اسم الوحدة</div>
                                      <div class="dx-field-value">
                                        <div id="Ui_Name"></div>
                                      </div>
                                      <span id="error_Ui_Name" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="UiPiece-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">القطعة</div>
                                      <div class="dx-field-value">
                                        <div id="Ui_Piece"></div>
                                      </div>
                                      <span id="error_Ui_Piece" class="text-danger"></span>
                                    </div>
                                  </div>
                                  <div class="dx-fieldset" id="UiPieceType-container">
                                    <div class="dx-field">
                                      <div class="dx-field-label">نوع القطعة</div>
                                      <div class="dx-field-value">
                                        <div id="Ui_PieceType"></div>
                                      </div>
                                      <span id="error_Ui_PieceType" class="text-danger"></span>
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
    <script type="text/javascript" src="{{url('assets/js/pro_js/units.js')}}"></script>
    <script>
        $("#Unitsaction").hide();
    </script>
</div>

    @endSection()
