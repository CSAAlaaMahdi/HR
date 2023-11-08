permissionname_fetch();
$(document).on('click', '.permissionnameAdd', function () {
    var displaycard = document.getElementById("permissionnameaction");
    if (displaycard.style.display == "none") {
        document.getElementById("card_permissionnametitle").innerText = "Add New Permission Name";
        displaycard.style.display = "block";
        document.getElementById('card_permissionnametitle').scrollIntoView();
    } else {

        displaycard.style.display = "none";
        document.getElementById("card_permissionnametitle").innerText = "";
        permissionname_cleardata();
        displaycard.style.display = "block";
        document.getElementById("card_permissionnametitle").innerText = "Add New Permission Name";
        document.getElementById('card_permissionnametitle').scrollIntoView();

    }
});
$(document).on('click', '.permissionnameClose', function () {
    var displaycard = document.getElementById("permissionnameaction");
    permissionname_cleardata();
    document.getElementById("card_permissionnametitle").innerText = "";
    displaycard.style.display = "none";


});

$(document).on('click', '.permissionnameSave', function () {

    var p_id = document.getElementById("p_id").value;

    if (p_id == '') {

        permissionname_chechdata();
        if (error_p_name != '') {
            return false;
        } else {
            permissionname_insert();
            permissionname_cleardata();
        }
    } else {
        permissionname_update();
        permissionname_cleardata();
    }

});

$(document).on('click', '.permissionnameDelete', function () {
    var url = 'permissionname/';
    var tabledata = $('#permissionname_data').DataTable();
    var permissionname = tabledata.row($(this).closest('tr')).data();
    var permissionnamevalue = permissionname[Object.keys(permissionname)[0]];

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        type: "DELETE",
        url: url + 'destroy',
        data: {
            'getid': permissionnamevalue,
        },

        success: function (response) {
            alertify.set('notifier', 'position', 'top-center');
            alertify.success(response.status);
            $('#permissionname_data').DataTable().ajax.reload();
        }
    });
});

$(document).on('click', '.permissionnameEdit', function () {
    var url = 'permissionname/';
    var tabledata = $('#permissionname_data').DataTable();
    var permissionname = tabledata.row($(this).closest('tr')).data();
    var permissionnamevalue = permissionname[Object.keys(permissionname)[0]];
    $.ajax({
        type: "GET",
        url: url + 'show',
        data: {
            'getid': permissionnamevalue,
        },

        success: function (response) {

            $('#p_id').val(response['id']);
            $('#p_name').val(response['P_Name']);

            var displaycard = document.getElementById("permissionnameaction");
            if (displaycard.style.display == "none") {
                document.getElementById("card_permissionnametitle").innerText = "Edit Data";
                displaycard.style.display = "block";
            } else {
                displaycard.style.display = "none";
                document.getElementById('card_permissionnametitle').innerText = "";
                document.getElementById('card_permissionnametitle').innerText = "Edit Data";
                displaycard.style.display = "block";

            }



        }
    });
});




function permissionname_cleardata() {
    $('#p_id').val('');
    $('#p_name').val('');

}

function permissionname_chechdata() {
    if ($.trim($('.p_name').val()).length == 0) {
        error_p_name = "Require";
        $('#error_p_name').text(error_p_name);
    } else {
        error_p_name = "";
        $('#error_p_name').text(error_p_name);
    }



}

function permissionname_insert() {
    var url = 'permissionname';
    var data = {
        'p_name': $('.p_name').val(),

    };
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $.ajax({
        type: "POST",
        url: url ,
        data: data,
        success: function (response) {
            alertify.set('notifier', 'position', 'top-right');
            alertify.success(response.status);
            var tabldata = $('#permissionname_data').DataTable();
            tabldata.ajax.reload();


        },

    });


}


function permissionname_fetch() {

    $(document).ready(function () {
        var url = 'permissionname/'
        var tabledata = $('#permissionname_data').DataTable({

            "responsive": true,
            "processing": true,
            "serverSide": true,

            "order": [],
            "ajax": {
                type: "GET",
                url: url + "create",
                headers: {
                    'X-CSRF-Token': '{{ csrf_token() }}',
                },


            },

            "columns": [{
                "data": "id"
            },
            {
                "data": "P_Name"
            },

            {
                "data": null,
                render: function (data, type) {
                    return type === 'display' ?
                        '<button  class="btn btn-success btn-sm m-1 permissionnameEdit"><i class="bi bi-pen"></i> Edit </button>' +
                        '<button  class="btn btn-danger btn-sm m-1 permissionnameDelete"><i class="bi bi-trash"></i> Del </button>' : data;
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
            // "language": {
            //     "decimal": "",
            //     "emptyTable": "لا توجد بيانات",
            //     "info": "عرض _START_ من _END_ من _TOTAL_ مدخلات",
            //     "infoEmpty": "عرض 0 to 0 of 0 مدخلات",
            //     "infoFiltered": "(تصفية من _MAX_ اجمالي المدخلات)",
            //     "infoPostFix": "",
            //     "thousands": ",",
            //     "lengthMenu": "عرض _MENU_ مدخلات",
            //     "loadingRecords": "تحميل ....",
            //     "processing": "معالجة....",
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
        });
    });

}

function permissionname_update() {
    var url = 'permissionname/';
    var data = {
        'p_id': $('.p_id').val(),
        'p_name': $('.p_name').val(),

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
            var tabldata = $('#permissionname_data').DataTable();
            tabldata.ajax.reload();


        }
    });
}
