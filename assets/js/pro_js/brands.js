brand_fetch();

function brand_cleardata() {
    $('#B_Guid').dxTextBox("instance").option("value","");
    $("#B_Name").dxTextBox("instance").option("value","");

}

function brand_chechdata() {
    if ($.trim($('.b_name').val()).length == 0) {
        error_b_name = "Required";
        $('#error_b_name').text(error_b_name);
    } else {
        error_b_name = "";
        $('#error_b_name').text(error_b_name);
    }



}

function brand_insert() {
    var url = 'brand';
    var data = {
        'B_Name': $("#B_Name").dxTextBox("instance").option("value"),

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
            alertify.set('notifier', 'position', 'top-left');
            alertify.success(response.status);
            brand_fetch();
            brand_cleardata();

        },

    });


}


function brand_fetch() {

    $(document).ready(function () {
        var url = "brand/";
        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {
                    const dataGrid =$('#branddatagrid').dxDataGrid({
                        dataSource: response.getBrands,
                        keyExpr:'B_Guid',
                        rtlEnabled:true,
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
                            dataField: 'B_Name',
                            caption:'اسم الماركة',
                            // groupIndex: 0,
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

                                            $('#B_Guid').dxTextBox("instance").option({value:options.data.B_Guid});
                                            $('#B_Name').dxTextBox("instance").option({value:options.data.B_Name});

                                            var displaycard =
                                            document.getElementById("brandaction");
                                            if (displaycard.style.display == "none") {

                                                document.getElementById(
                                                    "card_brandtitle"
                                                ).innerText = "تحديث";
                                                displaycard.style.display = "block";
                                                document
                                                    .getElementById("card_brandtitle")
                                                    .scrollIntoView();
                                            } else {

                                                displaycard.style.display = "none";
                                                document.getElementById(
                                                    "card_brandtitle"
                                                ).innerText = "";
                                                displaycard.style.display = "block";
                                                document.getElementById(
                                                    "card_brandtitle"
                                                ).innerText = "تحديث";
                                                document
                                                    .getElementById("card_brandtitle")
                                                    .scrollIntoView();iew();
                                            }
                                             },
                                })

                                var link2 = $("<div>");
                                link2.dxButton({
                                            stylingMode: "contained",
                                            icon: "trash",
                                            type:'normal',
                                            onClick() {
                                                var rowData = options.data;

                                                $('#B_Guid').dxTextBox("instance").option({value:options.data.B_Guid});
                                                let data={
                                                    B_Guid:$("#B_Guid").dxTextBox("instance").option("value"),
                                                }

                                                $.ajaxSetup({
                                                    headers: {
                                                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                                    }
                                                });
                                                $.ajax({
                                                    type: "DELETE",
                                                    url: "brand/destroy",
                                                    data: data,
                                                    success: function (response) {

                                                        brand_fetch();
                                                        brand_chechdata();
                                                        DevExpress.ui.notify({
                                                            message: 'تم حذف البيانات بنجاح',
                                                            position: {
                                                              my: 'top left',
                                                              at: 'top left'
                                                            },
                                                            type:'error',
                                                            width: '300',
                                                            height:'150',
                                                            hideAfter: 2000
                                                          });
                                                    }
                                                });
                                            },
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

function brand_update() {
    var url = 'brand/';
    var data = {
        'B_Guid': $("#B_Guid").dxTextBox("instance").option("value"),
        'B_Name': $("#B_Name").dxTextBox("instance").option("value"),

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
            brand_fetch();
        }
    });
}
//Create Context Menu..
const contextMenuItems = [
    { text: "انشاء ماركة جديدة" },

];

$(() => {
    $("#context-menu").dxContextMenu({
        dataSource: contextMenuItems,
        width: 250,
        target: "#branddatagrid",

        onItemClick(e) {
            if (!e.itemData.items) {

                switch (e.itemData.text) {
                    case "انشاء ماركة جديدة":
                        var displaycard =
                        document.getElementById("brandaction");
                        if (displaycard.style.display == "none") {

                            document.getElementById(
                                "card_brandtitle"
                            ).innerText = "انشاء ماركة";

                            brand_cleardata();

                            displaycard.style.display = "block";
                            document
                                .getElementById("card_brandtitle")
                                .scrollIntoView();
                        } else {

                            displaycard.style.display = "none";
                            document.getElementById(
                                "card_brandtitle"
                            ).innerText = "";
                            brand_cleardata();

                            displaycard.style.display = "block";
                            document.getElementById(
                                "card_brandtitle"
                            ).innerText = "انشاء ماركة";
                            document
                                .getElementById("card_brandtitle")
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
        type: "default",
        icon:'close',
        width: 120,
        rtlEnabled:true,
        onClick() {
            var displaycard = document.getElementById("brandaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_brandtitle").innerText = "";
                brand_cleardata();
                // brand_setStCode();
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
            let UiGuid = $('#B_Guid').dxTextBox("instance").option("value");
            if(UiGuid == null || UiGuid ==""){
                brand_insert();
                DevExpress.ui.notify({
                    message: 'تم ادخال البيانات بنجاح',
                    position: {
                      my: 'top left',
                      at: 'top left'
                    },
                    type:'success',
                    width: '300',
                    height:'150',
                    hideAfter: 2000
                  });

            }else{
                brand_update();
                DevExpress.ui.notify({
                    message: 'تم تحديث البيانات بنجاح',
                    position: {
                      my: 'top left',
                      at: 'top left'
                    },
                    type:'warning',
                    width: '300',
                    height:'150',
                    hideAfter: 2000
                  });
            }


        },
    });
});
// End Button Save


// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#B_Name").dxTextBox({
            placeholder: "ادخل اسم الماركة",
            inputAttr: { "aria-label": "Brand Name" },

        });
    });
    $(() => {
        $("#B_Guid").dxTextBox({
            placeholder: "Guid of the Brand",
            inputAttr: { "aria-label": " BGuid" },

        });
    });


});
//
