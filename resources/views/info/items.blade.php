@extends('admin.layout.main')
@section('title', 'Item')
@section('content')

    <div class="row border g-0 rounded shadow-sm ">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card ">
                    <div class="card-header bg-dark">

                        <button class="btn btn-primary btn-sm m-1 float-end itemstoaskAdd">Add itemstoask
                        </button>

                        <h4 style="color: white;"></h4>

                    </div>
                    <div class="card-body">

                        <table id="itemstoask_data" class="table table-bordered table-striped itemstoask_data" cellspacing="0"
                            width="100%">
                            <thead class="dataheader_itemstoask table-dark ">
                                <tr>
                                    <td>SSN</td>
                                    <td>Item Type</td>
                                    <td>Item Name</td>
                                    <td>Part Number </td>
                                    <td>QY</td>
                                    <td>Car Type</td>
                                    <td>Engine</td>
                                    <td>Mode Code</td>
                                    <td>Fuel System</td>
                                    <td>Transmission</td>
                                    <td>Car No</td>
                                    <td>VIN</td>
                                    <td>Year</td>
                                    <td>Event</td>
                                </tr>
                            </thead>
                            <tbody class="databody_itemstoask">

                            </tbody>
                        </table>
                        <div>
                            <select id="filterDropdown">
                                <option value="">All</option>
                                <option value="Engine Part">Engine Part</option>
                                <option value="Cooling Part">Cooling Part</option>
                              </select>
                        </div>

                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <div class="card itemstoaskaction" id="itemstoaskaction">
                    <div class="card-header bg-dark">
                        <button class="btn btn-danger btn-sm m-1 mb-3 float-end itemstoaskClose">Close
                        </button>
                        <h4 style="color: white;" id="card_itemstoasktitle" class="card_itemstoasktitle"> </h4>

                    </div>
                    <div class="card-body ">
                        <div class="row ">

                            @csrf
                            <div class="col-md-12 ">
                                <div class="form-itemstoask ">
                                    <div class="ms-12 row pt-3">
                                        <div class="col-sm-auto">
                                            <input type="text" name="IT_id" id="IT_id" class="form-control IT_id"
                                                hidden>

                                        </div>
                                    </div>

                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-1 col-form-label"> Item Name :
                                        </label>
                                        <div class="col-sm-3">
                                            <input list="IT_ItemNameBrowser" class="form-control IT_ItemName" id="IT_ItemName" placeholder="Type Item Name...">
                                            <datalist id="IT_ItemNameBrowser">
                                            </datalist>
                                            <span id="error_IT_ItemName" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Part Number :
                                        </label>
                                        <div class="col-sm-3">
                                            <input type="text" name="IT_PartNumber" id="IT_PartNumber" class="form-control IT_PartNumber"
                                                autocomplete="off">
                                            <span id="error_IT_PartNumber" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> QY :
                                        </label>
                                        <div class="col-sm-3">
                                            <input type="text" name="IT_QY" id="IT_QY" class="form-control IT_QY"
                                                autocomplete="off">
                                            <span id="error_IT_QY" class="text-danger"></span>
                                        </div>

                                    </div>
                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-1 col-form-label"> Car Type :
                                        </label>
                                        <div class="col-sm-3">
                                            <input list="IT_CarTypeBrowser" class="form-control IT_CarType" id="IT_CarType" placeholder="Type Car Type...">
                                            <datalist id="IT_CarTypeBrowser">
                                            </datalist>
                                            <span id="error_IT_CarType" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Engine :
                                        </label>
                                        <div class="col-sm-3">
                                            <input list="IT_EngineBrowser" class="form-control IT_Engine" id="IT_Engine" placeholder="Type Engine...">
                                            <datalist id="IT_EngineBrowser">
                                            </datalist>
                                            <span id="error_IT_Engine" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Model Code :
                                        </label>
                                        <div class="col-sm-3">
                                            <input list="IT_ModelCodeBrowser" class="form-control IT_ModelCode" id="IT_ModelCode" placeholder="Type Mode Code...">
                                            <datalist id="IT_ModelCodeBrowser">
                                            </datalist>
                                            <span id="error_IT_ModelCode" class="text-danger"></span>
                                        </div>

                                    </div>
                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-1 col-form-label"> Fuel  :
                                        </label>
                                        <div class="col-sm-3">
                                            <input list="IT_FuelSystemBrowser" class="form-control IT_FuelSystem" id="IT_FuelSystem" placeholder="Type Fuel...">
                                            <datalist id="IT_FuelSystemBrowser">
                                            </datalist>
                                            <span id="error_IT_FuelSystem" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Transmission :
                                        </label>
                                        <div class="col-sm-3">
                                            <input list="IT_TransmissionBrowser" class="form-control IT_Transmission" id="IT_Transmission" placeholder="Type Transmission...">
                                            <datalist id="IT_TransmissionBrowser">
                                            </datalist>
                                            <span id="error_IT_Transmission" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Car No :
                                        </label>
                                        <div class="col-sm-3">
                                            <input type="text" name="IT_CarNo" id="IT_CarNo" class="form-control IT_CarNo"
                                                autocomplete="off">
                                            <span id="error_IT_CarNo" class="text-danger"></span>
                                        </div>

                                    </div>
                                    <div class="ms-12 row pt-3">

                                        <label for="" class="col-sm-1 col-form-label"> VIN :
                                        </label>
                                        <div class="col-sm-3">
                                            <input type="text" name="IT_VIN" id="IT_VIN" class="form-control IT_VIN"
                                                autocomplete="off">
                                            <span id="error_IT_VIN" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Year :
                                        </label>
                                        <div class="col-sm-3">
                                            <input type="text" name="IT_Year" id="IT_Year" class="form-control IT_Year"
                                                autocomplete="off">
                                            <span id="error_IT_Year" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Item Type :
                                        </label>
                                        <div class="col-sm-3">
                                            <input list="IT_ItemTypeBrowser" class="form-control IT_ItemType" id="IT_ItemType" placeholder="Type Item Type...">
                                            <datalist id="IT_ItemTypeBrowser">
                                            </datalist>
                                            <span id="error_IT_ItemType" class="text-danger"></span>
                                        </div>

                                    </div>

                                    <hr>

                                    <div>

                                        <div class="ms-12 row pt-3">
                                            <label for="" class="col-sm-1 col-form-label"> </label>
                                            <div class="col-sm-1">
                                                <button class="btn btn-primary form-control itemstoaskSave">Save
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
        <script type="text/javascript" src="{{url('resources/js/pro_js/itemtoask.js')}}"></script>
        <script>
            $("#itemstoaskaction").hide();
        </script>


    @endSection()
