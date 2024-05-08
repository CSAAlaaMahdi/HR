@extends('admin.layout.mainarabic')
{{-- @section('title', 'Saling Groups') --}}
@section('content')
    <div class="row border g-0 rounded shadow-sm ">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card " id="firstCard">
                    <div class="card-header" style="background-color: #343A40">

                        <div id="btnNewAdd" style="float: right"></div>
                        <h4 style="color: white;float: right;margin-right: 35%">العناوين  الوظيفية</h4>

                    </div>
                    <div class="card-body">
                        
                        <div class="datagrid" id="Jobdatagrid">

                        </div>
                        <div id="pagerContainer"></div>
                        <div id="context-menu">

                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <div class="card Jobaction" id="Jobaction">
                    <div class="card-header " style="background-color: #343A40">
                        <div id="danger-contained" style="float:left"></div>
                        <h4 style="color: white;" id="card_Jobtitle" class="card_Jobtitle"> </h4>

                    </div>
                    <div class="card-body">
                        <div class="row ">

                            @csrf
                            <div class="col-md-4">
                                <div class="dx-fieldset" id="Job-container" hidden>
                                    <div class="dx-field">
                                        <div class="dx-field-label">jid </div>
                                        <div class="dx-field-value">
                                            <div id="jid"></div>
                                        </div>
                                        <span id="error_jid" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Job-container" hidden>
                                    <div class="dx-field">
                                        <div class="dx-field-label">Guid </div>
                                        <div class="dx-field-value">
                                            <div id="Guid"></div>
                                        </div>
                                        <span id="error_Guid" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Job-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">الاسم </div>
                                        <div class="dx-field-value">
                                            <div id="eid"></div>
                                        </div>
                                        <span id="error_eid" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Job-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">المرحلة </div>
                                        <div class="dx-field-value">
                                            <div id="jstage"></div>
                                        </div>
                                        <span id="error_jstage" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Job-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">تاريخ الكتاب </div>
                                        <div class="dx-field-value">
                                            <div id="docdate"></div>
                                        </div>
                                        <span id="error_docdate" class="text-danger"></span>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-4">
                                <div class="dx-fieldset" id="Job-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">العنوان الوظيفي  </div>
                                        <div class="dx-field-value">
                                            <div id="jtitle"></div>
                                        </div>
                                        <span id="error_jtitle" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Job-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">تاريخ الحصول على الدرجة </div>
                                        <div class="dx-field-value">
                                            <div id="getdate"></div>
                                        </div>
                                        <span id="error_getdate" class="text-danger"></span>
                                    </div>
                                </div>


                            </div>

                            <div class="col-md-4">

                                <div class="dx-fieldset" id="Job-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">الدرجة  </div>
                                        <div class="dx-field-value">
                                            <div id="jdegree"></div>
                                        </div>
                                        <span id="error_jdegree" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Job-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">رقم الكتاب </div>
                                        <div class="dx-field-value">
                                            <div id="docno"></div>
                                        </div>
                                        <span id="error_docno" class="text-danger"></span>
                                    </div>
                                </div>

                            </div>
                           
                           
                            
                           
                        </div>
                        <hr>
                        <div class="col-md-12">
                            <div class="col-md-4">

                                <div class="dx-fieldset" id="Job-container">
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
                        <div id="btnSave" style="float:right;margin-right:25px"></div>
                    </div>


                </div>



            </div>


        </div>
        <script type="text/javascript" src="{{ url('assets/js/pro_js/Job.js') }}"></script>



        <script>
            $("#Jobaction").hide();
        </script>
    @endSection()
