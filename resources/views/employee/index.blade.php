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
                    <li class="nav-item"><a href="#EmpGroups" class="nav-link " data-bs-toggle="tab">اللجان</a></li>
                    <li class="nav-item"><a href="#EmpThanks" class="nav-link " data-bs-toggle="tab"> التشكرات</a>
                    </li>
                    <li class="nav-item"><a href="#EmpVacations" class="nav-link " data-bs-toggle="tab">الاجازات </a>
                    </li>
                    <li class="nav-item"><a href="#EmpPromotions" class="nav-link " data-bs-toggle="tab">الترفيعات </a>
                    </li>
                    <li class="nav-item"><a href="#itemsBarcode" class="nav-link " data-bs-toggle="tab">المناصب </a>
                    </li>
                    <li class="nav-item"><a href="#itemsBarcode" class="nav-link " data-bs-toggle="tab">الايفادات </a>
                    </li>
                    <li class="nav-item"><a href="#itemsBarcode" class="nav-link " data-bs-toggle="tab">حركة الملاك </a>
                    </li>
                    <li class="nav-item"><a href="#itemsBarcode" class="nav-link " data-bs-toggle="tab">الفعاليات </a>
                    </li>
                    <li class="nav-item"><a href="#itemsBarcode" class="nav-link " data-bs-toggle="tab">الابحاث </a>
                    </li>
                    <li class="nav-item"><a href="#itemsBarcode" class="nav-link " data-bs-toggle="tab">الاشراف </a>
                    </li>
                    <li class="nav-item"><a href="#itemsBarcode" class="nav-link " data-bs-toggle="tab">الترقيات </a>
                    </li>
                    <li class="nav-item"><a href="#itemsBarcode" class="nav-link " data-bs-toggle="tab">الكتب والمقالات </a>
                    </li>
                    <li class="nav-item"><a href="#itemsBarcode" class="nav-link " data-bs-toggle="tab">تقارير واحصائيات
                        </a>
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
                                                        <div id="addres"></div>
                                                    </div>
                                                    <span id="error_addres" class="text-danger"></span>
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

                                <hr>
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
                                <hr>
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
                                <hr>
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
                                <hr>
                            <div id="btnNewAddEmp"></div>
                            <div id="btnSaveEmp"></div>
                            </div>
                            
                        </div>
                    </div>

                    <div class="tab-pane mt-3" id="EmpCertification">
                        <div class="row border g-0 rounded shadow-sm">
                            <div class="col p-4">

                                <div class="col-md-14 mt-1 row flex">

                                    <div class="col-md-4">
                                        <div class="form-group ">

                                            <div class="dx-fieldset" id="Item-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">الوحدة</div>
                                                    <div class="dx-field-value">
                                                        <div id="IT_ItemUnit"></div>
                                                    </div>
                                                    <span id="error_IT_ItemUnit" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Item-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">الوحدة2</div>
                                                    <div class="dx-field-value">
                                                        <div id="IT_ItemUnit2"></div>
                                                    </div>
                                                    <span id="error_IT_ItemUnit2" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Item-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">التعادل</div>
                                                    <div class="dx-field-value">
                                                        <div id="IT_Factory2"></div>
                                                    </div>
                                                    <span id="error_IT_Factory2" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Item-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">الوحدة3</div>
                                                    <div class="dx-field-value">
                                                        <div id="IT_ItemUnit3"></div>
                                                    </div>
                                                    <span id="error_IT_ItemUnit3" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Item-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">التعادل</div>
                                                    <div class="dx-field-value">
                                                        <div id="IT_Factory3"></div>
                                                    </div>
                                                    <span id="error_IT_Factory3" class="text-danger"></span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group ">
                                            <div class="dx-fieldset" id="ItemRadio-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label"> افتراضي</div>
                                                    <div class="dx-field-value">
                                                        <div id="IT_GroupButtons"></div>
                                                    </div>
                                                    <span id="error_IT_GroupButtons" class="text-danger"></span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                </div>


                            </div>
                        </div>
                    </div>
                    <div class="tab-pane mt-3" id="EmpGroups">
                        <div class="row border g-0 rounded shadow-sm">
                            <div class="col p-4">
                                <div class="col-md-12 mt-1 row flex">

                                    <div class="col-md-4">
                                        <p id="UnitTitle">الوحدة الاولى</p>

                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">عادي</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_Normal_1_1"></div>
                                                </div>
                                                <span id="error_IT_Normal_1_1" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">متوسط</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_Mid_1_1"></div>
                                                </div>
                                                <span id="error_IT_Mid_1_1" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">جيد</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_Good_1_1"></div>
                                                </div>
                                                <span id="error_IT_Good_1_1" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">جيد جدا</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_VeryGood_1_1"></div>
                                                </div>
                                                <span id="error_IT_VeryGood_1_1" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">ممتاز</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_Excellent_1_1"></div>
                                                </div>
                                                <span id="error_IT_Excellent_1_1" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">فوق الامتياز</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_Supper_1_1"></div>
                                                </div>
                                                <span id="error_IT_Supper_1_1" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">العملة</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_CurrencyGuid"></div>
                                                </div>
                                                <span id="error_IT_CurrencyGuid" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">اخر شراء</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_LastPrice"></div>
                                                </div>
                                                <span id="error_IT_LastPrice" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">المتوسط</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_Average"></div>
                                                </div>
                                                <span id="error_IT_Average" class="text-danger"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <p id="UnitTitle">الوجدة الثانية</p>

                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">عادي</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_Normal_2_1"></div>
                                                </div>
                                                <span id="error_IT_Normal_2_1" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">متوسط</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_Mid_2_1"></div>
                                                </div>
                                                <span id="error_IT_Mid_2_1" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">جيد</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_Good_2_1"></div>
                                                </div>
                                                <span id="error_IT_Good_2_1" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">جيد جدا</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_VeryGood_2_1"></div>
                                                </div>
                                                <span id="error_IT_VeryGood_2_1" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">امتياز</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_Excellent_2_1"></div>
                                                </div>
                                                <span id="error_IT_Excellent_2_1" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">فوق الامتياز</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_Supper_2_1"></div>
                                                </div>
                                                <span id="error_IT_Supper_2_1" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">العملة</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_CurrencyGuid2"></div>
                                                </div>
                                                <span id="error_IT_CurrencyGuid2" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">اخر شراء</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_LastPrice2"></div>
                                                </div>
                                                <span id="error_IT_LastPrice2" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">متوسط</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_Average2"></div>
                                                </div>
                                                <span id="error_IT_Average2" class="text-danger"></span>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <p id="UnitTitle">
                                            الوحدة الثالثة</p>

                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">عادي</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_Normal_3_1"></div>
                                                </div>
                                                <span id="error_IT_Normal_3_1" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">متوسط</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_Mid_3_1"></div>
                                                </div>
                                                <span id="error_IT_Mid_3_1" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">جيد</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_Good_3_1"></div>
                                                </div>
                                                <span id="error_IT_Good_3_1" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">جيد جدا</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_VeryGood_3_1"></div>
                                                </div>
                                                <span id="error_IT_VeryGood_3_1" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">امتياز</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_Excellent_3_1"></div>
                                                </div>
                                                <span id="error_IT_Excellent_3_1" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">فوق الامتياز</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_Supper_3_1"></div>
                                                </div>
                                                <span id="error_IT_Supper_3_1" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">العملة</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_CurrencyGuid3"></div>
                                                </div>
                                                <span id="error_IT_CurrencyGuid3" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">اخر شراء</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_LastPrice3"></div>
                                                </div>
                                                <span id="error_IT_LastPrice3" class="text-danger"></span>
                                            </div>
                                        </div>
                                        <div class="dx-fieldset" id="ITPrices-container">
                                            <div class="dx-field">
                                                <div class="dx-field-label">متوسط</div>
                                                <div class="dx-field-value">
                                                    <div id="IT_Average3"></div>
                                                </div>
                                                <span id="error_IT_Average3" class="text-danger"></span>
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
                                <div class="col-md-12 mt-2">
                                    <div class="card " id="secondCard">
                                        <div class="card-header" style="background-color: #343A40">



                                            <h4 style="color: white;">الحركة المخزنية</h4>

                                        </div>
                                        <div class="card-body">

                                            <div class="StoresDataGrid" id="StoresDataGrid">

                                            </div>
                                            <div id="pagerContainer"></div>
                                            <div id="context-menu">

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 mt-5">
                                    <div class="card Storesaction" id="Storesaction">
                                        <div class="card-header " style="background-color: #343A40">
                                            <div id="btnCloseStores" style="float:left"></div>
                                            <h4 style="color: white;" id="card_Storestitle" class="card_Storestitle">
                                            </h4>

                                        </div>
                                        <div class="card-body">
                                            <div class="row ">

                                                @csrf
                                                <div class="col-md-6">
                                                    <div class="form-group ">
                                                        <div class="ms-12 row pt-3">


                                                        </div>
                                                        <div class="dx-fieldset" id="Stores-container" hidden>
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">IT2 ID</div>
                                                                <div class="dx-field-value">
                                                                    <div id="IT2_ID"></div>
                                                                </div>
                                                                <span id="error_IT2_ID" class="text-danger"></span>
                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="StoresToggle-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">الحالة</div>
                                                                <div class="dx-field-value">
                                                                    <div id="IT2_State"></div>
                                                                </div>
                                                                <span id="error_IT2_State" class="text-danger"></span>
                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Stores-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">الموقع</div>
                                                                <div class="dx-field-value">
                                                                    <div id="IT2_ItemPosition"></div>
                                                                </div>
                                                                <span id="error_IT2_ItemPosition"
                                                                    class="text-danger"></span>
                                                            </div>
                                                        </div>

                                                        <hr>
                                                        <div id="btnSaveStores" style="float:right"></div>

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
                                <div class="col-md-12 mt-2">
                                    <div class="card " id="FourthCard">
                                        <div class="card-header" style="background-color: #343A40">


                                            <div id="btnAddModels" style="float:left"></div>
                                            <h4 style="color: white;">الطراز</h4>

                                        </div>
                                        <div class="card-body">

                                            <div class="ModelsDataGrid" id="ModelsDataGrid">

                                            </div>
                                            <div id="pagerContainerModel"></div>

                                            <div id="context-menuModel">

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 mt-5">
                                    <div class="card Modelsaction" id="Modelsaction">
                                        <div class="card-header " style="background-color: #343A40">
                                            <div id="btnCloseModels" style="float:left"></div>
                                            <h4 style="color: white;" id="card_Modelstitle" class="card_Modelstitle">
                                            </h4>

                                        </div>
                                        <div class="card-body">
                                            <div class="row ">

                                                @csrf
                                                <div class="col-md-6">
                                                    <div class="form-group ">
                                                        <div class="ms-12 row pt-3">
                                                        </div>
                                                        <div class="dx-fieldset" id="Models-container" hidden>
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">IT4 ID</div>
                                                                <div class="dx-field-value">
                                                                    <div id="IT4_ID"></div>
                                                                </div>
                                                                <span id="error_IT4_ID" class="text-danger"></span>
                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Models-container" hidden>
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">IT4 FK ID</div>
                                                                <div class="dx-field-value">
                                                                    <div id="IT4_FK_IT"></div>
                                                                </div>
                                                                <span id="error_IT4_FK_IT" class="text-danger"></span>
                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Models-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">تاريخ الانتاج</div>
                                                                <div class="dx-field-value">
                                                                    <div id="IT4_DateRange"></div>
                                                                </div>
                                                                <span id="error_IT4_DateRange" class="text-danger"></span>
                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Models-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">طراز</div>
                                                                <div class="dx-field-value">
                                                                    <div id="IT4_Model"></div>
                                                                </div>
                                                                <span id="error_IT4_Model" class="text-danger"></span>
                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="Models-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">خيارات الفريم</div>
                                                                <div class="dx-field-value">
                                                                    <div id="IT4_FramesOptions"></div>
                                                                </div>
                                                                <span id="error_IT4_FramesOptions"
                                                                    class="text-danger"></span>
                                                            </div>
                                                        </div>

                                                        <hr>
                                                        <div id="btnSaveModels" style="float:right"></div>

                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>



                                </div>


                            </div>



                            <div class="col-md-12 mt-5">
                                <div class="card ItemFifthaction" id="ItemFifthaction">
                                    <div class="card-header " style="background-color: #343A40">
                                        <div id="btnCloseItemFifth" style="float:left"></div>
                                        <h4 style="color: white;" id="card_ItemFifthtitle" class="card_ItemFifthtitle">
                                        </h4>

                                    </div>
                                    <div class="card-body">
                                        <div class="row ">
                                            @csrf
                                            <div class="col-md-6">
                                                <div class="form-group ">
                                                    <div class="ms-12 row pt-3">
                                                    </div>
                                                    <div class="dx-fieldset" id="ItemFifth-container" hidden>
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">IT5 ID</div>
                                                            <div class="dx-field-value">
                                                                <div id="IT5_ID"></div>
                                                            </div>
                                                            <span id="error_IT5_ID" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="ItemFifth-container" hidden>
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">IT4 FK ID4</div>
                                                            <div class="dx-field-value">
                                                                <div id="IT5_FK_IT4"></div>
                                                            </div>
                                                            <span id="error_IT5_FK_IT4" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="ItemFifth-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">تاريخ الطراز</div>
                                                            <div class="dx-field-value">
                                                                <div id="IT5_ModelDate"></div>
                                                            </div>
                                                            <span id="error_IT5_ModelDate" class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="ItemFifth-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">الطراز المطابق</div>
                                                            <div class="dx-field-value">
                                                                <div id="IT5_MatchingModels"></div>
                                                            </div>
                                                            <span id="error_IT5_MatchingModels"
                                                                class="text-danger"></span>
                                                        </div>
                                                    </div>
                                                    <div class="dx-fieldset" id="ItemFifth-container">
                                                        <div class="dx-field">
                                                            <div class="dx-field-label">تفاصيل الطراز</div>
                                                            <div class="dx-field-value">
                                                                <div id="IT5_ModelOptions"></div>
                                                            </div>
                                                            <span id="error_IT5_ModelOptions" class="text-danger"></span>
                                                        </div>
                                                    </div>

                                                    <hr>
                                                    <div id="btnSaveItemFifth" style="float:right"></div>

                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>



                            </div>


                        </div>
                    </div>

                    <div class="tab-pane mt-3" id="EmpPromotions">
                        <div class="row border g-0 rounded shadow-sm">
                            <div class="col p-4">
                                <div class="col-md-12 mt-2">
                                    <div class="card " id="FifthCard">
                                        <div class="card-header" style="background-color: #343A40">


                                            <div id="btnAddBarcode" style="float:left"></div>
                                            <h4 style="color: white;">الباركودات</h4>

                                        </div>
                                        <div class="card-body">

                                            <div class="ItemsBarcodeDataGrid" id="ItemsBarcodeDataGrid">

                                            </div>
                                            <div id="pagerContainerItemsBarcode"></div>

                                            <div id="context-menuItemsBarcode">

                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 mt-5">
                                    <div class="card ItemsBarcodeaction" id="ItemsBarcodeaction">
                                        <div class="card-header " style="background-color: #343A40">
                                            <div id="btnCloseItemsBarcode" style="float:left"></div>
                                            <h4 style="color: white;" id="card_ItemsBarcodetitle"
                                                class="card_ItemsBarcodetitle">
                                            </h4>

                                        </div>
                                        <div class="card-body">
                                            <div class="row ">

                                                @csrf
                                                <div class="col-md-6">
                                                    <div class="form-group ">
                                                        <div class="ms-12 row pt-3">
                                                        </div>
                                                        <div class="dx-fieldset" id="ItemsBarcode-container" hidden>
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">ITB_ID</div>
                                                                <div class="dx-field-value">
                                                                    <div id="ITB_ID"></div>
                                                                </div>
                                                                <span id="error_ITB_ID" class="text-danger"></span>
                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="ItemsBarcode-container" hidden>
                                                            <div class="dx-field">
                                                                <div class="dx-field-label">ITB KF </div>
                                                                <div class="dx-field-value">
                                                                    <div id="ITB_FK_IT"></div>
                                                                </div>
                                                                <span id="error_ITB_FK_IT" class="text-danger"></span>
                                                            </div>
                                                        </div>
                                                        <div class="dx-fieldset" id="ItemsBarcode-container">
                                                            <div class="dx-field">
                                                                <div class="dx-field-label"> الباركود</div>
                                                                <div class="dx-field-value">
                                                                    <div id="ITB_Barcode"></div>
                                                                </div>
                                                                <span id="error_ITB_Barcode" class="text-danger"></span>
                                                            </div>
                                                        </div>


                                                        <hr>
                                                        <div id="btnSaveBarcode" style="float:right"></div>

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






    <script>
        // $("#Employeeaction").hide();
    </script>
@endSection()
