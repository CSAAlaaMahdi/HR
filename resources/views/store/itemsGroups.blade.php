@extends('admin.layout.mainarabic')
{{-- @section('title', 'Items Tree') --}}
@section('content')
    <div class="row border g-0 rounded shadow-sm ">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card " id="firstCard">
                    <div class="card-header bg-dark">
                        <div id="btnNewAdd" style="float: right"></div>
                        <h4 style="color: white;float: right;margin-right: 35%">دليل المواد</h4>

                    </div>
                    <div class="card-body">

                        <div id="ItemsGroupsTree"> </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12 mt-5">
            <div class="card ItemsGroupsaction" id="ItemsGroupsaction">
                <div class="card-header bg-dark">
                    <div id="danger-contained" style="float:left"></div>
                    <h4 style="color: white;" id="card_ItemsGroupstitle" class="card_ItemsGroupstitle"> </h4>

                </div>
                <div class="card-body ">
                    <div class="row ">

                        @csrf
                        <div class="col-md-6 ">
                            <div class="dx-fieldset" id="ItemsGroups-container" hidden>
                                <div class="dx-field">
                                    <div class="dx-field-label">ID</div>
                                    <div class="dx-field-value">
                                        <div id="ID"></div>
                                    </div>
                                    <span id="error_ID" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="ItemsGroups-container">
                                <div class="dx-field">
                                    <div class="dx-field-label"> المجموعة </div>
                                    <div class="dx-field-value">
                                        <div id="ItemName"></div>
                                    </div>
                                    <span id="error_ItemName" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="ItemsGroups-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">المجموعة الاب</div>
                                    <div class="dx-field-value">
                                        <div id="ParentID"></div>
                                    </div>
                                    <span id="error_ParentID" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="ItemsGroups-container">
                                <div class="dx-field">
                                    <div class="dx-field-label"> الكود</div>
                                    <div class="dx-field-value">
                                        <div id="ItemCode"></div>
                                    </div>
                                    <span id="error_ItemCode" class="text-danger"></span>
                                </div>
                            </div>
                            <hr>
                            <div id="btnSave" style="float:right"></div>
                        </div>


                    </div>
                </div>
            </div>



        </div>

    </div>
    <script type="text/javascript" src="{{ url('assets/js/pro_js/ItemsGroups.js') }}"></script>
    <script>
        $("#ItemsGroupsaction").hide();
    </script>
@endSection()
