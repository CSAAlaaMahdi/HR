@extends('admin.layout.main')
@section('title', 'الصلاحيات')
@section('content')
    <div class="row border g-0 rounded shadow-sm ">
        <div class="col p-2">
            <div class="col-md-12 mt-2">
                <div class="card ">
                    <div class="card-header bg-dark">

                        <button class="btn btn-primary btn-sm m-1 float-end permissionsAdd">اضافة الصلاحيات
                        </button>

                        <h4 style="color: white;"></h4>

                    </div>
                    <div class="card-body">

                        <table id="permissions_data" class="table table-bordered table-striped permissions_data"
                            cellspacing="0" width="100%">
                            <thead class="dataheader_permissions table-dark">
                                <tr>
                                    <td>ت</td>
                                    <td>اسم مجموعة الصلاحية</td>
                                    <td>الحدث</td>
                                </tr>
                            </thead>
                            <tbody class="databody_permissions">

                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
            <div class="col-md-12 mt-5">
                <div class="card permissionsaction" id="permissionsaction">
                    <div class="card-header bg-dark">
                        <button class="btn btn-danger btn-sm m-1 mb-3 float-end permissionsClose">خروج
                        </button>
                        <h4 style="color: white;" id="card_permissionstitle" class="card_permissionstitle"> </h4>

                    </div>
                    <div class="card-body ">
                        <div class="row ">

                            @csrf
                            <div class="col-lg-12">
                                <div class="card mb-4">
                                    <div class="card-body">
                                        <div class="ms-12 row pt-3">
                                            <div class="col-sm-auto">
                                                <input type="text" name="P_ID" id="P_ID"
                                                    class="form-control P_ID" hidden>

                                            </div>
                                        </div>


                                        <div class="row mt-2">
                                            <div class="col-sm-3">
                                                <p class="mb-0">اسم المجموعة:</p>
                                            </div>
                                            <div class="col-sm-9">
                                                <select name="P_GroupName" id="P_GroupName"
                                                    class="col-sm-3 col-form-label form-select P_GroupName">

                                                </select>

                                            </div>
                                        </div>


                                        <hr>
                                        <div class="col-sm-3">
                                            <p class="mb-0">صلاحية الحدث</p>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-sm-3">
                                                <p class="mb-0">انشاء :</p>
                                            </div>
                                            <div class="col-sm-9">


                                                <input type="checkbox" name="P_Create" id="P_Create"
                                                    class="form-check-input" autocomplete="off">


                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-sm-3">
                                                <p class="mb-0">تحديث :</p>
                                            </div>
                                            <div class="col-sm-9">
                                                <input type="checkbox" name="P_Update" id="P_Update"
                                                    class="form-check-input" autocomplete="off">

                                            </div>
                                        </div>
                                        <div class="row mt-2">
                                            <div class="col-sm-3">
                                                <p class="mb-0">حذف :</p>
                                            </div>
                                            <div class="col-sm-9">
                                                <input type="checkbox" name="P_Delete" id="P_Delete"
                                                    class="form-check-input" autocomplete="off">

                                            </div>
                                        </div>
                                        <hr>
                                        <div class="col-sm-3">
                                            <p class="mb-0">نطاق العمل</p>
                                        </div>
                                        <div class="ms-12 row">
                                            <div class="col-sm-auto">
                                                <p class="mb-0">الداشبورد:</p>
                                            </div>
                                            <div class="col-sm-1">
                                                <input type="checkbox" name="P_Dashboard" id="P_Dashboard"
                                                    class="form-check-input" autocomplete="off">
                                            </div>

                                            <div class="col-sm-auto">
                                                <p class="mb-0">المستخدمون :</p>
                                            </div>
                                            <div class="col-sm-1">
                                                <input type="checkbox" name="P_Users" id="P_Users"
                                                    class="form-check-input" autocomplete="off">
                                            </div>
                                            <div class="col-sm-auto">
                                                <p class="mb-0">نسخ احتياطي :</p>
                                            </div>
                                            <div class="col-sm-1">
                                                <input type="checkbox" name="P_Backup" id="P_Backup"
                                                    class="form-check-input" autocomplete="off">
                                            </div>


                                        </div>
                                        <div class="ms-12 row">
                                            <div class="col-sm-auto">
                                                <p class="mb-0">استعادة:</p>
                                            </div>
                                            <div class="col-sm-1">
                                                <input type="checkbox" name="P_Recovery" id="P_Recovery"
                                                    class="form-check-input" autocomplete="off">
                                            </div>

                                            <div class="col-sm-auto">
                                                <p class="mb-0">المجموعات :</p>
                                            </div>
                                            <div class="col-sm-1">
                                                <input type="checkbox" name="P_Groups" id="P_Groups"
                                                    class="form-check-input" autocomplete="off">
                                            </div>
                                            <div class="col-sm-auto">
                                                <p class="mb-0"> الصلاحيات :</p>
                                            </div>
                                            <div class="col-sm-1">
                                                <input type="checkbox" name="P_Permissions" id="P_Permissions"
                                                    class="form-check-input" autocomplete="off">
                                            </div>


                                        </div>
                                        <div class="ms-12 row">
                                            <div class="col-sm-auto">
                                                <p class="mb-0">الحالة:</p>
                                            </div>
                                            <div class="col-sm-1">
                                                <input type="checkbox" name="P_State" id="P_State"
                                                    class="form-check-input" autocomplete="off">
                                            </div>



                                        </div>

                                        <hr>
                                        <button class="btn btn-success btn-sm m-1 permissionsSave">حفظ</button>

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
        $('#permissionsaction').hide();
    </script>

@endSection()
