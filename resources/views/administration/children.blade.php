
@extends('admin.layout.mainarabic')
{{-- @section('title', 'Saling Groups') --}}
@section('content')
    <div class="row border g-0 rounded shadow-sm ">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card " id="firstCard">
                    <div class="card-header" style="background-color: #343A40">

                        <div id="btnNewAdd" style="float: right"></div>
                        <h4 style="color: white;float: right;margin-right: 35%">الاطفال</h4>

                    </div>
                    <div class="card-body">

                        <div class="datagrid" id="Childrendatagrid">

                        </div>
                        <div id="pagerContainer"></div>
                        <div id="context-menu">

                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <div class="card Childrenaction" id="Childrenaction">
                    <div class="card-header " style="background-color: #343A40">
                        <div id="danger-contained" style="float:left"></div>
                        <h4 style="color: white;" id="card_Childrentitle" class="card_Childrentitle"> </h4>

                    </div>
                    <div class="card-body">
                        <div class="row ">

                            @csrf
                            <div class="col-md-4">
                                <div class="dx-fieldset" id="Children-container" hidden>
                                    <div class="dx-field">
                                        <div class="dx-field-label">id </div>
                                        <div class="dx-field-value">
                                            <div id="id"></div>
                                        </div>
                                        <span id="error_id" class="text-danger"></span>
                                    </div>
                                </div>

                                <div class="dx-fieldset" id="Children-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">اسم الموظف </div>
                                        <div class="dx-field-value">
                                            <div id="eid"></div>
                                        </div>
                                        <span id="error_eid" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Children-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">تاريخ الولادة  </div>
                                        <div class="dx-field-value">
                                            <div id="chdob"></div>
                                        </div>
                                        <span id="error_chdob" class="text-danger"></span>
                                    </div>
                                </div>


                            </div>
                            <div class="col-md-4">
                                <div class="dx-fieldset" id="Children-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label"> الاسم   </div>
                                        <div class="dx-field-value">
                                            <div id="chname"></div>
                                        </div>
                                        <span id="error_chname" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Children-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">المهنة  </div>
                                        <div class="dx-field-value">
                                            <div id="csid"></div>
                                        </div>
                                        <span id="error_csid" class="text-danger"></span>
                                    </div>
                                </div>


                            </div>

                            <div class="col-md-4">

                                <div class="dx-fieldset" id="Children-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label"> الجنس </div>
                                        <div class="dx-field-value">
                                            <div id="chsex"></div>
                                        </div>
                                        <span id="error_chsex" class="text-danger"></span>
                                    </div>
                                </div>


                            </div>



                        </div>
                      
                        <div class="col-md-12">

                            <div class="col-md-4">

                                <div class="dx-fieldset" id="Children-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">نسخة مصورة </div>
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


        </div>
        <script type="text/javascript" src="{{ url('assets/js/pro_js/Children.js') }}"></script>



        <script>
            $("#Childrenaction").hide();
        </script>
    @endSection()
