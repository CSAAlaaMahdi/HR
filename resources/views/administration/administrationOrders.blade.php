@extends('admin.layout.mainarabic')
{{-- @section('title', 'Saling Groups') --}}
@section('content')
    <div class="row border g-0 rounded shadow-sm ">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card " id="firstCard">
                    <div class="card-header" style="background-color: #343A40">

                        <div id="btnNewAdd" style="float: right"></div>
                        <h4 style="color: white;float: right;margin-right: 35%">الاوامر الادارية</h4>

                    </div>
                    <div class="card-body">

                        <div class="datagrid" id="AdministrationOrdersdatagrid">

                        </div>
                        <div id="pagerContainer"></div>
                        <div id="context-menu">

                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <div class="card AdministrationOrdersaction" id="AdministrationOrdersaction">
                    <div class="card-header " style="background-color: #343A40">
                        <div id="danger-contained" style="float:left"></div>
                        <h4 style="color: white;" id="card_AdministrationOrderstitle"
                            class="card_AdministrationOrderstitle"> </h4>

                    </div>
                    <div class="card-body">

                        <div class="row ">

                            @csrf
                            <div class="col-md-4">
                                <div class="dx-fieldset" id="AdministrationOrders-container" hidden>
                                    <div class="dx-field">
                                        <div class="dx-field-label">id </div>
                                        <div class="dx-field-value">
                                            <div id="id"></div>
                                        </div>
                                        <span id="error_id" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="AdministrationOrders-container" hidden>
                                    <div class="dx-field">
                                        <div class="dx-field-label">Guid </div>
                                        <div class="dx-field-value">
                                            <div id="Guid"></div>
                                        </div>
                                        <span id="error_Guid" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="AdministrationOrders-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">الاسم </div>
                                        <div class="dx-field-value">
                                            <div id="eid"></div>
                                        </div>
                                        <span id="error_eid" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="AdministrationOrders-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">تاريخ الكتاب </div>
                                        <div class="dx-field-value">
                                            <div id="DocDate"></div>
                                        </div>
                                        <span id="error_DocDate" class="text-danger"></span>
                                    </div>
                                </div>


                            </div>
                            <div class="col-md-4">
                                <div class="dx-fieldset" id="AdministrationOrders-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label"> عنوان الامر الاداري </div>
                                        <div class="dx-field-value">
                                            <div id="Title"></div>
                                        </div>
                                        <span id="error_Title" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="AdministrationOrders-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">جهة الاصدار </div>
                                        <div class="dx-field-value">
                                            <div id="FromDir"></div>
                                        </div>
                                        <span id="error_FromDir" class="text-danger"></span>
                                    </div>
                                </div>


                            </div>

                            <div class="col-md-4">

                                <div class="dx-fieldset" id="AdministrationOrders-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label"> رقم الكتاب </div>
                                        <div class="dx-field-value">
                                            <div id="DocNumber"></div>
                                        </div>
                                        <span id="error_DocNumber" class="text-danger"></span>
                                    </div>
                                </div>


                            </div>



                        </div>
                        <div class="col-md-12">
                            <div class="col-md-12">

                                <div class="dx-fieldset" id="AdministrationOrders-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">ملاحظات </div>
                                        <div class="dx-field-value">
                                            <div id="Notes"></div>
                                        </div>
                                        <span id="error_Notes" class="text-danger"></span>
                                    </div>
                                </div>


                            </div>

                        </div>
                        <div class="col-md-12">

                            <div class="col-md-4">

                                <div class="dx-fieldset" id="AdministrationOrders-container">
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
                            <div id="image-container" class="row"></div>
                        </div>

                        <hr>
                        <div id="btnSave" style="float:right;margin-right:25px"></div>
                    </div>
                </div>



            </div>


        </div>
        <script type="text/javascript" src="{{ url('assets/js/pro_js/AdministrationOrders.js') }}"></script>



        <script>
            $("#AdministrationOrdersaction").hide();
        </script>
    @endSection()
