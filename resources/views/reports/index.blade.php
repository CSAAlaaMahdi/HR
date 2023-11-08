@extends('admin.layout.main')
@section('title', 'التقارير')
@section('content')

<div class="container-fluid">
    <div class="row">
        <div class="col-md-12 mt-5">

            <div class="card">
                <div class="card-header text-white" style="background-color: #242424;">
                    <h4 class="titlefont">التقارير</h4>
                </div>
                <div class="card-body">

                    <div class="input-group m-2">
                        <label for="" class="col-sm-1 col-form-label m-2"> الفترة : </label>
                        <div class="col-sm-2 m-2">
                            <select name="R_ReportPeriod" id="R_ReportPeriod" class="col-sm-11 col-form-label form-select R_ReportPeriod">
                                <option selected>اختر فترة التقرير</option>
                                <option value='Daily'>يومي</option>
                                <option value='Monthly'>شهري</option>
                                <option value='Yearly'>سنوي</option>

                            </select>
                        </div>
                        <label for="" id="DayLabel" class="col-sm-auto col-form-label m-2"> اليوم : </label>
                        <div class="col-sm-1 m-2">
                            <input name="R_DayInput" id="R_DayInput" class="col-sm-11 col-form-label form-control R_DayInput">
                            </input>
                        </div>
                        <label for="" id="MonthLabel" class="col-sm-auto col-form-label m-2"> الشهر : </label>
                        <div class="col-sm-1 m-2">
                            <input name="R_MonthInput" id="R_MonthInput" class="col-sm-11 col-form-label form-control R_MonthInput">
                            </input>
                        </div>
                        <label for="" id="YearLabel" class="col-sm-auto col-form-label m-2"> السنة : </label>
                        <div class="col-sm-1 m-2">
                            <input name="R_YearInput" id="R_YearInput" class="col-sm-11 col-form-label form-control R_YearInput">
                            </input>
                        </div>



                    </div>

                    <div class="input-group m-2">
                        <label for="" class="col-sm-1 col-form-label m-2"> نوع التقرير : </label>
                        <div class="col-sm-2 m-2">
                            <select name="R_ReportType" id="R_ReportType" class="col-sm-11 col-form-label form-select R_ReportType">
                                <option selected>اختر نوع التقرير</option>
                                <option value='Movement_Summary'>ملخص الاقسام</option>
                                <option value='Cars_Summary'>ملخص العجلات</option>

                            </select>
                        </div>
                    </div>

                    <hr>
                    <button class="btn btn-primary btn-sm float-start reportprint">
                        طباعة التقرير</button>
                </div>

            </div>

        </div>






    </div>




</div>

@endSection()
