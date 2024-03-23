
// BondsSetting_fetch();
BondsSetting_filldata();

function BondsSettingTree_cleardata() {

}
//Begin CRUD Function...


function BondsSetting_insert() {
    // var url = "BondsSetting";

    // var data = {
    //     St_ParentGuid: $("#St_ParentStore").dxDropDownBox("instance").option("value"),
    //     St_Name: $("#St_Name").dxTextBox("instance").option("value"),
    //     St_Code: $("#St_Code").dxTextBox("instance").option("value"),
    //     St_Account: $("#St_Account").dxDropDownBox("instance").option("value"),
    //     St_State: (function () {
    //         if ($("#St_State").dxSwitch("instance").option("value")) {
    //             return 1;
    //         } else return 0;
    //     })(),
    //     St_IsGroup: (function () {
    //         if ($("#St_IsGroup").dxSwitch("instance").option("value")) {
    //             return 1;
    //         } else return 0;
    //     })(),
    //     St_Address: $("#St_Address").dxTextBox("instance").option("value"),
    //     // St_StoreKeeper: $("#St_Stockkeeper").dxSelectBox("instance").option("value"),
    //     St_Notes: $("#St_Notes").dxTextArea("instance").option("value"),
    // };
    // let test = $("#St_ParentStore").dxDropDownBox("instance").option("value");


    // $.ajaxSetup({
    //     headers: {
    //         "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
    //     },
    // });

    // $.ajax({
    //     type: "POST",
    //     url: url,
    //     data: data,
    //     success: function (response) {
    //         alertify.set("notifier", "position", "top-right");
    //         alertify.success(response.status);
    //         DevExpress.ui.notify('Data Has Been Inserted Successfully ....');
    //         BondsSettingTree_fetch();
    //     },
    // });
}
function BondsSetting_update() {
    var url = "BondsSetting/";
    var data = {
        SettingID : $('#SettingID').dxTextBox("instance").option("value"),
        st_Guid : $('#st_Guid').dxTextBox("instance").option("value"),
        Bill_Type_FK: $("#Bill_Type_FK").dxDropDownBox("instance").option("value"),
        FormText: $("#FormText").dxTextBox("instance").option("value"),
        Print_Count: $("#Print_Count").dxTextBox("instance").option("value"),
        Acc_Guid: $("#Acc_Guid").dxDropDownBox("instance").option("value"),
        Acc_Contra_Account: $("#Acc_Contra_Account").dxDropDownBox("instance").option("value"),
        Cust_Acc_Guid: $("#Cust_Acc_Guid").dxDropDownBox("instance").option("value"),
        Store_Guid: $("#Store_Guid").dxDropDownBox("instance").option("value"),
        Discount_Guid: $("#Discount_Guid").dxDropDownBox("instance").option("value"),
        Currency_Guid: $("#Currency_Guid").dxDropDownBox("instance").option("value"),
        Unit_Type: $("#Unit_Type").dxDropDownBox("instance").option("value"),

        Pay_Type: (function () {
            if ($("#Pay_Type").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        No_Copy_Print: (function () {
            if ($("#No_Copy_Print").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        IsCombine: (function () {
            if ($("#IsCombine").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Qty_MustGreaterThanZero: (function () {
            if ($("#Qty_MustGreaterThanZero").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Qty_MustGreaterThanZeroInStore: (function () {
            if ($("#Qty_MustGreaterThanZeroInStore").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Save_And_New: (function () {
            if ($("#Save_And_New").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        CostPriceAffectedByDissAdd: (function () {
            if ($("#CostPriceAffectedByDissAdd").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        CloseBillAfterPayment: (function () {
            if ($("#CloseBillAfterPayment").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Acc_Visible: (function () {
            if ($("#Acc_Visible").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Acc_Contra_Visible: (function () {
            if ($("#Acc_Contra_Visible").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Cust_Acc_Visible: (function () {
            if ($("#Cust_Acc_Visible").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Store_Visible: (function () {
            if ($("#Store_Visible").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Discount_Visible: (function () {
            if ($("#Discount_Visible").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Currency_Visible: (function () {
            if ($("#Currency_Visible").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Item_Ch_Highx: (function () {
            if ($("#Item_Ch_Highx").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Item_Ch_Lowx: (function () {
            if ($("#Item_Ch_Lowx").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Item_Ch_OrderLimitx: (function () {
            if ($("#Item_Ch_OrderLimitx").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Item_Ch_Zero: (function () {
            if ($("#Item_Ch_Zero").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Cost_Visible: (function () {
            if ($("#Cost_Visible").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Save_And_Print: (function () {
            if ($("#Save_And_Print").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Show_Before_Print: (function () {
            if ($("#Show_Before_Print").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Item_Barcode: (function () {
            if ($("#Item_Barcode").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Item_Code: (function () {
            if ($("#Item_Code").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Item_Name: (function () {
            if ($("#Item_Name").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Item_Qty1: (function () {
            if ($("#Item_Qty1").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Item_Qty2: (function () {
            if ($("#Item_Qty2").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Item_Qty3: (function () {
            if ($("#Item_Qty3").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Item_Price: (function () {
            if ($("#Item_Price").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Item_Price_Total: (function () {
            if ($("#Item_Price_Total").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Item_Price_Net: (function () {
            if ($("#Item_Price_Net").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Item_Discount: (function () {
            if ($("#Item_Discount").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Item_Extra: (function () {
            if ($("#Item_Extra").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Item_Notes_Show: (function () {
            if ($("#Item_Notes_Show").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Item_Length: (function () {
            if ($("#Item_Length").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Item_Width: (function () {
            if ($("#Item_Width").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Item_Count: (function () {
            if ($("#Item_Count").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Item_Image: (function () {
            if ($("#Item_Image").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        ProductionDate: (function () {
            if ($("#ProductionDate").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        ExpireDateAlert: (function () {
            if ($("#ExpireDateAlert").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Branch_Guid: (function () {
            if ($("#Branch_Guid").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        PercentagePrice: (function () {
            if ($("#PercentagePrice").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Dis_Amount: (function () {
            if ($("#Dis_Amount").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Dis_Amount_Percent: (function () {
            if ($("#Dis_Amount_Percent").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Dis_Percent_Affect: (function () {
            if ($("#Dis_Percent_Affect").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Add_Amount: (function () {
            if ($("#Add_Amount").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Add_Amount_Percent: (function () {
            if ($("#Add_Amount_Percent").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Add_Percent_Affect: (function () {
            if ($("#Add_Percent_Affect").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Header_Cash_Visible: (function () {
            if ($("#Header_Cash_Visible").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Header_Notes_Visible: (function () {
            if ($("#Header_Notes_Visible").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Footer_BillTotal: (function () {
            if ($("#Footer_BillTotal").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Footer_ItemDiscount: (function () {
            if ($("#Footer_ItemDiscount").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Footer_BillDiscount: (function () {
            if ($("#Footer_BillDiscount").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Footer_BillAdd: (function () {
            if ($("#Footer_BillAdd").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Footer_ItemAdd: (function () {
            if ($("#Footer_ItemAdd").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Footer_TotalAdd: (function () {
            if ($("#Footer_TotalAdd").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Footer_TotalDiscount: (function () {
            if ($("#Footer_TotalDiscount").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        DisAddGrid_Visible: (function () {
            if ($("#DisAddGrid_Visible").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        BodyGrid_Visible: (function () {
            if ($("#BodyGrid_Visible").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        AffectOfStore: (function () {
            if ($("#AffectOfStore").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        Profits: (function () {
            if ($("#Profits").dxSwitch("instance").option("value")) {
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
                                            // console.log(response);
                                            //#region  Data of TextBox and so on...
                                            $('#id').dxTextBox("instance").option("value",response.getBondsSetting.id);
                                            $('#st_Guid').dxTextBox("instance").option("value",response.getBondsSetting.st_Guid);
                                            $('#RowsNoGrid').dxTextBox("instance").option("value",response.getBondsSetting.RowsNoGrid);
                                            $('#No_Copy_Print').dxTextBox("instance").option("value",response.getBondsSetting.No_Copy_Print);

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
            BondsSetting_update();

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

});
// End Components.



