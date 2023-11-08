

Bonds_fetch();
Bonds_filldata();


function Bonds_cleardata() {

    $('#B_Guid').dxTextBox("instance").option("value","");
    $('#B_Datex').dxDateBox("instance").option("Date","");
    $('#B_Bond_Type').dxDropDownBox("instance").option("value","");
    $('#B_Account').dxDropDownBox("instance").option("value","");
    $('#B_Currency_Guid').dxDropDownBox("instance").option("value","");
    $('#B_Currency_Equal').dxTextBox("instance").option("value","");
    $('#B_Note').dxTextArea("instance").option("value","");
    $('#B_Doc_Number').dxTextBox("instance").option("value","");
    $('#B_Bond_Number').dxTextBox("instance").option("value","");
    $('#B_st_Guid').dxTextBox("instance").option("value","");
    $('#B_IsBill').dxSwitch("instance").option("value",false);
    $('#B_IsPaidBill').dxSwitch("instance").option("value",false);
    $('#B_IsLock').dxSwitch("instance").option("value",false);
    $('#B_IsAccept').dxSwitch("instance").option("value",false);
    $('#gridContainer').dxDataGrid({
            'dataSource':"",
    });


}
//Begin CRUD Function...
function Bonds_chechdata() {

}

function Bonds_UpdateOrInsert() {


    let stateURL = $.trim($("#card_Bondstitle").text());
    let url = '';
    switch (stateURL) {
        case 'سند قبض':
                url = 'Bonds'
            break;
        case 'سند صرف':
                url = 'BondsPayment'
        break;
        case 'سند قيد':
                url = 'BondsDoc'
        break;
        case 'قيد افتتاحي':
            url = 'BondsStarter'
        break;
        case 'قيد الفواتير':
            url = 'BondsBills'
         break;

        default:
            break;
    }

    var selectedDate = $('#B_Datex').dxDateBox("instance").option("value");
    var formattedDate = new Intl.DateTimeFormat("en-US", { year: 'numeric', month: '2-digit', day: '2-digit' }).format(selectedDate);
    let BondBody= $('#gridContainer').dxDataGrid("instance").option("dataSource");

    let data = {
        B_Guid: $('#B_Guid').dxTextBox("instance").option("value"),
        B_Bond_Number: $('#B_Bond_Number').dxTextBox("instance").option("value"),
        B_Datex: formattedDate,
        B_Account: $('#B_Account').dxDropDownBox("instance").option("value"),
        B_Currency_Guid: $('#B_Currency_Guid').dxDropDownBox("instance").option("value"),
        B_Currency_Equal: $('#B_Currency_Equal').dxTextBox("instance").option("value"),
        B_Note: $('#B_Note').dxTextArea("instance").option("value"),
        B_Bond_Type: $('#B_Bond_Type').dxDropDownBox("instance").option("value"),
        B_st_Guid: $('#B_st_Guid').dxTextBox("instance").option("value"),
        B_Doc_Number: $('#B_Doc_Number').dxTextBox("instance").option("value"),
        B_IsBill: (function () {
            if ($("#B_IsBill").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        B_IsLock: (function () {
            if ($("#B_IsLock").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        B_IsAccept: (function () {
            if ($("#B_IsAccept").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        B_IsPaidBill: (function () {
            if ($("#B_IsPaidBill").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Bond_Body:BondBody,


    };

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
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

        }
    });

}


function Bonds_filldata() {


    let stateURL = $.trim($("#card_Bondstitle").text());
    let url = '';
    switch (stateURL) {
        case 'سند قبض':
                url = 'Bondsfill/'
            break;
        case 'سند صرف':
                url = 'BondsPaymentfill/'
        break;
        case 'سند قيد':
                url = 'BondsDocfill/'
        break;
        case 'قيد افتتاحي':
            url = 'BondsStarterfill/'
        break;
        case 'قيد الفواتير':
            url = 'BondsBillsfill/'
         break;

        default:
            break;
    }

    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            data: { BondType: stateURL},
            success: function (response) {

                let type = response.getBonds['id'];
                switch (type) {
                    case 3:
                        $('#B_IsBill').dxSwitch("instance").option("value",true);
                        break;

                    default:
                        $('#B_IsBill').dxSwitch("instance").option("value",false);
                        break;
                }
                $(() => {
                    let dataGrid;

                    $("#B_Account").dxDropDownBox({
                        value: null,
                        valueExpr: "Guid",
                        deferRendering: false,
                        placeholder: "Select Account",
                        inputAttr: { "aria-label": "Store Name" },

                        displayExpr(item) {
                            return item && `${item.Ac_Name}   -${item.Ac_Code_Mask} `;
                        },
                        showClearButton: true,
                        dataSource: response.getAccounts,//makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value",);
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField: 'Ac_Name',
                                        caption: 'اسم الحساب',
                                    },
                                    {
                                        dataField: 'Ac_Code_Mask',
                                        caption: 'كود الحساب',
                                    },
                                ],
                                hoverStateEnabled: true,
                                paging: { enabled: true, pageSize: 10 },
                                filterRow: { visible: true },
                                scrolling: { mode: "virtual" },
                                selection: { mode: "single" },
                                selectedRowKeys: value,
                                height: 400,
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
                    $('#B_Account').dxDropDownBox("instance").option({
                        value: response.defualtAccount,
                        visible:Number(response.getBonds.Acc_Guid_Visible),

                    });
                    if(!Number(response.getBonds.Acc_Guid_Visible)) $("#Account").hide();

                });
                $(() => {
                    let dataGrid;
                    $("#B_Currency_Guid").dxDropDownBox({
                        value: null,
                        valueExpr: "Cur_Guid",
                        deferRendering: false,
                        placeholder: "Select Currency",
                        inputAttr: { "aria-label": "Currency" },
                        displayExpr(item) {
                            return item && `${item.Cur_Name}`;
                        },
                        showClearButton: true,
                        dataSource: response.getCurrency,//makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value",);
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField: 'Cur_Name',
                                        caption: 'العملة',
                                    },
                                    {
                                        dataField: 'Cur_Cost',
                                        caption: 'التعادل',
                                    },
                                ],
                                hoverStateEnabled: true,
                                paging: { enabled: true, pageSize: 10 },
                                filterRow: { visible: true },
                                scrolling: { mode: "virtual" },
                                selection: { mode: "single" },
                                selectedRowKeys: value,
                                height: 400,
                                onSelectionChanged(selectedItems) {
                                    const keys = selectedItems.selectedRowKeys;
                                    const hasSelection = keys.length;

                                    e.component.option(
                                        "value",
                                        hasSelection ? keys[0].Cur_Guid : null,

                                    );
                                    $("#B_Currency_Equal").dxTextBox("instance").option("value", keys[0].Cur_Cost);

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
                    $("#B_Currency_Guid").dxDropDownBox("instance").option("value", response.defualtCurrencyGuid);
                    $("#B_Currency_Equal").dxTextBox("instance").option("value", response.defualtCurrencyEqual);

                });

                $(() => {
                    let dataGrid;
                    $("#B_Bond_Type").dxDropDownBox({
                        value: null,
                        valueExpr: "id",
                        deferRendering: false,
                        placeholder: "Select Bill type",
                        inputAttr: { "aria-label": "Bill Type" },
                        displayExpr(item) {
                            return item && `${item.Form_Text}  `;
                        },
                        showClearButton: true,
                        dataSource: response.getBondsType,//makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value",);
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField: 'Form_Text',
                                        caption: 'نوع السند',
                                    },

                                ],
                                hoverStateEnabled: true,
                                paging: { enabled: true, pageSize: 10 },
                                filterRow: { visible: true },
                                scrolling: { mode: "virtual" },
                                selection: { mode: "single" },
                                selectedRowKeys: value,
                                height: 400,
                                onSelectionChanged(selectedItems) {
                                    const keys = selectedItems.selectedRowKeys;
                                    const hasSelection = keys.length;

                                    e.component.option(
                                        "value",
                                        hasSelection ? keys[0].id : null

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
                    $('#B_Bond_Type').dxDropDownBox("instance").option("value", response.getBonds.id);
                    $('#B_st_Guid').dxTextBox("instance").option("value", response.getBonds.st_Guid);


                });


                $(() => {
                    let dataGrid;

                    $("#B_GetBonds").dxDropDownBox({
                        value: null,
                        valueExpr: "Bond_Number",
                        deferRendering: false,
                        placeholder: "ادخل رقم السند",
                        inputAttr: { "aria-label": "Bond" },
                        displayExpr(item) {
                            return item && `${item.Bond_Number}  `;
                        },
                        showClearButton: true,
                        dataSource: response.getBondsNumbers,//makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value",);
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField: 'Bond_Number',
                                        caption: 'رقم السند',
                                    },

                                ],
                                hoverStateEnabled: true,
                                paging: { enabled: true, pageSize: 10 },
                                filterRow: { visible: true },
                                scrolling: { mode: "virtual" },
                                selection: { mode: "single" },
                                selectedRowKeys: value,
                                height: 400,
                                onSelectionChanged(selectedItems) {
                                    const keys = selectedItems.selectedRowKeys;
                                    const hasSelection = keys.length;

                                    e.component.option(
                                        "value",
                                        hasSelection ? keys[0].Bond_Number : null

                                    );
                                    let B_Guid = keys[0].Bond_Number;
                                    let B_Type = $('#B_Bond_Type').dxDropDownBox("instance").option("value");
                                    let stateURL = $.trim($("#card_Bondstitle").text());
                                    let url = '';
                                    switch (stateURL) {
                                        case 'سند قبض':
                                                url = 'Bonds/'
                                            break;
                                        case 'سند صرف':
                                                url = 'BondsPayment/'
                                        break;
                                        case 'سند قيد':
                                                url = 'BondsDoc/'
                                        break;
                                        case 'قيد افتتاحي':
                                            url = 'BondsStarter/'
                                        break;
                                        case 'قيد الفواتير':
                                            url = 'BondsBills/'
                                        break;

                                        default:
                                            break;
                                    }

                                    $.ajax({
                                        type: "GET",
                                        url:url + "show",
                                        data: {B_Guid:B_Guid,B_Type:B_Type},
                                        success: function (response) {
                                            $('#gridContainer').dxDataGrid({
                                                'dataSource':response.getBondBody,
                                            });
                                            let typeVou = Number(response.getBondBody[0].Vou_Type);
                                            $('#B_Guid').dxTextBox("instance").option("value",response.getBondBody[0].Guid);
                                            $('#B_Bond_Number').dxTextBox("instance").option("value",response.getBondBody[0].Bond_Number);
                                            $('#B_Doc_Number').dxTextBox("instance").option("value",response.getBondBody[0].Doc_Number);
                                            $('#B_Datex').dxDateBox("instance").option("Date",response.getBondBody[0].Datex);
                                            $('#B_Account').dxDropDownBox("instance").option("value",response.getBondBody[0].Acc_Guid);
                                            $('#B_Currency_Guid').dxDropDownBox("instance").option("value",response.getBondBody[0].Currency_Guid);
                                            $('#B_Currency_Equal').dxTextBox("instance").option("value",response.getBondBody[0].Currency_Equal);
                                            $('#B_Bond_Type').dxDropDownBox("instance").option("value",typeVou);
                                            $('#B_Note').dxTextArea("instance").option("value",response.getBondBody[0].Notes);
                                            $('#B_st_Guid').dxTextBox("instance").option("value",response.getBondBody[0].st_Guid);
                                            if(response.getBondBody[0].Is_Bill ==true){
                                                $('#B_IsBill').dxSwitch("instance").option("value",true);
                                            }else{
                                                $('#B_IsBill').dxSwitch("instance").option("value",false);

                                            }
                                            if(response.getBondBody[0].isAccept ==true){
                                                $('#B_IsAccept').dxSwitch("instance").option("value",true);
                                            }else{
                                                $('#B_IsAccept').dxSwitch("instance").option("value",false);

                                            }
                                            if(response.getBondBody[0].IsPaidBill ==true){
                                                $('#B_IsPaidBill').dxSwitch("instance").option("value",true);
                                            }else{
                                                $('#B_IsPaidBill').dxSwitch("instance").option("value",false);

                                            }
                                            if(response.getBondBody[0].isLock ==true){
                                                $('#B_IsLock').dxSwitch("instance").option("value",true);
                                            }else{
                                                $('#B_IsLock').dxSwitch("instance").option("value",false);

                                            }


                                        }
                                    });



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

function Bonds_fetch() {


    let itemsforadd = [];
    let stateURL = $.trim($("#card_Bondstitle").text());
    let url = '';
    switch (stateURL) {
        case 'سند قبض':
                url = 'Bonds/'
            break;
        case 'سند صرف':
                url = 'BondsPayment/'
        break;
        case 'سند قيد':
                url = 'BondsDoc/'
        break;
        case 'قيد افتتاحي':
            url = 'BondsStarter/'
        break;
        case 'قيد الفواتير':
            url = 'BondsBills/'
         break;

        default:
            break;
    }

    let data={
        B_Guid:null,
        BondType:stateURL,
    };

    $.ajax({
        type: "GET",
        url: url + 'create',
        data:data,
        success: function (response) {

            const dataGrid = $('#gridContainer').dxDataGrid({
                dataSource: response.getBonds,
                showBorders: true,
                paging: {
                    enabled: false,
                },
                editing: {
                    mode: 'cell',
                    allowUpdating: true,
                    allowAdding: true,
                    allowDeleting: true,
                },
                selection: {
                    mode: 'multiple',
                },
                rowAlternationEnabled: true,

                columns: [
                    {
                        dataField: 'Guid',
                        caption: 'Guid',
                       visible:false,

                    },
                    {
                        dataField: 'Parent_Guid',
                        caption: 'Parent Guid',
                       visible:false,

                    },
                    {
                        dataField: 'Acc_Guid',
                        caption: 'الحساب ',
                        lookup: {
                                    dataSource:response.getAccounts,
                                    displayExpr: 'Ac_Name',
                                    valueExpr: 'Guid',

                            },


                    },
                    {
                        dataField: 'Debit',
                        caption: 'مدين',
                        dataType:'number',
                        alignment: 'right',
                        visible : Number(response.State.Debit_Visible),

                    },
                    {
                        dataField: 'Credit',
                        caption: 'دائن',
                        dataType:'number',
                        alignment: 'right',
                        visible:Number(response.State.Credit_Visible),

                    },

                    {
                        dataField: 'NotesAll',
                        caption: 'بيان',
                    //    visible:false,

                    },
                    {
                        dataField: 'Vou_Row_No',
                        caption: 'Vou_Row_No',
                       visible:false,

                    },

                ],
                summary: {
                    totalItems: [
                    {
                        column: 'Credit',
                        summaryType: 'sum',
                        valueFormat: '#0.00',
                    },
                    {
                        column: 'Debit',
                        summaryType: 'sum',
                        valueFormat: '#0.00',
                    },


                ],
                  },

                  onEditorPrepared: function(e) {

                  },
                  onInitNewRow: function(e) {
                    e.data.NotesAll =" ";
                    e.data.Parent_Guid="00000000-0000-0000-0000-000000000000";
                    e.data.Guid="00000000-0000-0000-0000-000000000000";

                  },
                  onContentReady: function(e) {
                    // Add custom class to the header panel
                    e.element.find(".dx-datagrid-headers").addClass("custom-header");
                    if(e.rowType === 'data')
                    {
                        const rowIdValue = e.data.Credit;
                        // e.rowElement.toggle(rowIdValue !== 0);
                        // e.rowElement.toggle( rowIdValue !== 0);
                    }
                  },
                  onRowPrepared: function(e) {
                    if (e.rowType === "data" && e.dataIndex % 2 === 1) {
                      e.rowElement.addClass("custom-even-row");

                    }
                    if (e.rowType === "totalFooter") {
                        e.rowElement.addClass("custom-summary-row");
                      }

                    // console.log($("#B_Bond_Type").dxDropDownBox("instance").option("value"));
                    let bondType = $.trim($('#card_Bondstitle').text());
                    switch (bondType) {
                        case "سند قبض":
                            const creditColumn = e.component.columnOption('Credit');
                            if (creditColumn.visible) {

                                if(e.rowType === 'data')
                                {
                                    const rowIdValue = e.data.Credit;
                                    if(rowIdValue == 0)e.rowElement.hide();

                                }
                            }
                            break;
                        case "سند صرف":
                                const debitColumn = e.component.columnOption('Debit');
                                if (debitColumn.visible) {

                                    if(e.rowType === 'data')
                                    {
                                        const rowIdValue = e.data.Debit;
                                        if(rowIdValue == 0)e.rowElement.hide();

                                    }
                                }
                            break;

                        default:
                            break;
                    }



                  },
                  onRowRemoving: function(e) {
                    // console.log("Row removing event:", e.data.Guid);

                    $.ajaxSetup({
                        headers: {
                            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                        },
                    });
                    $.ajax({
                        type: "DELETE",
                        url: "Bonds/destroy",
                        data: {
                            Guid: e.data.Guid,
                        },

                        success: function (response) {
                            if(response){
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
                                Bonds_UpdateOrInsert();
                                // Bonds_cleardata();
                                // Bonds_fetch();
                                // Bonds_filldata();
                            }
                        },
                    });

                },
                toolbar: {
                    items: [
                        {
                            name: 'addRowButton',
                            showText: 'always',

                        }, {
                            location: 'after',
                            widget: 'dxButton',
                            options: {
                                text: 'حذف السجلات المؤشرة',
                                icon: 'trash',
                                disabled: true,
                                onClick() {
                                    const selectedRowKeys = dataGrid.getSelectedRowKeys();

                                    // Assuming 'itemsforadd' is an array
                                    selectedRowKeys.forEach((key) => {
                                        const index = itemsforadd.indexOf(key);
                                        if (index !== -1) {
                                            itemsforadd.splice(index, 1);
                                        }
                                    });
                                    dataGrid.refresh();
                                },
                            },
                        },
                    ],
                },
                onSelectionChanged(data) {
                    dataGrid.option('toolbar.items[1].options.disabled', !data.selectedRowsData.length);

                },
            }).dxDataGrid('instance');


        }
    });


}


function getIDofItem(partnumber){
    let stateURL = $.trim($("#card_Bondstitle").text());
    let url = '';
    switch (stateURL) {
        case 'سند قبض':
                url = 'Bonds/'
            break;
        case 'سند صرف':
                url = 'BondsPayment/'
        break;
        case 'سند قيد':
                url = 'BondsDoc/'
        break;
        case 'قيد افتتاحي':
            url = 'BondsStarter/'
        break;
        case 'قيد الفواتير':
            url = 'BondsBills/'
         break;

        default:
            break;
    }
    if(partnumber != null){
      var result =  $.ajax({
                    type: "GET",
                    url: url+"GetID",
                    data: {PartNumber:partnumber},
        });
       return result.done(function(responseData, textStatus, jqXHR) {
            return jqXHR.responseJSON;
        }).fail(function(jqXHR, textStatus, errorThrown) {

        });

    }

}
// End CRUD Functions.

$(document).ready(function () {
    $("#btnNewAdd").dxButton({
        stylingMode: "contained",
        text: "اضافة سند",
        type: "success",
        icon:"add",
        width: 150,
        onClick() {
            let BondType =$('#B_Bond_Type').dxDropDownBox("instance").option("value"); //$("#card_Bondstitle").text();
            let stateURL = $.trim($("#card_Bondstitle").text());
            let url = '';
            switch (stateURL) {
                case 'سند قبض':
                        url = 'Bondsfill/'
                    break;
                case 'سند صرف':
                        url = 'BondsPaymentfill/'
                break;
                case 'سند قيد':
                        url = 'BondsDocfill/'
                break;
                case 'قيد افتتاحي':
                    url = 'BondsStarterfill/'
                break;
                case 'قيد الفواتير':
                    url = 'BondsBillsfill/'
                 break;

                default:
                    break;
            }
            $.ajax({
                type: "GET",
                url: url + 'getBondNumber',
                data: {BondType:BondType},
                success: function (response) {
                    Bonds_cleardata();
                    Bonds_fetch();
                    Bonds_filldata();
                    let BondNumber = Number(response.BondNumber) +1;
                    $('#B_Bond_Number').dxTextBox("instance").option('value',BondNumber);

                }
            });
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
            Bonds_UpdateOrInsert();
        },
    });
});
// End Button Save



// Begin Create Components of Store Page
$(document).ready(function () {


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
    $(() => {
        $("#B_Guid").dxTextBox({
            placeholder: "Guid",
            inputAttr: { "aria-label": "Guid" },

        });
    });
    $(() => {
        $("#B_Bond_Number").dxTextBox({
            placeholder: "رقم القيد",
            inputAttr: { "aria-label": "Bill Number" },
            // readOnly:true,
        });
    });
    $(() => {
        $("#B_Doc_Number").dxTextBox({
            placeholder: "رقم السند",
            inputAttr: { "aria-label": "Doc Number" },

        });
    });
    $(() => {
        const now = new Date();
        $("#B_Datex").dxDateBox({
            label: "Date and time",
            labelMode: "floating",
            type: 'date',
            value:now,
            dispalyFormat:'dd/MM/yyyy',
            onValueChanged: function(e) {
                var selectedDate = e.value;
                var formattedDate = new Intl.DateTimeFormat("en-US", { year: 'numeric', month: '2-digit', day: '2-digit' }).format(selectedDate);
                console.log("Selected Date:", formattedDate);
            }
        });
    });

    $(() => {
        $("#B_Currency_Equal").dxTextBox({
            placeholder: "قيمة التعادل",
            inputAttr: { "aria-label": "Equal" },
            readOnly: true,

        });
    });

    $(() => {
        $("#B_st_Guid").dxTextBox({
            placeholder: "st Guid",
            inputAttr: { "aria-label": "st_Guid" },
            readOnly: true,
        });
    });

    $(() => {
        $("#B_Note").dxTextArea({
            // ...
            minHeight: 50,
            maxHeight: 300,
            autoResizeEnabled: true,
            // value: longText,
            maxLength: 500,
            label: "Notes",
        });
    });
    $(() => {
        $("#B_IsBill").dxSwitch({});
    });
    $(() => {
        $("#B_IsAccept").dxSwitch({});
    });
    $(() => {
        $("#B_IsLock").dxSwitch({});
    });
    $(() => {
        $("#B_IsPaidBill").dxSwitch({});
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




