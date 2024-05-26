@extends('admin.layout.mainarabic')
{{-- @section('title', 'الرئيسية') --}}
@section('content')

    <div class="row">
        <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
                <div class="inner">
                    <h3 id="EmpCount">0</h3>

                    <p id="titlefont"> عدد الموظفين</p>
                </div>
                <div class="icon">
                    <i class="ion ion-bag"></i>
                </div>
                <a href="{{route('employees.index')}}" class="small-box-footer" id="titlefont">  الموظفين <i class="fas fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
                <div class="inner">
                    <h3 id="GetVacations">0</h3>

                    <p id="titlefont">الاجازات خلال السنة</p>
                </div>
                <div class="icon">
                    <i class="ion ion-stats-bars"></i>
                </div>
                <a href="{{route('vacations.index')}}" class="small-box-footer" id="titlefont"> الاجازات <i class="fas fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-warning">
                <div class="inner">
                    <h3 id="GetDispatches">0</h3>

                    <p id="titlefont"> الايفادات السنوية</p>
                </div>
                <div class="icon">
                    <i class="ion ion-person-add"></i>
                </div>
                <a href="{{route('dispatch.index')}}" class="small-box-footer" id="titlefont"> الايفادات <i class="fas fa-arrow-circle-right"></i></a>
            </div>
        </div>
        <!-- ./col -->
        <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-danger">
                <div class="inner">
                    <h3 id="GetResearches">0</h3>

                    <p id="titlefont">البحوث المنشورة</p>
                </div>
                <div class="icon">
                    <i class="ion ion-pie-graph"></i>
                </div>
                <a href="{{route('researches.index')}}" class="small-box-footer" id="titlefont">البحوث <i class="fas fa-arrow-circle-right"></i></a>
            </div>
        </div>

        <!-- ./col -->
    </div>
    <div class="row">
        <!-- Left col -->

        <section class="col-lg-12 connectedSortable">
            <!-- Custom tabs (Charts with tabs)-->
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="datagrid pt-5" id="Certificationsdatagrid"></div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="datagrid pt-5" id="Certificationsdatagrid2"></div>
                </div>
            </div>



        </section>


        <!-- /.Left col -->
        <!-- right col (We are only adding the ID to make the widgets sortable)-->

        <!-- right col -->

    </div>

    <script type="text/javascript" src="{{ url('assets/js/pro_js/Admin.js') }}"></script>
    <script>


    </script>

@endSection()
