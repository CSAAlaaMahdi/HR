@extends('admin.layout.mainarabic')
@section('title', 'الداشبورد')
@section('content')
    <div class="row">
        <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
                <div class="inner">
                    <h3>150</h3>

                    <p>New Orders</p>
                </div>
                <div class="icon">
                    <i class="ion ion-bag"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
                <div class="inner">
                    <h3>53<sup style="font-size: 20px">%</sup></h3>

                    <p>Bounce Rate</p>
                </div>
                <div class="icon">
                    <i class="ion ion-stats-bars"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-warning">
                <div class="inner">
                    <h3>44</h3>

                    <p>User Registrations</p>
                </div>
                <div class="icon">
                    <i class="ion ion-person-add"></i>
                </div>
                <a href="#" class="small-box-footer">More info <i class="fas fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-danger">
                <div class="inner">
                    <h3>65</h3>

                    <p>Unique Visitors</p>
                </div>
                <div class="icon">
                    <i class="ion ion-pie-graph"></i>
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
                    <select class="form-select col-3 valueofmonth" id="valueofmonth">
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
                        <canvas id="revenue-chart-canvas" height="100" style="height: 70px;"></canvas>
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
                        <canvas id="revenue-chart-canvas2" height="105" style="height: 70px;"></canvas>
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
