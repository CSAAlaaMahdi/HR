
StoriesTree_fetch();
StoriesTree_filldata();

function StoriesTree_cleardata() {
    $('#St_Guid').dxTextBox("instance").option("value","");
    $('#St_Name').dxTextBox("instance").option("value","");
    $('#St_Code').dxTextBox("instance").option("value","");
    $('#St_Address').dxTextBox("instance").option("value","");
    // $('#St_StoreKeeper').dxSelectBox("instance").option("value","");
    $('#St_Notes').dxTextArea("instance").option("value","");
    $('#St_State').dxSwitch("instance").option("value",false);
    $('#St_IsGroup').dxSwitch("instance").option("value",false);
    $('#St_ParentStore').dxDropDownBox("instance").option("value",null);
    $('#St_Account').dxDropDownBox("instance").option("value",null);

}
//Begin CRUD Function...
function StoriesTree_chechdata() {
    if ($.trim($(".St_Name").val()).length == 0) {
        error_St_Name = "Require";
        $("#error_St_Name").text(error_St_Name);
    } else {
        error_St_Name = "";
        $("#error_St_Name").text(error_St_Name);
    }
    if ($.trim($(".St_State").val()).length == 0) {
        error_St_State = "Require";
        $("#error_St_State").text(error_St_State);
    } else {
        error_St_State = "";
        $("#error_St_State").text(error_St_State);
    }
    if ($.trim($(".St_Account").val()).length == 0) {
        error_St_Account = "Require";
        $("#error_St_Account").text(error_St_Account);
    } else {
        error_St_Account = "";
        $("#error_St_Account").text(error_St_Account);
    }
    if ($.trim($(".St_Code").val()).length == 0) {
        error_St_Code = "Require";
        $("#error_St_Code").text(error_St_Code);
    } else {
        error_St_Code = "";
        $("#error_St_Code").text(error_St_Code);
    }
}

function StoriesTree_insert() {
    var url = "stories";

    var data = {
        St_ParentGuid: $("#St_ParentStore").dxDropDownBox("instance").option("value"),
        St_Name: $("#St_Name").dxTextBox("instance").option("value"),
        St_Code: $("#St_Code").dxTextBox("instance").option("value"),
        St_Account: $("#St_Account").dxDropDownBox("instance").option("value"),
        St_State: (function () {
            if ($("#St_State").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        St_IsGroup: (function () {
            if ($("#St_IsGroup").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        St_Address: $("#St_Address").dxTextBox("instance").option("value"),
        // St_StoreKeeper: $("#St_Stockkeeper").dxSelectBox("instance").option("value"),
        St_Notes: $("#St_Notes").dxTextArea("instance").option("value"),
    };
    let test = $("#St_ParentStore").dxDropDownBox("instance").option("value");


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
            StoriesTree_fetch();
        },
    });
}
function StoriesTree_update() {
    var url = "stories/";
    var data = {
        St_Guid : $('#St_Guid').dxTextBox("instance").option("value"),
        St_ParentGuid: $("#St_ParentStore").dxDropDownBox("instance").option("value"),
        St_Name: $("#St_Name").dxTextBox("instance").option("value"),
        St_Code: $("#St_Code").dxTextBox("instance").option("value"),
        St_Account: $("#St_Account").dxDropDownBox("instance").option("value"),
        St_State: (function () {
            if ($("#St_State").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        St_IsGroup: (function () {
            if ($("#St_IsGroup").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        St_Address: $("#St_Address").dxTextBox("instance").option("value"),
        // St_StoreKeeper: $("#St_Stockkeeper").dxSelectBox("instance").option("value"),
        St_Notes: $("#St_Notes").dxTextArea("instance").option("value"),
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
            StoriesTree_fetch();
        },
    });
}

function StoriesTree_filldata() {
    var url = "StoriesTreesfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {

                $(() => {
                    let dataGrid;
                    $("#St_Account").dxDropDownBox({
                        value: null,
                        valueExpr: "Guid",
                        deferRendering: false,
                        placeholder: "اختر حساب المخزن",
                        inputAttr: { "aria-label": "Account" },
                        displayExpr(item) {
                            return item && `${item.Ac_Name}   -${item.Ac_Code_Mask} `;
                        },
                        showClearButton: true,
                        dataSource: response.getAccount,//makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField:"Ac_Name",
                                        caption : "اسم الحساب"
                                    },
                                    {
                                        dataField: "Ac_Code_Mask",
                                        caption:"كود الحساب"
                                    }
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

                    });
                });

                $(() => {
                    let dataGrid;
                    $("#St_ParentStore").dxDropDownBox({
                        value: null,
                        valueExpr: "St_Guid",
                        deferRendering: false,
                        placeholder: "اختر المخزن الرئيسي",
                        inputAttr: { "aria-label": "Parent_Store" },
                        displayExpr(item) {
                            return item && `${item.St_Name}   -${item.St_Code} `;
                        },
                        showClearButton: true,
                        dataSource: response.getStores,//makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField:"St_Name",
                                        caption:"اسم المخزن"
                                    },
                                    {
                                        dataField:"St_Code",
                                        caption:"كود المخزن"
                                    }
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
                                        hasSelection ? keys[0].St_Guid : null

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
                        //    setMaskCode();

                        }

                    });
                });

            },
        });
    });
}

function StoriesTree_fetch() {
    $(document).ready(function () {
        var url = "stories/";
        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {
                    const treeList = $(".tree")
                        .dxTreeList({
                            dataSource: response.StoresTree,
                            rootValue: null,
                            keyExpr: "St_Guid",
                            parentIdExpr: "St_ParentGuid",
                            autoExpandAll: false,
                            allowColumnReordering: true,
                            allowColumnResizing: true,
                            columnAutoWidth: true,
                            columnFixing: {
                                enabled: true,
                            },
                            focusedRowEnabled:true,
                            columnChooser: { enabled: true },
                            columns: [
                                {
                                    dataField: "St_Name",
                                    caption: "اسم المخزن",
                                    validationRules: [
                                        {
                                            type: "required",
                                        },
                                    ],
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        var fontWeight = "450"; // Set the desired font weight
                                        let fontSize = "16px";
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
                                    dataField: "St_MaskCode",
                                    caption: "الكود التعريفي",
                                    validationRules: [
                                        {
                                            type: "required",
                                        },
                                    ],
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        var fontWeight = "450"; // Set the desired font weight
                                        let fontSize = "16px";
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
                                },
                                {
                                    dataField: "St_State",
                                    caption: "حالة المخزن",
                                    validationRules: [
                                        {
                                            type: "required",
                                        },
                                    ],
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        if(cellValue ==='مفعل'){
                                            var fontWeight = "450"; // Set the desired font weight
                                        let fontSize = "16px";
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
                                    dataField: "ItemCounts",
                                    caption: "عدد المواد",
                                    validationRules: [
                                        {
                                            type: "required",
                                        },
                                    ],
                                },
                                {
                                    dataField: "StoreCost",
                                    caption: "كلفة المخزن",
                                    validationRules: [
                                        {
                                            type: "required",
                                        },
                                    ],
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
                                                let url='stories/';
                                                let data={
                                                    St_Guid:rowData.St_Guid,
                                                };
                                                $.ajax({
                                                    type: "GET",
                                                    url: url+"show",
                                                    data: data,
                                                    success: function (response) {
                                                      $('#St_Guid').dxTextBox("instance").option({value:response.St_Guid});
                                                        $('#St_Name').dxTextBox("instance").option({value:response.St_Name});
                                                        $('#St_Code').dxTextBox("instance").option({value:response.St_MaskCode});
                                                        $('#St_Address').dxTextBox("instance").option({value:response.St_Address});
                                                        $('#St_Notes').dxTextArea("instance").option({value:response.St_Notes});
                                                        if(response.St_State == "1"){
                                                            $('#St_State').dxSwitch("instance").option({value:true});
                                                        }else{
                                                            $('#St_State').dxSwitch("instance").option({value:false});
                                                        }
                                                        if(response.St_IsGroup == "1"){
                                                            $('#St_IsGroup').dxSwitch("instance").option({value:true});
                                                        }else{
                                                            $('#St_IsGroup').dxSwitch("instance").option({value:false});
                                                        }

                                                        $('#St_ParentStore').dxDropDownBox("instance").option("value",response.St_ParentGuid);
                                                        $('#St_Account').dxDropDownBox("instance").option("value",response.St_Account);


                                                        var displaycard =
                                                        document.getElementById("StoriesTreeaction");
                                                        if (displaycard.style.display == "none") {
                                                            $('#St_ParentStore').dxDropDownBox("instance").option({
                                                                visible:false,
                                                            })
                                                            document.getElementById(
                                                                "card_StoriesTreetitle"
                                                            ).innerText = "تعديل المخزن";
                                                            displaycard.style.display = "block";
                                                            document
                                                                .getElementById("card_StoriesTreetitle")
                                                                .scrollIntoView();
                                                        } else {
                                                            $('#St_ParentStore').dxDropDownBox("instance").option({
                                                                visible:false,
                                                            })
                                                            displaycard.style.display = "none";
                                                            document.getElementById(
                                                                "card_StoriesTreetitle"
                                                            ).innerText = "";
                                                            displaycard.style.display = "block";
                                                            document.getElementById(
                                                                "card_StoriesTreetitle"
                                                            ).innerText = "تعديل المخزن";
                                                            document
                                                                .getElementById("card_StoriesTreetitle")
                                                                .scrollIntoView();
                                                        }
                                                                }
                                                            });


                                                        },
                                        })

                                        var link2 = $("<div>");
                                        link2.dxButton({
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

                                    $(container).append(link1, link2);
                                    }
                                },

                            ],

                            filterRow: { visible: true },
                            searchPanel: { visible: true,width:500, },
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

// End CRUD Functions.

// Begin Context Menu items
const contextMenuItems = [
    { text: "انشاء مخزن رئيسي" },
    { text: "انشاء مخزن فرعي" },
];

$(() => {
    $("#context-menu").dxContextMenu({
        dataSource: contextMenuItems,
        width: 250,
        target: ".tree",

        onItemClick(e) {
            if (!e.itemData.items) {

                switch (e.itemData.text) {
                    case "انشاء مخزن رئيسي":
                        var displaycard =
                        document.getElementById("StoriesTreeaction");
                        if (displaycard.style.display == "none") {
                            $('#St_ParentStore').dxDropDownBox("instance").option({
                                value:null,
                                visible:true,
                            })
                            // setMaskCode();
                            document.getElementById(
                                "card_StoriesTreetitle"
                            ).innerText = "اضافة مخزن";

                            StoriesTree_cleardata();
                            // StoriesTree_setStCode();
                            displaycard.style.display = "block";
                            document
                                .getElementById("card_StoriesTreetitle")
                                .scrollIntoView();
                        } else {
                            $('#St_ParentStore').dxDropDownBox("instance").option({
                                visible:true,
                            })
                            displaycard.style.display = "none";
                            document.getElementById(
                                "card_StoriesTreetitle"
                            ).innerText = "";
                            StoriesTree_cleardata();
                            // StoriesTree_setStCode();
                            displaycard.style.display = "block";
                            document.getElementById(
                                "card_StoriesTreetitle"
                            ).innerText = "اضافة مخزن";
                            document
                                .getElementById("card_StoriesTreetitle")
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


$(document).ready(function () {
    $("#danger-contained").dxButton({
        stylingMode: "contained",
        text: "اغلاق",
        type: "danger",
        width: 120,
        onClick() {
            var displaycard = document.getElementById("StoriesTreeaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_StoriesTreetitle").innerText = "";
                StoriesTree_cleardata();
                // StoriesTree_setStCode();
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
        icon: 'check',
        width: 120,
        onClick() {
            let StoreID = $('#St_Guid').dxTextBox("instance").option("value");
            if(StoreID == null || StoreID ==""){
                StoriesTree_insert();
            }else{
                StoriesTree_update();
            }

           
        },
    });
});
// End Button Save



// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#St_Name").dxTextBox({
            placeholder: "ادخل اسم المخزن",
            inputAttr: { "aria-label": "Store_Name" },

        });
    });
    $(() => {
        $("#St_Guid").dxTextBox({
            placeholder: "Enter the Store Name",
            inputAttr: { "aria-label": "StoreGuid" },

        });
    });
    $(() => {
        $("#St_Code").dxTextBox({
            placeholder: "الكود التعريفي للمخزن",
            inputAttr: { "aria-label": "Store_Code" },
            readOnly:true,
        });
    });
    $(() => {
        $("#St_Address").dxTextBox({
            placeholder: "عنوان المخزن",
            inputAttr: { "aria-label": "Address" },
        });
    });

    $(() => {
        const searchBox = $("#St_StockKeeper")
            .dxSelectBox({
                // dataSource: products,
                displayExpr: "Name",
                inputAttr: { "aria-label": "Stock_Keeper" },
                valueExpr: "ID",
                searchEnabled: true,
            })
            .dxSelectBox("instance");
    });

    $(() => {
        $("#St_State").dxSwitch({});
    });
    $(() => {
        $("#St_IsGroup").dxSwitch({});
    });

    $(() => {
        $("#St_Notes").dxTextArea({
            // ...
            minHeight: 50,
            maxHeight: 300,
            autoResizeEnabled: true,
            // value: longText,
            maxLength: 500,
            label: "ملاحظات",
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

function setMaskCode(){
    let selectValue= $('#St_ParentStore').dxDropDownBox("instance").option("value");

    if(selectValue==null){
        $.ajax({
            type: "GET",
            data:{St_Guid:selectValue},
            url: "Stories/setCode",
            success: function (response) {
                    if(response.getData){
                        let code=Number(response.getData.St_Code) + 1 ;
                        $('#St_Code').dxTextBox("instance").option("value",code);
                    }else{

                    }
            }
        });
    }
    else{

        $.ajax({
            type: "GET",
            data:{St_Guid:selectValue},
            url: "Stories/setCode",
            success: function (response) {
                    if(response.getData){
                        let child =Number(response.getData.St_Code);
                        let parent = Number(response.getParent.St_Code);
                        let result = 0;
                        let finalResult = 0;
                        let count = 1;
                        while (child != parent)
                        {
                            result = child % 10;
                            finalResult = (finalResult * count) + result;
                            count *= 10;
                            child = Math.floor(child / 10) ;
                        }
                        finalResult++;

                        let accode = response.getParent.St_Code;
                        let newCode= accode+finalResult;
                        $('#St_Code').dxTextBox("instance").option("value",newCode);
                    }else{
                        let code=response.getParent.St_Code + 1 ;
                        $('#St_Code').dxTextBox("instance").option("value",code);
                    }



            }
        });
    }

}


