@extends('admin.layout.mainarabic')
{{-- @section('title', 'Items') --}}
@section('content')

    <div id="Popup"></div>
    <div class="col-md-12">


        <div class="card ItemsTreeaction" id="ItemsTreeaction">
            <div class="card-header " style="background-color: #393a3a">
                <div id="btnAddNew"></div>
                <div id="btnSave"></div>
                {{-- <h4 style="color: white;" id="card_ItemsTreetitle" class="card_ItemsTreetitle"> </h4> --}}

            </div>
            <div id="notificationContainer"></div>
            <div class="card-body">
                <div class="col-md-6">
                    <div class="dx-fieldset" id="Search-container">
                        <div class="dx-field">
                            <div class="dx-field-value">
                                <div id="IT_Search"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr>
                <div class="row flex">

                    @csrf

                    <div class="col-md-4">
                        <div class="form-group ">

                            <div class="dx-fieldset" id="Item-container" hidden>
                                <div class="dx-field">
                                    <div class="dx-field-label">ItemGuid</div>
                                    <div class="dx-field-value">
                                        <div id="IT_ID"></div>
                                    </div>
                                    <span id="error_IT_Guid" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Item-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">اسم المادة</div>
                                    <div class="dx-field-value">
                                        <div id="IT_Name"></div>
                                    </div>
                                </div>
                                <span id="error_IT_Name" class="text-danger"></span>
                            </div>
                            <div class="dx-fieldset" id="Item-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">الاسم بالعربي</div>
                                    <div class="dx-field-value">
                                        <div id="IT_ArabicName"></div>
                                    </div>
                                </div>
                                <span id="error_IT_ArabicName" class="text-danger"></span>
                            </div>
                            <div class="dx-fieldset" id="Item-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">رمز الشركة</div>
                                    <div class="dx-field-value">
                                        <div id="IT_CPartNumber"></div>
                                    </div>
                                </div>
                                <span id="error_IT_CPartNumber" class="text-danger"></span>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="form-group ">

                            <div class="dx-fieldset" id="Item-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">المجموعة</div>
                                    <div class="dx-field-value">
                                        <div id="IT_ParentID"></div>
                                    </div>
                                </div>
                                <span id="error_IT_ParentID" class="text-danger"></span>
                            </div>
                            <div class="dx-fieldset" id="Item-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">رمز المادة</div>
                                    <div class="dx-field-value">
                                        <div id="IT_PartNumber"></div>
                                    </div>
                                </div>
                                <span id="error_IT_PartNumber" class="text-danger"></span>
                            </div>
                            <div class="dx-fieldset" id="Item-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">الرمز الاصلي</div>
                                    <div class="dx-field-value">
                                        <div id="IT_GenuinePartNumber"></div>
                                    </div>
                                </div>
                                <span id="error_IT_GenuinePartNumber" class="text-danger"></span>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="form-group ">

                            <div class="dx-fieldset" id="Item-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">كود التعريف</div>
                                    <div class="dx-field-value">
                                        <div id="IT_Code"></div>
                                    </div>
                                    <span id="error_IT_Code" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Item-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">رمز المادة2</div>
                                    <div class="dx-field-value">
                                        <div id="IT_PartNumber2"></div>
                                    </div>
                                </div>
                                <span id="error_IT_PartNumber2" class="text-danger"></span>
                            </div>
                            <div class="dx-fieldset" id="Item-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">نوع المادة</div>
                                    <div class="dx-field-value">
                                        <div id="IT_Kind"></div>
                                    </div>
                                </div>
                                <span id="error_IT_Kind" class="text-danger"></span>
                            </div>

                        </div>
                    </div>


                </div>
                <hr>
                <div class="row flex">

                    @csrf
                    <div class="col-md-4">
                        <div class="form-group ">

                            <div class="dx-fieldset" id="Item-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">الشركة</div>
                                    <div class="dx-field-value">
                                        <div id="IT_Company"></div>
                                    </div>
                                </div>
                                <span id="error_IT_Company" class="text-danger"></span>
                            </div>
                            <div class="dx-fieldset" id="ItemToggle-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">الحالة</div>
                                    <div class="dx-field-value">
                                        <div id="IT_State"></div>
                                    </div>
                                    <span id="error_IT_State" class="text-danger"></span>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="form-group ">
                            <div class="dx-fieldset" id="Item-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">الماركة</div>
                                    <div class="dx-field-value">
                                        <div id="IT_Brand"></div>
                                    </div>
                                    <span id="error_IT_Brand" class="text-danger"></span>
                                </div>
                            </div>
                            <div class="dx-fieldset" id="Item-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">التفاصيل</div>
                                    <div class="dx-field-value">
                                        <div id="IT_Description"></div>
                                    </div>
                                    <span id="error_IT_Description" class="text-danger"></span>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div class="col-md-4">
                        <div class="form-group ">
                            <div class="dx-fieldset" id="Item-container">
                                <div class="dx-field">
                                    <div class="dx-field-label">حد الطلب</div>
                                    <div class="dx-field-value">
                                        <div id="IT_Ask_Stop"></div>
                                    </div>
                                    <span id="error_IT_Ask_Stop" class="text-danger"></span>
                                </div>
                            </div>
                        </div>
                        <div class="dx-fieldset" id="Item-container">
                            <div class="dx-field">
                                <div class="dx-field-label">ملاحظات</div>
                                <div class="dx-field-value">
                                    <div id="IT_Notes"></div>
                                </div>
                                <span id="error_IT_Notes" class="text-danger"></span>
                            </div>
                        </div>
                    </div>

                </div>
                <hr>



                <ul class="nav nav-tabsItems">
                    <li class="nav-item"><a href="#itemGeneral" class="nav-link active" data-bs-toggle="tab">عام</a>
                    </li>
                    <li class="nav-item"><a href="#itemsUnits" class="nav-link" data-bs-toggle="tab">وحدات</a>
                    </li>
                    <li class="nav-item"><a href="#itemsPrices" class="nav-link " data-bs-toggle="tab">اسعار</a></li>
                    <li class="nav-item"><a href="#itemsthrees" class="nav-link " data-bs-toggle="tab">حركة المادة</a>
                    </li>
                    <li class="nav-item"><a href="#itemsFour" class="nav-link " data-bs-toggle="tab">تفاصيل المادة</a>
                    </li>


                </ul>
                <div class="tab-content ">
                    <div class="tab-pane mt-3 active" id="itemGeneral">
                        <div class="row border g-0 rounded shadow-sm">
                            <div class="col p-4">

                                <div class="col-md-14 mt-1 row flex">

                                    <div class="col-md-4">
                                        <div class="form-group ">

                                            <div class="dx-fieldset" id="Item-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">قياس</div>
                                                    <div class="dx-field-value">
                                                        <div id="IT_Dim"></div>
                                                    </div>
                                                    <span id="error_IT_Dim" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Item-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">لون</div>
                                                    <div class="dx-field-value">
                                                        <div id="IT_Color"></div>
                                                    </div>
                                                    <span id="error_IT_Color" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Item-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">اعلى حد</div>
                                                    <div class="dx-field-value">
                                                        <div id="IT_Higx"></div>
                                                    </div>
                                                    <span id="error_IT_Higx" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Item-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">اقل حد</div>
                                                    <div class="dx-field-value">
                                                        <div id="IT_Lowx"></div>
                                                    </div>
                                                    <span id="error_IT_Lowx" class="text-danger"></span>
                                                </div>
                                            </div>
                                            <div class="dx-fieldset" id="Item-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label">عدد المادة في</div>
                                                    <div class="dx-field-value">
                                                        <div id="IT_CountIn"></div>
                                                    </div>
                                                    <span id="error_IT_CountIn" class="text-danger"></span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group ">
                                            <div class="dx-fieldset" id="Item-container">
                                                <div class="dx-field">
                                                    <div class="dx-field-label"> الكمية</div>
                                                    <div class="dx-field-value">
                                                        <div id="IT_ItemCount"></div>
                                                    </div>
                                                    <span id="error_IT_ItemCount" class="text-danger"></span>
                                                </div>
                                            </div>

                                        </div>

                                    </div>


                                </div>


                            </div>
                        </div>
                    </div>

                    <div class="tab-pane mt-3" id="itemsUnits">
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
                    <div class="tab-pane mt-3" id="itemsPrices">
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

                    <div class="tab-pane mt-3" id="itemsthrees">
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

                    <div class="tab-pane mt-3" id="itemsFour">
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


                </div>






            </div>
        </div>



    </div>
    <script type="text/javascript" src="{{ url('assets/js/pro_js/itemsFour.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/js/pro_js/itemsFive.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/js/pro_js/itemsThree.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/js/pro_js/ItemsFinal.js') }}"></script>





    <script>
        $("#itemsaction").hide();
        $("#Storesaction").hide();
        $('#ItemThreeaction').hide();
        $('#Modelsaction').hide();
        $('#ItemFifthaction').hide();
        // $('#itemFiveaction2').hide();
    </script>
@endSection()
