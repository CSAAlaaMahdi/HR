@extends('admin.layout.main')
@section('title', 'Order Items')
@section('content')

    <div class="row border g-0 rounded shadow-sm " style="background-color:#e5e6e7">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card ">
                    <div class="card-header text-white" style="background-color:#343A40">

                        <button class="btn btn-primary btn-sm m-1 float-end ordersecondaryAdd">Add New Item
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



                        <table id="ordersecondary_data" class="table table-bordered table-striped ordersecondary_data" cellspacing="0"
                            width="100%">
                            <thead class="dataheader_ordersecondary text-white" style="background-color:#343A40">
                                <tr>
                                    <td>NO</td>
                                    <td>Item Name</td>
                                    <td>Part Number</td>
                                    <td>Quantity</td>
                                    <td>Event</td>
                                </tr>
                            </thead>
                            <tbody class="databody_ordersecondary">

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <div class="card ordersecondaryaction" id="ordersecondaryaction">
                    <div class="card-header bg-dark">
                        <button class="btn btn-danger btn-sm m-1 mb-3 float-end ordersecondaryClose">Close
                        </button>
                        <h4 style="color: white;" id="card_ordersecondarytitle" class="card_ordersecondarytitle"> </h4>

                    </div>
                    <div class="card-body ">
                        <div class="row ">

                            @csrf
                            <div class="col-md-12 ">
                                <div class="form-group ">
                                    <div class="ms-12 row pt-3">
                                        <div class="col-sm-auto">
                                            <input type="text" name="Ors_ID" id="Ors_ID" class="form-control Ors_ID"
                                                hidden>
                                            <input type="text" name="Ors_FK_Orm" id="Ors_FK_Orm" class="form-control Ors_FK_Orm"
                                                value="{{$id}}" hidden>


                                        </div>
                                    </div>

                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-1 col-form-label"> Item Name :
                                        </label>
                                        <div class="col-sm-2">
                                            <input list="Ors_ItemNameTypeBrowser" class="form-control Ors_ItemName" id="Ors_ItemName" placeholder="Type Item Name...">
                                            <datalist id="Ors_ItemNameTypeBrowser">
                                            </datalist>
                                            <span id="error_Ors_ItemName" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Part Number :
                                        </label>
                                        <div class="col-sm-2">
                                            <input list="Ors_PartNumberTypeBrowser" class="form-control Ors_PartNumber" id="Ors_PartNumber" placeholder="Type Part Number...">
                                            <datalist id="Ors_PartNumberTypeBrowser">
                                            </datalist>
                                            <span id="error_Ors_PartNumber" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Quantity :
                                        </label>
                                        <div class="col-sm-2">
                                            <input type="text" name="Ors_Quantity" id="Ors_Quantity" class="form-control Ors_Quantity"
                                                autocomplete="off">
                                            <span id="error_Ors_Quantity" class="text-danger"></span>
                                        </div>
                                    </div>
                                    <hr>
                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-1 col-form-label">Notes:
                                        </label>
                                        <div class="col-sm-8">
                                            <textarea class="form-control rounded-1 Ors_Notes" id="Ors_Notes" name="Ors_Notes" rows="3"></textarea>
                                        </div>

                                    </div>
                                    <hr>

                                    <div>

                                        <div class="ms-12 row pt-3">
                                            <label for="" class="col-sm-1 col-form-label"> </label>
                                            <div class="col-sm-2">
                                                <button class="btn btn-primary form-control ordersecondarySave">Save Data
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
        <script type="text/javascript" src="{{url('resources/js/pro_js/ordersecondary.js')}}"></script>
        {{-- <script type="text/javascript" src="{{url('resources/js/pro_js/ordermain.js')}}"></script> --}}
        <script>
            $("#ordersecondaryaction").hide();
        </script>
    @endSection()
