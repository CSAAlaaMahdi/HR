@extends('admin.layout.mainarabic')
{{-- @section('title', 'Saling Groups') --}}
@section('content')
    <div class="row border g-0 rounded shadow-sm ">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card " id="firstCard">
                    <div class="card-header" style="background-color: #343A40">

                        <div id="btnNewAdd" style="float: right"></div>
                        <h4 style="color: white;float: right;margin-right: 35%">المقالات</h4>

                    </div>
                    <div class="card-body">

                        <div class="datagrid" id="Articlesdatagrid">

                        </div>
                        <div id="pagerContainer"></div>
                        <div id="context-menu">

                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <div class="card Articlesaction" id="Articlesaction">
                    <div class="card-header " style="background-color: #343A40">
                        <div id="danger-contained" style="float:left"></div>
                        <h4 style="color: white;" id="card_Articlestitle" class="card_Articlestitle"> </h4>

                    </div>
                    <div class="card-body">
                        <div class="row ">

                            @csrf
                            <div class="col-md-4">
                                <div class="dx-fieldset" id="Articles-container" hidden>
                                    <div class="dx-field">
                                        <div class="dx-field-label">id </div>
                                        <div class="dx-field-value">
                                            <div id="id"></div>
                                        </div>
                                        <span id="error_id" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Articles-container" hidden>
                                    <div class="dx-field">
                                        <div class="dx-field-label">Guid </div>
                                        <div class="dx-field-value">
                                            <div id="Guid"></div>
                                        </div>
                                        <span id="error_Guid" class="text-danger"></span>
                                    </div>
                                </div>

                                <div class="dx-fieldset" id="Articles-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">الاسم </div>
                                        <div class="dx-field-value">
                                            <div id="did"></div>
                                        </div>
                                        <span id="error_did" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Articles-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">تاريخ النشر  </div>
                                        <div class="dx-field-value">
                                            <div id="pub_date"></div>
                                        </div>
                                        <span id="error_pub_date" class="text-danger"></span>
                                    </div>
                                </div>


                            </div>
                            <div class="col-md-4">
                                <div class="dx-fieldset" id="Articles-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label"> عنوان المقال   </div>
                                        <div class="dx-field-value">
                                            <div id="article_title"></div>
                                        </div>
                                        <span id="error_article_title" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Articles-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">الرابط  </div>
                                        <div class="dx-field-value">
                                            <div id="Alink"></div>
                                        </div>
                                        <span id="error_Alink" class="text-danger"></span>
                                    </div>
                                </div>


                            </div>

                            <div class="col-md-4">

                                <div class="dx-fieldset" id="Articles-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label"> عدد المشاركين </div>
                                        <div class="dx-field-value">
                                            <div id="nof_aut"></div>
                                        </div>
                                        <span id="error_nof_aut" class="text-danger"></span>
                                    </div>
                                </div>


                            </div>



                        </div>
                       
                        <div class="col-md-12">

                            <div class="col-md-4">

                                <div class="dx-fieldset" id="Articles-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">نسخة مصورة </div>
                                        <div class="dx-field-value">
                                            <div id="FilePath"></div>
                                        </div>
                                        <span id="error_FilePath" class="text-danger"></span>
                                    </div>
                                </div>




                            </div>
                        </div>
                        <div class="col-md-12">
                            <div id="image-container" class="row">
                                
                            </div>
                        </div>
                        <hr>
                        <div id="btnSave" style="float:right;margin-right:25px"></div>
                    </div>
                </div>



            </div>


        </div>
        <script type="text/javascript" src="{{ url('assets/js/pro_js/Articles.js') }}"></script>



        <script>
            $("#Articlesaction").hide();
        </script>
    @endSection()
