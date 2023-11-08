<!DOCTYPE html>
<!--
This is a starter template page. Use this page to start your new project from
scratch. This page gets rid of all links and provides the needed markup only.
-->
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="x-ua-compatible" content="ie=edge">

    <title>شركة المتانة</title>
    <!-- Font Awesome Icons -->
    <link rel="stylesheet" href="{{ url('assets/plugins/fontawesome-free/css/all.min.css') }}">
    <!-- Theme style -->
    <link rel="stylesheet" href="{{ url('assets/dist/css/adminlte.min.css') }}">
    <!-- Google Font: Source Sans Pro -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    {{-- <link rel="stylesheet" href="{{ url('assets/fonts/SansPro/SansPro.min.css') }}"> --}}
    <link rel="stylesheet" href="{{ url('assets/css/bootstrap_rtl-v4.2.1/bootstrap.min.css') }}">
    <link rel="stylesheet" href="{{ url('assets/css/bootstrap_rtl-v4.2.1/custom_rtl.css') }}">
    <link rel="stylesheet" href="{{ url('assets/css/mycustomstyle.css') }}">

    <link rel="stylesheet" href="{{ url('assets/plugins/chart.js/chart.css') }}">
    <link rel="stylesheet" href="{{ url('assets/plugins/chart.js/chart.min.css') }}">
    {{-- <link href="https://cdnjs.cloudflare.com/ajax/libs/devextreme/22.2.7/css/dx.material.orange.light.css"
    rel="stylesheet"> --}}
    <link rel="stylesheet" type="text/css" href=" {{ url('assets/dx/dx.material.custom-scheme.css') }}" ">
    {{-- <link rel="stylesheet" href="{{ url('assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css') }}">
    <link rel="stylesheet" type="text/css" href=" {{ url('assets/css/dataTables.bootstrap5.min.css') }}">
    <link rel="stylesheet" href=" {{ url('assets/css/buttons.bootstrap5.min.css') }}" ">
    <link rel="stylesheet" type="text/css" href=" {{ url('assets/css/style.css') }}" ">
    <link rel="stylesheet" type="text/css" href=" {{ url('assets/css/bootstrap-icons.css') }}">
    <link rel="stylesheet" href="{{ url('assets/bootstrap-icons-1.4.1/bootstrap-icons.css') }}"> --}}
    <link rel="stylesheet" type="text/css" href=" {{ url('assets/css/style.css') }}" ">
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
    <script>
        $(function() {
            DevExpress.config({
                rtlEnabled: true
            });
            // ...
        });
    </script>
  

</head>

<body class="hold-transition sidebar-mini">
    <div class="wrapper">

        @include('admin.cmps.navbar');

        <aside class="main-sidebar sidebar-dark-primary elevation-4">

            <div class="sidebar">
                @include('admin.cmps.nav')
            </div>

        </aside>

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">

            <h5 class="titlefont mr-2">@yield('title')</h5>
            <section class="content" style="border:0px ">
                <div class="container-fluid">
                    @yield('content')

                </div>
            </section>


        </div>

        <aside class="control-sidebar control-sidebar-dark">
            <!-- Control sidebar content goes here -->
            <div class="p-3">
                <h5>Title</h5>
                <p>Sidebar content</p>

            </div>
        </aside>
        <!-- /.control-sidebar -->

        <!-- Main Footer -->
        <footer class="main-footer">
            <!-- To the right -->
            <div class="float-right d-none d-sm-inline">
                Anything you want
            </div>
            <!-- Default to the left -->
            <strong>Copyright &copy; 2014-2019 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights
            reserved.
        </footer>
    </div>
    <!-- ./wrapper -->

    <!-- REQUIRED SCRIPTS -->

    <!-- jQuery -->
    {{-- <script src="{{ url('assets/plugins/jquery/jquery.min.js') }}"></script>
    <!-- Bootstrap 4 -->
    <script src="{{ url('assets/plugins/bootstrap/js/bootstrap.bundle.min.js') }}"></script> --}}
    <!-- AdminLTE App -->
    <script src="{{ url('assets/dist/js/adminlte.min.js') }}"></script>

    {{-- <script type="text/javascript" src="{{ url('assets/dx/js/dx-diagram.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/dx/js/dx-gantt.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/dx/js/dx-quill.min.js') }}"></script>
    <script type="text/javascript" src="{{ asset('assets/dx/js/dx.all.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/dx/js/exceljs.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/dx/js/FileSaver.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/dx/js/polyfill_7.4.0_polyfill.min.js') }}"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.3.1/jspdf.umd.min.js"></script> --}}

</body>

</html>
