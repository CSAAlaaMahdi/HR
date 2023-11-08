@extends('admin.layout.main')
@section('title', 'Permissions Name')
@section('content')

    <div class="row border g-0 rounded shadow-sm ">
        <div class="col p-4">
            <div class="col-md-12 mt-2">
                <div class="card ">
                    <div class="card-header bg-dark">

                        <button class="btn btn-primary btn-sm m-1 float-end permissionnameAdd">Add Permission Name
                        </button>

                        <h4 style="color: white;"></h4>

                    </div>
                    <div class="card-body">

                        <table id="permissionname_data" class="table table-bordered table-striped permissionname_data" cellspacing="0"
                            width="100%">
                            <thead class="dataheader_permissionname table-dark">
                                <tr>
                                    <td>No</td>
                                    <td>Permission Name </td>
                                    <td>Event</td>
                                </tr>
                            </thead>
                            <tbody class="databody_permissionname">

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <div class="card permissionnameaction" id="permissionnameaction">
                    <div class="card-header bg-dark">
                        <button class="btn btn-danger btn-sm m-1 mb-3 float-end permissionnameClose">Close
                        </button>
                        <h4 style="color: white;" id="card_permissionnametitle" class="card_permissionnametitle"> </h4>

                    </div>
                    <div class="card-body ">
                        <div class="row ">

                            @csrf
                            <div class="col-md-12 ">
                                <div class="form-group ">
                                    <div class="ms-12 row pt-3">
                                        <div class="col-sm-auto">
                                            <input type="text" name="p_id" id="p_id" class="form-control p_id"
                                                hidden>

                                        </div>
                                    </div>

                                    <div class="ms-12 row pt-3">
                                        <label for="" class="col-sm-2 col-form-label"> Permission Name :
                                        </label>
                                        <div class="col-sm-3">
                                            <input type="text" name="p_name" id="p_name" class="form-control p_name"
                                                autocomplete="off">
                                            <span id="error_p_name" class="text-danger"></span>
                                        </div>

                                    </div>




                                    <div>
                                        <?php echo '----------------------------------------------------------------------------------------'; ?>

                                        <div class="ms-12 row pt-3">
                                            <label for="" class="col-sm-2 col-form-label"> </label>
                                            <div class="col-sm-2">
                                                <button class="btn btn-primary form-control permissionnameSave">Save
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
        <script>
            $("#permissionnameaction").hide();
        </script>
    @endSection()
