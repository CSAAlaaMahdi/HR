BillBuying_fetch();
BillBuying_filldata();
$(document).on("click", ".BillBuyingAdd", function () {
    var displaycard = document.getElementById("BillBuyingaction");
    if (displaycard.style.display == "none") {
        document.getElementById("card_BillBuyingtitle").innerText =
            "Add New Bill";
        getBillNumber();
        displaycard.style.display = "block";
        document.getElementById("card_BillBuyingtitle").scrollIntoView();
    } else {
        displaycard.style.display = "none";
        document.getElementById("card_BillBuyingtitle").innerText = "";
        BillBuying_cleardata();
        displaycard.style.display = "block";
        document.getElementById("card_BillBuyingtitle").innerText =
            "Add New Bill";
        getBillNumber();
        document.getElementById("card_BillBuyingtitle").scrollIntoView();
    }
});
$(document).on("click", ".BillBuyingClose", function () {
    var displaycard = document.getElementById("BillBuyingaction");
    BillBuying_cleardata();
    document.getElementById("card_BillBuyingtitle").innerText = "";
    displaycard.style.display = "none";
});

$(document).on("click", ".BillBuyingSave", function () {
    var BB_ID = document.getElementById("BB_ID").value;

    if (BB_ID == "") {
        BillBuying_chechdata();
        if (
            error_BB_BillNumber != "" ||
            error_BB_BillDate != "" ||
            error_BB_Customer != "" ||
            error_BB_Provider != "" ||
            error_BB_StoreName != "" ||
            error_BB_BillType != ""
        ) {
            return false;
        } else {
            BillBuying_insert();
            BillBuying_cleardata();
        }
    } else {
        BillBuying_update();
        BillBuying_cleardata();
    }
});

$(document).on("click", ".BillBuyingDelete", function () {
    var url = "BillBuying/";
    var tabledata = $("#BillBuying_data").DataTable();
    var BillBuying = tabledata.row($(this).closest("tr")).data();
    var BillBuyingvalue = BillBuying[Object.keys(BillBuying)[0]];

    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
    });
    $.ajax({
        type: "DELETE",
        url: url + "destroy",
        data: {
            getid: BillBuyingvalue,
        },

        success: function (response) {
            alertify.set("notifier", "position", "top-right");
            alertify.success(response.status);
            $("#BillBuying_data").DataTable().ajax.reload();
        },
    });
});

$(document).on("click", ".BillBuyingEdit", function () {
    var url = "BillBuying/";
    var tabledata = $("#BillBuying_data").DataTable();
    var BillBuying = tabledata.row($(this).closest("tr")).data();
    var BillBuyingvalue = BillBuying[Object.keys(BillBuying)[0]];
    $.ajax({
        type: "GET",
        url: url + "show",
        data: {
            getid: BillBuyingvalue,
        },

        success: function (response) {

           
            $("#BB_ID").val(response["id"]);
            $("#BB_BillNumber").val(response["BB_BillNumber"]);
            $("#BB_BillDate").val(response["BB_BillDate"]);
            $("#BB_Customer").val(response["BB_Customer"]);
            $("#BB_Provider").val(response["BB_Provider"]);
            $("#BB_BillType").val(response["BB_BillType"]);
            $("#BB_Currency").val(response["BB_Currency"]);
            $("#BB_CurrencyCost").val(response["BB_CurrencyCost"]);
            $("#BB_Credit").val(response["BB_Credit"]);
            $("#BB_Debt").val(response["BB_Debt"]);
            $("#BB_TotalMoney").val(response["BB_TotalMoney"]);
            $("#BB_StoreName").val(response["BB_StoreName"]);
            $("#BB_Notes").val(response["BB_Notes"]);
            $("#BB_State").prop("checked", ()=>{
                if(response["BB_State"]==1) return true;
                else return false;
            });

            var displaycard = document.getElementById("BillBuyingaction");
            if (displaycard.style.display == "none") {
                document.getElementById("card_BillBuyingtitle").innerText =
                    "Edit Data";
                displaycard.style.display = "block";
                document
                    .getElementById("card_BillBuyingtitle")
                    .scrollIntoView();
            } else {
                displaycard.style.display = "none";
                document.getElementById("card_BillBuyingtitle").innerText = "";
                document.getElementById("card_BillBuyingtitle").innerText =
                    "Edit Data";
                displaycard.style.display = "block";
                document
                    .getElementById("card_BillBuyingtitle")
                    .scrollIntoView();
            }
        },
    });
});

$(document).on("click", ".BillBuyingItemsdetails", function () {

    var tabledata = $("#BillBuying_data").DataTable();
    var BillBuying = tabledata.row($(this).closest("tr")).data();
    var BillBuyingvalue = BillBuying[Object.keys(BillBuying)[0]];
    var BillBuyingStoreName = BillBuying[Object.keys(BillBuying)[11]];
    $('#BB_StoreName').val(BillBuyingStoreName);
    $('#BI_FK_BB').val(BillBuyingvalue);

    var displaycard = document.getElementById("BillBuyingItems");
    if (displaycard.style.display == "none") {
        displaycard.style.display = "block";
        BillBuyingItems_fetch();
        document
            .getElementById("BillBuyingItems")
            .scrollIntoView();
    } else {

        displaycard.style.display = "block";
        BillBuyingItems_fetch();
        document.getElementById("BillBuyingItems")
            .scrollIntoView();
    }


    // var url = "ordersecondary";
    // var tabledata = $("#BillBuying_data").DataTable();
    // var BillBuying = tabledata.row($(this).closest("tr")).data();
    // var BillBuyingvalue = BillBuying[Object.keys(BillBuying)[0]];

    // $.ajax({
    //     type: "GET",
    //     url: url,
    //     data: {
    //         getid: BillBuyingvalue,
    //     },

    //     success: function (response) {
    //         var pageName = url;
    //         window.location.href = pageName;
    //     },
    // });
});

function BillBuying_cleardata() {
    $("#BB_ID").val("");
    $("#BB_BillNumber").val("");
    $("#BB_BillDate").val("");
    $("#BB_Customer").val("");
    $("#BB_Provider").val("");
    $("#BB_BillType").val("");
    $("#BB_Currency").val("");
    $("#BB_CurrencyCost").val("");
    $("#BB_Credit").val("");
    $("#BB_Debt").val("");
    $("#BB_TotalMoney").val("");
    $("#BB_StoreName").val("");
    $("#BB_Notes").val("");
    $("#BB_State").prop("checked", false);
}

function BillBuying_chechdata() {
    if ($.trim($(".BB_BillNumber").val()).length == 0) {
        error_BB_BillNumber = "Required";
        $("#error_BB_BillNumber").text(error_BB_BillNumber);
    } else {
        error_BB_BillNumber = "";
        $("#error_BB_BillNumber").text(error_BB_BillNumber);
    }
    if ($.trim($(".BB_BillDate").val()).length == 0) {
        error_BB_BillDate = "Required";
        $("#error_BB_BillDate").text(error_BB_BillDate);
    } else {
        error_BB_BillDate = "";
        $("#error_BB_BillDate").text(error_BB_BillDate);
    }
    if ($.trim($(".BB_Customer").val()).length == 0) {
        error_BB_Customer = "Required";
        $("#error_BB_Customer").text(error_BB_Customer);
    } else {
        error_BB_Customer = "";
        $("#error_BB_Customer").text(error_BB_Customer);
    }
    if ($.trim($(".BB_Provider").val()).length == 0) {
        error_BB_Provider = "Required";
        $("#error_BB_Provider").text(error_BB_Provider);
    } else {
        error_BB_Provider = "";
        $("#error_BB_Provider").text(error_BB_Provider);
    }
    if ($.trim($(".BB_BillType").val()).length == 0) {
        error_BB_BillType = "Required";
        $("#error_BB_BillType").text(error_BB_BillType);
    } else {
        error_BB_BillType = "";
        $("#error_BB_BillType").text(error_BB_BillType);
    }
    if ($.trim($(".BB_StoreName").val()).length == 0) {
        error_BB_StoreName = "Required";
        $("#error_BB_StoreName").text(error_BB_StoreName);
    } else {
        error_BB_StoreName = "";
        $("#error_BB_StoreName").text(error_BB_StoreName);
    }
}

function BillBuying_insert() {
    var url = "BillBuying";
    var data = {
        BB_BillNumber: $(".BB_BillNumber").val(),
        BB_BillDate: $(".BB_BillDate").val(),
        BB_Customer: $(".BB_Customer").val(),
        BB_Provider: $(".BB_Provider").val(),
        BB_BillType: $(".BB_BillType").val(),
        BB_Currency: $(".BB_Currency").val(),
        BB_CurrencyCost: $(".BB_CurrencyCost").val(),
        BB_Credit: $(".BB_Credit").val(),
        BB_Debt: $(".BB_Debt").val(),
        BB_TotalMoney: $(".BB_TotalMoney").val(),
        BB_StoreName: $(".BB_StoreName").val(),
        BB_Notes: $(".BB_Notes").val(),
        BB_State: (function () {
            if ($("#BB_State").is(":checked")) {
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
            var tabldata = $("#BillBuying_data").DataTable();
            tabldata.ajax.reload();
        },
    });
}

function BillBuying_fetch() {
    $(document).ready(function () {
        var url = "BillBuying/";
        var data = {
            searchbox: $(".searchbox").val(),
        };
        var tabledata = $("#BillBuying_data").DataTable({
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
                    data: "BB_BillNumber",
                },
                {
                    data: "BB_BillDate",
                },
                {
                    data: "BB_BillType",
                },
                {
                    data: "BB_Customer",
                },
                {
                    data: "BB_Provider",
                },
                {
                    data: "BB_StoreName",
                },
                {
                    data: "BB_TotalMoney",
                },
                {
                    data: "BB_Credit",
                },
                {
                    data: "BB_Debt",
                },
                {
                    data: null,
                    render: function (data, type) {
                        return type === "display"
                            ? '<button  class="btn btn-success btn-sm m-1 BillBuyingEdit"><i class="bi bi-pen"></i> Edit </button>' +
                                  '<button  class="btn btn-danger btn-sm m-1 BillBuyingDelete" disabled><i class="bi bi-trash"></i> Del </button>' +
                                  '<button  class="btn btn-info btn-sm m-1 BillBuyingItemsdetails"><i class="bi bi-info"></i> Items </button>' +
                                  '<button  class="btn btn-secondary btn-sm m-1 BillBuyingPrint"><i class="bi bi-printer-fill"></i> Print </button>'
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

function BillBuying_update() {
    var url = "BillBuying/";
    var data = {
        BB_ID: $(".BB_ID").val(),
        BB_BillNumber: $(".BB_BillNumber").val(),
        BB_BillDate: $(".BB_BillDate").val(),
        BB_Customer: $(".BB_Customer").val(),
        BB_Provider: $(".BB_Provider").val(),
        BB_BillType: $(".BB_BillType").val(),
        BB_Currency: $(".BB_Currency").val(),
        BB_CurrencyCost: $(".BB_CurrencyCost").val(),
        BB_Credit: $(".BB_Credit").val(),
        BB_Debt: $(".BB_Debt").val(),
        BB_TotalMoney: $(".BB_TotalMoney").val(),
        BB_StoreName: $(".BB_StoreName").val(),
        BB_Notes: $(".BB_Notes").val(),
        BB_State: (function () {
            if ($("#BB_State").is(":checked")) {
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
            var tabldata = $("#BillBuying_data").DataTable();
            tabldata.ajax.reload();
        },
    });
}
function BillBuying_filldata() {
    var url = "BillBuyingfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {
                $("#BB_StoreNameBrowser").empty();
                $.each(
                    response.getStories,
                    function (indexInArray, valueOfElement) {
                        $("#BB_StoreNameBrowser").append(
                            '<option value="' +
                                valueOfElement.St_Name + '_' + valueOfElement.St_Code +
                                '">' +
                                valueOfElement.St_Name + '_' + valueOfElement.St_Code +
                                "</option>"
                        );
                    }
                );

                $("#BB_CurrencyBrowser").empty();
                $.each(
                    response.getCurrencyType,
                    function (indexInArray, valueOfElement) {
                        $("#BB_CurrencyBrowser").append(
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
    let url="BillBuyingfill/";
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
    });
    $.ajax({
        method: "GET",
        url: url + "getBillNumber",
        success: function (response) {
            if(response.billNumber == null || response.billNumber == '') $('#BB_BillNumber').val('1');
           else $('#BB_BillNumber').val((response.billNumber.id)+1);
        },
    });

}

$(document).on('click','.BillBuyingPrint', function () {
    var tabledata = $("#BillBuying_data").DataTable();
    var BillBuying = tabledata.row($(this).closest("tr")).data();
    var BillBuyingvalue = BillBuying[Object.keys(BillBuying)[0]];

    var url='reportsBuyingBillPrint/';
    data = {
        'BillNumberID': BillBuyingvalue,
    };

    $.ajax({
        type: "GET",
        url: url + 'create',
        data: data,
        success: function(response) {

            var a = document.createElement('a');
            a.href = url + 'show';
            console.log(response);
            window.open(a.href, '_blank');

        }

    });

});

