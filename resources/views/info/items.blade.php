@extends('admin.layout.mainarabic')
{{-- @section('title', 'Item') --}}
@section('content')
    <div class="row border g-0 rounded shadow-sm ">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card" id="firstCard">
                    <div class="card-header " style="background-color: #343A40">
                        <div id="btnAddNew" style="float: right"></div>

                        <h4 style="color: white; float: left;margin-left: 50%">المواد</h4>

                    </div>
                    <div class="card-body">

                        <div class="datagrid" id="ItemsDataGrid">

                        </div>

                        {{-- <div id="context-menu">

                        </div> --}}


                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <div class="card Itemsaction" id="Itemsaction">
                    <div class="card-header " style="background-color: #343A40">
                        <div id="danger-contained" style="float:left"></div>
                        <h4 style="color: white;" id="card_Itemstitle" class="card_Itemstitle"> </h4>

                    </div>
                    <div class="card-body">
                        <div class="row flex">

                            @csrf
                            <div class="col-md-4">


                                <div class="dx-fieldset" id="Items-container" >
                                    <div class="dx-field">
                                        <div class="dx-field-label">ItemsGuid</div>
                                        <div class="dx-field-value">
                                            <div id="IT_Guid"></div>
                                        </div>
                                        <span id="error_IT_Guid" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Items-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">نوع المادة</div>
                                        <div class="dx-field-value">
                                            <div id="IT_ItemType"></div>
                                        </div>
                                        <span id="error_IT_ItemType" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Items-container" >
                                    <div class="dx-field">
                                        <div class="dx-field-label">اسم المادة</div>
                                        <div class="dx-field-value">
                                            <div id="IT_ItemName"></div>
                                        </div>
                                        <span id="error_IT_ItemName" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Items-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">رمز المادة </div>
                                        <div class="dx-field-value">
                                            <div id="IT_PartNumber"></div>
                                        </div>
                                        <span id="error_IT_PartNumber" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Items-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">العدد </div>
                                        <div class="dx-field-value">
                                            <div id="IT_QY"></div>
                                        </div>
                                        <span id="error_IT_QY" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Items-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">نوع العجلة </div>
                                        <div class="dx-field-value">
                                            <div id="IT_CarType"></div>
                                        </div>
                                        <span id="error_IT_CarType" class="text-danger"></span>
                                    </div>
                                </div>


                            </div>
                            <div class="col-md-4">

                                <div class="dx-fieldset" id="Items-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label"> المحرك</div>
                                        <div class="dx-field-value">
                                            <div id="IT_Engine"></div>
                                        </div>
                                        <span id="error_IT_Engine" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Items-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">الموديل </div>
                                        <div class="dx-field-value">
                                            <div id="IT_ModelCode"></div>
                                        </div>
                                        <span id="error_IT_ModelCode" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Items-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">نظام الوقود </div>
                                        <div class="dx-field-value">
                                            <div id="IT_FuelSystem"></div>
                                        </div>
                                        <span id="error_IT_FuelSystem" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Items-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label"> ناقل الحركة</div>
                                        <div class="dx-field-value">
                                            <div id="IT_Transmission"></div>
                                        </div>
                                        <span id="error_IT_Transmission" class="text-danger"></span>
                                    </div>
                                </div>


                            </div>
                            <div class="col-md-4">

                                <div class="dx-fieldset" id="Items-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label"> رقم العجلة</div>
                                        <div class="dx-field-value">
                                            <div id="IT_CarNo"></div>
                                        </div>
                                        <span id="error_IT_CarNo" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Items-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">الشاصي </div>
                                        <div class="dx-field-value">
                                            <div id="IT_VIN"></div>
                                        </div>
                                        <span id="error_IT_VIN" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Items-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">السنة  </div>
                                        <div class="dx-field-value">
                                            <div id="IT_Year"></div>
                                        </div>
                                        <span id="error_IT_Year" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Items-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">ملاحظات  </div>
                                        <div class="dx-field-value">
                                            <div id="IT_Notes"></div>
                                        </div>
                                        <span id="error_IT_Notes" class="text-danger"></span>
                                    </div>
                                </div>


                            </div>
                            <div class="col-md-4">
                                <div id="btnSave" style="float:right"></div>
                            </div>
                            <hr>


                        </div>
                    </div>
                </div>



            </div>


            <script type="text/javascript" src="{{ url('assets/js/pro_js/itemtoask.js') }}"></script>
            <script>
                $("#Itemsaction").hide();
            </script>
        </div>
    </div>
@endSection()
