@extends('admin.layout.mainarabic')
{{-- @section('title', 'Saling Groups') --}}
@section('content')
    <div class="row border g-0 rounded shadow-sm ">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card " id="firstCard">
                    <div class="card-header" style="background-color: #343A40">

                        <div id="btnNewAdd" style="float: right"></div>
                        <h4 style="color: white;float: right;margin-right: 35%">الشهادات</h4>

                    </div>
                    <div class="card-body">
                        {{-- <input type="search" name="searching" id="searching" class="form-control mb-3" placeholder="searching..."> --}}
                        <div class="datagrid" id="Certificationsdatagrid">

                        </div>
                        <div id="pagerContainer"></div>
                        <div id="context-menu">

                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <div class="card Certificationsaction" id="Certificationsaction">
                    <div class="card-header " style="background-color: #343A40">
                        <div id="danger-contained" style="float:left"></div>
                        <h4 style="color: white;" id="card_Certificationstitle" class="card_Certificationstitle"> </h4>

                    </div>
                    <div class="card-body">
                        <div class="row ">

                            @csrf
                            <div class="col-md-4">
                                <div class="dx-fieldset" id="Certification-container" hidden>
                                    <div class="dx-field">
                                        <div class="dx-field-label">cid </div>
                                        <div class="dx-field-value">
                                            <div id="cid"></div>
                                        </div>
                                        <span id="error_cid" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Certification-container" hidden>
                                    <div class="dx-field">
                                        <div class="dx-field-label">Guid </div>
                                        <div class="dx-field-value">
                                            <div id="Guid"></div>
                                        </div>
                                        <span id="error_Guid" class="text-danger"></span>
                                    </div>
                                </div>

                                <div class="dx-fieldset" id="Certification-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">الاسم </div>
                                        <div class="dx-field-value">
                                            <div id="eid"></div>
                                        </div>
                                        <span id="error_eid" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Certification-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">الجامعة </div>
                                        <div class="dx-field-value">
                                            <div id="university"></div>
                                        </div>
                                        <span id="error_university" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Certification-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">الاختصاص العام </div>
                                        <div class="dx-field-value">
                                            <div id="gspetailest"></div>
                                        </div>
                                        <span id="error_gspetailest" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Certification-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">تاريخ الشهادة </div>
                                        <div class="dx-field-value">
                                            <div id="cerdate"></div>
                                        </div>
                                        <span id="error_cerdate" class="text-danger"></span>
                                    </div>
                                </div>

                            </div>


                            <div class="col-md-4">
                                <div class="dx-fieldset" id="Certification-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">الشهادة </div>
                                        <div class="dx-field-value">
                                            <div id="certification"></div>
                                        </div>
                                        <span id="error_certification" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Certification-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">الدولة </div>
                                        <div class="dx-field-value">
                                            <div id="country"></div>
                                        </div>
                                        <span id="error_country" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Certification-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">الاختصاص الدقيق </div>
                                        <div class="dx-field-value">
                                            <div id="sspetailest"></div>
                                        </div>
                                        <span id="error_sspetailest" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Certification-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">رقم شهادة المعادلة </div>
                                        <div class="dx-field-value">
                                            <div id="equivlent_no"></div>
                                        </div>
                                        <span id="error_equivlent_no" class="text-danger"></span>
                                    </div>
                                </div>


                            </div>




                            <div class="col-md-4">

                                <div class="dx-fieldset" id="Certification-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">الكلية </div>
                                        <div class="dx-field-value">
                                            <div id="college"></div>
                                        </div>
                                        <span id="error_college" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Certification-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">السنة </div>
                                        <div class="dx-field-value">
                                            <div id="cyears"></div>
                                        </div>
                                        <span id="error_cyears" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Certification-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">رقم الشهادة </div>
                                        <div class="dx-field-value">
                                            <div id="cer_no"></div>
                                        </div>
                                        <span id="error_cer_no" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Certification-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">تاريخ شهادة المعادلة </div>
                                        <div class="dx-field-value">
                                            <div id="equivlent_date"></div>
                                        </div>
                                        <span id="error_equivlent_date" class="text-danger"></span>
                                    </div>
                                </div>

                            </div>

                            <hr>
                            
                        </div>
                        <div class="col-md-12">
                            <div class="dx-fieldset" id="Certification-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">نسخة مصورة </div>
                                    <div class="dx-field-value">
                                        <div id="FilePath"></div>
                                    </div>
                                    <span id="error_FilePath" class="text-danger"></span>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div id="image-container">
                                
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="col-md-4">
                                <div id="btnSave" style="float:right;margin-right:25px"></div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>


        </div>
        <script type="text/javascript" src="{{ url('assets/js/pro_js/Certifications.js') }}"></script>



        <script>
            $("#Certificationsaction").hide();
        </script>
    @endSection()
