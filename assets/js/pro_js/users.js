fetchdata_users();
users_filldata();
$(document).on('click', '.usersAdd', function () {
    var displaycard = document.getElementById("usersaction");
    if (displaycard.style.display == "none") {
        document.getElementById("card_userstitle").innerText = " Add New User";
        displaycard.style.display = "block";
        document.getElementById('card_userstitle').scrollIntoView();
    } else {

        displaycard.style.display = "none";
        document.getElementById("card_userstitle").innerText = "";
        cleardata_users();
        displaycard.style.display = "block";
        document.getElementById("card_userstitle").innerText = "Add New User";
        document.getElementById('card_userstitle').scrollIntoView();

    }
});

$(document).on('click', '.usersSave', function () {

    var u_id = document.getElementById("u_id").value;

    if (u_id == '') {

        checkdata_users();
        if (error_u_username != '' || error_u_password != '' || error_u_state != '' || error_u_permissiongroup != ''
             || error_u_workplace != '' ) {
            return false;
        } else {
            insertdata_users();
            cleardata_users();
        }
    } else {
        updatedata_users();
        cleardata_users();
    }

});

$(document).on('click', '.usersDelete', function () {
    var url = 'users/';
    var tabledata = $('#users_data').DataTable();
    var userid = tabledata.row($(this).closest('tr')).data();
    var useridvalue = userid[Object.keys(userid)[0]];

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        type: "DELETE",
        url: url + 'destroy',
        data: {
            'getid': useridvalue,
        },

        success: function (response) {
            alertify.set('notifier', 'position', 'top-center');
            alertify.success(response.status);
            $('#users_data').DataTable().ajax.reload();
        }
    });
});

$(document).on('click', '.usersClose', function () {
    var displaycard = document.getElementById("usersaction");
    cleardata_users();
    document.getElementById("card_userstitle").innerText = "";
    displaycard.style.display = "none";


});

// Edit Button in DataTable...
$(document).on('click', '.usersEdit', function () {
    var url = 'users/'
    var tabledata = $('#users_data').DataTable();
    var userid = tabledata.row($(this).closest('tr')).data();
    var useridvalue = userid[Object.keys(userid)[0]];
    $.ajax({
        type: "GET",
        url: url + 'show',
        data: {
            'getid': useridvalue,
        },

        success: function (response) {

            $('#u_id').val(response['id']);
            $('#u_username').val(response['U_Name']);
            $('#u_password').val(response['U_Password']);
            $('#u_state').val(response['U_State']);
            $('#u_permissiongroup').val(response['U_PermissionGroup']);
            $('#u_workplace').val(response['U_WorkPlace']);

            var displaycard = document.getElementById("usersaction");
            if (displaycard.style.display == "none") {
                document.getElementById("card_userstitle").innerText = "Edit User Data";
                displaycard.style.display = "block";
                document.getElementById('card_userstitle').scrollIntoView();
            } else {
                displaycard.style.display = "none";
                document.getElementById('card_userstitle').innerText = "";
                document.getElementById('card_userstitle').innerText = "Edit User Data";
                displaycard.style.display = "block";
                document.getElementById('card_userstitle').scrollIntoView();

            }

        }
    });
});

$(document).on('click', '.usersEdit2', function () {
    var tabledata = $('#users_data').DataTable();
    var userid = tabledata.row($(this).closest('tr')).data();
    var useridvalue = userid[Object.keys(userid)[0]];


    var data = {
        'getid': useridvalue,
    };

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        type: 'GET',
        url: "userprofile-fetch",
        data: data,
        success: function (response) {
            var pageName = "userprofile-fetch2";
            window.location.href = pageName;

        }
    });
});


function cleardata_users() {
    $('#u_id').val('');
    $('#u_username').val('');
    $('#u_password').val('');
    $('#u_state').val('');
    $('#u_permissiongroup').val('');
    $('#u_workplace').val('');




}

function checkdata_users() {
    if ($.trim($('.u_username').val()).length == 0) {
        error_u_username = "Require ";
        $('#error_u_username').text(error_u_username);
    } else {
        error_u_username = "";
        $('#error_u_username').text(error_u_username);
    }

    if ($.trim($('.u_password').val()).length == 0) {
        error_u_password = "Require  ";
        $('#error_u_password').text(error_u_password);
    } else {
        error_u_password = "";
        $('#error_u_password').text(error_u_password);
    }
    if ($.trim($('.u_state').val()).length == 0) {
        error_u_state = "Required  ";
        $('#error_u_state').text(error_u_state);
    } else {
        error_u_state = "";
        $('#error_u_state').text(error_u_state);
    }
    if ($.trim($('.u_permissiongroup').val()).length == 0) {
        error_u_permissiongroup = "Required ";
        $('#error_u_permissiongroup').text(error_u_permissiongroup);
    } else {
        error_u_permissiongroup = "";
        $('#error_u_permissiongroup').text(error_u_permissiongroup);
    }
    if ($.trim($('.u_workplace').val()).length == 0) {
        error_u_workplace = "Required ";
        $('#error_u_workplace').text(error_u_workplace);
    } else {
        error_u_workplace = "";
        $('#error_u_workplace').text(error_u_workplace);
    }


}

function insertdata_users() {
    var url = "users";
    var data = {
        'u_username': $('.u_username').val(),
        'u_password': $('.u_password').val(),
        'u_state': $('.u_state').val(),
        'u_permissiongroup': $('.u_permissiongroup').val(),
        'u_workplace': $('.u_workplace').val(),


    };
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        method: "POST",
        url: url,
        data: data,
        success: function (response) {
            alertify.set('notifier', 'position', 'top-right');
            alertify.success(response.status);
            var tabldata = $('#users_data').DataTable();
            tabldata.ajax.reload();


        }
    });
}

function users_filldata() {
    var url = "usersfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + 'filldata',
            success: function (response) {
                $('#u_state').empty();

                $.each(response.getstate, function (indexInArray, valueOfElement) {

                    $('#u_state').append('<option value="' + valueOfElement.St_Name + '">' + valueOfElement.St_Name + '</option>');
                });
                $('#u_permissiongroup').empty();
                $.each(response.getpermissionname, function (indexInArray, valueOfElement) {

                    $('#u_permissiongroup').append('<option value="' + valueOfElement.G_Name + '">' + valueOfElement.G_Name + '</option>');
                });
                $('#u_workplace').empty();
                $.each(response.getworkplace, function (indexInArray, valueOfElement) {
                    $('#u_workplace').append('<option value="' + valueOfElement.D_Name + '">' + valueOfElement.D_Name + '</option>');
                });
                // $('#u_groupuser').empty();
                // $.each(response.getgroupuser, function (indexInArray, valueOfElement) {
                //     $('#u_groupuser').append('<option value="' + valueOfElement.G_Name + '">' + valueOfElement.G_Name + '</option>');
                // });


            }
        });

    });
}

function fetchdata_users() {

    $(document).ready(function () {
        var url = "users/";

        var tabledata = $('#users_data').DataTable({

            "responsive": true,
            "processing": true,
            "serverSide": true,

            "order": [],
            "ajax": {
                type: "GET",
                url: url + 'create',


            },

            "columns": [{
                "data": "id"
            },
            {
                "data": "U_Name"
            },
            {
                "data": "U_PermissionGroup"
            },
            {
                "data": "U_State"
            },
            {
                "data": null,
                render: function (data, type) {
                    return type === 'display' ?
                        '<button  class="btn btn-success btn-sm m-1 usersEdit"><i class="bi bi-pen"></i> Edit </button>' +
                        '<button  class="btn btn-danger btn-sm m-1 usersDelete"><i class="bi bi-trash"></i> Del </button>' : data;
                }
            }



            ],
            "columnDefs": [{
                "targets": [0, 4],
                "orderable": false,
            }],
            "lengthMenu": [
                [5, 10, 15, 20, 25, 100],
                [5, 10, 15, 20, 25, 100]
            ],
            // "language": {
            //     "decimal": "",
            //     "emptyTable": "No Exist Data",
            //     "info": "Display _START_ From _END_ From _TOTAL_ Entrey",
            //     "infoEmpty": "Display 0 to 0 of 0 Entry",
            //     "infoFiltered": "(تصفية من _MAX_ اجمالي الادخالات)",
            //     "infoPostFix": "",
            //     "thousands": ",",
            //     "lengthMenu": "عرض _MENU_ مدخلات",
            //     "loadingRecords": "تحميل....",
            //     "processing": "معالجة.....",
            //     "search": "بحث:",
            //     "zeroRecords": "لا توجد بيانات مطابقة لعملية البحث",
            //     "paginate": {
            //         "first": "الاول",
            //         "last": "الاخير",
            //         "next": "التالي",
            //         "previous": "السابق"
            //     },
            //     "aria": {
            //         "sortAscending": ": activate to sort column ascending",
            //         "sortDescending": ": activate to sort column descending"
            //     }
            // },
            // "dom": ' <"top"l><"search float-right p-2"f>rt<"bottom float-right"p><"clear">'


        });




    });

}


function updatedata_users() {
    var url = 'users/';
    var data = {
        'u_id': $('.u_id').val(),
        'u_username': $('.u_username').val(),
        'u_password': $('.u_password').val(),
        'u_state': $('.u_state').val(),
        'u_permissiongroup': $('.u_permissiongroup').val(),
        'u_workplace': $('.u_workplace').val(),

    };
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        method: "PUT",
        url: url + 'update',
        data: data,
        success: function (response) {
            alertify.set('notifier', 'position', 'top-right');
            alertify.success(response.status);
            var tabldata = $('#users_data').DataTable();
            tabldata.ajax.reload();


        }
    });
}
