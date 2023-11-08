fetchdata_permissions();
permissions_filldata();
$(document).on('click', '.permissionsAdd', function () {
    var displaycard = document.getElementById("permissionsaction");
    if (displaycard.style.display == "none") {
        document.getElementById("card_permissionstitle").innerText = "اضافة صلاحيات";
        displaycard.style.display = "block";
        document.getElementById('card_permissionstitle').scrollIntoView();
    } else {

        displaycard.style.display = "none";
        document.getElementById("card_permissionstitle").innerText = "";
        cleardata_permissions();
        displaycard.style.display = "block";
        document.getElementById("card_permissionstitle").innerText = "اضافة صلاحيات";
        document.getElementById('card_permissionstitle').scrollIntoView();

    }
});

$(document).on('click', '.permissionsSave', function () {

    var p_id = document.getElementById("P_ID").value;

    if (p_id == '') {
        insertdata_permissions();
        cleardata_permissions();


    } else {
        updatedata_permissions();
        // cleardata_permissions();
    }

});

$(document).on('click', '.permissionsDelete', function () {
    var url = 'permissions/';
    var tabledata = $('#permissions_data').DataTable();
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
            $('#permissions_data').DataTable().ajax.reload();
        }
    });
});

$(document).on('click', '.permissionsClose', function () {
    var displaycard = document.getElementById("permissionsaction");
    cleardata_permissions();
    document.getElementById("card_permissionstitle").innerText = "";
    displaycard.style.display = "none";


});

// Edit Button in DataTable...
$(document).on('click', '.permissionsEdit', function () {
    var url = 'permissions/'
    var tabledata = $('#permissions_data').DataTable();
    var userid = tabledata.row($(this).closest('tr')).data();
    var useridvalue = userid[Object.keys(userid)[0]];
    $.ajax({
        type: "GET",
        url: url + 'show',
        data: {
            'getid': useridvalue,
        },

        success: function (response) {

            $('#P_ID').val(response.id);
            $('#P_GroupName').val(response.P_GroupName);
            $('#P_Create').prop('checked',function() {
                if (response.P_Create ==1) {
                    return 1;
                } else return 0;
            }());
            $('#P_Update').prop('checked',function() {
                if (response.P_Update == 1) {
                    return 1;
                } else return 0;
            }());

            $('#P_Delete').prop('checked',function() {
                if (response.P_Delete == 1) {
                    return 1;
                } else return 0;
            }());
            $('#P_Dashboard').prop('checked', function() {
                if (response.P_Dashboard == 1) {
                    return 1;
                } else return 0;
            }());
            $('#P_Users').prop('checked', function() {
                if (response.P_Users == 1) {
                    return 1;
                } else return 0;
            }());
            $('#P_State').prop('checked', function() {
                if (response.P_State == 1) {
                    return 1;
                } else return 0;
            }());
            $('#P_Permissions').prop('checked', function() {
                if (response.P_Permissions == 1) {
                    return 1;
                } else return 0;
            }());
            $('#P_Backup').prop('checked', function() {
                if (response.P_Backup == 1) {
                    return 1;
                } else return 0;
            }());
            $('#P_Recovery').prop('checked', function() {
                if (response.P_Recovery == 1) {
                    return 1;
                } else return 0;
            }());
            $('#P_Groups').prop('checked', function() {
                if (response.P_Groups == 1) {
                    return 1;
                } else return 0;
            }());


            var displaycard = document.getElementById("permissionsaction");
            if (displaycard.style.display == "none") {
                document.getElementById("card_permissionstitle").innerText = "تعديل بيانات الصلاحيات";
                displaycard.style.display = "block";
                document.getElementById('card_permissionstitle').scrollIntoView();
            } else {
                displaycard.style.display = "none";
                document.getElementById('card_permissionstitle').innerText = "";
                document.getElementById('card_permissionstitle').innerText = "تعديل بيانات الصلاحيات";
                displaycard.style.display = "block";
                document.getElementById('card_permissionstitle').scrollIntoView();

            }

        }
    });
});



function cleardata_permissions() {
    $('#P_ID').val('');
    $('#P_GroupName').val('');
    $('#P_Create').prop('checked',0);
    $('#P_Update').prop('checked',0);
    $('#P_Delete').prop('checked',0);
    $('#P_Dashboard').prop('checked',0);
    $('#P_Users').prop('checked',0);
    $('#P_State').prop('checked',0);
    $('#P_Backup').prop('checked',0);
    $('#P_Recovery').prop('checked',0);
    $('#P_Groups').prop('checked',0);
    $('#P_Permissions').prop('checked',0);



}



function insertdata_permissions() {
    var url = "permissions";
    var data = {
        'P_GroupName': $('.P_GroupName').val(),
        'P_Create': (function() {
            if ($("#P_Create").is(":checked")) {
                return 1;

            } else return 0;
        })(),
        'P_Update': (function() {
            if ($("#P_Update").is(":checked")) {
                return 1;

            } else return 0;
        })(),
        'P_Delete': (function() {
            if ($("#P_Delete").is(":checked")) {
                return 1;

            } else return 0;
        })(),
        'P_Dashboard': (function() {
            if ($("#P_Dashboard").is(":checked")) {
                return 1;

            } else return 0;
        })(),
        'P_Users': (function() {
            if ($("#P_Users").is(":checked")) {
                return 1;

            } else return 0;
        })(),
        'P_Backup': (function() {
            if ($("#P_Backup").is(":checked")) {
                return 1;

            } else return 0;
        })(),
        'P_Recovery': (function() {
            if ($("#P_Recovery").is(":checked")) {
                return 1;

            } else return 0;
        })(),
        'P_Groups': (function() {
            if ($("#P_Groups").is(":checked")) {
                return 1;

            } else return 0;
        })(),
        'P_Permissions': (function() {
            if ($("#P_Permissions").is(":checked")) {
                return 1;

            } else return 0;
        })(),
        'P_State': (function() {
            if ($("#P_State").is(":checked")) {
                return 1;

            } else return 0;
        })(),



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
            var tabldata = $('#permissions_data').DataTable();
            tabldata.ajax.reload();


        }
    });
}

function permissions_filldata() {
    var url = "permissionsfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + 'filldata',
            success: function (response) {
                $('#P_GroupName').empty();
                $.each(response.getgroups, function (indexInArray, valueOfElement) {
                    $('#P_GroupName').append('<option value="' + valueOfElement.G_Name + '">' + valueOfElement.G_Name + '</option>');
                });


            }
        });

    });
}

function fetchdata_permissions() {

    $(document).ready(function () {
        var url = "permissions/";

        var tabledata = $('#permissions_data').DataTable({

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
                "data": "P_GroupName"
            },

            {
                "data": null,
                render: function (data, type) {
                    return type === 'display' ?
                        '<button  class="btn btn-success btn-sm m-1 permissionsEdit"><i class="bi bi-pen"></i> تعديل </button>' +
                        '<button  class="btn btn-danger btn-sm m-1 permissionsDelete"><i class="bi bi-trash"></i> حذف </button>' : data;
                }
            }



            ],
            "columnDefs": [{
                "targets": [0, 2],
                "orderable": false,
            }],
            "lengthMenu": [
                [5, 10, 15, 20, 25, 100],
                [5, 10, 15, 20, 25, 100]
            ],
            "language": {
                "decimal": "",
                "emptyTable": "لا توجد بيانات",
                "info": "عرض _START_ من _END_ من _TOTAL_ مدخلات",
                "infoEmpty": "عرض 0 to 0 of 0 مدخلات",
                "infoFiltered": "(تصفية من _MAX_ اجمالي الادخالات)",
                "infoPostFix": "",
                "thousands": ",",
                "lengthMenu": "عرض _MENU_ مدخلات",
                "loadingRecords": "تحميل....",
                "processing": "معالجة.....",
                "search": "بحث:",
                "zeroRecords": "لا توجد بيانات مطابقة لعملية البحث",
                "paginate": {
                    "first": "الاول",
                    "last": "الاخير",
                    "next": "التالي",
                    "previous": "السابق"
                },
                "aria": {
                    "sortAscending": ": activate to sort column ascending",
                    "sortDescending": ": activate to sort column descending"
                }
            },
            // "dom": ' <"top"l><"search float-right p-2"f>rt<"bottom float-right"p><"clear">'


        });




    });

}

function updatedata_permissions() {
    var url = "permissions/";
    var data = {
        'P_ID': $('.P_ID').val(),
        'P_GroupName': $('.P_GroupName').val(),
        'P_Create': (function() {
            if ($("#P_Create").is(":checked")) {
                return 1;

            } else return 0;
        })(),
        'P_Update': (function() {
            if ($("#P_Update").is(":checked")) {
                return 1;

            } else return 0;
        })(),
        'P_Delete': (function() {
            if ($("#P_Delete").is(":checked")) {
                return 1;

            } else return 0;
        })(),
        'P_Dashboard': (function() {
            if ($("#P_Dashboard").is(":checked")) {
                return 1;

            } else return 0;
        })(),
        'P_Users': (function() {
            if ($("#P_Users").is(":checked")) {
                return 1;

            } else return 0;
        })(),
        'P_Backup': (function() {
            if ($("#P_Backup").is(":checked")) {
                return 1;

            } else return 0;
        })(),
        'P_Recovery': (function() {
            if ($("#P_Recovery").is(":checked")) {
                return 1;

            } else return 0;
        })(),
        'P_Groups': (function() {
            if ($("#P_Groups").is(":checked")) {
                return 1;

            } else return 0;
        })(),
        'P_Permissions': (function() {
            if ($("#P_Permissions").is(":checked")) {
                return 1;

            } else return 0;
        })(),
        'P_State': (function() {
            if ($("#P_State").is(":checked")) {
                return 1;

            } else return 0;
        })(),




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
            var tabldata = $('#permissions_data').DataTable();
            tabldata.ajax.reload();


        }
    });
}


