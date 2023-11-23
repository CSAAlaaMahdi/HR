models_fetch();


function  models_cleardata() {
    $("#M_Guid").dxTextBox("instance").option("value","");
    $("#M_Name").dxTextBox("instance").option("value","");

}

function models_chechdata() {
    if ($.trim($('.Mo_Name').val()).length == 0) {
        error_Mo_Name = "Required";
        $('#error_Mo_Name').text(error_Mo_Name);
    } else {
        error_Mo_Name = "";
        $('#error_Mo_Name').text(error_Mo_Name);
    }


}

function models_insert() {
    var url = 'modell';
    var data = {
        'M_Name': $('#M_Name').dxTextBox("instance").option("value"),
    };
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    $.ajax({
        type: "POST",
        url: url ,
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
            models_fetch();
            models_cleardata();


        },

    });


}

function models_fetch() {

    $(document).ready(function () {
        var url = "modell/";
        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {
                    const dataGrid =$('#modelsdatagrid').dxDataGrid({
                        dataSource: response.getModels,
                        keyExpr:'M_Guid',
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
                          width:300,
                        },
                        focusedRowEnabled:true,
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
                            dataField: 'M_Name',
                            caption:'اسم الطراز',
                            // groupIndex: 0,
                          },

                          {
                            caption: "الحدث",

                            width: 200,
                            cellTemplate: function(container, options) {
                                var row = options.row.data;
                                var link1 = $("<div>");
                                link1.dxButton({
                                    stylingMode: "contained",
                                    type: "normal",
                                    icon: "edit",
                                    onClick() {
                                        var rowData = options.data;

                                        $('#M_Guid').dxTextBox("instance").option({value:options.data.M_Guid});
                                        $('#M_Name').dxTextBox("instance").option({value:options.data.M_Name});

                                        var displaycard =
                                        document.getElementById("modelsaction");
                                        if (displaycard.style.display == "none") {

                                            document.getElementById(
                                                "card_modelstitle"
                                            ).innerText = "تحديث البيانات";
                                            displaycard.style.display = "block";
                                            document
                                                .getElementById("card_modelstitle")
                                                .scrollIntoView();
                                        } else {

                                            displaycard.style.display = "none";
                                            document.getElementById(
                                                "card_modelstitle"
                                            ).innerText = "";
                                            displaycard.style.display = "block";
                                            document.getElementById(
                                                "card_modelstitle"
                                            ).innerText = "تحديث البيانات";
                                            document
                                                .getElementById("card_modelstitle")
                                                .scrollIntoView();
                                        }
                                    },
                                });

                                var link2 = $("<div>");
                                link2.dxButton({
                                    stylingMode: "contained",
                                    icon: "trash",
                                    type:'normal',
                                    onClick() {
                                        var rowData = options.data;

                                        $('#M_Guid').dxTextBox("instance").option({value:options.data.M_Guid});
                                    let data={
                                        M_Guid:$("#M_Guid").dxTextBox("instance").option("value"),
                                    }

                                    $.ajaxSetup({
                                        headers: {
                                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                        }
                                    });
                                    $.ajax({
                                        type: "DELETE",
                                        url: "modell/destroy",
                                        data: data,
                                        success: function (response) {
                                            DevExpress.ui.notify({
                                                message: response.status,
                                                position: {
                                                  my: 'top left',
                                                  at: 'top left'
                                                },
                                                type:'error',
                                                width: '300',
                                                height:'150',
                                                hideAfter: 2000
                                              });
                                            models_fetch();


                                        }
                                    });
                                    },
                                });


                            $(container).append(link1, link2);
                            }
                        },

                        ],
                        onContentReady: function (e) {
                            // Add custom class to the header panel
                            e.element
                                .find(".dx-datagrid-headers")
                                .addClass("custom-header_Models");
                        },
                      });

                    });

            },
        });
    });

}

function models_update() {
    var url = 'modell/';
    var data = {
        'M_Guid': $('#M_Guid').dxTextBox("instance").option("value"),
        'M_Name': $('#M_Name').dxTextBox("instance").option("value"),

    };
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        method: "PUT",
        url: url + 'update',
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
            models_fetch();

        }
    });
}

//Create Context Menu..
const contextMenuItems = [
    { text: "اضافة طراز جديد" },

];

$(() => {
    $("#context-menu").dxContextMenu({
        dataSource: contextMenuItems,
        width: 250,
        target: "#modelsdatagrid",

        onItemClick(e) {
            if (!e.itemData.items) {

                switch (e.itemData.text) {
                    case "اضافة طراز جديد":
                        var displaycard =
                        document.getElementById("modelsaction");
                        if (displaycard.style.display == "none") {

                            document.getElementById(
                                "card_modelstitle"
                            ).innerText = "اضافة جديد";

                            models_cleardata();

                            displaycard.style.display = "block";
                            document
                                .getElementById("card_modelstitle")
                                .scrollIntoView();
                        } else {

                            displaycard.style.display = "none";
                            document.getElementById(
                                "card_modelstitle"
                            ).innerText = "";
                            models_cleardata();

                            displaycard.style.display = "block";
                            document.getElementById(
                                "card_modelstitle"
                            ).innerText = "اضافة جديد";
                            document
                                .getElementById("card_modelstitle")
                                .scrollIntoView();
                        }
                    break;

                    default:
                        break;
                }

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
        icon:'close',
        width: 120,
        onClick() {
            var displaycard = document.getElementById("modelsaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_modelstitle").innerText = "";
                models_cleardata();
                // models_setStCode();
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
            let KGuid = $('#M_Guid').dxTextBox("instance").option("value");
            if(KGuid == null || KGuid ==""){
                models_insert();

            }else{
                models_update();
            }


        },
    });
});
// End Button Save


// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#M_Name").dxTextBox({
            placeholder: "ادخل اسم الطراز",
            inputAttr: { "aria-label": "Model Name" },

        });
    });
    $(() => {
        $("#M_Guid").dxTextBox({
            placeholder: "Guid of the Model",
            inputAttr: { "aria-label": " Model Guid" },

        });
    });


});
//


$((message) => {
        $("#notificationContainer").dxToast({
          message: message,
          position: {
            my: "top right",
            at: "top right",
            of: window
          },
          width:300,
          height:100,
          animation: {
            show: { type: "fade", duration: 400, from: 0, to: 1 },
            hide: { type: "fade", duration: 400, from: 1, to: 0 }
          },
          closeOnClick: true,
          displayTime: 4000 // Adjust the display time as per your preference

        });
});

