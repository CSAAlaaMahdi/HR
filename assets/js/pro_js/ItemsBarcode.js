// ItemsBarcode_fetch();

function ItemsBarcode_cleardata() {
    $("#ITB_ID").dxTextBox("instance").option("value", "");
    $("#ITB_Barcode").dxTextBox("instance").option("value", "");
}

function ItemsBarcode_chechdata() {}

function ItemsBarcode_UpdateOrCreate() {
    var url = "ItemsBarcode";
    var data = {
        ITB_ID: $("#ITB_ID").dxTextBox("instance").option("value"),
        ITB_FK_IT: $("#ITB_FK_IT").dxTextBox("instance").option("value"),
        ITB_Barcode: $("#ITB_Barcode").dxTextBox("instance").option("value"),
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
            DevExpress.ui.notify({
                message: response.status,
                position: {
                    my: "top left",
                    at: "top left",
                },
                type: "success",
                width: "300",
                height: "150",
                hideAfter: 2000,
            });
            ItemsBarcode_cleardata();
            ItemsBarcode_fetch();
        },
    });
}

function ItemsBarcode_fetch() {
    $(document).ready(function () {
        let id = $("#IT_ID").dxTextBox("instance").option("value");
        $("#ITB_FK_IT").dxTextBox("instance").option("value", id);
        var url = "ItemsBarcode/";
        $.ajax({
            type: "GET",
            url: url + "create",
            data: {IT_ID:id},
            success: function (response) {
                $(function () {
                    const dataGrid = $("#ItemsBarcodeDataGrid").dxDataGrid({
                        dataSource: response.getItemsBarcode,
                        keyExpr: "id",
                        paging: {
                            enabled: true,
                            pageSize: 5, // Number of records per page
                            pageIndex: 0, // Initially show the first page
                        },
                        pager: {
                            showPageSizeSelector: true,
                            showInfo: true,
                            allowedPageSizes: [10, 25, 50, 100, "all"],
                            showNavigationButtons: true,
                        },
                        remoteOperations: false,
                        searchPanel: {
                            visible: true,
                            highlightCaseSensitive: true,
                            width: 450,
                        },
                        filterRow: { visible: true },
                        groupPanel: { visible: true },
                        grouping: {
                            autoExpandAll: false,
                        },
                        focusedRowEnabled: true,
                        allowColumnReordering: true,
                        rowAlternationEnabled: true,
                        showBorders: true,
                        columns: [
                            {
                                dataField: "id",
                                caption: "ت",
                                visible: false,
                            },
                            {
                                dataField: "ITB_FK_IT",
                                caption: "رقم الاتصال",
                                visible: false,
                            },

                            {
                                dataField: "ITB_Barcode",
                                caption: "باركود المادة ",
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "600"; // Set the desired font weight
                                    let fontSize = "17px";
                                    let fontColor = "#283741";
                                    $("<div>")
                                        .css({
                                            "font-size": fontSize,
                                            "font-weight": fontWeight,
                                            color: fontColor,
                                        })
                                        .text(cellValue)
                                        .appendTo(container);
                                },
                            },

                            {
                                caption: "الحدث",

                                width: 200,
                                cellTemplate: function (container, options) {
                                    var row = options.row.data;
                                    var link1 = $("<div>").css({'background-color':'#7CEECE'});
                                    link1.dxButton({
                                        stylingMode: "contained",
                                        type: "normal",
                                        icon: "edit",
                                        onClick() {
                                            var rowData = options.data;

                                            $("#ITB_ID")
                                                .dxTextBox("instance")
                                                .option({
                                                    value: options.data
                                                        .id,
                                                });
                                            $("#ITB_FK_IT")
                                                .dxTextBox("instance")
                                                .option({
                                                    value: options.data
                                                        .ITB_FK_IT,
                                                });
                                                $("#ITB_Barcode")
                                                .dxTextBox("instance")
                                                .option({
                                                    value: options.data
                                                        .ITB_Barcode,
                                                });

                                            var displaycard =
                                                document.getElementById(
                                                    "ItemsBarcodeaction"
                                                );
                                            if (
                                                displaycard.style.display ==
                                                "none"
                                            ) {
                                                document.getElementById(
                                                    "card_ItemsBarcodetitle"
                                                ).innerText = "تعديل بيانات";
                                                displaycard.style.display =
                                                    "block";
                                                document
                                                    .getElementById(
                                                        "card_ItemsBarcodetitle"
                                                    )
                                                    .scrollIntoView();
                                            } else {
                                                displaycard.style.display =
                                                    "none";
                                                document.getElementById(
                                                    "card_ItemsBarcodetitle"
                                                ).innerText = "";
                                                displaycard.style.display =
                                                    "block";
                                                document.getElementById(
                                                    "card_ItemsBarcodetitle"
                                                ).innerText = "تعديل بيانات";
                                                document
                                                    .getElementById(
                                                        "card_ItemsBarcodetitle"
                                                    )
                                                    .scrollIntoView();
                                            }
                                        },
                                    });

                                    var link2 = $("<div>").css({'margin-right':'10px'});
                                    link2.dxButton({
                                        stylingMode: "contained",
                                        icon: "trash",
                                        type:"default",
                                        onClick() {
                                            var rowData = options.data;


                                            let data = {
                                                ITB_ID: rowData.id
                                            };

                                            $.ajaxSetup({
                                                headers: {
                                                    "X-CSRF-TOKEN": $(
                                                        'meta[name="csrf-token"]'
                                                    ).attr("content"),
                                                },
                                            });
                                            $.ajax({
                                                type: "DELETE",
                                                url: "ItemsBarcode/destroy",
                                                data: data,
                                                success: function (response) {
                                                    ItemsBarcode_fetch();
                                                    DevExpress.ui.notify({
                                                        message:response.status,

                                                        position: {
                                                            my: "top left",
                                                            at: "top left",
                                                        },
                                                        type: "error",
                                                        width: "300",
                                                        height: "150",
                                                        hideAfter: 2000,
                                                    });
                                                },
                                            });
                                        },
                                    });

                                    $(container).append(link1, link2);
                                },
                            },
                        ],
                        onContentReady: function (e) {
                            e.element
                                .find(".dx-datagrid-headers")
                                .addClass("custom-header_Companies");
                        },
                    });
                });
            },
        });
    });
}




$(document).ready(function () {
    $("#btnCloseItemsBarcode").dxButton({
        stylingMode: "contained",
        text: "اغلاق",
        type: "default",
        icon: "close",
        width: 120,
        height: 55,
        onClick() {
            var displaycard = document.getElementById("ItemsBarcodeaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_ItemsBarcodetitle").innerText =
                    "";
                ItemsBarcode_cleardata();
                // ItemsBarcode_setStCode();
                displaycard.style.display = "none";
                document.getElementById("firstCard").scrollIntoView();
            }
        },
    });
});

// Button Save Data
$(document).ready(function () {
    $("#btnSaveBarcode").dxButton({
        stylingMode: "contained",
        text: "حفظ",
        type: "default",
        icon: "check",
        width: 120,
        height:55,
        onClick() {

                ItemsBarcode_UpdateOrCreate();

        },
    });
});
// End Button Save
$(document).ready(function () {
    $("#btnAddBarcode").dxButton({
        stylingMode: "contained",
        text: "اضافة",
        type: "success",
        icon: "plus",
        width: 120,
        height: 55,
        onClick() {
            var displaycard = document.getElementById("ItemsBarcodeaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_ItemsBarcodetitle").innerText =
                    "";

                // ItemsBarcode_setStCode();
                displaycard.style.display = "none";
                document.getElementById("FifthCard").scrollIntoView();
            }else{
                document.getElementById("card_ItemsBarcodetitle").innerText =
                    "";

                // ItemsBarcode_setStCode();
                displaycard.style.display = "block";
                document.getElementById("FifthCard").scrollIntoView();
            }

        },
    });
});
// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#ITB_ID").dxTextBox({
            placeholder: "ت ",
            inputAttr: { "aria-label": "ItemsBarcode Name" },
        });
    });
    $(() => {
        $("#ITB_FK_IT").dxTextBox({
            placeholder: "رقم الاتصال",
            inputAttr: { "aria-label": " ItemsBarcode Guid" },
        });
    });
    $(() => {
        $("#ITB_Barcode").dxTextBox({
            placeholder: "باركود المادة",
            inputAttr: { "aria-label": " ItemsBarcode Guid" },
        });
    });
});
//
