@extends('admin.layout.main')
@section('title','Users')
@section('content')
<div class="row border g-0 rounded shadow-sm ">
    <div class="col p-4">
        <div class="col-md-12 mt-2">
            <div class="card ">
                <div class="card-header bg-dark">

                    <button class="btn btn-primary btn-sm m-1 float-end usersAdd">ِAdd User
                    </button>

                    <h4 style="color: white;"> Users </h4>

                </div>
                <div class="card-body">

                    <table id="users_data" class="table table-bordered table-striped users_data" cellspacing="0" width="100%">
                        <thead class="dataheader_users table-dark">
                            <tr>
                                <td>No</td>
                                <td>User Name </td>
                                <td>Permission Group </td>
                                <td>User State </td>
                                <td>Event</td>
                            </tr>
                        </thead>
                        <tbody class="databody_users">

                        </tbody>
                    </table>

                </div>
            </div>
        </div>
        <div class="col-md-12 mt-5">
            <div class="card usersaction" id="usersaction">
                <div class="card-header bg-dark">
                    <button class="btn btn-danger btn-sm m-1 mb-3 float-end usersClose">Close
                    </button>
                    <h4 style="color: white;" id="card_userstitle" class="card_userstitle"> </h4>

                </div>
                <div class="card-body ">
                    <div class="row ">

                        <div class="col-md-12 ">
                            <div class="form-group ">
                                @csrf
                                <div class="ms-12 row pt-3">
                                    <div class="col-sm-auto">
                                        <input type="text" name="u_id" id="u_id" class="form-control u_id" hidden>

                                    </div>
                                </div>

                                <div class="ms-12 row pt-3">
                                    <label for="" class="col-sm-2 col-form-label">  User Name :
                                    </label>
                                    <div class="col-sm-3">
                                        <input type="text" name="u_username" id="u_username" class="form-control u_username" autocomplete="off">
                                        <span id="error_u_username" class="text-danger"></span>
                                    </div>

                                </div>

                                <div class="ms-12 row pt-3">
                                    <label for="" class="col-sm-2 col-form-label"> Password  :
                                    </label>
                                    <div class="col-sm-3">
                                        <input type="password" name="u_password" id="u_password" class="form-control u_password" autocomplete="off">
                                        <span id="error_u_password" class="text-danger"></span>
                                    </div>

                                </div>


                                <div class="ms-12 row pt-3">

                                    <label for="" class="col-sm-2 col-form-label"> State :
                                    </label>
                                    <div class="col-sm-3">
                                        <select name="u_state" id="u_state" class="col-sm-11 col-form-label form-select u_state">

                                        </select>
                                        <span id="error_u_state" class="text-danger"></span>
                                    </div>
                                </div>

                                <div class="ms-12 row pt-3">

                                    <label for="" class="col-sm-2 col-form-label"> Permissions :
                                    </label>
                                    <div class="col-sm-3">
                                        <select name="u_permissiongroup" id="u_permissiongroup" class="col-sm-11 col-form-label form-select u_permissiongroup">

                                        </select>
                                        <span id="error_u_permissiongroup" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="ms-12 row pt-3">

                                    <label for="" class="col-sm-2 col-form-label"> Work Place  :
                                    </label>
                                    <div class="col-sm-3">
                                        <select name="u_workplace" id="u_workplace" class="col-sm-11 col-form-label form-select u_workplace">

                                        </select>
                                        <span id="error_u_workplace" class="text-danger"></span>
                                    </div>
                                </div>


                                <hr>

                                <div class="ms-12 row pt-3">
                                    <label for="" class="col-sm-2 col-form-label"> </label>
                                    <div class="col-sm-2">
                                        <button class="btn btn-primary form-control usersSave">Save</button>
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
    $("#usersaction").hide();
</script>
@endSection()
