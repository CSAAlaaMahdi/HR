@extends('admin.layout.main')
@section('title', 'battreys')
@section('content')

    <div class="row border g-0 rounded shadow-sm ">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card ">
                    <div class="card-header bg-dark">

                        <button class="btn btn-primary btn-sm m-1 float-end battreysAdd">Add Battery
                        </button>

                        <h4 style="color: white;"></h4>

                    </div>
                    <div class="card-body">

                        <table id="battreys_data" class="table table-bordered table-striped battreys_data" cellspacing="0"
                            width="100%">
                            <thead class="dataheader_battreys table-dark">
                                <tr>
                                    <td>SSN</td>
                                    <td>Group</td>
                                    <td>Model </td>
                                    <td>REF.NO</td>
                                    <td>AH</td>
                                    <td>L</td>
                                    <td>W</td>
                                    <td>TH</td>
                                    <td>Brand</td>
                                    <td>Price</td>
                                    <td>CAR TYPE</td>
                                    <td>Count</td>
                                    <td>Quantity</td>
                                    <td>Event</td>
                                </tr>
                            </thead>
                            <tbody class="databody_battreys">

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <div class="card battreysaction" id="battreysaction">
                    <div class="card-header bg-dark">
                        <button class="btn btn-danger btn-sm m-1 mb-3 float-end battreysClose">Close
                        </button>
                        <h4 style="color: white;" id="card_battreystitle" class="card_battreystitle"> </h4>

                    </div>
                    <div class="card-body ">
                        <div class="row ">

                            @csrf
                            <div class="col-md-12 ">
                                <div class="form-battreys ">
                                    <div class="ms-12 row pt-3">
                                        <div class="col-sm-auto">
                                            <input type="text" name="B_id" id="B_id" class="form-control B_id"
                                                hidden>

                                        </div>
                                    </div>

                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-2 col-form-label"> Group :
                                        </label>
                                        <div class="col-sm-3">
                                            <input type="text" name="B_Group" id="B_Group" class="form-control B_Group"
                                                autocomplete="off">
                                            <span id="error_B_Group" class="text-danger"></span>
                                        </div>

                                    </div>
                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-2 col-form-label"> Model :
                                        </label>
                                        <div class="col-sm-3">
                                            <input type="text" name="B_Model" id="B_Model" class="form-control B_Model"
                                                autocomplete="off">
                                            <span id="error_B_Model" class="text-danger"></span>
                                        </div>

                                    </div>
                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-2 col-form-label"> REF.NO :
                                        </label>
                                        <div class="col-sm-3">
                                            <input type="text" name="B_Ref" id="B_Ref" class="form-control B_Ref"
                                                autocomplete="off">
                                            <span id="error_B_Ref" class="text-danger"></span>
                                        </div>

                                    </div>
                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-2 col-form-label"> AH :
                                        </label>
                                        <div class="col-sm-3">
                                            <input type="text" name="B_AH" id="B_AH" class="form-control B_AH"
                                                autocomplete="off">
                                            <span id="error_B_AH" class="text-danger"></span>
                                        </div>

                                    </div>
                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-2 col-form-label"> Length :
                                        </label>
                                        <div class="col-sm-3">
                                            <input type="text" name="B_L" id="B_L" class="form-control B_L"
                                                autocomplete="off">
                                            <span id="error_B_L" class="text-danger"></span>
                                        </div>

                                    </div>
                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-2 col-form-label"> Width :
                                        </label>
                                        <div class="col-sm-3">
                                            <input type="text" name="B_R" id="B_R" class="form-control B_R"
                                                autocomplete="off">
                                            <span id="error_B_R" class="text-danger"></span>
                                        </div>

                                    </div>
                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-2 col-form-label"> Hight :
                                        </label>
                                        <div class="col-sm-3">
                                            <input type="text" name="B_H" id="B_H" class="form-control B_H"
                                                autocomplete="off">
                                            <span id="error_B_H" class="text-danger"></span>
                                        </div>

                                    </div>
                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-2 col-form-label"> Brand :
                                        </label>
                                        <div class="col-sm-3">
                                            <input type="text" name="B_Brand" id="B_Brand" class="form-control B_Brand"
                                                autocomplete="off">
                                            <span id="error_B_Brand" class="text-danger"></span>
                                        </div>

                                    </div>
                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-2 col-form-label"> Price :
                                        </label>
                                        <div class="col-sm-3">
                                            <input type="text" name="B_Price" id="B_Price" class="form-control B_Price"
                                                autocomplete="off">
                                            <span id="error_B_Price" class="text-danger"></span>
                                        </div>

                                    </div>
                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-2 col-form-label"> Car Type :
                                        </label>
                                        <div class="col-sm-3">
                                            <input type="text" name="B_CarType" id="B_CarType" class="form-control B_CarType"
                                                autocomplete="off">
                                            <span id="error_B_CarType" class="text-danger"></span>
                                        </div>

                                    </div>
                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-2 col-form-label"> Quantity :
                                        </label>
                                        <div class="col-sm-3">
                                            <input type="text" name="B_QY" id="B_QY" class="form-control B_QY"
                                                autocomplete="off">
                                            <span id="error_B_QY" class="text-danger"></span>
                                        </div>

                                    </div>

                                    <hr>

                                    <div>

                                        <div class="ms-12 row pt-3">
                                            <label for="" class="col-sm-2 col-form-label"> </label>
                                            <div class="col-sm-2">
                                                <button class="btn btn-primary form-control battreysSave">Save
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </div>
                </div>



            </div>

        </div>
        <script type="text/javascript" src="{{url('resources/js/pro_js/battreys.js')}}"></script>
        <script>
            $("#battreysaction").hide();
        </script>


    @endSection()
