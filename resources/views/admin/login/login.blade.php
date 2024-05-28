<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" type="text/css" href="{{ url('assets/css/style2.css') }}">
    <link rel="stylesheet" href="{{ url('assets/css/Pro_css/LoginDesign.css') }}">


    <title>تسجيل الدخول</title>
</head>

<body dir="rtl">
    <div class="wrapper">
        <div class="form-box login">
            <div class="logoimg-container">
                <img src="{{ url('assets/img/icons/almatana.png') }}" class="logoimg">
            </div>

            <h2 id="titlefont">تسجيل الدخول</h2>

            @csrf
            <div class="input-box">
                <span class="icon"><ion-icon name="mail"></ion-icon>

                </span>
                <input type="text" id="u_username" autocomplete="off" value="{{ old('u_username') }}">
                <label id="titlefont">اسم المستخدم </label>

            </div>
            <span id="error_username"></span>
            <div class="input-box">
                <span class="icon"><ion-icon name="lock-closed"></ion-icon>

                </span>
                <input type="password" id="u_password" autocomplete="off" value="{{ old('u_password') }}">
                <label id="titlefont">كلمة المرور</label>

            </div>
            <span id="error_password" class="text-danger"></span>
            <div class="submitLoginDesign">
                <button type="submit" id="titlefont"class="submitLogin">دخول</button>
            </div>

        </div>
    </div>



    <script type="text/javascript" src="{{ url('assets/js/Template/jquery-3.6.0.min.js') }}"></script>
    <script type="text/javascript" src="{{ url('assets/js/pro_js/login.js') }}"></script>
    {{-- <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script> --}}
</body>

</html>
