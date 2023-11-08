ordersecondary_fetch();
ordersecondary_filldata();
$(document).on("click", ".ordersecondaryAdd", function () {
    var displaycard = document.getElementById("ordersecondaryaction");
    if (displaycard.style.display == "none") {
        document.getElementById("card_ordersecondarytitle").innerText =
            "Add New Item";
        displaycard.style.display = "block";
        document.getElementById("card_ordersecondarytitle").scrollIntoView();
    } else {
        displaycard.style.display = "none";
        document.getElementById("card_ordersecondarytitle").innerText = "";
        ordersecondary_cleardata();
        displaycard.style.display = "block";
        document.getElementById("card_ordersecondarytitle").innerText =
            "Add New Item";
        document.getElementById("card_ordersecondarytitle").scrollIntoView();
    }
});
$(document).on("click", ".ordersecondaryClose", function () {
    var displaycard = document.getElementById("ordersecondaryaction");
    ordersecondary_cleardata();
    document.getElementById("card_ordersecondarytitle").innerText = "";
    displaycard.style.display = "none";
    document.getElementById("ordersecondary_data").scrollIntoView();

});

$(document).on("click", ".ordersecondarySave", function () {
    var Ors_ID = document.getElementById("Ors_ID").value;

    if (Ors_ID == "") {
        ordersecondary_chechdata();
        if (
            error_Ors_ItemName != "" ||
            error_Ors_PartNumber != ""
        ) {
            return false;
        } else {
            ordersecondary_insert();
            ordersecondary_cleardata();
        }
    } else {
        ordersecondary_update();
        ordersecondary_cleardata();
    }
});

$(document).on("click", ".ordersecondaryDelete", function () {
    var url = "ordersecondary/";
    var tabledata = $("#ordersecondary_data").DataTable();
    var ordersecondary = tabledata.row($(this).closest("tr")).data();
    var ordersecondaryvalue = ordersecondary[Object.keys(ordersecondary)[0]];

    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
    });
    $.ajax({
        type: "DELETE",
        url: url + "destroy",
        data: {
            getid: ordersecondaryvalue,
        },

        success: function (response) {
            alertify.set("notifier", "position", "top-right");
            alertify.success(response.status);
            $("#ordersecondary_data").DataTable().ajax.reload();
        },
    });
});

$(document).on("click", ".ordersecondaryEdit", function () {
    var url = "ordersecondary/";
    var tabledata = $("#ordersecondary_data").DataTable();
    var ordersecondary = tabledata.row($(this).closest("tr")).data();
    var ordersecondaryvalue = ordersecondary[Object.keys(ordersecondary)[0]];
    $.ajax({
        type: "GET",
        url: url + "show",
        data: {
            getid: ordersecondaryvalue,
        },

        success: function (response) {
            $("#Ors_ID").val(response["id"]);
            $("#Ors_FK_Orm").val(response["Ors_FK_Orm"]);
            $("#Ors_ItemName").val(response["Ors_ItemName"]);
            $("#Ors_PartNumber").val(response["Ors_PartNumber"]);
            $("#Ors_Quantity").val(response["Ors_Quantity"]);
            $("#Ors_Notes").val(response["Ors_Notes"]);

            var displaycard = document.getElementById("ordersecondaryaction");
            if (displaycard.style.display == "none") {
                document.getElementById("card_ordersecondarytitle").innerText =
                    "Edit Data";
                displaycard.style.display = "block";
                document.getElementById("card_ordersecondarytitle").scrollIntoView();
            } else {
                displaycard.style.display = "none";
                document.getElementById("card_ordersecondarytitle").innerText = "";
                document.getElementById("card_ordersecondarytitle").innerText =
                    "Edit Data";
                displaycard.style.display = "block";
                document.getElementById("card_ordersecondarytitle").scrollIntoView();
            }
        },
    });
});




function ordersecondary_cleardata() {
    $("#Ors_ID").val("");
    $("#Ors_ItemName").val("");
    $("#Ors_PartNumber").val("");
    $("#Ors_Quantity").val("");
    $("#Ors_Notes").val("");

}

function ordersecondary_chechdata() {
    if ($.trim($(".Ors_ItemName").val()).length == 0) {
        error_Ors_ItemName = "Required";
        $("#error_Ors_ItemName").text(error_Ors_ItemName);
    } else {
        error_Ors_ItemName = "";
        $("#error_Ors_ItemName").text(error_Ors_ItemName);
    }
    if ($.trim($(".Ors_PartNumber").val()).length == 0) {
        error_Ors_PartNumber = "Required";
        $("#error_Ors_PartNumber").text(error_Ors_PartNumber);
    } else {
        error_Ors_PartNumber = "";
        $("#error_Ors_PartNumber").text(error_Ors_PartNumber);
    }

}

function ordersecondary_insert() {
    var url = "ordersecondary";
    var data = {
        Ors_FK_Orm: $(".Ors_FK_Orm").val(),
        Ors_ItemName: $(".Ors_ItemName").val(),
        Ors_PartNumber: $(".Ors_PartNumber").val(),
        Ors_Quantity: $(".Ors_Quantity").val(),
        Ors_Notes: $(".Ors_Notes").val(),

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
            var tabldata = $("#ordersecondary_data").DataTable();
            tabldata.ajax.reload();
        },
    });
}

function ordersecondary_fetch() {
    $(document).ready(function () {

        var url = "ordersecondary/";
        var data = {
            Ors_FK_Orm: $("#Ors_FK_Orm").val(),
        };
       
        var tabledata = $("#ordersecondary_data").DataTable({
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
                    data: "Ors_ItemName",
                },
                {
                    data: "Ors_PartNumber",
                },
                {
                    data: "Ors_Quantity",
                },
                {
                    data: null,
                    render: function (data, type) {
                        return type === "display"
                            ? '<button  class="btn btn-success btn-sm m-1 ordersecondaryEdit"><i class="bi bi-pen"></i> Edit </button>' +
                                  '<button  class="btn btn-danger btn-sm m-1 ordersecondaryDelete"><i class="bi bi-trash"></i> Del </button>'
                            : data;
                    },
                },
            ],
            columnDefs: [
                {
                    targets: [0, 4],
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

function ordersecondary_update() {
    var url = "ordersecondary/";
    var data = {
        Ors_ID: $(".Ors_ID").val(),
        Ors_FK_Orm: $(".Ors_FK_Orm").val(),
        Ors_ItemName: $(".Ors_ItemName").val(),
        Ors_PartNumber: $(".Ors_PartNumber").val(),
        Ors_Quantity: $(".Ors_Quantity").val(),
        Ors_Notes: $(".Ors_Notes").val(),
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
            var tabldata = $("#ordersecondary_data").DataTable();
            tabldata.ajax.reload();
        },
    });
}
function ordersecondary_filldata() {
    var url = "ordersecondaryfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {
                $("#Ors_ItemNameBrowser").empty();
                $.each(
                    response.getItemName,
                    function (indexInArray, valueOfElement) {
                        $("#Ors_ItemNameBrowser").append(
                            '<option value="' +
                                valueOfElement.Ors_ItemName +
                                '">' +
                                valueOfElement.Ors_ItemName +
                                "</option>"
                        );
                    }
                );

                $("#Ors_PartNumberBrowser").empty();
                $.each(
                    response.getPartNumber,
                    function (indexInArray, valueOfElement) {
                        $("#Ors_PartNumberBrowser").append(
                            '<option value="' +
                                valueOfElement.Ors_PartNumber +
                                '">' +
                                valueOfElement.Ors_PartNumber +
                                "</option>"
                        );
                    }
                );
                //  $('#Ors_FK_Orm').val(response.IDordermain);
            },
        });
    });
}
