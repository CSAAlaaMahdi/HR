
getpermissions();

function getpermissions() {
    $(document).ready(function () {


        $.ajax({
            type: "GET",
            url: "getpermissions",
            success: function (response) {
                // console.log(response);
                $.each(response, function (indexInArray, valueOfElement) {
                    console.log(valueOfElement);
                    if (valueOfElement.P_Dashboard == 0) {
                        $("#Login_Dashboard a").click(function (e) {
                            e.preventDefault();

                        });
                    }
                    if (valueOfElement.P_Users == 0) {
                        $("#Login_Users a").click(function (e) {
                            e.preventDefault();

                        });
                    }
                    if (valueOfElement.P_Groups == 0) {
                        $("#Login_Groups a").click(function (e) {
                            e.preventDefault();

                        });
                    }
                    if (valueOfElement.P_Permissions == 0) {
                        $("#Login_Permissions a").click(function (e) {
                            e.preventDefault();

                        });
                    }
                    if (valueOfElement.P_State == 0) {
                        $("#Login_State a").click(function (e) {
                            e.preventDefault();

                        });
                    }

                    if (valueOfElement.P_Permissonname == 0) {
                        $("#Login_Permissonname a").click(function (e) {
                            e.preventDefault();

                        });
                    }
                    if (valueOfElement.P_Division == 0) {
                        $("#Login_Division a").click(function (e) {
                            e.preventDefault();

                        });
                    }

                });

            }
        });


    });
}

