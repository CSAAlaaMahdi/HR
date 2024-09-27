<nav class="main-header navbar navbar-expand justify-content-between fixed-top bg-dark" style="color:white">
    <!-- Left navbar links -->
    <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link maintext" data-widget="pushmenu" href="#"><i class="fas fa-bars"></i></a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <a href="{{route('home.index')}}" class="nav-link maintext">الرئيسسية</a>
        </li>
        <li class="nav-item d-none d-sm-inline-block">
            <a href="#" class="nav-link maintext">اتصل بنا</a>
        </li>
        <style>
            .maintext {
                color: rgb(255, 255, 255);
            }
        </style>
    </ul>



    <!-- Right navbar links -->
    <ul class="navbar-nav me-auto">

        <li class="nav-item pr-5">
            <a class="nav-link"  href="{{route('login')}}">
                <i class="fa fa-sign-out-alt sign-out-icon" > <span id="titlefont">خروج</span></i></a>
        </li>
        <style>
            .sign-out-icon {
                color: rgb(231, 226, 226);
            }
        </style>
    </ul>
</nav>
