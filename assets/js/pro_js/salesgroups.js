
SalesGroups_fetch();
// SalesGroups_filldata();

function SalesGroups_cleardata() {
    $('#Gs_Guid').dxTextBox("instance").option("value","");
    $('#Gs_Name').dxTextBox("instance").option("value","");
    $('#Gs_Ratio').dxTextBox("instance").option("value","");
    $('#Gs_State').dxSwitch("instance").option("value",false);


}
//Begin CRUD Function...
function SalesGroups_chechdata() {
    if ($.trim($(".Gs_Name").val()).length == 0) {
        error_Gs_Name = "Require";
        $("#error_Gs_Name").text(error_Gs_Name);
    } else {
        error_Gs_Name = "";
        $("#error_Gs_Name").text(error_Gs_Name);
    }
    if ($.trim($(".Gs_State").val()).length == 0) {
        error_Gs_State = "Require";
        $("#error_Gs_State").text(error_Gs_State);
    } else {
        error_Gs_State = "";
        $("#error_Gs_State").text(error_Gs_State);
    }
    if ($.trim($(".Gs_Account").val()).length == 0) {
        error_Gs_Account = "Require";
        $("#error_Gs_Account").text(error_Gs_Account);
    } else {
        error_Gs_Account = "";
        $("#error_Gs_Account").text(error_Gs_Account);
    }
    if ($.trim($(".Gs_Code").val()).length == 0) {
        error_Gs_Code = "Require";
        $("#error_Gs_Code").text(error_Gs_Code);
    } else {
        error_Gs_Code = "";
        $("#error_Gs_Code").text(error_Gs_Code);
    }
}

function SalesGroups_insert() {
    var url = "salesgroups";

    var data = {
        Gs_Name: $("#Gs_Name").dxTextBox("instance").option("value"),
        Gs_Ratio: $("#Gs_Ratio").dxTextBox("instance").option("value"),
        Gs_State: (function () {
            if ($("#Gs_State").dxSwitch("instance").option("value")) {
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
            alertify.set("notifier", "position", "top-right");
            alertify.success(response.status);
            DevExpress.ui.notify('Data Has Been Inserted Successfully ....');
            SalesGroups_cleardata();
            SalesGroups_fetch();
        },
    });
}
function SalesGroups_update() {
    var url = "salesgroups/";
    var data = {
        Gs_Guid : $('#Gs_Guid').dxTextBox("instance").option("value"),
        Gs_Name: $("#Gs_Name").dxTextBox("instance").option("value"),
        Gs_Ratio: $("#Gs_Ratio").dxTextBox("instance").option("value"),
        Gs_State: (function () {
            if ($("#Gs_State").dxSwitch("instance").option("value")) {
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
        method: "PUT",
        url: url + "update",
        data: data,
        success: function (response) {
            alertify.set("notifier", "position", "top-right");
            alertify.success(response.status);
            DevExpress.ui.notify('Data Has Been Updated...');
            SalesGroups_fetch();
        },
    });
}


function SalesGroups_fetch() {
    $(document).ready(function () {
        var url = "salesgroups/";
        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {
                    const dataGrid =$('#salegroupdatagrid').dxDataGrid({
                        dataSource: response.getSalesGroup,
                        keyExpr:'Gs_Guid',
                        paging: {
                            enabled: true,
                            pageSize: 5, // Number of records per page
                            pageIndex: 0 // Initially show the first page
                        },
                        pager: {
                          showPageSizeSelector: true,
                          showInfo:true,
                          allowedPageSizes: [10, 25, 50, 100, 'all'],
                          showNavigationButtons: true,
                        },
                        remoteOperations: false,
                        searchPanel: {
                          visible: true,
                          highlightCaseSensitive: true,
                        },
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
                            dataField: 'Gs_Name',
                            caption:'Group Name',
                            // groupIndex: 0,
                          },
                          {
                            dataField: 'Gs_State',
                            caption: 'State',
                            cellTemplate: function(container, options) {
                                var cellValue = options.data.Gs_State;

                                $("<div>")
                                  .text(cellValue)
                                  .appendTo(container)
                                  .addClass(cellValue === "Inactive" ? "inactive-cell" : "");
                              }

                          },
                          {
                            dataField: 'Gs_SalesRatio',
                            caption: 'Percent %',
                            dataType: 'number',
                            format: 'percent',
                            alignment: 'center',
                            allowGrouping: false,
                            // cellTemplate: discountCellTemplate,
                            cssClass: 'bullet',
                          },
                          {
                            caption: "Actions",

                            width: 200,
                            cellTemplate: function(container, options) {
                                var row = options.row.data;

                                var link1 = $("<a>")
                                .addClass("custom-link")
                                .text("Edit")
                                .on("click", function(e) {
                                    e.preventDefault();
                                    // Link 1 click action
                                    var rowData = options.data;

                                    $('#Gs_Guid').dxTextBox("instance").option({value:options.data.Gs_Guid});
                                    $('#Gs_Name').dxTextBox("instance").option({value:options.data.Gs_Name});
                                    $('#Gs_Ratio').dxTextBox("instance").option({value:options.data.Gs_SalesRatio});

                                    if(options.data.Gs_State=='Active'){
                                        $('#Gs_State').dxSwitch("instance").option({value:true});
                                    }else{
                                        $('#Gs_State').dxSwitch("instance").option({value:false});
                                    }



                                    var displaycard =
                                    document.getElementById("SalesGroupsaction");
                                    if (displaycard.style.display == "none") {

                                        document.getElementById(
                                            "card_SalesGroupstitle"
                                        ).innerText = "Edit Data";
                                        displaycard.style.display = "block";
                                        document
                                            .getElementById("card_SalesGroupstitle")
                                            .scrollIntoView();
                                    } else {

                                        displaycard.style.display = "none";
                                        document.getElementById(
                                            "card_SalesGroupstitle"
                                        ).innerText = "";
                                        displaycard.style.display = "block";
                                        document.getElementById(
                                            "card_SalesGroupstitle"
                                        ).innerText = "Edit Data";
                                        document
                                            .getElementById("card_SalesGroupstitle")
                                            .scrollIntoView();
                                    }
                                });

                            var link2 = $("<a>")
                                .addClass("custom-link")
                                .text("Delete")
                                .on("click", function(e) {
                                    e.preventDefault();

                                });

                            $(container).append(link1, link2);
                            }
                        },

                        ],

                      });

                    });

            },
        });
    });


}

// End CRUD Functions.

// Begin Context Menu items
const contextMenuItems = [
    { text: "Create New Group" },

];

$(() => {
    $("#context-menu").dxContextMenu({
        dataSource: contextMenuItems,
        width: 250,
        target: "#salegroupdatagrid",

        onItemClick(e) {
            if (!e.itemData.items) {

                switch (e.itemData.text) {
                    case "Create New Group":
                        var displaycard =
                        document.getElementById("SalesGroupsaction");
                        if (displaycard.style.display == "none") {

                            document.getElementById(
                                "card_SalesGroupstitle"
                            ).innerText = "Add New Saling Group ";

                            SalesGroups_cleardata();
                            // SalesGroups_setStCode();
                            displaycard.style.display = "block";
                            document
                                .getElementById("card_SalesGroupstitle")
                                .scrollIntoView();
                        } else {

                            displaycard.style.display = "none";
                            document.getElementById(
                                "card_SalesGroupstitle"
                            ).innerText = "";
                            SalesGroups_cleardata();
                            // SalesGroups_setStCode();
                            displaycard.style.display = "block";
                            document.getElementById(
                                "card_SalesGroupstitle"
                            ).innerText = "Add New Saling Group ";
                            document
                                .getElementById("card_SalesGroupstitle")
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
        text: "Close",
        type: "danger",
        width: 120,
        onClick() {
            var displaycard = document.getElementById("SalesGroupsaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_SalesGroupstitle").innerText = "";
                SalesGroups_cleardata();
                // SalesGroups_setStCode();
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
        text: "Save",
        type: "Default",
        icon: 'check',
        width: 120,
        onClick() {
            let StoreID = $('#Gs_Guid').dxTextBox("instance").option("value");
            if(StoreID == null || StoreID ==""){
                SalesGroups_insert();
            }else{
                SalesGroups_update();
            }

            DevExpress.ui.notify('The Done button was clicked');
        },
    });
});
// End Button Save


// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#Gs_Name").dxTextBox({
            placeholder: "Enter the Name of Group",
            inputAttr: { "aria-label": "Name" },

        });
    });
    $(() => {
        $("#Gs_Guid").dxTextBox({
            placeholder: "Guid of the Group",
            inputAttr: { "aria-label": "GsGuid" },

        });
    });
    $(() => {
        $("#Gs_Ratio").dxTextBox({
            placeholder: "The Ratio of Saling",
            inputAttr: { "aria-label": "TheRatio" },
        });
    });


    $(() => {
        $("#Gs_State").dxSwitch({});
    });

});
// End Components.



