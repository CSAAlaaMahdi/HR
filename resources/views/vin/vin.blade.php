@extends('admin.layout.main')
{{-- @section('title', 'Stories Tree') --}}
@section('content')
    <div class="row border g-0 rounded shadow-sm ">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card " id="firstCard">
                    <div class="card-header" style="background-color: #343A40">
                        <h4 style="color: white;">Searching</h4>

                    </div>
                    <div class="card-body">

                        <div class="col-md-6">
                            <div class="dx-fieldset" id="VinSearching-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">VIN</div>
                                    <div class="dx-field-value">
                                        <div id="Vin_Searching"></div>
                                    </div>
                                    <div id="btnSearch"></div>
                                    <span id="error_Vin_Searching" class="text-danger"></span>
                                </div>
                            </div>
                            <div id="result"></div>
                        </div>



                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <div class="card vinSearchingaction" id="vinSearchingaction">
                    <div class="card-header " style="background-color: #343A40">
                        <div id="danger-contained" style="float:right"></div>
                        <h4 style="color: white;" id="card_vinSearchingtitle" class="card_vinSearchingtitle"> </h4>

                    </div>
                    <div class="card-body">
                        <div class="row ">

                            @csrf
                            <div class="col-md-6">

                            </div>


                        </div>
                    </div>
                </div>



            </div>


        </div>

        <script type="text/javascript" src="{{ url('resources/js/pro_js/vinSearching.js') }}"></script>
        <script>
            $("#vinSearchingaction").hide();
        </script>

    @endSection()
