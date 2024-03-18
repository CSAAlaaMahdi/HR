Users_fetch();
Users_filldata();
function Users_cleardata() {
    $("#U_Guid").dxTextBox("instance").option("value", "");
    $("#U_Email").dxTextBox("instance").option("value", "");
    $("#U_Name").dxTextBox("instance").option("value", "");
    $("#U_Password").dxTextBox("instance").option("value", "");
    $("#U_Department").dxTextBox("instance").option("value", "");
    $("#U_PermissionsGroup").dxDropDownBox("instance").option("value", null);
    $("#U_State").dxSwitch("instance").option("value", false);
}

function Users_chechdata() {
    if ($.trim($("#U_Email").dxTextBox("instance").option('value')).length == 0) {
        error_U_Email = "البريد الاكتروني مطلوب";
        $("#error_U_Email").text(error_U_Email);
    } else {
        error_U_Email = "";
        $("#error_U_Email").text(error_U_Email);
    }
    if ($.trim($("#U_Password").dxTextBox("instance").option('value')).length == 0) {
        error_U_Password = "  مطلوب";
        $("#error_U_Password").text(error_U_Password);
    } else {
        error_U_Password = "";
        $("#error_U_Password").text(error_U_Password);
    }
    if ($.trim($("#U_PermissionsGroup").dxDropDownBox("instance").option('value')).length == 0) {
        error_U_PermissionsGroup = " مطلوب";
        $("#error_U_PermissionsGroup").text(error_U_PermissionsGroup);
    } else {
        error_U_PermissionsGroup = "";
        $("#error_U_PermissionsGroup").text(error_U_PermissionsGroup);
    }
}

function Users_UpdateOrCreate() {
    var url = "users";
    var data = {
        U_Guid: $("#U_Guid").dxTextBox("instance").option("value"),
        U_Email: $("#U_Email").dxTextBox("instance").option("value"),
        U_Name: $("#U_Name").dxTextBox("instance").option("value"),
        U_Password: $("#U_Password").dxTextBox("instance").option("value"),
        U_Department: $("#U_Department").dxTextBox("instance").option("value"),
        U_PermissionsGroup: $("#U_PermissionsGroup").dxDropDownBox("instance").option("value"),
        U_State: (function(){
            if($("#U_State").dxSwitch("instance").option("value"))
            return 1;
            else return 0;
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
            Users_cleardata();
            Users_fetch();
        },
    });
}

function Users_fetch() {
    $(document).ready(function () {
        var url = "users/";
        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {
                    const dataGrid = $("#Usersdatagrid").dxDataGrid({
                        dataSource: response.getUsers,
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
                        columns: [
                            {
                                dataField: "U_Name",
                                caption: "الاسم",
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "16px";
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
                                dataField: "U_Email",
                                caption: "البريد الالكتروني",
                                dataType: "number",
                                alignment: "right",
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "16px";
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
                                dataField: "U_State",
                                caption: "الحالة ",
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "16px";
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
                                    var link1 = $("<div>").css({
                                        "background-color": "##64DDBB",
                                    });
                                    link1.dxButton({
                                        stylingMode: "contained",
                                        type: "normal",
                                        icon: "edit",
                                        onClick() {
                                            var rowData = options.data;
                                            let data = {
                                                U_Guid: rowData.id,
                                            };
                                            $.ajax({
                                                type: "GET",
                                                url: "users/show",
                                                data: data,
                                                success: function (response) {

                                                    $("#U_Guid")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.id,
                                                        });
                                                    $("#U_Name")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.U_Name,
                                                        });
                                                    $("#U_Password")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.U_Password,
                                                        });
                                                    $("#U_Email")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.U_Email,
                                                        });
                                                    if(response.U_State ==="1"){
                                                        $("#U_State")
                                                        .dxSwitch({
                                                            value:true
                                                        })
                                                    }else{
                                                        $("#U_State")
                                                        .dxSwitch({
                                                            value:false
                                                        })
                                                    }
                                                    $("#U_Department")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.U_Department
                                                        });
                                                    $("#U_PermissionsGroup")
                                                        .dxDropDownBox("instance")
                                                        .option({
                                                            value:response.U_PermissionsGroup
                                                        });


                                                    var displaycard =
                                                        document.getElementById(
                                                            "Usersaction"
                                                        );
                                                    if (
                                                        displaycard.style
                                                            .display == "none"
                                                    ) {
                                                        document.getElementById(
                                                            "card_Userstitle"
                                                        ).innerText =
                                                            "تعديل البيانات";
                                                        displaycard.style.display =
                                                            "block";
                                                        document
                                                            .getElementById(
                                                                "card_Userstitle"
                                                            )
                                                            .scrollIntoView();
                                                    } else {
                                                        displaycard.style.display =
                                                            "none";
                                                        document.getElementById(
                                                            "card_Userstitle"
                                                        ).innerText = "";
                                                        displaycard.style.display =
                                                            "block";
                                                        document.getElementById(
                                                            "card_Userstitle"
                                                        ).innerText =
                                                            "تعديل البيانات";
                                                        document
                                                            .getElementById(
                                                                "card_Userstitle"
                                                            )
                                                            .scrollIntoView();
                                                    }
                                                },
                                            });
                                        },
                                    });

                                    var link2 = $("<div>").css({
                                        "margin-right": "10px"
                                    });
                                    link2.dxButton({
                                        stylingMode: "contained",
                                        icon: "trash",
                                        type: "default",
                                        onClick() {
                                            var rowData = options.data;
                                            let data = {
                                                U_Guid: rowData.id,
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
                                                url: "users/destroy",
                                                data: data,
                                                success: function (response) {
                                                    Users_fetch();
                                                    Users_cleardata();
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
                                                    Users_fetch();
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
                                .addClass("custom-header_Users");
                        },
                    });
                });
            },
        });
    });
}

function Users_filldata() {
    var url = "usersfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {

                $(() => {

                    $("#U_PermissionsGroup").dxDropDownBox({
                        value: null,
                        valueExpr: "UG_Guid",
                        deferRendering: false,
                        placeholder: "اختر المجموعة",
                        inputAttr: { "aria-label": "Account" },
                        displayExpr(item) {
                            return item && `${item.UG_Name}`;
                        },
                        showClearButton: true,
                        dataSource: response.getUsersGroups,//makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField:"UG_Name",
                                        caption : "اسم المجموعة"
                                    },

                                ],
                                hoverStateEnabled: true,
                                paging: { enabled: true, pageSize: 10},
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
                                        hasSelection ? keys[0].UG_Guid : null

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
$(document).ready(function () {
    $("#danger-contained").dxButton({
        stylingMode: "contained",
        text: "اغلاق",
        type: "danger",
        icon: "close",
        width: 120,
        onClick() {
            var displaycard = document.getElementById("Usersaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_Userstitle").innerText = "";
                // Users_cleardata();
                // Users_setStCode();
                displaycard.style.display = "none";
                document.getElementById("firstCard").scrollIntoView();
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
            var displaycard = document.getElementById("Usersaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_Userstitle").innerText = "";
                Users_cleardata();
                // Users_setStCode();
                displaycard.style.display = "none";
                document.getElementById("firstCard").scrollIntoView();
            }else{
                document.getElementById("card_Userstitle").innerText ="اضافة مستخدم";
                displaycard.style.display = "block";
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
        type: "success",
        icon: "check",
        width: 120,
        onClick() {
            Users_chechdata();
            if(
                error_U_Email !="" ||
                error_U_Password != "" ||
                error_U_PermissionsGroup != ""
            )
            {
                return false;
            }else{
                Users_UpdateOrCreate();
            }
        },
    });
});
// End Button Save

// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#U_Name").dxTextBox({
            placeholder: "ادخل الاسم ",
            inputAttr: { "aria-label": "Unit Name" },
        });
    });
    $(() => {
        $("#U_Guid").dxTextBox({
            placeholder: "Guid of the Unit",
            inputAttr: { "aria-label": "Ui Guid" },
        });
    });
    $(() => {
        $("#U_Email").dxTextBox({
            placeholder: "ادخل البريد الالكتروني ",
            inputAttr: { "aria-label": "Piece" },
        });
    });

    $(() => {
        $("#U_Password").dxTextBox({
            placeholder: "كلمة المرور ",
            inputAttr: { "aria-label": "Piece Type" },
        });
    });
    $(() => {
        $("#U_State").dxSwitch({});
    });
    $(() => {
        $("#U_Department").dxTextBox({
            placeholder: "قسم المستخدم",
            inputAttr: { "aria-label": "Piece Type" },
        });
    });
});
//
