ItemsGroups_fetch();
ItemsGroups_filldata();

function ItemsGroups_cleardata() {
 $('#ID').dxTextBox("instance").option("value","");
 $('#ItemName').dxTextBox("instance").option("value","");
 $("#ParentID").dxDropDownBox("instance").option("value",null);
}

function ItemsGroups_chechdata() {
    if ($.trim($("#ItemName").dxTextBox("instance").option('value')).length == 0) {
        error_ItemName = "مطلوب";
        $("#error_ItemName").text(error_ItemName);
    } else {
        error_ItemName = "";
        $("#error_ItemName").text(error_ItemName);
    }

}

function ItemsGroups_UpdateOrCreate() {
    var url = "itemsGroups";
    var data = {
        ParentID: $("#ParentID").dxDropDownBox("instance").option("value"),
        ItemName: $("#ItemName").dxTextBox("instance").option("value"),
        ID: $("#ID").dxTextBox("instance").option("value"),
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
                  my: 'top left',
                  at: 'top left'
                },
                type:'success',
                width: '300',
                height:'150',
                hideAfter: 2000
              });
            ItemsGroups_fetch();
            ItemsGroups_filldata();
        },
    });
}

function ItemsGroups_filldata() {
    var url = "itemsGroupsfill/";
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
                        dataSource: response.getItemsGroups,//makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField:"ItemName",
                                        caption:"اسم المجموعة"
                                    },

                                ],
                                hoverStateEnabled: true,
                                paging: { enabled: true, pageSize: 10 },
                                filterRow: { visible: true },
                                scrolling: { mode: "virtual" },
                                selection: { mode: "single" },
                                selectedRowKeys: value,
                                height: "100%",
                                onSelectionChanged(selectedItemsGroups) {
                                    const keys = selectedItemsGroups.selectedRowKeys;
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
function ItemsGroups_fetch() {
    $(document).ready(function () {
        var url = "itemsGroups/";

        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {

                    const treeList = $("#ItemsGroupsTree")
                        .dxTreeList({
                            dataSource:response.getItemsGroups,
                            rootValue: 0,
                            keyExpr:'id',
                            parentIdExpr: "ParentID",
                            autoExpandAll: false,
                            allowColumnReordering: true,
                            allowColumnResizing: true,
                            columnAutoWidth: true,
                            focusedRowEnabled: true,
                            scrolling:{
                                mode: 'standard',
                            },
                            columnFixing: {
                                enabled: true,
                            },
                            columnChooser: { enabled: true },
                            export: {
                                enabled: true,
                                allowExportSelectedData: false,
                              },
                              onExporting(e) {
                                const workbook = new ExcelJS.Workbook();
                                const worksheet = workbook.addWorksheet('Employees');

                                DevExpress.excelExporter.exportDataGrid({
                                  component: e.component,
                                  worksheet,
                                  autoFilterEnabled: true,
                                }).then(() => {
                                  workbook.xlsx.writeBuffer().then((buffer) => {
                                    saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Employees.xlsx');
                                  });
                                });
                              },
                            columns: [

                                {
                                    dataField: "ItemName",
                                    caption: "اسم المجموعة/ المادة",

                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        var fontWeight = "400"; // Set the desired font weight
                                        let fontSize = "13px";
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

                                },

                                {
                                    caption: "الحدث",
                                    width: 200,
                                    cellTemplate: function(container, options) {
                                        var row = options.row.data;

                                        var link1=$('<div>').css({'background-color':'#7CEECE'});
                                        link1.dxButton({
                                            stylingMode: "contained",
                                            type: "normal",
                                            icon: "edit",
                                            onClick() {
                                                var rowData = options.data;
                                                let url='itemsGroups/';
                                                let data={
                                                    ID:rowData.ID,
                                                };
                                                $.ajax({
                                                    type: "GET",
                                                    url: url+"show",
                                                    data: data,
                                                    success: function (response) {


                                                            $('#ID').dxTextBox("instance").option({value:response.ID});
                                                            $('#ItemName').dxTextBox("instance").option({value:response.placeName});

                                                            let datavalue=Number(response.ParentID);
                                                            $('#ParentID').dxDropDownBox("instance").option(
                                                                {
                                                                    value:datavalue,
                                                                    readOnly:false,
                                                                }
                                                            );

                                                            var displaycard =
                                                            document.getElementById("ItemsGroupsaction");
                                                            if (displaycard.style.display == "none") {
                                                                document.getElementById(
                                                                    "card_ItemsGroupstitle"
                                                                ).innerText = "تحديث البيانات";

                                                                displaycard.style.display = "block";
                                                                document
                                                                    .getElementById("card_ItemsGroupstitle")
                                                                    .scrollIntoView();
                                                            } else {
                                                                displaycard.style.display = "none";
                                                                document.getElementById(
                                                                    "card_ItemsGroupstitle"
                                                                ).innerText = "";
                                                                displaycard.style.display = "block";
                                                                document.getElementById(
                                                                    "card_ItemsGroupstitle"
                                                                ).innerText = "تحديث البيانات";
                                                                document
                                                                    .getElementById("card_ItemsGroupstitle")
                                                                    .scrollIntoView();
                                                            }
                                                    }
                                                });
                                            }
                                        });

                                        var link2 = $("<div>").css({'margin-right':'10px'});
                                        link2.dxButton({
                                            stylingMode: "contained",
                                            icon: "trash",
                                            type:"default",
                                            onClick() {



                                            },
                                        });

                                    $(container).append(link1, link2);
                                    }
                                },

                            ],

                            filterRow: { visible: true },
                            searchPanel: {
                                visible: true,
                                width:300,
                            },

                            selection: { mode: "single" },
                            onSelectionChanged: function (e) {
                                e.component
                                    .byKey(e.currentSelectedRowKeys[0])
                                    .done((employee) => {
                                        if (employee) {
                                            // $("#selectedNode").text(
                                            //     `Selected Node: ${employee.St_Guid}`
                                            // );
                                        }
                                    });
                            },
                            onContentReady: function (e) {
                                // Add custom class to the header panel
                                e.element
                                    .find(".dx-treelist-headers")
                                    .addClass("custom-header");
                                    // e.component.option("paging.pageCount", totalPages);
                                    // e.component.option("paging.pageIndex", currentPage - 1);
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
                            pager: {
                                visible: true,
                                showPageSizeSelector: true,
                                showInfo: true,
                                allowedPageSizes: [10, 25, 50, 100, "all"],
                                showNavigationButtons: true,
                            },

                        }).dxTreeList("instance");


                });

            },

        });
    });
}


function setMaskCode() {
    let selectValue = $("#ParentID")
        .dxDropDownBox("instance")
        .option("value");

    if (selectValue == null) {
        $.ajax({
            type: "GET",
            data: { ParentID: selectValue },
            url: "itemsGroupsSetCode/setCode",
            success: function (response) {
                 let code = Number(response.getData);
                $("#ItemCode").dxTextBox("instance").option("value", code);

            },
        });
    } else {
        $.ajax({
            type: "GET",
            data: { ParentID: selectValue },
            url: "itemsGroupsSetCode/setCode",
            success: function (response) {
                console.log(response);
                // if (response.getData) {

                //     let child = Number(response.getData.ItemCode);
                //     let parent = Number(response.getParent.ItemCode);
                //     let result = 0;
                //     let finalResult = 0;
                //     let count = 1;
                //     while (child != parent) {
                //         result = child % 10;
                //         finalResult = finalResult * count + result;
                //         count *= 10;
                //         child = Math.floor(child / 10);
                //     }
                //     finalResult++;

                //     let accode = response.getParent.ItemCode;
                //     let newCode = accode + finalResult;
                //     $("#ItemCode")
                //         .dxTextBox("instance")
                //         .option("value", newCode);
                // } else {
                //     console.log(response);
                //     let code = response.getParent.ItemCode + 1;
                //     $("#ItemCode").dxTextBox("instance").option("value", code);
                // }
            },
        });
    }
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
            placeholder: "ادخل اسم المجموعة",
            inputAttr: { "aria-label": "placeName" },

        });
    });
    $(() => {
        $("#ItemCode").dxTextBox({
            placeholder: "  ",
            inputAttr: { "aria-label": "placeName" },
            readOnly:true

        });
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

        },
    });

});
// End Components.

// Begin Context Menu ItemsGroups
$(document).ready(function () {
    $("#btnNewAdd").dxButton({
        stylingMode: "contained",
        text: "اضافة",
        type: "success",
        icon: "plus",
        width: 120,
        onClick() {
            var displaycard = document.getElementById("ItemsGroupsaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_ItemsGroupstitle").innerText = "";
                ItemsGroups_cleardata();
                setMaskCode();
                displaycard.style.display = "none";
                document.getElementById("firstCard").scrollIntoView();
            }else{
                document.getElementById("card_ItemsGroupstitle").innerText ="اضافة مجموعة";
                setMaskCode();
                displaycard.style.display = "block";
                document.getElementById("card_ItemsGroupstitle").scrollIntoView();
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
        icon:"close",
        width: 120,
        onClick() {
            var displaycard = document.getElementById("ItemsGroupsaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_ItemsGroupstitle").innerText = "";
                ItemsGroups_cleardata();
                // ItemsGroups_setStCode();
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
        icon: 'check',
        width: 120,
        onClick() {

            ItemsGroups_chechdata();
            if(error_ItemName != ""){
                console.log('check')
                return 0;
            }else{
                ItemsGroups_UpdateOrCreate();
            }

        },
    });
});
// End Button Save
