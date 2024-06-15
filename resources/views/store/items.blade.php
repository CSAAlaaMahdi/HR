@extends('admin.layout.mainarabic')
{{-- @section('title', 'Items Tree') --}}
@section('content')
    <div class="row border g-0 rounded shadow-sm ">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card " id="firstCard">
                    <div class="card-header bg-dark">
                        <div id="btnNewAdd" style="float: right"></div>
                        <h4 style="color: white;float: right;margin-right: 35%"> المواد</h4>

                    </div>
                    <div class="card-body">

                        <div id="Itemsdatagrid"> </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12 mt-5">
            <div class="card Itemsaction" id="Itemsaction">
                <div class="card-header bg-dark">
                    <div id="danger-contained" style="float:left"></div>
                    <h4 style="color: white;" id="card_Itemstitle" class="card_Itemstitle"> </h4>

                </div>
                <div class="card-body ">
                    <div class="row ">

                        @csrf
                        <div class="col-md-12 row flex">
                            <div class="col-md-4 ">
                                <div class="dx-fieldset" id="Items-container" hidden>
                                    <div class="dx-field">
                                        <div class="dx-field-label">ID</div>
                                        <div class="dx-field-value">
                                            <div id="ID"></div>
                                        </div>
                                        <span id="error_ID" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Items-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label"> المادة </div>
                                        <div class="dx-field-value">
                                            <div id="ItemName"></div>
                                        </div>
                                        <span id="error_ItemName" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Items-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label">الماركة </div>
                                        <div class="dx-field-value">
                                            <div id="Brand"></div>
                                        </div>
                                        <span id="error_Brand" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Items-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label"> الكمية</div>
                                        <div class="dx-field-value">
                                            <div id="ItemQuantity"></div>
                                        </div>
                                        <span id="error_ItemQuantity" class="text-danger"></span>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-4">
                                <div class="dx-fieldset" id="Items-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label"> المجموعة </div>
                                        <div class="dx-field-value">
                                            <div id="ParentID"></div>
                                        </div>
                                        <span id="error_ParentID" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Items-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label"> الوحدة </div>
                                        <div class="dx-field-value">
                                            <div id="ItemUnit"></div>
                                        </div>
                                        <span id="error_ItemUnit" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Items-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label"> موقع المادة </div>
                                        <div class="dx-field-value">
                                            <div id="ItemPlace"></div>
                                        </div>
                                        <span id="error_ItemPlace" class="text-danger"></span>
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-4">
                                <div class="dx-fieldset" id="Items-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label"> الكود </div>
                                        <div class="dx-field-value">
                                            <div id="ItemCode"></div>
                                        </div>
                                        <span id="error_ItemCode" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="dx-fieldset" id="Items-container">
                                    <div class="dx-field">
                                        <div class="dx-field-label"> حالة المادة </div>
                                        <div class="dx-field-value">
                                            <div id="ItemStatus"></div>
                                        </div>
                                        <span id="error_ItemStatus" class="text-danger"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="dx-fieldset" id="Items-container">
                                <div class="dx-field">
                                    <div class="dx-field-label"> ملاحظات </div>
                                    <div class="dx-field-value">
                                        <div id="Description"></div>
                                    </div>
                                    <span id="error_Description" class="text-danger"></span>
                                </div>
                            </div>
                        </div>


                        <hr>
                        <div id="btnSave" style="float:right"></div>

                    </div>
                </div>
            </div>



        </div>

    </div>
    <script type="text/javascript" src="{{ url('assets/js/pro_js/Items.js') }}"></script>
    <script>
        $("#Itemsaction").hide();
    </script>
@endSection()
