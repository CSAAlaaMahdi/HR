// fetchdata_itemFour();
// itemFour_filldata();

function cleardata_itemFour() {
    $("#IT4_ID").dxTextBox("instance").option("value", "");
    $("#IT4_DateRange").dxTextBox("instance").option("value", "");
    $("#IT4_FramesOptions").dxTextArea("instance").option("value", "");
    $("#IT4_Model").dxTextBox("instance").option("value", "");
}

function checkdata_itemFour() {
    if ($("#IT4_DateRange").dxTextBox("instance").option("value") == "") {
        error_IT4_DateRange = "Require ";
        $("#error_IT4_DateRange").text(error_IT4_DateRange);
    } else {
        error_IT4_DateRange = "";
        $("#error_IT4_DateRange").text(error_IT4_DateRange);
    }
    if ($("#IT4_Model").dxTextBox("instance").option("value") == 0) {
        error_IT4_Model = "Require  ";
        $("#error_IT4_Model").text(error_IT4_Model);
    } else {
        error_IT4_Model = "";
        $("#error_IT4_Model").text(error_IT4_Model);
    }
}

function insertdata_itemFour() {
    var url = "itemFour";
    var data = {
        IT4_FK_IT: $("#IT4_FK_IT").dxTextBox("instance").option("value"),
        IT4_DateRange: $("#IT4_DateRange")
            .dxTextBox("instance")
            .option("value"),
        IT4_Model: $("#IT4_Model").dxTextBox("instance").option("value"),
        IT4_FramesOptions: $("#IT4_FramesOptions")
            .dxTextArea("instance")
            .option("value"),
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
            fetchdata_itemFour();
            clear_Data();
        },
    });
}

function fetchdata_itemFour() {
    $(document).ready(function () {
        let id = $("#IT_ID").dxTextBox("instance").option("value");
        $("#IT4_FK_IT").dxTextBox("instance").option("value", id);
        var url = "itemFour/";
        var data = {
            IT_ID: $("#IT_ID").dxTextBox("instance").option("value"),
        };
        $.ajax({
            type: "GET",
            url: url + "create",
            data: data,
            success: function (response) {
                // console.log(response);
                $(function () {
                    const dataGrid = $("#ModelsDataGrid").dxDataGrid({
                        dataSource: response.getItemsFour,
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
                        focusedRowEnabled:true,
                        remoteOperations: false,
                        searchPanel: {
                            visible: true,
                            highlightCaseSensitive: true,
                            width: 300,
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
                                dataField: "id",
                                caption: "ت",
                                width: 100,
                                alignment: 'right',
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "bold"; // Set the desired font weight
                                    let fontSize = "18px";
                                    let fontColor = 'green';
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
                                dataField: "IT4_DateRange",
                                caption: "تاريخ الانتاج",
                                width: 200,
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "bold"; // Set the desired font weight
                                    let fontSize = "18px";
                                    let fontColor = '#283741';

                                    $("<div>")
                                        .css({
                                            "font-size" :fontSize,
                                            "font-weight" : fontWeight,
                                            "color" :fontColor,
                                        })
                                        .text(cellValue)
                                        .appendTo(container);
                                },
                                // groupIndex: 0,
                            },
                            {
                                dataField: "IT4_Model",
                                caption: "الطراز",
                                width: 250,
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "bold"; // Set the desired font weight
                                    let fontSize = "18px";
                                    let fontColor = '#283741';

                                    $("<div>")
                                        .css({
                                            "font-size" :fontSize,
                                            "font-weight" : fontWeight,
                                            "color" :fontColor,
                                        })
                                        .text(cellValue)
                                        .appendTo(container);
                                },
                                // groupIndex: 0,
                            },
                            {
                                dataField: "IT4_FramesOptions",
                                caption: "خيارات الفريم",
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "bold"; // Set the desired font weight
                                    let fontSize = "18px";
                                    let fontColor = '#283741';

                                    $("<div>")
                                        .css({
                                            "font-size" :fontSize,
                                            "font-weight" : fontWeight,
                                            "color" :fontColor,
                                        })
                                        .text(cellValue)
                                        .appendTo(container);
                                },
                                // groupIndex: 0,
                            },

                            {
                                caption: "الحدث",
                                width: 250,
                                cellTemplate: function (container, options) {
                                    var row = options.row.data;

                                    var link1 = $("<div>");
                                    link1.dxButton({
                                        stylingMode: "contained",
                                        type: "normal",
                                        icon: "edit",
                                        onClick() {
                                            var rowData = options.data;
                                            let url = "itemFour/";
                                            let data = {
                                                IT4_ID: options.data.id,
                                            };
                                            $.ajax({
                                                type: "GET",
                                                url: url + "show",
                                                data: data,
                                                success: function (response) {
                                                    $("#IT4_ID")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.id,
                                                        });
                                                    $("#IT4_FK_IT")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.IT4_FK_IT,
                                                        });
                                                    $("#IT4_Model")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.IT4_Model,
                                                        });
                                                    $("#IT4_DateRange")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.IT4_DateRange,
                                                        });
                                                    $("#IT4_FramesOptions")
                                                        .dxTextArea("instance")
                                                        .option({
                                                            value: response.IT4_FramesOptions,
                                                        });

                                                    var displaycard =
                                                        document.getElementById(
                                                            "Modelsaction"
                                                        );
                                                    if (
                                                        displaycard.style
                                                            .display == "none"
                                                    ) {
                                                        document.getElementById(
                                                            "card_Modelstitle"
                                                        ).innerText =
                                                            "تحديث البيانات";
                                                        displaycard.style.display =
                                                            "block";
                                                        document
                                                            .getElementById(
                                                                "card_Modelstitle"
                                                            )
                                                            .scrollIntoView();
                                                    } else {
                                                        displaycard.style.display =
                                                            "none";
                                                        document.getElementById(
                                                            "card_Modelstitle"
                                                        ).innerText = "";
                                                        displaycard.style.display =
                                                            "block";
                                                        document.getElementById(
                                                            "card_Modelstitle"
                                                        ).innerText =
                                                            "تحديث البيانات";
                                                        document
                                                            .getElementById(
                                                                "card_Modelstitle"
                                                            )
                                                            .scrollIntoView();
                                                    }
                                                },
                                            });
                                        },
                                    });

                                    var link2 = $("<div>");
                                    link2.dxButton({
                                        stylingMode: "contained",
                                        icon: "add",
                                        onClick() {
                                            $("#IT5_FK_IT4")
                                                .dxTextBox("instance")
                                                .option({
                                                    value: options.data.id,
                                                });
                                            var displaycard =
                                                document.getElementById(
                                                    "ItemFifthaction"
                                                );
                                            if (
                                                displaycard.style.display ==
                                                "none"
                                            ) {
                                                document.getElementById(
                                                    "card_ItemFifthtitle"
                                                ).innerText = "اضافة طراز";
                                                displaycard.style.display =
                                                    "block";
                                                document
                                                    .getElementById(
                                                        "card_ItemFifthtitle"
                                                    )
                                                    .scrollIntoView();
                                            } else {
                                                displaycard.style.display =
                                                    "none";
                                                document.getElementById(
                                                    "card_ItemFifthtitle"
                                                ).innerText = "";
                                                displaycard.style.display =
                                                    "block";
                                                document.getElementById(
                                                    "card_ItemFifthtitle"
                                                ).innerText = "اضافة طراز";
                                                document
                                                    .getElementById(
                                                        "card_ItemFifthtitle"
                                                    )
                                                    .scrollIntoView();
                                            }
                                        },
                                    });
                                    link2.css("margin", "5px");

                                    var link3 = $("<div>");
                                    link3.dxButton({
                                        stylingMode: "contained",
                                        icon: "trash",
                                        onClick() {
                                            $.ajax({
                                                type: "GET",
                                                url: "ItemFour",
                                                data: "data",
                                                dataType: "dataType",
                                                success: function (response) { },
                                            });

                                        },
                                    });
                                    link3.css("margin", "5px");

                                    $(container).append(link1, link2, link3);
                                },
                            },
                        ],
                        onContentReady: function (e) {
                            // Add custom class to the header panel
                            e.element
                                .find(".dx-datagrid-headers")
                                .addClass("custom-header");
                        },
                        masterDetail: {
                            enabled: true,
                            template(container, options) {
                                const currentEmployeeData = options.data;
                                $("<div>")
                                    .dxDataGrid({
                                        columnAutoWidth: true,
                                        showBorders: true,
                                        filterRow: { visible: true },
                                        grouping: {
                                            autoExpandAll: false,
                                        },
                                        columns: [

                                            {
                                                dataField: "IT5_ModelDate",
                                                caption: "تاريخ الطراز",
                                                width: 175,
                                                cellTemplate: function(container, options) {
                                                    var cellValue = options.value;
                                                    var fontWeight = "bold"; // Set the desired font weight
                                                    let fontSize = "17px";
                                                    let fontColor = '#295f83';

                                                    $("<div>")
                                                        .css({
                                                            "font-size" :fontSize,
                                                            "font-weight" : fontWeight,
                                                            "color" :fontColor,
                                                        })
                                                        .text(cellValue)
                                                        .appendTo(container);
                                                },
                                            },
                                            {
                                                dataField: "IT5_MatchingModels",
                                                caption: "الطراز المطابق",
                                                width: 175,
                                                cellTemplate: function(container, options) {
                                                    var cellValue = options.value;
                                                    var fontWeight = "bold"; // Set the desired font weight
                                                    let fontSize = "17px";
                                                    let fontColor = '#295f83';

                                                    $("<div>")
                                                        .css({
                                                            "font-size" :fontSize,
                                                            "font-weight" : fontWeight,
                                                            "color" :fontColor,
                                                        })
                                                        .text(cellValue)
                                                        .appendTo(container);
                                                },
                                            },
                                            {
                                                dataField: "IT5_ModelOptions",
                                                caption: "مواصفات الطراز",
                                                cellTemplate: function(container, options) {
                                                    var cellValue = options.value;
                                                    var fontWeight = "bold"; // Set the desired font weight
                                                    let fontSize = "17px";
                                                    let fontColor = '#295f83';

                                                    $("<div>")
                                                        .css({
                                                            "font-size" :fontSize,
                                                            "font-weight" : fontWeight,
                                                            "color" :fontColor,
                                                        })
                                                        .text(cellValue)
                                                        .appendTo(container);
                                                },
                                            },
                                            {
                                                caption: "الحدث",
                                                width: 800,
                                                cellTemplate: function (container, options) {
                                                    var row = options.row.data;

                                                    var link1 = $("<div>");
                                                    link1.dxButton({
                                                        stylingMode: "contained",
                                                        type: "normal",
                                                        icon: "edit",
                                                        onClick() {
                                                            var rowData = options.data;
                                                            let url = "itemFive/";
                                                            let data = {
                                                                IT5_ID: options.data.id,
                                                            };
                                                            $.ajax({
                                                                type: "GET",
                                                                url: url + "show",
                                                                data: data,
                                                                success: function (response) {
                                                                    console.log(response);
                                                                    $("#IT5_ID")
                                                                        .dxTextBox("instance")
                                                                        .option({
                                                                            value: response.id,
                                                                        });
                                                                    $("#IT5_FK_IT4")
                                                                        .dxTextBox("instance")
                                                                        .option({
                                                                            value: response.IT5_FK_IT4,
                                                                        });
                                                                    $("#IT5_ModelDate")
                                                                        .dxTextBox("instance")
                                                                        .option({
                                                                            value: response.IT5_ModelDate,
                                                                        });
                                                                    $("#IT5_MatchingModels")
                                                                        .dxTextBox("instance")
                                                                        .option({
                                                                            value: response.IT5_MatchingModels,
                                                                        });
                                                                    $("#IT5_ModelOptions")
                                                                        .dxTextArea("instance")
                                                                        .option({
                                                                            value: response.IT5_ModelOptions,
                                                                        });

                                                                    var displaycard =
                                                                        document.getElementById(
                                                                            "ItemFifthaction"
                                                                        );
                                                                    if (
                                                                        displaycard.style
                                                                            .display == "none"
                                                                    ) {
                                                                        document.getElementById(
                                                                            "card_ItemFifthtitle"
                                                                        ).innerText =
                                                                            "تحديث البيانات";
                                                                        displaycard.style.display =
                                                                            "block";
                                                                        document
                                                                            .getElementById(
                                                                                "card_ItemFifthtitle"
                                                                            )
                                                                            .scrollIntoView();
                                                                    } else {
                                                                        displaycard.style.display =
                                                                            "none";
                                                                        document.getElementById(
                                                                            "card_ItemFifthtitle"
                                                                        ).innerText = "";
                                                                        displaycard.style.display =
                                                                            "block";
                                                                        document.getElementById(
                                                                            "card_ItemFifthtitle"
                                                                        ).innerText =
                                                                            "تحديث البيانات";
                                                                        document
                                                                            .getElementById(
                                                                                "card_ItemFifthtitle"
                                                                            )
                                                                            .scrollIntoView();
                                                                    }
                                                                },
                                                            });
                                                        },
                                                    });



                                                    var link3 = $("<div>");
                                                    link3.dxButton({
                                                        stylingMode: "contained",
                                                        icon: "trash",
                                                        onClick() {
                                                            $.ajax({
                                                                type: "GET",
                                                                url: "ItemFour",
                                                                data: "data",
                                                                dataType: "dataType",
                                                                success: function (response) { },
                                                            });

                                                        },
                                                    });
                                                    link3.css("margin", "5px");

                                                    $(container).append(link1, link3);
                                                },
                                            },
                                        ],
                                        dataSource:
                                            new DevExpress.data.DataSource({
                                                store: new DevExpress.data.ArrayStore(
                                                    {
                                                        key: "id",
                                                        data: options.data
                                                            .items_five,
                                                    }
                                                ),
                                                filter: [
                                                    "IT5_FK_IT4",
                                                    "=",
                                                    options.key,
                                                ],
                                            }),
                                    })
                                    .appendTo(container);
                            },
                        },
                    });
                });
            },
        });
    });
}

function updatedata_itemFour() {
    var url = "itemFour/";
    var data = {
        IT4_ID: $("#IT4_ID").dxTextBox("instance").option("value"),
        IT4_FK_IT: $("#IT4_FK_IT").dxTextBox("instance").option("value"),
        IT4_DateRange: $("#IT4_DateRange")
            .dxTextBox("instance")
            .option("value"),
        IT4_Model: $("#IT4_Model").dxTextBox("instance").option("value"),
        IT4_FramesOptions: $("#IT4_FramesOptions")
            .dxTextArea("instance")
            .option("value"),
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
            fetchdata_itemFour();
        },
    });
}

//#region Create Components

$(document).ready(function () {
    $(() => {
        $("#IT4_FramesOptions").dxTextArea({
            // ...
            minHeight: 50,
            maxHeight: 300,
            autoResizeEnabled: true,
            // value: longText,
            maxLength: 500,
            label: "Location",
        });
    });
    $(() => {
        $("#IT4_ID").dxTextBox({
            placeholder: "ID",
            inputAttr: { "aria-label": "IT4 ID" },
        });
    });
    $(() => {
        $("#IT4_FK_IT").dxTextBox({
            placeholder: "ID",
            inputAttr: { "aria-label": "IT4_FK_ID" },
        });
    });
    $(() => {
        $("#IT4_Model").dxTextBox({
            placeholder: "Enter the Model",
            inputAttr: { "aria-label": "Models" },
        });
    });
    $(() => {
        $("#IT4_DateRange").dxTextBox({
            placeholder: "Range Date ...",
            inputAttr: { "aria-label": "Date Range" },
        });
    });
    $(() => {
        $("#ModelsDataGrid").dxDataGrid();
    });
    $("#Popup").dxPopup({
        // ...
        showTitle: true,
        title: "Deleting...",
        width: 500,
        height: "auto",
        visible: false, // Set this to true to show the popup by default
        dragEnabled: true, // Allow dragging the popup
        hideOnOutsideClick: true,
        resizeEnabled: true,
        position: {
            my: "top", // Position the popup at the center of the screen
            at: "top",
            of: window,
        },
        contentTemplate: () => {
            const content = $("<div />");
            content.append($(popupText).css("font-size", "1.2rem"), $(Delete));
            return content;
        },
    });
    const popupText = `<p>Are Your Sure To Delete This Row</p>`;
    const Delete = $("<div>");
    Delete.dxButton({
        stylingMode: "contained",
        text: "Delete",
        type: "danger",
        icon: "trash",
        width: 120,
        onClick() {
            console.log("buttons");
        },
    });
});

//#endregion

//#region  Buttons
$("#btnSaveModels").dxButton({
    stylingMode: "contained",
    text: "حفظ",
    type: "default",
    icon: "check",
    width: 120,
    onClick() {
        let IT4_ID = $("#IT4_ID").dxTextBox("instance").option("value");

        if (IT4_ID == null || IT4_ID == "") {
            checkdata_itemFour();
            if (error_IT4_DateRange != "" || error_IT4_Model != "") {
                return false;
            } else {
                insertdata_itemFour();
            }
        } else {
            checkdata_itemFour();
            if (error_IT4_DateRange != "" || error_IT4_Model != "") {
                return false;
            } else {
                updatedata_itemFour();
            }
        }
    },
});
$("#btnCloseModels").dxButton({
    stylingMode: "contained",
    text: "اغلاق",
    type: "danger",
    icon: "close",
    width: 120,
    onClick() {
        clearthree_Data();
        let display = document.getElementById("Modelsaction");
        display.style.display = "none";
        document.getElementById("FourthCard").scrollIntoView();
    },
});
$("#btnAddModels").dxButton({
    stylingMode: "contained",
    text: "اضافة ",
    type: "success",
    icon: "Add",
    width: 120,
    onClick() {
        cleardata_itemFour();
        var displaycard = document.getElementById("Modelsaction");
        if (displaycard.style.display == "none") {
            document.getElementById("card_Modelstitle").innerText = "اضافة طراز";
            displaycard.style.display = "block";
            document.getElementById("card_Modelstitle").scrollIntoView();
        } else {
            displaycard.style.display = "none";
            document.getElementById("card_Modelstitle").innerText = "";
            displaycard.style.display = "block";
            document.getElementById("card_Modelstitle").innerText = "اضافة طراز";
            document.getElementById("card_Modelstitle").scrollIntoView();
        }
    },
});

//#endregion
