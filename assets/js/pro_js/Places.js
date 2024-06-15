Places_fetch();
Places_filldata();

function Places_cleardata() {
 $('#ID').dxTextBox("instance").option("value","");
 $('#placeName').dxTextBox("instance").option("value","");
 $("#perID").dxDropDownBox("instance").option("value",null);
}

function Places_chechdata() {
    if ($.trim($("#placeName").dxTextBox("instance").option('value')).length == 0) {
        error_placeName = "مطلوب";
        $("#error_placeName").text(error_placeName);
    } else {
        error_placeName = "";
        $("#error_placeName").text(error_placeName);
    }

}

function Places_UpdateOrCreate() {
    var url = "places";
    var data = {
        perID: $("#perID").dxDropDownBox("instance").option("value"),
        placeName: $("#placeName").dxTextBox("instance").option("value"),
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
            Places_fetch();
            Places_filldata();
        },
    });
}

function Places_filldata() {
    var url = "placesfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {

                $(() => {
                    let dataGrid;
                    $("#perID").dxDropDownBox({
                        value: null,
                        valueExpr: "ID",
                        deferRendering: false,
                        placeholder: "اختر الموقع",
                        inputAttr: { "aria-label": "Parent Group" },
                        displayExpr(item) {
                            return item && `${item.placeName}`;
                        },
                        showClearButton: true,
                        dataSource: response.getPlaces,//makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField:"placeName",
                                        caption:"اسم الموقع"
                                    },

                                ],
                                hoverStateEnabled: true,
                                paging: { enabled: true, pageSize: 10 },
                                filterRow: { visible: true },
                                scrolling: { mode: "virtual" },
                                selection: { mode: "single" },
                                selectedRowKeys: value,
                                height: "100%",
                                onSelectionChanged(selectedPlaces) {
                                    const keys = selectedPlaces.selectedRowKeys;
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
            },
        });
    });
}
function Places_fetch() {
    $(document).ready(function () {
        var url = "places/";

        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                console.log(response);
                $(function () {

                    const treeList = $("#PlacesTree")
                        .dxTreeList({
                            dataSource:response.getPlaces,
                            rootValue: 0,
                            keyExpr:'ID',
                            parentIdExpr: "perID",
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
                                    dataField: "placeName",
                                    caption: "الموقع",

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
                                                let url='places/';
                                                let data={
                                                    ID:rowData.ID,
                                                };
                                                $.ajax({
                                                    type: "GET",
                                                    url: url+"show",
                                                    data: data,
                                                    success: function (response) {


                                                            $('#ID').dxTextBox("instance").option({value:response.ID});
                                                            $('#placeName').dxTextBox("instance").option({value:response.placeName});

                                                            let datavalue=Number(response.perID);
                                                            $('#perID').dxDropDownBox("instance").option(
                                                                {
                                                                    value:datavalue,
                                                                    readOnly:false,
                                                                }
                                                            );

                                                            var displaycard =
                                                            document.getElementById("Placesaction");
                                                            if (displaycard.style.display == "none") {
                                                                document.getElementById(
                                                                    "card_Placestitle"
                                                                ).innerText = "تحديث البيانات";

                                                                displaycard.style.display = "block";
                                                                document
                                                                    .getElementById("card_Placestitle")
                                                                    .scrollIntoView();
                                                            } else {
                                                                displaycard.style.display = "none";
                                                                document.getElementById(
                                                                    "card_Placestitle"
                                                                ).innerText = "";
                                                                displaycard.style.display = "block";
                                                                document.getElementById(
                                                                    "card_Placestitle"
                                                                ).innerText = "تحديث البيانات";
                                                                document
                                                                    .getElementById("card_Placestitle")
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
                                pageSize: 5,

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
        $("#placeName").dxTextBox({
            placeholder: "ادخل اسم الموقع",
            inputAttr: { "aria-label": "placeName" },

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

// Begin Context Menu Places
$(document).ready(function () {
    $("#btnNewAdd").dxButton({
        stylingMode: "contained",
        text: "اضافة",
        type: "success",
        icon: "plus",
        width: 120,
        onClick() {
            var displaycard = document.getElementById("Placesaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_Placestitle").innerText = "";
                Places_cleardata();
                // Job_setStCode();
                displaycard.style.display = "none";
                document.getElementById("firstCard").scrollIntoView();
            }else{
                document.getElementById("card_Placestitle").innerText ="اضافة موقع  جديد ";
                displaycard.style.display = "block";
                document.getElementById("card_Placestitle").scrollIntoView();

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
            var displaycard = document.getElementById("Placesaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_Placestitle").innerText = "";
                Places_cleardata();
                // Places_setStCode();
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

            Places_chechdata();
            if(error_placeName != ""){
                console.log('check')
                return 0;
            }else{
                console.log('updateOrcreate')
                Places_UpdateOrCreate();
            }

        },
    });
});
// End Button Save
