ordermain_fetch();
ordermain_filldata();
$(document).on("click", ".ordermainAdd", function () {
    var displaycard = document.getElementById("ordermainaction");
    if (displaycard.style.display == "none") {
        document.getElementById("card_ordermaintitle").innerText =
            "Add New Order";
        displaycard.style.display = "block";
        document.getElementById("card_ordermaintitle").scrollIntoView();
    } else {
        displaycard.style.display = "none";
        document.getElementById("card_ordermaintitle").innerText = "";
        ordermain_cleardata();
        displaycard.style.display = "block";
        document.getElementById("card_ordermaintitle").innerText =
            "Add New Order";
        document.getElementById("card_ordermaintitle").scrollIntoView();
    }
});
$(document).on("click", ".ordermainClose", function () {
    var displaycard = document.getElementById("ordermainaction");
    ordermain_cleardata();
    document.getElementById("card_ordermaintitle").innerText = "";
    displaycard.style.display = "none";
});

$(document).on("click", ".ordermainSave", function () {
    var Orm_ID = document.getElementById("Orm_ID").value;

    if (Orm_ID == "") {
        ordermain_chechdata();
        if (
            error_Orm_OrderNo != "" ||
            error_Orm_OrderDate != "" ||
            error_Orm_Company != "" ||
            error_Orm_Model != "" ||
            error_Orm_VIN != ""
        ) {
            return false;
        } else {
            ordermain_insert();
            ordermain_cleardata();
        }
    } else {
        ordermain_update();
        ordermain_cleardata();
    }
});

$(document).on("click", ".ordermainDelete", function () {
    var url = "ordermain/";
    var tabledata = $("#ordermain_data").DataTable();
    var ordermain = tabledata.row($(this).closest("tr")).data();
    var ordermainvalue = ordermain[Object.keys(ordermain)[0]];

    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
    });
    $.ajax({
        type: "DELETE",
        url: url + "destroy",
        data: {
            getid: ordermainvalue,
        },

        success: function (response) {
            alertify.set("notifier", "position", "top-right");
            alertify.success(response.status);
            $("#ordermain_data").DataTable().ajax.reload();
        },
    });
});

$(document).on("click", ".ordermainEdit", function () {
    var url = "ordermain/";
    var tabledata = $("#ordermain_data").DataTable();
    var ordermain = tabledata.row($(this).closest("tr")).data();
    var ordermainvalue = ordermain[Object.keys(ordermain)[0]];
    $.ajax({
        type: "GET",
        url: url + "show",
        data: {
            getid: ordermainvalue,
        },

        success: function (response) {
            $("#Orm_ID").val(response["id"]);
            $("#Orm_OrderNo").val(response["Orm_OrderNo"]);
            $("#Orm_OrderDate").val(response["Orm_OrderDate"]);
            $("#Orm_Company").val(response["Orm_Company"]);
            $("#Orm_Model").val(response["Orm_Model"]);
            $("#Orm_VIN").val(response["Orm_VIN"]);
            $("#Orm_Description").val(response["Orm_Description"]);
            $("#Orm_ItemsType").val(response["Orm_ItemsType"]);
            $("#Orm_Complete").prop("checked", response["Orm_Complete"]);

            var displaycard = document.getElementById("ordermainaction");
            if (displaycard.style.display == "none") {
                document.getElementById("card_ordermaintitle").innerText =
                    "Edit Data";
                displaycard.style.display = "block";
                document.getElementById("card_ordermaintitle").scrollIntoView();
            } else {
                displaycard.style.display = "none";
                document.getElementById("card_ordermaintitle").innerText = "";
                document.getElementById("card_ordermaintitle").innerText =
                    "Edit Data";
                displaycard.style.display = "block";
                document.getElementById("card_ordermaintitle").scrollIntoView();
            }
        },
    });
});

$(document).on("click", ".ordermainItems", function () {
    var url = "ordersecondary";
    var tabledata = $("#ordermain_data").DataTable();
    var ordermain = tabledata.row($(this).closest("tr")).data();
    var ordermainvalue = ordermain[Object.keys(ordermain)[0]];

    $.ajax({
        type: "GET",
        url: url,
        data: {
            getid: ordermainvalue,
        },

        success: function (response) {
            var pageName = url;
            window.location.href = pageName;
        },
    });
});

function ordermain_cleardata() {
    $("#Orm_ID").val("");
    $("#Orm_OrderNo").val("");
    $("#Orm_OrderDate").val("");
    $("#Orm_Company").val("");
    $("#Orm_Model").val("");
    $("#Orm_VIN").val("");
    $("#Orm_Description").val("");
    $("#Orm_ItemsType").val("");
    $("#Orm_Complete").prop("checked", false);
}

function ordermain_chechdata() {
    if ($.trim($(".Orm_OrderNo").val()).length == 0) {
        error_Orm_OrderNo = "Required";
        $("#error_Orm_OrderNo").text(error_Orm_OrderNo);
    } else {
        error_Orm_OrderNo = "";
        $("#error_Orm_OrderNo").text(error_Orm_OrderNo);
    }
    if ($.trim($(".Orm_OrderDate").val()).length == 0) {
        error_Orm_OrderDate = "Required";
        $("#error_Orm_OrderDate").text(error_Orm_OrderDate);
    } else {
        error_Orm_OrderDate = "";
        $("#error_Orm_OrderDate").text(error_Orm_OrderDate);
    }
    if ($.trim($(".Orm_Company").val()).length == 0) {
        error_Orm_Company = "Required";
        $("#error_Orm_Company").text(error_Orm_Company);
    } else {
        error_Orm_Company = "";
        $("#error_Orm_Company").text(error_Orm_Company);
    }
    if ($.trim($(".Orm_Model").val()).length == 0) {
        error_Orm_Model = "Required";
        $("#error_Orm_Model").text(error_Orm_Model);
    } else {
        error_Orm_Model = "";
        $("#error_Orm_Model").text(error_Orm_Model);
    }
    if ($.trim($(".Orm_VIN").val()).length == 0) {
        error_Orm_VIN = "Required";
        $("#error_Orm_VIN").text(error_Orm_VIN);
    } else {
        error_Orm_VIN = "";
        $("#error_Orm_VIN").text(error_Orm_VIN);
    }
}

function ordermain_insert() {
    var url = "ordermain";
    var data = {
        Orm_OrderNo: $(".Orm_OrderNo").val(),
        Orm_OrderDate: $(".Orm_OrderDate").val(),
        Orm_Company: $(".Orm_Company").val(),
        Orm_Model: $(".Orm_Model").val(),
        Orm_VIN: $(".Orm_VIN").val(),
        Orm_Description: $(".Orm_Description").val(),
        Orm_ItemsType: $(".Orm_ItemsType").val(),
        Orm_Complete: (function () {
            if ($("#Orm_Complete").is(":checked")) {
                return 1;
            } else return 0;
        })(),
    };
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
    });

    $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: function (response) {
            alertify.set("notifier", "position", "top-right");
            alertify.success(response.status);
            var tabldata = $("#ordermain_data").DataTable();
            tabldata.ajax.reload();
        },
    });
}

function ordermain_fetch() {
    $(document).ready(function () {
        var url = "ordermain/";
        var data = {
            searchbox: $(".searchbox").val(),
        };
        var tabledata = $("#ordermain_data").DataTable({
            // destroy:true,
            responsive: true,
            processing: true,
            serverSide: true,

            order: [],
            ajax: {
                type: "GET",
                url: url + "create",
                data: data,
                headers: {
                    "X-CSRF-Token": "{{ csrCi_token() }}",
                },
            },

            columns: [
                {
                    data: "id",
                },
                {
                    data: "Orm_OrderNo",
                },
                {
                    data: "Orm_OrderDate",
                },
                {
                    data: "Orm_Company",
                },
                {
                    data: "Orm_Model",
                },
                {
                    data: "Orm_VIN",
                },
                {
                    data: null,
                    // sortable: "Orm_Complete",
                    // className: "centerize",
                    render: function (data, type, full, meta) {
                        return  type === "display"?
                        '<input id="toggle-demo" type="checkbox" data-toggle="toggle" data-on="Ready" data-off="Not Ready" data-onstyle="success" data-offstyle="danger">' :data;
                    },
                },
                {
                    data: null,
                    render: function (data, type) {
                        return type === "display"
                            ? '<button  class="btn btn-success btn-sm m-1 ordermainEdit"><i class="bi bi-pen"></i> Edit </button>' +
                                  '<button  class="btn btn-danger btn-sm m-1 ordermainDelete"><i class="bi bi-trash"></i> Del </button>' +
                                  '<button  class="btn btn-info btn-sm m-1 ordermainItems"><i class="bi bi-info"></i> Items </button>'
                            : data;
                    },
                },
            ],
            columnDefs: [
                {
                    targets: [0, 7],
                    orderable: false,
                },
            ],
            lengthMenu: [
                [5, 10, 15, 20, 25, 100],
                [5, 10, 15, 20, 25, 100],
            ],
            // "language": {
            //     "decimal": "",
            //     "emptyTable": "لا توجد بيانات",
            //     "info": "عرض _START_ من _ENCi_ من _TOTAL_ مدخلات",
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

function ordermain_update() {
    var url = "ordermain/";
    var data = {
        Orm_ID: $(".Orm_ID").val(),
        Orm_OrderNo: $(".Orm_OrderNo").val(),
        Orm_OrderDate: $(".Orm_OrderDate").val(),
        Orm_Company: $(".Orm_Company").val(),
        Orm_Model: $(".Orm_Model").val(),
        Orm_VIN: $(".Orm_VIN").val(),
        Orm_Description: $(".Orm_Description").val(),
        Orm_ItemsType: $(".Orm_ItemsType").val(),
        Orm_Complete: (function () {
            if ($("#Orm_Complete").is(":checked")) {
                return 1;
            } else return 0;
        })(),
    };
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
    });
    $.ajax({
        method: "PUT",
        url: url + "update",
        data: data,
        success: function (response) {
            alertify.set("notifier", "position", "top-right");
            alertify.success(response.status);
            var tabldata = $("#ordermain_data").DataTable();
            tabldata.ajax.reload();
        },
    });
}
function ordermain_filldata() {
    var url = "ordermainfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {
                $("#Orm_CompanyBrowser").empty();
                $.each(
                    response.getcompany,
                    function (indexInArray, valueOfElement) {
                        $("#Orm_CompanyBrowser").append(
                            '<option value="' +
                                valueOfElement.Co_Name +
                                '">' +
                                valueOfElement.Co_Name +
                                "</option>"
                        );
                    }
                );

                $("#Orm_ModelBrowser").empty();
                $.each(
                    response.getmodel,
                    function (indexInArray, valueOfElement) {
                        $("#Orm_ModelBrowser").append(
                            '<option value="' +
                                valueOfElement.Mo_Name +
                                '">' +
                                valueOfElement.Mo_Name +
                                "</option>"
                        );
                    }
                );
            },
        });
    });
}
