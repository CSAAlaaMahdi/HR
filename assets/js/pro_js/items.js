fetchdata_items();
items_filldata();
$(document).on("click", ".itemsAdd", function () {
    var displaycard = document.getElementById("itemsaction");
    if (displaycard.style.display == "none") {
        document.getElementById("card_itemstitle").innerText = " Add New Item";
        displaycard.style.display = "block";
        document.getElementById("card_itemstitle").scrollIntoView();
    } else {
        displaycard.style.display = "none";
        document.getElementById("card_itemstitle").innerText = "";
        cleardata_items();
        displaycard.style.display = "block";
        document.getElementById("card_itemstitle").innerText = "Add New Item";
        document.getElementById("card_itemstitle").scrollIntoView();
    }
});

$(document).on("click", ".itemsSave", function () {
    var IT_id = document.getElementById("IT_ID").value;

    if (IT_id == "") {
        checkdata_items();
        partNumberTest();
        if (
            error_IT_Name != "" ||
            error_IT_PartNumber != "" ||
            error_IT_C_PartNumber != "" ||
            error_IT_GenuinePartNumber != "" ||
            error_IT_Company != "" ||
            error_IT_Brand != "" ||
            error_IT_WM != "" ||
            error_IT_Code != ""
        ) {
            return false;
        } else {

            insertdata_items();
            cleardata_items();
        }
    } else {
        updatedata_items();
        cleardata_items();
    }
});

$(document).on("click", ".itemsDelete", function () {
    var url = "items/";
    var tabledata = $("#items_data").DataTable();
    var itemid = tabledata.row($(this).closest("tr")).data();
    var itemidvalue = itemid[Object.keys(itemid)[0]];

    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
    });
    $.ajax({
        type: "DELETE",
        url: url + "destroy",
        data: {
            getid: itemidvalue,
        },

        success: function (response) {
            alertify.set("notifier", "position", "top-center");
            alertify.success(response.status);
            $("#items_data").DataTable().ajax.reload();
        },
    });
});

$(document).on("click", ".itemsClose", function () {
    var displaycard = document.getElementById("itemsaction");
    cleardata_items();
    $("#itemFouraction").hide();
    $("#detailscontainer").hide();
    document.getElementById("card_itemstitle").innerText = "";
    displaycard.style.display = "none";
});

// Edit Button in DataTable...
$(document).on("click", ".itemsEdit", function () {
    var url = "items/";
    var tabledata = $("#items_data").DataTable();
    var itemid = tabledata.row($(this).closest("tr")).data();
    var itemidvalue = itemid[Object.keys(itemid)[0]];
    $.ajax({
        type: "GET",
        url: url + "show",
        data: {
            getid: itemidvalue,
        },

        success: function (response) {
            $("#IT_ID").val(response["id"]);
            $("#IT_ParentID").val(response["IT_ParentID"]);
            $("#IT_Barcode").val(response["IT_Barcode"]);
            $("#IT_Code").val(response["IT_Code"]);
            $("#IT_Name").val(response["IT_Name"]);
            $("#IT_PartNumber").val(response["IT_PartNumber"]);
            $("#IT_C_PartNumber").val(response["IT_C_PartNumber"]);
            $("#IT_GenuinePartNumber").val(response["IT_GenuinePartNumber"]);
            $("#IT_Company").val(response["IT_Company"]);
            $("#IT_Brand").val(response["IT_Brand"]);
            $("#IT_Kind").val(response["IT_Kind"]);
            $("#IT_State").prop("checked", ()=>{
                if(response["IT_State"]==1) return true;
                else return false;
            });
            $("#IT_Ask_Stop").val(response["IT_Ask_Stop"]);
            $("#IT_AccountNumber").val(response["IT_AccountNumber"]);
            $("#IT_MainAccount").val(response["IT_MainAccount"]);
            $("#IT_MainAccountNumber").val(response["IT_MainAccountNumber"]);
            $("#IT_Description").val(response["IT_Description"]);
            $("#IT_Notes").val(response["IT_Notes"]);
            $("#IT_PL01").val(response["IT_PL01"]);
            $("#IT_PL02").val(response["IT_PL02"]);
            $("#IT_PL03").val(response["IT_PL03"]);
            $("#IT_PL04").val(response["IT_PL04"]);
            $("#IT_PL05").val(response["IT_PL05"]);
            $("#IT_PL06").val(response["IT_PL06"]);

            if ($("#IT_AccountNumber").val().length != 0) {
                $("#IT_AccountNumber").attr("disabled", true);
                $("#IT_MainAccount").attr("disabled", true);
                $(".generateaccountnumber").attr("disabled", true);
            } else {
                $("#IT_AccountNumber").attr("disabled", false);
                $("#IT_MainAccount").attr("disabled", false);
                $(".generateaccountnumber").attr("disabled", false);
            }

            var displaycard = document.getElementById("itemsaction");
            if (displaycard.style.display == "none") {
                document.getElementById("card_itemstitle").innerText =
                    "Edit Item Data";
                displaycard.style.display = "block";
                document.getElementById("card_itemstitle").scrollIntoView();
            } else {
                displaycard.style.display = "none";
                document.getElementById("card_itemstitle").innerText = "";
                document.getElementById("card_itemstitle").innerText =
                    "Edit Item Data";
                displaycard.style.display = "block";
                document.getElementById("card_itemstitle").scrollIntoView();
            }
        },
    });
});

function cleardata_items() {
    $("#IT_ID").val("");
    $("#IT_ParentID").val("");
    $("#IT_Barcode").val("");
    $("#IT_WM").val("");
    $("#IT_Code").val("");
    $("#IT_Name").val("");
    $("#IT_PartNumber").val("");
    $("#IT_C_PartNumber").val("");
    $("#IT_GenuinePartNumber").val("");
    $("#IT_Company").val("");
    $("#IT_Brand").val("");
    $("#IT_Kind").val("");
    $("#IT_State").prop("checked", false);
    $("#IT_Ask_Stop").val("");
    $("#IT_Description").val("");
    $("#IT_AccountNumber").val("");
    $("#IT_MainAccount").val("");
    $("#IT_MainAccountNumber").val("");
    $("#IT_Notes").val("");
    $("#IT_PL01").val("");
    $("#IT_PL02").val("");
    $("#IT_PL03").val("");
    $("#IT_PL04").val("");
    $("#IT_PL05").val("");
    $("#IT_PL06").val("");
}

function checkdata_items() {
    if ($.trim($(".IT_Name").val()).length == 0) {
        error_IT_Name = "Require ";
        $("#error_IT_Name").text(error_IT_Name);
    } else {
        error_IT_Name = "";
        $("#error_IT_Name").text(error_IT_Name);
    }
    if ($.trim($(".IT_PartNumber").val()).length == 0) {
        error_IT_PartNumber = "Require  ";
        $("#error_IT_PartNumber").text(error_IT_PartNumber);
    } else {
        error_IT_PartNumber = "";
        $("#error_IT_PartNumber").text(error_IT_PartNumber);
    }
    if ($.trim($(".IT_C_PartNumber").val()).length == 0) {
        error_IT_C_PartNumber = "Required  ";
        $("#error_IT_C_PartNumber").text(error_IT_C_PartNumber);
    } else {
        error_IT_C_PartNumber = "";
        $("#error_IT_C_PartNumber").text(error_IT_C_PartNumber);
    }
    if ($.trim($(".IT_GenuinePartNumber").val()).length == 0) {
        error_IT_GenuinePartNumber = "Required ";
        $("#error_IT_GenuinePartNumber").text(error_IT_GenuinePartNumber);
    } else {
        error_IT_GenuinePartNumber = "";
        $("#error_IT_GenuinePartNumber").text(error_IT_GenuinePartNumber);
    }
    if ($.trim($(".IT_Company").val()).length == 0) {
        error_IT_Company = "Required ";
        $("#error_IT_Company").text(error_IT_Company);
    } else {
        error_IT_Company = "";
        $("#error_IT_Company").text(error_IT_Company);
    }
    if ($.trim($(".IT_Brand").val()).length == 0) {
        error_IT_Brand = "Required ";
        $("#error_IT_Brand").text(error_IT_Brand);
    } else {
        error_IT_Brand = "";
        $("#error_IT_Brand").text(error_IT_Brand);
    }
    if ($.trim($(".IT_WM").val()).length == 0) {
        error_IT_WM = "Required ";
        $("#error_IT_WM").text(error_IT_WM);
    } else {
        error_IT_WM = "";
        $("#error_IT_WM").text(error_IT_WM);
    }
    if ($.trim($(".IT_Code").val()).length == 0) {
        error_IT_Code = "Required ";
        $("#error_IT_Code").text(error_IT_Code);
    } else {
        error_IT_Code = "";
        $("#error_IT_Code").text(error_IT_Code);
    }

}

function insertdata_items() {
    var url = "items";
    var data = {
        IT_ParentID: $(".IT_ParentID").val(),
        IT_Code: $(".IT_Code").val(),
        IT_Barcode: $(".IT_Barcode").val(),
        IT_Name: $(".IT_Name").val(),
        IT_PartNumber: $(".IT_PartNumber").val(),
        IT_C_PartNumber: $(".IT_C_PartNumber").val(),
        IT_GenuinePartNumber: $(".IT_GenuinePartNumber").val(),
        IT_Company: $(".IT_Company").val(),
        IT_Brand: $(".IT_Brand").val(),
        IT_Kind: $(".IT_Kind").val(),
        IT_Ask_Stop: $(".IT_Ask_Stop").val(),
        IT_AccountNumber: $(".IT_AccountNumber").val(),
        IT_MainAccount: $(".IT_MainAccount").val(),
        IT_MainAccountNumber: $(".IT_MainAccountNumber").val(),
        IT_Description: $(".IT_Description").val(),
        IT_Notes: $(".IT_Notes").val(),
        IT_State: (function () {
            if ($("#IT_State").is(":checked")) {
                return 1;
            } else return 0;
        })(),
        IT_PL01: $(".IT_PL01").val(),
        IT_PL02: $(".IT_PL02").val(),
        IT_PL03: $(".IT_PL03").val(),
        IT_PL04: $(".IT_PL04").val(),
        IT_PL05: $(".IT_PL05").val(),
        IT_PL06: $(".IT_PL06").val(),
    };
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
    });
    $.ajax({
        method: "POST",
        url: url,
        data: data,
        success: function (response) {
            alertify.set("notifier", "position", "top-right");
            alertify.success(response.status);
            var tabldata = $("#items_data").DataTable();
            tabldata.ajax.reload();
        },
    });
}

function items_filldata() {
    var url = "itemsfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {
                $("#IT_WMBrowser").empty();
                $.each(
                    response.getitemnameCategory,
                    function (indexInArray, valueOfElement) {
                        $("#IT_WMBrowser").append(
                            '<option value="' +
                                valueOfElement.IT_Name +
                                "_" +
                                valueOfElement.IT_Code +
                                '">' +
                                valueOfElement.IT_Name +
                                "_" +
                                valueOfElement.IT_Code +
                                "</option>"
                        );
                    }
                );

                $("#IT_NameBrowser").empty();
                $.each(
                    response.getitemname,
                    function (indexInArray, valueOfElement) {
                        $("#IT_NameBrowser").append(
                            '<option value="' +
                                valueOfElement.IT_Name +
                                '">' +
                                valueOfElement.IT_Name +
                                "</option>"
                        );
                    }
                );

                $("#IT_PartNumberBrowser").empty();
                $.each(
                    response.getpartnumber,
                    function (indexInArray, valueOfElement) {
                        $("#IT_PartNumberBrowser").append(
                            '<option value="' +
                                valueOfElement.IT_PartNumber +
                                '">' +
                                valueOfElement.IT_PartNumber +
                                "</option>"
                        );
                    }
                );

                $("#IT_C_PartNumberBrowser").empty();
                $.each(
                    response.getpartcode,
                    function (indexInArray, valueOfElement) {
                        $("#IT_C_PartNumberBrowser").append(
                            '<option value="' +
                                valueOfElement.IT_C_PartNumber +
                                '">' +
                                valueOfElement.IT_C_PartNumber +
                                "</option>"
                        );
                    }
                );

                $("#IT_GenuinePartNumberBrowser").empty();
                $.each(
                    response.getgenuinepartnumber,
                    function (indexInArray, valueOfElement) {
                        $("#IT_GenuinePartNumberBrowser").append(
                            '<option value="' +
                                valueOfElement.IT_GenuinePartNumber +
                                '">' +
                                valueOfElement.IT_GenuinePartNumber +
                                "</option>"
                        );
                    }
                );

                $("#IT_MainAccountBrowser").empty();
                $.each(
                    response.getmainaccount,
                    function (indexInArray, valueOfElement) {
                        $("#IT_MainAccountBrowser").append(
                            '<option value="' +
                                valueOfElement.Ac_Name +
                                '">' +
                                valueOfElement.Ac_Name +
                                "</option>"
                        );
                    }
                );

                $("#IT_CompanyBrowser").empty();
                $.each(
                    response.getcompany,
                    function (indexInArray, valueOfElement) {
                        $("#IT_CompanyBrowser").append(
                            '<option value="' +
                                valueOfElement.Co_Name +
                                '">' +
                                valueOfElement.Co_Name +
                                "</option>"
                        );
                    }
                );

                $("#IT_BrandBrowser").empty();
                $.each(
                    response.getbrand,
                    function (indexInArray, valueOfElement) {
                        $("#IT_BrandBrowser").append(
                            '<option value="' +
                                valueOfElement.B_Name +
                                '">' +
                                valueOfElement.B_Name +
                                "</option>"
                        );
                    }
                );
            },
        });
    });
}

function fetchdata_items() {
    $(document).ready(function () {
        var url = "items/";

        var tabledata = $("#items_data").DataTable({
            responsive: true,
            processing: true,
            serverSide: true,

            order: [],
            ajax: {
                type: "GET",
                url: url + "create",
            },

            columns: [
                {
                    data: "id",
                },
                {
                    data: "IT_Name",
                },
                {
                    data: "IT_PartNumber",
                },
                {
                    data: "IT_GenuinePartNumber",
                },
                {
                    data: "IT_C_PartNumber",
                },
                {
                    data: "IT_Company",
                },
                {
                    data: "IT_Brand",
                },
                {
                    data: "IT_Kind",
                },
                {
                    data: null,
                    render: function (data, type) {
                        return type === "display"
                            ? '<button  class="btn btn-success btn-sm m-1 itemsEdit"><i class="bi bi-pen"></i> Edit </button>' +
                                  '<button  class="btn btn-danger btn-sm m-1 itemsDelete" disabled><i class="bi bi-trash"></i> Del </button>'
                            : data;
                    },
                },
            ],
            columnDefs: [
                {
                    targets: [0, 8],
                    orderable: false,
                },
            ],
            lengthMenu: [
                [5, 10, 15, 20, 25, 100],
                [5, 10, 15, 20, 25, 100],
            ],

            // "language": {
            //     "decimal": "",
            //     "emptyTable": "No Exist Data",
            //     "info": "Display _START_ From _END_ From _TOTAL_ Entrey",
            //     "infoEmpty": "Display 0 to 0 of 0 Entry",
            //     "infoFiltered": "(تصفية من _MAX_ اجمالي الادخالات)",
            //     "infoPostFix": "",
            //     "thousands": ",",
            //     "lengthMenu": "عرض _MENIT_ مدخلات",
            //     "loadingRecords": "تحميل....",
            //     "processing": "معالجة.....",
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
            // "dom": ' <"top"l><"search float-right p-2"f>rt<"bottom float-right"p><"clear">'
        });
    });
}

function updatedata_items() {
    var url = "items/";
    var data = {
        IT_ID: $(".IT_ID").val(),
        IT_ParentID: $(".IT_ParentID").val(),
        IT_Code: $(".IT_Code").val(),
        IT_Barcode: $(".IT_Barcode").val(),
        IT_Name: $(".IT_Name").val(),
        IT_PartNumber: $(".IT_PartNumber").val(),
        IT_C_PartNumber: $(".IT_C_PartNumber").val(),
        IT_GenuinePartNumber: $(".IT_GenuinePartNumber").val(),
        IT_Company: $(".IT_Company").val(),
        IT_Brand: $(".IT_Brand").val(),
        IT_Kind: $(".IT_Kind").val(),
        IT_State: (function () {
            if ($("#IT_State").is(":checked")) {
                return 1;
            } else return 0;
        })(),
        IT_Ask_Stop: $(".IT_Ask_Stop").val(),
        IT_AccountNumber: $(".IT_AccountNumber").val(),
        IT_MainAccount: $(".IT_MainAccount").val(),
        IT_MainAccountNumber: $(".IT_MainAccountNumber").val(),
        IT_Description: $(".IT_Description").val(),
        IT_Notes: $(".IT_Notes").val(),
        IT_PL01: $(".IT_PL01").val(),
        IT_PL02: $(".IT_PL02").val(),
        IT_PL03: $(".IT_PL03").val(),
        IT_PL04: $(".IT_PL04").val(),
        IT_PL05: $(".IT_PL05").val(),
        IT_PL06: $(".IT_PL06").val(),
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
            var tabldata = $("#items_data").DataTable();
            tabldata.ajax.reload();
        },
    });
}

$(document).ready(function () {
    $("#IT_MainAccount,#MainAccountNumber").keyup(function () {
        var accountname = $("#IT_MainAccount").val();

        if (accountname != "") {
            var data = {
                accountname: accountname,
            };
            $.ajax({
                type: "GET",
                url: "itemsfill/getman",
                data: data,
                success: function (response) {
                    $.each(response, function (indexInArray, valueOfElement) {
                        $("#IT_MainAccountNumber").val(
                            valueOfElement.Ac_Code_Mask
                        );
                    });
                },
            });
        } else {
            $("#IT_MainAccountNumber").val("");
        }
    });
});

$(document).ready(function () {
    $("#IT_WM").keyup(function () {
        var itemCategory = $("#IT_WM").val();
        var itemCode = itemCategory.split("_");
        if (itemCategory != "") {
            var data = {
                itemCode: itemCode[1],
            };
            $.ajax({
                type: "GET",
                url: "itemsfill/itemCategory",
                data: data,
                success: function (response) {

                        var itemcategoryinfo = response.itemCategoryInfo;
                        $("#IT_ParentID").empty();
                        $("#IT_ParentID").val(itemcategoryinfo[0].id);
                        var itemchildren = response.itemChildren;
                        if (
                            itemchildren.length == 0 ||
                            itemchildren.length == null
                        ) {
                            $("#IT_Code").empty();
                            $("#IT_Code").val(
                                `${itemcategoryinfo[0].IT_Code}-1`
                            );
                        } else {
                            var itemcategoryinfo = itemcategoryinfo[0].IT_Code;
                            var itemchildren =
                                itemchildren[itemchildren.length - 1].IT_Code;
                            var itemchildrenSplit = itemchildren.split("-");
                            var newcode =
                                Number(
                                    itemchildrenSplit[
                                        itemchildrenSplit.length - 1
                                    ]
                                ) + 1;
                            $("#IT_Code").empty();
                            $("#IT_Code").val(`${itemcategoryinfo}-${newcode}`);
                        }

                },
            });
        } else {
            $("#IT_ParentID").val("");
        }
    });
});
$(document).on("click", ".generatepartcode", function () {
    var number = generate();
    var number2 = generate();
    $("#IT_C_PartNumber").val(number + "-" + number2);
    var partcode = $("#IT_C_PartNumber").val();
    var data = {
        IT_C_PartNumber: partcode,
    };

    $.ajax({
        type: "GET",
        url: "itemsfill/checkcpartnumber",
        data: data,
        success: function (response) {
            if (response.IT_C_PartNumber != null) {
                $("#IT_C_PartNumber").val(
                    number + "-" + number2 + "/" + "Already Exist"
                );
                $("#IT_C_PartNumber").css({
                    "background-color": "#ff5252",
                    color: "white",
                });
            } else {
                $("#IT_C_PartNumber").val(number + "-" + number2);
                $("#IT_C_PartNumber").css({
                    "background-color": "white",
                    color: "black",
                });
            }
        },
    });
});

$(document).on("click", ".generateBarcode", function () {
    var number = generate2();
    $("#IT_Barcode").val(number);
    var barcode = $("#IT_Barcode").val();
    var data = {
        IT_Barcode: barcode,
    };

    $.ajax({
        type: "GET",
        url: "itemsfill/checkBarcode",
        data: data,
        success: function (response) {
            if (response.IT_Barcode != null) {
                $("#IT_Barcode").val(
                    number + "-" + number2 + "/" + "Already Exist"
                );
                $("#IT_Barcode").css({
                    "background-color": "#ff5252",
                    color: "white",
                });
            } else {
                $("#IT_Barcode").val(number + "-" + number2);
                $("#IT_Barcode").css({
                    "background-color": "white",
                    color: "black",
                });
            }
        },
    });
});


$(document).on("click", ".generateaccountnumber", function () {
    var mainaccountnumber = $("#IT_MainAccountNumber").val();
    if (mainaccountnumber.length != 0) {
        var data = {
            mainaccountnumber: mainaccountnumber,
        };
        $.ajax({
            type: "GET",
            url: "itemsfill/gan",
            data: data,

            success: function (response) {
                // console.log(response.getdata);
                var x = Number(response.getdata);
                var y = x + 1;
                $("#IT_AccountNumber").val(mainaccountnumber + "_" + y);
            },
        });
    } else {
        $("#IT_MainAccount").val("Input The Main Account");
        $("#IT_MainAccount").css({
            "background-color": "#ff5252",
            color: "white",
        });
    }
});

function generate() {
    var add = 1,
        max = 12 - add; // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.

    if (5 > max) {
        return generate(max) + generate(5 - max);
    }

    max = Math.pow(10, 5 + add);
    var min = max / 10; // Math.pow(10, n) basically
    var number = Math.floor(Math.random() * (max - min + 1)) + min;

    return ("" + number).substring(add);
}

function generate2() {
    var add = 1,
        max = 12 - add; // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.

    if (7 > max) {
        return generate(max) + generate(7 - max);
    }

    max = Math.pow(10, 7 + add);
    var min = max / 10; // Math.pow(10, n) basically
    var number = Math.floor(Math.random() * (max - min + 1)) + min;

    return ("" + number).substring(add);
}

// for details container....

$(document).on("click", ".itemsDetails", function () {
    $("#IT4_FK_IT").val($("#IT_ID").val());
    $("#IT2_FK_IT").val($("#IT_ID").val());
    fetchdata_itemFour();
    itemFour_filldata();
    fetchdata_ItemThree();
    $("#detailscontainer").show();
    $("#itemFouraction").hide();
    document.querySelector("#detailscontainer").scrollIntoView();
});

$(document).on("click", ".itemsPricesSave", function () {
    var IT_id = document.getElementById("IT_ID").value;

    if (IT_id != "" || IT_id != null) {
        updatedata_items();
    }
});

$(document).ready(function () {
    $("#IT_PartNumber").on("keyup change",(function () {
        var partNumber = ($("#IT_PartNumber").val()).trim();
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
                url: "itemsfill/getPartNumber",
                data: data,
                success: function (response) {
                    if (response.getPartNumber.length != 0) {
                        $("#IT_PartNumber").css({
                            "background-color": "red",
                        });
                    } else {
                        $("#IT_PartNumber").css({
                            "background-color": "white",
                        });
                    }
                },
            });
        } else {
            $("#IT_PartNumber").css({
                "background-color": "white",
            });
        }
    }));
});

const partNumberTest=()=>{

            var partNumber = ($("#IT_PartNumber").val()).trim();
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
                    url: "itemsfill/getPartNumber",
                    data: data,
                    success: function (response) {
                        if (response.getPartNumber.length != 0) {
                            error_IT_PartNumber = "This PartNumber is Dublicated...";
                            $("#error_IT_PartNumber").text(error_IT_PartNumber);
                        } else {
                            error_IT_PartNumber = "";
                            $("#error_IT_PartNumber").text(error_IT_PartNumber);
                        }
                    },
                });
            } else {
                $("#IT_PartNumber").css({
                    "background-color": "white",
                });
            }


}
