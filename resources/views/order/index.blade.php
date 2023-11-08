@extends('admin.layout.main')
@section('title', 'Orders')
@section('content')

    <div class="row border g-0 rounded shadow-sm " style="background-color:#e5e6e7">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card ">
                    <div class="card-header text-white" style="background-color:#343A40">

                        <button class="btn btn-primary btn-sm m-1 float-end ordermainAdd">Add New Order
                        </button>

                        <h4 style="color: white;"></h4>

                    </div>
                    <div class="card-body">
                        <div class="ms-12 row">
                            {{-- <div class="ms-9 row pb-3">
                                 <div class="col-sm-3">
                                    <input type="search" class="form-control searchbox" placeholder="VIN or PartNumber"
                                    >

                                </div>
                                <div class="col-sm-auto">
                                    <button type="button" class="btn btn-info form-control btnsearch">
                                        <i class="fa fa-search" aria-hidden="true"> Search</i>
                                      </button>
                                </div>

                            </div> --}}



                            <div class="col-sm-1">

                            </div>
                        </div>



                        <table id="ordermain_data" class="table table-bordered table-striped ordermain_data" cellspacing="0"
                            width="100%">
                            <thead class="dataheader_ordermain text-white" style="background-color:#343A40">
                                <tr>
                                    <td>No</td>
                                    <td>Order No</td>
                                    <td>Order Date</td>
                                    <td>Company</td>
                                    <td>Model</td>
                                    <td>VIN</td>
                                    <td>State</td>
                                    <td>Event</td>
                                </tr>
                            </thead>
                            <tbody class="databody_ordermain">

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <div class="card ordermainaction" id="ordermainaction">
                    <div class="card-header bg-dark">
                        <button class="btn btn-danger btn-sm m-1 mb-3 float-end ordermainClose">Close
                        </button>
                        <h4 style="color: white;" id="card_ordermaintitle" class="card_ordermaintitle"> </h4>

                    </div>
                    <div class="card-body ">
                        <div class="row ">

                            @csrf
                            <div class="col-md-12 ">
                                <div class="form-group ">
                                    <div class="ms-12 row pt-3">
                                        <div class="col-sm-auto">
                                            <input type="text" name="Orm_ID" id="Orm_ID" class="form-control Orm_ID"
                                                hidden>

                                        </div>
                                    </div>

                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-1 col-form-label"> Order Number :
                                        </label>
                                        <div class="col-sm-2">
                                            <input type="text" name="Orm_OrderNo" id="Orm_OrderNo" class="form-control Orm_OrderNo"
                                                autocomplete="off">
                                            <span id="error_Orm_OrderNo" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Order Date :
                                        </label>
                                        <div class="col-sm-2">
                                            <input type="date" name="Orm_OrderDate" id="Orm_OrderDate" class="form-control Orm_OrderDate"
                                                autocomplete="off">
                                            <span id="error_Orm_OrderDate" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Company :
                                        </label>
                                        <div class="col-sm-2">
                                            <input list="Orm_CompanyBrowser" class="form-control Orm_Company" id="Orm_Company" placeholder="Type Company...">
                                            <datalist id="Orm_CompanyBrowser">
                                            </datalist>
                                            <span id="error_Orm_Company" class="text-danger"></span>
                                        </div>

                                    </div>

                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-1 col-form-label"> Model :
                                        </label>
                                        <div class="col-sm-2">
                                            <input list="Orm_ModelBrowser" class="form-control Orm_Model" id="Orm_Model" placeholder="Type The Model...">
                                            <datalist id="Orm_ModelBrowser">
                                            </datalist>
                                            <span id="error_Orm_Model" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> VIN :
                                        </label>
                                        <div class="col-sm-2">
                                            <input type="text" name="Orm_VIN" id="Orm_VIN" class="form-control Orm_VIN"
                                                autocomplete="off">
                                            <span id="error_Orm_VIN" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Items Type :
                                        </label>
                                        <div class="col-sm-2">
                                            <input list="Orm_ItemsTypeBrowser" class="form-control Orm_ItemsType" id="Orm_ItemsType" placeholder="Type Item Type...">
                                            <datalist id="Orm_ItemsTypeBrowser">
                                            </datalist>
                                            <span id="error_Orm_ItemsType" class="text-danger"></span>
                                        </div>

                                    </div>
                                    <hr>
                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-1 col-form-label">Description:
                                        </label>
                                        <div class="col-sm-8">
                                            <textarea class="form-control rounded-1 Orm_Description" id="Orm_Description" name="Orm_Description" rows="3"></textarea>
                                        </div>

                                    </div>

                                    <hr>
                                    <div class="ms-12 row pt-3">
                                        <label for="Orm_Complete" class="col-sm-1 col-form-label">Complete:
                                        </label>
                                        <div class="col-sm-2 form-switch">
                                            <input type="checkbox" name="Orm_Complete" id="Orm_Complete" class="form-check-input Orm_Complete"
                                                autocomplete="off">
                                            <span id="error_Orm_Complete" class="text-danger"></span>
                                        </div>

                                    </div>
                                    <hr>
                                    <div>


                                        <div class="ms-12 row pt-3">
                                            <label for="" class="col-sm-1 col-form-label"> </label>
                                            <div class="col-sm-2">
                                                <button class="btn btn-primary form-control ordermainSave">Save Data
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
        <script type="text/javascript" src="{{url('resources/js/pro_js/ordermain.js')}}"></script>
        <script>
            $("#ordermainaction").hide();
        </script>
    @endSection()
