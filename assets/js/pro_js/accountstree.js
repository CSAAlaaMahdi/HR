accounttree_fetch();
accounttree_filldata();

function accounttree_cleardata() {
    $("#Ac_Guid").dxTextBox("instance").option("value", "");
    $("#Ac_Name").dxTextBox("instance").option("value", "");
    $("#Ac_Code").dxTextBox("instance").option("value", "");
    $("#Ac_ParentAccount").dxDropDownBox("instance").option("value", null);
}

function accounttree_chechdata() {
    if ($.trim($(".Ac_name").val()).length == 0) {
        error_Ac_name = "Require";
        $("#error_Ac_name").text(error_Ac_name);
    } else {
        error_Ac_name = "";
        $("#error_Ac_name").text(error_Ac_name);
    }
    if ($.trim($(".Ac_state").val()).length == 0) {
        error_Ac_state = "Require";
        $("#error_Ac_state").text(error_Ac_state);
    } else {
        error_Ac_state = "";
        $("#error_Ac_state").text(error_Ac_state);
    }
    if ($.trim($(".Ac_group").val()).length == 0) {
        error_Ac_group = "Require";
        $("#error_Ac_group").text(error_Ac_group);
    } else {
        error_Ac_group = "";
        $("#error_Ac_group").text(error_Ac_group);
    }
}

function accounttree_insert() {
    var url = "accounttree";
    var data = {
        Ac_ParentGuid: $("#Ac_ParentAccount")
            .dxDropDownBox("instance")
            .option("value"),
        Ac_Name: $("#Ac_Name").dxTextBox("instance").option("value"),
        Ac_Code: $("#Ac_Code").dxTextBox("instance").option("value"),
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
            accounttree_cleardata();
            accounttree_fetch();
        },
    });
}

function accounttree_filldata() {
    var url = "accounttreesfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {
                $(() => {
                    let dataGrid;
                    $("#Ac_ParentAccount").dxDropDownBox({
                        value: null,
                        valueExpr: "Guid",
                        deferRendering: false,
                        placeholder: "اختر الحساب الاب",
                        inputAttr: { "aria-label": "Parent_Account" },
                        displayExpr(item) {
                            return (
                                item &&
                                `${item.Ac_Name}   -${item.Ac_Code_Mask} `
                            );
                        },
                        showClearButton: true,
                        dataSource: response.getAccount, //makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField:'Ac_Name',
                                        caption:"اسم الحساب",
                                    },
                                    {
                                        dataField:"Ac_Code_Mask",
                                        caption:"كود الحساب"
                                    }
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
                                        hasSelection ? keys[0].Guid : null
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
                            // Code to execute when the value changes
                            setMaskCode();
                        },
                    });
                });
            },
        });
    });
}
function accounttree_fetch() {
    $(document).ready(function () {
        var url = "accounttree/";
        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {
                    const treeList = $("#tree-list")
                        .dxTreeList({
                            dataSource: response.AccountTree,
                            rootValue: null,
                            keyExpr: "Ac_Guid",
                            parentIdExpr: "Ac_ParentGuid",
                            autoExpandAll: false,
                            allowColumnReordering: true,
                            allowColumnResizing: true,
                            columnAutoWidth: true,
                            focusedRowEnabled: true,
                            columnFixing: {
                                enabled: true,
                            },
                            columnChooser: { enabled: true },
                            columns: [
                                {
                                    dataField: "Ac_Name",
                                    caption: "اسم الحساب",
                                    validationRules: [
                                        {
                                            type: "required",
                                        },
                                    ],
                                    // fixed: true,
                                },
                                {
                                    dataField: "Ac_MaskCode",
                                    caption: "كود الحساب",
                                    validationRules: [
                                        {
                                            type: "required",
                                        },
                                    ],
                                },
                                {
                                    dataField: "Ac_State",
                                    caption: "حالة الحساب",

                                },
                                {
                                    dataField: "Ac_Type",
                                    caption: "نوع الحساب",

                                },
                                {
                                    dataField: "Ac_Parent",
                                    caption: " الحساب الاب",

                                },
                                {
                                    dataField: "Balance",
                                    caption: "الرصيد",
                                    validationRules: [
                                        {
                                            type: "required",
                                        },
                                    ],
                                },

                                {
                                    caption: "الحدث",
                                    width: 200,
                                    cellTemplate: function (
                                        container,
                                        options
                                    ) {
                                        var row = options.row.data;
                                        var link1 = $("<div>");
                                        link1.dxButton({
                                            stylingMode: "contained",
                                            type: "normal",
                                            icon: "edit",
                                            onClick() {
                                                var rowData = options.data;

                                                $("#Ac_Guid")
                                                    .dxTextBox("instance")
                                                    .option({
                                                        value: options.data
                                                            .Ac_Guid,
                                                    });
                                                $("#Ac_Name")
                                                    .dxTextBox("instance")
                                                    .option({
                                                        value: options.data
                                                            .Ac_Name,
                                                    });
                                                $("#Ac_Code")
                                                    .dxTextBox("instance")
                                                    .option({
                                                        value: options.data
                                                            .Ac_MaskCode,
                                                    });

                                                $("#Ac_ParentAccount")
                                                    .dxDropDownBox("instance")
                                                    .option({
                                                        value: options.data
                                                            .Ac_ParentGuid,
                                                        visible: false,
                                                    });

                                                var displaycard =
                                                    document.getElementById(
                                                        "accounttreeaction"
                                                    );
                                                if (
                                                    displaycard.style.display ==
                                                    "none"
                                                ) {
                                                    document.getElementById(
                                                        "card_accounttreetitle"
                                                    ).innerText =
                                                        "تعديل الحساب";
                                                    displaycard.style.display =
                                                        "block";
                                                    document
                                                        .getElementById(
                                                            "card_accounttreetitle"
                                                        )
                                                        .scrollIntoView();
                                                } else {
                                                    displaycard.style.display =
                                                        "none";
                                                    document.getElementById(
                                                        "card_accounttreetitle"
                                                    ).innerText = "";
                                                    displaycard.style.display =
                                                        "block";
                                                    document.getElementById(
                                                        "card_accounttreetitle"
                                                    ).innerText =
                                                        "تعديل الحساب";
                                                    document
                                                        .getElementById(
                                                            "card_accounttreetitle"
                                                        )
                                                        .scrollIntoView();
                                                }
                                            },
                                        });

                                        var link2 = $("<div>");
                                        link2.dxButton({
                                            stylingMode: "contained",
                                            icon: "trash",
                                            onClick() {
                                                var rowData = options.data;
                                            },
                                        });

                                        $(container).append(link1, link2);
                                    },
                                },
                            ],

                            filterRow: { visible: true },
                            searchPanel: {
                                 visible: true,
                                width:400,
                                },
                            // editing: {
                            // mode: "row",
                            //     allowUpdating: true,
                            //     allowDeleting: true,
                            //     allowAdding: true,

                            // },
                            // onRowClick: function(e) {
                            // Enable editing for the clicked row
                            // e.component.editRow(e.rowIndex);

                            // },
                            selection: { mode: "single" },
                            onSelectionChanged: function (e) {
                                e.component
                                    .byKey(e.currentSelectedRowKeys[0])
                                    .done((employee) => {
                                        if (employee) {
                                            // $("#selectedNode").text(
                                            //     `Selected Node: ${employee.Ac_Guid}`
                                            // );
                                        }
                                    });
                            },

                            rowDragging: {
                                allowDropInsideItem: true,
                                allowReordering: true,
                                onDragChange: function (e) {
                                    var visibleRows = treeList.getVisibleRows(),
                                        sourceNode = treeList.getNodeByKey(
                                            e.itemData.ID
                                        ),
                                        targetNode =
                                            visibleRows[e.toIndex].node;

                                    while (targetNode && targetNode.data) {
                                        if (
                                            targetNode.data.ID ===
                                            sourceNode.data.ID
                                        ) {
                                            e.cancel = true;
                                            break;
                                        }
                                        targetNode = targetNode.parent;
                                    }
                                },
                                onReorder: function (e) {
                                    var visibleRows =
                                            e.component.getVisibleRows(),
                                        sourceData = e.itemData,
                                        targetData =
                                            visibleRows[e.toIndex].data;

                                    if (e.dropInsideItem) {
                                        e.itemData.HeadID = targetData.ID;
                                    } else {
                                        var sourceIndex =
                                                employees.indexOf(sourceData),
                                            targetIndex =
                                                employees.indexOf(targetData);

                                        if (
                                            sourceData.HeadID !==
                                            targetData.HeadID
                                        ) {
                                            sourceData.HeadID =
                                                targetData.HeadID;
                                            if (e.toIndex > e.fromIndex) {
                                                targetIndex++;
                                            }
                                        }
                                        employees.splice(sourceIndex, 1);
                                        employees.splice(
                                            targetIndex,
                                            0,
                                            sourceData
                                        );
                                    }
                                    e.component.refresh();
                                },
                            },
                            paging: {
                                enabled: true,
                                pageSize: 10,
                            },
                        })
                        .dxTreeList("instance");
                });
            },
        });
    });
}

function accounttree_update() {
    var url = "accounttree/";
    var data = {
        Ac_ParentGuid: $("#Ac_ParentAccount")
            .dxDropDownBox("instance")
            .option("value"),
        Ac_Guid: $("#Ac_Guid").dxTextBox("instance").option("value"),
        Ac_Name: $("#Ac_Name").dxTextBox("instance").option("value"),
        Ac_Code: $("#Ac_Code").dxTextBox("instance").option("value"),
    };
    console.log(data);
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
            accounttree_fetch();
        },
    });
}

//#region Context Menu
const contextMenuItems = [{ text: "انشاء حساب جديد" }];

$(() => {
    $("#context-menu").dxContextMenu({
        dataSource: contextMenuItems,
        width: 250,
        target: "#tree-list",

        onItemClick(e) {
            if (!e.itemData.items) {
                switch (e.itemData.text) {
                    case "انشاء حساب جديد":
                        var displaycard =
                            document.getElementById("accounttreeaction");
                        if (displaycard.style.display == "none") {
                            $("#Ac_ParentAccount")
                                .dxDropDownBox("instance")
                                .option({
                                    value: null,
                                    visible: true,
                                });
                            setMaskCode();
                            document.getElementById(
                                "card_accounttreetitle"
                            ).innerText = "انشاء حساب ";

                            accounttree_cleardata();
                            // accounttree_setStCode();
                            displaycard.style.display = "block";
                            document
                                .getElementById("card_accounttreetitle")
                                .scrollIntoView();
                        } else {
                            $("#Ac_ParentAccount")
                                .dxDropDownBox("instance")
                                .option({
                                    value: null,
                                    visible: true,
                                });
                            displaycard.style.display = "none";
                            document.getElementById(
                                "card_accounttreetitle"
                            ).innerText = "";
                            accounttree_cleardata();
                            // accounttree_setStCode();
                            displaycard.style.display = "block";
                            document.getElementById(
                                "card_accounttreetitle"
                            ).innerText = "انشاء حساب";
                            document
                                .getElementById("card_accounttreetitle")
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

//#endregion

// button Save
$(document).ready(function () {
    $("#btnSave").dxButton({
        stylingMode: "contained",
        text: "حفظ",
        type: "default",
        icon: "check",
        width: 120,
        onClick() {
            let AcGuid = $("#Ac_Guid").dxTextBox("instance").option("value");
            if (AcGuid == null || AcGuid == "") {
                accounttree_insert();
            } else {
                accounttree_update();
            }
        },
    });
});
// end button save

//=========================================
// Button Close
$(document).ready(function () {
    $("#danger-contained").dxButton({
        stylingMode: "contained",
        text: "اغلاق",
        type: "danger",
        icon: "close",
        width: 120,
        onClick() {
            var displaycard = document.getElementById("accounttreeaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_accounttreetitle").innerText = "";
                // StoriesTree_cleardata();
                // StoriesTree_setStCode();
                displaycard.style.display = "none";
                document.getElementById("firstCard").scrollIntoView();
            }
        },
    });
});

//========================================

// Begin intialize Components
$(document).ready(function () {
    $(() => {
        $("#Ac_Name").dxTextBox({
            placeholder: "ادخل اسم الحساب",
            inputAttr: { "aria-label": "Account_Name" },
        });
    });
    $(() => {
        $("#Ac_Guid").dxTextBox({
            placeholder: "Account Guid",
            inputAttr: { "aria-label": "AccountGuid" },
        });
    });
    $(() => {
        $("#Ac_Code").dxTextBox({
            placeholder: "كود الحساب",
            inputAttr: { "aria-label": "Account_Code" },
            readOnly: true,
        });
    });
});

//End Components

function setMaskCode() {
    let selectValue = $("#Ac_ParentAccount")
        .dxDropDownBox("instance")
        .option("value");

    if (selectValue == null) {
        $.ajax({
            type: "GET",
            data: { Ac_Guid: selectValue },
            url: "account/setCode",
            success: function (response) {
                if (response.getData) {
                    let code = Number(response.getData.Ac_Code_Mask) + 1;
                    $("#Ac_Code").dxTextBox("instance").option("value", code);
                } else {
                }
            },
        });
    } else {
        $.ajax({
            type: "GET",
            data: { Ac_Guid: selectValue },
            url: "account/setCode",
            success: function (response) {
                if (response.getData) {
                    let child = Number(response.getData.Ac_Code_Mask);
                    let parent = Number(response.getParent.Ac_Code_Mask);
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

                    let accode = response.getParent.Ac_Code_Mask;
                    let newCode = accode + finalResult;
                    $("#Ac_Code")
                        .dxTextBox("instance")
                        .option("value", newCode);
                } else {
                    let code = response.getParent.Ac_Code_Mask + 1;
                    $("#Ac_Code").dxTextBox("instance").option("value", code);
                }
            },
        });
    }
}
