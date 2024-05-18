Users_fetch();
Users_filldata();
function Users_cleardata() {
    $("#userid").dxTextBox("instance").option("value", "");
    $("#loginname").dxTextBox("instance").option("value", "");
    $("#username").dxTextBox("instance").option("value", "");
    $("#pwd").dxTextBox("instance").option("value", "");
    $("#ulvl").dxTextBox("instance").option("value", "");
    $("#deptid").dxDropDownBox("instance").option("value", null);
    $("#UserPassW").dxTextBox("instance").option("value", "");
    $("#teachno").dxTextBox("instance").option("value", "");
}

function Users_chechdata() {
    if ($.trim($("#loginname").dxTextBox("instance").option('value')).length == 0) {
        error_loginname = " مطلوب ";
        $("#error_loginname").text(error_loginname);
    } else {
        error_loginname = "";
        $("#error_loginname").text(error_loginname);
    }
    if ($.trim($("#username").dxTextBox("instance").option('value')).length == 0) {
        error_username = "  مطلوب";
        $("#error_username").text(error_username);
    } else {
        error_username = "";
        $("#error_username").text(error_username);
    }
    if ($.trim($("#pwd").dxTextBox("instance").option('value')).length == 0) {
        error_pwd = " مطلوب";
        $("#error_pwd").text(error_pwd);
    } else {
        error_pwd = "";
        $("#error_pwd").text(error_pwd);
    }
}

function Users_UpdateOrCreate() {
    var url = "users";
    var data = {
        userid: $("#userid").dxTextBox("instance").option("value"),
        loginname: $("#loginname").dxTextBox("instance").option("value"),
        username: $("#username").dxTextBox("instance").option("value"),
        pwd: $("#pwd").dxTextBox("instance").option("value"),
        ulvl: $("#ulvl").dxTextBox("instance").option("value"),
        UserPassW: $("#UserPassW").dxTextBox("instance").option("value"),
        teachno: $("#teachno").dxTextBox("instance").option("value"),
        deptid: $("#deptid").dxDropDownBox("instance").option("value"),

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
                        keyExpr: "userid",
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
                                dataField:"userid",
                                caption:"ت",
                                visible:false,

                            },
                            {
                                dataField: "loginname",
                                caption: "الاسم الظاهري",
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "12px";
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
                                dataField: "username",
                                caption: " اسم المستخدم",
                                alignment: "right",
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "12px";
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
                                dataField: "deptid",
                                caption: "القسم ",
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "12px";
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
                                                userid: rowData.userid,
                                            };
                                            $.ajax({
                                                type: "GET",
                                                url: "users/show",
                                                data: data,
                                                success: function (response) {
                                                    $("#userid")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.userid,
                                                        });
                                                    $("#loginname")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.loginname,
                                                        });
                                                    $("#username")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.username,
                                                        });
                                                    $("#pwd")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.pwd,
                                                        });

                                                    $("#ulvl")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.ulvl
                                                        });
                                                        $("#UserPassW")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.UserPassW
                                                        });
                                                        $("#teachno")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.teachno
                                                        });
                                                    $("#deptid")
                                                        .dxDropDownBox("instance")
                                                        .option({
                                                            value:Number(response.deptid)
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
                                                userid: rowData.userid,
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

                    $("#deptid").dxDropDownBox({
                        value: 0,
                        valueExpr: "deptid",
                        deferRendering: false,
                        placeholder: "اختر المجموعة",
                        inputAttr: { "aria-label": "deptname",style:"font-size:14px",  },
                        displayExpr(item) {
                            return item && `${item.deptname}`;
                        },
                        showClearButton: true,
                        dataSource: response.getDepts,//makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField:"deptname",
                                        caption : "اسم القسم",
                                        cellTemplate: function (container, options) {
                                            var cellValue = options.value;
                                            var fontWeight = "450"; // Set the desired font weight
                                            let fontSize = "12px";
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
                                        hasSelection ? keys[0].deptid : 0

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
                error_loginname !="" ||
                error_username != "" ||
                error_pwd != ""
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
        $("#loginname").dxTextBox({
            placeholder: "ادخل الاسم ",
            inputAttr: { "aria-label": "Unit Name" },
        });
    });
    $(() => {
        $("#userid").dxTextBox({
            placeholder: "Guid of the Unit",
            inputAttr: { "aria-label": "Ui Guid",style:"font-size:14px", },
        });
    });
    $(() => {
        $("#username").dxTextBox({
            placeholder: "ادخل اسم المستخدم  ",
            inputAttr: {
                 "aria-label": "Piece",
                 style:"font-size:14px",
                 },
        });
    });

    $(() => {
        $("#pwd").dxTextBox({
            placeholder: "كلمة المرور ",
            inputAttr: { "aria-label": "Piece Type" ,style:"font-size:14px",},
        });
    });

    $(() => {
        $("#ulvl").dxTextBox({
            placeholder: "مستوى المستخدم ",
            inputAttr: { "aria-label": "Piece Type",style:"font-size:14px", },
        });
    });
    $(() => {
        $("#teachno").dxTextBox({
            placeholder: "مستوى  ",
            inputAttr: { "aria-label": "Piece Type" ,style:"font-size:14px",},
        });
    });
    $(() => {
        $("#UserPassW").dxTextBox({
            placeholder: "  ",
            inputAttr: { "aria-label": "Piece Type" ,style:"font-size:14px",},
        });
    });
});
//
