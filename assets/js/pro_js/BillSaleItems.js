// BillSaleItems_fetch();
// BillSaleItems_filldata();
$(document).on("click", ".BillSaleItemsAdd", function () {
    var displaycard = document.getElementById("BillSaleItemsaction");
    if (displaycard.style.display == "none") {
        document.getElementById("card_BillSaleItemstitle").innerText =
            "Add New Item";
        BillSaleItems_cleardata();
        BillSaleItems_filldata();
        displaycard.style.display = "block";
        document.getElementById("card_BillSaleItemstitle").scrollIntoView();
    } else {
        displaycard.style.display = "none";
        document.getElementById("card_BillSaleItemstitle").innerText = "";
        BillSaleItems_cleardata();
        BillSaleItems_filldata();
        displaycard.style.display = "block";
        document.getElementById("card_BillSaleItemstitle").innerText =
            "Add New Item";
        document.getElementById("card_BillSaleItemstitle").scrollIntoView();
    }
});
$(document).on("click", ".BillSaleItemsClose", function () {
    var displaycard = document.getElementById("BillSaleItemsaction");
    BillSaleItems_cleardata();
    document.getElementById("card_BillSaleItemstitle").innerText = "";
    displaycard.style.display = "none";
});

$(document).on("click", ".BillSaleItemsSave", function () {
    var BSI_ID = document.getElementById("BSI_ID").value;

    if (BSI_ID == "") {
        BillSaleItems_chechdata();
        if (
            error_BSI_ItemName != "" ||
            error_BSI_C_PartNumber != "" ||
            error_BSI_Count != "" ||
            error_BSI_CountType != "" ||
            error_BSI_UnitPrice != "" ||
            error_BSI_TotalMoney != ""
        ) {
            return false;
        } else {

            BillSaleItems_insert();
            BillSaleItems_cleardata();
        }
    } else {
        // BillSaleItems_update();
        // BillSaleItems_cleardata();
    }
});

$(document).on("click", ".BillSaleItemsDelete", function () {
    let url = "BillSaleItems/";
    let tabledata = $("#BillSaleItems_data").DataTable();
    let BillSaleItems = tabledata.row($(this).closest("tr")).data();
    let BillSaleItemsvalue = BillSaleItems[Object.keys(BillSaleItems)[0]];
    let BillSalevalue = BillSaleItems[Object.keys(BillSaleItems)[1]];
    let partnumber = BillSaleItems[Object.keys(BillSaleItems)[3]];
    let count = BillSaleItems[Object.keys(BillSaleItems)[4]];
    let storeName=$('#BS_StoreName').val();

    let data={
        ID:BillSaleItemsvalue,
        PartNumber:partnumber,
        Count:count,
        StoreName:storeName,
        BillNumber:BillSalevalue,
    }

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
            $("#BillSaleItems_data").DataTable().ajax.reload();
            $("#BillSale_data").DataTable().ajax.reload();
        },
    });
});

$(document).on("click", ".BillSaleItemsEdit", function () {
    var url = "BillSaleItems/";
    var tabledata = $("#BillSaleItems_data").DataTable();
    var BillSaleItems = tabledata.row($(this).closest("tr")).data();
    var BillSaleItemsvalue = BillSaleItems[Object.keys(BillSaleItems)[0]];
    $.ajax({
        type: "GET",
        url: url + "show",
        data: {
            getid: BillSaleItemsvalue,
        },

        success: function (response) {
            $("#BSI_ID").val(response["id"]);
            $("#BSI_FK_BS").val(response["BSI_FK_BS"]);
            $("#BSI_ItemName").val(response["BSI_ItemName"]);
            $("#BSI_C_PartNumber").val(response["BSI_C_PartNumber"]);
            $("#BSI_Count").val(response["BSI_Count"]);
            $("#BSI_CountType").val(response["BSI_CountType"]);
            $("#BSI_UnitPrice").val(response["BSI_UnitPrice"]);
            $("#BSI_TotalMoney").val(response["BSI_TotalMoney"]);
            var displaycard = document.getElementById("BillSaleItemsaction");
            if (displaycard.style.display == "none") {
                document.getElementById("card_BillSaleItemstitle").innerText =
                    "Edit Data";
                displaycard.style.display = "block";
                document
                    .getElementById("card_BillSaleItemstitle")
                    .scrollIntoView();
            } else {
                displaycard.style.display = "none";
                document.getElementById("card_BillSaleItemstitle").innerText =
                    "";
                document.getElementById("card_BillSaleItemstitle").innerText =
                    "Edit Data";
                displaycard.style.display = "block";
                document
                    .getElementById("card_BillSaleItemstitle")
                    .scrollIntoView();
            }
        },
    });
});

// $(document).on("click", ".BillSaleItemsItems", function () {
//     var url = "ordersecondary";
//     var tabledata = $("#BillSaleItems_data").DataTable();
//     var BillSaleItems = tabledata.row($(this).closest("tr")).data();
//     var BillSaleItemsvalue = BillSaleItems[Object.keys(BillSaleItems)[0]];

//     $.ajax({
//         type: "GET",
//         url: url,
//         data: {
//             getid: BillSaleItemsvalue,
//         },

//         success: function (response) {
//             var pageName = url;
//             window.location.href = pageName;
//         },
//     });
// });

function BillSaleItems_cleardata() {
    $("#BSI_ID").val("");
    $("#BSI_ItemName").val("");
    $("#BSI_C_PartNumber").val("");
    $("#BSI_Count").val("");
    $("#BSI_Count").removeAttr('placeholder');
    $("#BSI_CountType").val("");
    $("#BSI_UnitPrice").val("");
    $("#BSI_TotalMoney").val("");
}

function BillSaleItems_chechdata() {
    if ($.trim($(".BSI_ItemName").val()).length == 0) {
        error_BSI_ItemName = "Required";
        $("#error_BSI_ItemName").text(error_BSI_ItemName);
    } else {
        error_BSI_ItemName = "";
        $("#error_BSI_ItemName").text(error_BSI_ItemName);
    }
    if ($.trim($(".BSI_C_PartNumber").val()).length == 0) {
        error_BSI_C_PartNumber = "Required";
        $("#error_BSI_C_PartNumber").text(error_BSI_C_PartNumber);
    } else {
        error_BSI_C_PartNumber = "";
        $("#error_BSI_C_PartNumber").text(error_BSI_C_PartNumber);
    }
    if ($.trim($(".BSI_Count").val()).length == 0) {
        error_BSI_Count = "Required";
        $("#error_BSI_Count").text(error_BSI_Count);
    } else {
        error_BSI_Count = "";
        $("#error_BSI_Count").text(error_BSI_Count);
    }
    if ($.trim($(".BSI_UnitPrice").val()).length == 0) {
        error_BSI_UnitPrice = "Required";
        $("#error_BSI_UnitPrice").text(error_BSI_UnitPrice);
    } else {
        error_BSI_UnitPrice = "";
        $("#error_BSI_UnitPrice").text(error_BSI_UnitPrice);
    }
    if ($.trim($(".BSI_TotalMoney").val()).length == 0) {
        error_BSI_TotalMoney = "Required";
        $("#error_BSI_TotalMoney").text(error_BSI_TotalMoney);
    } else {
        error_BSI_TotalMoney = "";
        $("#error_BSI_TotalMoney").text(error_BSI_TotalMoney);
    }
    if ($.trim($(".BSI_CountType").val()).length == 0) {
        error_BSI_CountType = "Required";
        $("#error_BSI_CountType").text(error_BSI_CountType);
    } else {
        error_BSI_CountType = "";
        $("#error_BSI_CountType").text(error_BSI_CountType);
    }
}

function BillSaleItems_insert() {
    var url = "BillSaleItems";

    var data = {
        BS_StoreName: $(".BS_StoreName").val(),
        BSI_FK_BS: $(".BSI_FK_BS").val(),
        BSI_ItemName: $(".BSI_ItemName").val(),
        BSI_C_PartNumber: $(".BSI_C_PartNumber").val(),
        BSI_Count: $(".BSI_Count").val(),
        BSI_CountType: $(".BSI_CountType").val(),
        BSI_UnitPrice: $(".BSI_UnitPrice").val(),
        BSI_TotalMoney: $(".BSI_TotalMoney").val(),
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

            var tabldata = $("#BillSaleItems_data").DataTable();
            tabldata.ajax.reload();

            var tabldata2 = $("#BillSale_data").DataTable();
            tabldata2.ajax.reload();
        },
    });
}

function BillSaleItems_fetch() {
    $(document).ready(function () {
        var url = "BillSaleItems/";
        var data = {
            BS_ID: $(".BSI_FK_BS").val(),
        };
        var tabledata = $("#BillSaleItems_data").DataTable({
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
                    data: "BSI_ItemName",
                },
                {
                    data: "BSI_C_PartNumber",
                },
                {
                    data: "BSI_Count",
                },
                {
                    data: "BSI_UnitPrice",
                    render: $.fn.dataTable.render.number(",", ".", 2),
                },
                {
                    data: "BSI_TotalMoney",
                    render: $.fn.dataTable.render.number(",", ".", 2),
                },
                {
                    data: null,
                    render: function (data, type) {
                        return type === "display"
                            ? '<button  class="btn btn-danger btn-sm m-1 BillSaleItemsDelete"><i class="bi bi-trash"></i> Del </button>'
                            : data;
                    },
                },
            ],
            columnDefs: [
                {
                    targets: [0,3,4,5, 6],
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

function BillSaleItems_update() {
    var url = "BillSaleItems/";
    var data = {
        BSI_ID: $(".BSI_ID").val(),
        BSI_FK_BS: $(".BSI_FK_BS").val(),
        BSI_ItemName: $(".BSI_ItemName").val(),
        BSI_C_PartNumber: $(".BSI_C_PartNumber").val(),
        BSI_Count: $(".BSI_Count").val(),
        BSI_CountType: $(".BSI_CountType").val(),
        BSI_UnitPrice: $(".BSI_UnitPrice").val(),
        BSI_TotalMoney: $(".BSI_TotalMoney").val(),
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
            var tabldata = $("#BillSaleItems_data").DataTable();
            tabldata.ajax.reload();
        },
    });
}
function BillSaleItems_filldata() {
    var url = "BillSaleItemsfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {
                $("#BSI_ItemNameBrowser").empty();
                $.each(
                    response.getItemName,
                    function (indexInArray, valueOfElement) {
                        $("#BSI_ItemNameBrowser").append(
                            '<option value="' +
                                valueOfElement.IT_Name +
                                '">' +
                                valueOfElement.IT_Name +
                                "</option>"
                        );
                    }
                );

                $("#BSI_C_PartNumberBrowser").empty();
                $.each(
                    response.getPartNumber,
                    function (indexInArray, valueOfElement) {
                        $("#BSI_C_PartNumberBrowser").append(
                            '<option value="' +
                                valueOfElement.IT_C_PartNumber +
                                '">' +
                                valueOfElement.IT_C_PartNumber +
                                "</option>"
                        );
                    }
                );
                $("#BSI_CurrencyBrowser").empty();
                $.each(
                    response.getCurrency,
                    function (indexInArray, valueOfElement) {
                        $("#BSI_CurrencyBrowser").append(
                            '<option value="' +
                                valueOfElement.Cur_Name +
                                '">' +
                                valueOfElement.Cur_Name +
                                "</option>"
                        );
                    }
                );
                $("#BSI_CountTypeBrowser").empty();
                $.each(
                    response.getUnits,
                    function (indexInArray, valueOfElement) {
                        $("#BSI_CountTypeBrowser").append(
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

$(document).on("click", ".BillSaleItemsCloseAll", function () {
    var displaycard = document.getElementById("BillSaleItemsaction");
    var displaycard2 = document.getElementById("BillSaleItems");
    if (displaycard.style.display == "block") {
        displaycard.style.display = "none";
    }
    if (displaycard2.style.display == "block") {
        displaycard2.style.display = "none";
    }
    document.getElementById("BillSale_data").scrollIntoView();
});

$("#BSI_Count").keyup(function (e) {
    let count = Number($("#BSI_Count").val());
    let unitprice = Number($("#BSI_UnitPrice").val());
    let totalMoney = count * unitprice;
    $("#BSI_TotalMoney").val(totalMoney);
});
$("#BSI_UnitPrice").keyup(function (e) {
    let count = Number($("#BSI_Count").val());
    let unitprice = Number($("#BSI_UnitPrice").val());
    let totalMoney = count * unitprice;
    $("#BSI_TotalMoney").val(totalMoney);
});

$(document).ready(function () {
    $("#BSI_UnitPrice").on("keypress", function (event) {
        var regex = new RegExp("^[.0-9]+$");
        var key = String.fromCharCode(
            !event.charCode ? event.which : event.charCode
        );
        if (!regex.test(key)) {
            event.preventDefault();
            return false;
        }
    });

    $("#BSI_Count").on("keypress", function (event) {
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
        $('#BSI_C_PartNumber').keyup(function (e) {
        checkPartNumber();
    });
});




const checkPartNumber =()=>{

    let partNumber = ($("#BSI_C_PartNumber").val()).trim();

    if (partNumber != "") {
        var data = {
            getPartNumber: partNumber,
            storeName: $('#BS_StoreName').val(),
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
            url: 'BillSaleItemscheck/checkItemIfExist',
            data: data,
            success: function (response) {
                 console.log(response.prices['IT_Prices']);
                if(response.getPartNumber.length ==0){
                    $('#error_BSI_C_PartNumber').text('This Part Number Does not Exist');
                    $('#BSI_C_PartNumber').css({
                        'background-color':'red',
                    })
                }else{
                    $('#error_BSI_C_PartNumber').text('');
                    $('#BSI_C_PartNumber').css({
                        'background-color':'white',
                    })
                    $('#BSI_ItemName').val(response.getPartNumber[0].IT_Name);
                    $('#BSI_CountType').val(response.getPartNumber[0].itemsthrees[0].IT2_Count_Kind);
                    $('#BSI_Count').attr("placeholder",`{  ${response.getPartNumber[0].itemsthrees[0].IT2_Count}  } => AVAILABEL NOW` )

                    $("#BSI_UnitPriceBrowser").empty();
                    $.each(
                        response.prices['IT_Prices'],
                        function (indexInArray, valueOfElement) {
                            $("#BSI_UnitPriceBrowser").append(
                                '<option value="' +
                                    valueOfElement +
                                    '">' +
                                    valueOfElement +
                                     "</option>"
                            );
                        }
                    );



                }

            },
        });
    } else {
        $('#error_BSI_C_PartNumber').text('');
        $('#BSI_C_PartNumber').css({
            'background-color':'white',
        })
    }


}
// function getBillNumber(){
//     let url="BillSaleItemsfill/";
//     $.ajaxSetup({
//         headers: {
//             "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
//         },
//     });
//     $.ajax({
//         method: "GET",
//         url: url + "getBillNumber",
//         success: function (response) {
//            $('#BSI_ItemName').val((response.billNumber.id)+1);
//         },
//     });

// }
