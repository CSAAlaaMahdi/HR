@extends('admin.layout.mainarabic')
{{-- @section('title', 'Items') --}}
@section('content')
    <div class="col-md-12">


        <div class="card Employeeaction" id="Employeeaction">
            <div class="card-header " style="background-color: #283741;text-align: center">
                {{-- <div id="btnAddNew"></div>
                <div id="btnSave"></div> --}}
                <h4 style="color: white;" id="card_Employeetitle" class="card_Employeetitle">بيانات الموظفين </h4>

            </div>

            <div class="card-body">
                <div class="col-md-12 Search_Image ">

                    <div class="dx-fieldset" id="Search-container">
                        <div class="dx-field">
                            <div class="dx-field-label">بحث</div>
                            <div class="dx-field-value">
                                <div id="SearchEmp"></div>
                            </div>
                            <span id="error_SearchEmp" class="text-danger"></span>
                        </div>
                    </div>

                    <div id="EmpImage">

                    </div>


                </div>




                <ul class="nav nav-tabsEmployee">
                    <li class="nav-item"><a href="#EmpGeneral" class="nav-link active" data-bs-toggle="tab">بيانات
                            الموظف</a>
                    </li>
                    <li class="nav-item"><a href="#EmpCertification" class="nav-link" data-bs-toggle="tab">الشهادات</a>
                    </li>
                    <li class="nav-item"><a href="#EmpThanks" class="nav-link " data-bs-toggle="tab"> التشكرات</a>
                    </li>
                    <li class="nav-item"><a href="#EmpVacations" class="nav-link " data-bs-toggle="tab">الاجازات </a>
                    </li>
                    <li class="nav-item"><a href="#EmpJobs" class="nav-link " data-bs-toggle="tab">الترفيعات </a>
                    </li>
                    <li class="nav-item"><a href="#EmpPositions" class="nav-link " data-bs-toggle="tab">مناصب وترقيات </a>
                    </li>
                    <li class="nav-item"><a href="#EmpSupervisors" class="nav-link " data-bs-toggle="tab">الاشراف </a>
                    </li>
                    <li class="nav-item"><a href="#EmpArticles" class="nav-link " data-bs-toggle="tab">الكتب والمقالات </a>
                    </li>
                    <li class="nav-item"><a href="#EmpChildren" class="nav-link " data-bs-toggle="tab">الاطفال</a>
                    </li>


                </ul>
                <div class="tab-content ">
                    <div class="tab-pane mt-3 active" id="EmpGeneral">
                        <div class="row border g-0 rounded shadow-sm">
                            <div class="col p-4">

                                <div class="col-md-12 mt-1 row flex">

                                    <div class="col-md-4">
                                        <div class="form-group ">

                                            <div class="dx-fieldset" id="Emp-container" hidden>
                                                <div class="dx-field">
                                                    <div class="dx-field-label">eid</div>
                                                    <div class="dx-field-value">
                                                        <div id="eid"></div>
                                                    </div>
                                                    <span id="error_eid" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container" hidden>
                                                <div class="dx-field">
                                                    <div class="dx-field-label">Guid</div>
                                                    <div class="dx-field-value">
                                                        <div id="Guid"></div>
                                                    </div>
                                                    <span id="error_Guid" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">الاسم الاول</div>
                                                    <div class="dx-field-value">
                                                        <div id="firstname"></div>
                                                    </div>
                                                    <span id="error_firstname" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label"> الاسم الرابع</div>
                                                    <div class="dx-field-value">
                                                        <div id="forthname"></div>
                                                    </div>
                                                    <span id="error_forthname" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">اسم الام </div>
                                                    <div class="dx-field-value">
                                                        <div id="mothername"></div>
                                                    </div>
                                                    <span id="error_mothername" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">محل الولادة </div>
                                                    <div class="dx-field-value">
                                                        <div id="bplace"></div>
                                                    </div>
                                                    <span id="error_bplace" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">فئة الدم </div>
                                                    <div class="dx-field-value">
                                                        <div id="bloodtype"></div>
                                                    </div>
                                                    <span id="error_bloodtype" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">الحالة الزوجية</div>
                                                    <div class="dx-field-value">
                                                        <div id="MaritalStatus"></div>
                                                    </div>
                                                    <span id="error_MaritalStatus" class="text-danger"></span>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group ">
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label"> الاسم الثاني</div>
                                                    <div class="dx-field-value">
                                                        <div id="secondname"></div>
                                                    </div>
                                                    <span id="error_secondname" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label"> اللقب</div>
                                                    <div class="dx-field-value">
                                                        <div id="surname"></div>
                                                    </div>
                                                    <span id="error_surname" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label"> الجنس</div>
                                                    <div class="dx-field-value">
                                                        <div id="gender"></div>
                                                    </div>
                                                    <span id="error_gender" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label"> عنوان السكن</div>
                                                    <div class="dx-field-value">
                                                        <div id="address"></div>
                                                    </div>
                                                    <span id="error_address" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">البريد الالكتروني </div>
                                                    <div class="dx-field-value">
                                                        <div id="email"></div>
                                                    </div>
                                                    <span id="error_email" class="text-danger"></span>
                                                </div>
                                            </div>

                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label"> اسم الزوج / الزوجة </div>
                                                    <div class="dx-field-value">
                                                        <div id="wifename"></div>
                                                    </div>
                                                    <span id="error_wifename" class="text-danger"></span>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group ">
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label"> الاسم الثالث</div>
                                                    <div class="dx-field-value">
                                                        <div id="thirdname"></div>
                                                    </div>
                                                    <span id="error_thirdname" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label"> الاسم الكامل</div>
                                                    <div class="dx-field-value">
                                                        <div id="fullname"></div>
                                                    </div>
                                                    <span id="error_fullname" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label"> تاريخ الولادة</div>
                                                    <div class="dx-field-value">
                                                        <div id="dob"></div>
                                                    </div>
                                                    <span id="error_dob" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label"> المحافظة </div>
                                                    <div class="dx-field-value">
                                                        <div id="governorate"></div>
                                                    </div>
                                                    <span id="error_governorate" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label"> موبايل</div>
                                                    <div class="dx-field-value">
                                                        <div id="mobile"></div>
                                                    </div>
                                                    <span id="error_mobile" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">مهنة الزوجة / الزوج </div>
                                                    <div class="dx-field-value">
                                                        <div id="wifejob"></div>
                                                    </div>
                                                    <span id="error_wifejob" class="text-danger"></span>
                                                </div>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <hr style="background-color: orangered">
                                <div class="col-md-12 row flex">
                                    <div class="col-md-4">
                                        <div class="form-group ">

                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">رقم البطاقة الوطنية</div>
                                                    <div class="dx-field-value">
                                                        <div id="idno"></div>
                                                    </div>
                                                    <span id="error_idno" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">رقم الجنسية </div>
                                                    <div class="dx-field-value">
                                                        <div id="idcerno"></div>
                                                    </div>
                                                    <span id="error_idcerno" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label"> تاريخ اصدار بطاقة السكن</div>
                                                    <div class="dx-field-value">
                                                        <div id="homedate"></div>
                                                    </div>
                                                    <span id="error_homedate" class="text-danger"></span>
                                                </div>
                                            </div>



                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group ">
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label"> تاريخ اصدار البطاقة </div>
                                                    <div class="dx-field-value">
                                                        <div id="iddate"></div>
                                                    </div>
                                                    <span id="error_iddate" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label"> تاريخ اصدار الجنسية</div>
                                                    <div class="dx-field-value">
                                                        <div id="idcerdate"></div>
                                                    </div>
                                                    <span id="error_idcerdate" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label"> رقم البطاقة التموينية</div>
                                                    <div class="dx-field-value">
                                                        <div id="rationo"></div>
                                                    </div>
                                                    <span id="error_rationo" class="text-danger"></span>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group ">
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">جهة الاصدار</div>
                                                    <div class="dx-field-value">
                                                        <div id="issueplace"></div>
                                                    </div>
                                                    <span id="error_issueplace" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label"> رقم بطاقة السكن </div>
                                                    <div class="dx-field-value">
                                                        <div id="homeid"></div>
                                                    </div>
                                                    <span id="error_homeid" class="text-danger"></span>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                </div>
                                <hr style="background-color: orangered">
                                <div class="col-md-12 row felx">
                                    <div class="col-md-4">
                                        <div class="form-group ">

                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">صنف التعيين </div>
                                                    <div class="dx-field-value">
                                                        <div id="jclass"></div>
                                                    </div>
                                                    <span id="error_jclass" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">تاريخ التعيين في الوزارة </div>
                                                    <div class="dx-field-value">
                                                        <div id="moh_wdate"></div>
                                                    </div>
                                                    <span id="error_moh_wdate" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label"> الاختصاص الدقيق </div>
                                                    <div class="dx-field-value">
                                                        <div id="spacifspt"></div>
                                                    </div>
                                                    <span id="error_spacifspt" class="text-danger"></span>
                                                </div>
                                            </div>



                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group ">
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label"> العنوان الوظيفي </div>
                                                    <div class="dx-field-value">
                                                        <div id="jcategory"></div>
                                                    </div>
                                                    <span id="error_jcategory" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label"> تاريخ الاعادة الى الوظيفة </div>
                                                    <div class="dx-field-value">
                                                        <div id="rehiredate"></div>
                                                    </div>
                                                    <span id="error_rehiredate" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label"> مكان العمل </div>
                                                    <div class="dx-field-value">
                                                        <div id="deptid"></div>
                                                    </div>
                                                    <span id="error_deptid" class="text-danger"></span>
                                                </div>
                                            </div>


                                        </div>

                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group ">
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">تاريخ التعيين </div>
                                                    <div class="dx-field-value">
                                                        <div id="hiredate"></div>
                                                    </div>
                                                    <span id="error_hiredate" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label"> الاختصاص العام </div>
                                                    <div class="dx-field-value">
                                                        <div id="genralspt"></div>
                                                    </div>
                                                    <span id="error_genralspt" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Emp-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">نشط</div>
                                                    <div class="dx-field-value">
                                                        <div id="active"></div>
                                                    </div>
                                                    <span id="error_active" class="text-danger"></span>
                                                </div>
                                            </div>

                                        </div>

                                    </div>
                                </div>
                                <hr style="background-color: orangered">
                                <div class="col-md-12 row flex">
                                    <div class="col-md-12">
                                        <div class="dx-fieldset" id="Emp-container">
                                            <div class="dx-field">
                                                {{-- <div class="dx-field-label">ملاحظات</div> --}}
                                                <div class="dx-field-value">
                                                    <div id="notes"></div>
                                                </div>
                                                <span id="error_notes" class="text-danger"></span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="col-md-12">
                                    <div class="dx-fieldset" id="Emp-container"
                                        style="justify-content: center;align-content: center;align-items: center">
                                        <div class="dx-field">
                                            <div class="dx-field-label">صورة شخصية </div>
                                            <div class="dx-field-value">
                                                <div id="FilePath"></div>
                                            </div>
                                            <span id="error_FilePath" class="text-danger"></span>
                                        </div>
                                    </div>
                                </div>
                                <hr style="background-color: orangered">
                                <div id="btnNewAddEmp"></div>
                                <div id="btnSaveEmp"></div>
                            </div>

                        </div>
                    </div>

                    <div class="tab-pane mt-3" id="EmpCertification">
                        <div class="row border g-0 rounded shadow-sm">
                            <div class="col p-4">

                                <div class="col-md-12 mt-1">
                                    <div class="card EmpCertification" id="EmpCertification">
                                        <div class="card-header" style="background-color: #283741;text-align: center">
                                            <h4 style="color: white;" id="card_EmpCertificationtitle"
                                                class="card_EmpCertificationtitle">الشهادات </h4>
                                        </div>
                                        <div class="card-body">
                                            <div class="datagrid" id="EmpCertificationsdatagrid">

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 mt-5">
                                        <div class="card EmpCertificationsaction" id="EmpCertificationsaction">
                                            <div class="card-header " style="background-color: #343A40">
                                                <div id="Empdanger-contained" style="float:left"></div>
                                                <h4 style="color: white;" id="card_EmpCertificationstitle"
                                                    class="card_EmpCertificationstitle"> </h4>

                                            </div>
                                            <div class="card-body">
                                                <div class="row ">

                                                    @csrf
                                                    <div class="col-md-4">
                                                        <div class="dx-fieldset" id="Certification-container" hidden>
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">cid </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpCercid"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Certification-container" hidden>
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">Guid </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpCerGuid"></div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div class="dx-fieldset" id="Certification-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">الاسم </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpCereid"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Certification-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">الجامعة </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpCeruniversity"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Certification-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">الاختصاص العام </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpCergspetailest"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Certification-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">تاريخ الشهادة </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpCercerdate"></div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>


                                                    <div class="col-md-4">
                                                        <div class="dx-fieldset" id="Certification-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">الشهادة </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpCercertification"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Certification-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">الدولة </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpCercountry"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Certification-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">الاختصاص الدقيق </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpCersspetailest"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Certification-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">رقم شهادة المعادلة </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpCerequivlent_no"></div>
                                                                </div>

                                                            </div>
                                                        </div>


                                                    </div>




                                                    <div class="col-md-4">

                                                        <div class="dx-fieldset" id="Certification-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">الكلية </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpCercollege"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Certification-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">السنة </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpCercyears"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Certification-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">رقم الشهادة </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpCercer_no"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Certification-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">تاريخ شهادة المعادلة </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpCerequivlent_date"></div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>

                                                    <hr>

                                                </div>

                                                <div class="col-md-12">
                                                    <div id="image-container" class="row">

                                                    </div>
                                                </div>

                                            </div>
                                        </div>



                                    </div>


                                </div>


                            </div>
                        </div>
                    </div>
                    <div class="tab-pane mt-3" id="EmpThanks">
                        <div class="row border g-0 rounded shadow-sm">
                            <div class="col p-4">

                                <div class="col-md-12 mt-1">
                                    <div class="card EmpThansk" id="EmpThansk">
                                        <div class="card-header" style="background-color: #283741;text-align: center">
                                            <h4 style="color: white;" id="EmpThankstitle" class="EmpThankstitle">التشكرات
                                            </h4>
                                        </div>
                                        <div class="card-body">
                                            <div class="datagrid" id="EmpThanksdatagrid">

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 mt-5">
                                        <div class="card EmpThanksaction" id="EmpThanksaction">
                                            <div class="card-header " style="background-color: #343A40">
                                                <div id="EmpThanskdanger-contained" style="float:left"></div>
                                                <h4 style="color: white;" id="card_EmpThankstitle"
                                                    class="card_EmpThankstitle"> </h4>

                                            </div>
                                            <div class="card-body">
                                                <div class="row ">

                                                    @csrf
                                                    <div class="col-md-4">
                                                        <div class="dx-fieldset" id="Thanks-container" hidden>
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">id </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpThanksid"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Thanks-container" hidden>
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">Guid </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpThanksGuid"></div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div class="dx-fieldset" id="Thanks-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">الاسم </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpThankseid"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Thanks-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">رقم الكتاب </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpThanksdocno"></div>
                                                                </div>

                                                            </div>
                                                        </div>


                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="dx-fieldset" id="Thanks-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label"> نوع كتاب الشكر </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpThanksttype"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Thanks-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">تاريخ الكتاب </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpThanksdocdate"></div>
                                                                </div>

                                                            </div>
                                                        </div>


                                                    </div>

                                                    <div class="col-md-4">

                                                        <div class="dx-fieldset" id="Thanks-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label"> السبب </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpThanksreason"></div>
                                                                </div>

                                                            </div>
                                                        </div>


                                                    </div>

                                                    <hr>

                                                </div>
                                                <div class="col-md-12">
                                                    <div class="col-md-12">

                                                        <div class="dx-fieldset" id="Thanks-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">ملاحظات </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpThanksnotes"></div>
                                                                </div>

                                                            </div>
                                                        </div>


                                                    </div>

                                                </div>
                                                <div class="col-md-12">
                                                    <div id="EmpThanksimage-container" class="row">

                                                    </div>
                                                </div>

                                            </div>
                                        </div>



                                    </div>


                                </div>


                            </div>
                        </div>
                    </div>

                    <div class="tab-pane mt-3" id="EmpVacations">
                        <div class="row border g-0 rounded shadow-sm">
                            <div class="col p-4">

                                <div class="col-md-12 mt-1">
                                    <div class="card EmpVacations" id="EmpVacations">
                                        <div class="card-header" style="background-color:#283741;text-align: center">
                                            <h4 style="color: white;" id="EmpVacationstitle" class="EmpVacationstitle">
                                                الاجازات </h4>
                                        </div>
                                        <div class="card-body">
                                            <div class="datagrid" id="EmpVacationsdatagrid">

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 mt-5">
                                        <div class="card EmpVacationsaction" id="EmpVacationsaction">
                                            <div class="card-header " style="background-color: #343A40">
                                                <div id="EmpVacationsdanger-contained" style="float:left"></div>
                                                <h4 style="color: white;" id="card_EmpVacationstitle"
                                                    class="card_EmpVacationstitle"> </h4>

                                            </div>
                                            <div class="card-body">
                                                <div class="row ">

                                                    @csrf
                                                    <div class="col-md-4">
                                                        <div class="dx-fieldset" id="Vacations-container" hidden>
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">id </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpVacationsvcid"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Vacations-container" hidden>
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">Guid </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpVacationsGuid"></div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div class="dx-fieldset" id="Vacations-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">الاسم </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpVacationseid"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Vacations-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">عدد الايام </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpVacationsnodays"></div>
                                                                </div>

                                                            </div>
                                                        </div>


                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="dx-fieldset" id="Vacations-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">نوع الاجازة</div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpVacationsvtid"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Vacations-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">رقم الكتاب </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpVacationsdocno"></div>
                                                                </div>

                                                            </div>
                                                        </div>


                                                    </div>

                                                    <div class="col-md-4">

                                                        <div class="dx-fieldset" id="Vacations-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label"> تاريخ الاجازة </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpVacationsvdate"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Vacations-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">تاريخ الكتاب </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpVacationsdocdate"></div>
                                                                </div>

                                                            </div>
                                                        </div>


                                                    </div>

                                                    <hr>

                                                </div>

                                                <div class="col-md-12">
                                                    <div id="EmpVacationsimage-container" class="row">

                                                    </div>
                                                </div>

                                            </div>
                                        </div>



                                    </div>


                                </div>


                            </div>
                        </div>
                    </div>
                    <div class="tab-pane mt-3" id="EmpJobs">
                        <div class="row border g-0 rounded shadow-sm">
                            <div class="col p-4">

                                <div class="col-md-12 mt-1">
                                    <div class="card EmpJobs" id="EmpJobs">
                                        <div class="card-header" style="background-color:#283741;text-align: center">
                                            <h4 style="color: white;" id="EmpJobstitle" class="EmpJobstitle">الاجازات
                                            </h4>
                                        </div>
                                        <div class="card-body">
                                            <div class="datagrid" id="EmpJobsdatagrid">

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 mt-5">
                                        <div class="card EmpJobsaction" id="EmpJobsaction">
                                            <div class="card-header " style="background-color: #343A40">
                                                <div id="EmpJobsdanger-contained" style="float:left"></div>
                                                <h4 style="color: white;" id="card_EmpJobstitle"
                                                    class="card_EmpJobstitle"> </h4>

                                            </div>
                                            <div class="card-body">
                                                <div class="row ">

                                                    @csrf
                                                    <div class="col-md-4">
                                                        <div class="dx-fieldset" id="Job-container" hidden>
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">jid </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpJobsjid"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Job-container" hidden>
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">Guid </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpJobsGuid"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Job-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">الاسم </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpJobseid"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Job-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">المرحلة </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpJobsjstage"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Job-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">تاريخ الكتاب </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpJobsdocdate"></div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="dx-fieldset" id="Job-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">العنوان الوظيفي </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpJobsjtitle"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Job-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">تاريخ الحصول على الدرجة </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpJobsgetdate"></div>
                                                                </div>

                                                            </div>
                                                        </div>


                                                    </div>

                                                    <div class="col-md-4">

                                                        <div class="dx-fieldset" id="Job-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">الدرجة </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpJobsjdegree"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Job-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">رقم الكتاب </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpJobsdocno"></div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                    </div>

                                                    <hr>

                                                </div>

                                                <div class="col-md-12">
                                                    <div id="EmpJobsimage-container" class="row">

                                                    </div>
                                                </div>

                                            </div>
                                        </div>



                                    </div>


                                </div>


                            </div>
                        </div>
                    </div>

                    <div class="tab-pane mt-3" id="EmpPositions">
                        <div class="row border g-0 rounded shadow-sm">
                            <div class="col p-4">

                                <div class="col-md-12 mt-1">
                                    <div class="card EmpPositions" id="EmpPositions">
                                        <div class="card-header" style="background-color:#283741;text-align: center">
                                            <h4 style="color: white;" id="EmpPositionstitle" class="EmpPositionstitle">
                                                المناصب والترقيات </h4>
                                        </div>
                                        <div class="card-body">
                                            <div class="datagrid" id="EmpPositionsdatagrid">

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 mt-5">
                                        <div class="card EmpPositionsaction" id="EmpPositionsaction">
                                            <div class="card-header " style="background-color: #343A40">
                                                <div id="EmpPositionsdanger-contained" style="float:left"></div>
                                                <h4 style="color: white;" id="card_EmpPositionstitle"
                                                    class="card_EmpPositionstitle"> </h4>

                                            </div>
                                            <div class="card-body">
                                                <div class="row ">

                                                    @csrf
                                                    <div class="col-md-4">
                                                        <div class="dx-fieldset" id="Positions-container" hidden>
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">id </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpPositionsid"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Positions-container" hidden>
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">Guid </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpPositionsGuid"></div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div class="dx-fieldset" id="Positions-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">الاسم </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpPositionseid"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Positions-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">رقم الكتاب </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpPositionsdocno"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Positions-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label"> الى تاريخ </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpPositionsdateto"></div>
                                                                </div>

                                                            </div>
                                                        </div>


                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="dx-fieldset" id="Positions-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">المنصب </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpPositionsptypeid"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Positions-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">تاريخ الكتاب </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpPositionsdocdate"></div>
                                                                </div>

                                                            </div>
                                                        </div>


                                                    </div>

                                                    <div class="col-md-4">

                                                        <div class="dx-fieldset" id="Positions-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label"> المكان </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpPositionspname"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Positions-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label"> من تاريخ </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpPositionsdatefrom" class="text-danger">
                                                                        </span>
                                                                    </div>
                                                                </div>


                                                            </div>


                                                            <hr>

                                                        </div>

                                                        <div class="col-md-12">
                                                            <div id="EmpPositionsimage-container" class="row">

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

                    <div class="tab-pane mt-3" id="EmpSupervisors">
                        <div class="row border g-0 rounded shadow-sm">
                            <div class="col p-4">

                                <div class="col-md-12 mt-1">
                                    <div class="card EmpSupervisors" id="EmpSupervisors">
                                        <div class="card-header" style="background-color:#283741;text-align: center">
                                            <h4 style="color: white;" id="EmpSupervisorstitle"
                                                class="EmpSupervisorstitle">الاشراف</h4>
                                        </div>
                                        <div class="card-body">
                                            <div class="datagrid" id="EmpSupervisorsdatagrid">

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 mt-5">
                                        <div class="card EmpSupervisorsaction" id="EmpSupervisorsaction">
                                            <div class="card-header " style="background-color: #343A40">
                                                <div id="EmpSupervisorsdanger-contained" style="float:left"></div>
                                                <h4 style="color: white;" id="card_EmpSupervisorstitle"
                                                    class="card_EmpSupervisorstitle"> </h4>

                                            </div>
                                            <div class="card-body">
                                                <div class="row ">

                                                    @csrf
                                                    <div class="col-md-4">
                                                        <div class="dx-fieldset" id="Supervisors-container" hidden>
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">id </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpSupervisorsid"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Supervisors-container" hidden>
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">Guid </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpSupervisorsGuid"></div>
                                                                </div>

                                                            </div>
                                                        </div>

                                                        <div class="dx-fieldset" id="Supervisors-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">اسم المشرف </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpSupervisorseid"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Supervisors-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">رقم الكتاب </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpSupervisorsdocno"></div>
                                                                </div>

                                                            </div>
                                                        </div>


                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="dx-fieldset" id="Supervisors-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">الدرجة او الشهادة
                                                                </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpSupervisorssdeg"></div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Supervisors-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">تاريخ الكتاب </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpSupervisorsdocdate"></div>
                                                                </div>

                                                            </div>
                                                        </div>


                                                    </div>

                                                    <div class="col-md-4">

                                                        <div class="dx-fieldset" id="Supervisors-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label"> الاسماء </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpSupervisorssname"></div>
                                                                </div>

                                                            </div>
                                                        </div>


                                                    </div>

                                                    <hr>

                                                </div>

                                                <div class="col-md-12">
                                                    <div id="EmpSupervisorsimage-container" class="row">

                                                    </div>
                                                </div>

                                            </div>
                                        </div>



                                    </div>


                                </div>


                            </div>
                        </div>
                    </div>

                    <div class="tab-pane mt-3" id="EmpArticles">
                        <div class="row border g-0 rounded shadow-sm">
                            <div class="col p-4">

                                <div class="col-md-12 mt-1">
                                    <div class="card EmpArticles" id="EmpArticles">
                                        <div class="card-header" style="background-color:#283741;text-align: center">
                                            <h4 style="color: white;" id="EmpArticlestitle"
                                                class="EmpArticlestitle">المقالات</h4>
                                        </div>
                                        <div class="card-body">
                                            <div class="datagrid" id="EmpArticlesdatagrid">

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 mt-5">
                                        <div class="card EmpArticlesaction" id="EmpArticlesaction">
                                            <div class="card-header " style="background-color: #343A40">
                                                <div id="EmpArticlesdanger-contained" style="float:left"></div>
                                                <h4 style="color: white;" id="card_EmpArticlestitle"
                                                    class="card_EmpArticlestitle"> </h4>

                                            </div>
                                            <div class="card-body">
                                                <div class="row ">

                                                    @csrf
                                                    <div class="col-md-4">
                                                        <div class="dx-fieldset" id="Articles-container" hidden>
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">id </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpArticlesid"></div>
                                                                </div>
                                                           
                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Articles-container" hidden>
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">Guid </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpArticlesGuid"></div>
                                                                </div>
                                                              
                                                            </div>
                                                        </div>
                        
                                                        <div class="dx-fieldset" id="Articles-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">الاسم </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpArticlesdid"></div>
                                                                </div>
                                                           
                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Articles-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">تاريخ النشر  </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpArticlespub_date"></div>
                                                                </div>
                                                             
                                                            </div>
                                                        </div>
                        
                        
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="dx-fieldset" id="Articles-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label"> عنوان المقال   </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpArticlesarticle_title"></div>
                                                                </div>
                                                           
                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Articles-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">الرابط  </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpArticlesAlink"></div>
                                                                </div>
                                                           
                                                            </div>
                                                        </div>
                        
                        
                                                    </div>
                        
                                                    <div class="col-md-4">
                        
                                                        <div class="dx-fieldset" id="Articles-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label"> عدد المشاركين </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpArticlesnof_aut"></div>
                                                                </div>
                                                              
                                                            </div>
                                                        </div>
                        
                        
                                                    </div>
                        

                                                    <hr>

                                                </div>

                                                <div class="col-md-12">
                                                    <div id="EmpArticlesimage-container" class="row">

                                                    </div>
                                                </div>

                                            </div>
                                        </div>



                                    </div>


                                </div>


                            </div>
                        </div>
                    </div>

                    <div class="tab-pane mt-3" id="EmpChildren">
                        <div class="row border g-0 rounded shadow-sm">
                            <div class="col p-4">

                                <div class="col-md-12 mt-1">
                                    <div class="card EmpChildren" id="EmpChildren">
                                        <div class="card-header" style="background-color:#283741;text-align: center">
                                            <h4 style="color: white;" id="EmpChildrentitle"
                                                class="EmpChildrentitle">الاطفال</h4>
                                        </div>
                                        <div class="card-body">
                                            <div class="datagrid" id="EmpChildrendatagrid">

                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 mt-5">
                                        <div class="card EmpChildrenaction" id="EmpChildrenaction">
                                            <div class="card-header " style="background-color: #343A40">
                                                <div id="EmpChildrendanger-contained" style="float:left"></div>
                                                <h4 style="color: white;" id="card_EmpChildrentitle"
                                                    class="card_EmpChildrentitle"> </h4>

                                            </div>
                                            <div class="card-body">
                                                <div class="row ">

                                                    @csrf
                                                    <div class="col-md-4">
                                                        <div class="dx-fieldset" id="Children-container" hidden>
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">id </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpChildrenid"></div>
                                                                </div>
                                                         
                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Children-container" hidden>
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">Guid </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpChildrenGuid"></div>
                                                                </div>
                                                              
                                                            </div>
                                                        </div>
                        
                                                        <div class="dx-fieldset" id="Children-container" hidden>
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">اسم الموظف </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpChildreneid"></div>
                                                                </div>
                                                             
                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Children-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">تاريخ الولادة  </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpChildrenchdob"></div>
                                                                </div>
                                                          
                                                            </div>
                                                        </div>
                        
                        
                                                    </div>
                                                    <div class="col-md-4">
                                                        <div class="dx-fieldset" id="Children-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label"> الاسم   </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpChildrenchname"></div>
                                                                </div>
                                                               
                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Children-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">المهنة  </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpChildrencsid"></div>
                                                                </div>
                                                        
                                                            </div>
                                                        </div>
                        
                        
                                                    </div>
                        
                                                    <div class="col-md-4">
                        
                                                        <div class="dx-fieldset" id="Children-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label"> الجنس </div>
                                                                <div class="dx-field-value">
                                                                    <div id="EmpChildrenchsex"></div>
                                                                </div>
                                                         
                                                            </div>
                                                        </div>
                        
                        
                                                    </div>
                        
                        

                                                    <hr>

                                                </div>

                                                <div class="col-md-12">
                                                    <div id="EmpChildrenimage-container" class="row">

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

    <script type="text/javascript" src="{{ url('assets/js/pro_js/Employee.js') }}"></script>
    {{-- <script type="text/javascript" src="{{ url('assets/js/pro_js/Certifications.js') }}"></script> --}}







    <script>
        $("#EmpCertificationsaction").hide();
        $("#EmpThanksaction").hide();
        $("#EmpVacationsaction").hide();
        $("#EmpJobsaction").hide();
        $("#EmpPositionsaction").hide();
        $("#EmpSupervisorsaction").hide();
        $("#EmpArticlesaction").hide();
        $("#EmpChildrenaction").hide();
    </script>
@endSection()
