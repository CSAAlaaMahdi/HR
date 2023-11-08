battreys_fetch();
// battreys_filldata();
$(document).on('click', '.battreysAdd', function () {
    var displaycard = document.getElementById("battreysaction");
    if (displaycard.style.display == "none") {
        document.getElementById("card_battreystitle").innerText = "Add New Battrey";
        displaycard.style.display = "block";
        document.getElementById('card_battreystitle').scrollIntoView();
    } else {

        displaycard.style.display = "none";
        document.getElementById("card_battreystitle").innerText = "";
        battreys_cleardata();
        displaycard.style.display = "block";
        document.getElementById("card_battreystitle").innerText = "Add New Battrey";
        document.getElementById('card_battreystitle').scrollIntoView();

    }
});
$(document).on('click', '.battreysClose', function () {
    var displaycard = document.getElementById("battreysaction");
    battreys_cleardata();
    document.getElementById("card_battreystitle").innerText = "";
    displaycard.style.display = "none";


});

$(document).on('click', '.battreysSave', function () {

    var B_id = document.getElementById("B_id").value;

    if (B_id == '') {

        battreys_chechdata();
        if (error_B_Model !='') {
            return false;
        } else {
            battreys_insert();
            battreys_cleardata();
        }
    } else {
        battreys_update();
        battreys_cleardata();
    }

});

$(document).on('click', '.battreysDelete', function () {
    var url = 'battreys/';
    var tabledata = $('#battreys_data').DataTable();
    var battreys = tabledata.row($(this).closest('tr')).data();
    var battreysvalue = battreys[Object.keys(battreys)[0]];

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        type: "DELETE",
        url: url + 'destroy',
        data: {
            'getid': battreysvalue,
        },

        success: function (response) {
            alertify.set('notifier', 'position', 'top-right');
            alertify.success(response.status);
            $('#battreys_data').DataTable().ajax.reload();
        }
    });
});

$(document).on('click', '.battreysEdit', function () {
    var url = 'battreys/';
    var tabledata = $('#battreys_data').DataTable();
    var battreys = tabledata.row($(this).closest('tr')).data();
    var battreysvalue = battreys[Object.keys(battreys)[0]];
    $.ajax({
        type: "GET",
        url: url + 'show',
        data: {
            'getid': battreysvalue,
        },

        success: function (response) {

            $('#B_id').val(response['id']);
            $('#B_Group').val(response['B_Group']);
            $('#B_Model').val(response['B_Model']);
            $('#B_Ref').val(response['B_Ref']);
            $('#B_AH').val(response['B_AH']);
            $('#B_L').val(response['B_L']);
            $('#B_R').val(response['B_R']);
            $('#B_H').val(response['B_H']);
            $('#B_Brand').val(response['B_Brand']);
            $('#B_Price').val(response['B_Price']);
            $('#B_CarType').val(response['B_CarType']);
            $('#B_QY').val(response['B_QY']);

            var displaycard = document.getElementById("battreysaction");
            if (displaycard.style.display == "none") {
                document.getElementById("card_battreystitle").innerText = "Edit Data";
                displaycard.style.display = "block";
                document.getElementById('card_battreystitle').scrollIntoView();
            } else {
                displaycard.style.display = "none";
                document.getElementById('card_battreystitle').innerText = "";
                document.getElementById('card_battreystitle').innerText = "Edit Data";
                displaycard.style.display = "block";
                document.getElementById('card_battreystitle').scrollIntoView();

            }



        }
    });
});




function battreys_cleardata() {
    $('#B_id').val('');
    $('#B_Group').val('');
    $('#B_Model').val('');
    $('#B_Ref').val('');
    $('#B_AH').val('');
    $('#B_L').val('');
    $('#B_R').val('');
    $('#B_H').val('');
    $('#B_Brand').val('');
    $('#B_Price').val('');
    $('#B_CarType').val('');
    $('#B_QY').val('');

}

function battreys_chechdata() {
    // if ($.trim($('.B_Group').val()).length == 0) {
    //     error_B_Group = "Require";
    //     $('#error_B_Group').text(error_B_Group);
    // } else {
    //     error_B_Group = "";
    //     $('#error_B_Group').text(error_B_Group);
    // }
    if ($.trim($('.B_Model').val()).length == 0) {
        error_B_Model = "Require";
        $('#error_B_Model').text(error_B_Model);
    } else {
        error_B_Model = "";
        $('#error_B_Model').text(error_B_Model);
    }
    // if ($.trim($('.B_Ref').val()).length == 0) {
    //     error_B_Ref = "Require";
    //     $('#error_B_Ref').text(error_B_Ref);
    // } else {
    //     error_B_Ref = "";
    //     $('#error_B_Ref').text(error_B_Ref);
    // }
    // if ($.trim($('.B_AH').val()).length == 0) {
    //     error_B_AH = "Require";
    //     $('#error_B_AH').text(error_B_AH);
    // } else {
    //     error_B_AH = "";
    //     $('#error_B_AH').text(error_B_AH);
    // }
    // if ($.trim($('.B_CarType').val()).length == 0) {
    //     error_B_CarType = "Require";
    //     $('#error_B_CarType').text(error_B_CarType);
    // } else {
    //     error_B_CarType = "";
    //     $('#error_B_CarType').text(error_B_CarType);
    // }


}

function battreys_insert() {
    var url = 'battreys';
    var data = {
        'B_Group': $('.B_Group').val(),
        'B_Model': $('.B_Model').val(),
        'B_Ref': $('.B_Ref').val(),
        'B_AH': $('.B_AH').val(),
        'B_L': $('.B_L').val(),
        'B_R': $('.B_R').val(),
        'B_H': $('.B_H').val(),
        'B_Brand':$('.B_Brand').val(),
        'B_Price':$('.B_Price').val(),
        'B_CarType': $('.B_CarType').val(),
        'B_Count': $('.B_Count').val(),
        'B_QY': $('.B_QY').val(),

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
            var tabldata = $('#battreys_data').DataTable();
            tabldata.ajax.reload();


        },

    });


}

function battreys_filldata() {
    // var url = "battreyssfill/";
    // $(document).ready(function () {
    //     $.ajax({
    //         type: "GET",
    //         url: url + 'filldata',
    //         success: function (response) {
    //             $('#B_state').empty();
    //             $.each(response.getstate, function (indexInArray, valueOfElement) {
    //                 $('#B_state').append('<option value="' + valueOfElement.St_Name + '">' + valueOfElement.St_Name + '</option>');
    //             });

    //         }
    //     });

    // });
}
function battreys_fetch() {

    $(document).ready(function () {
        var url = 'battreys/'
        var tabledata = $('#battreys_data').DataTable({

            "responsive": true,
            "processing": true,
            "serverSide": true,

            "order": [],
            "ajax": {
                type: "GET",
                url: url + "create",
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }

            },

            "columns": [{
                "data": "id"
            },
            {
                "data": "B_Group"
            },
            {
                "data": "B_Model"
            },
            {
                "data": "B_Ref"
            },
            {
                "data": "B_AH"
            },
            {
                "data": "B_L"
            },
            {
                "data": "B_R"
            },
            {
                "data": "B_H"
            },
            {
                "data": "B_Brand"
            },
            {
                "data": "B_Price"
            },

            {
                "data": "B_CarType"
            },
            {
                "data": "B_Count"
            },
            {
                "data": "B_QY"
            },
            {
                "data": null,
                render: function (data, type) {
                    return type === 'display' ?
                        '<button  class="btn btn-success btn-sm m-1 battreysEdit"><i class="bi bi-pen"></i> Edit </button>' +
                        '<button  class="btn btn-danger btn-sm m-1 battreysDelete"><i class="bi bi-trash"></i> Del </button>' : data;
                }
            }



            ],
            "columnDefs": [{
                "targets": [0, 13],
                "orderable": false,
            }],
            "lengthMenu": [
                [5, 10, 15, 20, 25, 100],
                [5, 10, 15, 20, 25, 100]
            ],
            "initComplete": function() {
                tabledata.buttons().container().appendTo('#battreys_data_wrapper .col-md-6:eq(0)');
                $("#battreys_data").show();
            },
            'dom': "<'row'<'col-sm-12 col-md-6'Bl><'col-sm-12 col-md-6'f>><'row'<'col-sm-12'tr>><'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7'p>>",

            "buttons": [{
                    'extend': 'print',
                    // title: function() {
                    //     var printTitle = '<img src="admin/assets/img/avatar.png" style="width: 64px; height: 64px;;"><h4 style="text-align: center; color:red;">JobCard Report</h4><br>'+
                    //     '<h4 style="text-align: center; color:red;">Alaa Mhdi</h4><br>';
                    //     return printTitle
                    // },
                    'exportOptions': {
                        'columns': ':visible'
                    }
                },
                {
                    'extend': 'copy',
                    'exportOptions': {
                        'columns': [0, ':visible']
                    }
                },
                {
                    'extend': 'excel',
                    'exportOptions': {
                        'columns': ':visible'
                    }
                },
                {
                    'extend': 'pdf',
                    'exportOptions': {
                        'columns': ':visible'
                    }
                },
                {
                    'extend': 'colvis',
                    'postfixButtons': ['colvisRestore']
                }
            ],
            // "language": {
            //     "decimal": "",
            //     "emptyTable": "لا توجد بيانات",
            //     "info": "عرض _START_ من _ENB_ من _TOTAL_ مدخلات",
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

function battreys_update() {
    var url = 'battreys/';
    var data = {
        'B_id': $('.B_id').val(),
        'B_Group': $('.B_Group').val(),
        'B_Model': $('.B_Model').val(),
        'B_Ref': $('.B_Ref').val(),
        'B_AH': $('.B_AH').val(),
        'B_L': $('.B_L').val(),
        'B_R': $('.B_R').val(),
        'B_H': $('.B_H').val(),
        'B_Brand':$('.B_Brand').val(),
        'B_Price':$('.B_Price').val(),
        'B_CarType': $('.B_CarType').val(),
        'B_Count': $('.B_Count').val(),
        'B_QY': $('.B_QY').val(),

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
            var tabldata = $('#battreys_data').DataTable();
            tabldata.ajax.reload();


        }
    });
}
