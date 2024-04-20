<div class="user-panel mt-3 pb-3 mb-3 d-flex">
    <div class="image">
        <img src="{{ url('assets/dist/img/user2-160x160.jpg') }}" class="img-circle elevation-2" alt="User Image">
    </div>
    <div class="info">
        <a href="#" class="d-block">علاء مهدي</a>
    </div>
</div>

<nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

        <li
            class="nav-item has-treeview {{ request()->routeIs('home.index') || request()->routeIs('main.index') ? 'menu-open' : 'menu-close' }} ">
            <a href="#"
                class="nav-link {{ request()->routeIs('home.index') || request()->routeIs('main.index') ? 'active' : '' }} ">
                <img src="{{ url('assets/img/navbar/icons8_dashboard_64px.png') }}" alt=""
                    style=" width: 32px; height: 32px;">
                {{-- <i class="nav-icon fas fa-tachometer-alt"></i> --}}
                <p style="margin-right: 10px">
                    الرئيسية
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">

                <li class="nav-item" id="Login_Dashboard_Departments">
                    <a href="{{ route('home.index') }}"
                        class="nav-link {{ request()->routeIs('home.index') ? 'active' : '' }}">

                        @if (request()->routeIs('home.index'))
                            <img src="{{ url('assets/img/navbar/icons8_home_64px.png') }}" alt=""
                                style=" width: 32px; height: 32px;">
                            <p style="margin-right:10px">الرئيسية</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_home_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">الرئيسية</p>
                        @endif
                    </a>
                </li>

            </ul>
        </li>

        <li
            class="nav-item has-treeview {{ request()->routeIs('users.index')
                ? // request()->routeIs('permissions.index') ||
                // request()->routeIs('frame.index') ||
                // request()->routeIs('usersgroups.index') ||
                // request()->routeIs('salesgroups.index') ||
                // request()->routeIs('bondsSetting.index') ||
                // request()->routeIs('BillsSetting.index')
                // request()->routeIs('groupsnames.index')
                'menu-open'
                : 'menu-close' }} ">
            <a href="#"
                class="nav-link {{ request()->routeIs('users.index')
                    ? // request()->routeIs('permissions.index') ||
                    // request()->routeIs('frame.index') ||
                    // request()->routeIs('usersgroups.index') ||
                    // request()->routeIs('salesgroups.index') ||
                    // request()->routeIs('bondsSetting.index') ||
                    // request()->routeIs('BillsSetting.index')
                    // request()->routeIs('groupsnames.index')
                    'active'
                    : '' }}">
                <img src="{{ url('assets/img/navbar/icons8_settings_64px.png') }}" alt=""
                    style="width: 32px; height: 32px;">
                <p style="margin-right: 10px">
                    الاعدادات
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item" id="Login_Users">
                    <a href="{{ route('users.index') }}"
                        class="nav-link {{ request()->routeIs('users.index') ? 'active' : '' }}">
                        @if (request()->routeIs('users.index'))
                            <img src="{{ url('assets/img/navbar/icons8_users_64px_1.png') }}" alt=""
                                style=" width: 32px; height: 32px;">
                            <p style="margin-right:10px">المستخدمون</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_users_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">المستخدمون</p>
                        @endif
                    </a>
                </li>


            </ul>
        </li>
        <li class="nav-item {{ request()->routeIs('employees.index') }}">
            <a href="{{ route('employees.index') }}"
                class="nav-link {{ request()->routeIs('employees.index') ? 'active' : '' }}">
                @if (request()->routeIs('employees.index'))
                    <img src="{{ url('assets/img/navbar/icons8_People_64px_1.png') }}" alt=""
                        style=" width: 32px; height: 32px;">
                    <p style="margin-right:10px">الموظفين</p>
                @else
                    <img src="{{ url('assets/img/navbar/icons8_People_64px.png') }}" alt=""
                        style="width: 32px; height: 32px;">
                    <p style="margin-right:10px">الموظفين</p>
                @endif
            </a>

        </li>
        <li
        class="nav-item has-treeview {{ request()->routeIs('certifications.index') ||
             request()->routeIs('comity.index') ||
            request()->routeIs('jobs.index')||
            request()->routeIs('supervisors.index')||
            request()->routeIs('positions.index')||
            request()->routeIs('vacations.index') ||
            request()->routeIs('thanks.index') ||
            request()->routeIs('activity.index') ||
            request()->routeIs('researches.index') 
            ? 'menu-open'
            : 'menu-close' }} ">
        <a href="#"
            class="nav-link {{ request()->routeIs('certifications.index') ||
                request()->routeIs('comity.index')  ||
                request()->routeIs('jobs.index')||
                request()->routeIs('supervisors.index')||
                request()->routeIs('positions.index')||
                request()->routeIs('vacations.index') ||
                request()->routeIs('thanks.index') ||
                request()->routeIs('activity.index') ||
                request()->routeIs('researches.index') 
                ? 'active'
                : '' }}">
            <img src="{{ url('assets/img/navbar/icons8_settings_64px.png') }}" alt=""
                style="width: 32px; height: 32px;">
            <p style="margin-right: 10px">
                الادارية
                <i class="right fas fa-angle-left"></i>
            </p>
        </a>
        <ul class="nav nav-treeview">
            <li class="nav-item" id="Login_Certification">
                <a href="{{ route('certifications.index') }}"
                    class="nav-link {{ request()->routeIs('certifications.index') ? 'active' : '' }}">
                    @if (request()->routeIs('certifications.index'))
                        <img src="{{ url('assets/img/navbar/icons8_certificate_64px_1.png') }}" alt=""
                            style=" width: 32px; height: 32px;">
                        <p style="margin-right:10px">الشهادات</p>
                    @else
                        <img src="{{ url('assets/img/navbar/icons8_certificate_64px.png') }}" alt=""
                            style="width: 32px; height: 32px;">
                        <p style="margin-right:10px">الشهادات</p>
                    @endif
                </a>
            </li>
            <li class="nav-item" id="Login_Comity">
                <a href="{{ route('comity.index') }}"
                    class="nav-link {{ request()->routeIs('comity.index') ? 'active' : '' }}">
                    @if (request()->routeIs('comity.index'))
                        <img src="{{ url('assets/img/navbar/icons8_collaboration_64px_1.png') }}" alt=""
                            style=" width: 32px; height: 32px;">
                        <p style="margin-right:10px">اللجان</p>
                    @else
                        <img src="{{ url('assets/img/navbar/icons8_collaboration_64px.png') }}" alt=""
                            style="width: 32px; height: 32px;">
                        <p style="margin-right:10px">اللجان</p>
                    @endif
                </a>
            </li>
            <li class="nav-item" id="Login_Jobs">
                <a href="{{ route('jobs.index') }}"
                    class="nav-link {{ request()->routeIs('jobs.index') ? 'active' : '' }}">
                    @if (request()->routeIs('jobs.index'))
                        <img src="{{ url('assets/img/navbar/icons8_businessman_64px_1.png') }}" alt=""
                            style=" width: 32px; height: 32px;">
                        <p style="margin-right:10px">العناوين الوظيفية</p>
                    @else
                        <img src="{{ url('assets/img/navbar/icons8_businessman_64px.png') }}" alt=""
                            style="width: 32px; height: 32px;">
                        <p style="margin-right:10px">العناوين الوظيفية</p>
                    @endif
                </a>
            </li>
            <li class="nav-item" id="Login_Supervisor">
                <a href="{{ route('supervisors.index') }}"
                    class="nav-link {{ request()->routeIs('supervisors.index') ? 'active' : '' }}">
                    @if (request()->routeIs('supervisors.index'))
                        <img src="{{ url('assets/img/navbar/icons8_coach_64px_1.png') }}" alt=""
                            style=" width: 32px; height: 32px;">
                        <p style="margin-right:10px">الاشراف </p>
                    @else
                        <img src="{{ url('assets/img/navbar/icons8_coach_64px.png') }}" alt=""
                            style="width: 32px; height: 32px;">
                        <p style="margin-right:10px">الاشراف </p>
                    @endif
                </a>
            </li>
            <li class="nav-item" id="Login_Positions">
                <a href="{{ route('positions.index') }}"
                    class="nav-link {{ request()->routeIs('positions.index') ? 'active' : '' }}">
                    @if (request()->routeIs('positions.index'))
                        <img src="{{ url('assets/img/navbar/icons8_project_manager_64px_1.png') }}" alt=""
                            style=" width: 32px; height: 32px;">
                        <p style="margin-right:10px">المناصب </p>
                    @else
                        <img src="{{ url('assets/img/navbar/icons8_project_manager_64px.png') }}" alt=""
                            style="width: 32px; height: 32px;">
                        <p style="margin-right:10px">المناصب </p>
                    @endif
                </a>
            </li>
            <li class="nav-item" id="Login_Vacations">
                <a href="{{ route('vacations.index') }}"
                    class="nav-link {{ request()->routeIs('vacations.index') ? 'active' : '' }}">
                    @if (request()->routeIs('vacations.index'))
                        <img src="{{ url('assets/img/navbar/icons8_Traveler_64px_1.png') }}" alt=""
                            style=" width: 32px; height: 32px;">
                        <p style="margin-right:10px">الاجازات </p>
                    @else
                        <img src="{{ url('assets/img/navbar/icons8_Traveler_64px.png') }}" alt=""
                            style="width: 32px; height: 32px;">
                        <p style="margin-right:10px">الاجازات </p>
                    @endif
                </a>
            </li>
            <li class="nav-item" id="Login_Thanks">
                <a href="{{ route('thanks.index') }}"
                    class="nav-link {{ request()->routeIs('thanks.index') ? 'active' : '' }}">
                    @if (request()->routeIs('thanks.index'))
                        <img src="{{ url('assets/img/navbar/icons8_salute_64px_1.png') }}" alt=""
                            style=" width: 32px; height: 32px;">
                        <p style="margin-right:10px">التشكرات </p>
                    @else
                        <img src="{{ url('assets/img/navbar/icons8_salute_64px.png') }}" alt=""
                            style="width: 32px; height: 32px;">
                        <p style="margin-right:10px">التشكرات </p>
                    @endif
                </a>
            </li>
            <li class="nav-item" id="Login_Activity">
                <a href="{{ route('activity.index') }}"
                    class="nav-link {{ request()->routeIs('activity.index') ? 'active' : '' }}">
                    @if (request()->routeIs('activity.index'))
                        <img src="{{ url('assets/img/navbar/icons8_crowd_64px_1.png') }}" alt=""
                            style=" width: 32px; height: 32px;">
                        <p style="margin-right:10px">الانشطة والفعاليات </p>
                    @else
                        <img src="{{ url('assets/img/navbar/icons8_crowd_64px.png') }}" alt=""
                            style="width: 32px; height: 32px;">
                        <p style="margin-right:10px">الانشطة والفعاليات </p>
                    @endif
                </a>
            </li>
            <li class="nav-item" id="Login_Researches">
                <a href="{{ route('researches.index') }}"
                    class="nav-link {{ request()->routeIs('researches.index') ? 'active' : '' }}">
                    @if (request()->routeIs('researches.index'))
                        <img src="{{ url('assets/img/navbar/icons8_reading_64px_1.png') }}" alt=""
                            style=" width: 32px; height: 32px;">
                        <p style="margin-right:10px"> البحوث والنشر </p>
                    @else
                        <img src="{{ url('assets/img/navbar/icons8_reading_64px.png') }}" alt=""
                            style="width: 32px; height: 32px;">
                        <p style="margin-right:10px">البحوث والنشر </p>
                    @endif
                </a>
            </li>

        </ul>
    </li>

        {{-- <li
            class="nav-item has-treeview {{ request()->routeIs('accounttree.index') ||
            request()->routeIs('accounttree') ||
            request()->routeIs('accounttree')
                ? 'menu-open'
                : 'menu-close' }}">
            <a href="#"
                class="nav-link {{ request()->routeIs('accounttree.index') ||
                request()->routeIs('accounttree') ||
                request()->routeIs('accounttree')
                    ? 'active'
                    : '' }}">
                <img src="{{ url('assets/img/navbar/icons8_bank_building_64px.png') }}" alt=""
                    style="width: 32px;height: 32px;">
                <p style="margin-right: 10px">
                    الحسابات
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item" id="Login_Accounts_Tree">
                    <a href="{{ route('accounttree.index') }}"
                        class="nav-link {{ request()->routeIs('accounttree.index') ? 'active' : '' }}">
                        @if (request()->routeIs('accounttree.index'))
                            <img src="{{ url('assets/img/navbar/icons8_flow_chart_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">شجرة الحسابات</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_flow_chart_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">شجرة الحسابات</p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_TrialBalance">
                    <a href="" class="nav-link ">
                        @if (request()->routeIs('accounttree.index'))
                            <img src="{{ url('assets/img/navbar/icons8_Scales_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">ميزان المراجعة</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_Scales_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">ميزان المراجعة</p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_Ledger">
                    <a href="" class="nav-link ">
                        @if (request()->routeIs('accounttree.index'))
                            <img src="{{ url('assets/img/navbar/icons8_moleskine_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">دفتر الاستاذ</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_moleskine_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">دفتر الاستاذ</p>
                        @endif
                    </a>
                </li>
            </ul>

        </li>

        <li
            class="nav-item has-treeview {{ request()->routeIs('Bonds.index', ['BondType' => 'سند قبض']) ||
            request()->routeIs('BondsPayment.index', ['BondType' => 'سند صرف']) ||
            request()->routeIs('BondsStarter.index', ['BondType' => 'قيد افتتاحي']) ||
            request()->routeIs('BondsDoc.index', ['BondType' => 'سند قيد']) ||
            request()->routeIs('BondsBills.index', ['BondType' => 'قيد الفواتير'])
                ? 'menu-open'
                : 'menu-close' }}">
            <a href="#"
                class="nav-link {{ request()->routeIs('Bonds.index', ['BondType' => 'سند قبض']) ||
                request()->routeIs('BondsPayment.index', ['BondType' => 'سند صرف']) ||
                request()->routeIs('BondsStarter.index', ['BondType' => 'قيد افتتاحي']) ||
                request()->routeIs('BondsDoc.index', ['BondType' => 'سند قيد']) ||
                request()->routeIs('BondsBills.index', ['BondType' => 'قيد الفواتير'])
                    ? 'active'
                    : '' }}">
                <img src="{{ url('assets/img/navbar/icons8_finance_document_64px.png') }}" alt=""
                    style="width:32px;height: 32px;">
                <p style="margin-right: 10px">
                    السندات
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">

                <li class="nav-item" id="Login_CatchBond">
                    <a href="{{ route('Bonds.index', ['BondType' => 'سند قبض']) }}"
                        class="nav-link {{ request()->routeIs('Bonds.index', ['BondType' => 'سند قبض']) ? 'active' : '' }}">
                        @if (request()->routeIs('Bonds.index', ['BondType' => 'سند قبض']))
                            <img src="{{ url('assets/img/navbar/icons8_Dollar_coin_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">سند قبض</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_Dollar_coin_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">سند قبض</p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_PaymentBond">
                    <a href="{{ route('BondsPayment.index', ['BondType' => 'سند صرف']) }}"
                        class="nav-link {{ request()->routeIs('BondsPayment.index', ['BondType' => 'سند صرف']) ? 'active' : '' }}">
                        @if (request()->routeIs('BondsPayment.index', ['BondType' => 'سند صرف']))
                            <img src="{{ url('assets/img/navbar/icons8_Dollar_coin_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">سند صرف</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_Dollar_coin_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">سند صرف</p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_StarterBond">
                    <a href="{{ route('BondsStarter.index', ['BondType' => 'قيد افتتاحي']) }}"
                        class="nav-link {{ request()->routeIs('BondsStarter.index', ['BondType' => 'قيد افتتاحي']) ? 'active' : '' }}">
                        @if (request()->routeIs('BondsStarter.index', ['BondType' => 'قيد افتتاحي']))
                            <img src="{{ url('assets/img/navbar/icons8_Dollar_coin_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">قيد افتتاحي</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_Dollar_coin_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">قيد افتتاحي</p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_RecordDoc">
                    <a href="{{ route('BondsDoc.index', ['BondType' => 'سند قيد']) }}"
                        class="nav-link {{ request()->routeIs('BondsDoc.index', ['BondType' => 'سند قيد']) ? 'active' : '' }}">
                        @if (request()->routeIs('BondsDoc.index', ['BondType' => 'سند قيد']))
                            <img src="{{ url('assets/img/navbar/icons8_Dollar_coin_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">سند قيد </p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_Dollar_coin_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">سند قيد </p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_BondOfBills">
                    <a href="{{ route('BondsBills.index', ['BondType' => 'قيد الفواتير']) }}"
                        class="nav-link {{ request()->routeIs('BondsBills.index', ['BondType' => 'قيد الفواتير']) ? 'active' : '' }}">
                        @if (request()->routeIs('BondsBills.index', ['BondType' => 'قيد الفواتير']))
                            <img src="{{ url('assets/img/navbar/icons8_Dollar_coin_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">قيد الفواتير</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_Dollar_coin_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">قيد الفواتير</p>
                        @endif
                    </a>
                </li>

            </ul>
        </li>
        <li
            class="nav-item has-treeview {{ request()->routeIs('customersupplier.index') || request()->routeIs('customersupplier.inex')
                ? 'menu-open'
                : 'menu-close' }}">
            <a href="#"
                class="nav-link {{ request()->routeIs('customersupplier.index') || request()->routeIs('customersupplier.inex') ? 'active' : '' }}">
                <img src="{{ url('assets/img/navbar/icons8_People_64px.png') }}" alt=""
                    style="width:32px;height: 32px;">
                <p style="margin-right: 10px">
                    العملاء والموردين
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item" id="Login_CustomerAndSupplier">
                    <a href="{{ route('customersupplier.index') }}"
                        class="nav-link {{ request()->routeIs('customersupplier.index') ? 'active' : '' }}">
                        @if (request()->routeIs('customersupplier.index'))
                            <img src="{{ url('assets/img/navbar/icons8_Staff_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px"> عميل / مورد </p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_Staff_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px"> عميل / مورد </p>
                        @endif
                    </a>
                </li>

                <li class="nav-item" id="Login_AccountReport">
                    <a href="" class="nav-link ">
                        @if (request()->routeIs('customersupplier.index'))
                            <img src="{{ url('assets/img/navbar/icons8_Report_File_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">كشف حساب</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_Report_File_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">كشف حساب</p>
                        @endif
                    </a>
                </li>
            </ul>

        </li>

        <li
            class="nav-item has-treeview {{ request()->routeIs('BillsBuying.index') ||
            request()->routeIs('BillsSaling.index') ||
            request()->routeIs('BillsOrdering.index') ||
            request()->routeIs('DeliveryBills.index') ||
            request()->routeIs('ReceiveBills.index')
                ? 'menu-open'
                : 'menu-close' }}">
            <a href="#"
                class="nav-link {{ request()->routeIs('BillsBuying.index') ||
                request()->routeIs('BillsSaling.index') ||
                request()->routeIs('BillsOrdering.index') ||
                request()->routeIs('DeliveryBills.index') ||
                request()->routeIs('ReceiveBills.index')
                    ? 'active'
                    : '' }}">
                <img src="{{ url('assets/img/navbar/icons8_cheque_64px.png') }}" alt=""
                    style="width:32px;height: 32px;">
                <p style="margin-right: 10px">
                    الفواتير
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">

                <li class="nav-item" id="Login_BillBuying">
                    <a href="{{ route('BillsBuying.index', ['billType' => 'فاتورة مشتريات']) }}"
                        class="nav-link {{ request()->routeIs('BillsBuying.index', ['billType' => 'فاتورة مشتريات']) ? 'active' : '' }}">
                        @if (request()->routeIs('BillsBuying.index', ['billType' => 'فاتورة مشتريات']))
                            <img src="{{ url('assets/img/navbar/icons8_shopping_cart_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px"> فاتورة مشتريات</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_shopping_cart_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">فاتورة مشتريات </p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_BillSaling">
                    <a href="{{ route('BillsSaling.index', ['billType' => 'فاتورة مبيعات']) }}"
                        class="nav-link {{ request()->routeIs('BillsSaling.index', ['billType' => 'فاتورة مبيعات']) ? 'active' : '' }}">
                        @if (request()->routeIs('BillsSaling.index', ['billType' => 'فاتورة مبيعات']))
                            <img src="{{ url('assets/img/navbar/icons8_sale_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px"> فاتورة مبيعات</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_sale_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">فاتورة مبيعات </p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_OrderBills">
                    <a href="{{ route('BillsOrdering.index', ['billType' => 'فاتورة طلبيات']) }}"
                        class="nav-link {{ request()->routeIs('BillsOrdering.index', ['billType' => 'فاتورة طلبيات']) ? 'active' : '' }}">
                        @if (request()->routeIs('BillsOrdering.index', ['billType' => 'فاتورة طلبيات']))
                            <img src="{{ url('assets/img/navbar/icons8_Buy_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px"> فاتورة طلبيات</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_Buy_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px"> فاتورة طلبيات</p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_DeliveryBills">
                    <a href="{{ route('DeliveryBills.index', ['billType' => 'فاتورة تسليم']) }}"
                        class="nav-link {{ request()->routeIs('DeliveryBills.index', ['billType' => 'فاتورة تسليم']) ? 'active' : '' }}">
                        @if (request()->routeIs('DeliveryBills.index', ['billType' => 'فاتورة تسليم']))
                            <img src="{{ url('assets/img/navbar/icons8_Buy_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px"> فاتورة تسليم</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_Buy_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px"> فاتورة تسليم</p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_ReceiveBills">
                    <a href="{{ route('ReceiveBills.index', ['billType' => 'فاتورة استلام']) }}"
                        class="nav-link {{ request()->routeIs('ReceiveBills.index', ['billType' => 'فاتورة استلام']) ? 'active' : '' }}">
                        @if (request()->routeIs('ReceiveBills.index', ['billType' => 'فاتورة استلام']))
                            <img src="{{ url('assets/img/navbar/icons8_Buy_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px"> فاتورة استلام</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_Buy_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px"> فاتورة استلام</p>
                        @endif
                    </a>
                </li>

            </ul>
        </li>
        <li
            class="nav-item has-treeview {{ request()->routeIs('items.index') ||
            request()->routeIs('itemsTree.index') ||
            request()->routeIs('stories.index')
                ? 'menu-open'
                : 'menu-close' }}">
            <a href="#"
                class="nav-link {{ request()->routeIs('items.index') ||
                request()->routeIs('itemsTree.index') ||
                request()->routeIs('stories.index')
                    ? 'active'
                    : '' }}">
                <img src="{{ url('assets/img/navbar/icons8_Online_Store_64px.png') }}" alt=""
                style="width:32px;height: 32px;">
                <p style="margin-right: 10px">
                    المخازن والمستودعات
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">

                <li class="nav-item" id="Login_Items">
                    <a href="{{ route('items.index') }}"
                        class="nav-link {{ request()->routeIs('items.index') ? 'active' : '' }}">
                        @if (request()->routeIs('items.index'))
                            <img src="{{ url('assets/img/navbar/icons8_Clipboard_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px"> بطاقة مادة </p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_Clipboard_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px"> بطاقة مادة </p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_ItemsTree">
                    <a href="{{ route('itemsTree.index') }}"
                        class="nav-link {{ request()->routeIs('itemsTree.index') ? 'active' : '' }}">
                        @if (request()->routeIs('itemsTree.index'))
                            <img src="{{ url('assets/img/navbar/icons8_Flow_Chart_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px"> شجرة المواد  </p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_Flow_Chart_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px"> شجرة المواد  </p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_Stories">
                    <a href="{{ route('stories.index') }}"
                        class="nav-link {{ request()->routeIs('stories.index') ? 'active' : '' }}">
                        @if (request()->routeIs('stories.index'))
                            <img src="{{ url('assets/img/navbar/icons8_Flow_Chart_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px"> دليل المخازن  </p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_Flow_Chart_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px"> دليل المخازن  </p>
                        @endif
                    </a>
                </li>


            </ul>
        </li> --}}
        {{-- <li class="nav-item has-treeview {{ request()->routeIs('VIN.index') ? 'menu-open' : 'menu-close' }}">
            <a href="#" class="nav-link {{ request()->routeIs('VIN.index') ? 'active' : '' }}">
                <img src="{{ url('assets/img/icons/icons8_receipt_32px.png') }}" alt=""
                    style="">
                <p>
                    VIN
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">

                <li class="nav-item" id="Login_VIN">
                    <a href="{{ route('VIN.index') }}"
                        class="nav-link {{ request()->routeIs('VIN.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<img
                            src="{{ url('assets/img/icons/icons8_traffic_jam_25px.png') }}" alt=""
                            style="margin-right: 5px">
                        <p>VIN Searching</p>
                    </a>
                </li>



            </ul>
        </li>
        <li class="nav-item has-treeview menu-close">
            <a href="#" class="nav-link">
                <i class="nav-icon fa fa-cart-plus"></i>
                <p>
                    الطلبيات
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item" id="Login_Order">
                    <a href="{{ route('ordermain.index') }}"
                        class="nav-link {{ request()->routeIs('ordermain.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i class="nav-icon bi bi-cart-check-fill"></i>
                        <p>الطلبيات</p>
                    </a>
                </li>
                <li class="nav-item" id="Login_Battery">
                    <a href="{{ route('battreys.index') }}"
                        class="nav-link {{ request()->routeIs('battreys.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i class="nav-icon bi bi-battery"></i>
                        <p>الاطارات</p>
                    </a>
                </li>
                <li class="nav-item" id="Login_Items">
                    <a href="{{ route('itemstoask.index') }}"
                        class="nav-link {{ request()->routeIs('itemstoask.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i class="nav-icon bi bi-basket"></i>
                        <p>المواد</p>
                    </a>
                </li>


            </ul>
        </li>
        <li class="nav-item has-treeview menu-close">
            <a href="#" class="nav-link">
                <img src="{{ url('assets/img/icons/icons8_info_32px.png') }}" alt="">
                <p>
                    معلومات عامة
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item" id="Login_CarsInfo">
                    <a href="{{ route('CarsInfo.index') }}"
                        class="nav-link {{ request()->routeIs('CarsInfo.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;</i><img src="{{ url('assets/img/icons/icons8_car_32px.png') }}"
                            alt="" style="margin-right: 5px;width: 25px;height: 25px;">
                        <p>العجلات</p>
                    </a>
                </li>



            </ul>
        </li> --}}

    </ul>
</nav>
