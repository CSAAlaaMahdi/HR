// BillBuyingItems_fetch();
// BillBuyingItems_filldata();
$(document).on("click", ".BillBuyingItemsAdd", function () {
    var displaycard = document.getElementById("BillBuyingItemsaction");
    if (displaycard.style.display == "none") {
        document.getElementById("card_BillBuyingItemstitle").innerText =
            "Add New Item";
        BillBuyingItems_cleardata();
        BillBuyingItems_filldata();
        displaycard.style.display = "block";
        document.getElementById("card_BillBuyingItemstitle").scrollIntoView();
    } else {
        displaycard.style.display = "none";
        document.getElementById("card_BillBuyingItemstitle").innerText = "";
        BillBuyingItems_cleardata();
        BillBuyingItems_filldata();
        displaycard.style.display = "block";
        document.getElementById("card_BillBuyingItemstitle").innerText =
            "Add New Item";
        document.getElementById("card_BillBuyingItemstitle").scrollIntoView();
    }
});
$(document).on("click", ".BillBuyingItemsClose", function () {
    var displaycard = document.getElementById("BillBuyingItemsaction");
    BillBuyingItems_cleardata();
    document.getElementById("card_BillBuyingItemstitle").innerText = "";
    displaycard.style.display = "none";
});

$(document).on("click", ".BillBuyingItemsSave", function () {
    var BI_ID = document.getElementById("BI_ID").value;

    if (BI_ID == "") {
        BillBuyingItems_chechdata();
        if (
            error_BI_ItemName != "" ||
            error_BI_PartNumber != "" ||
            error_BI_Count != "" ||
            error_BI_CountType != "" ||
            error_BI_UnitPrice != "" ||
            error_BI_TotalMoney != "" ||
            error_BI_Currency != "" ||
            error_BI_UnitPriceC != "" ||
            error_BI_TotalMoneyC != ""
        ) {
            return false;
        } else {

            BillBuyingItems_insert();
            BillBuyingItems_cleardata();
        }
    } else {
        // BillBuyingItems_update();
        // BillBuyingItems_cleardata();
    }
});

$(document).on("click", ".BillBuyingItemsDelete", function () {
    let url = "BillBuyingItems/";
    let tabledata = $("#BillBuyingItems_data").DataTable();
    let BillBuyingItems = tabledata.row($(this).closest("tr")).data();
    let BillBuyingItemsvalue = BillBuyingItems[Object.keys(BillBuyingItems)[0]];
    let BillBuyingnumber = BillBuyingItems[Object.keys(BillBuyingItems)[1]];
    let partnumber = BillBuyingItems[Object.keys(BillBuyingItems)[3]];
    let count = BillBuyingItems[Object.keys(BillBuyingItems)[4]];
    let storeName=$('#BB_StoreName').val();

    let data={
        ID:BillBuyingItemsvalue,
        PartNumber:partnumber,
        Count:count,
        StoreName:storeName,
        BillNumber:BillBuyingnumber,
    }
    // console.log(data);
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
    });
    $.ajax({
        type: "DELETE",
        url: url + "destroy",
        data: data,
        success: function (response) {
            alertify.set("notifier", "position", "top-right");
            alertify.success(response.status);
            $("#BillBuyingItems_data").DataTable().ajax.reload();
            $("#BillBuying_data").DataTable().ajax.reload();
        },
    });
});

$(document).on("click", ".BillBuyingItemsEdit", function () {
    var url = "BillBuyingItems/";
    var tabledata = $("#BillBuyingItems_data").DataTable();
    var BillBuyingItems = tabledata.row($(this).closest("tr")).data();
    var BillBuyingItemsvalue = BillBuyingItems[Object.keys(BillBuyingItems)[0]];
    $.ajax({
        type: "GET",
        url: url + "show",
        data: {
            getid: BillBuyingItemsvalue,
        },

        success: function (response) {
            $("#BI_ID").val(response["id"]);
            $("#BI_FK_BB").val(response["BI_FK_BB"]);
            $("#BI_ItemName").val(response["BI_ItemName"]);
            $("#BI_PartNumber").val(response["BI_PartNumber"]);
            $("#BI_Count").val(response["BI_Count"]);
            $("#BI_CountType").val(response["BI_CountType"]);
            $("#BI_UnitPrice").val(response["BI_UnitPrice"]);
            $("#BI_TotalMoney").val(response["BI_TotalMoney"]);
            $("#BI_Currency").val(response["BI_Currency"]);
            $("#BI_UnitPriceC").val(response["BI_UnitPriceC"]);
            $("#BI_TotalMoneyC").val(response["BI_TotalMoneyC"]);
            var displaycard = document.getElementById("BillBuyingItemsaction");
            if (displaycard.style.display == "none") {
                document.getElementById("card_BillBuyingItemstitle").innerText =
                    "Edit Data";
                displaycard.style.display = "block";
                document
                    .getElementById("card_BillBuyingItemstitle")
                    .scrollIntoView();
            } else {
                displaycard.style.display = "none";
                document.getElementById("card_BillBuyingItemstitle").innerText =
                    "";
                document.getElementById("card_BillBuyingItemstitle").innerText =
                    "Edit Data";
                displaycard.style.display = "block";
                document
                    .getElementById("card_BillBuyingItemstitle")
                    .scrollIntoView();
            }
        },
    });
});

// $(document).on("click", ".BillBuyingItemsItems", function () {
//     var url = "ordersecondary";
//     var tabledata = $("#BillBuyingItems_data").DataTable();
//     var BillBuyingItems = tabledata.row($(this).closest("tr")).data();
//     var BillBuyingItemsvalue = BillBuyingItems[Object.keys(BillBuyingItems)[0]];

//     $.ajax({
//         type: "GET",
//         url: url,
//         data: {
//             getid: BillBuyingItemsvalue,
//         },

//         success: function (response) {
//             var pageName = url;
//             window.location.href = pageName;
//         },
//     });
// });

function BillBuyingItems_cleardata() {
    $("#BI_ID").val("");
    $("#BI_ItemName").val("");
    $("#BI_PartNumber").val("");
    $("#BI_Count").val("");
    $("#BI_CountType").val("");
    $("#BI_UnitPrice").val("");
    $("#BI_TotalMoney").val("");
    $("#BI_Currency").val("");
    $("#BI_UnitPriceC").val("");
    $("#BI_TotalMoneyC").val("");
}

function BillBuyingItems_chechdata() {
    if ($.trim($(".BI_ItemName").val()).length == 0) {
        error_BI_ItemName = "Required";
        $("#error_BI_ItemName").text(error_BI_ItemName);
    } else {
        error_BI_ItemName = "";
        $("#error_BI_ItemName").text(error_BI_ItemName);
    }
    if ($.trim($(".BI_PartNumber").val()).length == 0) {
        error_BI_PartNumber = "Required";
        $("#error_BI_PartNumber").text(error_BI_PartNumber);
    } else {
        error_BI_PartNumber = "";
        $("#error_BI_PartNumber").text(error_BI_PartNumber);
    }
    if ($.trim($(".BI_Count").val()).length == 0) {
        error_BI_Count = "Required";
        $("#error_BI_Count").text(error_BI_Count);
    } else {
        error_BI_Count = "";
        $("#error_BI_Count").text(error_BI_Count);
    }
    if ($.trim($(".BI_UnitPrice").val()).length == 0) {
        error_BI_UnitPrice = "Required";
        $("#error_BI_UnitPrice").text(error_BI_UnitPrice);
    } else {
        error_BI_UnitPrice = "";
        $("#error_BI_UnitPrice").text(error_BI_UnitPrice);
    }
    if ($.trim($(".BI_Currency").val()).length == 0) {
        error_BI_Currency = "Required";
        $("#error_BI_Currency").text(error_BI_Currency);
    } else {
        error_BI_Currency = "";
        $("#error_BI_Currency").text(error_BI_Currency);
    }
    if ($.trim($(".BI_TotalMoney").val()).length == 0) {
        error_BI_TotalMoney = "Required";
        $("#error_BI_TotalMoney").text(error_BI_TotalMoney);
    } else {
        error_BI_TotalMoney = "";
        $("#error_BI_TotalMoney").text(error_BI_TotalMoney);
    }
    if ($.trim($(".BI_UnitPriceC").val()).length == 0) {
        error_BI_UnitPriceC = "Required";
        $("#error_BI_UnitPriceC").text(error_BI_UnitPriceC);
    } else {
        error_BI_UnitPriceC = "";
        $("#error_BI_UnitPriceC").text(error_BI_UnitPriceC);
    }
    if ($.trim($(".BI_TotalMoneyC").val()).length == 0) {
        error_BI_TotalMoneyC = "Required";
        $("#error_BI_TotalMoneyC").text(error_BI_TotalMoneyC);
    } else {
        error_BI_TotalMoneyC = "";
        $("#error_BI_TotalMoneyC").text(error_BI_TotalMoneyC);
    }
    if ($.trim($(".BI_CountType").val()).length == 0) {
        error_BI_CountType = "Required";
        $("#error_BI_CountType").text(error_BI_CountType);
    } else {
        error_BI_CountType = "";
        $("#error_BI_CountType").text(error_BI_CountType);
    }
}

function BillBuyingItems_insert() {
    var url = "BillBuyingItems";

    var data = {
        BB_StoreName: $(".BB_StoreName").val(),
        BI_FK_BB: $(".BI_FK_BB").val(),
        BI_ItemName: $(".BI_ItemName").val(),
        BI_PartNumber: $(".BI_PartNumber").val(),
        BI_Count: $(".BI_Count").val(),
        BI_CountType: $(".BI_CountType").val(),
        BI_UnitPrice: $(".BI_UnitPrice").val(),
        BI_TotalMoney: $(".BI_TotalMoney").val(),
        BI_Currency: $(".BI_Currency").val(),
        BI_UnitPriceC: $(".BI_UnitPriceC").val(),
        BI_TotalMoneyC: $(".BI_TotalMoneyC").val(),
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
            var tabldata = $("#BillBuyingItems_data").DataTable();
            tabldata.ajax.reload();

            var tabldata2 = $("#BillBuying_data").DataTable();
            tabldata2.ajax.reload();
        },
    });
}

function BillBuyingItems_fetch() {
    $(document).ready(function () {
        var url = "BillBuyingItems/";
        var data = {
            BB_ID: $(".BI_FK_BB").val(),
        };
        var tabledata = $("#BillBuyingItems_data").DataTable({
            destroy: true,
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
                    data: "BI_ItemName",
                },
                {
                    data: "BI_PartNumber",
                },
                {
                    data: "BI_Count",
                },
                {
                    data: "BI_UnitPrice",
                    render: $.fn.dataTable.render.number(",", ".", 2),
                },
                {
                    data: "BI_TotalMoney",
                    render: $.fn.dataTable.render.number(",", ".", 2),
                },
                {
                    data: "BI_Currency",
                },
                {
                    data: "BI_UnitPriceC",
                    render: $.fn.dataTable.render.number(",", ".", 0),
                },
                {
                    data: "BI_TotalMoneyC",
                    render: $.fn.dataTable.render.number(",", ".", 0),
                },
                {
                    data: null,
                    render: function (data, type) {
                        return type === "display"
                            ? '<button  class="btn btn-success btn-sm m-1 BillBuyingItemsEdit"><i class="bi bi-pen"></i> Edit </button>' +
                                  '<button  class="btn btn-danger btn-sm m-1 BillBuyingItemsDelete"><i class="bi bi-trash"></i> Del </button>'
                            : data;
                    },
                },
            ],
            columnDefs: [
                {
                    targets: [0, 3, 4, 5, 6, 7, 8, 9],
                    orderable: false,
                },
            ],
            lengthMenu: [
                [50, 100],
                [50, 100],
            ],
        });
    });
}

function BillBuyingItems_update() {
    var url = "BillBuyingItems/";
    var data = {
        BI_ID: $(".BI_ID").val(),
        BI_FK_BB: $(".BI_FK_BB").val(),
        BI_ItemName: $(".BI_ItemName").val(),
        BI_PartNumber: $(".BI_PartNumber").val(),
        BI_Count: $(".BI_Count").val(),
        BI_CountType: $(".BI_CountType").val(),
        BI_UnitPrice: $(".BI_UnitPrice").val(),
        BI_TotalMoney: $(".BI_TotalMoney").val(),
        BI_Currency: $(".BI_Currency").val(),
        BI_UnitPriceC: $(".BI_UnitPriceC").val(),
        BI_TotalMoneyC: $(".BI_TotalMoneyC").val(),
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
            var tabldata = $("#BillBuyingItems_data").DataTable();
            tabldata.ajax.reload();
        },
    });
}
function BillBuyingItems_filldata() {
    var url = "BillBuyingItemsfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {
                $("#BI_ItemNameBrowser").empty();
                $.each(
                    response.getItemName,
                    function (indexInArray, valueOfElement) {
                        $("#BI_ItemNameBrowser").append(
                            '<option value="' +
                                valueOfElement.IT_Name +
                                '">' +
                                valueOfElement.IT_Name +
                                "</option>"
                        );
                    }
                );

                $("#BI_PartNumberBrowser").empty();
                $.each(
                    response.getPartNumber,
                    function (indexInArray, valueOfElement) {
                        $("#BI_PartNumberBrowser").append(
                            '<option value="' +
                                valueOfElement.IT_PartNumber +
                                '">' +
                                valueOfElement.IT_PartNumber +
                                "</option>"
                        );
                    }
                );
                $("#BI_CurrencyBrowser").empty();
                $.each(
                    response.getCurrency,
                    function (indexInArray, valueOfElement) {
                        $("#BI_CurrencyBrowser").append(
                            '<option value="' +
                                valueOfElement.Cur_Name +
                                '">' +
                                valueOfElement.Cur_Name +
                                "</option>"
                        );
                    }
                );
                $("#BI_CountTypeBrowser").empty();
                $.each(
                    response.getUnits,
                    function (indexInArray, valueOfElement) {
                        $("#BI_CountTypeBrowser").append(
                            '<option value="' +
                                valueOfElement.Ui_Name +
                                '">' +
                                valueOfElement.Ui_Name +
                                "</option>"
                        );
                    }
                );
            },
        });
    });
}

$(document).on("click", ".BillBuyingItemsCloseAll", function () {
    var displaycard = document.getElementById("BillBuyingItemsaction");
    var displaycard2 = document.getElementById("BillBuyingItems");
    if (displaycard.style.display == "block") {
        displaycard.style.display = "none";
    }
    if (displaycard2.style.display == "block") {
        displaycard2.style.display = "none";
    }
    document.getElementById("BillBuying_data").scrollIntoView();
});

$("#BI_UnitPrice").keyup(function (e) {
    let count = Number($("#BI_Count").val());
    let unitprice = Number($("#BI_UnitPrice").val());
    let totalMoney = count * unitprice;
    $("#BI_TotalMoney").val(totalMoney);
});
$("#BI_UnitPriceC").keyup(function (e) {
    let count = Number($("#BI_UnitPrice").val());
    let unitprice = Number($("#BI_UnitPriceC").val());
    let totalMoney = count * unitprice;
    $("#BI_TotalMoneyC").val(totalMoney);
});

$(document).ready(function () {
    $("#BI_UnitPrice").on("keypress", function (event) {
        var regex = new RegExp("^[.0-9]+$");
        var key = String.fromCharCode(
            !event.charCode ? event.which : event.charCode
        );
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });
    $("#BI_UnitPriceC").on("keypress", function (event) {
        var regex = new RegExp("^[.0-9]+$");
        var key = String.fromCharCode(
            !event.charCode ? event.which : event.charCode
        );
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });
    $("#BI_Count").on("keypress", function (event) {
        var regex = new RegExp("^[.0-9]+$");
        var key = String.fromCharCode(
            !event.charCode ? event.which : event.charCode
        );
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });
});

$(document).ready(function () {
        $('#BI_PartNumber').keyup(function (e) {
        checkPartNumber();
    });
});




const checkPartNumber =()=>{

    let partNumber = ($("#BI_PartNumber").val()).trim();

    if (partNumber != "") {
        var data = {
            getPartNumber: partNumber,
        };
        $.ajaxSetup({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr(
                    "content"
                ),
            },
        });
        $.ajax({
            type: "GET",
            url: 'BillBuyingItemscheck/checkItemIfExist',
            data: data,
            success: function (response) {

                if(response.getPartNumber.length ==0){
                    $('#error_BI_PartNumber').text('This Part Number Does not Exist');
                    $('#BI_PartNumber').css({
                        'background-color':'red',
                    })
                }else{
                    $('#error_BI_PartNumber').text('');
                    $('#BI_PartNumber').css({
                        'background-color':'white',
                    })
                    $('#BI_ItemName').val(response.getPartNumber[0].IT_Name);
                }

            },
        });
    } else {
        $('#error_BI_PartNumber').text('');
        $('#BI_PartNumber').css({
            'background-color':'white',
        })
    }


}
// function getBillNumber(){
//     let url="BillBuyingItemsfill/";
//     $.ajaxSetup({
//         headers: {
//             "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
//         },
//     });
//     $.ajax({
//         method: "GET",
//         url: url + "getBillNumber",
//         success: function (response) {
//            $('#BI_ItemName').val((response.billNumber.id)+1);
//         },
//     });

// }
