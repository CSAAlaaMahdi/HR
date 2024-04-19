@extends('admin.layout.mainarabic')
{{-- @section('title', 'Saling Groups') --}}
@section('content')
    <div class="row border g-0 rounded shadow-sm ">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card " id="firstCard">
                    <div class="card-header" style="background-color: #343A40">

                        <div id="btnNewAdd" style="float: right"></div>
                        <h4 style="color: white;float: right;margin-right: 35%">الاجازات</h4>

                    </div>
                    <div class="card-body">

                        <div class="datagrid" id="Vacationsdatagrid">

                        </div>
                        <div id="pagerContainer"></div>
                        <div id="context-menu">

                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <div class="card Vacationsaction" id="Vacationsaction">
                    <div class="card-header " style="background-color: #343A40">
                        <div id="danger-contained" style="float:left"></div>
                        <h4 style="color: white;" id="card_Vacationstitle" class="card_Vacationstitle"> </h4>

                    </div>
                    <div class="card-body">
                        <div class="row ">

                            @csrf
                            <div class="col-md-4">
                                <div class="dx-fieldset" id="Vacations-container" hidden>
                                    <div class="dx-field">
                                        <div class="dx-field-label">vcid </div>
                                        <div class="dx-field-value">
                                            <div id="vcid"></div>
                                        </div>
                                        <span id="error_vcid" class="text-danger"></span>
                                    </div>
                                </div>

                                <div class="dx-fieldset" id="Vacations-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">الاسم </div>
                                        <div class="dx-field-value">
                                            <div id="eid"></div>
                                        </div>
                                        <span id="error_eid" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Vacations-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">تاريخ الاجازة </div>
                                        <div class="dx-field-value">
                                            <div id="vdate"></div>
                                        </div>
                                        <span id="error_vdate" class="text-danger"></span>
                                    </div>
                                </div>
                            


                            </div>
                            <div class="col-md-4">
                                <div class="dx-fieldset" id="Vacations-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">نوع الاجازة </div>
                                        <div class="dx-field-value">
                                            <div id="vtid"></div>
                                        </div>
                                        <span id="error_vtid" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Vacations-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">رقم الكتاب   </div>
                                        <div class="dx-field-value">
                                            <div id="docno"></div>
                                        </div>
                                        <span id="error_docno" class="text-danger"></span>
                                    </div>
                                </div>


                            </div>

                            <div class="col-md-4">

                                <div class="dx-fieldset" id="Vacations-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label"> عدد الايام  </div>
                                        <div class="dx-field-value">
                                            <div id="nodays"></div>
                                        </div>
                                        <span id="error_nodays" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Vacations-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label"> تاريخ الكتاب   </div>
                                        <div class="dx-field-value">
                                            <div id="docdate"></div>
                                        </div>
                                        <span id="error_docdate" class="text-danger"></span>
                                    </div>
                                </div>
                          


                        </div>
                       
                    </div>
                    <div class="col-md-12">
                        <div class="col-md-4">

                            <div class="dx-fieldset" id="Vacations-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">نسخة مصورة  </div>
                                    <div class="dx-field-value">
                                        <div id="filepath"></div>
                                    </div>
                                    <span id="error_filepath" class="text-danger"></span>
                                </div>
                            </div>


                        </div>
                    </div>
                    <hr>
                    <div id="btnSave" style="float:right;margin-right:25px"></div>
                </div>



            </div>


        </div>
        <script type="text/javascript" src="{{ url('assets/js/pro_js/Vacations.js') }}"></script>



        <script>
            $("#Vacationsaction").hide();
        </script>
    @endSection()
