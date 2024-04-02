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
                <li class="nav-item" id="Login_Dashboard_Main">
                    <a href="{{ route('main.index') }}"
                        class="nav-link {{ request()->routeIs('main.index') ? 'active' : '' }}">

                        @if (request()->routeIs('main.index'))
                            <img src="{{ url('assets/img/navbar/icons8_home_64px.png') }}" alt=""
                                style=" width: 32px; height: 32px;">
                            <p style="margin-right:10px">الرئيسية</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_home_64px_1.png') }}" alt=""
                                style=" width: 32px; height: 32px;">
                            <p style="margin-right:10px">الرئيسية</p>
                        @endif
                    </a>
                </li>
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
            class="nav-item has-treeview {{ request()->routeIs('users.index') ||
            request()->routeIs('permissions.index') ||
            // request()->routeIs('frame.index') ||
            request()->routeIs('usersgroups.index') ||
            request()->routeIs('salesgroups.index') ||
            request()->routeIs('bondsSetting.index') ||
            request()->routeIs('BillsSetting.index')
            // request()->routeIs('groupsnames.index')
                ? 'menu-open'
                : 'menu-close' }} ">
            <a href="#"
                class="nav-link {{ request()->routeIs('users.index') ||
                request()->routeIs('permissions.index') ||
                // request()->routeIs('frame.index') ||
                request()->routeIs('usersgroups.index') ||
                request()->routeIs('salesgroups.index') ||
                request()->routeIs('bondsSetting.index') ||
                request()->routeIs('BillsSetting.index')
                // request()->routeIs('groupsnames.index')
                    ? 'active'
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
                <li class="nav-item" id="Login_UsersGroups">
                    <a href="{{ route('usersgroups.index') }}"
                        class="nav-link {{ request()->routeIs('usersgroups.index') ? 'active' : '' }}">
                        @if (request()->routeIs('usersgroups.index'))
                            <img src="{{ url('assets/img/navbar/icons8_access_denied_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">المجموعات</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_access_denied_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">المجموعات</p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_Permissions">
                    <a href="{{ route('permissions.index') }}"
                        class="nav-link {{ request()->routeIs('permissions.index') ? 'active' : '' }}">
                        @if (request()->routeIs('permissions.index'))
                            <img src="{{ url('assets/img/navbar/icons8_access_denied_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">الصلاحيات</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_access_denied_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">الصلاحيات</p>
                        @endif
                    </a>
                </li>
                {{-- <li class="nav-item" id="Login_Frame">
                    <a href="{{ route('frame.index') }}"
                        class="nav-link {{ request()->routeIs('frame.index') ? 'active' : '' }}">
                        @if (request()->routeIs('frame.index'))
                            <img src="{{ url('assets/img/navbar/icons8_access_denied_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">النماذج</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_access_denied_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">النماذج</p>
                        @endif
                    </a>
                </li> --}}
                {{-- <li class="nav-item" id="Login_State">
                    <a href="{{ route('state.index') }}"
                        class="nav-link {{ request()->routeIs('state.index') ? 'active' : '' }}">
                        @if (request()->routeIs('state.index'))
                            <img src="{{ url('assets/img/navbar/icons8_access_denied_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">الحالة</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_access_denied_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">الحالة</p>
                        @endif
                    </a>
                </li> --}}
                <li class="nav-item" id="Login_SalingGroup">
                    <a href="{{ route('salesgroups.index') }}"
                        class="nav-link {{ request()->routeIs('salesgroups.index') ? 'active' : '' }}">
                        @if (request()->routeIs('salesgroups.index'))
                            <img src="{{ url('assets/img/navbar/icons8_access_denied_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">مجموعة البيع</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_access_denied_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">مجموعة البيع</p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_BillsSetting">
                    <a href="{{ route('BillsSetting.index') }}"
                        class="nav-link {{ request()->routeIs('BillsSetting.index') ? 'active' : '' }}">
                        @if (request()->routeIs('BillsSetting.index'))
                            <img src="{{ url('assets/img/navbar/icons8_access_denied_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">اعدادات الفواتير</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_access_denied_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">اعدادات الفواتير</p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_BondsSetting">
                    <a href="{{ route('bondsSetting.index') }}"
                        class="nav-link {{ request()->routeIs('bondsSetting.index') ? 'active' : '' }}">
                        @if (request()->routeIs('bondsSetting.index'))
                            <img src="{{ url('assets/img/navbar/icons8_access_denied_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">اعدادات السندات</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_access_denied_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">اعدادات السندات</p>
                        @endif
                    </a>
                </li>

                {{-- <li class="nav-item" id="Login_GroupsName">
                    <a href="{{ route('groupsnames.index') }}"
                        class="nav-link {{ request()->routeIs('groupsnames.index') ? 'active' : '' }}">
                        @if (request()->routeIs('groupsnames.index'))
                            <img src="{{ url('assets/img/navbar/icons8_access_denied_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">اسماء المجموعات</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_access_denied_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">اسماء المجموعات</p>
                        @endif
                    </a>
                </li> --}}

            </ul>
        </li>



        <li
            class="nav-item has-treeview {{ request()->routeIs('unitname.index*') ||
            request()->routeIs('brand.index*') ||
            request()->routeIs('currency.index*') ||
            request()->routeIs('country.index*') ||
            request()->routeIs('kind.index*') ||
            request()->routeIs('company.index*') ||
            request()->routeIs('modell.index*')
                ? 'menu-open'
                : 'menu-close' }}">
            <a href="#"
                class="nav-link {{ request()->routeIs('unitname.index*') ||
                request()->routeIs('brand.index*') ||
                request()->routeIs('currency.index*') ||
                request()->routeIs('country.index*') ||
                request()->routeIs('kind.index*') ||
                request()->routeIs('company.index*') ||
                request()->routeIs('modell.index*')
                    ? 'active'
                    : '' }}">
                <img src="{{ url('assets/img/navbar/icons8_database_view_64px.png') }}" alt=""
                    style="width: 28px; height: 28px;">
                <p style="margin-right: 10px">
                    بيانات ثابتة
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">


                <li class="nav-item" id="Login_Unitname">
                    <a href="{{ route('unitname.index') }}"
                        class="nav-link {{ request()->routeIs('unitname.index') ? 'active' : '' }}">
                        @if (request()->routeIs('unitname.index'))
                            <img src="{{ url('assets/img/navbar/icons8_cells_64px_1.png') }}" alt=""
                                style=" width: 32px; height: 32px;">
                            <p style="margin-right:10px">الوحدات</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_cells_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">الوحدات</p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_Brand">
                    <a href="{{ route('brand.index') }}"
                        class="nav-link {{ request()->routeIs('brand.index') ? 'active' : '' }}">
                        @if (request()->routeIs('brand.index'))
                            <img src="{{ url('assets/img/navbar/icons8_cells_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">الماركات</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_cells_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">الماركات</p>
                        @endif
                    </a>
                </li>

                <li class="nav-item" id="Login_Company">
                    <a href="{{ route('company.index') }}"
                        class="nav-link {{ request()->routeIs('company.index') ? 'active' : '' }}">
                        @if (request()->routeIs('company.index'))
                            <img src="{{ url('assets/img/navbar/icons8_cells_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">الشركات</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_cells_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">الشركات</p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_Country">
                    <a href="{{ route('country.index') }}"
                        class="nav-link {{ request()->routeIs('country.index') ? 'active' : '' }}">
                        @if (request()->routeIs('country.index'))
                            <img src="{{ url('assets/img/navbar/icons8_cells_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">الدول</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_cells_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">الدول</p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_Currency">
                    <a href="{{ route('currency.index') }}"
                        class="nav-link {{ request()->routeIs('currency.index') ? 'active' : '' }}">
                        @if (request()->routeIs('currency.index'))
                            <img src="{{ url('assets/img/navbar/icons8_cells_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">العملات</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_cells_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">العملات</p>
                        @endif
                    </a>
                </li>

                <li class="nav-item" id="Login_Kinds">
                    <a href="{{ route('kind.index') }}"
                        class="nav-link {{ request()->routeIs('kind.index') ? 'active' : '' }}">
                        @if (request()->routeIs('kind.index'))
                            <img src="{{ url('assets/img/navbar/icons8_cells_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">النوع</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_cells_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">النوع</p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_Modell">
                    <a href="{{ route('modell.index') }}"
                        class="nav-link {{ request()->routeIs('modell.index') ? 'active' : '' }}">
                        @if (request()->routeIs('modell.index'))
                            <img src="{{ url('assets/img/navbar/icons8_cells_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">الطراز</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_cells_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;">
                            <p style="margin-right:10px">الطراز</p>
                        @endif
                    </a>
                </li>

            </ul>
        </li>
        <li
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
        </li>
        <li class="nav-item has-treeview {{ request()->routeIs('VIN.index') ? 'menu-open' : 'menu-close' }}">
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
        </li>

    </ul>
</nav>
