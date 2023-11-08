@extends('admin.layout.main')
{{-- @section('title', 'CarsInfos') --}}
@section('content')
    </style>
    <div class="row border g-0 rounded shadow-sm ">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card " id="firstCard">
                    <div class="card-header" style="background-color: #343A40">



                        <h4 style="color: white;">CarsInfo</h4>

                    </div>
                    <div class="card-body">

                        <div class="demo-container">
                            <div id="data-grid-demo">
                                <div id="CarsInfoGrid"></div>
                            </div>
                        </div>
                        <div id="pagerContainer"></div>
                        <div id="context-menu">

                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <div class="card CarsInfoaction" id="CarsInfoaction">
                    <div class="card-header " style="background-color: #343A40">
                        <div id="danger-contained" style="float:right"></div>
                        <h4 style="color: white;" id="card_CarsInfotitle" class="card_CarsInfotitle"> </h4>

                    </div>
                    <div class="card-body">
                        <div class="row ">

                            @csrf
                            <div class="col-md-6">
                                <div class="form-group ">
                                    <div class="ms-12 row pt-3">


                                    </div>
                                    <div class="dx-fieldset" id="CarsInfo-container" hidden>
                                        <div class="dx-field">
                                            <div class="dx-field-label">CarsInfoGuid</div>
                                            <div class="dx-field-value">
                                                <div id="Guid"></div>
                                            </div>
                                            <span id="error_Guid" class="text-danger"></span>
                                        </div>
                                    </div>
                                    <div class="dx-fieldset" id="CarsInfo-container">
                                        <div class="dx-field">
                                            <div class="dx-field-label">CarsInfo Name</div>
                                            <div class="dx-field-value">
                                                <div id="B_Name"></div>
                                            </div>
                                            <span id="error_B_Name" class="text-danger"></span>
                                        </div>
                                    </div>

                                    <hr>
                                    <div id="btnSave" style="float:left"></div>

                                </div>
                            </div>


                        </div>
                    </div>
                </div>



            </div>


        </div>
        <script type="text/javascript" src="{{ url('resources/js/pro_js/CarsInfo.js') }}"></script>
        <script>
            $("#CarsInfoaction").hide();
        </script>
        <script id="individualTemplate" type="text/html">
            <p>This is Contacts Tab</p>
        </script>
    </div>
@endSection()
