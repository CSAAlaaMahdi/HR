Units_fetch();

function Units_cleardata() {
    $("#Ui_Guid").dxTextBox("instance").option("value", "");
    $("#Ui_Name").dxTextBox("instance").option("value", "");
    $("#Ui_Piece").dxTextBox("instance").option("value", "");
    $("#Ui_PieceType").dxTextBox("instance").option("value", "");
}

function Units_chechdata() {
    if ($.trim($(".ui_name").val()).length == 0) {
        error_ui_name = "Require";
        $("#error_ui_name").text(error_ui_name);
    } else {
        error_ui_name = "";
        $("#error_ui_name").text(error_ui_name);
    }
}

function Units_insert() {
    var url = "unitname";
    var data = {
        Ui_Name: $("#Ui_Name").dxTextBox("instance").option("value"),
        Ui_Piece: $("#Ui_Piece").dxTextBox("instance").option("value"),
        Ui_PieceType: $("#Ui_PieceType").dxTextBox("instance").option("value"),
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
                  my: 'top left',
                  at: 'top left'
                },
                type:'success',
                width: '300',
                height:'150',
                hideAfter: 2000
              });
            Units_cleardata();
            Units_fetch();
        },
    });
}

function Units_fetch() {
    $(document).ready(function () {
        var url = "unitname/";
        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {
                    const dataGrid = $("#Unitsdatagrid").dxDataGrid({
                        dataSource: response.getUnits,
                        keyExpr: "Ui_Guid",
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
                            width: 300,
                        },
                        focusedRowEnabled:true,
                        filterRow: { visible: true },
                        groupPanel: { visible: true },
                        grouping: {
                            autoExpandAll: false,
                        },
                        allowColumnReordering: true,
                        rowAlternationEnabled: true,
                        showBorders: true,
                        columns: [
                            {
                                dataField: "Ui_Name",
                                caption: "اسم الوحدة",
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "16px";
                                    let fontColor ="#2F4F4F";
                                    $("<div>")
                                        .css({
                                            "font-size" :fontSize,
                                            "font-weight" : fontWeight,
                                            "color":fontColor,
                                        })
                                        .text(cellValue)
                                        .appendTo(container);
                                }
                                // groupIndex: 0,
                            },
                            {
                                dataField: "Ui_Piece",
                                caption: "القطعة",
                                dataType: "number",
                                alignment: "right",
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "16px";
                                    let fontColor ="#2F4F4F";
                                    var formattedValue = new Intl.NumberFormat("en-US", {
                                        style: "decimal",
                                        minimumFractionDigits: 0,
                                        maximumFractionDigits: 3,
                                        minimumIntegerDigits: 1,
                                        useGrouping: true,
                                    }).format(cellValue);
                                    $("<div>")
                                        .css({
                                            "font-size" :fontSize,
                                            "font-weight" : fontWeight,
                                            "color":fontColor,
                                        })
                                        .text(formattedValue)
                                        .appendTo(container);
                                }
                            },
                            {
                                dataField: "Ui_PieceType",
                                caption: "نوع القطعة",
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "16px";
                                    let fontColor ="#2F4F4F";
                                    $("<div>")
                                        .css({
                                            "font-size" :fontSize,
                                            "font-weight" : fontWeight,
                                            "color":fontColor,
                                        })
                                        .text(cellValue)
                                        .appendTo(container);
                                }
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

                                            $("#Ui_Guid")
                                                .dxTextBox("instance")
                                                .option({
                                                    value: options.data.Ui_Guid,
                                                });
                                            $("#Ui_Name")
                                                .dxTextBox("instance")
                                                .option({
                                                    value: options.data.Ui_Name,
                                                });
                                            $("#Ui_Piece")
                                                .dxTextBox("instance")
                                                .option({
                                                    value: options.data
                                                        .Ui_Piece,
                                                });
                                            $("#Ui_PieceType")
                                                .dxTextBox("instance")
                                                .option({
                                                    value: options.data
                                                        .Ui_PieceType,
                                                });

                                            var displaycard =
                                                document.getElementById(
                                                    "Unitsaction"
                                                );
                                            if (
                                                displaycard.style.display ==
                                                "none"
                                            ) {
                                                document.getElementById(
                                                    "card_Unitstitle"
                                                ).innerText = "تعديل البيانات";
                                                displaycard.style.display =
                                                    "block";
                                                document
                                                    .getElementById(
                                                        "card_Unitstitle"
                                                    )
                                                    .scrollIntoView();
                                            } else {
                                                displaycard.style.display =
                                                    "none";
                                                document.getElementById(
                                                    "card_Unitstitle"
                                                ).innerText = "";
                                                displaycard.style.display =
                                                    "block";
                                                document.getElementById(
                                                    "card_Unitstitle"
                                                ).innerText = "تعديل البيانات";
                                                document
                                                    .getElementById(
                                                        "card_Unitstitle"
                                                    )
                                                    .scrollIntoView();
                                            }
                                        },
                                    });

                                    var link2 = $("<div>").css({'margin-right':'10px'});
                                    link2.dxButton({
                                        stylingMode: "contained",
                                        icon: "trash",
                                        type:'default',
                                        onClick() {
                                            var rowData = options.data;

                                            $("#Ui_Guid")
                                                .dxTextBox("instance")
                                                .option({
                                                    value: options.data
                                                        .Ui_Guid,
                                                });
                                            let data = {
                                                Ui_Guid: $("#Ui_Guid")
                                                    .dxTextBox("instance")
                                                    .option("value"),
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
                                                url: "unitname/destroy",
                                                data: data,
                                                success: function (response) {
                                                    // alertify.set('notifier', 'position', 'top-right');
                                                    // alertify.success(response.status);
                                                    Units_fetch();
                                                    Units_cleardata();
                                                    DevExpress.ui.notify({
                                                        message:
                                                            response.status,
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
                            // Add custom class to the header panel
                            e.element
                                .find(".dx-datagrid-headers")
                                .addClass("custom-header_Units");
                        },
                    });
                });
            },
        });
    });
}

function Units_update() {
    var url = "unitname/";
    var data = {
        Ui_Guid: $("#Ui_Guid").dxTextBox("instance").option("value"),
        Ui_Name: $("#Ui_Name").dxTextBox("instance").option("value"),
        Ui_Piece: $("#Ui_Piece").dxTextBox("instance").option("value"),
        Ui_PieceType: $("#Ui_PieceType").dxTextBox("instance").option("value"),
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
            DevExpress.ui.notify({
                message: response.status,
                position: {
                  my: 'top left',
                  at: 'top left'
                },
                type:'warning',
                width: '300',
                height:'150',
                hideAfter: 2000
              });
            Units_fetch();
        },
    });
}

//Create Context Menu..
const contextMenuItems = [{ text: "انشاء وحدة جديدة" }];

$(() => {
    $("#context-menu").dxContextMenu({
        dataSource: contextMenuItems,
        width: 250,
        target: "#Unitsdatagrid",

        onItemClick(e) {
            if (!e.itemData.items) {
                switch (e.itemData.text) {
                    case "انشاء وحدة جديدة":
                        var displaycard =
                            document.getElementById("Unitsaction");
                        if (displaycard.style.display == "none") {
                            document.getElementById(
                                "card_Unitstitle"
                            ).innerText = "جديد";

                            Units_cleardata();

                            displaycard.style.display = "block";
                            document
                                .getElementById("card_Unitstitle")
                                .scrollIntoView();
                        } else {
                            displaycard.style.display = "none";
                            document.getElementById(
                                "card_Unitstitle"
                            ).innerText = "";
                            Units_cleardata();

                            displaycard.style.display = "block";
                            document.getElementById(
                                "card_Unitstitle"
                            ).innerText = "جديد";
                            document
                                .getElementById("card_Unitstitle")
                                .scrollIntoView();
                        }
                        break;

                    default:
                        break;
                }

                //   DevExpress.ui.notify(`The "${e.itemData.text}" item was clicked`, 'success', 1500);
            }
        },
    });
});
// End Context Menu..

$(document).ready(function () {
    $("#danger-contained").dxButton({
        stylingMode: "contained",
        text: "اغلاق",
        type: "danger",
        icon: "close",
        width: 120,
        onClick() {
            var displaycard = document.getElementById("Unitsaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_Unitstitle").innerText = "";
                Units_cleardata();
                // Units_setStCode();
                displaycard.style.display = "none";
                document.getElementById("firstCard").scrollIntoView();
            }
        },
    });
});

// Button Save Data
$(document).ready(function () {
    $("#btnSave").dxButton({
        stylingMode: "contained",
        text: "حفظ",
        type: "default",
        icon: "check",
        width: 120,
        onClick() {
            let UiGuid = $("#Ui_Guid").dxTextBox("instance").option("value");
            if (UiGuid == null || UiGuid == "") {
                Units_insert();
            } else {
                Units_update();
            }
        },
    });
});
// End Button Save

// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#Ui_Name").dxTextBox({
            placeholder: "ادخل اسم الوحدة",
            inputAttr: { "aria-label": "Unit Name" },
        });
    });
    $(() => {
        $("#Ui_Guid").dxTextBox({
            placeholder: "Guid of the Unit",
            inputAttr: { "aria-label": "Ui Guid" },
        });
    });
    $(() => {
        $("#Ui_Piece").dxTextBox({
            placeholder: "عدد القطع",
            inputAttr: { "aria-label": "Piece" },
        });
    });
    $(() => {
        $("#Ui_PieceType").dxTextBox({
            placeholder: "نوع القطع",
            inputAttr: { "aria-label": "Piece Type" },
        });
    });
});
//
