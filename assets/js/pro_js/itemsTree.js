ItemsTree_fetch();
ItemsTree_filldata();

function ItemsTree_cleardata() {
 $('#IT_ID').dxTextBox("instance").option("value","");
 $('#IT_Code').dxTextBox("instance").option("value","");
 $('#IT_Name').dxTextBox("instance").option("value","");
 $("#IT_ParentID").dxDropDownBox("instance").option("value",null);
}

function ItemsTree_chechdata() {
    if ($.trim($(".IT_Name").val()).length == 0) {
        error_IT_Name = "Require";
        $("#error_IT_Name").text(error_IT_Name);
    } else {
        error_IT_Name = "";
        $("#error_IT_Name").text(error_IT_Name);
    }
    if ($.trim($(".IT_Code").val()).length == 0) {
        error_IT_Code = "Require";
        $("#error_IT_Code").text(error_IT_Code);
    } else {
        error_IT_Code = "";
        $("#error_IT_Code").text(error_IT_Code);
    }
}

function ItemsTree_insert() {
    var url = "itemsTree";
    var data = {
        IT_ParentID: $("#IT_ParentID").dxDropDownBox("instance").option("value"),
        IT_Name: $("#IT_Name").dxTextBox("instance").option("value"),
        IT_Code: $("#IT_Code").dxTextBox("instance").option("value"),
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
            ItemsTree_fetch();
        },
    });
}

function ItemsTree_filldata() {
    var url = "ItemsTreesfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {
                $(() => {
                    let dataGrid;
                    $("#IT_ParentID").dxDropDownBox({
                        value: 0,
                        valueExpr: "id",
                        deferRendering: false,
                        placeholder: "Select Parent Store.",
                        inputAttr: { "aria-label": "Parent Group" },
                        displayExpr(item) {
                            return item && `${item.IT_Name}   -${item.IT_Code} `;
                        },
                        showClearButton: true,
                        dataSource: response.getItemsGroup,//makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField:"IT_Name",
                                        caption:"اسم المادة"
                                    },
                                    {
                                        dataField:"IT_Code",
                                        caption:"كود المادة"
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
                        onValueChanged: function(e) {
                            // Code to execute when the value changes
                            // console.log(e.value);
                            let IT_ID=$('#IT_ID').dxTextBox("instance").option("value");
                            if(IT_ID == null || IT_ID == ""){
                                setMaskCode();
                            }else{

                            }


                        }

                    });
                });
            },
        });
    });
}
function ItemsTree_fetch() {
    $(document).ready(function () {
        var url = "itemsTree/";

        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {
                    const treeList = $("#itemTree")
                        .dxTreeList({
                            dataSource: response.ItemsTree,
                            rootValue: 0,
                            keyExpr: "IT_ID",
                            parentIdExpr: "IT_ParentID",
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
                                    dataField: "IT_Name",
                                    caption: "المادة",
                                    validationRules: [
                                        {
                                            type: "required",
                                        },
                                    ],
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        var fontWeight = "600"; // Set the desired font weight
                                        let fontSize = "17px";
                                        let fontColor = '#283741';
                                        // var formattedValue = new Intl.NumberFormat("en-US", {
                                        //     style: "decimal",
                                        //     minimumFractionDigits: 0,
                                        //     maximumFractionDigits: 3,
                                        //     minimumIntegerDigits: 1,
                                        //     useGrouping: true,
                                        // }).format(cellValue);
                                        $("<div>")
                                            .css({
                                                "font-size" :fontSize,
                                                "font-weight" : fontWeight,
                                                "color" :fontColor,
                                            })
                                            .text(cellValue)
                                            .appendTo(container);
                                    },
                                    // fixed: true,
                                },
                                {
                                    dataField: "IT_Code",
                                    caption: "كود المادة",
                                    validationRules: [
                                        {
                                            type: "required",
                                        },
                                    ],
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        var fontWeight = "600"; // Set the desired font weight
                                        let fontSize = "17px";
                                        let fontColor = 'blue';
                                       
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
                                    dataField: "IT_PartNumber",
                                    caption: "الرمز الاصلي",
                                    validationRules: [
                                        {
                                            type: "required",
                                        },
                                    ],
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        var fontWeight = "600"; // Set the desired font weight
                                        let fontSize = "17px";
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
                                    dataField: "IT_State",
                                    caption: "حالة",
                                    validationRules: [
                                        {
                                            type: "required",
                                        },
                                    ],
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        if(cellValue ==='مفعلة'){
                                            var fontWeight = "600"; // Set the desired font weight
                                        let fontSize = "17px";
                                        let fontColor = 'green';
                                       
                                        $("<div>")
                                            .css({
                                                "font-size" :fontSize,
                                                "font-weight" : fontWeight,
                                                "color" :fontColor,
                                            })
                                            .text(cellValue)
                                            .appendTo(container);
                                        }else{
                                        var fontWeight = "450"; // Set the desired font weight
                                        let fontSize = "16px";
                                        let fontColor = 'red';
                                       
                                        $("<div>")
                                            .css({
                                                "font-size" :fontSize,
                                                "font-weight" : fontWeight,
                                                "color" :fontColor,
                                            })
                                            .text(cellValue)
                                            .appendTo(container);
                                        }
                                        
                                    },
                                },
                                {
                                    dataField: "IT_Count",
                                    caption: "عدد",
                                    format:'number',
                                    alignment:'right',
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        var fontWeight = "600"; // Set the desired font weight
                                        let fontSize = "17px";
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
                                    dataField: "IT_ItemUnit",
                                    caption: "الوحدة",
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        var fontWeight = "600"; // Set the desired font weight
                                        let fontSize = "17px";
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
                                    dataField: "IT_LastPriceBuying",
                                    caption: "اخر شراء",
                                    format:'number',
                                    alignment:'right',
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        var fontWeight = "600"; // Set the desired font weight
                                        let fontSize = "17px";
                                        let fontColor = 'red';
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
                                    dataField: "IT_LastPriceSaling",
                                    caption: "اخر بيع",
                                    format:'number',
                                    alignment:'right',
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        var fontWeight = "600"; // Set the desired font weight
                                        let fontSize = "17px";
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
                                    caption: "الحدث",
                                    width: 200,
                                    cellTemplate: function(container, options) {
                                        var row = options.row.data;

                                        var link1=$('<div>');
                                        link1.dxButton({
                                            stylingMode: "contained",
                                            type: "normal",
                                            icon: "edit",
                                            onClick() {
                                                var rowData = options.data;
                                                let url='itemsTree/';
                                                let data={
                                                    IT_ID:rowData.IT_ID,
                                                };
                                                $.ajax({
                                                    type: "GET",
                                                    url: url+"show",
                                                    data: data,
                                                    success: function (response) {
                                                        console.log(response);

                                                            $('#IT_ID').dxTextBox("instance").option({value:response.id});
                                                            $('#IT_Name').dxTextBox("instance").option({value:response.IT_Name});
                                                            $('#IT_Code').dxTextBox("instance").option({
                                                                value:response.IT_Code,
                                                                readOnly:true,
                                                            });
                                                            let datavalue=Number(response.IT_ParentID);
                                                            $('#IT_ParentID').dxDropDownBox("instance").option(
                                                                {
                                                                    value:datavalue,
                                                                    readOnly:true,
                                                                }
                                                            );

                                                            var displaycard =
                                                            document.getElementById("ItemsTreeaction");
                                                            if (displaycard.style.display == "none") {
                                                                document.getElementById(
                                                                    "card_ItemsTreetitle"
                                                                ).innerText = "تحديث البيانات";

                                                                displaycard.style.display = "block";
                                                                document
                                                                    .getElementById("card_ItemsTreetitle")
                                                                    .scrollIntoView();
                                                            } else {
                                                                displaycard.style.display = "none";
                                                                document.getElementById(
                                                                    "card_ItemsTreetitle"
                                                                ).innerText = "";
                                                                displaycard.style.display = "block";
                                                                document.getElementById(
                                                                    "card_ItemsTreetitle"
                                                                ).innerText = "تحديث البيانات";
                                                                document
                                                                    .getElementById("card_ItemsTreetitle")
                                                                    .scrollIntoView();
                                                            }
                                                    }
                                                });
                                            }
                                        });

                                        var link2 = $("<div>");
                                        link2.dxButton({
                                            stylingMode: "contained",
                                            icon: "trash",
                                            onClick() {
                                                // $.ajax({
                                                //     type: "DELETE",
                                                //     url: "ItemFour",
                                                //     data: "data",
                                                //     dataType: "dataType",
                                                //     success: function (response) { },
                                                // });


                                            },
                                        });

                                    $(container).append(link1, link2);
                                    }
                                },

                            ],

                            filterRow: { visible: true },
                            searchPanel: {
                                visible: true,
                                width:500,
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

function ItemsTree_update() {
    var url = "itemsTree/";
    var data = {
        IT_ID: $("#IT_ID").dxTextBox("instance").option("value"),
        IT_ParentID: $("#IT_ParentID").dxDropDownBox("instance").option("value"),
        IT_Name: $("#IT_Name").dxTextBox("instance").option("value"),
        IT_Code: $("#IT_Code").dxTextBox("instance").option("value"),
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
            ItemsTree_fetch();

        },
    });
}

// End CRUD Functions.


// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#IT_ID").dxTextBox({
            placeholder: "ID of Item",
            inputAttr: { "aria-label": "IT_ID" },

        });
    });
    $(() => {
        $("#IT_Name").dxTextBox({
            placeholder: "ادخل اسم المادة",
            inputAttr: { "aria-label": "Item Name" },

        });
    });
    $(() => {
        $("#IT_Code").dxTextBox({
            placeholder: "كود المادة",
            inputAttr: { "aria-label": "Item Code" },

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

// Begin Context Menu items
const contextMenuItems = [
    { text: "اضافة مجموعة جديدة" },
];

$(() => {
    $("#context-menu").dxContextMenu({
        dataSource: contextMenuItems,
        width: 250,
        target: "#itemTree",

        onItemClick(e) {
            if (!e.itemData.items) {

                switch (e.itemData.text) {
                    case "اضافة مجموعة جديدة":
                        var displaycard =
                        document.getElementById("ItemsTreeaction");
                        if (displaycard.style.display == "none") {
                            ItemsTree_filldata();
                            $('#IT_ParentID').dxDropDownBox("instance").option("readOnly", false);
                            $("#IT_Code").dxTextBox("instance").option("readOnly", false);
                            document.getElementById(
                                "card_ItemsTreetitle"
                            ).innerText = "اضافة مجموعة";

                            ItemsTree_cleardata();
                            // ItemsTree_setStCode();
                            displaycard.style.display = "block";
                            document
                                .getElementById("btnSave")
                                .scrollIntoView();
                        } else {
                            ItemsTree_filldata();
                            $('#IT_ParentID').dxDropDownBox("instance").option("readOnly", false);
                            $("#IT_Code").dxTextBox("instance").option("readOnly", false);
                            displaycard.style.display = "none";
                            document.getElementById(
                                "card_ItemsTreetitle"
                            ).innerText = "";
                            ItemsTree_cleardata();
                            // ItemsTree_setStCode();
                            displaycard.style.display = "block";
                            document.getElementById(
                                "card_ItemsTreetitle"
                            ).innerText = "اضافة مجموعة";
                            document
                                .getElementById("btnSave")
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
// End Context Menu..

//#region Close Form
$(document).ready(function () {
    $("#danger-contained").dxButton({
        stylingMode: "contained",
        text: "اغلاق",
        type: "danger",
        icon:"close",
        width: 120,
        onClick() {
            var displaycard = document.getElementById("ItemsTreeaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_ItemsTreetitle").innerText = "";
                ItemsTree_cleardata();
                // ItemsTree_setStCode();
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
            let IT_ID = $('#IT_ID').dxTextBox("instance").option("value");
            if(IT_ID == null || IT_ID ==""){
                ItemsTree_insert();
            }else{
                ItemsTree_update();
            }

        },
    });
});
// End Button Save


function setMaskCode(){
    let selectValue= $('#IT_ParentID').dxDropDownBox("instance").option("value");
    // console.log(selectValue);
    if(selectValue==null){
        $.ajax({
            type: "GET",
            data:{IT_ID:1},
            url: "ItemsTree/setCode",
            success: function (response) {
                    if(response.setCode){

                        let code=Number(response.setCode.IT_Code) + 1 ;
                        $('#IT_Code').dxTextBox("instance").option("value",code);
                    }else{

                    }
            }
        });
    }
    else{

        $.ajax({
            type: "GET",
            data:{IT_ID:selectValue},
            url: "ItemsTree/setCode",
            success: function (response) {

                    if(response.setCode){
                        let child =Number(response.setCode.IT_Code);
                        let parent = Number(response.setCode2.IT_Code);
                        let result = 0;
                        let finalResult = 0;
                        let count = 1;
                        while (child != parent)
                        {
                            result = child % 10;
                            finalResult = (result * count) + finalResult;
                            count *= 10;
                            child = Math.floor(child / 10) ;
                        }
                        finalResult++;

                        let accode = response.setCode2.IT_Code;
                        let newCode= accode+finalResult;
                        $('#IT_Code').dxTextBox("instance").option("value",newCode);
                    }else{
                        let code=response.setCode2.IT_Code + 1 ;
                        $('#IT_Code').dxTextBox("instance").option("value",code);
                    }



            }
        });
    }

}
