kinds_fetch();


function kinds_cleardata() {
    $("#K_Guid").dxTextBox("instance").option("value","");
    $("#K_Name").dxTextBox("instance").option("value","");

}

function kinds_chechdata() {
    if ($.trim($('.K_Name').val()).length == 0) {
        error_K_Name = "Required";
        $('#error_K_Name').text(error_K_Name);
    } else {
        error_K_Name = "";
        $('#error_K_Name').text(error_K_Name);
    }


}

function kinds_insert() {
    var url = 'kind';
    var data = {
        'K_Name': $('#K_Name').dxTextBox("instance").option("value"),
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
            kinds_fetch();
            kinds_cleardata();

        },

    });


}


function kinds_fetch() {

    $(document).ready(function () {
        var url = "kind/";
        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {
                    const dataGrid =$('#kindsdatagrid').dxDataGrid({
                        dataSource: response.getKinds,
                        keyExpr:'K_Guid',
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
                        focusedRowEnabled:true,
                        remoteOperations: false,
                        searchPanel: {
                          visible: true,
                          highlightCaseSensitive: true,
                          width:300,
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
                            dataField: 'K_Name',
                            caption:'اسم النوع',
                            // groupIndex: 0,
                          },

                          {
                            caption: "الحدث",

                            width: 200,
                            cellTemplate: function(container, options) {
                                var row = options.row.data;
                                var link1 = $("<div>").css({'background-color':'#7CEECE'});
                                    link1.dxButton({
                                        stylingMode: "contained",
                                        type: "normal",
                                        icon: "edit",
                                        onClick() {
                                            var rowData = options.data;

                                            $('#K_Guid').dxTextBox("instance").option({value:options.data.K_Guid});
                                            $('#K_Name').dxTextBox("instance").option({value:options.data.K_Name});

                                            var displaycard =
                                            document.getElementById("kindsaction");
                                            if (displaycard.style.display == "none") {

                                                document.getElementById(
                                                    "card_kindstitle"
                                                ).innerText = "تعديل البيانات";
                                                displaycard.style.display = "block";
                                                document
                                                    .getElementById("card_kindstitle")
                                                    .scrollIntoView();
                                            } else {

                                                displaycard.style.display = "none";
                                                document.getElementById(
                                                    "card_kindstitle"
                                                ).innerText = "";
                                                displaycard.style.display = "block";
                                                document.getElementById(
                                                    "card_kindstitle"
                                                ).innerText = "تعديل البيانات";
                                                document
                                                    .getElementById("card_kindstitle")
                                                    .scrollIntoView();
                                            }
                                        },
                                    });

                                    var link2 = $("<div>").css({'margin-right':'10px'});
                                    link2.dxButton({
                                        stylingMode: "contained",
                                        icon: "trash",
                                        type:'default',
                                        onClick() {
                                            var rowData = options.data;

                                            $('#K_Guid').dxTextBox("instance").option({value:options.data.K_Guid});
                                            let data={
                                                K_Guid:$("#K_Guid").dxTextBox("instance").option("value"),
                                            }

                                            $.ajaxSetup({
                                                headers: {
                                                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                                }
                                            });
                                            $.ajax({
                                                type: "DELETE",
                                                url: "kind/destroy",
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
                                                    kinds_fetch();


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
                                .addClass("custom-header_Kinds");
                        },

                      });

                    });

            },
        });
    });

}

function kinds_update() {
    var url = 'kind/';
    var data = {
        'K_Guid':  $("#K_Guid").dxTextBox("instance").option("value"),
        'K_Name':  $("#K_Name").dxTextBox("instance").option("value"),

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
            kinds_fetch();



        }
    });
}
//Create Context Menu..
const contextMenuItems = [
    { text: "اضافة نوع جديد" },

];

$(() => {
    $("#context-menu").dxContextMenu({
        dataSource: contextMenuItems,
        width: 250,
        target: "#kindsdatagrid",

        onItemClick(e) {
            if (!e.itemData.items) {

                switch (e.itemData.text) {
                    case "اضافة نوع جديد":
                        var displaycard =
                        document.getElementById("kindsaction");
                        if (displaycard.style.display == "none") {

                            document.getElementById(
                                "card_kindstitle"
                            ).innerText = "اضافة";

                            kinds_cleardata();

                            displaycard.style.display = "block";
                            document
                                .getElementById("card_kindstitle")
                                .scrollIntoView();
                        } else {

                            displaycard.style.display = "none";
                            document.getElementById(
                                "card_kindstitle"
                            ).innerText = "";
                            kinds_cleardata();

                            displaycard.style.display = "block";
                            document.getElementById(
                                "card_kindstitle"
                            ).innerText = "اضافة";
                            document
                                .getElementById("card_kindstitle")
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
        icon:'close',
        width: 120,
        onClick() {
            var displaycard = document.getElementById("kindsaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_kindstitle").innerText = "";
                kinds_cleardata();
                // kinds_setStCode();
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
            let KGuid = $('#K_Guid').dxTextBox("instance").option("value");
            if(KGuid == null || KGuid ==""){
                kinds_insert();

            }else{
                kinds_update();
            }


        },
    });
});
// End Button Save


// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#K_Name").dxTextBox({
            placeholder: "ادخل اسم النوع",
            inputAttr: { "aria-label": "Kind Name" },

        });
    });
    $(() => {
        $("#K_Guid").dxTextBox({
            placeholder: "Guid of the Kind",
            inputAttr: { "aria-label": " Kind Guid" },

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

