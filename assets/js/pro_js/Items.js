Items_fetch();
Items_filldata();

function Items_cleardata() {
    $("#ID").dxTextBox("instance").option("value", "");
    $("#ItemName").dxTextBox("instance").option("value", "");
    $("#ItemCode").dxTextBox("instance").option("value", "");
    $("#Brand").dxSelectBox("instance").option("value", "");
    $("#ItemUnit").dxSelectBox("instance").option("value", "");
    $("#ItemQuantity").dxTextBox("instance").option("value", "");
    $("#ItemPlace").dxDropDownBox("instance").option("value", "");
    $("#ItemStatus").dxSelectBox("instance").option("value", "");
    $("#Description").dxTextArea("instance").option("value", "");
    $("#ParentID").dxDropDownBox("instance").option("value", 0);
}

function Items_chechdata() {
    if (
        $.trim($("#ItemName").dxTextBox("instance").option("value")).length == 0
    ) {
        error_ItemName = "مطلوب";
        $("#error_ItemName").text(error_ItemName);
    } else {
        error_ItemName = "";
        $("#error_ItemName").text(error_ItemName);
    }
}

function Items_UpdateOrCreate() {
    var url = "items";
    var data = {
        ParentID: $("#ParentID").dxDropDownBox("instance").option("value"),
        ItemName: $("#ItemName").dxTextBox("instance").option("value"),
        ID: $("#ID").dxTextBox("instance").option("value"),
        ItemCode: $("#ItemCode").dxTextBox("instance").option("value"),
        Brand: $("#Brand").dxSelectBox("instance").option("value"),
        ItemUnit: $("#ItemUnit").dxSelectBox("instance").option("value"),
        ItemQuantity: $("#ItemQuantity").dxTextBox("instance").option("value"),
        ItemPlace: $("#ItemPlace").dxDropDownBox("instance").option("value"),
        ItemStatus: $("#ItemStatus").dxSelectBox("instance").option("value"),
        Description: $("#Description").dxTextArea("instance").option("value"),
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
            Items_fetch();
            Items_filldata();
        },
    });
}

function Items_filldata() {
    var url = "itemsfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {
                $(() => {
                    let dataGrid;
                    $("#ParentID").dxDropDownBox({
                        value: 0,
                        valueExpr: "id",
                        deferRendering: false,
                        placeholder: "اختر المجموعة",
                        inputAttr: { "aria-label": "Parent Group" },
                        displayExpr(item) {
                            return item && `${item.ItemName}`;
                        },
                        showClearButton: true,
                        dataSource: response.getItems, //makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField: "ItemName",
                                        caption: "اسم المجموعة",
                                    },
                                ],
                                hoverStateEnabled: true,
                                paging: { enabled: true, pageSize: 10 },
                                filterRow: { visible: true },
                                scrolling: { mode: "virtual" },
                                selection: { mode: "single" },
                                selectedRowKeys: value,
                                height: "100%",
                                onSelectionChanged(selectedItems) {
                                    const keys = selectedItems.selectedRowKeys;
                                    const hasSelection = keys.length;
                                    e.component.option(
                                        "value",
                                        hasSelection ? keys[0].id : null
                                    );
                                },
                            });

                            dataGrid = $dataGrid.dxDataGrid("instance");

                            e.component.on("valueChanged", (args) => {
                                dataGrid.selectRows(args.value, true);
                                e.component.close();
                            });

                            return $dataGrid;
                        },
                        onValueChanged: function (e) {
                            let IDValue = $("#ID")
                                .dxTextBox("instance")
                                .option("value");
                            if (IDValue == "" || IDValue == null) {
                                setMaskCode();
                            } else {
                            }
                        },
                    });
                });
                $(() => {
                    $("#Brand").dxSelectBox({
                        dataSource: response.getBrand,
                        inputAttr: { style: "font-size:13px" },
                        placeholder: "الماركة",
                        searchEnabled: true,
                        displayExpr: "Brand",
                        valueExpr: "Brand",
                        searchMode: "contains",
                        acceptCustomValue: true,
                        dropDownOptions: {
                            height: 400,
                        },
                        onCustomItemCreating(data) {
                            if (!data.text) {
                                data.customItem = null;
                                return;
                            }

                            const newItem = {
                                Brand: data.text,
                            };

                            response.getBrand.push(newItem);
                            data.component.option("value", newItem);
                            data.customItem = newItem;
                        },
                    });
                });
                $(() => {
                    $("#ItemUnit").dxSelectBox({
                        dataSource: response.getItemUnit,
                        inputAttr: { style: "font-size:13px" },
                        placeholder: "الوحدة",
                        searchEnabled: true,
                        displayExpr: "ItemUnit",
                        valueExpr: "ItemUnit",
                        searchMode: "contains",
                        acceptCustomValue: true,
                        dropDownOptions: {
                            height: 400,
                        },
                        onCustomItemCreating(data) {
                            if (!data.text) {
                                data.customItem = null;
                                return;
                            }

                            const newItem = {
                                ItemUnit: data.text,
                            };

                            response.getItemUnit.push(newItem);
                            data.component.option("value", newItem);
                            data.customItem = newItem;
                        },
                    });
                });
                $(() => {
                    let dataGrid;
                    $("#ItemPlace").dxDropDownBox({
                        value: null,
                        valueExpr: "ID",
                        deferRendering: false,
                        placeholder: "اختر المكان",
                        inputAttr: { "aria-label": "Parent Group" },
                        displayExpr(item) {
                            return item && `${item.placeName}`;
                        },
                        showClearButton: true,
                        dataSource: response.getItemPlace, //makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField: "placeName",
                                        caption: "اسم المكان",
                                    },
                                ],
                                hoverStateEnabled: true,
                                paging: { enabled: true, pageSize: 10 },
                                filterRow: { visible: true },
                                scrolling: { mode: "virtual" },
                                selection: { mode: "single" },
                                selectedRowKeys: value,
                                height: "100%",
                                onSelectionChanged(selectedItems) {
                                    const keys = selectedItems.selectedRowKeys;
                                    const hasSelection = keys.length;
                                    e.component.option(
                                        "value",
                                        hasSelection ? keys[0].ID : null
                                    );
                                },
                            });

                            dataGrid = $dataGrid.dxDataGrid("instance");

                            e.component.on("valueChanged", (args) => {
                                dataGrid.selectRows(args.value, true);
                                e.component.close();
                            });

                            return $dataGrid;
                        },
                    });
                });
                $(() => {
                    $("#ItemStatus").dxSelectBox({
                        dataSource: response.getItemStatus,
                        inputAttr: { style: "font-size:13px" },
                        placeholder: "حالةا لمادة",
                        searchEnabled: true,
                        displayExpr: "ItemStatus",
                        valueExpr: "ItemStatus",
                        searchMode: "contains",
                        acceptCustomValue: true,
                        dropDownOptions: {
                            height: 400,
                        },
                        onCustomItemCreating(data) {
                            if (!data.text) {
                                data.customItem = null;
                                return;
                            }

                            const newItem = {
                                ItemStatus: data.text,
                            };

                            response.getItemStatus.push(newItem);
                            data.component.option("value", newItem);
                            data.customItem = newItem;
                        },
                    });
                });
            },
        });
    });
}
function Items_fetch() {
    $(document).ready(function () {
        var url = "items/";

        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {
                    const dataGrid = $("#Itemsdatagrid").dxDataGrid({
                        dataSource: response.getItems,
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
                            width: 300,
                        },
                        focusedRowEnabled: true,
                        filterRow: { visible: true },
                        groupPanel: { visible: true },
                        grouping: {
                            autoExpandAll: false,
                        },
                        allowColumnReordering: true,
                        rowAlternationEnabled: true,
                        showBorders: true,
                        columnChooser: { enabled: true },
                        export: {
                            enabled: true,
                            allowExportSelectedData: false,
                        },
                        onExporting(e) {
                            const workbook = new ExcelJS.Workbook();
                            const worksheet =
                                workbook.addWorksheet("Employees");

                            DevExpress.excelExporter
                                .exportDataGrid({
                                    component: e.component,
                                    worksheet,
                                    autoFilterEnabled: true,
                                })
                                .then(() => {
                                    workbook.xlsx
                                        .writeBuffer()
                                        .then((buffer) => {
                                            saveAs(
                                                new Blob([buffer], {
                                                    type: "application/octet-stream",
                                                }),
                                                "Employees.xlsx"
                                            );
                                        });
                                });
                        },
                        columns: [
                            {
                                dataField: "id",
                                caption: "ت",
                                visible: false,
                            },
                            {
                                caption: "#",
                                width: 100,
                                cellTemplate: function (container, options) {
                                    var imageUrl =
                                        "assets/img/navbar/icons8_New_Product_64px.png";

                                    // Concatenate the base URL with the image filename
                                    // var imageUrl = baseUrl + imageName;

                                    var image = $("<img>")
                                        .attr("src", imageUrl)
                                        .css({
                                            width: "40px",
                                            height: "40px",
                                        });
                                    $(container).append(image);
                                },
                            },
                            {
                                dataField: "ItemName",
                                caption: " المادة",
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "13px";
                                    let fontColor = "#2F4F4F";
                                    $("<div>")
                                        .css({
                                            "font-size": fontSize,
                                            "font-weight": fontWeight,
                                            color: fontColor,
                                        })
                                        .text(cellValue)
                                        .appendTo(container);
                                },
                                // groupIndex: 0,
                            },
                            {
                                dataField: "ParentID",
                                caption: "المجموعة",
                                alignment: "right",
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "13px";
                                    let fontColor = "#2F4F4F";
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
                                dataField: "ItemCode",
                                caption: "كود المادة",
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "13px";
                                    let fontColor = "#2F4F4F";
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
                                dataField: "Brand",
                                caption: "الماركة ",
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "13px";
                                    let fontColor = "#2F4F4F";
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
                                dataField: "ItemUnit",
                                caption: "الوحدة",
                                visible: false,
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "13px";
                                    let fontColor = "#2F4F4F";
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
                                dataField: "Quantity",
                                caption: "الكمية",
                                visible: true,
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "13px";
                                    let fontColor = "#2F4F4F";
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
                                dataField: "ItemPlace",
                                caption: "موقع المادة",
                                visible: false,
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "13px";
                                    let fontColor = "#2F4F4F";
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
                                dataField: "ItemStatus",
                                caption: "حالة ا لمادة",
                                visible: false,
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "13px";
                                    let fontColor = "#2F4F4F";
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
                                dataField: "Description",
                                caption: "ملاحظات",
                                visible: false,
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "13px";
                                    let fontColor = "#2F4F4F";
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
                                    $.ajax({
                                        type: "GET",
                                        url: "dashboardmainPermissions/Permissions",
                                        success: function (response) {
                                            // console.log(response);
                                            let MainValue =
                                                response.Permission.filter(
                                                    function (item) {
                                                        return (
                                                            item.FormName ===
                                                            "المواد"
                                                        );
                                                    }
                                                );
                                            var link1 = $("<div>").css({
                                                "background-color": "##64DDBB",
                                            });
                                            link1.dxButton({
                                                stylingMode: "contained",
                                                type: "normal",
                                                icon: "edit",
                                                disabled:
                                                    !MainValue[0]["OptionEdit"],
                                                onClick() {
                                                    var rowData = options.data;
                                                    let data = {
                                                        ID: rowData.id,
                                                    };
                                                    $.ajax({
                                                        type: "GET",
                                                        url: "items/show",
                                                        data: data,
                                                        success: function (
                                                            response
                                                        ) {
                                                            $("#ID")
                                                                .dxTextBox(
                                                                    "instance"
                                                                )
                                                                .option({
                                                                    value: response.id,
                                                                });
                                                            $("#ItemCode")
                                                                .dxTextBox(
                                                                    "instance"
                                                                )
                                                                .option({
                                                                    value: response.ItemCode,
                                                                });

                                                            $("#ParentID")
                                                                .dxDropDownBox(
                                                                    "instance"
                                                                )
                                                                .option({
                                                                    value: Number(
                                                                        response.ParentID
                                                                    ),
                                                                });
                                                            $("#ItemName")
                                                                .dxTextBox(
                                                                    "instance"
                                                                )
                                                                .option({
                                                                    value: response.ItemName,
                                                                });
                                                            $("#ItemQuantity")
                                                                .dxTextBox(
                                                                    "instance"
                                                                )
                                                                .option({
                                                                    value: response.Quantity,
                                                                });
                                                            $("#Brand")
                                                                .dxSelectBox(
                                                                    "instance"
                                                                )
                                                                .option({
                                                                    value: response.Brand,
                                                                });

                                                            $("#ItemUnit")
                                                                .dxSelectBox(
                                                                    "instance"
                                                                )
                                                                .option({
                                                                    value: response.ItemUnit,
                                                                });

                                                            $("#ItemPlace")
                                                                .dxDropDownBox(
                                                                    "instance"
                                                                )
                                                                .option({
                                                                    value: Number(
                                                                        response.ItemPlace
                                                                    ),
                                                                });
                                                            $("#ItemStatus")
                                                                .dxSelectBox(
                                                                    "instance"
                                                                )
                                                                .option({
                                                                    value: response.ItemStatus,
                                                                });
                                                            $("#Description")
                                                                .dxTextArea(
                                                                    "instance"
                                                                )
                                                                .option({
                                                                    value: response.Description,
                                                                });

                                                            var displaycard =
                                                                document.getElementById(
                                                                    "Itemsaction"
                                                                );
                                                            if (
                                                                displaycard
                                                                    .style
                                                                    .display ==
                                                                "none"
                                                            ) {
                                                                document.getElementById(
                                                                    "card_Itemstitle"
                                                                ).innerText =
                                                                    "تعديل البيانات";
                                                                displaycard.style.display =
                                                                    "block";
                                                                document
                                                                    .getElementById(
                                                                        "card_Itemstitle"
                                                                    )
                                                                    .scrollIntoView();
                                                            } else {
                                                                displaycard.style.display =
                                                                    "none";
                                                                document.getElementById(
                                                                    "card_Itemstitle"
                                                                ).innerText =
                                                                    "";
                                                                displaycard.style.display =
                                                                    "block";
                                                                document.getElementById(
                                                                    "card_Itemstitle"
                                                                ).innerText =
                                                                    "تعديل البيانات";
                                                                document
                                                                    .getElementById(
                                                                        "card_Itemstitle"
                                                                    )
                                                                    .scrollIntoView();
                                                            }
                                                        },
                                                    });
                                                },
                                            });

                                            var link2 = $("<div>").css({
                                                "margin-right": "10px",
                                            });
                                            link2.dxButton({
                                                stylingMode: "contained",
                                                icon: "trash",
                                                type: "default",
                                                disabled:
                                                    !MainValue[0]["OptionDel"],
                                                onClick() {
                                                    var rowData = options.data;
                                                    let data = {
                                                        ID: rowData.id,
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
                                                        url: "items/destroy",
                                                        data: data,
                                                        success: function (
                                                            response
                                                        ) {
                                                            Items_fetch();
                                                            Items_cleardata();
                                                            DevExpress.ui.notify(
                                                                {
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
                                                                }
                                                            );
                                                            Items_fetch();
                                                        },
                                                    });
                                                },
                                            });

                                            $(container).append(link1, link2);
                                        },
                                    });
                                },
                            },
                        ],
                        onContentReady: function (e) {
                            // Add custom class to the header panel
                            e.element
                                .find(".dx-datagrid-headers")
                                .addClass("custom-header_Items");
                        },
                    });
                });
            },
        });
    });
}

function setMaskCode() {
    let selectValue = $("#ParentID").dxDropDownBox("instance").option("value");
    if (selectValue == "" || selectValue == null) {
        $.ajax({
            type: "GET",
            data: { ParentID: selectValue },
            url: "itemsSetCode/setCode",
            success: function (response) {
                let code = Number(response.getData);
                $("#ItemCode").dxTextBox("instance").option("value", code);
            },
        });
    } else {
        $.ajax({
            type: "GET",
            data: { ParentID: selectValue },
            url: "itemsSetCode/setCode",
            success: function (response) {
                if (response.getData) {
                    let child = Number(response.getData.ItemCode);
                    let parent = Number(response.getParent.ItemCode);
                    let result = 0;
                    let finalResult = 0;
                    let count = 1;
                    while (child != parent) {
                        result = child % 10;
                        finalResult = finalResult * count + result;
                        count *= 10;
                        child = Math.floor(child / 10);
                    }
                    finalResult++;

                    let accode = response.getParent.ItemCode;
                    let newCode = accode + finalResult;
                    $("#ItemCode")
                        .dxTextBox("instance")
                        .option("value", newCode);
                } else {
                    let code = response.getParent.ItemCode + 1;
                    $("#ItemCode").dxTextBox("instance").option("value", code);
                }
            },
        });
    }
}

function ItemsGroupCheckRoot(IDValue) {
    $.ajax({
        type: "GET",
        url: "itemsGroupCheck/CheckRoot",
        data: { IDValue: IDValue },
        success: function (response) {
            return response;
        },
    });
}
// End CRUD Functions.

// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#ID").dxTextBox({
            placeholder: "ID of Item",
            inputAttr: { "aria-label": "ID" },
        });
    });
    $(() => {
        $("#ItemName").dxTextBox({
            placeholder: "ادخل اسم المادة",
            inputAttr: { "aria-label": "placeName" },
        });
    });
    $(() => {
        $("#ItemCode").dxTextBox({
            placeholder: "  ",
            inputAttr: { "aria-label": "ItemCode" },
            readOnly: true,
        });
    });
    $(() => {
        $("#ItemQuantity").dxTextBox({
            placeholder: "  ",
            inputAttr: { "aria-label": "ItemQuantity" },
            readOnly: false,
        });
    });
    $(() => {
        $("#Description").dxTextArea({
            // ...
            minHeight: 50,
            maxHeight: 300,
            autoResizeEnabled: true,
            // value: longText,
            maxLength: 4000,
            label: "ملاحظات",
        });
    });
});
// End Components.

// Begin Context Menu Items
$(document).ready(function () {
    $("#btnNewAdd").dxButton({
        stylingMode: "contained",
        text: "اضافة مادة",
        type: "success",
        icon: "plus",
        width: 150,
        onClick() {
            var displaycard = document.getElementById("Itemsaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_Itemstitle").innerText = "";
                Items_cleardata();
                displaycard.style.display = "none";
                document.getElementById("firstCard").scrollIntoView();
            } else {
                document.getElementById("card_Itemstitle").innerText =
                    "اضافة مادة";
                setMaskCode();
                displaycard.style.display = "block";
                document.getElementById("card_Itemstitle").scrollIntoView();
            }
        },
    });
});
//#region Close Form
$(document).ready(function () {
    $("#danger-contained").dxButton({
        stylingMode: "contained",
        text: "اغلاق",
        type: "danger",
        icon: "close",
        width: 120,
        onClick() {
            var displaycard = document.getElementById("Itemsaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_Itemstitle").innerText = "";
                Items_cleardata();
                // Items_setStCode();
                displaycard.style.display = "none";
                document.getElementById("firstCard").scrollIntoView();
            }
        },
    });
});

//#endregion
// Button Save Data
$(document).ready(function () {
    $("#btnSave").dxButton({
        stylingMode: "contained",
        text: "حفظ",
        type: "default",
        icon: "check",
        width: 120,
        onClick() {
            Items_chechdata();
            if (error_ItemName != "") {
                return 0;
            } else {
                Items_UpdateOrCreate();
            }
        },
    });
});
// End Button Save
