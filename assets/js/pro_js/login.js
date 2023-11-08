
$(document).on('click', '.submitLogin', function () {
    checking();
    if (error_username != '' || error_password != '') {
        return false;
    } else {
        var data = {
            'username': $('#u_username').val(),
            'password': $('#u_password').val(),
        };

        $.ajax({
            type: "GET",
            url: "login/checking",
            data: data,
            success: function (response) {

                if (response.User) {
                    // console.log(response.User);
                    path = 'dashboard';
                    window.location.href = path;
                }
                else {
                    // console.log(response);
                    if(response.username)
                    {
                        $('#error_username').text(response.username);
                    }
                    else{
                        $('#error_password').text(response.password);
                    }
                }
            }
        });
    }
});


function checking() {
    if ($('#u_username').val().length == 0) {
        error_username = "ادخل اسم المستخدم";
        $('#error_username').text(error_username);
    } else {
        error_username = "";
        $('#error_username').text(error_username);
    }
    if ($('#u_password').val().length == 0) {
        error_password = "ادخل كلمة المرور";
        $('#error_password').text(error_password);
    } else {
        error_password = "";
        $('#error_password').text(error_password);
    }
}
