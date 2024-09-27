@extends('admin.layout.mainarabic')
{{-- @section('title', 'Saling Groups') --}}
@section('content')
    <div class="row g-0 rounded mt-5">

        <div class="col-md-12 mb-5">
            <div class="card" id="firstCard">
                <div class="card-header" style="background-color: #343A40">

                    <h4 style="color: white;float: right;margin-right: 35%">تقارير الموظفين</h4>

                </div>
                <div class="card-body">

                    <div class="datagrid" id="EmployeesReportdatagrid">

                    </div>

                </div>

            </div>
        </div>
    </div>


    </div>
    <script type="text/javascript" src="{{ url('assets/js/pro_js/EmployeesReport.js') }}"></script>



    <script>
        $("#EmployeesReportaction").hide();
    </script>
@endSection()
