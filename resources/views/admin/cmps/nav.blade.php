<div class="user-panel mt-3 pb-3 mb-3 d-flex">
    <div class="image">
        <img src="{{ url('assets/img/navbar/icons8_users_64px.png') }}" class="img-circle elevation-2" alt="User Image"
        style="margin-right: 20px" >
    </div>
    <div class="info">
        <a href="#" class="d-block" id="titlefont">علاء مهدي</a>
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
                                style=" width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">الرئيسية</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_home_64px_1.png') }}" alt=""
                                style="width: 32px; height: 32px;margin-right:15px">
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
                                style=" width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">المستخدمون</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_users_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">المستخدمون</p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_Users">
                    <a href="{{ route('users.index') }}"
                        class="nav-link {{ request()->routeIs('users.index') ? 'active' : '' }}">
                        @if (request()->routeIs('users.index'))
                            <img src="{{ url('assets/img/navbar/icons8_user_groups_64px_1.png') }}" alt=""
                                style=" width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px"> المجموعات</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_user_groups_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">المجموعات </p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_Users">
                    <a href="{{ route('users.index') }}"
                        class="nav-link {{ request()->routeIs('users.index') ? 'active' : '' }}">
                        @if (request()->routeIs('users.index'))
                            <img src="{{ url('assets/img/navbar/icons8_access_denied_64px_1.png') }}" alt=""
                                style=" width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px"> الصلاحيات</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_access_denied_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">الصلاحيات </p>
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
            class="nav-item has-treeview {{ request()->routeIs('jobs.index') ||
            request()->routeIs('vacations.index') ||
            request()->routeIs('thanks.index')  ||
            request()->routeIs('children.index')
                ? 'menu-open'
                : 'menu-close' }} ">
            <a href="#"
                class="nav-link {{ request()->routeIs('jobs.index') ||
                request()->routeIs('vacations.index') ||
                request()->routeIs('thanks.index') ||
                request()->routeIs('children.index')
                    ? 'active'
                    : '' }}">
                <img src="{{ url('assets/img/navbar/icons8_management_64px.png') }}" alt=""
                    style="width: 32px; height: 32px;">
                <p style="margin-right: 10px">
                    الادارية
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">

                <li class="nav-item" id="Login_Jobs">
                    <a href="{{ route('jobs.index') }}"
                        class="nav-link {{ request()->routeIs('jobs.index') ? 'active' : '' }}">
                        @if (request()->routeIs('jobs.index'))
                            <img src="{{ url('assets/img/navbar/icons8_businessman_64px_1.png') }}" alt=""
                                style=" width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">العناوين الوظيفية</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_businessman_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">العناوين الوظيفية</p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_Vacations">
                    <a href="{{ route('vacations.index') }}"
                        class="nav-link {{ request()->routeIs('vacations.index') ? 'active' : '' }}">
                        @if (request()->routeIs('vacations.index'))
                            <img src="{{ url('assets/img/navbar/icons8_Traveler_64px_1.png') }}" alt=""
                                style=" width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">الاجازات </p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_Traveler_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">الاجازات </p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_Thanks">
                    <a href="{{ route('thanks.index') }}"
                        class="nav-link {{ request()->routeIs('thanks.index') ? 'active' : '' }}">
                        @if (request()->routeIs('thanks.index'))
                            <img src="{{ url('assets/img/navbar/icons8_salute_64px_1.png') }}" alt=""
                                style=" width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">التشكرات </p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_salute_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">التشكرات </p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_Children">
                    <a href="{{ route('children.index') }}"
                        class="nav-link {{ request()->routeIs('children.index') ? 'active' : '' }}">
                        @if (request()->routeIs('children.index'))
                            <img src="{{ url('assets/img/navbar/icons8_full_family_64px_1.png') }}" alt=""
                                style=" width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">الزوجية والاطفال </p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_full_family_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">الزوجية والاطفال </p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_Thanks">
                    <a href="{{ route('thanks.index') }}"
                        class="nav-link {{ request()->routeIs('thanks.index') ? 'active' : '' }}">
                        @if (request()->routeIs('thanks.index'))
                            <img src="{{ url('assets/img/navbar/icons8_Magnetic_Card_64px_1.png') }}" alt=""
                                style=" width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px"> الهويات </p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_Magnetic_Card_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px"> الهويات </p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_Thanks">
                    <a href="{{ route('thanks.index') }}"
                        class="nav-link {{ request()->routeIs('thanks.index') ? 'active' : '' }}">
                        @if (request()->routeIs('thanks.index'))
                            <img src="{{ url('assets/img/navbar/icons8_profile_64px_1.png') }}" alt=""
                                style=" width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px"> الاوامر  الادارية </p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_profile_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px"> الاوامر  الادارية </p>
                        @endif
                    </a>
                </li>

            </ul>
        </li>
        <li
            class="nav-item has-treeview {{ request()->routeIs('certifications.index') ||
            request()->routeIs('comity.index') ||
            request()->routeIs('supervisors.index') ||
            request()->routeIs('positions.index') ||
            request()->routeIs('activity.index') ||
            request()->routeIs('researches.index') ||
            request()->routeIs('articles.index') 
                ? 'menu-open'
                : 'menu-close' }} ">
            <a href="#"
                class="nav-link {{ request()->routeIs('certifications.index') ||
                request()->routeIs('comity.index') ||
                request()->routeIs('supervisors.index') ||
                request()->routeIs('positions.index') ||
                request()->routeIs('activity.index') ||
                request()->routeIs('researches.index') ||
                request()->routeIs('articles.index')
                    ? 'active'
                    : '' }}">
                <img src="{{ url('assets/img/navbar/icons8_book_and_pencil_64px.png') }}" alt=""
                    style="width: 32px; height: 32px;">
                <p style="margin-right: 10px">
                    العلمية
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item" id="Login_Certification">
                    <a href="{{ route('certifications.index') }}"
                        class="nav-link {{ request()->routeIs('certifications.index') ? 'active' : '' }}">
                        @if (request()->routeIs('certifications.index'))
                            <img src="{{ url('assets/img/navbar/icons8_certificate_64px_1.png') }}" alt=""
                                style=" width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">الشهادات</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_certificate_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">الشهادات</p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_Comity">
                    <a href="{{ route('comity.index') }}"
                        class="nav-link {{ request()->routeIs('comity.index') ? 'active' : '' }}">
                        @if (request()->routeIs('comity.index'))
                            <img src="{{ url('assets/img/navbar/icons8_collaboration_64px_1.png') }}" alt=""
                                style=" width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">اللجان</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_collaboration_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">اللجان</p>
                        @endif
                    </a>
                </li>

                <li class="nav-item" id="Login_Supervisor">
                    <a href="{{ route('supervisors.index') }}"
                        class="nav-link {{ request()->routeIs('supervisors.index') ? 'active' : '' }}">
                        @if (request()->routeIs('supervisors.index'))
                            <img src="{{ url('assets/img/navbar/icons8_coach_64px_1.png') }}" alt=""
                                style=" width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">الاشراف </p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_coach_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">الاشراف </p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_Positions">
                    <a href="{{ route('positions.index') }}"
                        class="nav-link {{ request()->routeIs('positions.index') ? 'active' : '' }}">
                        @if (request()->routeIs('positions.index'))
                            <img src="{{ url('assets/img/navbar/icons8_project_manager_64px_1.png') }}"
                                alt="" style=" width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">المناصب </p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_project_manager_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">المناصب </p>
                        @endif
                    </a>
                </li>

                <li class="nav-item" id="Login_Activity">
                    <a href="{{ route('activity.index') }}"
                        class="nav-link {{ request()->routeIs('activity.index') ? 'active' : '' }}">
                        @if (request()->routeIs('activity.index'))
                            <img src="{{ url('assets/img/navbar/icons8_crowd_64px_1.png') }}" alt=""
                                style=" width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">الانشطة والفعاليات </p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_crowd_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">الانشطة والفعاليات </p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_Researches">
                    <a href="{{ route('researches.index') }}"
                        class="nav-link {{ request()->routeIs('researches.index') ? 'active' : '' }}">
                        @if (request()->routeIs('researches.index'))
                            <img src="{{ url('assets/img/navbar/icons8_reading_64px_1.png') }}" alt=""
                                style=" width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px"> البحوث والنشر </p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_reading_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">البحوث والنشر </p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_Articles">
                    <a href="{{ route('articles.index') }}"
                        class="nav-link {{ request()->routeIs('articles.index') ? 'active' : '' }}">
                        @if (request()->routeIs('articles.index'))
                            <img src="{{ url('assets/img/navbar/icons8_article_64px_1.png') }}" alt=""
                                style=" width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px"> المقالات  </p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_article_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px"> المقالات </p>
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
                <img src="{{ url('assets/img/navbar/icons8_warehouse_64px.png') }}" alt=""
                    style="width: 32px; height: 32px;">
                <p style="margin-right: 10px">
                    المخازن والذمم
                    <i class="right fas fa-angle-left"></i>
                </p>
            </a>
            <ul class="nav nav-treeview">
                <li class="nav-item" id="Login_Users">
                    <a href="{{ route('users.index') }}"
                        class="nav-link {{ request()->routeIs('users.index') ? 'active' : '' }}">
                        @if (request()->routeIs('users.index'))
                            <img src="{{ url('assets/img/navbar/icons8_apps_64px_1.png') }}" alt=""
                                style=" width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">المواد </p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_apps_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">المواد </p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_Users">
                    <a href="{{ route('users.index') }}"
                        class="nav-link {{ request()->routeIs('users.index') ? 'active' : '' }}">
                        @if (request()->routeIs('users.index'))
                            <img src="{{ url('assets/img/navbar/icons8_buy_64px_1.png') }}" alt=""
                                style=" width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">ادخال مخزني</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_buy_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">ادخال مخزني</p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_Users">
                    <a href="{{ route('users.index') }}"
                        class="nav-link {{ request()->routeIs('users.index') ? 'active' : '' }}">
                        @if (request()->routeIs('users.index'))
                            <img src="{{ url('assets/img/navbar/icons8_shopping_cart_64px_1.png') }}" alt=""
                                style=" width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">اخراج مخزني</p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_shopping_cart_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">اخراج مخزني</p>
                        @endif
                    </a>
                </li>
                <li class="nav-item" id="Login_Users">
                    <a href="{{ route('users.index') }}"
                        class="nav-link {{ request()->routeIs('users.index') ? 'active' : '' }}">
                        @if (request()->routeIs('users.index'))
                            <img src="{{ url('assets/img/navbar/icons8_decline_64px_1.png') }}" alt=""
                                style=" width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">تقارير </p>
                        @else
                            <img src="{{ url('assets/img/navbar/icons8_decline_64px.png') }}" alt=""
                                style="width: 32px; height: 32px;margin-right:15px">
                            <p style="margin-right:10px">تقارير </p>
                        @endif
                    </a>
                </li>


            </ul>
        </li>

    </ul>
</nav>
