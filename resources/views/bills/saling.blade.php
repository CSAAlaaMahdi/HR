@extends('admin.layout.main')
@section('title', 'Buying Bills')
@section('content')

    <div class="row border g-0 rounded shadow-sm " style="background-color:#e5e6e7">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card ">
                    <div class="card-header text-white" style="background-color:#3a3a3f">

                        <button class="btn btn-primary btn-sm m-1 float-end BillSaleAdd">Add New Bill
                        </button>

                        <h4 style="color: white;">Saling Bills</h4>

                    </div>
                    <div class="card-body">
                            <table id="BillSale_data" class="table table-bordered table-striped BillSale_data" cellspacing="0"
                            width="100%">
                            <thead class="dataheader_BillSale text-white" style="background-color:#343A40">
                                <tr>
                                    <td>SSN</td>
                                    <td>Bill Number</td>
                                    <td>Bill Date</td>
                                    <td>Bill Type</td>
                                    <td>Customer</td>
                                    <td>Provider</td>
                                    <td>Store Name</td>
                                    <td>Total Money</td>
                                    <td>Credit</td>
                                    <td>Debt</td>
                                    <td>Event</td>
                                </tr>
                            </thead>
                            <tbody class="databody_BillSale">

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <div class="card BillSaleaction" id="BillSaleaction">
                    <div class="card-header bg-dark">
                        <button class="btn btn-danger btn-sm m-1 mb-3 float-end BillSaleClose">Close
                        </button>
                        <h4 style="color: white;" id="card_BillSaletitle" class="card_BillSaletitle"> </h4>

                    </div>
                    <div class="card-body ">
                        <div class="row ">

                            @csrf
                            <div class="col-md-12 ">
                                <div class="form-group ">
                                    <div class="ms-12 row pt-3">
                                        <div class="col-sm-auto">
                                            <input type="text" name="BS_ID" id="BS_ID" class="form-control BS_ID"
                                                hidden>

                                        </div>
                                    </div>

                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-1 col-form-label"> Bill Number
                                        </label>
                                        <div class="col-sm-2">
                                            <input type="text" name="BS_BillNumber" id="BS_BillNumber" class="form-control BS_BillNumber"
                                                autocomplete="on" placeholder="000000000" disabled>
                                            <span id="error_BS_BillNumber" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Bill Date
                                        </label>
                                        <div class="col-sm-2">
                                            <input type="date" name="BS_BillDate" id="BS_BillDate" class="form-control BS_BillDate"
                                                autocomplete="on">
                                            <span id="error_BS_BillDate" class="text-danger"></span>
                                        </div>

                                        <label for="" class="col-sm-1 col-form-label"> Store Name
                                        </label>
                                        <div class="col-sm-2">
                                            <input list="BS_StoreNameBrowser" class="form-control BS_StoreName" id="BS_StoreName" placeholder="kerbala, etc">
                                            <datalist id="BS_StoreNameBrowser">
                                            </datalist>
                                            <span id="error_BS_StoreName" class="text-danger"></span>
                                        </div>
                                    </div>

                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-1 col-form-label"> Customer
                                        </label>
                                        <div class="col-sm-2">
                                            <input list="BS_CustomerBrowser" class="form-control BS_Customer" id="BS_Customer" placeholder="any customer here">
                                            <datalist id="BS_CustomerBrowser">
                                            </datalist>
                                            <span id="error_BS_Customer" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Provider Name
                                        </label>
                                        <div class="col-sm-2">
                                            <input list="BS_ProviderBrowser" class="form-control BS_Provider" id="BS_Provider" placeholder="Provider Name here..">
                                            <datalist id="BS_ProviderBrowser">
                                            </datalist>
                                            <span id="error_BS_Provider" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Bill Type
                                        </label>
                                        <div class="col-sm-2">
                                            <input list="BS_BillTypeBrowser" class="form-control BS_BillType" id="BS_BillType" placeholder="Cash, Debt">
                                            <datalist id="BS_BillTypeBrowser">
                                                <option value="Cash">Cash</option>
                                                <option value="Debt">Debt</option>
                                            </datalist>
                                            <span id="error_BS_BillType" class="text-danger"></span>
                                        </div>


                                    </div>
                                    <hr>
                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-1 col-form-label"> Currency
                                        </label>
                                        <div class="col-sm-2">
                                            <input list="BS_CurrencyBrowser" class="form-control BS_Currency" id="BS_Currency" placeholder="USD,IQD,UAE...">
                                            <datalist id="BS_CurrencyBrowser">
                                            </datalist>
                                            <span id="error_BS_Currency" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Currency Cost
                                        </label>
                                        <div class="col-sm-2">
                                            <input type="text" name="BS_CurrencyCost" id="BS_CurrencyCost" class="form-control BS_CurrencyCost"
                                                autocomplete="on" placeholder="0000000">
                                            <span id="error_BS_CurrencyCost" class="text-danger"></span>
                                        </div>




                                    </div>
                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-1 col-form-label"> Credit
                                        </label>
                                        <div class="col-sm-2">
                                            <input type="text" name="BS_Credit" id="BS_Credit" class="form-control BS_Credit"
                                                autocomplete="on" placeholder="00000000000">
                                            <span id="error_BS_Credit" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Debt
                                        </label>
                                        <div class="col-sm-2">
                                            <input type="text" name="BS_Debt" id="BS_Debt" class="form-control BS_Debt"
                                                autocomplete="on" placeholder="000000000">
                                            <span id="error_BS_Debt" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Total
                                        </label>
                                        <div class="col-sm-2">
                                            <input type="text" name="BS_TotalMoney" id="BS_TotalMoney" class="form-control BS_TotalMoney"
                                                autocomplete="on" placeholder="000000000" disabled>
                                            <span id="error_BS_TotalMoney" class="text-danger"></span>
                                        </div>

                                    </div>
                                    <hr>
                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-1 col-form-label"> State
                                        </label>
                                        <div class="col-sm-2">
                                            <label class="switch">
                                                <input type="checkbox" id="BS_State" class="BS_State" name="BS_State">
                                                <span class="slider round"></span>
                                              </label>
                                            <span id="error_BS_State" class="text-danger"></span>
                                        </div>
                                    </div>
                                    <div>

                                        <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-1 col-form-label">Notes
                                        </label>
                                        <div class="col-sm-8">
                                            <textarea class="form-control rounded-1 BS_Notes" id="BS_Notes" name="BS_Notes" rows="3"></textarea>
                                        </div>

                                        </div>
                                    </div>
                                    <div>


                                        <div class="ms-12 row pt-3">
                                            <label for="" class="col-sm-1 col-form-label"> </label>
                                            <div class="col-sm-1">
                                                <button class="btn btn-primary form-control BillSaleSave">Save Data
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

           {{-- items of bills --}}

           <div class="col-md-12 mt-2">
                <div class="card BillSaleItems" id="BillSaleItems">
                    <div class="card-header text-white" style="background-color:#3a3a3f">

                        <button class="btn btn-primary btn-sm m-1 float-end BillSaleItemsAdd">Add New Item
                        </button>
                        <button class="btn btn-danger btn-sm m-1 float-end BillSaleItemsCloseAll">Close
                        </button>

                        <h4 style="color: white;">Purchases Items</h4>

                    </div>
                    <div class="card-body">
                            <table id="BillSaleItems_data" class="table table-bordered table-striped BillSaleItems_data" cellspacing="0"
                            width="100%">
                            <thead class="dataheader_BillSaleItems text-white" style="background-color:#343A40">
                                <tr>
                                    <td>SSN</td>
                                    <td>Item Name</td>
                                    <td>Part Number</td>
                                    <td>Count</td>
                                    <td>Unit Price</td>
                                    <td>Total Money</td>
                                    <td>Event</td>
                                </tr>
                            </thead>
                            <tbody class="databody_BillSaleItems">

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <div class="card BillSaleItemsaction" id="BillSaleItemsaction">
                    <div class="card-header bg-dark">
                        <button class="btn btn-danger btn-sm m-1 mb-3 float-end BillSaleItemsClose">Close
                        </button>
                        <h4 style="color: white;" id="card_BillSaleItemstitle" class="card_BillSaleItemstitle"> </h4>

                    </div>
                    <div class="card-body ">
                        <div class="row ">

                            @csrf
                            <div class="col-md-12 ">
                                <div class="form-group ">
                                    <div class="ms-12 row pt-3">
                                        <div class="col-sm-auto">
                                            <input type="text" name="BSI_ID" id="BSI_ID" class="form-control BSI_ID"  hidden>
                                            <input type="text" name="BSI_FK_BS" id="BSI_FK_BS" class="form-control BSI_FK_BS"  hidden>


                                        </div>
                                    </div>

                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-1 col-form-label"> Item Name
                                        </label>
                                        <div class="col-sm-2">
                                            <input list="BSI_ItemNameBrowser" class="form-control BSI_ItemName" id="BSI_ItemName" placeholder="Piston,....">
                                            <datalist id="BSI_ItemNameBrowser">
                                            </datalist>
                                            <span id="error_BSI_ItemName" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Part Number
                                        </label>
                                        <div class="col-sm-2">
                                            <input list="BSI_C_PartNumberBrowser" class="form-control BSI_C_PartNumber" id="BSI_C_PartNumber" placeholder="xxxxx-xxxxx">
                                            <datalist id="BSI_C_PartNumberBrowser">
                                            </datalist>
                                            <span id="error_BSI_C_PartNumber" class="text-danger"></span>
                                        </div>


                                    </div>
                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-1 col-form-label"> Count
                                        </label>
                                        <div class="col-sm-2">
                                            <input type="text" name="BSI_Count" id="BSI_Count" class="form-control BSI_Count"  >
                                            <span id="error_BSI_Count" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Count Type
                                        </label>
                                        <div class="col-sm-2">
                                            <input list="BSI_CountTypeBrowser" class="form-control BSI_CountType" id="BSI_CountType" placeholder="count, package, .....">
                                            <datalist id="BSI_CountTypeBrowser">
                                            </datalist>
                                            <span id="error_BSI_CountType" class="text-danger"></span>
                                        </div>


                                    </div>

                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-1 col-form-label"> Unit price
                                        </label>
                                        <div class="col-sm-2">
                                            <input list="BSI_UnitPriceBrowser" class="form-control BSI_UnitPrice" id="BSI_UnitPrice" >
                                            <datalist id="BSI_UnitPriceBrowser">
                                            </datalist>
                                            <span id="error_BSI_UnitPrice" class="text-danger"></span>
                                        </div>
                                        <label for="" class="col-sm-1 col-form-label"> Total Money
                                        </label>
                                        <div class="col-sm-2">
                                            <input type="text" name="BSI_TotalMoney" id="BSI_TotalMoney" class="form-control BSI_TotalMoney"
                                            placeholder="00000000000" disabled>
                                            <span id="BSI_TotalMoney" class="text-danger"></span>
                                        </div>



                                    </div>

                                    <hr>
                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-1 col-form-label"> </label>
                                        <div class="col-sm-1">
                                            <button class="btn btn-primary form-control BillSaleItemsSave">Save Data
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
        <script type="text/javascript" src="{{url('admin/assets/js/pro_js/BillSale.js')}}"></script>
        <script type="text/javascript" src="{{url('admin/assets/js/pro_js/BillSaleItems.js')}}"></script>
        <script type="text/javascript" src="{{url('admin/assets/js/dselect.js')}}"></script>
        <script>
            $("#BillSaleaction").hide();
            $("#BillSaleItemsaction").hide();
            $("#BillSaleItems").hide();
        </script>
@endSection()
