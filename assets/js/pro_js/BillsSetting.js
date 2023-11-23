
// BillsSetting_fetch();
BillsSetting_filldata();

function BillsSettingTree_cleardata() {

}
//Begin CRUD Function...


function BillsSetting_insert() {
    // var url = "BillsSetting";

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
    //         BillsSettingTree_fetch();
    //     },
    // });
}
function BillsSetting_update() {
    var url = "BillsSetting/";
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

function BillsSetting_filldata() {
    var url = "BillsSettingfill/";
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
                    $("#Cust_Acc_Guid").dxDropDownBox({
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
                    $("#Acc_Contra_Account").dxDropDownBox({
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
                    $("#Discount_Guid").dxDropDownBox({
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
                    $("#Bill_Type_FK").dxDropDownBox({
                        value: null,
                        valueExpr: "Guid",
                        deferRendering: false,
                        placeholder: "نوع الفاتورة",
                        inputAttr: { "aria-label": "Account" },
                        displayExpr(item) {
                            return item && `${item.N_BillName} `;
                        },
                        showClearButton: true,
                        dataSource: response.BillsType,//makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [{
                                    dataField:"N_BillName",
                                    caption:"نوع الفاتورة",
                                }],
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
                    $("#Currency_Guid").dxDropDownBox({
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
                    $("#Store_Guid").dxDropDownBox({
                        value: null,
                        valueExpr: "St_Guid",
                        deferRendering: false,
                        placeholder: "اختر المخزن",
                        inputAttr: { "aria-label": "Store Name" },
                        displayExpr(item) {
                            return item && `${item.St_Name}   -${item.St_Code} `;
                        },
                        showClearButton: true,
                        dataSource: response.getStores,//makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value",);
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField: 'St_Name',
                                        caption: 'اسم المخزن',
                                    },
                                    {
                                        dataField: 'St_Code',
                                        caption: 'كود المخزن',
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
                                        hasSelection ? keys[0].St_Guid : null

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
                    $("#Unit_Type").dxDropDownBox({
                        value: null,
                        valueExpr: "Ui_Guid",
                        deferRendering: false,
                        placeholder: "نوع الوحدة",
                        inputAttr: { "aria-label": "Account" },
                        displayExpr(item) {
                            return item && `${item.Ui_Name} `;
                        },
                        showClearButton: true,
                        dataSource: response.getUnit,//makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [{
                                    dataField:'Ui_Name',
                                    caption:"اسم الوحدة",
                                }],
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
                                        hasSelection ? keys[0].Ui_Guid : null

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
                    $("#GetBill").dxDropDownBox({
                        value: null,
                        valueExpr: "id",
                        deferRendering: false,
                        placeholder: "اختر نوع الفاتورة",
                        inputAttr: { "aria-label": "Bill" },
                        displayExpr(item) {
                            return item && `${item.FormText}  `;
                        },
                        showClearButton: true,
                        dataSource: response.getBillType,//makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value",);
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField: 'FormText',
                                        caption: 'نوع الفاتورة',
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
                                    let BillSettingID = keys[0].id;

                                    $.ajax({
                                        type: "GET",
                                        url: "BillsSetting/show",
                                        data: {BillSettingID:BillSettingID},
                                        success: function (response) {

                                            //#region  Data of TextBox and so on...
                                            $('#SettingID').dxTextBox("instance").option("value",response.getBillSetting.id);
                                            $('#st_Guid').dxTextBox("instance").option("value",response.getBillSetting.st_Guid);
                                            $('#Bill_Type_FK').dxDropDownBox("instance").option("value",response.getBillSetting.Bill_Type_FK);
                                            $('#FormText').dxTextBox("instance").option("value",response.getBillSetting.FormText);
                                            $('#Print_Count').dxTextBox("instance").option("value",response.getBillSetting.Print_Count);
                                            $('#Acc_Guid').dxDropDownBox("instance").option("value",response.getBillSetting.Acc_Guid);
                                            $('#Acc_Contra_Account').dxDropDownBox("instance").option("value",response.getBillSetting.Acc_Contra_Guid);
                                            $('#Cust_Acc_Guid').dxDropDownBox("instance").option("value",response.getBillSetting.Cust_Acc_Guid);
                                            $('#Store_Guid').dxDropDownBox("instance").option("value",response.getBillSetting.Store_Guid);
                                            $('#Discount_Guid').dxDropDownBox("instance").option("value",response.getBillSetting.Discount_Guid);
                                            $('#Currency_Guid').dxDropDownBox("instance").option("value",response.getBillSetting.Currency_Guid);
                                            $('#Unit_Type').dxDropDownBox("instance").option("value",response.getBillSetting.Unit_Type);



                                            //#endregion

                                            //#region  Data of Toggles
                                            if(response.getBillSetting.Pay_Type == true)$('#Pay_Type').dxSwitch("instance").option("value",true);
                                            else $('#Pay_Type').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.No_Copy_Print == true)$('#No_Copy_Print').dxSwitch("instance").option("value",true);
                                            else $('#No_Copy_Print').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.IsCombine == true)$('#IsCombine').dxSwitch("instance").option("value",true);
                                            else $('#IsCombine').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Qty_MustGreaterThanZero == true)$('#Qty_MustGreaterThanZero').dxSwitch("instance").option("value",true);
                                            else $('#Qty_MustGreaterThanZero').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Qty_MustGreaterThanZeroInStore == true)$('#Qty_MustGreaterThanZeroInStore').dxSwitch("instance").option("value",true);
                                            else $('#Qty_MustGreaterThanZeroInStore').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Save_And_New == true)$('#Save_And_New').dxSwitch("instance").option("value",true);
                                            else $('#Save_And_New').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.CostPriceAffectedByDissAdd == true)$('#CostPriceAffectedByDissAdd').dxSwitch("instance").option("value",true);
                                            else $('#CostPriceAffectedByDissAdd').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.CloseBillAfterPayment == true)$('#CloseBillAfterPayment').dxSwitch("instance").option("value",true);
                                            else $('#CloseBillAfterPayment').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Acc_Visible == true)$('#Acc_Visible').dxSwitch("instance").option("value",true);
                                            else $('#Acc_Visible').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Acc_Contra_Visible == true)$('#Acc_Contra_Visible').dxSwitch("instance").option("value",true);
                                            else $('#Acc_Contra_Visible').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Cust_Acc_Visible == true)$('#Cust_Acc_Visible').dxSwitch("instance").option("value",true);
                                            else $('#Cust_Acc_Visible').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Store_Visible == true)$('#Store_Visible').dxSwitch("instance").option("value",true);
                                            else $('#Store_Visible').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Discount_Visible == true)$('#Discount_Visible').dxSwitch("instance").option("value",true);
                                            else $('#Discount_Visible').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Currency_Visible == true)$('#Currency_Visible').dxSwitch("instance").option("value",true);
                                            else $('#Currency_Visible').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Item_Ch_Highx == true)$('#Item_Ch_Highx').dxSwitch("instance").option("value",true);
                                            else $('#Item_Ch_Highx').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Item_Ch_Lowx == true)$('#Item_Ch_Lowx').dxSwitch("instance").option("value",true);
                                            else $('#Item_Ch_Lowx').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Item_Ch_OrderLimitx == true)$('#Item_Ch_OrderLimitx').dxSwitch("instance").option("value",true);
                                            else $('#Item_Ch_OrderLimitx').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Item_Ch_Zero == true)$('#Item_Ch_Zero').dxSwitch("instance").option("value",true);
                                            else $('#Item_Ch_Zero').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Cost_Visible == true)$('#Cost_Visible').dxSwitch("instance").option("value",true);
                                            else $('#Cost_Visible').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Save_And_Print == true)$('#Save_And_Print').dxSwitch("instance").option("value",true);
                                            else $('#Save_And_Print').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Show_Before_Print == true)$('#Show_Before_Print').dxSwitch("instance").option("value",true);
                                            else $('#Show_Before_Print').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Item_Barcode == true)$('#Item_Barcode').dxSwitch("instance").option("value",true);
                                            else $('#Item_Barcode').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Item_Code == true)$('#Item_Code').dxSwitch("instance").option("value",true);
                                            else $('#Item_Code').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Item_Name == true)$('#Item_Name').dxSwitch("instance").option("value",true);
                                            else $('#Item_Name').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Item_Qty1 == true)$('#Item_Qty1').dxSwitch("instance").option("value",true);
                                            else $('#Item_Qty1').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Item_Qty2 == true)$('#Item_Qty2').dxSwitch("instance").option("value",true);
                                            else $('#Item_Qty2').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Item_Qty3 == true)$('#Item_Qty3').dxSwitch("instance").option("value",true);
                                            else $('#Item_Qty3').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Item_Price == true)$('#Item_Price').dxSwitch("instance").option("value",true);
                                            else $('#Item_Price').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Item_Price_Total == true)$('#Item_Price_Total').dxSwitch("instance").option("value",true);
                                            else $('#Item_Price_Total').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Item_Discount == true)$('#Item_Discount').dxSwitch("instance").option("value",true);
                                            else $('#Item_Discount').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Item_Extra == true)$('#Item_Extra').dxSwitch("instance").option("value",true);
                                            else $('#Item_Extra').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Item_Price_Net == true)$('#Item_Price_Net').dxSwitch("instance").option("value",true);
                                            else $('#Item_Price_Net').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Item_Notes_Show == true)$('#Item_Notes_Show').dxSwitch("instance").option("value",true);
                                            else $('#Item_Notes_Show').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Item_Length == true)$('#Item_Length').dxSwitch("instance").option("value",true);
                                            else $('#Item_Length').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Item_width == true)$('#Item_Width').dxSwitch("instance").option("value",true);
                                            else $('#Item_Width').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Item_Count == true)$('#Item_Count').dxSwitch("instance").option("value",true);
                                            else $('#Item_Count').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Item_Image == true)$('#Item_Image').dxSwitch("instance").option("value",true);
                                            else $('#Item_Image').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.ProductionDate == true)$('#ProductionDate').dxSwitch("instance").option("value",true);
                                            else $('#ProductionDate').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.ExpireDateAlert == true)$('#ExpireDateAlert').dxSwitch("instance").option("value",true);
                                            else $('#ExpireDateAlert').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Branch_Guid == true)$('#Branch_Guid').dxSwitch("instance").option("value",true);
                                            else $('#Branch_Guid').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.PercentagePrice == true)$('#PercentagePrice').dxSwitch("instance").option("value",true);
                                            else $('#PercentagePrice').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.DiscountAmount == true)$('#Dis_Amount').dxSwitch("instance").option("value",true);
                                            else $('#Dis_Amount').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.DiscountPercent == true)$('#Dis_Amount_Percent').dxSwitch("instance").option("value",true);
                                            else $('#Dis_Amount_Percent').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.AddAmount == true)$('#Add_Amount').dxSwitch("instance").option("value",true);
                                            else $('#Add_Amount').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.AddAmountPercent == true)$('#Add_Amount_Percent').dxSwitch("instance").option("value",true);
                                            else $('#Add_Amount_Percent').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.DiscountPercentAffect == true)$('#Dis_Percent_Affect').dxSwitch("instance").option("value",true);
                                            else $('#Dis_Percent_Affect').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.AddPercentAffect == true)$('#Add_Percent_Affect').dxSwitch("instance").option("value",true);
                                            else $('#Add_Percent_Affect').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Header_Cash_Visible == true)$('#Header_Cash_Visible').dxSwitch("instance").option("value",true);
                                            else $('#Header_Cash_Visible').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Header_Notes_Visible == true)$('#Header_Notes_Visible').dxSwitch("instance").option("value",true);
                                            else $('#Header_Notes_Visible').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Footer_BillAdd == true)$('#Footer_BillAdd').dxSwitch("instance").option("value",true);
                                            else $('#Footer_BillAdd').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Footer_BillDiscount == true)$('#Footer_BillDiscount').dxSwitch("instance").option("value",true);
                                            else $('#Footer_BillDiscount').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Footer_BillTotal == true)$('#Footer_BillTotal').dxSwitch("instance").option("value",true);
                                            else $('#Footer_BillTotal').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Footer_ItemAdd == true)$('#Footer_ItemAdd').dxSwitch("instance").option("value",true);
                                            else $('#Footer_ItemAdd').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Footer_ItemDiscount == true)$('#Footer_ItemDiscount').dxSwitch("instance").option("value",true);
                                            else $('#Footer_ItemDiscount').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Footer_TotalAdd == true)$('#Footer_TotalAdd').dxSwitch("instance").option("value",true);
                                            else $('#Footer_TotalAdd').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Footer_TotalDiscount == true)$('#Footer_TotalDiscount').dxSwitch("instance").option("value",true);
                                            else $('#Footer_TotalDiscount').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.DisAddGrid_Visible == true)$('#DisAddGrid_Visible').dxSwitch("instance").option("value",true);
                                            else $('#DisAddGrid_Visible').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.BodyGrid_Visible == true)$('#BodyGrid_Visible').dxSwitch("instance").option("value",true);
                                            else $('#BodyGrid_Visible').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.AffectOfStore == true)$('#AffectOfStore').dxSwitch("instance").option("value",true);
                                            else $('#AffectOfStore').dxSwitch("instance").option("value",false);
                                            if(response.getBillSetting.Profits == true)$('#Profits').dxSwitch("instance").option("value",true);
                                            else $('#Profits').dxSwitch("instance").option("value",false);

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

function BillsSettingTree_fetch() {

}



// End CRUD Functions.

// Begin Context Menu items

// End Context Menu..


$(document).ready(function () {
    $("#danger-contained").dxButton({
        stylingMode: "contained",
        text: "اغلاق",
        type: "danger",
        width: 120,
        onClick() {
            var displaycard = document.getElementById("BillsSettingTreeaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_BillsSettingTreetitle").innerText = "";
                BillsSettingTree_cleardata();
                // BillsSettingTree_setStCode();
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
            BillsSetting_update();

        },
    });
    $("#btnNewAdd").dxButton({
        stylingMode: "contained",
        text: "جديد",
        type: "success",
        icon: 'plus',
        width: 120,
        onClick() {

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
        $("#SettingID").dxTextBox({
            placeholder: "SettingID",
            inputAttr: { "aria-label": "Setting ID" },

        });
    });
    $(() => {
        $("#st_Guid").dxTextBox({
            placeholder: "Setting Guid",
            inputAttr: { "aria-label": "Setting Guid" },

        });
    });

    $(() => {
        $("#Print_Count").dxTextBox({
            placeholder: "عدد الطابعات",
            inputAttr: { "aria-label": "Print Count" },

        });
    });
    $(() => {
        $("#FormText").dxTextBox({
            placeholder: "اسم الفاتورة",
            inputAttr: { "aria-label": "Form Text" },
        });
    });

    $(() => {
        $("#Currency_Visible").dxSwitch({});
    });

    $(() => {
        $("#Pay_Type").dxSwitch({});
    });
    $(() => {
        $("#Item_Ch_Highx").dxSwitch({});
    });
    $(() => {
        $("#Item_Ch_Lowx").dxSwitch({});
    });
    $(() => {
        $("#Item_Ch_OrderLimitx").dxSwitch({});
    });
    $(() => {
        $("#Item_Ch_Zero").dxSwitch({});
    });
    $(() => {
        $("#Cost_Visible").dxSwitch({});
    });
    $(() => {
        $("#No_Copy_Print").dxSwitch({});
    });
    $(() => {
        $("#Store_Visible").dxSwitch({});
    });
    $(() => {
        $("#Save_And_Print").dxSwitch({});
    });
    $(() => {
        $("#Show_Before_Print").dxSwitch({});
    });
    $(() => {
        $("#Item_Barcode").dxSwitch({});
    });
    $(() => {
        $("#Item_Code").dxSwitch({});
    });
    $(() => {
        $("#Item_Name").dxSwitch({});
    });
    $(() => {
        $("#Acc_Visible").dxSwitch({});
    });
    $(() => {
        $("#Acc_Contra_Visible").dxSwitch({});
    });
    $(() => {
        $("#Cust_Acc_Visible").dxSwitch({});
    });
    $(() => {
        $("#Discount_Visible").dxSwitch({});
    });
    $(() => {
        $("#Item_Qty1").dxSwitch({});
    });
    $(() => {
        $("#Item_Qty2").dxSwitch({});
    });
    $(() => {
        $("#Item_Qty3").dxSwitch({});
    });
    $(() => {
        $("#Item_Price").dxSwitch({});
    });
    $(() => {
        $("#Item_Price_Total").dxSwitch({});
    });
    $(() => {
        $("#Item_Discount").dxSwitch({});
    });
    $(() => {
        $("#Item_Extra").dxSwitch({});
    });
    $(() => {
        $("#Item_Price_Net").dxSwitch({});
    });
    $(() => {
        $("#Item_Notes_Show").dxSwitch({});
    });
    $(() => {
        $("#Item_Length").dxSwitch({});
    });
    $(() => {
        $("#Item_Width").dxSwitch({});
    });
    $(() => {
        $("#Item_Count").dxSwitch({});
    });
    $(() => {
        $("#Item_Image").dxSwitch({});
    });
    $(() => {
        $("#ProductionDate").dxSwitch({});
    });
    $(() => {
        $("#ExpireDateAlert").dxSwitch({});
    });
    $(() => {
        $("#Branch_Guid").dxSwitch({});
    });
    $(() => {
        $("#PercentagePrice").dxSwitch({});
    });

    $(() => {
        $("#IsCombine").dxSwitch({});
    });

    $(() => {
        $("#Qty_MustGreaterThanZero").dxSwitch({});
    });
    $(() => {
        $("#Qty_MustGreaterThanZeroInStore").dxSwitch({});
    });
    $(() => {
        $("#Save_And_New").dxSwitch({});
    });
    $(() => {
        $("#CostPriceAffectedByDissAdd").dxSwitch({});
    });
    $(() => {
        $("#CloseBillAfterPayment").dxSwitch({});
    });
    $(() => {
        $("#Dis_Amount").dxSwitch({});
    });
    $(() => {
        $("#Dis_Amount_Percent").dxSwitch({});
    });
    $(() => {
        $("#Dis_Percent_Affect").dxSwitch({});
    });
    $(() => {
        $("#Add_Amount").dxSwitch({});
    });
    $(() => {
        $("#Add_Amount_Percent").dxSwitch({});
    });
    $(() => {
        $("#Add_Percent_Affect").dxSwitch({});
    });
    $(() => {
        $("#Header_Cash_Visible").dxSwitch({});
    });
    $(() => {
        $("#Header_Notes_Visible").dxSwitch({});
    });
    $(() => {
        $("#Footer_BillTotal").dxSwitch({});
    });
    $(() => {
        $("#Footer_ItemDiscount").dxSwitch({});
    });
    $(() => {
        $("#Footer_BillDiscount").dxSwitch({});
    });
    $(() => {
        $("#Footer_BillAdd").dxSwitch({});
    });
    $(() => {
        $("#Footer_ItemAdd").dxSwitch({});
    });
    $(() => {
        $("#Footer_TotalAdd").dxSwitch({});
    });
    $(() => {
        $("#Footer_TotalDiscount").dxSwitch({});
    });
    $(() => {
        $("#DisAddGrid_Visible").dxSwitch({});
    });
    $(() => {
        $("#BodyGrid_Visible").dxSwitch({});
    });
    $(() => {
        $("#AffectOfStore").dxSwitch({});
    });
    $(() => {
        $("#Profits").dxSwitch({});
    });

    $(() => {
        $("#St_Notes").dxTextArea({
            // ...
            minHeight: 50,
            maxHeight: 300,
            autoResizeEnabled: true,
            // value: longText,
            maxLength: 500,
            label: "البيان",
        });
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



