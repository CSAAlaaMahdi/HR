@extends('admin.layout.mainarabic')
{{-- @section('title', 'Saling Groups') --}}
@section('content')
    <div class="row border g-0 rounded shadow-sm ">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card " id="firstCard">
                    <div class="card-header" style="background-color: #343A40">

                        <div id="btnNewAdd" style="float: right"></div>
                        <h4 style="color: white;float: right;margin-right: 35%">الانشطة والفعاليات</h4>

                    </div>
                    <div class="card-body">

                        <div class="datagrid" id="Activitydatagrid">

                        </div>
                        <div id="pagerContainer"></div>
                        <div id="context-menu">

                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <div class="card Activityaction" id="Activityaction">
                    <div class="card-header " style="background-color: #343A40">
                        <div id="danger-contained" style="float:left"></div>
                        <h4 style="color: white;" id="card_Activitytitle" class="card_Activitytitle"> </h4>

                    </div>
                    <div class="card-body">
                        <div class="row ">

                            @csrf
                            <div class="col-md-4">
                                <div class="dx-fieldset" id="Activity-container" hidden>
                                    <div class="dx-field">
                                        <div class="dx-field-label">aid </div>
                                        <div class="dx-field-value">
                                            <div id="aid"></div>
                                        </div>
                                        <span id="error_aid" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Activity-container" hidden>
                                    <div class="dx-field">
                                        <div class="dx-field-label">Guid </div>
                                        <div class="dx-field-value">
                                            <div id="Guid"></div>
                                        </div>
                                        <span id="error_Guid" class="text-danger"></span>
                                    </div>
                                </div>

                                <div class="dx-fieldset" id="Activity-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">اسم النشاط </div>
                                        <div class="dx-field-value">
                                            <div id="act_id"></div>
                                        </div>
                                        <span id="error_act_id" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Activity-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">عدد الايام  </div>
                                        <div class="dx-field-value">
                                            <div id="NoDays"></div>
                                        </div>
                                        <span id="error_NoDays" class="text-danger"></span>
                                    </div>
                                </div>
                            


                            </div>
                            <div class="col-md-4">
                                <div class="dx-fieldset" id="Activity-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">العنوان  </div>
                                        <div class="dx-field-value">
                                            <div id="Aname"></div>
                                        </div>
                                        <span id="error_Aname" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Activity-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">تاريخ الانعقاد    </div>
                                        <div class="dx-field-value">
                                            <div id="ActDate"></div>
                                        </div>
                                        <span id="error_ActDate" class="text-danger"></span>
                                    </div>
                                </div>


                            </div>

                            <div class="col-md-4">

                                <div class="dx-fieldset" id="Activity-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label"> مكان الانعقاد   </div>
                                        <div class="dx-field-value">
                                            <div id="Place"></div>
                                        </div>
                                        <span id="error_Place" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Activity-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label"> عدد المشاركين </div>
                                        <div class="dx-field-value">
                                            <div id="Participants"></div>
                                        </div>
                                        <span id="error_Participants" class="text-danger"></span>
                                    </div>
                                </div>
                          


                        </div>
                       
                    </div>
                    <div class="col-md-12">
                        
                        <div class="dx-fieldset" id="Activity-container">
                            <div class="dx-field">
                                <div class="dx-field-label">ملاحظات   </div>
                                <div class="dx-field-value">
                                    <div id="Notes"></div>
                                </div>
                                <span id="error_Notes" class="text-danger"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="dx-fieldset" id="Comity-container">
                            <div class="dx-field">
                                <div class="dx-field-label">(القاء) اضافة اسماء المشاركين</div>
                                <div class="dx-field-value">
                                    <div id="eid"></div>
                                </div>
                                <span id="error_eid" class="text-danger"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="dx-fieldset" id="Comity-container">
                            <div class="dx-field">
                                <div class="dx-field-label"> الاسماء  </div>
                                <div class="dx-field-value">
                                    <div id="EmpNames"></div>
                                </div>
                                <span id="error_EmpNames" class="text-danger"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="dx-fieldset" id="Comity-container">
                            <div class="dx-field">
                                <div class="dx-field-label"> اضافة اسماء الحضور</div>
                                <div class="dx-field-value">
                                    <div id="eid2"></div>
                                </div>
                                <span id="error_eid2" class="text-danger"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="dx-fieldset" id="Comity-container">
                            <div class="dx-field">
                                <div class="dx-field-label">  الحضور  </div>
                                <div class="dx-field-value">
                                    <div id="EmpNames2"></div>
                                </div>
                                <span id="error_EmpNames2" class="text-danger"></span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="col-md-4">

                            <div class="dx-fieldset" id="Activity-container">
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
                        <div id="image-container" class="row"></div>
                    </div>
                    <hr>
                    <div id="btnSave" style="float:right;margin-right:25px"></div>
                </div>



            </div>


        </div>
        <script type="text/javascript" src="{{ url('assets/js/pro_js/Activity.js') }}"></script>


        <script>
            $("#Activityaction").hide();
        </script>
    @endSection()
