@extends('admin.layout.main')
@section('title', 'Items')
@section('content')
    <div class="row border g-0 rounded shadow-sm ">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card ">
                    <div class="card-header bg-dark">

                        <button class="btn btn-primary btn-sm m-1 float-end itemsAdd">ِAdd New Item
                        </button>

                        <h4 style="color: white;"> items </h4>

                    </div>
                    <div class="card-body">

                        <table id="items_data" class="table table-bordered table-striped items_data" cellspacing="0"
                            width="100%">
                            <thead class="dataheader_items table-dark">
                                <tr>
                                    <td>No</td>
                                    <td>Item Name </td>
                                    <td>Part Number </td>
                                    <td>Genuine Number </td>
                                    <td>C_Part Number</td>
                                    <td>Company</td>
                                    <td>Brand</td>
                                    <td>Kind</td>
                                    <td>Event</td>
                                </tr>
                            </thead>
                            <tbody class="databody_items">

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <div class="card itemsaction" id="itemsaction">
                    <div class="card-header bg-dark">
                        <button class="btn btn-danger btn-sm m-1 mb-3 float-end itemsClose">Close
                        </button>
                        <h4 style="color: white;" id="card_itemstitle" class="card_itemstitle"> </h4>

                    </div>
                    <div class="card-body ">
                        <div class="row ">

                            <div class="col-md-12 ">
                                <div class="form-group ">
                                    @csrf
                                    <div class="ms-12 row pt-3">
                                        <div class="col-sm-auto">
                                            <input type="text" name="IT_ID" id="IT_ID" class="form-control IT_ID"
                                                hidden>
                                            <input type="text" name="IT_ParentID" id="IT_ParentID"
                                                class="form-control IT_ParentID" hidden>

                                        </div>
                                    </div>
                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-1 col-form-label"> WM :
                                        </label>
                                        <div class="col-sm-2">
                                            <input list="IT_WMBrowser" class="form-control IT_WM" id="IT_WM"
                                                placeholder="Item Category...">
                                            <datalist id="IT_WMBrowser">
                                            </datalist>
                                            <span id="error_IT_WM" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Item Code :
                                        </label>
                                        <div class="col-sm-2">
                                            <input type="text" class="form-control IT_Code" id="IT_Code" name="IT_Code"
                                                disabled>
                                            <span id="error_IT_Code" class="text-danger"></span>
                                        </div>

                                        <label for="" class="col-sm-1 col-form-label"> Barcode :
                                        </label>
                                        <div class="col-sm-2">
                                            <input type="text" class="form-control IT_Barcode" id="IT_Barcode" name="IT_Barcode"
                                                disabled>
                                            <span id="error_IT_Barcode" class="text-danger"></span>
                                        </div>
                                        <div class="col-sm-auto">
                                            <button class="btn btn-secondary form-control generateBarcode">...</button>
                                        </div>
                                    </div>


                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-1 col-form-label"> Item Name :
                                        </label>
                                        <div class="col-sm-2">
                                            <input list="IT_NameBrowser" class="form-control IT_Name" id="IT_Name"
                                                placeholder="Type Item Name...">
                                            <datalist id="IT_NameBrowser">
                                            </datalist>
                                            <span id="error_IT_Name" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Part Number :
                                        </label>
                                        <div class="col-sm-2">
                                            <input list="IT_PartNumberBrowser" class="form-control IT_PartNumber"
                                                id="IT_PartNumber" placeholder="xxxxx-xxxxx">
                                            <datalist id="IT_PartNumberBrowser">
                                            </datalist>
                                            <span id="error_IT_PartNumber" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> C_Part Number :
                                        </label>
                                        <div class="col-sm-2">
                                            <input type="text" class="form-control IT_C_PartNumber" id="IT_C_PartNumber"
                                                disabled>
                                            <span id="error_IT_C_PartNumber" class="text-danger"></span>
                                        </div>
                                        <div class="col-sm-auto">
                                            <button class="btn btn-secondary form-control generatepartcode">...</button>
                                        </div>


                                    </div>
                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-1 col-form-label"> Genuine PartNumber :
                                        </label>
                                        <div class="col-sm-2">
                                            <input list="IT_GenuinePartNumberBrowser"
                                                class="form-control IT_GenuinePartNumber" id="IT_GenuinePartNumber"
                                                placeholder="xxxxx-xxxxx">
                                            <datalist id="IT_GenuinePartNumberBrowser">
                                            </datalist>
                                            <span id="error_IT_GenuinePartNumber" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Company :
                                        </label>
                                        <div class="col-sm-2">
                                            <input list="IT_CompanyBrowser" class="form-control IT_Company"
                                                id="IT_Company" placeholder="Toyota, Hyundai">
                                            <datalist id="IT_CompanyBrowser">
                                            </datalist>
                                            <span id="error_IT_Company" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Brand :
                                        </label>
                                        <div class="col-sm-2">
                                            <input list="IT_BrandBrowser" class="form-control IT_Brand" id="IT_Brand"
                                                placeholder="German, Japan">
                                            <datalist id="IT_BrandBrowser">
                                            </datalist>
                                            <span id="error_IT_Brand" class="text-danger"></span>
                                        </div>


                                    </div>

                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-1 col-form-label"> Kind :
                                        </label>
                                        <div class="col-sm-2">
                                            <input type="text" class="form-control IT_Kind" id="IT_Kind"
                                                name="IT_Kind" placeholder="OEM,...">

                                            <span id="error_IT_Kind" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Ask_Stop :
                                        </label>
                                        <div class="col-sm-2">
                                            <input type="text" class="form-control IT_Ask_Stop" id="IT_Ask_Stop"
                                                placeholder="5, 2,...">

                                            <span id="error_IT_Ask_Stop" class="text-danger"></span>
                                        </div>


                                        <label for="" class="col-sm-1 col-form-label"> Active :
                                        </label>
                                        <div class="col-sm-2">
                                            <label class="switch">
                                                <input type="checkbox" id="IT_State" class="IT_State" name="IT_State">
                                                <span class="slider round"></span>
                                            </label>
                                            <span id="error_IT_State" class="text-danger"></span>
                                        </div>


                                    </div>


                                    <hr>
                                    <div class="ms-12 row pt-3">


                                        <label for="" class="col-sm-1 col-form-label"> Main Account :
                                        </label>
                                        <div class="col-sm-2">
                                            <input list="IT_MainAccountBrowser" class="form-control IT_MainAccount"
                                                id="IT_MainAccount" placeholder="Main Account...">
                                            <datalist id="IT_MainAccountBrowser">
                                            </datalist>
                                            <span id="error_IT_MainAccount" class="text-danger"></span>
                                        </div>

                                        <label for="" class="col-sm-1 col-form-label"> MA_Code :
                                        </label>
                                        <div class="col-sm-2">
                                            <input type="text" class="form-control IT_MainAccountNumber"
                                                id="IT_MainAccountNumber" disabled placeholder="Main Account Number...">

                                            <span id="error_IT_MainAccountNumber" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Account Code :
                                        </label>
                                        <div class="col-sm-2">
                                            <input type="text" class="form-control IT_AccountNumber"
                                                id="IT_AccountNumber" disabled>

                                            <span id="error_IT_AccountNumber" class="text-danger"></span>
                                        </div>
                                        <div class="col-sm-auto">
                                            <button
                                                class="btn btn-secondary form-control generateaccountnumber">...</button>
                                        </div>

                                    </div>

                                    <hr>
                                    <div class="ms-12 row pt-3">

                                        <label for="" class="col-sm-1 col-form-label"> Description :
                                        </label>
                                        <div class="col-sm-9">
                                            <textarea class="form-control rounded-1 IT_Description" id="IT_Description" name="IT_Description" rows="3"
                                                placeholder="Write a description about the item like size, demention or else things"></textarea>

                                        </div>


                                    </div>

                                    <hr>
                                    <div class="ms-12 row pt-3">

                                        <label for="" class="col-sm-1 col-form-label"> Notes :
                                        </label>
                                        <div class="col-sm-9">
                                            <textarea class="form-control rounded-1 IT_Notes" id="IT_Notes" name="IT_Notes" rows="3"
                                                placeholder="Your Notes about the Item"></textarea>

                                        </div>


                                    </div>
                                    <hr>
                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-1 col-form-label"> </label>
                                        <div class="col-sm-1">
                                            <button class="btn btn-primary form-control itemsSave">Save Data</button>

                                        </div>
                                        <div class="col-sm-1">
                                            <button class="btn btn-warning form-control itemsDetails">Details</button>

                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>


            <div class="col-md-12 mt-5">
                <div class="container-fluid mt-3 " id="detailscontainer">
                    <div class="row">
                        <ul class="nav nav-tabs">
                            <li class="nav-item"><a href="#itemsfour" class="nav-link active"
                                    data-bs-toggle="tab">Details</a></li>
                            <li class="nav-item"><a href="#itemsthrees" class="nav-link " data-bs-toggle="tab">Store</a>
                            </li>
                            <li class="nav-item"><a href="#itemsPrices" class="nav-link " data-bs-toggle="tab">Saling
                                    Prices</a></li>


                        </ul>
                        <div class="tab-content ">

                            <div class="tab-pane mt-3 active" id="itemsfour">
                                <div class="row border g-0 rounded shadow-sm">
                                    <div class="col p-4">

                                        <div class="col-md-14 mt-1">
                                            <div class="card">
                                                <div class="card-header bg-dark">
                                                    <button class="btn btn-primary btn-sm float-end itemFourAdd">Add New
                                                        Detail
                                                    </button>
                                                    <h4>Details</h4>
                                                </div>
                                                <div class="card-body">
                                                    <div class="row">

                                                        <div class="col-md-12">
                                                            <table id="itemFour_data"
                                                                class="table table-bordered table-striped itemFour_data"
                                                                cellspacing="0" width="100%">
                                                                <thead class="dataheader_itemFour table-dark">
                                                                    <tr>
                                                                        <td>SSN</td>
                                                                        <td>Date Range</td>
                                                                        <td>Model</td>
                                                                        <td>Frames Options </td>
                                                                        <td>Events </td>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="databody_itemFour">

                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card itemFouraction" id="itemFouraction">
                                                <div class="card-header bg-dark">
                                                    <button
                                                        class="btn btn-danger btn-sm m-1 mb-3 float-end itemFourClose">Close
                                                    </button>
                                                    <h4 style="color: white;" id="card_itemFourtitle"
                                                        class="card_itemFourtitle"> </h4>

                                                </div>
                                                <div class="card-body">
                                                    <div class="row ">

                                                        <div class="col-md-12 ">
                                                            <div class="form-group ">
                                                                @csrf
                                                                <div class="ms-12 row pt-3">
                                                                    <div class="col-sm-auto">
                                                                        <input type="text" name="IT4_ID"
                                                                            id="IT4_ID" class="form-control IT4_ID"
                                                                            hidden>
                                                                        <input type="text" name="IT4_FK_IT"
                                                                            id="IT4_FK_IT" class="form-control IT4_FK_IT"
                                                                            hidden>

                                                                    </div>
                                                                </div>

                                                                <div class="ms-12 row pt-3">
                                                                    <label for="" class="col-sm-1 col-form-label">
                                                                        Date Range
                                                                    </label>
                                                                    <div class="col-sm-2">
                                                                        <input type="text"
                                                                            class="form-control IT4_DateRange"
                                                                            id="IT4_DateRange" name="IT4_DateRange"
                                                                            placeholder="07/1999-05/2015">
                                                                        <span id="error_IT4_DateRange"
                                                                            class="text-danger"></span>
                                                                    </div>
                                                                    <label for="" class="col-sm-1 col-form-label">
                                                                        Model
                                                                    </label>
                                                                    <div class="col-sm-2">
                                                                        <input list="IT4_ModelBrowser"
                                                                            class="form-control IT4_Model" id="IT4_Model"
                                                                            placeholder="COASTER,SANTA FE,...">
                                                                        <datalist id="IT4_ModelBrowser">
                                                                        </datalist>
                                                                        <span id="error_IT4_Model"
                                                                            class="text-danger"></span>
                                                                    </div>
                                                                    <label for="" class="col-sm-1 col-form-label">
                                                                        Frames Options
                                                                    </label>
                                                                    <div class="col-sm-4">
                                                                        <input type="text"
                                                                            class="form-control IT4_FramesOptions"
                                                                            id="IT4_FramesOptions"
                                                                            name="IT4_FramesOptions"
                                                                            placeholder="HZ,JZ,...">
                                                                        <span id="error_IT4_FramesOptions"
                                                                            class="text-danger"></span>
                                                                    </div>


                                                                </div>

                                                                <hr>
                                                                <div class="ms-12 row pt-3">
                                                                    <label for="" class="col-sm-1 col-form-label">
                                                                    </label>
                                                                    <div class="col-sm-1">
                                                                        <button
                                                                            class="btn btn-primary form-control itemFourSave">Save
                                                                            Data</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="col-md-14 mt-1 itmeFiveDisplay" id="itemFiveDisplay">
                                            <div class="card itemFiveaction2" id="itemFiveaction2">
                                                <div class="card-header bg-dark">
                                                    <button class="btn btn-primary btn-sm float-end itemFiveAdd">Add New
                                                        Detail
                                                    </button>
                                                    <button
                                                        class="btn btn-danger btn-sm mr-2 float-end itemFiveCloseAll">Close
                                                    </button>
                                                    <h4>Details</h4>
                                                </div>
                                                <div class="card-body">
                                                    <div class="row">

                                                        <div class="col-md-12">
                                                            <table id="itemFive_data"
                                                                class="table table-bordered table-striped itemFive_data"
                                                                cellspacing="0" width="100%">
                                                                <thead class="dataheader_itemFive table-dark">
                                                                    <tr>
                                                                        <td>SSN</td>
                                                                        <td>Model Date</td>
                                                                        <td>Matching Models</td>
                                                                        <td>Model Options </td>
                                                                        <td>Events </td>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="databody_itemFive">

                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card itemFiveaction" id="itemFiveaction">
                                                <div class="card-header bg-dark">
                                                    <button
                                                        class="btn btn-danger btn-sm m-1 mb-3 float-end itemFiveClose">Close
                                                    </button>
                                                    <h4 style="color: white;" id="card_itemFivetitle"
                                                        class="card_itemFivetitle"> </h4>

                                                </div>
                                                <div class="card-body">
                                                    <div class="row ">

                                                        <div class="col-md-12 ">
                                                            <div class="form-group ">
                                                                @csrf
                                                                <div class="ms-12 row pt-3">
                                                                    <div class="col-sm-auto">
                                                                        <input type="text" name="IT5_ID"
                                                                            id="IT5_ID" class="form-control IT5_ID"
                                                                            hidden>
                                                                        <input type="text" name="IT5_FK_IT4"
                                                                            id="IT5_FK_IT4"
                                                                            class="form-control IT5_FK_IT4" hidden>

                                                                    </div>
                                                                </div>

                                                                <div class="ms-12 row pt-3">
                                                                    <label for="" class="col-sm-1 col-form-label">
                                                                        Model Date
                                                                    </label>
                                                                    <div class="col-sm-2">
                                                                        <input type="text"
                                                                            class="form-control IT5_ModelDate"
                                                                            id="IT5_ModelDate" name="IT5_ModelDate"
                                                                            placeholder="07/1999-05/2015">
                                                                        <span id="error_IT5_ModelDate"
                                                                            class="text-danger"></span>
                                                                    </div>
                                                                    <label for="" class="col-sm-1 col-form-label">
                                                                        Matching Model
                                                                    </label>
                                                                    <div class="col-sm-2">
                                                                        <input type="text"
                                                                            class="form-control IT5_MatchingModels"
                                                                            id="IT5_MatchingModels"
                                                                            name="IT5_MatchingModels"
                                                                            placeholder="xxxxx-xxxx">
                                                                        <span id="error_IT5_MatchingModels"
                                                                            class="text-danger"></span>
                                                                    </div>
                                                                    <label for="" class="col-sm-1 col-form-label">
                                                                        Model Options
                                                                    </label>
                                                                    <div class="col-sm-4">
                                                                        <input type="text"
                                                                            class="form-control IT5_ModelOptions"
                                                                            id="IT5_ModelOptions" name="IT5_ModelOptions"
                                                                            placeholder="HZ,STD,4WD,...">
                                                                        <span id="error_IT5_ModelOptions"
                                                                            class="text-danger"></span>
                                                                    </div>


                                                                </div>

                                                                <hr>
                                                                <div class="ms-12 row pt-3">
                                                                    <label for="" class="col-sm-1 col-form-label">
                                                                    </label>
                                                                    <div class="col-sm-1">
                                                                        <button
                                                                            class="btn btn-primary form-control itemFiveSave">Save
                                                                            Data</button>
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
                            </div>

                            <div class="tab-pane mt-3" id="itemsthrees">
                                <div class="row border g-0 rounded shadow-sm">
                                    <div class="col p-4">

                                        <div class="col-md-14 mt-1">
                                            <div class="card">
                                                <div class="card-header bg-dark">

                                                    <button
                                                        class="btn btn-primary btn-sm float-end ItemThreeAdd">Addition</button>

                                                    <h4>Addition</h4>
                                                </div>
                                                <div class="card-body">
                                                    <div class="row">

                                                        <div class="col-md-12">
                                                            <table id="ItemThree_data"
                                                                class="table table-bordered table-striped ItemThree_data"
                                                                cellspacing="0" width="100%">
                                                                <thead class="dataheader_ItemThree table-dark">
                                                                    <tr>
                                                                        <td>SSN</td>
                                                                        <td>Count</td>
                                                                        <td>Count Type </td>
                                                                        <td>Store Name</td>
                                                                        <td>Main Store</td>
                                                                        <td>Item Position</td>
                                                                        <td>Events</td>
                                                                    </tr>
                                                                </thead>
                                                                <tbody class="databody_ItemThree">

                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>

                                                </div>


                                            </div>
                                            <div class="card ItemThreeaction" id="ItemThreeaction">
                                                <div class="card-header bg-dark">
                                                    <button
                                                        class="btn btn-danger btn-sm m-1 mb-3 float-end ItemThreeClose">Close
                                                    </button>
                                                    <h4 style="color: white;" id="card_ItemThreetitle"
                                                        class="card_ItemThreetitle"> </h4>

                                                </div>
                                                <div class="card-body">
                                                    <div class="row ">

                                                        <div class="col-md-12 ">
                                                            <div class="form-group ">
                                                                @csrf
                                                                <div class="ms-12 row pt-3">
                                                                    <div class="col-sm-auto">
                                                                        <input type="text" name="IT2_ID"
                                                                            id="IT2_ID" class="form-control IT2_ID"
                                                                            hidden>
                                                                        <input type="text" name="IT2_FK_IT"
                                                                            id="IT2_FK_IT" class="form-control IT2_FK_IT"
                                                                            hidden>

                                                                    </div>
                                                                </div>

                                                                <div class="ms-12 row pt-3">
                                                                    <label for="" class="col-sm-1 col-form-label">
                                                                        Item Count
                                                                    </label>
                                                                    <div class="col-sm-2">
                                                                        <input type="text"
                                                                            class="form-control IT2_Count" id="IT2_Count"
                                                                            name="IT2_Count" placeholder="1, 2, ....."
                                                                            disabled>
                                                                        <span id="error_IT2_Count"
                                                                            class="text-danger"></span>
                                                                    </div>
                                                                    <label for="" class="col-sm-1 col-form-label">
                                                                        Kind :
                                                                    </label>
                                                                    <div class="col-sm-2">
                                                                        <input list="IT2_Count_KindBrowser"
                                                                            class="form-control IT2_Count_Kind"
                                                                            id="IT2_Count_Kind"
                                                                            placeholder="package, count,..."
                                                                            disabled>
                                                                        <datalist id="IT2_Count_KindBrowser">
                                                                        </datalist>
                                                                        <span id="error_IT2_Count_Kind"
                                                                            class="text-danger"></span>
                                                                    </div>
                                                                    <label for="" class="col-sm-1 col-form-label">
                                                                        Active
                                                                    </label>
                                                                    <div class="col-sm-2">
                                                                        <label class="switch">
                                                                            <input type="checkbox" id="IT2_State"
                                                                                class="IT2_State" name="IT2_State">
                                                                            <span class="slider round"></span>
                                                                        </label>
                                                                        <span id="error_IT2_State"
                                                                            class="text-danger"></span>
                                                                    </div>


                                                                </div>


                                                                <div class="ms-12 row pt-3">


                                                                    <label for="" class="col-sm-1 col-form-label">
                                                                        Store
                                                                    </label>
                                                                    <div class="col-sm-2">
                                                                        <input list="IT2_StoreNameBrowser"
                                                                            class="form-control IT2_StoreName"
                                                                            id="IT2_StoreName"
                                                                            placeholder="write the store name..."
                                                                            disabled>
                                                                        <datalist id="IT2_StoreNameBrowser">
                                                                        </datalist>
                                                                        <span id="error_IT2_StoreName"
                                                                            class="text-danger"></span>
                                                                    </div>

                                                                    <label for="" class="col-sm-1 col-form-label">
                                                                        M_Store
                                                                    </label>
                                                                    <div class="col-sm-2">
                                                                        <input type="text"
                                                                            class="form-control IT2_MainStore"
                                                                            id="IT2_MainStore" name="IT2_MainStore"
                                                                            disabled>

                                                                        <span id="error_IT2_MainStore"
                                                                            class="text-danger"></span>
                                                                    </div>
                                                                    <label for="" class="col-sm-1 col-form-label">
                                                                        Location
                                                                    </label>
                                                                    <div class="col-sm-2">
                                                                        <input type="text"
                                                                            class="form-control IT2_ItemPositions"
                                                                            id="IT2_ItemPositions"
                                                                            name="IT2_ItemPositions"
                                                                            placeholder="Item Location in the store">

                                                                        <span id="error_IT2_ItemPositions"
                                                                            class="text-danger"></span>
                                                                    </div>

                                                                </div>


                                                                <hr>
                                                                <div class="ms-12 row pt-3">
                                                                    <label for="" class="col-sm-1 col-form-label">
                                                                    </label>
                                                                    <div class="col-sm-1">
                                                                        <button
                                                                            class="btn btn-primary form-control itemsThreeSave">Save
                                                                            Data</button>
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
                            </div>

                            <div class="tab-pane mt-3" id="itemsPrices">
                                <div class="row border g-0 rounded shadow-sm">
                                    <div class="col p-4">

                                        <div class="col-md-14 mt-1">

                                            <div class="card ItemPricesaction" id="ItemPricesaction">
                                                <div class="card-header bg-dark">
                                                    {{-- <button class="btn btn-danger btn-sm m-1 mb-3 float-end ItemThreeClose">Close
                                                </button> --}}
                                                    <h4 style="color: white;" id="card_ItemPricestitle"
                                                        class="card_ItemPricestitle">Prices </h4>

                                                </div>
                                                <div class="card-body">
                                                    <div class="row ">

                                                        <div class="col-md-12 ">
                                                            <div class="form-group ">
                                                                @csrf


                                                                <div class="ms-12 row pt-3">
                                                                    <label for="" class="col-sm-1 col-form-label">
                                                                        Level_01
                                                                    </label>
                                                                    <div class="col-sm-2">
                                                                        <input type="text" class="form-control IT_PL01"
                                                                            id="IT_PL01" name="IT_PL01"
                                                                            placeholder="500.66">
                                                                        <span id="error_IT_PL01"
                                                                            class="text-danger"></span>
                                                                    </div>
                                                                    <label for="" class="col-sm-1 col-form-label">
                                                                        Level_02
                                                                    </label>
                                                                    <div class="col-sm-2">
                                                                        <input type="text" class="form-control IT_PL02"
                                                                            id="IT_PL02" name="IT_PL02"
                                                                            placeholder="500.66">
                                                                        <span id="error_IT_PL02"
                                                                            class="text-danger"></span>
                                                                    </div>
                                                                    <label for="" class="col-sm-1 col-form-label">
                                                                        Level_03
                                                                    </label>
                                                                    <div class="col-sm-2">
                                                                        <input type="text" class="form-control IT_PL03"
                                                                            id="IT_PL03" name="IT_PL03"
                                                                            placeholder="500.66">
                                                                        <span id="error_IT_PL03"
                                                                            class="text-danger"></span>
                                                                    </div>

                                                                </div>


                                                                <div class="ms-12 row pt-3">
                                                                    <label for="" class="col-sm-1 col-form-label">
                                                                        Level_04
                                                                    </label>
                                                                    <div class="col-sm-2">
                                                                        <input type="text" class="form-control IT_PL04"
                                                                            id="IT_PL04" name="IT_PL04"
                                                                            placeholder="500.66">
                                                                        <span id="error_IT_PL04"
                                                                            class="text-danger"></span>
                                                                    </div>
                                                                    <label for="" class="col-sm-1 col-form-label">
                                                                        Level_05
                                                                    </label>
                                                                    <div class="col-sm-2">
                                                                        <input type="text" class="form-control IT_PL05"
                                                                            id="IT_PL05" name="IT_PL05"
                                                                            placeholder="500.66">
                                                                        <span id="error_IT_PL05"
                                                                            class="text-danger"></span>
                                                                    </div>
                                                                    <label for="" class="col-sm-1 col-form-label">
                                                                        Level_06
                                                                    </label>
                                                                    <div class="col-sm-2">
                                                                        <input type="text" class="form-control IT_PL06"
                                                                            id="IT_PL06" name="IT_PL06"
                                                                            placeholder="500.66">
                                                                        <span id="error_IT_PL06"
                                                                            class="text-danger"></span>
                                                                    </div>



                                                                </div>


                                                                <hr>
                                                                <div class="ms-12 row pt-3">
                                                                    <label for="" class="col-sm-1 col-form-label">
                                                                    </label>
                                                                    <div class="col-sm-1">
                                                                        <button
                                                                            class="btn btn-primary form-control itemsPricesSave">Save
                                                                            Data</button>
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
                            </div>

                        </div>


                    </div>
                </div>
            </div>



        </div>

    </div>
    <script type="text/javascript" src="{{ url('resources/js/pro_js/items.js') }}"></script>
    <script type="text/javascript" src="{{ url('resources/js/pro_js/itemsThree.js') }}"></script>
    <script type="text/javascript" src="{{ url('resources/js/pro_js/itemsFour.js') }}"></script>
    <script type="text/javascript" src="{{ url('resources/js/pro_js/itemsFive.js') }}"></script>

    <script>
        $("#itemsaction").hide();
        $('#ItemThreeaction').hide();
        $('#detailscontainer').hide();
        $('#itemFouraction').hide();
        $('#itemFiveaction').hide();
        $('#itemFiveaction2').hide();
    </script>

@endSection()
