company_fetch();


function company_cleardata() {
    $('#Com_Guid').dxTextBox("instance").option("value","");
    $('#Com_Name').dxTextBox("instance").option("value","");
}

function company_chechdata() {
    if ($.trim($('.Com_Name').val()).length == 0) {
        error_Com_Name = "Required";
        $('#error_Com_Name').text(error_Com_Name);
    } else {
        error_Com_Name = "";
        $('#error_Com_Name').text(error_Com_Name);
    }


}

function company_insert() {
    var url = 'company';
    var data = {
        'Com_Name': $('#Com_Name').dxTextBox("instance").option("value"),
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
            // alertify.set('notifier', 'position', 'top-center');
            // alertify.success(response.status);
           company_fetch();
           company_cleardata();


        },

    });


}


function company_fetch() {

    $(document).ready(function () {
        var url = "company/";
        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {
                    const dataGrid =$('#companydatagrid').dxDataGrid({
                        dataSource: response.getCompany,
                        keyExpr:'Com_Guid',
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
                            dataField: 'Com_Name',
                            caption:'اسم الشركة',
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

                                    $('#Com_Guid').dxTextBox("instance").option({value:options.data.Com_Guid});
                                    $('#Com_Name').dxTextBox("instance").option({value:options.data.Com_Name});

                                    var displaycard =
                                    document.getElementById("companyaction");
                                    if (displaycard.style.display == "none") {

                                        document.getElementById(
                                            "card_companytitle"
                                        ).innerText = "تعديل بيانات";
                                        displaycard.style.display = "block";
                                        document
                                            .getElementById("card_companytitle")
                                            .scrollIntoView();
                                    } else {

                                        displaycard.style.display = "none";
                                        document.getElementById(
                                            "card_companytitle"
                                        ).innerText = "";
                                        displaycard.style.display = "block";
                                        document.getElementById(
                                            "card_companytitle"
                                        ).innerText = "تعديل بيانات";
                                        document
                                            .getElementById("card_companytitle")
                                            .scrollIntoView();
                                    }
                                             },
                                })

                                var link2 = $("<div>");
                                link2.dxButton({
                                            stylingMode: "contained",
                                            icon: "trash",
                                            onClick() {
                                                var rowData = options.data;

                                                $('#Com_Guid').dxTextBox("instance").option({value:options.data.Com_Guid});
                                                let data={
                                                    Com_Guid:$("#Com_Guid").dxTextBox("instance").option("value"),
                                                }

                                                $.ajaxSetup({
                                                    headers: {
                                                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                                    }
                                                });
                                                $.ajax({
                                                    type: "DELETE",
                                                    url: "company/destroy",
                                                    data: data,
                                                    success: function (response) {

                                                        // alertify.set('notifier', 'position', 'top-right');
                                                        // alertify.success(response.status);
                                                        company_fetch();
                                                        company_cleardata();
                                                        DevExpress.ui.notify({
                                                            message: 'تم تحديث البيانات بنجاح',
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

function company_update() {
    var url = 'company/';
    var data = {
        'Com_Guid': $('#Com_Guid').dxTextBox("instance").option("value"),
        'Com_Name': $('#Com_Name').dxTextBox("instance").option("value"),

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
            // alertify.set('notifier', 'position', 'top-center');
            // alertify.success(response.status);
            company_fetch();


        }
    });
}

//Create Context Menu..
const contextMenuItems = [
    { text: "انشاء شركة جديدة" },

];

$(() => {
    $("#context-menu").dxContextMenu({
        dataSource: contextMenuItems,
        width: 250,
        target: "#companydatagrid",

        onItemClick(e) {
            if (!e.itemData.items) {

                switch (e.itemData.text) {
                    case "انشاء شركة جديدة":
                        var displaycard =
                        document.getElementById("companyaction");
                        if (displaycard.style.display == "none") {

                            document.getElementById(
                                "card_companytitle"
                            ).innerText = "جديد";

                            company_cleardata();

                            displaycard.style.display = "block";
                            document
                                .getElementById("card_companytitle")
                                .scrollIntoView();
                        } else {

                            displaycard.style.display = "none";
                            document.getElementById(
                                "card_companytitle"
                            ).innerText = "";
                            company_cleardata();

                            displaycard.style.display = "block";
                            document.getElementById(
                                "card_companytitle"
                            ).innerText = "جديد";
                            document
                                .getElementById("card_companytitle")
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
        type: "default",
        icon:'close',
        width: 120,
        onClick() {
            var displaycard = document.getElementById("companyaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_companytitle").innerText = "";
                company_cleardata();
                // company_setStCode();
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
            let ComGuid = $('#Com_Guid').dxTextBox("instance").option("value");
            if(ComGuid == null || ComGuid ==""){
                company_insert();
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
                company_update();

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
        $("#Com_Name").dxTextBox({
            placeholder: "ادخل اسم الشركة",
            inputAttr: { "aria-label": "Company Name" },

        });
    });
    $(() => {
        $("#Com_Guid").dxTextBox({
            placeholder: "Guid of the Company",
            inputAttr: { "aria-label": " Company Guid" },

        });
    });


});
//
