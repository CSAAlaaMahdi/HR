@extends('admin.layout.mainarabic')
{{-- @section('title', 'Saling Groups') --}}
@section('content')
    <div class="row border g-0 rounded shadow-sm ">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card " id="firstCard">
                    <div class="card-header" style="background-color: #343A40">

                        <div id="btnNewAdd" style="float: right"></div>
                        <h4 style="color: white;float: right;margin-right: 35%">البحوث والنشر </h4>

                    </div>
                    <div class="card-body">

                        <div class="datagrid" id="Researchesdatagrid">

                        </div>
                        <div id="pagerContainer"></div>
                        <div id="context-menu">

                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <div class="card Researchesaction" id="Researchesaction">
                    <div class="card-header " style="background-color: #343A40">
                        <div id="danger-contained" style="float:left"></div>
                        <h4 style="color: white;" id="card_Researchestitle" class="card_Researchestitle"> </h4>

                    </div>
                    <div class="card-body">
                        <div class="row ">

                            @csrf
                            <div class="col-md-4">
                                <div class="dx-fieldset" id="Researches-container" hidden>
                                    <div class="dx-field">
                                        <div class="dx-field-label">rid </div>
                                        <div class="dx-field-value">
                                            <div id="rid"></div>
                                        </div>
                                        <span id="error_rid" class="text-danger"></span>
                                    </div>
                                </div>

                                <div class="dx-fieldset" id="Researches-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">نوع البحث  </div>
                                        <div class="dx-field-value">
                                            <div id="ResType"></div>
                                        </div>
                                        <span id="error_ResType" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Researches-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">تاريخ النشر   </div>
                                        <div class="dx-field-value">
                                            <div id="PubDate"></div>
                                        </div>
                                        <span id="error_PubDate" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Researches-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">Numb    </div>
                                        <div class="dx-field-value">
                                            <div id="Numb"></div>
                                        </div>
                                        <span id="error_Numb" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Researches-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">confName    </div>
                                        <div class="dx-field-value">
                                            <div id="ConfName"></div>
                                        </div>
                                        <span id="error_ConfName" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Researches-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">CiteScor    </div>
                                        <div class="dx-field-value">
                                            <div id="CiteScor"></div>
                                        </div>
                                        <span id="error_CiteScor" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Researches-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">ISSN    </div>
                                        <div class="dx-field-value">
                                            <div id="ISSN"></div>
                                        </div>
                                        <span id="error_ISSN" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Researches-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">Extaut    </div>
                                        <div class="dx-field-value">
                                            <div id="Extaut"></div>
                                        </div>
                                        <span id="error_Extaut" class="text-danger"></span>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-4">
                                <div class="dx-fieldset" id="Researches-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">عنوان البحث  </div>
                                        <div class="dx-field-value">
                                            <div id="Title"></div>
                                        </div>
                                        <span id="error_Title" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Researches-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">نوع المجلة  </div>
                                        <div class="dx-field-value">
                                            <div id="JournalType"></div>
                                        </div>
                                        <span id="error_JournalType" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Researches-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">Page    </div>
                                        <div class="dx-field-value">
                                            <div id="Page"></div>
                                        </div>
                                        <span id="error_Page" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Researches-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">ConfPlace    </div>
                                        <div class="dx-field-value">
                                            <div id="ConfPlace"></div>
                                        </div>
                                        <span id="error_ConfPlace" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Researches-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">ImpactFactor    </div>
                                        <div class="dx-field-value">
                                            <div id="ImpactFactor"></div>
                                        </div>
                                        <span id="error_ImpactFactor" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Researches-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">DOI    </div>
                                        <div class="dx-field-value">
                                            <div id="DOI"></div>
                                        </div>
                                        <span id="error_DOI" class="text-danger"></span>
                                    </div>
                                </div>

                            </div>

                            <div class="col-md-4">

                                <div class="dx-fieldset" id="Researches-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">اسم المجلة  </div>
                                        <div class="dx-field-value">
                                            <div id="JournalName"></div>
                                        </div>
                                        <span id="error_JournalName" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Researches-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label"> Jpos </div>
                                        <div class="dx-field-value">
                                            <div id="Jpos"></div>
                                        </div>
                                        <span id="error_Jpos" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Researches-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">Isconf    </div>
                                        <div class="dx-field-value">
                                            <div id="Isconf"></div>
                                        </div>
                                        <span id="error_Isconf" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Researches-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">Rtype    </div>
                                        <div class="dx-field-value">
                                            <div id="Rtype"></div>
                                        </div>
                                        <span id="error_Rtype" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Researches-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">JournalQuartile    </div>
                                        <div class="dx-field-value">
                                            <div id="JournalQuartile"></div>
                                        </div>
                                        <span id="error_JournalQuartile" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Researches-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">رابط البحث    </div>
                                        <div class="dx-field-value">
                                            <div id="Rlink"></div>
                                        </div>
                                        <span id="error_Rlink" class="text-danger"></span>
                                    </div>
                                </div>


                        </div>
                       
                    </div>
                   
                    <div class="col-md-12">
                        <div class="col-md-4">

                            <div class="dx-fieldset" id="Researches-container">
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
        <script type="text/javascript" src="{{ url('assets/js/pro_js/Researches.js') }}"></script>



        <script>
            $("#Researchesaction").hide();
        </script>
    @endSection()
