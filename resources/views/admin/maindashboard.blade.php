@extends('admin.layout.main')
@section('title', 'الداشبورد الرئيسي')
@section('content')
    <div class="row">
        <div class="col-lg-2 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
                <div class="inner">
                    <h3 id="CarsCount"><sup style="font-size: 20px">%</sup>50</h3>

                    <p class="titlefont">عجلات القسم</p>
                </div>
                <div class="icon">
                    <i class="ion ion-card"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-2 col-6">
            <!-- small box -->
            <div class="small-box bg-warning">
                <div class="inner">
                    <h3 id="EmployeesCount"></h3>

                    <p class="titlefont">منتسبي قسم الاليات</p>
                </div>
                <div class="icon">
                    <i class="ion ion-person-add"></i>
                </div>
                <a href="#" class="small-box-footer">More info<i class="fas fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <div class="col-lg-2 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
                <div class="inner">
                    <h3 id="AttendanceCount"></h3>

                    <p class="titlefont">الحضور اليومي</p>
                </div>
                <div class="icon">
                    <i class="ion ion-person"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <!-- ./col -->

        <div class="col-lg-2 col-6">
            <!-- small box -->
            <div class="small-box bg-danger">
                <div class="inner">
                    <h3 id="CarsDispatches"></h3>


                    <p class="titlefont">حركة الايفادات</p>
                </div>
                <div class="icon">
                    <i class="ion ion-android-bus"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <div class="col-lg-2 col-6">
            <!-- small box -->
            <div class="small-box bg-danger">
                <div class="inner">
                    <h3 id="CarsMovements"></h3>


                    <p class="titlefont">حركات العجلات</p>
                </div>
                <div class="icon">
                    <i class="ion ion-android-bus"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <!-- ./col -->
    </div>
    <div class="row">
        <!-- Left col -->

        <section class="col-lg-12 connectedSortable">
            <!-- Custom tabs (Charts with tabs)-->

            <div class="card float-left m-1 border-2" style="width: 50%">
                <div class="card-header ">
                    <h3 class="card-title">
                        <i class="fas fa-chart-BAR mr-1"></i>
                        حركة الاقسام
                    </h3>
                    <select class="form-select col-3 valueofmonth" id="">
                        {{-- <option selected>1</option> --}}
                        <option value="non">لاشيئ</option>
                        <option value="1">كانون الثاني</option>
                        <option value="2">شباط</option>
                        <option value="3">اذار</option>
                        <option value="4">نيسان</option>
                        <option value="5">ايار</option>
                        <option value="6">حزيران</option>
                        <option value="7">تموز</option>
                        <option value="8">اب</option>
                        <option value="9">ايلول </option>
                        <option value="10">تشرين الاول</option>
                        <option value="11">تشرين الثاني</option>
                        <option value="12">كانون الاول</option>
                    </select>

                </div><!-- /.card-header -->

                <div class="card-body" style="background-color:rgba(224,228,204,0.4);">
                    <div class="tab-content p-0">
                        <canvas id="maindashboard_01" height="100" style="height: 70px;"></canvas>
                    </div>
                </div><!-- /.card-body -->
            </div>

            <div class="card float-left m-1 border-2" style="width: 48%">
                <div class="card-header ">
                    <h3 class="card-title">
                        <i class="fas fa-chart-pie mr-1"></i>
                        حركة الاقسام
                    </h3>


                </div><!-- /.card-header -->

                <div class="card-body" style="background-color:rgba(224,228,204,0.4);">
                    <div class="tab-content p-0">
                        <canvas id="maindashboard_02" height="105" style="height: 70px;"></canvas>
                    </div>
                </div><!-- /.card-body -->
            </div>

            <!-- /.card -->


        </section>


        <!-- /.Left col -->
        <!-- right col (We are only adding the ID to make the widgets sortable)-->

        <!-- right col -->

    </div>

    <script>


    </script>

@endSection()
