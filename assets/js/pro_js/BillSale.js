BillSale_fetch();
BillSale_filldata();
$(document).on("click", ".BillSaleAdd", function () {
    var displaycard = document.getElementById("BillSaleaction");
    if (displaycard.style.display == "none") {
        document.getElementById("card_BillSaletitle").innerText =
            "Add New Bill";
        getBillNumber();
        displaycard.style.display = "block";
        document.getElementById("card_BillSaletitle").scrollIntoView();
    } else {
        displaycard.style.display = "none";
        document.getElementById("card_BillSaletitle").innerText = "";
        BillSale_cleardata();
        displaycard.style.display = "block";
        document.getElementById("card_BillSaletitle").innerText =
            "Add New Bill";
        getBillNumber();
        document.getElementById("card_BillSaletitle").scrollIntoView();
    }
});
$(document).on("click", ".BillSaleClose", function () {
    var displaycard = document.getElementById("BillSaleaction");
    BillSale_cleardata();
    document.getElementById("card_BillSaletitle").innerText = "";
    displaycard.style.display = "none";
});

$(document).on("click", ".BillSaleSave", function () {
    var BS_ID = document.getElementById("BS_ID").value;

    if (BS_ID == "") {
        BillSale_chechdata();
        if (
            error_BS_BillNumber != "" ||
            error_BS_BillDate != "" ||
            error_BS_Customer != "" ||
            error_BS_Provider != "" ||
            error_BS_StoreName != "" ||
            error_BS_BillType != ""
        ) {
            return false;
        } else {
            BillSale_insert();
            BillSale_cleardata();
        }
    } else {
        BillSale_update();
        BillSale_cleardata();
    }
});

$(document).on("click", ".BillSaleDelete", function () {
    var url = "BillSale/";
    var tabledata = $("#BillSale_data").DataTable();
    var BillSale = tabledata.row($(this).closest("tr")).data();
    var BillSalevalue = BillSale[Object.keys(BillSale)[0]];

    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
    });
    $.ajax({
        type: "DELETE",
        url: url + "destroy",
        data: {
            getid: BillSalevalue,
        },

        success: function (response) {
            alertify.set("notifier", "position", "top-right");
            alertify.success(response.status);
            $("#BillSale_data").DataTable().ajax.reload();
        },
    });
});

$(document).on("click", ".BillSaleEdit", function () {
    var url = "BillSale/";
    var tabledata = $("#BillSale_data").DataTable();
    var BillSale = tabledata.row($(this).closest("tr")).data();
    var BillSalevalue = BillSale[Object.keys(BillSale)[0]];
    $.ajax({
        type: "GET",
        url: url + "show",
        data: {
            getid: BillSalevalue,
        },

        success: function (response) {
            $("#BS_ID").val(response["id"]);
            $("#BS_BillNumber").val(response["BS_BillNumber"]);
            $("#BS_BillDate").val(response["BS_BillDate"]);
            $("#BS_Customer").val(response["BS_Customer"]);
            $("#BS_Provider").val(response["BS_Provider"]);
            $("#BS_BillType").val(response["BS_BillType"]);
            $("#BS_Currency").val(response["BS_Currency"]);
            $("#BS_CurrencyCost").val(response["BS_CurrencyCost"]);
            $("#BS_Credit").val(response["BS_Credit"]);
            $("#BS_Debt").val(response["BS_Debt"]);
            $("#BS_TotalMoney").val(response["BS_TotalMoney"]);
            $("#BS_StoreName").val(response["BS_StoreName"]);
            $("#BS_Notes").val(response["BS_Notes"]);
            $("#BS_State").prop("checked", ()=>{
                if(response["BS_State"]==1) return true;
                else return false;
            });

            var displaycard = document.getElementById("BillSaleaction");
            if (displaycard.style.display == "none") {
                document.getElementById("card_BillSaletitle").innerText =
                    "Edit Data";
                displaycard.style.display = "block";
                document
                    .getElementById("card_BillSaletitle")
                    .scrollIntoView();
            } else {
                displaycard.style.display = "none";
                document.getElementById("card_BillSaletitle").innerText = "";
                document.getElementById("card_BillSaletitle").innerText =
                    "Edit Data";
                displaycard.style.display = "block";
                document
                    .getElementById("card_BillSaletitle")
                    .scrollIntoView();
            }
        },
    });
});

$(document).on("click", ".BillSaleItemsdetails", function () {

    var tabledata = $("#BillSale_data").DataTable();
    var BillSale = tabledata.row($(this).closest("tr")).data();
    var BillSalevalue = BillSale[Object.keys(BillSale)[0]];
    var BillSaleStoreName = BillSale[Object.keys(BillSale)[11]];
    $('#BS_StoreName').val(BillSaleStoreName);
    $('#BSI_FK_BS').val(BillSalevalue);

    var displaycard = document.getElementById("BillSaleItems");
    if (displaycard.style.display == "none") {
        displaycard.style.display = "block";
        BillSaleItems_fetch();
        document
            .getElementById("BillSaleItems")
            .scrollIntoView();
    } else {

        displaycard.style.display = "block";
        BillSaleItems_fetch();
        document.getElementById("BillSaleItems")
            .scrollIntoView();
    }


    // var url = "ordersecondary";
    // var tabledata = $("#BillSale_data").DataTable();
    // var BillSale = tabledata.row($(this).closest("tr")).data();
    // var BillSalevalue = BillSale[Object.keys(BillSale)[0]];

    // $.ajax({
    //     type: "GET",
    //     url: url,
    //     data: {
    //         getid: BillSalevalue,
    //     },

    //     success: function (response) {
    //         var pageName = url;
    //         window.location.href = pageName;
    //     },
    // });
});

function BillSale_cleardata() {
    $("#BS_ID").val("");
    $("#BS_BillNumber").val("");
    $("#BS_BillDate").val("");
    $("#BS_Customer").val("");
    $("#BS_Provider").val("");
    $("#BS_BillType").val("");
    $("#BS_Currency").val("");
    $("#BS_CurrencyCost").val("");
    $("#BS_Credit").val("");
    $("#BS_Debt").val("");
    $("#BS_TotalMoney").val("");
    $("#BS_StoreName").val("");
    $("#BS_Notes").val("");
    $("#BS_State").prop("checked", false);
}

function BillSale_chechdata() {
    if ($.trim($(".BS_BillNumber").val()).length == 0) {
        error_BS_BillNumber = "Required";
        $("#error_BS_BillNumber").text(error_BS_BillNumber);
    } else {
        error_BS_BillNumber = "";
        $("#error_BS_BillNumber").text(error_BS_BillNumber);
    }
    if ($.trim($(".BS_BillDate").val()).length == 0) {
        error_BS_BillDate = "Required";
        $("#error_BS_BillDate").text(error_BS_BillDate);
    } else {
        error_BS_BillDate = "";
        $("#error_BS_BillDate").text(error_BS_BillDate);
    }
    if ($.trim($(".BS_Customer").val()).length == 0) {
        error_BS_Customer = "Required";
        $("#error_BS_Customer").text(error_BS_Customer);
    } else {
        error_BS_Customer = "";
        $("#error_BS_Customer").text(error_BS_Customer);
    }
    if ($.trim($(".BS_Provider").val()).length == 0) {
        error_BS_Provider = "Required";
        $("#error_BS_Provider").text(error_BS_Provider);
    } else {
        error_BS_Provider = "";
        $("#error_BS_Provider").text(error_BS_Provider);
    }
    if ($.trim($(".BS_BillType").val()).length == 0) {
        error_BS_BillType = "Required";
        $("#error_BS_BillType").text(error_BS_BillType);
    } else {
        error_BS_BillType = "";
        $("#error_BS_BillType").text(error_BS_BillType);
    }
    if ($.trim($(".BS_StoreName").val()).length == 0) {
        error_BS_StoreName = "Required";
        $("#error_BS_StoreName").text(error_BS_StoreName);
    } else {
        error_BS_StoreName = "";
        $("#error_BS_StoreName").text(error_BS_StoreName);
    }
}

function BillSale_insert() {
    var url = "BillSale";
    var data = {
        BS_BillNumber: $(".BS_BillNumber").val(),
        BS_BillDate: $(".BS_BillDate").val(),
        BS_Customer: $(".BS_Customer").val(),
        BS_Provider: $(".BS_Provider").val(),
        BS_BillType: $(".BS_BillType").val(),
        BS_Currency: $(".BS_Currency").val(),
        BS_CurrencyCost: $(".BS_CurrencyCost").val(),
        BS_Credit: $(".BS_Credit").val(),
        BS_Debt: $(".BS_Debt").val(),
        BS_TotalMoney: $(".BS_TotalMoney").val(),
        BS_StoreName: $(".BS_StoreName").val(),
        BS_Notes: $(".BS_Notes").val(),
        BS_State: (function () {
            if ($("#BS_State").is(":checked")) {
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
            var tabldata = $("#BillSale_data").DataTable();
            tabldata.ajax.reload();
        },
    });
}

function BillSale_fetch() {
    $(document).ready(function () {
        var url = "BillSale/";
        var data = {
            searchbox: $(".searchbox").val(),
        };
        var tabledata = $("#BillSale_data").DataTable({
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
                    data: "BS_BillNumber",
                },
                {
                    data: "BS_BillDate",
                },
                {
                    data: "BS_BillType",
                },
                {
                    data: "BS_Customer",
                },
                {
                    data: "BS_Provider",
                },
                {
                    data: "BS_StoreName",
                },
                {
                    data: "BS_TotalMoney",
                    render: $.fn.dataTable.render.number(",", ".", 2),
                },
                {
                    data: "BS_Credit",
                    render: $.fn.dataTable.render.number(",", ".", 2),
                },
                {
                    data: "BS_Debt",
                    render: $.fn.dataTable.render.number(",", ".", 2),
                },
                {
                    data: null,
                    render: function (data, type) {
                        return type === "display"
                            ? '<button  class="btn btn-success btn-sm m-1 BillSaleEdit"><i class="bi bi-pen"></i> Edit </button>' +
                                  '<button  class="btn btn-danger btn-sm m-1 BillSaleDelete" disabled><i class="bi bi-trash"></i> Del </button>' +
                                  '<button  class="btn btn-info btn-sm m-1 BillSaleItemsdetails"><i class="bi bi-info"></i> Items </button>' +
                                  '<button  class="btn btn-secondary btn-sm m-1 BillSalingPrint"><i class="bi bi-printer-fill"></i> Print </button>'
                            : data;
                    },
                },
            ],
            columnDefs: [
                {
                    targets: [0, 10],
                    orderable: false,
                },
            ],
            lengthMenu: [
                [ 25, 100],
                [ 25, 100],
            ],
        });
    });
}

function BillSale_update() {
    var url = "BillSale/";
    var data = {
        BS_ID: $(".BS_ID").val(),
        BS_BillNumber: $(".BS_BillNumber").val(),
        BS_BillDate: $(".BS_BillDate").val(),
        BS_Customer: $(".BS_Customer").val(),
        BS_Provider: $(".BS_Provider").val(),
        BS_BillType: $(".BS_BillType").val(),
        BS_Currency: $(".BS_Currency").val(),
        BS_CurrencyCost: $(".BS_CurrencyCost").val(),
        BS_Credit: $(".BS_Credit").val(),
        BS_Debt: $(".BS_Debt").val(),
        BS_TotalMoney: $(".BS_TotalMoney").val(),
        BS_StoreName: $(".BS_StoreName").val(),
        BS_Notes: $(".BS_Notes").val(),
        BS_State: (function () {
            if ($("#BS_State").is(":checked")) {
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
            var tabldata = $("#BillSale_data").DataTable();
            tabldata.ajax.reload();
        },
    });
}
function BillSale_filldata() {
    var url = "BillSalefill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {
                $("#BS_StoreNameBrowser").empty();
                $.each(
                    response.getStories,
                    function (indexInArray, valueOfElement) {
                        $("#BS_StoreNameBrowser").append(
                            '<option value="' +
                                valueOfElement.St_Name + '_' + valueOfElement.St_Code +
                                '">' +
                                valueOfElement.St_Name + '_' + valueOfElement.St_Code +
                                "</option>"
                        );
                    }
                );

                $("#BS_CurrencyBrowser").empty();
                $.each(
                    response.getCurrencyType,
                    function (indexInArray, valueOfElement) {
                        $("#BS_CurrencyBrowser").append(
                            '<option value="' +
                                valueOfElement.Cur_Name +
                                '">' +
                                valueOfElement.Cur_Name +
                                "</option>"
                        );
                    }
                );
            },
        });
    });
}

function getBillNumber(){
    let url="BillSalefill/";
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
    });
    $.ajax({
        method: "GET",
        url: url + "getBillNumber",
        success: function (response) {
            if(response.billNumber == null || response.billNumber == '') $('#BS_BillNumber').val('1');
           else $('#BS_BillNumber').val((response.billNumber.id)+1);
        },
    });

}

$(document).on('click','.BillSalingPrint', function () {
    var tabledata = $("#BillSale_data").DataTable();
    var BillSale = tabledata.row($(this).closest("tr")).data();
    var BillSalevalue = BillSale[Object.keys(BillSale)[0]];

    var url='reportsSalingBillPrint/';
    data = {
        'BillNumber': BillSalevalue,
    };

    $.ajax({
        type: "GET",
        url: url + 'create',
        data: data,
        success: function(response) {

            var a = document.createElement('a');
            a.href = url + 'show';
            window.open(a.href, '_blank');

        }

    });

});
