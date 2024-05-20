UserPermissions_fetch();
UserPermissions_filldata();

function UserPermissions_cleardata() {
    $("#id").dxTextBox("instance").option("value", "");
    $("#GroupID").dxDropDownBox("instance").option("value", null);
    $("#UserPermissionsdatagrid2").dxDataGrid("instance").option("dataSource","");
    
}
//Begin CRUD Function...
function UserPermissions_chechdata() {
    if (
        $.trim($("#GroupID").dxDropDownBox("instance").option("value")).length == 0
    ) {
        error_GroupID = "مطلوب";
        $("#error_GroupID").text(error_GroupID);
    } else {
        error_GroupID = "";
        $("#error_GroupID").text(error_GroupID);
    }
    
}

function UserPermissions_UpdateOrCreate() {
    var url = "userPermissions";

    var data = {
        id: $("#id").dxTextBox("instance").option("value"),
        GroupID: $("#GroupID").dxDropDownBox("instance").option("value"),
        
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
            UserPermissions_cleardata();
            UserPermissions_fetch();
        },
    });
}

function UserPermissions_fetch() {
    $(document).ready(function () {
        var url = "userPermissions/";
        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {
                    const dataGrid = $("#UserPermissionsdatagrid").dxDataGrid({
                        dataSource: response.getUserPermissions,
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
                            width: 400,
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
                        columnChooser:{enabled:true},
                        columns: [
                            {
                                dataField: "id",
                                caption: "التسلسل",
                                visible: false,
                            },
                            {
                                dataField: "GroupName",
                                caption: "اسم المجموعة",
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "16px";

                                    $("<div>")
                                        .css({
                                            "font-size": fontSize,
                                            "font-weight": fontWeight,
                                        })
                                        .text(cellValue)
                                        .appendTo(container);
                                },
                                // groupIndex: 0,
                            },
                            {
                                dataField: "Status",
                                caption: "الحالة",
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    if (cellValue === "غير نشطة") {
                                        var fontWeight = "450"; // Set the desired font weight
                                        let fontSize = "16px";
                                        let fontColor = "red";
                                        $("<div>")
                                            .css({
                                                "font-size": fontSize,
                                                "font-weight": fontWeight,
                                                color: fontColor,
                                            })
                                            .text(cellValue)
                                            .appendTo(container);
                                    } else {
                                        var fontWeight = "450"; // Set the desired font weight
                                        let fontSize = "16px";
                                        let fontColor = "green";
                                        $("<div>")
                                            .css({
                                                "font-size": fontSize,
                                                "font-weight": fontWeight,
                                                color: fontColor,
                                            })
                                            .text(cellValue)
                                            .appendTo(container);
                                    }
                                },
                            },

                            {
                                caption: "الحدث",

                                width: 200,
                                cellTemplate: function (container, options) {
                                    var row = options.row.data;

                                    var link1 = $("<div>").css({
                                        "background-color": "#7CEECE",
                                    });
                                    link1.dxButton({
                                        stylingMode: "contained",
                                        type: "normal",
                                        icon: "edit",
                                        onClick() {
                                            var rowData = options.data;
                                            let data = {
                                                id: rowData.id,
                                            };

                                            $.ajax({
                                                type: "GET",
                                                url: "UserPermissions/show",
                                                data: data,

                                                success: function (response) {
                                                    console.log(response);
                                                    $("#id")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.id
                                                        });
                                                    $("#GroupName")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value: response.GroupName,
                                                        });
                                                    if (
                                                        response
                                                            .Status === "1"
                                                    ) {
                                                        $("#Status")
                                                            .dxSwitch(
                                                                "instance"
                                                            )
                                                            .option({
                                                                value: true,
                                                            });
                                                    } else {
                                                        $("#Status")
                                                            .dxSwitch(
                                                                "instance"
                                                            )
                                                            .option({
                                                                value: false,
                                                            });
                                                    }

                                                    var displaycard =
                                                        document.getElementById(
                                                            "UserPermissionsaction"
                                                        );
                                                    if (
                                                        displaycard.style
                                                            .display == "none"
                                                    ) {
                                                        document.getElementById(
                                                            "card_UserPermissionstitle"
                                                        ).innerText =
                                                            "تحديث البيانات";
                                                        displaycard.style.display =
                                                            "block";
                                                        document
                                                            .getElementById(
                                                                "card_UserPermissionstitle"
                                                            )
                                                            .scrollIntoView();
                                                    } else {
                                                        displaycard.style.display =
                                                            "none";
                                                        document.getElementById(
                                                            "card_UserPermissionstitle"
                                                        ).innerText = "";
                                                        displaycard.style.display =
                                                            "block";
                                                        document.getElementById(
                                                            "card_UserPermissionstitle"
                                                        ).innerText =
                                                            "تحديث البيانات";
                                                        document
                                                            .getElementById(
                                                                "card_UserPermissionstitle"
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
                                        onClick() {
                                            var rowData = options.data;
                                            let data = {
                                                id: rowData.id,
                                            };
                                            $.ajaxSetup({
                                                headers: {
                                                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                                                },
                                            });
                                            $.ajax({
                                                type: "DELETE",
                                                url: "UserPermissions/destroy",
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
                                                    UserPermissions_fetch();
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
                                .addClass("custom-header_UserPermissions");
                        },
                    });

                    const dataGrid2 = $("#UserPermissionsdatagrid2").dxDataGrid({
                        dataSource: response.getUserPermissions2,
                        keyExpr: "id",
                        paging: {
                            enabled: true,
                            pageSize: 25, // Number of records per page
                            pageIndex: 0, // Initially show the first page
                        },
                        editing: {
                            mode: "cell",
                            allowUpdating: true,
                            allowAdding: false,
                            allowDeleting: false,
                        },
                        pager: {
                            showPageSizeSelector: true,
                            showInfo: true,
                            allowedPageSizes: [10, 25, 50, 100, "all"],
                            showNavigationButtons: true,
                        },
                        remoteOperations: false,
                        searchPanel: {
                            visible: false,
                            highlightCaseSensitive: true,
                            width: 400,
                        },
                        focusedRowEnabled: true,
                        filterRow: { visible: false },
                        groupPanel: { visible: false },
                        grouping: {
                            autoExpandAll: false,
                        },
                        allowColumnReordering: true,
                        rowAlternationEnabled: true,
                        showBorders: true,
                        // columnChooser:{enabled:true},
                        columns: [
                            {
                                dataField: "id",
                                caption: "التسلسل",
                                visible: false,
                            },
                            {
                                dataField: "GroupName",
                                caption: "اسم المجموعة",
                                visible:false,
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "16px";

                                    $("<div>")
                                        .css({
                                            "font-size": fontSize,
                                            "font-weight": fontWeight,
                                        })
                                        .text(cellValue)
                                        .appendTo(container);
                                },
                                // groupIndex: 0,
                            },
                            {
                                dataField: "FormName",
                                caption: "اسم النموذج",
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "16px";

                                    $("<div>")
                                        .css({
                                            "font-size": fontSize,
                                            "font-weight": fontWeight,
                                        })
                                        .text(cellValue)
                                        .appendTo(container);
                                },
                                // groupIndex: 0,
                            },
                            {
                                dataField: "OptionAdd",
                                caption: "اضافة ",
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "16px";

                                    $("<div>")
                                        .css({
                                            "font-size": fontSize,
                                            "font-weight": fontWeight,
                                        })
                                        .text(cellValue)
                                        .appendTo(container);
                                },
                                // groupIndex: 0,
                            },
                            {
                                dataField: "OptionEdit",
                                caption: "تعديل ",
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "16px";

                                    $("<div>")
                                        .css({
                                            "font-size": fontSize,
                                            "font-weight": fontWeight,
                                        })
                                        .text(cellValue)
                                        .appendTo(container);
                                },
                                // groupIndex: 0,
                            },
                            {
                                dataField: "OptionDel",
                                caption: "حذف ",
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "16px";

                                    $("<div>")
                                        .css({
                                            "font-size": fontSize,
                                            "font-weight": fontWeight,
                                        })
                                        .text(cellValue)
                                        .appendTo(container);
                                },
                                // groupIndex: 0,
                            },
                            {
                                dataField: "ReadOnly",
                                caption: "قراءة فقط ",
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "16px";

                                    $("<div>")
                                        .css({
                                            "font-size": fontSize,
                                            "font-weight": fontWeight,
                                        })
                                        .text(cellValue)
                                        .appendTo(container);
                                },
                                // groupIndex: 0,
                            },

                          
                        ],
                        onContentReady: function (e) {
                            // Add custom class to the header panel
                            e.element
                                .find(".dx-datagrid-headers")
                                .addClass("custom-header_UserPermissions2");
                        },
                    });


                });
            },
        });
    });
}
function UserPermissions_filldata() {
    var url = "userPermissionsfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {
                $(() => {
                    let dataGrid;
                    $("#GroupID").dxDropDownBox({
                        value: null,
                        valueExpr: "id",
                        deferRendering: false,
                        placeholder: "المجموعة ",
                        inputAttr: { style:"font-size:13px", },
                        displayExpr(item) {
                            return item && `${item.GroupName} `;
                        },
                        showClearButton: true,
                        dataSource: response.getUserGroups,//makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField:"GroupName",
                                        caption:"اسم المجموعة ",
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

                                ],
                                hoverStateEnabled: true,
                                paging: { enabled: true, pageSize: 10 },
                                filterRow: { visible: true },
                                scrolling: { mode: "virtual" },
                                selection: { mode: "single" },
                                selectedRowKeys: value,
                                height: 300,
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


                    });
                });

            },
        });
    });
}

// End CRUD Functions.

$(document).ready(function () {
    $("#danger-contained").dxButton({
        stylingMode: "contained",
        text: "اغلاق",
        type: "danger",
        width: 120,
        onClick() {
            var displaycard = document.getElementById("UserPermissionsaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_UserPermissionstitle").innerText = "";
                UserPermissions_cleardata();
                
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
            UserPermissions_chechdata();
            if (error_GroupID != "") {
                return false;
            } else {
              
                UserPermissions_UpdateOrCreate();
            }
        },
    });
});
$(document).ready(function () {
    $("#btnAddPermissions").dxButton({
        stylingMode: "contained",
        text: "اضافة صلاحيات",
        type: "default",
        icon: "check",
        width: 200,
        onClick() {
           
            let GroupID = $("#GroupID").dxDropDownBox("instance").option("value");
            
        },
        elementAttr:{
            style: 'background-color: #3498db; color: #ffffff;margin-right: 15px;width:200px;'
        }
    });
});
$(document).ready(function () {
    $("#btnNewAdd").dxButton({
        stylingMode: "contained",
        text: "اضافة",
        type: "success",
        icon: "plus",
        width: 120,
        onClick() {
            var displaycard = document.getElementById("UserPermissionsaction");
            if (displaycard.style.display == "none") {
                document.getElementById("card_UserPermissionstitle").innerText =
                    "اضافة صلاحيات";

                UserPermissions_cleardata();
                // UserPermissions_setStCode();
                displaycard.style.display = "block";
                document
                    .getElementById("card_UserPermissionstitle")
                    .scrollIntoView();
            } else {
                displaycard.style.display = "none";
                document.getElementById("card_UserPermissionstitle").innerText = "";
                UserPermissions_cleardata();
                // UserPermissions_setStCode();
                displaycard.style.display = "block";
                document.getElementById("card_UserPermissionstitle").innerText =
                    "اضافة صلاحيات";
                document
                    .getElementById("card_UserPermissionstitle")
                    .scrollIntoView();
            }
        },
    });
});
// End Button Save

// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#id").dxTextBox({
            placeholder: "",
            inputAttr: { "aria-label": "id" },
        });
    });
   

 
});
// End Components.
