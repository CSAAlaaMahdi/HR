<!DOCTYPE html5>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Technology Information Unit</title>
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    {{-- CSRF Token --}}
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Font Awesome -->
    <link rel="stylesheet" href="{{ url('assets/plugins/fontawesome-free/css/all.min.css') }}">
    <!-- Ionicons -->
    <link rel="stylesheet" href="{{ url('assets/ionicons-2.0.1/css/ionicons.min.css') }}">
    <!-- Tempusdominus Bbootstrap 4 -->
    <link rel="stylesheet"
        href="{{ url('assets/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css') }}">
    <!-- iCheck -->
    <link rel="stylesheet" href="{{ url('assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css') }}">
    <link rel="stylesheet" type="text/css" href=" {{ url('assets/css/dataTables.bootstrap5.min.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/buttons.bootstrap5.min.css') }}" ">
    <link rel="stylesheet" type="text/css" href=" {{ url('assets/css/style.css') }}" ">
    <link rel="stylesheet" type="text/css" href=" {{ url('assets/css/bootstrap-icons.css') }}">
    <link rel="stylesheet" href="{{ url('assets/bootstrap-icons-1.4.1/bootstrap-icons.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/style2.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/alertify.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/alertify.min.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/bootstrap-treeview.min.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/main.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/accounts.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/salesGroups.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/customerSupplier.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/itemtree.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/units.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/brands.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/company.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/country.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/currency.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/kind.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/models.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/items.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/itemsFour.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/itemFifth.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/VIN.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/Bills.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/Bonds.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/BillsSetting.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/CarsInfo.css') }}">
    <!-- JQVMap -->
    <link rel="stylesheet" href="{{ url('assets/plugins/jqvmap/jqvmap.min.css') }}">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{ url('assets/dist/css/adminlte.min.css') }}">
    <!-- overlayScrollbars -->
    <link rel="stylesheet" href="{{ url('assets/plugins/overlayScrollbars/css/OverlayScrollbars.min.css') }}">
    <!-- Daterange picker -->
    <link rel="stylesheet" href="{{ url('assets/plugins/daterangepicker/daterangepicker.css') }}">
    <!-- summernote -->
    <link rel="stylesheet" href="{{ url('assets/plugins/summernote/summernote-bs4.css') }}">
    <!-- Google Font: Source Sans Pro -->
    {{-- <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet"> --}}
    <!-- Bootstrap 4 RTL -->
    <!-- <link rel="stylesheet" href="https://cdn.rtlcss.com/bootstrap/v4.2.1/css/bootstrap.min.css"> -->
    <link rel="stylesheet" href="{{ url('assets/css/bootstrap.rtl.min.css') }}">
    <!-- Custom style for RTL -->
    <link rel="stylesheet" href="{{ url('assets/css/style.css') }}">
    <link rel="stylesheet" href="{{ url('assets/css/style2.css') }}">
    <link rel="stylesheet" href="{{ url('assets/css/style3.css') }}">
    <link rel="stylesheet" href="{{ url('assets/dist/css/custom.css') }}">
    <link rel="stylesheet" href="{{ url('assets/plugins/chart.js/chart.css') }}">
    <link rel="stylesheet" href="{{ url('assets/plugins/chart.js/chart.min.css') }}">

    {{-- <link href="https://cdnjs.cloudflare.com/ajax/libs/devextreme/22.2.7/css/dx.carmine.compact.css" rel="stylesheet"> --}}
    <link href="https://cdnjs.cloudflare.com/ajax/libs/devextreme/22.2.7/css/dx.material.orange.light.css"
        rel="stylesheet">
    {{-- <link href="https://cdnjs.cloudflare.com/ajax/libs/devextreme/22.2.7/css/dx.carmine.css" rel="stylesheet"> --}}

    <script type="text/javascript" src="{{ url('assets/js/Template/jquery-3.6.0.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/js/Template/datatables.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/js/Template/jquery-ui.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/js/Template/dataTables.bootstrap5.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/js/Template/bootstrap.bundle.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/js/Template/dataTables.buttons.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/js/Template/buttons.bootstrap5.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/js/Template/jszip.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/js/Template/pdfmake.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/js/Template/vfs_fonts.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/js/Template/buttons.html5.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/js/Template/buttons.print.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/js/Template/buttons.colVis.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/js/Template/dataTables.responsive.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/js/Template/alertify.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/js/Template/alertify.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/js/Template/bootstrap-treeview.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/js/pro_js/menuNav.js') }}"></script>


    <script type="text/javascript" src="{{ url('assets/dx/js/dx-diagram.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/dx/js/dx-gantt.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/dx/js/dx-quill.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('assets/dx/js/dx.all.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/dx/js/exceljs.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/dx/js/FileSaver.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/dx/js/polyfill_7.4.0_polyfill.min.js') }}"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.3.1/jspdf.umd.min.js"></script>

    <script type="text/javascript" src="{{ url('assets/js/pro_js/users.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/js/pro_js/reports.js') }}"></script>
    <!-- <script type="text/javascript" src="{{ url('assets/js/pro_js/dashboard-one.js') }}"></script> -->
    <!-- <script type="text/javascript" src="{{ url('assets/js/pro_js/dashboardmain.js') }}"></script> -->
    <!-- <script type="text/javascript" src="{{ url('assets/js/pro_js/attendance.js') }}"></script> -->


    <script src="{{ url('assets/plugins/chart.js/Chart.bundle.js') }}"></script>
    {{-- <script src="{{url('assets/plugins/chart.js/Chart.bundle.min.js')}}"></script> --}}
    {{-- <script src="{{url('assets/plugins/chart.js/Chart.min.js')}}"></script> --}}
    <script src="{{ url('assets/plugins/chart.js/Chart.js') }}"></script>




    <!-- Sparkline -->
    <script src="{{ url('assets/plugins/sparklines/sparkline.js') }}"></script>
    <!-- JQVMap -->
    <script src="{{ url('assets/plugins/jqvmap/jquery.vmap.min.js') }}"></script>
    <script src="{{ url('assets/plugins/jqvmap/maps/jquery.vmap.world.js') }}"></script>
    <!-- jQuery Knob Chart -->
    <script src="{{ url('assets/plugins/jquery-knob/jquery.knob.min.js') }}"></script>
    <!-- daterangepicker -->
    <script src="{{ url('assets/plugins/moment/moment.min.js') }}"></script>
    <script src="{{ url('assets/plugins/daterangepicker/daterangepicker.js') }}"></script>
    <!-- Tempusdominus Bootstrap 4 -->
    <script src="{{ url('assets/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js') }}"></script>
    <!-- Summernote -->
    <script src="{{ url('assets/plugins/summernote/summernote-bs4.min.js') }}"></script>
    <!-- overlayScrollbars -->
    <script src="{{ url('assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js') }}"></script>
    <!-- AdminLTE App -->
    <script src="{{ url('assets/dist/js/adminlte.js') }}"></script>

    <script src="{{ url('assets/dist/js/demo.js') }}"></script>

    {{-- <script src="{{url('assets/dist/js/pages/dashboard.js')}}"></script> --}}





</head>

<body class="hold-transition sidebar-mini layout-fixed ">
    <div class="wrapper">

        <!-- Navbar -->
        <nav class="main-header navbar navbar-expand navbar-white navbar-light">
            <!-- Left navbar links -->

            <!-- Right navbar links -->
            <ul class="navbar-nav mr-auto-navbav ">
                <!-- Messages Dropdown Menu -->
                <li class="nav-item dropdown">
                    <a class="nav-link" data-toggle="dropdown" href="#">
                        <i class="far fa-comments"></i>
                        <span class="badge badge-danger navbar-badge">3</span>
                    </a>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-left">
                        <a href="#" class="dropdown-item">
                            <!-- Message Start -->
                            <!-- <div class="media">
                  <img src="{{ url('assets/dist/img/user1-128x128.jpg') }}" alt="User Avatar" class="img-size-50 mr-3 img-circle">
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      Brad Diesel
                      <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                    </h3>
                    <p class="text-sm">Call me whenever you can...</p>
                    <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                  </div>
                </div> -->
                            <!-- Message End -->
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">
                            <!-- Message Start -->
                            <!-- <div class="media">
                  <img src="{{ url('assets/dist/img/user8-128x128.jpg') }}" alt="User Avatar" class="img-size-50 img-circle mr-3">
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      John Pierce
                      <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                    </h3>
                    <p class="text-sm">I got your message bro</p>
                    <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                  </div>
                </div> -->
                            <!-- Message End -->
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item">
                            <!-- Message Start -->
                            <!-- <div class="media">
                  <img src="{{ url('assets/dist/img/user3-128x128.jpg') }}" alt="User Avatar" class="img-size-50 img-circle mr-3">
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      Nora Silvester
                      <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                    </h3>
                    <p class="text-sm">The subject goes here</p>
                    <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                  </div>
                </div> -->
                            <!-- Message End -->
                        </a>
                        <div class="dropdown-divider"></div>
                        <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
                    </div>
                </li>
                <!-- Notifications Dropdown Menu -->
                <!-- <li class="nav-item dropdown">
            <a class="nav-link" data-toggle="dropdown" href="#">
              <i class="far fa-bell"></i>
              <span class="badge badge-warning navbar-badge">15</span>
            </a>
            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span class="dropdown-item dropdown-header">15 Notifications</span>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">
                <i class="fas fa-envelope mr-2"></i> 4 new messages
                <span class="float-right text-muted text-sm">3 mins</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">
                <i class="fas fa-users mr-2"></i> 8 friend requests
                <span class="float-right text-muted text-sm">12 hours</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item">
                <i class="fas fa-file mr-2"></i> 3 new reports
                <span class="float-right text-muted text-sm">2 days</span>
              </a>
              <div class="dropdown-divider"></div>
              <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
            </div>
          </li> -->
                <li class="nav-item">
                    <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#">
                        <i class="fas fa-th-large"></i>
                    </a>
                </li>
            </ul>
        </nav>
        <!-- /.navbar -->

        <!-- Main Sidebar Container -->
        <aside class="main-sidebar sidebar-dark-primary elevation-4 ">
            <!-- Brand Logo -->
            <a href="" class="brand-link">
                <img src="{{ url('assets/dist/img/AdminLTELogo.png') }}" alt="AdminLTE Logo"
                    class="brand-image img-circle elevation-3" style="opacity: .8">
                <span class="brand-text font-weight-light titlefont" style="font-size: 1rem">Inventory System </span>
            </a>

            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Sidebar user panel (optional) -->
                <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div class="image">
                        <img src="{{ url('assets/dist/img/user2-160x160.jpg') }}"
                            class="img-circle elevation-2" alt="User Image">
                    </div>
                    <div class="info">
                        <a href="#" class="d-block titlefont">User Name </a>
                    </div>
                </div>

                <!-- Sidebar Menu -->
                @include('admin.cmps.nav')
                <!-- /.sidebar-menu -->
            </div>
            <!-- /.sidebar -->
        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">
            <h5 class="titlefont mr-2">@yield('title')</h5>
            <section class="content" style="border:0px ">
                <div class="container-fluid">
                    @yield('content')

                </div><!-- /.container-fluid -->
            </section>
            <!-- /.content -->
        </div>
        <!-- /.content-wrapper -->
        <footer class="main-footer" style="font-size: 0.7rem">
            <strong>Copyright &copy; 2022 <a href="#">Mechanisms2020@gmail.com</a>.</strong>
            All rights reserved.
            <div class=" d-none d-sm-inline-block">
                <b>Version</b> 0.1-IU
            </div>
        </footer>

        <!-- Control Sidebar -->
        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
        </aside>
        <!-- /.control-sidebar -->
    </div>
    <!-- ./wrapper -->

    <!-- jQuery -->



</body>

</html>
