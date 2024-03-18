currency_fetch();


function currency_cleardata() {
    $("#Cur_Guid").dxTextBox("instance").option("value","");
    $("#Cur_Name").dxTextBox("instance").option("value","");
    $("#Cur_IsMain").dxSwitch("instance").option("value",false);

    $("#Cur_Cost").dxTextBox("instance").option("value","");
}

function currency_chechdata() {
    if ($.trim($('.Cur_Name').val()).length == 0) {
        error_Cur_Name = "Required";
        $('#error_Cur_Name').text(error_Cur_Name);
    } else {
        error_Cur_Name = "";
        $('#error_Cur_Name').text(error_Cur_Name);
    }
    if ($.trim($('.Cur_Cost').val()).length == 0) {
        error_Cur_Cost = "Required";
        $('#error_Cur_Cost').text(error_Cur_Cost);
    } else {
        error_Cur_Cost = "";
        $('#error_Cur_Cost').text(error_Cur_Cost);
    }


}

function currency_insert() {
    var url = 'currency';
    var data = {
        'Cur_Name': $('#Cur_Name').dxTextBox("instance").option("value"),
        'Cur_Cost': $('#Cur_Cost').dxTextBox("instance").option("value"),
        'Cur_IsMain': (function (){
            if($("#Cur_IsMain").dxSwitch("instance").option("value")){
                return 1;
            }else return 0
        }),
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
            currency_fetch();
            currency_cleardata();


        },

    });


}


function currency_fetch() {

    $(document).ready(function () {
        var url = "currency/";
        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {
                    const dataGrid =$('#currencydatagrid').dxDataGrid({
                        dataSource: response.getCurrency,
                        keyExpr:'Cur_Guid',
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
                        focusedRowEnabled:true,
                        allowColumnReordering: true,
                        rowAlternationEnabled: true,
                        showBorders: true,
                        columns: [
                          {
                            dataField: 'Cur_Name',
                            caption:'اسم العملة',
                            cellTemplate: function(container, options) {
                                var cellValue = options.value;
                                var fontWeight = "450"; // Set the desired font weight
                                let fontSize = "16px";
                                let fontColor ="#2F4F4F";

                                $("<div>")
                                    .css({
                                        "font-size" :fontSize,
                                        "font-weight" : fontWeight,
                                        "color":fontColor,
                                    })
                                    .text(cellValue)
                                    .appendTo(container);
                            }
                            // groupIndex: 0,
                          },
                          {
                            dataField: 'Cur_Cost',
                            caption:'القيمة',
                            format:'number',
                            alignment:'right',
                            cellTemplate: function(container, options) {
                                var cellValue = options.value;
                                var fontWeight = "450"; // Set the desired font weight
                                let fontSize = "16px";
                                let fontColor ="#283741";
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
                                        "color":fontColor,
                                    })
                                    .text(formattedValue)
                                    .appendTo(container);
                            }
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

                                        $('#Cur_Guid').dxTextBox("instance").option({value:options.data.Cur_Guid});
                                            $('#Cur_Name').dxTextBox("instance").option({value:options.data.Cur_Name});
                                            $('#Cur_Cost').dxTextBox("instance").option({value:options.data.Cur_Cost});
                                            if(rowData.Cur_IsMain == true){
                                                $('#Cur_IsMain').dxSwitch("instance").option({value:true});
                                            }else{
                                                $('#Cur_IsMain').dxSwitch("instance").option({value:false});
                                            }

                                            var displaycard =
                                            document.getElementById("currencyaction");
                                            if (displaycard.style.display == "none") {

                                                document.getElementById(
                                                    "card_currencytitle"
                                                ).innerText = "تعديل بيانات";
                                                displaycard.style.display = "block";
                                                document
                                                    .getElementById("card_currencytitle")
                                                    .scrollIntoView();
                                            } else {

                                                displaycard.style.display = "none";
                                                document.getElementById(
                                                    "card_currencytitle"
                                                ).innerText = "";
                                                displaycard.style.display = "block";
                                                document.getElementById(
                                                    "card_currencytitle"
                                                ).innerText = "تعديل بيانات";
                                                document
                                                    .getElementById("card_currencytitle")
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

                                        $('#Cur_Guid').dxTextBox("instance").option({value:options.data.Cur_Guid});
                                        let data={
                                            Cur_Guid:$("#Cur_Guid").dxTextBox("instance").option("value"),
                                        }

                                        $.ajaxSetup({
                                            headers: {
                                                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                                            }
                                        });
                                        $.ajax({
                                            type: "DELETE",
                                            url: "currency/destroy",
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
                                                currency_fetch();

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
                                .addClass("custom-header_Currencies");
                        },
                      });

                    });

            },
        });
    });

}

function currency_update() {
    var url = 'currency/';
    var data = {
        'Cur_Guid': $('#Cur_Guid').dxTextBox("instance").option("value"),
        'Cur_Name': $('#Cur_Name').dxTextBox("instance").option("value"),
        'Cur_Cost': $('#Cur_Cost').dxTextBox("instance").option("value"),
        'Cur_IsMain': (function (){
            if($("#Cur_IsMain").dxSwitch("instance").option("value")){
                return 1;
            }else return 0
        })(),

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
            currency_fetch();

        }
    });
}
//Create Context Menu..
const contextMenuItems = [
    { text: "اضافة عملة جديدة" },

];

$(() => {
    $("#context-menu").dxContextMenu({
        dataSource: contextMenuItems,
        width: 250,
        target: "#currencydatagrid",

        onItemClick(e) {
            if (!e.itemData.items) {

                switch (e.itemData.text) {
                    case "اضافة عملة جديدة":
                        var displaycard =
                        document.getElementById("currencyaction");
                        if (displaycard.style.display == "none") {

                            document.getElementById(
                                "card_currencytitle"
                            ).innerText = "اضافة عملة";

                            currency_cleardata();

                            displaycard.style.display = "block";
                            document
                                .getElementById("card_currencytitle")
                                .scrollIntoView();
                        } else {

                            displaycard.style.display = "none";
                            document.getElementById(
                                "card_currencytitle"
                            ).innerText = "";
                            currency_cleardata();

                            displaycard.style.display = "block";
                            document.getElementById(
                                "card_currencytitle"
                            ).innerText = "اضافة عملة";
                            document
                                .getElementById("card_currencytitle")
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
            var displaycard = document.getElementById("currencyaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_currencytitle").innerText = "";
                currency_cleardata();
                // currency_setStCode();
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
            let CurGuid = $('#Cur_Guid').dxTextBox("instance").option("value");
            if(CurGuid == null || CurGuid ==""){
                currency_insert();
            }else{
                currency_update();
            }


        },
    });
});
// End Button Save


// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#Cur_Name").dxTextBox({
            placeholder: "ادخل اسم العملة",
            inputAttr: { "aria-label": "Currency Name" },

        });
    });
    $(() => {
        $("#Cur_Guid").dxTextBox({
            placeholder: "Guid of the Currency",
            inputAttr: { "aria-label": " Currency Guid" },

        });
    });
    $(() => {
        $("#Cur_Cost").dxTextBox({
            placeholder: "ادخل قيمة العملة",
            inputAttr: { "aria-label": " Cost" },

        });
    });
    $(() => {
        $("#Cur_IsMain").dxSwitch({});
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
