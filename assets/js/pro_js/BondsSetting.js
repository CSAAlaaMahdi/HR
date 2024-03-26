
// BondsSetting_fetch();
BondsSetting_filldata();

function BondsSettingTree_cleardata() {

}
//Begin CRUD Function...



function BondsSetting_UpdateOrCreate() {
    var url = "bondsSetting";
    var data = {
        id : $('#id').dxTextBox("instance").option("value"),
        st_Guid : $('#st_Guid').dxTextBox("instance").option("value"),
        RowsNoGrid: $("#RowsNoGrid").dxTextBox("instance").option("value"),
        No_Copy_Print: $("#No_Copy_Print").dxTextBox("instance").option("value"),
        txtUser01Optional: $("#txtUser01Optional").dxTextBox("instance").option("value"),
        txtUser02Optional: $("#txtUser02Optional").dxTextBox("instance").option("value"),
        txtUser03Optional: $("#txtUser03Optional").dxTextBox("instance").option("value"),
        txtUser04Optional: $("#txtUser04Optional").dxTextBox("instance").option("value"),
        Acc_Guid: $("#Acc_Guid").dxDropDownBox("instance").option("value"),
        CurrencyGuid: $("#CurrencyGuid").dxDropDownBox("instance").option("value"),

        Debit_Visible: (function () {
            if ($("#Debit_Visible").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Credit_Visible: (function () {
            if ($("#Credit_Visible").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        NoteAll_Visible: (function () {
            if ($("#NoteAll_Visible").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Note_Acc_Visible: (function () {
            if ($("#Note_Acc_Visible").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Acc_Guid_Visible: (function () {
            if ($("#Acc_Guid_Visible").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        txtUserVisible01: (function () {
            if ($("#txtUserVisible01").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        txtUserVisible02: (function () {
            if ($("#txtUserVisible02").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        txtUserVisible03: (function () {
            if ($("#txtUserVisible03").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        txtUserVisible04: (function () {
            if ($("#txtUserVisible04").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        CurrencyVisible: (function () {
            if ($("#CurrencyVisible").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        BranchVisible: (function () {
            if ($("#BranchVisible").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        CostVisible: (function () {
            if ($("#CostVisible").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        SaveAndNew: (function () {
            if ($("#SaveAndNew").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        AcceptZero: (function () {
            if ($("#AcceptZero").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        SaveAndPrint: (function () {
            if ($("#SaveAndPrint").dxSwitch("instance").option("value")) {
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
        method: "POST",
        url: url,
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

        },
    });
}

function BondsSetting_filldata() {
    var url = "bondsSettingfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {

                $(() => {
                    let dataGrid;
                    $("#Acc_Guid").dxDropDownBox({
                        value: null,
                        valueExpr: "Guid",
                        deferRendering: false,
                        placeholder: "اختر الحساب",
                        inputAttr: { "aria-label": "Account" },
                        displayExpr(item) {
                            return item && `${item.Ac_Name}   -${item.Ac_Code_Mask} `;
                        },
                        showClearButton: true,
                        dataSource: response.getAccounts,//makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField:"Ac_Name",
                                        caption:"اسم الحساب",
                                    },
                                    {
                                        dataField:"Ac_Code_Mask",
                                        caption:"كود الحساب",
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
                    $("#CurrencyGuid").dxDropDownBox({
                        value: null,
                        valueExpr: "Cur_Guid",
                        deferRendering: false,
                        placeholder: "اختر العملة",
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
                                        caption: 'قيمة العملة',
                                    },
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
                                        hasSelection ? keys[0].Cur_Guid : null,

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
                    $("#GetVoucherSetting").dxDropDownBox({
                        value: 0,
                        valueExpr: "id",
                        deferRendering: false,
                        placeholder: "اختر نوع السند",
                        inputAttr: { "aria-label": "Bill" },
                        displayExpr(item) {
                            return item && `${item.Form_Text}  `;
                        },
                        showClearButton: true,
                        dataSource: response.getBondsSetting,//makeAsyncDataSource('customer.json'),
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
                                    let BondsSettingID = keys[0].id;

                                    $.ajax({
                                        type: "GET",
                                        url: "bondsSetting/show",
                                        data: {BondsSettingID:BondsSettingID},
                                        success: function (response) {

                                            //#region  Data of TextBox and so on...
                                            $('#id').dxTextBox("instance").option("value",response.getBondsSetting.id);
                                            $('#st_Guid').dxTextBox("instance").option("value",response.getBondsSetting.st_Guid);
                                            $('#RowsNoGrid').dxTextBox("instance").option("value",response.getBondsSetting.RowsNoGrid);
                                            $('#No_Copy_Print').dxTextBox("instance").option("value",response.getBondsSetting.No_Copy_Print);
                                            $('#txtUser01Optional').dxTextBox("instance").option("value",response.getBondsSetting.txtUser01Optional);
                                            $('#txtUser02Optional').dxTextBox("instance").option("value",response.getBondsSetting.txtUser02Optional);
                                            $('#txtUser03Optional').dxTextBox("instance").option("value",response.getBondsSetting.txtUser03Optional);
                                            $('#txtUser04Optional').dxTextBox("instance").option("value",response.getBondsSetting.txtUser04Optional);

                                            if(response.getBondsSetting.Debit_Visible)
                                            $('#Debit_Visible').dxSwitch("instance").option("value",true)
                                            else $('#Debit_Visible').dxSwitch("instance").option("value",false)
                                            if(response.getBondsSetting.Credit_Visible)
                                            $('#Credit_Visible').dxSwitch("instance").option("value",true)
                                            else $('#Credit_Visible').dxSwitch("instance").option("value",false)
                                            if(response.getBondsSetting.NoteAll_Visible)
                                            $('#NoteAll_Visible').dxSwitch("instance").option("value",true)
                                            else $('#NoteAll_Visible').dxSwitch("instance").option("value",false)
                                            if(response.getBondsSetting.Note_Acc_Visible)
                                            $('#Note_Acc_Visible').dxSwitch("instance").option("value",true)
                                            else $('#Note_Acc_Visible').dxSwitch("instance").option("value",false)
                                            if(response.getBondsSetting.Acc_Guid_Visible)
                                            $('#Acc_Guid_Visible').dxSwitch("instance").option("value",true)
                                            else $('#Acc_Guid_Visible').dxSwitch("instance").option("value",false)
                                            if(response.getBondsSetting.txtUserVisible01)
                                            $('#txtUserVisible01').dxSwitch("instance").option("value",true)
                                            else $('#txtUserVisible01').dxSwitch("instance").option("value",false)
                                            if(response.getBondsSetting.txtUserVisible02)
                                            $('#txtUserVisible02').dxSwitch("instance").option("value",true)
                                            else $('#txtUserVisible02').dxSwitch("instance").option("value",false)
                                            if(response.getBondsSetting.txtUserVisible03)
                                            $('#txtUserVisible03').dxSwitch("instance").option("value",true)
                                            else $('#txtUserVisible03').dxSwitch("instance").option("value",false)
                                            if(response.getBondsSetting.txtUserVisible04)
                                            $('#txtUserVisible04').dxSwitch("instance").option("value",true)
                                            else $('#txtUserVisible04').dxSwitch("instance").option("value",false)
                                            if(response.getBondsSetting.CurrencyVisible)
                                            $('#CurrencyVisible').dxSwitch("instance").option("value",true)
                                            else $('#CurrencyVisible').dxSwitch("instance").option("value",false)
                                            if(response.getBondsSetting.BranchVisible)
                                            $('#BranchVisible').dxSwitch("instance").option("value",true)
                                            else $('#BranchVisible').dxSwitch("instance").option("value",false)
                                            if(response.getBondsSetting.CostVisible)
                                            $('#CostVisible').dxSwitch("instance").option("value",true)
                                            else $('#CostVisible').dxSwitch("instance").option("value",false)


                                            //#endregion



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

function BondsSettingTree_fetch() {

}



// End CRUD Functions.

// Begin Context Menu items

// End Context Menu..




// Button Save Data
$(document).ready(function () {
    $("#btnSave").dxButton({
        stylingMode: "contained",
        text: "حفظ",
        type: "success",
        icon: 'check',
        width: 120,
        onClick() {
            BondsSetting_UpdateOrCreate();

        },
    });
});
// End Button Save



// Begin Create Components of Store Page
$(document).ready(function () {
    $(() =>{
        $('#id').dxTextBox({
            placeholder: "التسلسل",
            inputAttr: { "aria-label": "id" },
        });
    });
    $(() =>{
        $('#st_Guid').dxTextBox({
            placeholder: "كود",
            inputAttr: { "aria-label": "st_Guid" },
        });
    })
    $(() =>{
        $('#RowsNoGrid').dxTextBox({
            placeholder: "عدد اسطر القيد",
            inputAttr: { "aria-label": "RowsNoGrid" },
        });
    })
    $(() =>{
        $('#No_Copy_Print').dxTextBox({
            placeholder: "عدد النسخ للطباعة",
            inputAttr: { "aria-label": "No_Copy_Print" },
        });
    })
    $(() => {
        $("#Debit_Visible").dxSwitch({
        });
    });

    $(() => {
        $("#Credit_Visible").dxSwitch({});
    });

    $(() => {
        $("#NoteAll_Visible").dxSwitch({});
    });
    $(() => {
        $("#Note_Acc_Visible").dxSwitch({});
    });
    $(() => {
        $("#Acc_Guid_Visible").dxSwitch({});
    });
    $(() => {
        $("#txtUserVisible01").dxSwitch({});
    });
    $(() => {
        $("#txtUserVisible02").dxSwitch({});
    });
    $(() => {
        $("#txtUserVisible03").dxSwitch({});
    });
    $(() => {
        $("#txtUserVisible04").dxSwitch({});
    });
    $(() => {
        $("#CurrencyVisible").dxSwitch({});
    });
    $(() => {
        $("#BranchVisible").dxSwitch({});
    });
    $(() => {
        $("#CostVisible").dxSwitch({});
    });
    $(() => {
        $("#SaveAndNew").dxSwitch({});
    });
    $(() => {
        $("#AcceptZero").dxSwitch({});
    });
    $(() => {
        $("#SaveAndPrint").dxSwitch({});
    });
    $(() =>{
        $('#txtUser01Optional').dxTextBox({
            placeholder: "النص",
            inputAttr: { "aria-label": "text" },
        });
    })
    $(() =>{
        $('#txtUser02Optional').dxTextBox({
            placeholder: "النص",
            inputAttr: { "aria-label": "text" },
        });
    })
    $(() =>{
        $('#txtUser03Optional').dxTextBox({
            placeholder: "النص",
            inputAttr: { "aria-label": "text" },
        });
    })
    $(() =>{
        $('#txtUser04Optional').dxTextBox({
            placeholder: "النص",
            inputAttr: { "aria-label": "text" },
        });
    })
});
// End Components.



