itemstoask_fetch();
itemstoask_filldata();
$(document).on('click', '.itemstoaskAdd', function () {

    itemstoask_cleardata();
    $.ajax({
        type: "GET",
        url: "getLast/getInfo",
        success: function (response) {
            $('#IT_ItemType').val(response.getLast.IT_ItemType);
            $('#IT_QY').val(response.getLast.IT_QY);
            $('#IT_CarType').val(response.getLast.IT_CarType);
            $('#IT_Engine').val(response.getLast.IT_Engine);
            $('#IT_ModelCode').val(response.getLast.IT_ModelCode);
            $('#IT_FuelSystem').val(response.getLast.IT_FuelSystem);
            $('#IT_Transmission').val(response.getLast.IT_Transmission);
            $('#IT_CarNo').val(response.getLast.IT_CarNo);
            $('#IT_VIN').val(response.getLast.IT_VIN);
            $('#IT_Year').val(response.getLast.IT_Year);
        }
    });


    var displaycard = document.getElementById("itemstoaskaction");
    if (displaycard.style.display == "none") {
        document.getElementById("card_itemstoasktitle").innerText = "Add New Battrey";
        displaycard.style.display = "block";
        document.getElementById('card_itemstoasktitle').scrollIntoView();
    } else {

        displaycard.style.display = "none";
        document.getElementById("card_itemstoasktitle").innerText = "";

        displaycard.style.display = "block";
        document.getElementById("card_itemstoasktitle").innerText = "Add New Battrey";
        document.getElementById('card_itemstoasktitle').scrollIntoView();

    }
});
$(document).on('click', '.itemstoaskClose', function () {
    var displaycard = document.getElementById("itemstoaskaction");
    itemstoask_cleardata();
    document.getElementById("card_itemstoasktitle").innerText = "";
    displaycard.style.display = "none";


});

$(document).on('click', '.itemstoaskSave', function () {

    var IT_id = document.getElementById("IT_id").value;

    if (IT_id == '') {

        itemstoask_chechdata();
        if (error_IT_ItemType != '' || error_IT_ItemName !='' || error_IT_PartNumber !='') {
            return false;
        } else {
            itemstoask_insert();
            itemstoask_cleardata();
        }
    } else {
        itemstoask_update();
        itemstoask_cleardata();
    }

});

$(document).on('click', '.itemstoaskDelete', function () {
    var url = 'itemstoask/';
    var tabledata = $('#itemstoask_data').DataTable();
    var itemstoask = tabledata.row($(this).closest('tr')).data();
    var itemstoaskvalue = itemstoask[Object.keys(itemstoask)[0]];

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        type: "DELETE",
        url: url + 'destroy',
        data: {
            'getid': itemstoaskvalue,
        },

        success: function (response) {
            alertify.set('notifier', 'position', 'top-right');
            alertify.success(response.status);
            $('#itemstoask_data').DataTable().ajax.reload();
        }
    });
});

$(document).on('click', '.itemstoaskEdit', function () {
    var url = 'itemstoask/';
    var tabledata = $('#itemstoask_data').DataTable();
    var itemstoask = tabledata.row($(this).closest('tr')).data();
    var itemstoaskvalue = itemstoask[Object.keys(itemstoask)[0]];
    $.ajax({
        type: "GET",
        url: url + 'show',
        data: {
            'getid': itemstoaskvalue,
        },

        success: function (response) {

            $('#IT_id').val(response['id']);
            $('#IT_ItemType').val(response['IT_ItemType']);
            $('#IT_ItemName').val(response['IT_ItemName']);
            $('#IT_PartNumber').val(response['IT_PartNumber']);
            $('#IT_QY').val(response['IT_QY']);
            $('#IT_CarType').val(response['IT_CarType']);
            $('#IT_Engine').val(response['IT_Engine']);
            $('#IT_ModelCode').val(response['IT_ModelCode']);
            $('#IT_FuelSystem').val(response['IT_FuelSystem']);
            $('#IT_Transmission').val(response['IT_Transmission']);
            $('#IT_CarNo').val(response['IT_CarNo']);
            $('#IT_VIN').val(response['IT_VIN']);
            $('#IT_Year').val(response['IT_Year']);

            var displaycard = document.getElementById("itemstoaskaction");
            if (displaycard.style.display == "none") {
                document.getElementById("card_itemstoasktitle").innerText = "Edit Data";
                displaycard.style.display = "block";
                document.getElementById('card_itemstoasktitle').scrollIntoView();
            } else {
                displaycard.style.display = "none";
                document.getElementById('card_itemstoasktitle').innerText = "";
                document.getElementById('card_itemstoasktitle').innerText = "Edit Data";
                displaycard.style.display = "block";
                document.getElementById('card_itemstoasktitle').scrollIntoView();

            }



        }
    });
});




function itemstoask_cleardata() {
    $('#IT_id').val('');
    $('#IT_ItemType').val('');
    $('#IT_ItemName').val('');
    $('#IT_PartNumber').val('');
    $('#IT_QY').val('');
    $('#IT_CarType').val('');
    $('#IT_Engine').val('');
    $('#IT_ModelCode').val('');
    $('#IT_FuelSystem').val('');
    $('#IT_Transmission').val('');
    $('#IT_CarNo').val('');
    $('#IT_VIN').val('');
    $('#IT_Year').val('');

}

function itemstoask_chechdata() {
    if ($.trim($('.IT_ItemType').val()).length == 0) {
        error_IT_ItemType = "Require";
        $('#error_IT_ItemType').text(error_IT_ItemType);
    } else {
        error_IT_ItemType = "";
        $('#error_IT_ItemType').text(error_IT_ItemType);
    }
    if ($.trim($('.IT_ItemName').val()).length == 0) {
        error_IT_ItemName = "Require";
        $('#error_IT_ItemName').text(error_IT_ItemName);
    } else {
        error_IT_ItemName = "";
        $('#error_IT_ItemName').text(error_IT_ItemName);
    }
    if ($.trim($('.IT_PartNumber').val()).length == 0) {
        error_IT_PartNumber = "Require";
        $('#error_IT_PartNumber').text(error_IT_PartNumber);
    } else {
        error_IT_PartNumber = "";
        $('#error_IT_PartNumber').text(error_IT_PartNumber);
    }



}

function itemstoask_insert() {
    var url = 'itemstoask';
    var data = {
        'IT_ItemType': $('.IT_ItemType').val(),
        'IT_ItemName': $('.IT_ItemName').val(),
        'IT_PartNumber': $('.IT_PartNumber').val(),
        'IT_QY': $('.IT_QY').val(),
        'IT_CarType': $('.IT_CarType').val(),
        'IT_Engine': $('.IT_Engine').val(),
        'IT_ModelCode': $('.IT_ModelCode').val(),
        'IT_FuelSystem': $('.IT_FuelSystem').val(),
        'IT_Transmission': $('.IT_Transmission').val(),
        'IT_CarNo': $('.IT_CarNo').val(),
        'IT_VIN': $('.IT_VIN').val(),
        'IT_Year': $('.IT_Year').val(),

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
            var tabldata = $('#itemstoask_data').DataTable();
            tabldata.ajax.reload();


        },

    });


}

function itemstoask_filldata() {
    var url = "itemstoasksfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + 'filldata',
            success: function (response) {
                $('#IT_ItemTypeBrowser').empty();
                $.each(response.getItemType, function (indexInArray, valueOfElement) {
                    $('#IT_ItemTypeBrowser').append('<option value="' + valueOfElement.IT_ItemType + '">' + valueOfElement.IT_ItemType + '</option>');
                });

                $('#IT_CarTypeBrowser').empty();
                $.each(response.getCarType, function (indexInArray, valueOfElement) {
                    $('#IT_CarTypeBrowser').append('<option value="' + valueOfElement.IT_CarType + '">' + valueOfElement.IT_CarType + '</option>');
                });

                $('#IT_EngineBrowser').empty();
                $.each(response.getEngine, function (indexInArray, valueOfElement) {
                    $('#IT_EngineBrowser').append('<option value="' + valueOfElement.IT_Engine + '">' + valueOfElement.IT_Engine + '</option>');
                });

                $('#IT_ModelCodeBrowser').empty();
                $.each(response.getModelCode, function (indexInArray, valueOfElement) {
                    $('#IT_ModelCodeBrowser').append('<option value="' + valueOfElement.IT_ModelCode + '">' + valueOfElement.IT_ModelCode + '</option>');
                });

                $('#IT_FuelSystemBrowser').empty();
                $.each(response.getFuelSystem, function (indexInArray, valueOfElement) {
                    $('#IT_FuelSystemBrowser').append('<option value="' + valueOfElement.IT_FuelSystem + '">' + valueOfElement.IT_FuelSystem + '</option>');
                });

                $('#IT_TransmissionBrowser').empty();
                $.each(response.getTransmission, function (indexInArray, valueOfElement) {
                    $('#IT_TransmissionBrowser').append('<option value="' + valueOfElement.IT_Transmission + '">' + valueOfElement.IT_Transmission + '</option>');
                });
            }
        });

    });
}
function itemstoask_fetch() {

    $(document).ready(function () {
        var url = 'itemstoask/'
        var tabledata = $('#itemstoask_data').DataTable({

            "responsive": true,
            "processing": true,
            "serverSide": true,

            "order": [0,'desc'],
            "ajax": {
                type: "GET",
                url: url + "create",
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }

            },

            "columns": [{
                "data": "id",
                title:'Order ID',
                orderable:true,

            },
            {
                "data": "IT_ItemType"
            },
            {
                "data": "IT_ItemName"
            },
            {
                "data": "IT_PartNumber"
            },
            {
                "data": "IT_QY"
            },
            {
                "data": "IT_CarType"
            },
            {
                "data": "IT_Engine"
            },
            {
                "data": "IT_ModelCode"
            },
            {
                "data": "IT_FuelSystem"
            },
            {
                "data": "IT_Transmission"
            },
            {
                "data": "IT_CarNo"
            },
            {
                "data": "IT_VIN"
            },
            {
                "data": "IT_Year"
            },
            {
                "data": null,
                render: function (data, type) {
                    return type === 'display' ?
                        '<button  class="btn btn-success btn-sm m-1 itemstoaskEdit"><i class="bi bi-pen"></i> Edit </button>' +
                        '<button  class="btn btn-danger btn-sm m-1 itemstoaskDelete"><i class="bi bi-trash"></i> Del </button>' : data;
                }
            }



            ],
            "columnDefs": [{
                "targets": [0, 11, 12, 13],
                "orderable": false,

            }],

        //    "order":[[0,'desc']],
            "lengthMenu": [
                [5, 10, 15, 20, 25, 100,250,500,1000],
                [5, 10, 15, 20, 25, 100,250,500,1000]
            ],
            "initComplete": function() {
                tabledata.buttons().container().appendTo('#itemstoask_data_wrapper .col-md-6:eq(0)');
                $("#itemstoask_data").show();
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
            //     "info": "عرض _START_ من _ENIT_ من _TOTAL_ مدخلات",
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
        // tabledata.order([0,'desc']).draw();


    });

}

function itemstoask_update() {
    var url = 'itemstoask/';
    var data = {
        'IT_id': $('.IT_id').val(),
        'IT_ItemType': $('.IT_ItemType').val(),
        'IT_ItemName': $('.IT_ItemName').val(),
        'IT_PartNumber': $('.IT_PartNumber').val(),
        'IT_QY': $('.IT_QY').val(),
        'IT_CarType': $('.IT_CarType').val(),
        'IT_Engine': $('.IT_Engine').val(),
        'IT_ModelCode': $('.IT_ModelCode').val(),
        'IT_FuelSystem': $('.IT_FuelSystem').val(),
        'IT_Transmission': $('.IT_Transmission').val(),
        'IT_CarNo': $('.IT_CarNo').val(),
        'IT_VIN': $('.IT_VIN').val(),
        'IT_Year': $('.IT_Year').val(),

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
            var tabldata = $('#itemstoask_data').DataTable();
            tabldata.ajax.reload();


        }
    });
}


