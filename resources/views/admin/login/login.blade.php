<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="{{ url('resources/css/bootstrap.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ url('resources/css/dataTables.bootstrap5.min.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ url('resources/css/style.css') }}">
    <link rel="stylesheet" href="{{ url('resources/bootstrap-icons-1.4.1/bootstrap-icons.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ url('resources/css/style2.css') }}">
    <link rel="stylesheet" type="text/css" href="{{ url('resources/css/bootstrap.rtl.min.css') }}">


    <title>تسجيل الدخول</title>
</head>

<body dir="rtl">
    <div class="bg-img">
        <div class="container square-box d-flex justify-content-center align-items-center" >
        <div class="row justify-content-center ">
            <div class="">
                <div class="card" style="width:150%">
                    <div class="card-header" style="text-align: center;">
                        <h4 id="titlefont">تسجيل الدخول</h4>
                    </div>
                    <div class="card-body">
                        {{-- <form> --}}
                            @csrf
                            <div class="form-group">
                                <label for="" id="titlefont">اسم المستخدم :</label>
                                <input type="text" class="form-control" id="u_username"
                                    placeholder="ادخل اسم المستخدم " autocomplete="off" value="{{ old('u_username') }}">
                                <span id="error_username" class="text-danger"></span>
                            </div>
                            <div class="form-group">
                                <label for="" id="titlefont">كلمة المرور:</label>
                                <input type="password" class="form-control" placeholder="ادخل كلمة المرور"
                                    id="u_password" autocomplete="off" value="{{ old('u_password') }}">
                                <span id="error_password" class="text-danger"></span>
                            </div>
                            <div class="ms-12 row pt-3">
                                <label for="" class="col-sm-3 col-form-label"> </label>
                                <div class="col-sm-6">
                                    <input class="btn btn-primary form-control submitLogin" type="submit"
                                        value="دخول " id="titlefont">
                                </div>
                            </div>
                        {{-- </form> --}}
                    </div>
                </div>
            </div>


        </div>
    </div>
    </div>

        <script type="text/javascript" src="{{ url('resources/js/Template/jquery-3.6.0.min.js') }}"></script>
        <script type="text/javascript" src="{{ url('resources/js/pro_js/login.js') }}"></script>
</body>

</html>
