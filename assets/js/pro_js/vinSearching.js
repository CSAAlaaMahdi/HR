




function StoriesTree_cleardata() {
    $('#St_Guid').dxTextBox("instance").option("value","");



}
//Begin CRUD Function...
function StoriesTree_chechdata() {

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
                        placeholder: "Select Account For this Store",
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
                                columns: ["Ac_Name", "Ac_Code_Mask"],
                                hoverStateEnabled: true,
                                paging: { enabled: true, pageSize: 10},
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

                    });
                });

                $(() => {
                    let dataGrid;
                    $("#St_ParentStore").dxDropDownBox({
                        value: null,
                        valueExpr: "St_Guid",
                        deferRendering: false,
                        placeholder: "Select Parent Store.",
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
                                columns: ["St_Name", "St_Code"],
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
                           setMaskCode();

                        }

                    });
                });

            },
        });
    });
}

function VIN_fetch() {
    $(document).ready(function () {

        var vin = $("#Vin_Searching").dxTextBox("instance").option("value");

        var url = "https://vpic.nhtsa.gov/api/vin/decode/" + vin;

        // Make an asynchronous request to the API
        $.ajax({
          url: url,
          method: "GET",
          dataType: "json",
          success: function(data) {
            // Decode the VIN and display the results
            var decodedVin = Toyota.decodeVin(data.vin);
            console.log(decodedVin);
          },
          error: function(error) {
            // Handle errors
            console.log(error);
          }
        });
    




        // var url = "VIN/";
        // $.ajax({
        //     type: "GET",
        //     url: url + "create",
        //     data:{vin:$('#Vin_Searching').dxTextBox("instance").option("value")},
        //     success: function (response) {
        //         console.log(response);
        //         // $(function () {
        //         //     const treeList = $(".tree")
        //         //         .dxTreeList({
        //         //             dataSource: response.StoresTree,
        //         //             rootValue: null,
        //         //             keyExpr: "St_Guid",
        //         //             parentIdExpr: "St_ParentGuid",
        //         //             autoExpandAll: false,
        //         //             allowColumnReordering: true,
        //         //             allowColumnResizing: true,
        //         //             columnAutoWidth: true,
        //         //             columnFixing: {
        //         //                 enabled: true,
        //         //             },
        //         //             columnChooser: { enabled: true },
        //         //             columns: [
        //         //                 {
        //         //                     dataField: "St_Name",
        //         //                     caption: "Store Name",
        //         //                     validationRules: [
        //         //                         {
        //         //                             type: "required",
        //         //                         },
        //         //                     ],
        //         //                     fixed: true,
        //         //                 },
        //         //                 {
        //         //                     dataField: "St_MaskCode",
        //         //                     caption: "Store Code",
        //         //                     validationRules: [
        //         //                         {
        //         //                             type: "required",
        //         //                         },
        //         //                     ],
        //         //                 },
        //         //                 {
        //         //                     dataField: "St_State",
        //         //                     caption: "Store State",
        //         //                     validationRules: [
        //         //                         {
        //         //                             type: "required",
        //         //                         },
        //         //                     ],
        //         //                 },
        //         //                 {
        //         //                     dataField: "ItemCounts",
        //         //                     caption: "Item Count",
        //         //                     validationRules: [
        //         //                         {
        //         //                             type: "required",
        //         //                         },
        //         //                     ],
        //         //                 },
        //         //                 {
        //         //                     dataField: "StoreCost",
        //         //                     caption: "Store Cost",
        //         //                     validationRules: [
        //         //                         {
        //         //                             type: "required",
        //         //                         },
        //         //                     ],
        //         //                 },
        //         //                 {
        //         //                     caption: "Actions",
        //         //                     width: 200,
        //         //                     cellTemplate: function(container, options) {
        //         //                         var row = options.row.data;

        //         //                         var link1=$('<div>');
        //         //                         link1.dxButton({
        //         //                             stylingMode: "contained",
        //         //                             type: "normal",
        //         //                             icon: "edit",
        //         //                             onClick() {
        //         //                                 var rowData = options.data;
        //         //                                 let url='stories/';
        //         //                                 let data={
        //         //                                     St_Guid:rowData.St_Guid,
        //         //                                 };
        //         //                                 $.ajax({
        //         //                                     type: "GET",
        //         //                                     url: url+"show",
        //         //                                     data: data,
        //         //                                     success: function (response) {
        //         //                                         console.log(response);
        //         //                                       $('#St_Guid').dxTextBox("instance").option({value:response.St_Guid});
        //         //                                         $('#St_Name').dxTextBox("instance").option({value:response.St_Name});
        //         //                                         $('#St_Code').dxTextBox("instance").option({value:response.St_MaskCode});
        //         //                                         $('#St_Address').dxTextBox("instance").option({value:response.St_Address});
        //         //                                         $('#St_Notes').dxTextArea("instance").option({value:response.St_Notes});
        //         //                                         if(response.St_State == "1"){
        //         //                                             $('#St_State').dxSwitch("instance").option({value:true});
        //         //                                         }else{
        //         //                                             $('#St_State').dxSwitch("instance").option({value:false});
        //         //                                         }
        //         //                                         if(response.St_IsGroup == "1"){
        //         //                                             $('#St_IsGroup').dxSwitch("instance").option({value:true});
        //         //                                         }else{
        //         //                                             $('#St_IsGroup').dxSwitch("instance").option({value:false});
        //         //                                         }

        //         //                                         $('#St_ParentStore').dxDropDownBox("instance").option("value",response.St_ParentGuid);
        //         //                                         $('#St_Account').dxDropDownBox("instance").option("value",response.St_Account);


        //         //                                         var displaycard =
        //         //                                         document.getElementById("StoriesTreeaction");
        //         //                                         if (displaycard.style.display == "none") {
        //         //                                             $('#St_ParentStore').dxDropDownBox("instance").option({
        //         //                                                 visible:false,
        //         //                                             })
        //         //                                             document.getElementById(
        //         //                                                 "card_StoriesTreetitle"
        //         //                                             ).innerText = "Add New Store ";
        //         //                                             displaycard.style.display = "block";
        //         //                                             document
        //         //                                                 .getElementById("card_StoriesTreetitle")
        //         //                                                 .scrollIntoView();
        //         //                                         } else {
        //         //                                             $('#St_ParentStore').dxDropDownBox("instance").option({
        //         //                                                 visible:false,
        //         //                                             })
        //         //                                             displaycard.style.display = "none";
        //         //                                             document.getElementById(
        //         //                                                 "card_StoriesTreetitle"
        //         //                                             ).innerText = "";
        //         //                                             displaycard.style.display = "block";
        //         //                                             document.getElementById(
        //         //                                                 "card_StoriesTreetitle"
        //         //                                             ).innerText = "Add New Store   ";
        //         //                                             document
        //         //                                                 .getElementById("card_StoriesTreetitle")
        //         //                                                 .scrollIntoView();
        //         //                                         }
        //         //                                                 }
        //         //                                             });


        //         //                                         },
        //         //                         })

        //         //                         var link2 = $("<div>");
        //         //                         link2.dxButton({
        //         //                             stylingMode: "contained",
        //         //                             icon: "trash",
        //         //                             onClick() {
        //         //                                 $.ajax({
        //         //                                     type: "GET",
        //         //                                     url: "ItemFour",
        //         //                                     data: "data",
        //         //                                     dataType: "dataType",
        //         //                                     success: function (response) { },
        //         //                                 });
        //         //                                 const popup =
        //         //                                     $("#Popup").dxPopup("instance");
        //         //                                 popup.show();
        //         //                                 // var url = "items/";
        //         //                                 // $.ajaxSetup({
        //         //                                 //     headers: {
        //         //                                 //         "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        //         //                                 //     },
        //         //                                 // });
        //         //                                 // $.ajax({
        //         //                                 //     type: "DELETE",
        //         //                                 //     url: url + "destroy",
        //         //                                 //     data: {
        //         //                                 //         IT4_ID: options.data.id,
        //         //                                 //     },

        //         //                                 //     success: function (response) {

        //         //                                 //     },
        //         //                                 // });
        //         //                             },
        //         //                         });

        //         //                     $(container).append(link1, link2);
        //         //                     }
        //         //                 },

        //         //             ],

        //         //             filterRow: { visible: true },
        //         //             searchPanel: { visible: true,width:500, },
        //         //             // editing: {
        //         //                 // mode: "row",
        //         //             //     allowUpdating: true,
        //         //             //     allowDeleting: true,
        //         //             //     allowAdding: true,

        //         //             // },
        //         //             // onRowClick: function(e) {
        //         //                 // Enable editing for the clicked row
        //         //                 // e.component.editRow(e.rowIndex);


        //         //             // },
        //         //             selection: { mode: "single" },
        //         //             onSelectionChanged: function (e) {
        //         //                 e.component
        //         //                     .byKey(e.currentSelectedRowKeys[0])
        //         //                     .done((employee) => {
        //         //                         if (employee) {
        //         //                             // $("#selectedNode").text(
        //         //                             //     `Selected Node: ${employee.St_Guid}`
        //         //                             // );
        //         //                         }
        //         //                     });
        //         //             },

        //         //             rowDragging: {
        //         //                 allowDropInsideItem: true,
        //         //                 allowReordering: true,
        //         //                 onDragChange: function (e) {
        //         //                     var visibleRows = treeList.getVisibleRows(),
        //         //                         sourceNode = treeList.getNodeByKey(
        //         //                             e.itemData.ID
        //         //                         ),
        //         //                         targetNode =
        //         //                             visibleRows[e.toIndex].node;

        //         //                     while (targetNode && targetNode.data) {
        //         //                         if (
        //         //                             targetNode.data.ID ===
        //         //                             sourceNode.data.ID
        //         //                         ) {
        //         //                             e.cancel = true;
        //         //                             break;
        //         //                         }
        //         //                         targetNode = targetNode.parent;
        //         //                     }
        //         //                 },
        //         //                 onReorder: function (e) {
        //         //                     var visibleRows =
        //         //                             e.component.getVisibleRows(),
        //         //                         sourceData = e.itemData,
        //         //                         targetData =
        //         //                             visibleRows[e.toIndex].data;

        //         //                     if (e.dropInsideItem) {
        //         //                         e.itemData.HeadID = targetData.ID;
        //         //                     } else {
        //         //                         var sourceIndex =
        //         //                                 employees.indexOf(sourceData),
        //         //                             targetIndex =
        //         //                                 employees.indexOf(targetData);

        //         //                         if (
        //         //                             sourceData.HeadID !==
        //         //                             targetData.HeadID
        //         //                         ) {
        //         //                             sourceData.HeadID =
        //         //                                 targetData.HeadID;
        //         //                             if (e.toIndex > e.fromIndex) {
        //         //                                 targetIndex++;
        //         //                             }
        //         //                         }
        //         //                         employees.splice(sourceIndex, 1);
        //         //                         employees.splice(
        //         //                             targetIndex,
        //         //                             0,
        //         //                             sourceData
        //         //                         );
        //         //                     }
        //         //                     e.component.refresh();
        //         //                 },
        //         //             },
        //         //             paging: {
        //         //                 enabled: true,
        //         //                 pageSize: 10,
        //         //             },
        //         //         })
        //         //         .dxTreeList("instance");
        //         // });
        //     },
        // });
    });


}

// End CRUD Functions.




// Button Save Data
$(document).ready(function () {
    $("#btnSearch").dxButton({
        stylingMode: "contained",
        text: "Search",
        type: "Default",
        icon: 'search',
        width: 120,
        onClick() {
            VIN_fetch();
            // DevExpress.ui.notify('The Done button was clicked');
        },
    });
});
// End Button Save



// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#Vin_Searching").dxTextBox({
            placeholder: "Enter the VIN",
            inputAttr: { "aria-label": "VIN Searching" },

        });
    });

});
// End Components.



