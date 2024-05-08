@extends('admin.layout.mainarabic')
{{-- @section('title', 'Saling Groups') --}}
@section('content')
    <div class="row border g-0 rounded shadow-sm ">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card " id="firstCard">
                    <div class="card-header" style="background-color: #343A40">

                        <div id="btnNewAdd" style="float: right"></div>
                        <h4 style="color: white;float: right;margin-right: 35%">الاشراف</h4>

                    </div>
                    <div class="card-body">

                        <div class="datagrid" id="Supervisorsdatagrid">

                        </div>
                        <div id="pagerContainer"></div>
                        <div id="context-menu">

                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <div class="card Supervisorsaction" id="Supervisorsaction">
                    <div class="card-header " style="background-color: #343A40">
                        <div id="danger-contained" style="float:left"></div>
                        <h4 style="color: white;" id="card_Supervisorstitle" class="card_Supervisorstitle"> </h4>

                    </div>
                    <div class="card-body">
                        <div class="row ">

                            @csrf
                            <div class="col-md-4">
                                <div class="dx-fieldset" id="Supervisors-container" hidden>
                                    <div class="dx-field">
                                        <div class="dx-field-label">id </div>
                                        <div class="dx-field-value">
                                            <div id="id"></div>
                                        </div>
                                        <span id="error_id" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Supervisors-container" hidden>
                                    <div class="dx-field">
                                        <div class="dx-field-label">Guid </div>
                                        <div class="dx-field-value">
                                            <div id="Guid"></div>
                                        </div>
                                        <span id="error_Guid" class="text-danger"></span>
                                    </div>
                                </div>

                                <div class="dx-fieldset" id="Supervisors-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">اسم المشرف </div>
                                        <div class="dx-field-value">
                                            <div id="eid"></div>
                                        </div>
                                        <span id="error_eid" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Supervisors-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">رقم الكتاب  </div>
                                        <div class="dx-field-value">
                                            <div id="docno"></div>
                                        </div>
                                        <span id="error_docno" class="text-danger"></span>
                                    </div>
                                </div>


                            </div>
                            <div class="col-md-4">
                                <div class="dx-fieldset" id="Supervisors-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">الدرجة او الشهادة  </div>
                                        <div class="dx-field-value">
                                            <div id="sdeg"></div>
                                        </div>
                                        <span id="error_sdeg" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Supervisors-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">تاريخ الكتاب  </div>
                                        <div class="dx-field-value">
                                            <div id="docdate"></div>
                                        </div>
                                        <span id="error_docdate" class="text-danger"></span>
                                    </div>
                                </div>


                            </div>

                            <div class="col-md-4">

                                <div class="dx-fieldset" id="Supervisors-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label"> الاسماء  </div>
                                        <div class="dx-field-value">
                                            <div id="sname"></div>
                                        </div>
                                        <span id="error_sname" class="text-danger"></span>
                                    </div>
                                </div>


                            </div>

                           


                        </div>
                        <div class="col-md-12">
                            <div class="col-md-4">

                                <div class="dx-fieldset" id="Supervisors-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">نسخة مصورة  </div>
                                        <div class="dx-field-value">
                                            <div id="FilePath"></div>
                                        </div>
                                        <span id="error_FilePath" class="text-danger"></span>
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div class="col-md-12">
                            <div id="image-container">

                            </div>
                        </div>
                        <hr>
                        <div id="btnSave" style="float:right;margin-right:25px"></div>
                    </div>
                </div>



            </div>


        </div>
        <script type="text/javascript" src="{{ url('assets/js/pro_js/Supervisors.js') }}"></script>



        <script>
            $("#Supervisorsaction").hide();
        </script>
    @endSection()
