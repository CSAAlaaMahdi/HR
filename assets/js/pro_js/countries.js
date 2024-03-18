country_fetch();

function country_cleardata() {
    $("#C_Guid").dxTextBox("instance").option("value", "");
    $("#C_Name").dxTextBox("instance").option("value", "");
}

function country_chechdata() {
    if ($.trim($(".C_Name").val()).length == 0) {
        error_C_Name = "Required";
        $("#error_C_Name").text(error_C_Name);
    } else {
        error_C_Name = "";
        $("#error_C_Name").text(error_C_Name);
    }
}

function country_insert() {
    var url = "country";
    var data = {
        C_Name: $("#C_Name").dxTextBox("instance").option("value"),
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
            country_fetch();
            country_cleardata();
        },
    });
}

function country_fetch() {
    $(document).ready(function () {
        var url = "country/";
        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {
                    const dataGrid = $("#countrydatagrid").dxDataGrid({
                        dataSource: response.getCountry,
                        keyExpr: "C_Guid",
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
                                dataField: "C_Name",
                                caption: "اسم الدولة",
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "16px";
                                    let fontColor ="#283741";
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

                                            $("#C_Guid")
                                                .dxTextBox("instance")
                                                .option({
                                                    value: options.data.C_Guid,
                                                });
                                            $("#C_Name")
                                                .dxTextBox("instance")
                                                .option({
                                                    value: options.data.C_Name,
                                                });

                                            var displaycard =
                                                document.getElementById(
                                                    "countryaction"
                                                );
                                            if (
                                                displaycard.style.display ==
                                                "none"
                                            ) {
                                                document.getElementById(
                                                    "card_countrytitle"
                                                ).innerText = "تعديل البيانات";
                                                displaycard.style.display =
                                                    "block";
                                                document
                                                    .getElementById(
                                                        "card_countrytitle"
                                                    )
                                                    .scrollIntoView();
                                            } else {
                                                displaycard.style.display =
                                                    "none";
                                                document.getElementById(
                                                    "card_countrytitle"
                                                ).innerText = "";
                                                displaycard.style.display =
                                                    "block";
                                                document.getElementById(
                                                    "card_countrytitle"
                                                ).innerText = "تعديل البيانات";
                                                document
                                                    .getElementById(
                                                        "card_countrytitle"
                                                    )
                                                    .scrollIntoView();
                                            }
                                        },
                                    });

                                    var link2 = $("<div>").css({'margin-right':'10px'});
                                    link2.dxButton({
                                        stylingMode: "contained",
                                        icon: "trash",
                                        type: "default",
                                        onClick() {
                                            var rowData = options.data;

                                            $("#C_Guid")
                                                .dxTextBox("instance")
                                                .option({
                                                    value: options.data.C_Guid,
                                                });
                                            let data = {
                                                C_Guid: $("#C_Guid")
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
                                                url: "country/destroy",
                                                data: data,
                                                success: function (response) {
                                                    DevExpress.ui.notify({
                                                        message: response.status,
                                                        position: {
                                                            my: "top left",
                                                            at: "top left",
                                                        },
                                                        type: "error",
                                                        width: "300",
                                                        height: "150",
                                                        hideAfter: 2000,
                                                    });
                                                    country_fetch();
                                                    country_cleardata();

                                                },
                                            });
                                        },
                                    });



                                    $(container).append(link1, link2);
                                },
                            },
                        ],
                        onContentReady :function (e) {
                            e.element.find('.dx-datagrid-headers')
                            .addClass("custom-header_Countries");
                         }

                    });
                });
            },
        });
    });
}

function country_update() {
    var url = "country/";
    var data = {
        C_Guid: $("#C_Guid").dxTextBox("instance").option("value"),
        C_Name: $("#C_Name").dxTextBox("instance").option("value"),
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
                    my: "top left",
                    at: "top left",
                },
                type: "warning",
                width: "300",
                height: "150",
                hideAfter: 2000,
            });
            country_fetch();
        },
    });
}
//Create Context Menu..
const contextMenuItems = [{ text: "اضافة دولة جديدة" }];

$(() => {
    $("#context-menu").dxContextMenu({
        dataSource: contextMenuItems,
        width: 250,
        target: "#countrydatagrid",

        onItemClick(e) {
            if (!e.itemData.items) {
                switch (e.itemData.text) {
                    case "اضافة دولة جديدة":
                        var displaycard =
                            document.getElementById("countryaction");
                        if (displaycard.style.display == "none") {
                            document.getElementById(
                                "card_countrytitle"
                            ).innerText = "اضافة دولة";

                            country_cleardata();

                            displaycard.style.display = "block";
                            document
                                .getElementById("card_countrytitle")
                                .scrollIntoView();
                        } else {
                            displaycard.style.display = "none";
                            document.getElementById(
                                "card_countrytitle"
                            ).innerText = "";
                            country_cleardata();

                            displaycard.style.display = "block";
                            document.getElementById(
                                "card_countrytitle"
                            ).innerText = "اضافة دولة";
                            document
                                .getElementById("card_countrytitle")
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
            var displaycard = document.getElementById("countryaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_countrytitle").innerText = "";
                country_cleardata();
                // country_setStCode();
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
            let CGuid = $("#C_Guid").dxTextBox("instance").option("value");
            if (CGuid == null || CGuid == "") {
                country_insert();
            } else {
                country_update();
            }
        },
    });
});
// End Button Save

// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#C_Name").dxTextBox({
            placeholder: "ادخل اسم الدولة",
            inputAttr: { "aria-label": "Country Name" },
        });
    });
    $(() => {
        $("#C_Guid").dxTextBox({
            placeholder: "Guid of the Country",
            inputAttr: { "aria-label": " Country Guid" },
        });
    });
});
//

$((message) => {
    $("#notificationContainer").dxToast({
        message: message,
        position: {
            my: "top right",
            at: "top right",
            of: window,
        },
        width: 300,
        height: 100,
        animation: {
            show: { type: "fade", duration: 400, from: 0, to: 1 },
            hide: { type: "fade", duration: 400, from: 1, to: 0 },
        },
        closeOnClick: true,
        displayTime: 4000, // Adjust the display time as per your preference
    });
});
