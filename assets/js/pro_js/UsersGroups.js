UsersGroups_fetch();
// UsersGroups_filldata();

function UsersGroups_cleardata() {
    $("#UG_Guid").dxTextBox("instance").option("value", "");
    $("#UG_Name").dxTextBox("instance").option("value", "");
    $("#UG_State").dxSwitch("instance").option("value", false);
}
//Begin CRUD Function...
function UsersGroups_chechdata() {
    if (
        $.trim($("#UG_Name").dxTextBox("instance").option("value")).length == 0
    ) {
        error_UG_Name = "مطلوب";
        $("#error_UG_Name").text(error_UG_Name);
    } else {
        error_UG_Name = "";
        $("#error_UG_Name").text(error_UG_Name);
    }
}

function UsersGroups_UpdateOrCreate() {
    var url = "usersgroups";

    var data = {
        UG_Name: $("#UG_Name").dxTextBox("instance").option("value"),
        UG_Guid: $("#UG_Guid").dxTextBox("instance").option("value"),
        UG_State: (function () {
            if ($("#UG_State").dxSwitch("instance").option("value")) {
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
            UsersGroups_cleardata();
            UsersGroups_fetch();
        },
    });
}

function UsersGroups_fetch() {
    $(document).ready(function () {
        var url = "usersgroups/";
        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {
                    const dataGrid = $("#UsersGroupsdatagrid").dxDataGrid({
                        dataSource: response.getUsersGroups,
                        keyExpr: "UG_Guid",
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
                        columns: [
                            {
                                dataField: "UG_Guid",
                                caption: "التسلسل",
                                visible: false,
                            },
                            {
                                dataField: "UG_Name",
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
                                dataField: "UG_State",
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
                                                UG_Guid: rowData.UG_Guid,
                                            };

                                            $.ajax({
                                                type: "GET",
                                                url: "usersgroups/show",
                                                data: data,

                                                success: function (response) {
                                                    console.log(response);
                                                    $("#UG_Guid")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.UG_Guid
                                                        });
                                                    $("#UG_Name")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.UG_Name,
                                                        });
                                                    if (
                                                        response
                                                            .UG_State === "1"
                                                    ) {
                                                        $("#UG_State")
                                                            .dxSwitch(
                                                                "instance"
                                                            )
                                                            .option({
                                                                value: true,
                                                            });
                                                    } else {
                                                        $("#UG_State")
                                                            .dxSwitch(
                                                                "instance"
                                                            )
                                                            .option({
                                                                value: false,
                                                            });
                                                    }

                                                    var displaycard =
                                                        document.getElementById(
                                                            "UsersGroupsaction"
                                                        );
                                                    if (
                                                        displaycard.style
                                                            .display == "none"
                                                    ) {
                                                        document.getElementById(
                                                            "card_UsersGroupstitle"
                                                        ).innerText =
                                                            "تحديث البيانات";
                                                        displaycard.style.display =
                                                            "block";
                                                        document
                                                            .getElementById(
                                                                "card_UsersGroupstitle"
                                                            )
                                                            .scrollIntoView();
                                                    } else {
                                                        displaycard.style.display =
                                                            "none";
                                                        document.getElementById(
                                                            "card_UsersGroupstitle"
                                                        ).innerText = "";
                                                        displaycard.style.display =
                                                            "block";
                                                        document.getElementById(
                                                            "card_UsersGroupstitle"
                                                        ).innerText =
                                                            "تحديث البيانات";
                                                        document
                                                            .getElementById(
                                                                "card_UsersGroupstitle"
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
                                                UG_Guid: rowData.UG_Guid,
                                            };
                                            $.ajaxSetup({
                                                headers: {
                                                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                                                },
                                            });
                                            $.ajax({
                                                type: "DELETE",
                                                url: "usersgroups/destroy",
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
                                                    UsersGroups_fetch();
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
                                .addClass("custom-header_UsersGroups");
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
            var displaycard = document.getElementById("UsersGroupsaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_UsersGroupstitle").innerText = "";
                UsersGroups_cleardata();
                // UsersGroups_setStCode();
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
            UsersGroups_chechdata();
            if (error_UG_Name == null || error_UG_Name == "") {
                UsersGroups_UpdateOrCreate();
            } else {
                console.log(error_UG_Name);
                return false;
            }
        },
    });
});
$(document).ready(function () {
    $("#btnAddNew").dxButton({
        stylingMode: "contained",
        text: "اضافة",
        type: "success",
        icon: "plus",
        width: 120,
        onClick() {
            var displaycard = document.getElementById("UsersGroupsaction");
            if (displaycard.style.display == "none") {
                document.getElementById("card_UsersGroupstitle").innerText =
                    "اضافة مجموعة";

                UsersGroups_cleardata();
                // UsersGroups_setStCode();
                displaycard.style.display = "block";
                document
                    .getElementById("card_UsersGroupstitle")
                    .scrollIntoView();
            } else {
                displaycard.style.display = "none";
                document.getElementById("card_UsersGroupstitle").innerText = "";
                UsersGroups_cleardata();
                // UsersGroups_setStCode();
                displaycard.style.display = "block";
                document.getElementById("card_UsersGroupstitle").innerText =
                    "اضافة مجموعة";
                document
                    .getElementById("card_UsersGroupstitle")
                    .scrollIntoView();
            }
        },
    });
});
// End Button Save

// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#UG_Guid").dxTextBox({
            placeholder: "",
            inputAttr: { "aria-label": "Guid" },
        });
    });
    $(() => {
        $("#UG_Name").dxTextBox({
            placeholder: "ادخل اسم المجموعة",
            inputAttr: { "aria-label": "UG_Name" },
        });
    });
    $(() => {
        $("#UG_RowID").dxTextBox({
            placeholder: "التسلسل ",
            inputAttr: { "aria-label": "RowID" },
        });
    });

    $(() => {
        $("#UG_State").dxSwitch({});
    });
});
// End Components.
