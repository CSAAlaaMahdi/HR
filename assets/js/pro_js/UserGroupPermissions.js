UserGroupPermissions_fetch();
UserGroupPermissions_filldata();

function UserGroupPermissions_cleardata() {
    $("#id").dxTextBox("instance").option("value", "");
    $("#GroupName").dxSelectBox("instance").option("value", "");
    $("#Status").dxSwitch("instance").option("value", false);
}
//Begin CRUD Function...
function UserGroupPermissions_chechdata() {
    if (
        $.trim($("#GroupName").dxSelectBox("instance").option("value")).length == 0
    ) {
        error_GroupName = "مطلوب";
        $("#error_GroupName").text(error_GroupName);
    } else {
        error_GroupName = "";
        $("#error_GroupName").text(error_GroupName);
    }
    
}

function UserGroupPermissions_UpdateOrCreate() {
    var url = "userGroupPermissions";

    var data = {
        id: $("#id").dxTextBox("instance").option("value"),
        GroupName: $("#GroupName").dxSelectBox("instance").option("value"),
        Status: (function () {
            if ($("#Status").dxSwitch("instance").option("value")) {
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
            UserGroupPermissions_cleardata();
            UserGroupPermissions_fetch();
        },
    });
}

function UserGroupPermissions_fetch() {
    $(document).ready(function () {
        var url = "userGroupPermissions/";
        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {
                    const dataGrid = $("#UserGroupPermissionsdatagrid").dxDataGrid({
                        dataSource: response.getUserGroupPermissions,
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
                                                url: "userGroupPermissions/show",
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
                                                            "UserGroupPermissionsaction"
                                                        );
                                                    if (
                                                        displaycard.style
                                                            .display == "none"
                                                    ) {
                                                        document.getElementById(
                                                            "card_UserGroupPermissionstitle"
                                                        ).innerText =
                                                            "تحديث البيانات";
                                                        displaycard.style.display =
                                                            "block";
                                                        document
                                                            .getElementById(
                                                                "card_UserGroupPermissionstitle"
                                                            )
                                                            .scrollIntoView();
                                                    } else {
                                                        displaycard.style.display =
                                                            "none";
                                                        document.getElementById(
                                                            "card_UserGroupPermissionstitle"
                                                        ).innerText = "";
                                                        displaycard.style.display =
                                                            "block";
                                                        document.getElementById(
                                                            "card_UserGroupPermissionstitle"
                                                        ).innerText =
                                                            "تحديث البيانات";
                                                        document
                                                            .getElementById(
                                                                "card_UserGroupPermissionstitle"
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
                                                url: "userGroupPermissions/destroy",
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
                                                    UserGroupPermissions_fetch();
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
                                .addClass("custom-header_UserGroupPermissions");
                        },
                    });
                });
            },
        });
    });
}
function UserGroupPermissions_filldata() {
    var url = "userGroupPermissionsfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {
                $(() => {
                    $('#GroupName').dxSelectBox({
                        dataSource: response.getUserGroupPermissions,
                        inputAttr: {style:"font-size:13px", },
                        placeholder:"اسم المجموعة",
                        searchEnabled:true,
                        displayExpr: 'GroupName',
                        valueExpr: 'GroupName',
                        searchMode: "contains",
                        acceptCustomValue: true,
                        dropDownOptions: {
                            height: 400
                        },
                        onCustomItemCreating(data) {
                                if (!data.text) {
                                    data.customItem = null;
                                    return;
                                }

                                const newItem = {
                                    GroupName: data.text
                                };

                                response.getUserGroupPermissions.push(newItem);
                                data.component.option("value",newItem);
                                data.customItem = newItem;

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
            var displaycard = document.getElementById("UserGroupPermissionsaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_UserGroupPermissionstitle").innerText = "";
                UserGroupPermissions_cleardata();
                
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
            UserGroupPermissions_chechdata();
            if (error_GroupName != "") {
                return false;
            } else {
              
                UserGroupPermissions_UpdateOrCreate();
            }
        },
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
            var displaycard = document.getElementById("UserGroupPermissionsaction");
            if (displaycard.style.display == "none") {
                document.getElementById("card_UserGroupPermissionstitle").innerText =
                    "اضافة مجموعة";

                UserGroupPermissions_cleardata();
                // UserGroupPermissions_setStCode();
                displaycard.style.display = "block";
                document
                    .getElementById("card_UserGroupPermissionstitle")
                    .scrollIntoView();
            } else {
                displaycard.style.display = "none";
                document.getElementById("card_UserGroupPermissionstitle").innerText = "";
                UserGroupPermissions_cleardata();
                // UserGroupPermissions_setStCode();
                displaycard.style.display = "block";
                document.getElementById("card_UserGroupPermissionstitle").innerText =
                    "اضافة مجموعة";
                document
                    .getElementById("card_UserGroupPermissionstitle")
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
   

    $(() => {
        $("#Status").dxSwitch({});
    });
});
// End Components.
