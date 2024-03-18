

CustomerSupplier_fetch();
CustomerSupplier_filldata();

function CustomerSupplier_cleardata() {
    $('#Cs_Guid').dxTextBox("instance").option("value","");
    $('#Cs_Name').dxTextBox("instance").option("value","");
    $('#Cs_Mobile').dxTextBox("instance").option("value","");
    $('#Cs_Address').dxTextBox("instance").option("value","");
    $('#Cs_Type').dxSelectBox("instance").option("value","");
    $('#Cs_Notes').dxTextArea("instance").option("value","");
    $('#Cs_State').dxSwitch("instance").option("value",false);
    $('#Cs_GroupSales').dxDropDownBox("instance").option("value",null);
    $('#Cs_Account').dxDropDownBox("instance").option("value",null);

}
//Begin CRUD Function...
function CustomerSupplier_chechdata() {
    if ($.trim($(".Cs_Name").val()).length == 0) {
        error_Cs_Name = "Require";
        $("#error_Cs_Name").text(error_Cs_Name);
    } else {
        error_Cs_Name = "";
        $("#error_Cs_Name").text(error_Cs_Name);
    }
    if ($.trim($(".Cs_State").val()).length == 0) {
        error_Cs_State = "Require";
        $("#error_Cs_State").text(error_Cs_State);
    } else {
        error_Cs_State = "";
        $("#error_Cs_State").text(error_Cs_State);
    }
    if ($.trim($(".Cs_Account").val()).length == 0) {
        error_Cs_Account = "Require";
        $("#error_Cs_Account").text(error_Cs_Account);
    } else {
        error_Cs_Account = "";
        $("#error_Cs_Account").text(error_Cs_Account);
    }
    if ($.trim($(".Cs_SalesGroup").val()).length == 0) {
        error_Cs_SalesGroup = "Require";
        $("#error_Cs_SalesGroup").text(error_Cs_SalesGroup);
    } else {
        error_Cs_SalesGroup = "";
        $("#error_Cs_SalesGroup").text(error_Cs_SalesGroup);
    }
}

function CustomerSupplier_insert() {
    var url = "customersupplier";

    var data = {
        Cs_Name: $("#Cs_Name").dxTextBox("instance").option("value"),
        Cs_SalesGroup: $("#Cs_GroupSales").dxDropDownBox("instance").option("value"),
        Cs_Account: $("#Cs_Account").dxDropDownBox("instance").option("value"),
        Cs_State: (function () {
            if ($("#Cs_State").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Cs_Address: $("#Cs_Address").dxTextBox("instance").option("value"),
        Cs_Mobile: $("#Cs_Mobile").dxTextBox("instance").option("value"),
        Cs_Email: $("#Cs_Email").dxTextBox("instance").option("value"),
        Cs_Type: $("#Cs_Type").dxSelectBox("instance").option("value"),
        Cs_Notes: $("#Cs_Notes").dxTextArea("instance").option("value"),
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
            CustomerSupplier_fetch();
        },
    });
}
function CustomerSupplier_update() {
    var url = "customersupplier/";
    var data = {
        Cs_Guid : $('#Cs_Guid').dxTextBox("instance").option("value"),
        Cs_Name: $("#Cs_Name").dxTextBox("instance").option("value"),
        Cs_SalesGroup: $("#Cs_GroupSales").dxDropDownBox("instance").option("value"),
        Cs_Account: $("#Cs_Account").dxDropDownBox("instance").option("value"),
        Cs_State: (function () {
            if ($("#Cs_State").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Cs_Address: $("#Cs_Address").dxTextBox("instance").option("value"),
        Cs_Mobile: $("#Cs_Mobile").dxTextBox("instance").option("value"),
        Cs_Email: $("#Cs_Email").dxTextBox("instance").option("value"),
        Cs_Type: $("#Cs_Type").dxSelectBox("instance").option("value"),
        Cs_Notes: $("#Cs_Notes").dxTextArea("instance").option("value"),
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
            CustomerSupplier_fetch();
        },
    });
}

function CustomerSupplier_filldata() {
    var url = "CustomerSuppliersfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {

                $(() => {
                    let dataGrid;
                    $("#Cs_Account").dxDropDownBox({
                        value: null,
                        valueExpr: "Guid",
                        deferRendering: false,
                        placeholder: "ادخل حساب الاب",
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
                                        caption:"اسم الحساب"
                                    },
                                    {
                                        dataField:"Ac_Code_Mask",
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
                    $("#Cs_GroupSales").dxDropDownBox({
                        value: null,
                        valueExpr: "Gs_Guid",
                        deferRendering: false,
                        placeholder: "ادخل مجموعة البيع",
                        inputAttr: { "aria-label": "Sales_Group" },
                        displayExpr(item) {
                            return item && `${item.Gs_Name}   -${item.Gs_SalesRatio} % `;
                        },
                        showClearButton: true,
                        dataSource: response.getSalesGroup,//makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField:"Gs_Name",
                                        caption:"المجموعة"

                                    },
                                    {
                                        dataField:"Gs_SalesRatio",
                                        caption:"النسبة"
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
                                        hasSelection ? keys[0].Gs_Guid : null

                                    );
                                },


                            });

                            dataGrid = $dataGrid.dxDataGrid("instance");

                            e.component.on("valueChanged", (args) => {
                                dataGrid.selectRows(args.value, true);
                            $('#Cs_GroupSales').dxTextBox("instance").option("value",code);


                                e.component.close();
                            });

                            return $dataGrid;
                        },


                    });
                });
                $(()=>{
                    $("#Cs_Type").dxSelectBox({
                        dataSource: response.getType,
                        valueExpr: "Name",
                        displayExpr: "Name",
                        placeholder:"اختر نوع الحساب"

                    });
                })


            },
        });
    });
}

function CustomerSupplier_fetch() {
    $(document).ready(function () {
        var url = "customersupplier/";
        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                // console.log(response.CustomerSupplier);
                $(function () {
                    const dataGrid =$('#gridCustomerSupplier').dxDataGrid({
                        dataSource: response.CustomerSupplier,
                        keyExpr:'Cs_Guid',
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
                        focusedRowEnabled:true,
                        showBorders: true,
                        columns: [
                          {
                            dataField: 'Cs_Name',
                            caption:'الاسم',
                            cellTemplate: function(container, options) {
                                var cellValue = options.value;
                                var fontWeight = "bold"; // Set the desired font weight
                                let fontSize = "18px";
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
                            // groupIndex: 0,
                          },
                          {
                            dataField: 'Cs_State',
                            caption: 'الحالة',
                            cellTemplate: function(container, options) {
                                var cellValue = options.value;
                                var fontWeight = "bold"; // Set the desired font weight
                                let fontSize = "18px";
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
                            dataField: 'Cs_GroupSalesName',
                            caption: 'المجموعة',
                            dataType: 'number',
                            format: 'percent',
                            alignment: 'right',
                            cellTemplate: function(container, options) {
                                var cellValue = options.value;
                                var fontWeight = "bold"; // Set the desired font weight
                                let fontSize = "18px";
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
                            dataField: 'Cs_ParentAccount',
                            caption: 'الحساب الاب',
                            cellTemplate: function(container, options) {
                                var cellValue = options.value;
                                var fontWeight = "bold"; // Set the desired font weight
                                let fontSize = "18px";
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
                            dataField: 'Cs_Type',
                            caption: 'نوع الحساب',
                            cellTemplate: function(container, options) {
                                var cellValue = options.value;
                                var fontWeight = "bold"; // Set the desired font weight
                                let fontSize = "18px";
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
                            dataField: 'Cs_Debit',
                            caption: 'مدين',
                            cellTemplate: function(container, options) {
                                var cellValue = options.value;
                                var fontWeight = "bold"; // Set the desired font weight
                                let fontSize = "18px";
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
                            dataField: 'Cs_Credit',
                            caption: 'دائن',
                            cellTemplate: function(container, options) {
                                var cellValue = options.value;
                                var fontWeight = "bold"; // Set the desired font weight
                                let fontSize = "18px";
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
                                var link1 = $("<div>").css({'background-color':'#7CEECE'});
                                link1.dxButton({
                                    stylingMode: "contained",
                                    type: "normal",
                                    icon: "edit",
                                    onClick() {
                                        var rowData = options.data;

                                        $('#Cs_Guid').dxTextBox("instance").option({value:options.data.Cs_Guid});
                                        $('#Cs_Name').dxTextBox("instance").option({value:options.data.Cs_Name});
                                        $('#Cs_Address').dxTextBox("instance").option({value:options.data.Cs_Address});
                                        $('#Cs_Email').dxTextBox("instance").option({value:options.data.Cs_Email});
                                        $('#Cs_Mobile').dxTextBox("instance").option({value:options.data.Cs_Mobile});
                                        $('#Cs_Type').dxSelectBox("instance").option({value:options.data.Cs_Type});
                                        $('#Cs_Notes').dxTextArea("instance").option({value:options.data.Cs_Notes});
                                        $('#Cs_GroupSales').dxDropDownBox("instance").option("value",options.data.Cs_GroupSales);
                                        $('#Cs_Account').dxDropDownBox("instance").option("value",options.data.Cs_Account);


                                        if(options.data.Cs_State=='مفعل'){
                                            $('#Cs_State').dxSwitch("instance").option({value:true});
                                        }else{
                                            $('#Cs_State').dxSwitch("instance").option({value:false});
                                        }



                                        var displaycard =
                                        document.getElementById("CustomerSupplieraction");
                                        if (displaycard.style.display == "none") {

                                            document.getElementById(
                                                "card_CustomerSuppliertitle"
                                            ).innerText = "تعديل البيانات";
                                            displaycard.style.display = "block";
                                            document
                                                .getElementById("card_CustomerSuppliertitle")
                                                .scrollIntoView();
                                        } else {

                                            displaycard.style.display = "none";
                                            document.getElementById(
                                                "card_CustomerSuppliertitle"
                                            ).innerText = "";
                                            displaycard.style.display = "block";
                                            document.getElementById(
                                                "card_CustomerSuppliertitle"
                                            ).innerText = "تعديل البيانات";
                                            document
                                                .getElementById("card_CustomerSuppliertitle")
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
                                            url: "customersupplier/destroy",
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
                                                CustomerSupplier_fetch();

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
                                .addClass("custom-header");
                        },
                      });

                    });
            },
        });
    });


}

// End CRUD Functions.

// Begin Context Menu items
const contextMenuItems = [
    { text: "انشاء حساب جديد" },
];

$(() => {
    $("#context-menu").dxContextMenu({
        dataSource: contextMenuItems,
        width: 250,
        target: ".gridCustomerSupplier",

        onItemClick(e) {
            if (!e.itemData.items) {

                switch (e.itemData.text) {
                    case "انشاء حساب جديد":
                        var displaycard =
                        document.getElementById("CustomerSupplieraction");
                        if (displaycard.style.display == "none") {
                            $('#Cs_GroupSales').dxDropDownBox("instance").option({
                                visible:true,
                            })
                            document.getElementById(
                                "card_CustomerSuppliertitle"
                            ).innerText = "اضافة حساب";

                            CustomerSupplier_cleardata();
                            // CustomerSupplier_setStCode();
                            displaycard.style.display = "block";
                            document
                                .getElementById("card_CustomerSuppliertitle")
                                .scrollIntoView();
                        } else {
                            $('#Cs_GroupSales').dxDropDownBox("instance").option({
                                visible:true,
                            })
                            displaycard.style.display = "none";
                            document.getElementById(
                                "card_CustomerSuppliertitle"
                            ).innerText = "";
                            CustomerSupplier_cleardata();
                            // CustomerSupplier_setStCode();
                            displaycard.style.display = "block";
                            document.getElementById(
                                "card_CustomerSuppliertitle"
                            ).innerText = "اضافة حساب";
                            document
                                .getElementById("card_CustomerSuppliertitle")
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
        icon:'close',
        type: "danger",
        width: 120,
        onClick() {
            var displaycard = document.getElementById("CustomerSupplieraction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_CustomerSuppliertitle").innerText = "";
                CustomerSupplier_cleardata();
                // CustomerSupplier_setStCode();
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
            let StoreID = $('#Cs_Guid').dxTextBox("instance").option("value");
            if(StoreID == null || StoreID ==""){
                CustomerSupplier_insert();
            }else{
                CustomerSupplier_update();
            }


        },
    });
});
// End Button Save


// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#Cs_Name").dxTextBox({
            placeholder: "ادخل اسم الحساب",
            inputAttr: { "aria-label": "Store_Name" },

        });
    });
    $(() => {
        $("#Cs_Guid").dxTextBox({
            placeholder: "Guid of Account",
            inputAttr: { "aria-label": "StoreGuid" },

        });
    });
    $(() => {
        $("#Cs_Address").dxTextBox({
            placeholder: "العنوان",
            inputAttr: { "aria-label": "Address" },
        });
    });
    $(() => {
        $("#Cs_Mobile").dxTextBox({
            placeholder: "رقم الموبايل",
            inputAttr: { "aria-label": "Mobile" },
        });
    });
    $(() => {
        $("#Cs_Email").dxTextBox({
            placeholder: "البريد الالكتروني",
            inputAttr: { "aria-label": "Email" },
        });
    });

    $(() => {
        const searchBox = $("#Cs_Type")
            .dxSelectBox({
                // dataSource: products,
                displayExpr: "Name",
                inputAttr: { "aria-label": "Sales_Group" },
                valueExpr: "ID",
                searchEnabled: true,
                onValueChanged: function(e) {
                    // Code to execute when the selection changes
                    var selectedValue = e.value;
                    if(e.value === "Supplier"){
                        $('#Cs_GroupSales').dxDropDownBox("instance").option("value",null);
                        $('#Cs_GroupSales-container').attr("hidden",true);

                    }else if(e.value ==="Customer"){
                        $('#Cs_GroupSales').dxDropDownBox("instance").option("value",null);
                        $('#Cs_GroupSales-container').attr("hidden",false);
                    }

                    // You can perform other actions based on the selected value
                    // For example, update other parts of the UI or make an API call
                }
            })
            .dxSelectBox("instance");
    });

    $(() => {
        $("#Cs_State").dxSwitch({});
    });

    $(() => {
        $("#Cs_Notes").dxTextArea({
            // ...
            minHeight: 50,
            maxHeight: 300,
            autoResizeEnabled: true,
            // value: longText,
            maxLength: 500,
            label: "ملاحظات",
        });
    });
});
// End Components.


