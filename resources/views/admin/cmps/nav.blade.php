
<div class="user-panel mt-3 pb-3 mb-3 d-flex">
    <div class="image">
        <img src="{{ url('assets/dist/img/user2-160x160.jpg') }}" class="img-circle elevation-2"
            alt="User Image">
    </div>
    <div class="info">
        <a href="#" class="d-block">Alexander Pierce</a>
    </div>
</div>

<nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

        <li class="nav-item has-treeview {{(request()->routeIs('home.index*'))
            ? 'menu-open':'menu-close' }} ">
            <a href="#" class="nav-link {{(request()->routeIs('home.index*'))
            ?'active':''}} ">
                <img src="{{url('assets/img/icons/icons8_wifi_connection_test_32px.png')}}" alt="">
                {{-- <i class="nav-icon fas fa-tachometer-alt"></i> --}}
                <p>
                    الداشبورد
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item" id="Login_Dashboard_Main">
                    <a href="{{ route('main.index') }}" class="nav-link {{ request()->routeIs('main.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i class="nav-icon fas fa-chart-pie"></i>
                        <p>الرئيسية </p>
                    </a>
                </li>
                <li class="nav-item" id="Login_Dashboard_Departments">
                    <a href="{{ route('home.index') }}" class="nav-link {{ (request()->routeIs('home.index')) ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i class="nav-icon fas fa-pager"></i>
                        <p>حركة الاقسام </p>
                    </a>
                </li>

            </ul>
        </li>

        <li class="nav-item has-treeview menu-close">
            <a href="#" class="nav-link ">
                <i class="nav-icon fas fa-podcast"></i>
                <p>
                    الاعدادات
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item" id="Login_Users">
                    <a href="{{ route('users.index') }}" class="nav-link {{ request()->routeIs('user.index') ? 'active' : '' }}">
                    &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i class="nav-icon fas fa-users"></i>
                        <p>المستخدمين</p>
                    </a>
                </li>
                <li class="nav-item" id="Login_Permissions">
                    <a href="{{ route('permissions.index') }}" class="nav-link {{ request()->routeIs('permissions.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i class="nav-icon fas fa-edit"></i>
                        <p>الصلاحيات </p>
                    </a>
                </li>
                <li class="nav-item" id="Login_Frame">
                    <a href="{{ route('frame.index') }}" class="nav-link {{ request()->routeIs('frame.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i class="nav-icon fas fa-edit"></i>
                        <p>النماذج </p>
                    </a>
                </li>
                <li class="nav-item" id="Login_State">
                    <a href="{{ route('state.index') }}" class="nav-link {{ request()->routeIs('state.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i class="nav-icon fas fa-edit"></i>
                        <p>الحالة </p>
                    </a>
                </li>
                <li class="nav-item" id="Login_SalingGroup">
                    <a href="{{ route('salesgroups.index') }}" class="nav-link {{ request()->routeIs('salesgroups.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;</i><img src="{{url('assets/img/icons/icons8_online_sale_32px.png')}}" alt=""
                        style="margin-right: 5px;width: 25px;height: 25px;">
                        <p>مجموعات البيع</p>
                    </a>
                </li>
                <li class="nav-item" id="Login_BillsSetting">
                    <a href="{{ route('BillsSetting.index') }}" class="nav-link {{ request()->routeIs('BillsSetting.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;</i><img src="{{url('assets/img/icons/icons8_online_sale_32px.png')}}" alt=""
                        style="margin-right: 5px;width: 25px;height: 25px;">
                        <p>اعدادات الفواتير</p>
                    </a>
                </li>

                <li class="nav-item" id="Login_GroupsName">
                    <a href="{{ route('groupsnames.index') }}" class="nav-link {{ request()->routeIs('groupsnames.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i class="nav-icon fas fa-edit"></i>
                        <p>اسماء المجموعات</p>
                    </a>
                </li>

            </ul>
        </li>



        <li class="nav-item has-treeview {{(request()->routeIs('unitname.index*') || request()->routeIs('brand.index*')
                                            || request()->routeIs('currency.index*') || request()->routeIs('country.index*')
                                            || request()->routeIs('kind.index*') || request()->routeIs('company.index*')
                                            || request()->routeIs('modell.index*') )
                                            ?'menu-open':'menu-close'}}">
            <a href="#" class="nav-link {{(request()->routeIs('unitname.index*') || request()->routeIs('brand.index*')
                                            || request()->routeIs('currency.index*') || request()->routeIs('country.index*')
                                            || request()->routeIs('kind.index*') || request()->routeIs('company.index*')
                                            || request()->routeIs('modell.index*') )
                                            ?'active':''}}">
                <i class="nav-icon fas fa-desktop"></i>
                <p>
                    بيانات ثابتة
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">


                <li class="nav-item" id="Login_Unitname">
                    <a href="{{ route('unitname.index') }}" class="nav-link {{ request()->routeIs('unitname.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i class="nav-icon fas fa-book"></i>
                        <p>الوحدات </p>
                    </a>
                </li>
                <li class="nav-item" id="Login_Brand">
                    <a href="{{ route('brand.index') }}" class="nav-link {{ request()->routeIs('brand.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i class="nav-icon fas fa-book"></i>
                        <p>الماركات </p>
                    </a>
                </li>

                <li class="nav-item" id="Login_Company">
                    <a href="{{ route('company.index') }}" class="nav-link {{ request()->routeIs('company.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i class="nav-icon fas fa-book"></i>
                        <p>الشركات </p>
                    </a>
                </li>
                <li class="nav-item" id="Login_Country">
                    <a href="{{ route('country.index') }}" class="nav-link {{ request()->routeIs('country.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i class="nav-icon fas fa-book"></i>
                        <p>الدول </p>
                    </a>
                </li>
                <li class="nav-item" id="Login_Currency">
                    <a href="{{ route('currency.index') }}" class="nav-link {{ request()->routeIs('currency.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i class="nav-icon fas fa-book"></i>
                        <p>العملات </p>
                    </a>
                </li>

                <li class="nav-item" id="Login_Kinds">
                    <a href="{{ route('kind.index') }}" class="nav-link {{ request()->routeIs('kind.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i class="nav-icon fas fa-book"></i>
                        <p>النوع </p>
                    </a>
                </li>
                <li class="nav-item" id="Login_Modell">
                    <a href="{{ route('modell.index') }}" class="nav-link {{ request()->routeIs('modell.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i class="nav-icon fas fa-book"></i>
                        <p>الطراز </p>
                    </a>
                </li>

            </ul>
        </li>
        <li class="nav-item has-treeview {{ (request()->routeIs('accounttree.index'))?'menu-open':'menu-close'

        }}">
            <a href="#" class="nav-link {{(request()->routeIs('accounttree.index'))?'active':''}}">
                <img src="{{url('assets/img/icons/icons8_us_dollar_circled_32px.png')}}" alt="">
                <p>
                    الحسابات
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item" id="Login_Accounts_Tree">
                    <a href="{{route('accounttree.index')}}" class="nav-link {{ request()->routeIs('accounttree.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</i><img src="{{url('assets/img/icons/icons8_hierarchy_32px.png')}}" alt=""
                        style="margin-right: 5px">
                        <p>شجرة الحسابات</p>
                    </a>
                </li>
                <li class="nav-item" id="Login_TrialBalance">
                    <a href="" class="nav-link ">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</i><img src="{{url('assets/img/icons/icons8_scales_32px_1.png')}}" alt=""
                        style="margin-right: 5px">
                        <p>ميزان المراجعة</p>
                    </a>
                </li>
                <li class="nav-item" id="Login_Ledger">
                    <a href="" class="nav-link ">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;</i><img src="{{url('assets/img/icons/icons8_ledger_32px.png')}}" alt=""
                        style="margin-right: 5px">
                        <p>دفتر الاستاذ </p>
                    </a>
                </li>
            </ul>

        </li>

        <li class="nav-item has-treeview {{ (request()->routeIs('Bonds.index',['BondType'=>'سند قبض']) || request()->routeIs('BondsPayment.index',['BondType'=>'سند صرف'])
        || request()->routeIs('BondsStarter.index',['BondType'=>'قيد افتتاحي'])||request()->routeIs('BondsDoc.index',['BondType'=>'سند قيد'])
        || request()->routeIs('BondsBills.index',['BondType'=>'قيد الفواتير']) )
        ?'menu-open':'menu-close'

        }}">
            <a href="#" class="nav-link {{
                (request()->routeIs('Bonds.index',['BondType'=>'سند قبض']) || request()->routeIs('BondsPayment.index',['BondType'=>'سند صرف'])
                || request()->routeIs('BondsStarter.index',['BondType'=>'قيد افتتاحي'])||request()->routeIs('BondsDoc.index',['BondType'=>'سند قيد'])
                || request()->routeIs('BondsBills.index',['BondType'=>'قيد الفواتير']))
                ?'active':''
            }}">
                <img src="{{url('assets/img/icons/icons8_receipt_32px.png')}}" alt=""
                        style="margin-right: 5px">
                <p>
                    السندات
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">

                <li class="nav-item" id="Login_CatchBond">
                    <a href="{{route('Bonds.index',['BondType'=>'سند قبض'])}}" class="nav-link {{ request()->routeIs('Bonds.index',['BondType'=>'سند قبض']) ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<img src="{{url('assets/img/icons/icons8_bonds_32px_2.png')}}" alt=""
                        style="margin-right: 5px" >
                        <p >سند قبض</p>
                    </a>
                </li>
                <li class="nav-item" id="Login_PaymentBond">
                    <a href="{{route('BondsPayment.index',['BondType'=>'سند صرف'])}}" class="nav-link {{ request()->routeIs('BondsPayment.index',['BondType'=>'سند صرف']) ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<img src="{{url('assets/img/icons/icons8_bonds_32px_2.png')}}" alt=""
                        style="margin-right: 5px" >
                        <p>سند صرف</p>
                    </a>
                </li>
                <li class="nav-item" id="Login_StarterBond">
                    <a href="{{route('BondsStarter.index',['BondType'=>'قيد افتتاحي'])}}" class="nav-link {{ request()->routeIs('BondsStarter.index',['BondType'=>'قيد افتتاحي']) ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<img src="{{url('assets/img/icons/icons8_bonds_32px_2.png')}}" alt=""
                        style="margin-right: 5px" >
                        <p>قيد افتتاحي</p>
                    </a>
                </li>
                <li class="nav-item" id="Login_RecordDoc">
                    <a href="{{route('BondsDoc.index',['BondType'=>'سند قيد'])}}" class="nav-link {{ request()->routeIs('BondsDoc.index',['BondType'=>'سند قيد']) ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<img src="{{url('assets/img/icons/icons8_bonds_32px_2.png')}}" alt=""
                        style="margin-right: 5px" >
                        <p>سند قيد</p>
                    </a>
                </li>
                <li class="nav-item" id="Login_BondOfBills">
                    <a href="{{route('BondsBills.index',['BondType'=>'قيد الفواتير'])}}" class="nav-link {{ request()->routeIs('BondsBills.index',['BondType'=>'قيد الفواتير']) ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<img src="{{url('assets/img/icons/icons8_bonds_32px_2.png')}}" alt=""
                        style="margin-right: 5px" >
                        <p>قيد الفواتير</p>
                    </a>
                </li>

            </ul>
        </li>
        <li class="nav-item has-treeview {{(request()->routeIs('customersupplier.index')
        )? 'menu-open' :'menu-close' }}">
            <a href="#" class="nav-link {{(request()->routeIs('customersupplier.index')
            )?'active':''
            }}">
                <img src="{{url('assets/img/icons/icons8_staff_32px.png')}}" alt="">
                <p>
                    العملاء والموردين
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item" id="Login_CustomerAndSupplier">
                    <a href="{{route('customersupplier.index')}}" class="nav-link {{ request()->routeIs('customersupplier.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;</i><img src="{{url('assets/img/icons/icons8_queue_32px.png')}}" alt=""
                        style="margin-right: 5px">
                        <p>عميل / مورد</p>
                    </a>
                </li>

                <li class="nav-item" id="Login_AccountReport">
                    <a href="" class="nav-link ">
                        &nbsp;&nbsp; &nbsp;</i><img src="{{url('assets/img/icons/icons8_credit_control_32px.png')}}" alt=""
                        style="margin-right: 5px">
                        <p>كشف حساب</p>
                    </a>
                </li>
            </ul>

        </li>
        <li class="nav-item has-treeview {{(request()->routeIs('VIN.index')
        )?'menu-open':'menu-close'
        }}">
            <a href="#" class="nav-link {{(request()->routeIs('VIN.index')
            )? 'active':''
            }}">
                <img src="{{url('assets/img/icons/icons8_receipt_32px.png')}}" alt=""
                        style="margin-right: 5px">
                <p>
                    VIN
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">

                <li class="nav-item" id="Login_VIN">
                    <a href="{{route('VIN.index')}}" class="nav-link {{ request()->routeIs('VIN.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<img src="{{url('assets/img/icons/icons8_traffic_jam_25px.png')}}" alt=""
                        style="margin-right: 5px">
                        <p>VIN Searching</p>
                    </a>
                </li>



            </ul>
        </li>
        <li class="nav-item has-treeview {{(request()->routeIs('BillsBuying.index') || request()->routeIs('BillsSaling.index')
        || request()->routeIs('BillsOrdering.index')
        )?'menu-open':'menu-close'}}">
            <a href="#" class="nav-link {{(request()->routeIs('BillsBuying.index') || request()->routeIs('BillsSaling.index')
                || request()->routeIs('BillsOrdering.index')
                )?'active':''}}">
                <img src="{{url('assets/img/icons/icons8_receipt_32px.png')}}" alt=""
                        style="margin-right: 5px">
                <p>
                    الفواتير
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">

                <li class="nav-item" id="Login_BillBuying">
                    <a href="{{route('BillsBuying.index',['billType'=>'فاتورة مشتريات'])}}" class="nav-link {{ request()->routeIs('BillsBuying.index',['billType'=>'فاتورة مشتريات']) ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<img src="{{url('assets/img/icons/icons8_buying_32px.png')}}" alt=""
                        style="margin-right: 5px" >
                        <p >فاتورة مشتريات</p>
                    </a>
                </li>
                <li class="nav-item" id="Login_BillBuying">
                    <a href="{{route('BillsSaling.index',['billType'=>'فاتورة مبيعات'])}}" class="nav-link {{ request()->routeIs('BillsSaling.index',['billType'=>'فاتورة مبيعات']) ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<img src="{{url('assets/img/icons/icons8_buying_32px.png')}}" alt=""
                        style="margin-right: 5px" >
                        <p>فاتورة مبيعات</p>
                    </a>
                </li>
                <li class="nav-item" id="Login_OrderBills">
                    <a href="{{route('BillsOrdering.index',['billType'=>'فاتورة طلبيات'])}}" class="nav-link {{ request()->routeIs('BillsOrdering.index',['billType'=>'فاتورة طلبيات']) ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<img src="{{url('assets/img/icons/icons8_buying_32px.png')}}" alt=""
                        style="margin-right: 5px" >
                        <p>فاتورة طلبيات</p>
                    </a>
                </li>

            </ul>
        </li>
        <li class="nav-item has-treeview {{(request()->routeIs('items.index') || request()->routeIs('itemsTree.index')
        || request()->routeIs('stories.index'))? 'menu-open':'menu-close'}}">
            <a href="#" class="nav-link {{(request()->routeIs('items.index') || request()->routeIs('itemsTree.index')
                || request()->routeIs('stories.index'))? 'active':''}}">
                <i class="nav-icon fa fa-store-alt"></i>
                <p>
                    المخازن والمستودعات
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">

                <li class="nav-item" id="Login_Items">
                    <a href="{{route('items.index')}}" class="nav-link {{ request()->routeIs('items.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i class="nav-icon bi bi-cart-check-fill"></i>
                        <p>بطاقة مادة</p>
                    </a>
                </li>
                <li class="nav-item" id="Login_ItemsTree">
                    <a href="{{route('itemsTree.index')}}" class="nav-link {{ request()->routeIs('itemsTree.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i class="nav-icon bi bi-diagram-3-fill"></i>
                        <p>شجرة المواد</p>
                    </a>
                </li>
                <li class="nav-item" id="Login_Stories">
                    <a href="{{route('stories.index')}}" class="nav-link {{ request()->routeIs('stories.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i class="nav-icon bi bi-shop"></i>
                        <p>دليل المخازن</p>
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
                    <a href="{{route('ordermain.index')}}" class="nav-link {{ request()->routeIs('ordermain.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i class="nav-icon bi bi-cart-check-fill"></i>
                        <p>الطلبيات</p>
                    </a>
                </li>
                <li class="nav-item" id="Login_Battery">
                    <a href="{{route('battreys.index')}}" class="nav-link {{ request()->routeIs('battreys.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i class="nav-icon bi bi-battery"></i>
                        <p>الاطارات</p>
                    </a>
                </li>
                <li class="nav-item" id="Login_Items">
                    <a href="{{route('itemstoask.index')}}" class="nav-link {{ request()->routeIs('itemstoask.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;<i class="nav-icon bi bi-basket"></i>
                        <p>المواد</p>
                    </a>
                </li>


            </ul>
        </li>
        <li class="nav-item has-treeview menu-close">
            <a href="#" class="nav-link">
                <img src="{{url('assets/img/icons/icons8_info_32px.png')}}" alt="">
                <p>
                    معلومات عامة
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item" id="Login_CarsInfo">
                    <a href="{{ route('CarsInfo.index') }}" class="nav-link {{ request()->routeIs('CarsInfo.index') ? 'active' : '' }}">
                        &nbsp;&nbsp; &nbsp;</i><img src="{{url('assets/img/icons/icons8_car_32px.png')}}" alt=""
                        style="margin-right: 5px;width: 25px;height: 25px;">
                        <p>العجلات</p>
                    </a>
                </li>



            </ul>
        </li>
        {{-- <li class="nav-item" id="Login_Reports">
            <a href="{{ route('reports.index') }}" class="nav-link {{ request()->routeIs('reports.index') ? 'active' : '' }}">
                <i class="nav-icon fas fa-chart-area"></i>
                <p>Reports</p>
            </a>
        </li>
 --}}




    </ul>
</nav>

