//#region Functions
function fetchdata_ItemThree() {
    $(document).ready(function () {
        var url = "ItemThree/";
        let data = {
            IT_ID: $("#IT_ID").dxTextBox("instance").option("value"),
        };
        $.ajaxSetup({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
            },
        });
        $.ajax({
            type: "GET",
            url: url + "create",
            data: data,
            success: function (response) {
                $(function () {
                    const dataGrid = $("#StoresDataGrid").dxDataGrid({
                        dataSource: response.getItemThree,
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
                            width: 500,
                        },
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
                                dataField: "IT2_Count_Kind2",
                                caption: "الوحدة",
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "18px";
                                    $("<div>")
                                        .css({
                                            "font-size" :fontSize,
                                            "font-weight" : fontWeight,
                                        })
                                        .text(cellValue)
                                        .appendTo(container);
                                },
                                // groupIndex: 0,
                            },
                            {
                                dataField: "IT2_Count",
                                caption: "الكمية",
                                dataType: "numeric",
                                alignment: "right",
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "bold"; // Set the desired font weight
                                    let fontSize = "18px";
                                    let fontColor = '#283741';
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
                                            "color" :fontColor,
                                        })
                                        .text(formattedValue)
                                        .appendTo(container);
                                },
                            },
                            {
                                dataField: "IT2_Smallest",
                                caption: "الوحدة الاصغر",
                                dataType: "numeric",
                                alignment: "right",
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "bold"; // Set the desired font weight
                                    let fontSize = "18px";
                                    let fontColor = 'red'
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
                                            "color" : fontColor,
                                        })
                                        .text(formattedValue)
                                        .appendTo(container);
                                },
                            },
                            {
                                dataField: "IT2_StoreName2",
                                caption: "المخزن",
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "18px";
                                    $("<div>")
                                        .css({
                                            "font-size" :fontSize,
                                            "font-weight" : fontWeight,
                                        })
                                        .text(cellValue)
                                        .appendTo(container);
                                },
                            },
                            {
                                dataField: "IT2_BillType",
                                caption: "الفاتورة",
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "18px";
                                    $("<div>")
                                        .css({
                                            "font-size" :fontSize,
                                            "font-weight" : fontWeight,
                                        })
                                        .text(cellValue)
                                        .appendTo(container);
                                },
                            },
                            {
                                dataField: "IT2_ItemPosition",
                                caption: "موقع المادة",
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "18px";
                                    $("<div>")
                                        .css({
                                            "font-size" :fontSize,
                                            "font-weight" : fontWeight,
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

                                            let url = "ItemThree/";
                                            let data = {
                                                IT2_ID: rowData.IT2_ID,
                                            };
                                            $.ajax({
                                                type: "GET",
                                                url: url + "show",
                                                data: data,
                                                success: function (response) {
                                                    $("#IT2_ID")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.id,
                                                        });
                                                    $("#IT2_ItemPosition")
                                                        .dxTextArea("instance")
                                                        .option({
                                                            value: response.IT2_ItemPosition,
                                                        });
                                                    if (
                                                        response.IT2_State ==
                                                        true
                                                    ) {
                                                        $("#IT2_State")
                                                            .dxSwitch(
                                                                "instance"
                                                            )
                                                            .option(
                                                                "value",
                                                                true
                                                            );
                                                    } else {
                                                        $("#IT2_State")
                                                            .dxSwitch(
                                                                "instance"
                                                            )
                                                            .option(
                                                                "value",
                                                                false
                                                            );
                                                    }

                                                    var displaycard =
                                                        document.getElementById(
                                                            "Storesaction"
                                                        );
                                                    if (
                                                        displaycard.style
                                                            .display == "none"
                                                    ) {
                                                        document.getElementById(
                                                            "card_Storestitle"
                                                        ).innerText =
                                                            "تحديث البيانات";
                                                        displaycard.style.display =
                                                            "block";
                                                        document
                                                            .getElementById(
                                                                "card_Storestitle"
                                                            )
                                                            .scrollIntoView();
                                                    } else {
                                                        displaycard.style.display =
                                                            "none";
                                                        document.getElementById(
                                                            "card_Storestitle"
                                                        ).innerText = "";
                                                        displaycard.style.display =
                                                            "block";
                                                        document.getElementById(
                                                            "card_Storestitle"
                                                        ).innerText =
                                                            "تحديث البيانات";
                                                        document
                                                            .getElementById(
                                                                "card_Storestitle"
                                                            )
                                                            .scrollIntoView();
                                                    }
                                                },
                                            });
                                        },
                                    });

                                    var link2 = $("<div>").css({'margin-right':'10px'});
                                    link2.dxButton({
                                        stylingMode: "contained",
                                        icon: "trash",
                                        type:"default",
                                        onClick() {
                                            var rowData = options.data;
                                        },
                                    });

                                    $(container).append(link1, link2);
                                },
                            },
                        ],
                        summary: {
                            totalItems: [
                                {
                                    column: "IT2_Smallest",
                                    summaryType: "sum",
                                    valueFormat: "#0.00",
                                },
                            ],
                        },
                        onContentReady: function (e) {
                            // Add custom class to the header panel
                            e.element
                                .find(".dx-datagrid-headers")
                                .addClass("custom-header");
                        },
                    });
                });
            },
        });
    });
}

function Itemthree_Update() {
    let url = "ItemThree/";
    let data = {
        IT2_ID: $("#IT2_ID").dxTextBox("instance").option("value"),
        IT2_ItemPosition: $("#IT2_ItemPosition")
            .dxTextArea("instance")
            .option("value"),
        IT2_State: (function () {
            if ($("#IT2_State").dxSwitch("instance").option("value")) {
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
        type: "PUT",
        url: url + "update",
        data: data,
        success: function (response) {
            DevExpress.ui.notify({
                message: 'تم تحديث البيانات بنجاح',
                position: {
                  my: 'top left',
                  at: 'top left'
                },
                type:'warning',
                width: '300',
                height:'150',
                hideAfter: 2000
              });
                fetchdata_ItemThree();

        },
    });
}

//#endregion

//#region  buttons
$("#btnSaveStores").dxButton({
    stylingMode: "contained",
    text: "حفظ",
    type: "default",
    icon: "check",
    width: 120,
    onClick() {
        let IT2ID = $("#IT2_ID").dxTextBox("instance").option("value");

        if (IT2ID == null || IT2ID == "") {
            return false;
        } else {
            Itemthree_Update();
        }
    },
});
$("#btnCloseStores").dxButton({
    stylingMode: "contained",
    text: "اغلاق",
    type: "danger",
    icon: "close",
    width: 120,
    onClick() {
        clearthree_Data();
        let display = document.getElementById("Storesaction");
        display.style.display = "none";
        document.getElementById("secondCard").scrollIntoView();
    },
});

//#endregion

//#region components
$(() => {
    $("#IT2_ItemPosition").dxTextArea({
        // ...
        minHeight: 50,
        maxHeight: 300,
        autoResizeEnabled: true,
        // value: longText,
        maxLength: 500,
        label: "الموقع",
    });
});
$(() => {
    $("#IT2_ID").dxTextBox({
        placeholder: "ID",
        inputAttr: { "aria-label": "IT2 ID" },
    });
});
$(() => {
    $("#IT2_State").dxSwitch();
});

//#endregion
