

Item_FillData();

//#region CRUD Funtions
function Item_FillData(){

    let url = "itemsfill/";
    $.ajax({
        type: "GET",
        url: url + 'filldata',
        success: function (response) {

            $(() => {
                $("#IT_ParentID").dxDropDownBox({
                    value: 0,
                    valueExpr: "id",
                    deferRendering: false,
                    placeholder: "اختر المجموعة",
                    inputAttr: { "aria-label": "IT_ParentID" },
                    displayExpr(item) {
                        return item && `${item.IT_Name}   -${item.IT_Code} `;
                    },
                    showClearButton: true,
                    dataSource: response.getItems,//makeAsyncDataSource('customer.json'),
                    contentTemplate(e) {
                        const value = e.component.option("value");
                        const $dataGrid = $("<div>").dxDataGrid({
                            dataSource: e.component.getDataSource(),
                            columns: [
                                {
                                    dataField:'IT_Name',
                                    caption:'اسم المجموعة'
                                },
                                {
                                    dataField:'IT_Code',
                                    caption:'كود المجموعة'
                                }
                            ],
                            hoverStateEnabled: true,
                            paging: { enabled: true, pageSize: 10 },
                            filterRow: { visible: true },
                            scrolling: { mode: "virtual" },
                            selection: { mode: "single" },
                            selectedRowKeys: value,
                            height: "100%",
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
                    onValueChanged: function(e) {
                        let id=$('#IT_ID').dxTextBox("instance").option("value");
                        if(id == null || id == "")
                        {
                            setMaskCode();
                        }else{

                        }


                    },
                    dropDownOptions: {
                        height: 500, // Set the desired height in pixels
                    }

                });
            });
            // Get And Initialize Company
            $(() => {
                $("#IT_Company").dxDropDownBox({
                    value: null,
                    valueExpr: "Com_Guid",
                    deferRendering: false,
                    placeholder: "اختر الشركة",
                    inputAttr: { "aria-label": "ITCompany" },
                    displayExpr(item) {
                        return item && `${item.Com_Name}`;
                    },
                    showClearButton: true,
                    dataSource: response.getCompanies,//makeAsyncDataSource('customer.json'),
                    contentTemplate(e) {
                        const value = e.component.option("value");
                        const $dataGrid = $("<div>").dxDataGrid({
                            dataSource: e.component.getDataSource(),
                            columns: [
                                {
                                    dataField:'Com_Name',
                                    caption:'اسم الشركة'
                                }
                            ],
                            hoverStateEnabled: true,
                            paging: { enabled: true, pageSize: 10 },
                            filterRow: { visible: true },
                            scrolling: { mode: "virtual" },
                            selection: { mode: "single" },
                            selectedRowKeys: value,
                            height: "100%",
                            onSelectionChanged(selectedItems) {
                                const keys = selectedItems.selectedRowKeys;
                                const hasSelection = keys.length;
                                e.component.option(
                                    "value",
                                    hasSelection ? keys[0].Com_Guid : null

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
                    onValueChanged: function(e) {
                        // Code to execute when the value changes


                    },
                    dropDownOptions: {
                        height: 500, // Set the desired height in pixels
                    }

                });
            });
            // Get And Initialize Brand
            $(() => {
                $("#IT_Brand").dxDropDownBox({
                    value: null,
                    valueExpr: "B_Guid",
                    deferRendering: false,
                    placeholder: "اختر الماركة",
                    inputAttr: { "aria-label": "Brand" },
                    displayExpr(item) {
                        return item && `${item.B_Name}`;
                    },
                    showClearButton: true,
                    dataSource: response.getBrands,//makeAsyncDataSource('customer.json'),
                    contentTemplate(e) {
                        const value = e.component.option("value");
                        const $dataGrid = $("<div>").dxDataGrid({
                            dataSource: e.component.getDataSource(),
                            columns: [
                                {
                                    dataField:'B_Name',
                                    caption:'اسم الماركة'
                                }
                            ],
                            hoverStateEnabled: true,
                            paging: { enabled: true, pageSize: 10 },
                            filterRow: { visible: true },
                            scrolling: { mode: "virtual" },
                            selection: { mode: "single" },
                            selectedRowKeys: value,
                            height: "100%",
                            onSelectionChanged(selectedItems) {
                                const keys = selectedItems.selectedRowKeys;
                                const hasSelection = keys.length;
                                e.component.option(
                                    "value",
                                    hasSelection ? keys[0].B_Guid : null

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
                    onValueChanged: function(e) {
                        // Code to execute when the value changes
                    //    setMaskCode();

                    },
                    dropDownOptions: {
                        height: 500, // Set the desired height in pixels
                    }

                });
            });
            // Get And initialize Units
            $(() => {
                $("#IT_ItemUnit").dxDropDownBox({
                    value: null,
                    valueExpr: "Ui_Guid",
                    deferRendering: false,
                    placeholder: "اختر الوحدة",
                    inputAttr: { "aria-label": "Unit" },
                    displayExpr(item) {
                        return item && `${item.Ui_Name}`;
                    },
                    showClearButton: true,
                    dataSource: response.getUnits,//makeAsyncDataSource('customer.json'),
                    contentTemplate(e) {
                        const value = e.component.option("value");
                        const $dataGrid = $("<div>").dxDataGrid({
                            dataSource: e.component.getDataSource(),
                            columns: [
                                {
                                    dataField:'Ui_Name',
                                    caption:'اسم الوحدة'
                                }
                            ],
                            hoverStateEnabled: true,
                            paging: { enabled: true, pageSize: 10 },
                            filterRow: { visible: true },
                            scrolling: { mode: "virtual" },
                            selection: { mode: "single" },
                            selectedRowKeys: value,
                            height: "100%",
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
                    onValueChanged: function(e) {
                        // Code to execute when the value changes
                    //    setMaskCode();

                    },
                    dropDownOptions: {
                        height: 250, // Set the desired height in pixels
                    }

                });
            });
            $(() => {
                $("#IT_ItemUnit2").dxDropDownBox({
                    value: null,
                    valueExpr: "Ui_Guid",
                    deferRendering: false,
                    placeholder: "اختر الوحدة",
                    inputAttr: { "aria-label": "Unit" },
                    displayExpr(item) {
                        return item && `${item.Ui_Name}`;
                    },
                    showClearButton: true,
                    dataSource: response.getUnits,//makeAsyncDataSource('customer.json'),
                    contentTemplate(e) {
                        const value = e.component.option("value");
                        const $dataGrid = $("<div>").dxDataGrid({
                            dataSource: e.component.getDataSource(),
                            columns: [
                                {
                                    dataField:'Ui_Name',
                                    caption:'اسم الوحدة'
                                }
                            ],
                            hoverStateEnabled: true,
                            paging: { enabled: true, pageSize: 10 },
                            filterRow: { visible: true },
                            scrolling: { mode: "virtual" },
                            selection: { mode: "single" },
                            selectedRowKeys: value,
                            height: "100%",
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
                    onValueChanged: function(e) {
                        // Code to execute when the value changes
                    //    setMaskCode();

                    },
                    dropDownOptions: {
                        height: 250, // Set the desired height in pixels
                    }

                });
            });
            $(() => {
                $("#IT_ItemUnit3").dxDropDownBox({
                    value: null,
                    valueExpr: "Ui_Guid",
                    deferRendering: false,
                    placeholder: "اختر الوحدة",
                    inputAttr: { "aria-label": "Unit" },
                    displayExpr(item) {
                        return item && `${item.Ui_Name}`;
                    },
                    showClearButton: true,
                    dataSource: response.getUnits,//makeAsyncDataSource('customer.json'),
                    contentTemplate(e) {
                        const value = e.component.option("value");
                        const $dataGrid = $("<div>").dxDataGrid({
                            dataSource: e.component.getDataSource(),
                            columns: [{
                                dataField:'Ui_Name',
                                caption:'اسم الوحدة'
                            }],
                            hoverStateEnabled: true,
                            paging: { enabled: true, pageSize: 10 },
                            filterRow: { visible: true },
                            scrolling: { mode: "virtual" },
                            selection: { mode: "single" },
                            selectedRowKeys: value,
                            height: "100%",
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
                    onValueChanged: function(e) {
                        // Code to execute when the value changes
                    //    setMaskCode();

                    },
                    dropDownOptions: {
                        height: 250, // Set the desired height in pixels
                    }

                });
            });
            // Get And Initialize Currency
            $(() => {
                $("#IT_CurrencyGuid").dxDropDownBox({
                    value: null,
                    valueExpr: "Cur_Guid",
                    deferRendering: false,
                    placeholder: "اختر العملة",
                    inputAttr: { "aria-label": "Currency" },
                    displayExpr(item) {
                        return item && `${item.Cur_Name}  -${item.Cur_Cost}`;
                    },
                    showClearButton: true,
                    dataSource: response.getCurrency,//makeAsyncDataSource('customer.json'),
                    contentTemplate(e) {
                        const value = e.component.option("value");
                        const $dataGrid = $("<div>").dxDataGrid({
                            dataSource: e.component.getDataSource(),
                            columns: [
                                {
                                    dataField:'Cur_Name',
                                    caption:'العملة'
                                },
                                {
                                    dataField:'Cur_Cost',
                                    caption:'القيمة',
                                }
                            ],
                            hoverStateEnabled: true,
                            paging: { enabled: true, pageSize: 10 },
                            filterRow: { visible: true },
                            scrolling: { mode: "virtual" },
                            selection: { mode: "single" },
                            selectedRowKeys: value,
                            height: "100%",
                            onSelectionChanged(selectedItems) {
                                const keys = selectedItems.selectedRowKeys;
                                const hasSelection = keys.length;
                                e.component.option(
                                    "value",
                                    hasSelection ? keys[0].Cur_Guid : null

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
                    onValueChanged: function(e) {
                        // Code to execute when the value changes
                    //    setMaskCode();

                    },
                    dropDownOptions: {
                        height: 250, // Set the desired height in pixels
                    }

                });
            });
            $(() => {
                $("#IT_CurrencyGuid2").dxDropDownBox({
                    value: null,
                    valueExpr: "Cur_Guid",
                    deferRendering: false,
                    placeholder: "اختر العملة",
                    inputAttr: { "aria-label": "Currency" },
                    displayExpr(item) {
                        return item && `${item.Cur_Name}  -${item.Cur_Cost}`;
                    },
                    showClearButton: true,
                    dataSource: response.getCurrency,//makeAsyncDataSource('customer.json'),
                    contentTemplate(e) {
                        const value = e.component.option("value");
                        const $dataGrid = $("<div>").dxDataGrid({
                            dataSource: e.component.getDataSource(),
                            columns: [
                                {
                                    dataField:'Cur_Name',
                                    caption:'العملة'
                                },
                                {
                                    dataField:'Cur_Cost',
                                    caption:'القيمة',
                                }
                            ],
                            hoverStateEnabled: true,
                            paging: { enabled: true, pageSize: 10 },
                            filterRow: { visible: true },
                            scrolling: { mode: "virtual" },
                            selection: { mode: "single" },
                            selectedRowKeys: value,
                            height: "100%",
                            onSelectionChanged(selectedItems) {
                                const keys = selectedItems.selectedRowKeys;
                                const hasSelection = keys.length;
                                e.component.option(
                                    "value",
                                    hasSelection ? keys[0].Cur_Guid : null

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
                    onValueChanged: function(e) {
                        // Code to execute when the value changes
                    //    setMaskCode();

                    },
                    dropDownOptions: {
                        height: 250, // Set the desired height in pixels
                    }

                });
            });
            $(() => {
                $("#IT_CurrencyGuid3").dxDropDownBox({
                    value: null,
                    valueExpr: "Cur_Guid",
                    deferRendering: false,
                    placeholder: "اختر العملة",
                    inputAttr: { "aria-label": "Currency" },
                    displayExpr(item) {
                        return item && `${item.Cur_Name}  -${item.Cur_Cost}`;
                    },
                    showClearButton: true,
                    dataSource: response.getCurrency,//makeAsyncDataSource('customer.json'),
                    contentTemplate(e) {
                        const value = e.component.option("value");
                        const $dataGrid = $("<div>").dxDataGrid({
                            dataSource: e.component.getDataSource(),
                            columns: [
                                {
                                    dataField:'Cur_Name',
                                    caption:'العملة'
                                },
                                {
                                    dataField:'Cur_Cost',
                                    caption:'القيمة',
                                }
                            ],
                            hoverStateEnabled: true,
                            paging: { enabled: true, pageSize: 10 },
                            filterRow: { visible: true },
                            scrolling: { mode: "virtual" },
                            selection: { mode: "single" },
                            selectedRowKeys: value,
                            height: "100%",
                            onSelectionChanged(selectedItems) {
                                const keys = selectedItems.selectedRowKeys;
                                const hasSelection = keys.length;
                                e.component.option(
                                    "value",
                                    hasSelection ? keys[0].Cur_Guid : null

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
                    onValueChanged: function(e) {
                        // Code to execute when the value changes
                    //    setMaskCode();

                    },
                    dropDownOptions: {
                        height: 250, // Set the desired height in pixels
                    }

                });
            });
            // Get Data by searching to Edit
            $(() => {
                $("#IT_Search").dxDropDownBox({
                    value: 0,
                    valueExpr: "id",
                    deferRendering: false,
                    placeholder: "اختر المادة للعرض",
                    inputAttr: { "aria-label": "Search" },
                    displayExpr(item) {
                        return item && `${item.IT_Name}  -${item.IT_Code}`;
                    },
                    showClearButton: true,
                    dataSource: response.getItemsToEdit,//makeAsyncDataSource('customer.json'),
                    contentTemplate(e) {
                        const value = e.component.option("value");
                        const $dataGrid = $("<div>").dxDataGrid({
                            dataSource: e.component.getDataSource(),
                            columns: [
                                {
                                    dataField: 'IT_Name',
                                    caption:'اسم المادة',
                                },
                                {
                                    dataField: 'IT_PartNumber',
                                    caption:'رمز المادة',
                                },
                                {
                                    dataField: 'IT_PartNumber2',
                                    caption:'رمز المادة',
                                },
                                {
                                    dataField: 'id',
                                    caption: "ت",
                                }
                            ],
                            hoverStateEnabled: true,
                            paging: { enabled: true, pageSize: 10 },
                            filterRow: { visible: true },
                            scrolling: { mode: "virtual" },
                            selection: { mode: "single" },
                            selectedRowKeys: value,
                            height: "100%",
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
                    onValueChanged: function(e) {

                        if(e.value != null){
                            $.ajax({
                                type: "GET",
                                url: 'items/show',
                                data:{IT_ID:e.value},
                                success: function (response) {

                                    // console.log(response);
                                    let parentid=Number(response.getItemTwo.IT_ParentID);
                                    if(response){
                                        $('#IT_ID').dxTextBox("instance").option("value",response.getItemTwo.id);
                                        $('#IT_Name').dxTextBox("instance").option("value",response.getItemTwo.IT_Name);
                                        $('#IT_ParentID').dxDropDownBox("instance").option("value",parentid);
                                        $('#IT_Code').dxTextBox("instance").option("value",response.getItemTwo.IT_Code);
                                        $('#IT_PartNumber').dxTextBox("instance").option("value",response.getItemTwo.IT_PartNumber);
                                        $('#IT_ArabicName').dxTextBox("instance").option("value",response.getItemTwo.IT_ArabicName);
                                        $('#IT_PartNumber2').dxTextBox("instance").option("value",response.getItemTwo.IT_PartNumber2);
                                        $('#IT_CPartNumber').dxTextBox("instance").option("value",response.getItemTwo.IT_C_PartNumber);
                                        $('#IT_GenuinePartNumber').dxTextBox("instance").option("value",response.getItemTwo.IT_GenuinePartNumber);
                                        $('#IT_Kind').dxTextBox("instance").option("value",response.getItemTwo.IT_Kind);
                                        $('#IT_Ask_Stop').dxNumberBox("instance").option("value",response.getItemTwo.IT_Ask_Stop);
                                        $('#IT_Description').dxTextArea("instance").option("value",response.getItemTwo.IT_Description);
                                        $('#IT_Notes').dxTextArea("instance").option("value",response.getItemTwo.IT_Notes);
                                        $('#IT_Dim').dxTextBox("instance").option("value",response.getItemTwo.IT_Dim);
                                        $('#IT_Color').dxTextBox("instance").option("value",response.getItemTwo.IT_Color);
                                        $('#IT_CountIn').dxNumberBox("instance").option("value",response.getItemTwo.IT_CountIn);
                                        $('#IT_ItemCount').dxTextBox("instance").option("value",response.getItemTwo.IT_ItemCount);
                                        $('#IT_Higx').dxNumberBox("instance").option("value",response.getItemTwo.IT_Higx);
                                        $('#IT_Lowx').dxNumberBox("instance").option("value",response.getItemTwo.IT_Lowx);
                                        $('#IT_State').dxSwitch("instance").option("value",response.getItemTwo.IT_State);
                                        $('#IT_Factory2').dxNumberBox("instance").option("value",response.getItemTwo.IT_Factory2);
                                        $('#IT_Factory3').dxNumberBox("instance").option("value",response.getItemTwo.IT_Factory3);

                                        if(response.getItemTwo.IT_ItemUnitDefualt==1){
                                            reloadRadioGroup();
                                            $('#IT_GroupButtons').dxRadioGroup("instance").option('value[0].value',0 );



                                        }else if(response.getItemTwo.IT_ItemUnit2Defualt==1){
                                            reloadRadioGroup();
                                            $('#IT_GroupButtons').dxRadioGroup("instance").option('value[1].value',1);



                                        }else if(response.getItemTwo.IT_ItemUnit3Defualt==1){
                                            reloadRadioGroup();
                                            $('#IT_GroupButtons').dxRadioGroup("instance").option('value[2].value',2 );


                                        }else{
                                            reloadRadioGroup();
                                            $('#IT_GroupButtons').dxRadioGroup("instance").option('value[0].value',0 );


                                        }

                                        $('#IT_Normal_1_1').dxNumberBox("instance").option("value",response.getItemTwo.IT_Normal_1_1);
                                        $('#IT_Mid_1_1').dxNumberBox("instance").option("value",response.getItemTwo.IT_Mid_1_1);
                                        $('#IT_Good_1_1').dxNumberBox("instance").option("value",response.getItemTwo.IT_Good_1_1);
                                        $('#IT_VeryGood_1_1').dxNumberBox("instance").option("value",response.getItemTwo.IT_VeryGood_1_1);
                                        $('#IT_Excellent_1_1').dxNumberBox("instance").option("value",response.getItemTwo.IT_Excellent_1_1);
                                        $('#IT_Supper_1_1').dxNumberBox("instance").option("value",response.getItemTwo.IT_Supper_1_1);
                                        $('#IT_Normal_2_1').dxNumberBox("instance").option("value",response.getItemTwo.IT_Normal_2_1);
                                        $('#IT_Mid_2_1').dxNumberBox("instance").option("value",response.getItemTwo.IT_Mid_2_1);
                                        $('#IT_Good_2_1').dxNumberBox("instance").option("value",response.getItemTwo.IT_Good_2_1);
                                        $('#IT_VeryGood_2_1').dxNumberBox("instance").option("value",response.getItemTwo.IT_VeryGood_2_1);
                                        $('#IT_Excellent_2_1').dxNumberBox("instance").option("value",response.getItemTwo.IT_Excellent_2_1);
                                        $('#IT_Supper_2_1').dxNumberBox("instance").option("value",response.getItemTwo.IT_Supper_2_1);
                                        $('#IT_Normal_3_1').dxNumberBox("instance").option("value",response.getItemTwo.IT_Normal_3_1);
                                        $('#IT_Mid_3_1').dxNumberBox("instance").option("value",response.getItemTwo.IT_Mid_3_1);
                                        $('#IT_Good_3_1').dxNumberBox("instance").option("value",response.getItemTwo.IT_Good_3_1);
                                        $('#IT_VeryGood_3_1').dxNumberBox("instance").option("value",response.getItemTwo.IT_VeryGood_3_1);
                                        $('#IT_Excellent_3_1').dxNumberBox("instance").option("value",response.getItemTwo.IT_Excellent_3_1);
                                        $('#IT_Supper_3_1').dxNumberBox("instance").option("value",response.getItemTwo.IT_Supper_3_1);
                                        // $('#IT_LastPrice').dxNumberBox("instance").option("value","");
                                        // $('#IT_LastPrice2').dxNumberBox("instance").option("value","");
                                        // $('#IT_LastPrice3').dxNumberBox("instance").option("value","");
                                        // $('#IT_Average').dxNumberBox("instance").option("value","");
                                        // $('#IT_Average2').dxNumberBox("instance").option("value","");
                                        // $('#IT_Average3').dxNumberBox("instance").option("value","");
                                        $('#IT_Company').dxDropDownBox("instance").option("value",response.getItemTwo.IT_Company);
                                        $('#IT_Brand').dxDropDownBox("instance").option("value",response.getItemTwo.IT_Brand);
                                        $('#IT_ItemUnit').dxDropDownBox("instance").option("value",response.getItemTwo.IT_ItemUnit);
                                        $('#IT_ItemUnit2').dxDropDownBox("instance").option("value",response.getItemTwo.IT_ItemUnit2);
                                        $('#IT_ItemUnit3').dxDropDownBox("instance").option("value",response.getItemTwo.IT_ItemUnit3);
                                        // $('#IT_CurrencyGuid').dxDropDownBox("instance").option("value",null);
                                        // $('#IT_CurrencyGuid2').dxDropDownBox("instance").option("value",null);
                                        // $('#IT_CurrencyGuid3').dxDropDownBox("instance").option("value",null);

                                        fetchdata_ItemThree();
                                        fetchdata_itemFour();


                                    }else{
                                        clear_Data();
                                    }


                                }
                            });
                        }else{
                            const radioGroupData = [
                                { text: 'Unit', value: 0 },
                                { text: 'Unit2', value: 1 },
                                { text: 'Unit3', value: 2},
                              ];
                              $('#IT_GroupButtons').dxRadioGroup("instance").option("items",radioGroupData);
                              $('#IT_GroupButtons').dxRadioGroup("instance").option('value[0].value',0 );




                        }


                    },
                    dropDownOptions: {
                        height: 500, // Set the desired height in pixels
                    }

                });
            });
        }
    });
}

function setMaskCode(){
    let selectValue= $('#IT_ParentID').dxDropDownBox("instance").option("value");

    if(selectValue == null){
        $.ajax({
            type: "GET",
            data:{IT_ID:selectValue},
            url: "itemCode/setCode",
            success: function (response) {
                    if(response.getData){
                        let code = Number(response.getData.IT_Code) + 1 ;
                        $('#IT_Code').dxTextBox("instance").option("value",code);
                    }else{

                    }
            }
        });
    }
    else{
        $.ajax({
            type: "GET",
            data:{IT_ID:selectValue},
            url: "itemCode/setCode",
            success: function (response) {
                    console.log(response);
                    if(response.getData){
                        let child =Number(response.getData.IT_Code);
                        let parent = Number(response.getParent.IT_Code);
                        let result = 0;
                        let finalResult = 0;
                        let count = 1;
                        while (child != parent)
                        {
                            result = child % 10;
                            finalResult = (result * count) + finalResult;
                            count *= 10;
                            child = Math.floor(child / 10) ;
                        }
                        finalResult++;
                        let accode = response.getParent.IT_Code;
                        let newCode = accode  + finalResult;
                        $('#IT_Code').dxTextBox("instance").option("value",newCode);
                    }else{
                        let code=response.getParent.IT_Code + 1 ;
                        $('#IT_Code').dxTextBox("instance").option("value",code);
                    }



            }
        });
    }

}

function clear_Data(){
    $('#IT_Name').dxTextBox("instance").option("value","");
    $('#IT_ParentID').dxDropDownBox("instance").option("value",null);
    $('#IT_Code').dxTextBox("instance").option("value","");
    $('#IT_PartNumber').dxTextBox("instance").option("value","");
    $('#IT_ArabicName').dxTextBox("instance").option("value","");
    $('#IT_PartNumber2').dxTextBox("instance").option("value","");
    $('#IT_CPartNumber').dxTextBox("instance").option("value","");
    $('#IT_Dim').dxTextBox("instance").option("value","");
    $('#IT_Color').dxTextBox("instance").option("value","");
    $('#IT_CountIn').dxNumberBox("instance").option("value","");
    $('#IT_ItemCount').dxTextBox("instance").option("value","");
    $('#IT_Higx').dxNumberBox("instance").option("value","");
    $('#IT_Lowx').dxNumberBox("instance").option("value","");
    $('#IT_Kind').dxTextBox("instance").option("value","");
    $('#IT_Ask_Stop').dxNumberBox("instance").option("value","");
    $('#IT_Description').dxTextArea("instance").option("value","");
    $('#IT_Notes').dxTextArea("instance").option("value","");
    $('#IT_State').dxSwitch("instance").option("value",false);
    $('#IT_Factory2').dxNumberBox("instance").option("value","");
    $('#IT_Factory3').dxNumberBox("instance").option("value","");
    $('#IT_GroupButtons').dxRadioGroup("instance").option("value","Unit");
    $('#IT_Normal_1_1').dxNumberBox("instance").option("value","");
    $('#IT_Mid_1_1').dxNumberBox("instance").option("value","");
    $('#IT_Good_1_1').dxNumberBox("instance").option("value","");
    $('#IT_VeryGood_1_1').dxNumberBox("instance").option("value","");
    $('#IT_Excellent_1_1').dxNumberBox("instance").option("value","");
    $('#IT_Supper_1_1').dxNumberBox("instance").option("value","");
    $('#IT_Normal_2_1').dxNumberBox("instance").option("value","");
    $('#IT_Mid_2_1').dxNumberBox("instance").option("value","");
    $('#IT_Good_2_1').dxNumberBox("instance").option("value","");
    $('#IT_VeryGood_2_1').dxNumberBox("instance").option("value","");
    $('#IT_Excellent_2_1').dxNumberBox("instance").option("value","");
    $('#IT_Supper_2_1').dxNumberBox("instance").option("value","");
    $('#IT_Normal_3_1').dxNumberBox("instance").option("value","");
    $('#IT_Mid_3_1').dxNumberBox("instance").option("value","");
    $('#IT_Good_3_1').dxNumberBox("instance").option("value","");
    $('#IT_VeryGood_3_1').dxNumberBox("instance").option("value","");
    $('#IT_Excellent_3_1').dxNumberBox("instance").option("value","");
    $('#IT_Supper_3_1').dxNumberBox("instance").option("value","");
    $('#IT_LastPrice').dxNumberBox("instance").option("value","");
    $('#IT_LastPrice2').dxNumberBox("instance").option("value","");
    $('#IT_LastPrice3').dxNumberBox("instance").option("value","");
    $('#IT_Average').dxNumberBox("instance").option("value","");
    $('#IT_Average2').dxNumberBox("instance").option("value","");
    $('#IT_Average3').dxNumberBox("instance").option("value","");
    $('#IT_Company').dxDropDownBox("instance").option("value",null);
    $('#IT_Brand').dxDropDownBox("instance").option("value",null);
    $('#IT_ItemUnit').dxDropDownBox("instance").option("value",null);
    $('#IT_ItemUnit2').dxDropDownBox("instance").option("value",null);
    $('#IT_ItemUnit3').dxDropDownBox("instance").option("value",null);
    $('#IT_CurrencyGuid').dxDropDownBox("instance").option("value",null);
    $('#IT_CurrencyGuid2').dxDropDownBox("instance").option("value",null);
    $('#IT_CurrencyGuid3').dxDropDownBox("instance").option("value",null);
}

function clearthree_Data(){
    $("#IT2_ID").dxTextBox("instance").option("value","");
    $("#IT2_State").dxSwitch("instance").option("value",false);
    $('#IT2_ItemPosition').dxTextArea("instance").option("value","");
}

function Item_InsertData(){

    let url='items';
    let unitvalue=$('#IT_GroupButtons').dxRadioGroup("instance").option("value");
    let unit1,unit2,unit3;
    switch (unitvalue) {
        case '0':
                unit1=true;
                unit2=false;
                unit3=false;
            break;
            case '1':
                unit1=false;
                unit2=true;
                unit3=false;
            break;
            case '2':
                unit1=false;
                unit2=false;
                unit3=true;
            break;

        default:
            break;
    }

    let data ={
        'IT_ParentID': $('#IT_ParentID').dxDropDownBox("instance").option("value"),
        'IT_Code': $('#IT_Code').dxTextBox("instance").option("value"),
        'IT_Name': $('#IT_Name').dxTextBox("instance").option("value"),
        'IT_ArabicName': $('#IT_ArabicName').dxTextBox("instance").option("value"),
        'IT_PartNumber': $('#IT_PartNumber').dxTextBox("instance").option("value"),
        'IT_PartNumber2': $('#IT_PartNumber2').dxTextBox("instance").option("value"),
        'IT_CPartNumber': $('#IT_CPartNumber').dxTextBox("instance").option("value"),
        'IT_GenuinePartNumber': $('#IT_GenuinePartNumber').dxTextBox("instance").option("value"),
        'IT_Company': $('#IT_Company').dxDropDownBox("instance").option("value"),
        'IT_Brand': $('#IT_Brand').dxDropDownBox("instance").option("value"),
        'IT_Kind': $('#IT_Kind').dxTextBox("instance").option("value"),
        'IT_State': $('#IT_State').dxSwitch("instance").option("value"),
        'IT_Ask_Stop': $('#IT_Ask_Stop').dxNumberBox("instance").option("value"),
        'IT_Description': $('#IT_Description').dxTextArea("instance").option("value"),
        'IT_Notes': $('#IT_Notes').dxTextArea("instance").option("value"),
        'IT_Dim': $('#IT_Dim').dxTextBox("instance").option("value"),
        'IT_Color': $('#IT_Color').dxTextBox("instance").option("value"),
        'IT_CountIn': $('#IT_CountIn').dxNumberBox("instance").option("value"),
        'IT_ItemCount': $('#IT_ItemCount').dxTextBox("instance").option("value"),
        'IT_Higx': $('#IT_Higx').dxNumberBox("instance").option("value"),
        'IT_Lowx': $('#IT_Lowx').dxNumberBox("instance").option("value"),
        'IT_ItemUnit': $('#IT_ItemUnit').dxDropDownBox("instance").option("value"),
        'IT_ItemUnit2': $('#IT_ItemUnit2').dxDropDownBox("instance").option("value"),
        'IT_ItemUnit3': $('#IT_ItemUnit3').dxDropDownBox("instance").option("value"),
        'IT_Factory2': $('#IT_Factory2').dxNumberBox("instance").option("value"),
        'IT_Factory3': $('#IT_Factory3').dxNumberBox("instance").option("value"),
        'IT_ItemUnitDefualt': unit1,
        'IT_ItemUnitDefualt2': unit2,
        'IT_ItemUnitDefualt3': unit3,
        // 'IT_CurrencyGuid': $('#IT_CurrencyGuid').dxDropDownBox("instance").option("value"),
        // IT_CurrencyTrans: $('#IT_CurrencyTrans').dxTextBox("instance").option("value"),
        'IT_Normal_1_1': $('#IT_Normal_1_1').dxNumberBox("instance").option("value"),
        'IT_Mid_1_1': $('#IT_Mid_1_1').dxNumberBox("instance").option("value"),
        'IT_Good_1_1': $('#IT_Good_1_1').dxNumberBox("instance").option("value"),
        'IT_VeryGood_1_1': $('#IT_VeryGood_1_1').dxNumberBox("instance").option("value"),
        'IT_Excellent_1_1': $('#IT_Excellent_1_1').dxNumberBox("instance").option("value"),
        'IT_Supper_1_1': $('#IT_Supper_1_1').dxNumberBox("instance").option("value"),
        'IT_Normal_2_1': $('#IT_Normal_2_1').dxNumberBox("instance").option("value"),
        'IT_Mid_2_1': $('#IT_Mid_2_1').dxNumberBox("instance").option("value"),
        'IT_Good_2_1': $('#IT_Good_2_1').dxNumberBox("instance").option("value"),
        'IT_VeryGood_2_1': $('#IT_VeryGood_2_1').dxNumberBox("instance").option("value"),
        'IT_Excellent_2_1': $('#IT_Excellent_2_1').dxNumberBox("instance").option("value"),
        'IT_Supper_2_1': $('#IT_Supper_2_1').dxNumberBox("instance").option("value"),
        'IT_Normal_3_1': $('#IT_Normal_3_1').dxNumberBox("instance").option("value"),
        'IT_Mid_3_1': $('#IT_Mid_3_1').dxNumberBox("instance").option("value"),
        'IT_Good_3_1': $('#IT_Good_3_1').dxNumberBox("instance").option("value"),
        'IT_VeryGood_3_1': $('#IT_VeryGood_3_1').dxNumberBox("instance").option("value"),
        'IT_Excellent_3_1': $('#IT_Excellent_3_1').dxNumberBox("instance").option("value"),
        'IT_Supper_3_1': $('#IT_Supper_3_1').dxNumberBox("instance").option("value"),

    }

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
            if(response){
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
                clear_Data();

            }


        }
    });

}
function Item_UpdateData(){

    let url='items/';
    let result=$('#IT_GroupButtons').dxRadioGroup("instance").option("value");
    let unit,unit2,unit3;

    switch (result) {
        case '0':
            unit=true;
            unit2=false;
            unit3=false;
            break;
        case '1':
            unit=false;
            unit2=true;
            unit3=false;
            break;
        case '2':
                unit=false;
                unit2=false;
                unit3=true;
                break;


        default:
            break;
    }

    let data ={
        'IT_ID':$('#IT_ID').dxTextBox("instance").option("value"),
        'IT_ParentID': $('#IT_ParentID').dxDropDownBox("instance").option("value"),
        'IT_Code': $('#IT_Code').dxTextBox("instance").option("value"),
        'IT_Name': $('#IT_Name').dxTextBox("instance").option("value"),
        'IT_ArabicName': $('#IT_ArabicName').dxTextBox("instance").option("value"),
        'IT_PartNumber': $('#IT_PartNumber').dxTextBox("instance").option("value"),
        'IT_PartNumber2': $('#IT_PartNumber2').dxTextBox("instance").option("value"),
        'IT_CPartNumber': $('#IT_CPartNumber').dxTextBox("instance").option("value"),
        'IT_GenuinePartNumber': $('#IT_GenuinePartNumber').dxTextBox("instance").option("value"),
        'IT_Company': $('#IT_Company').dxDropDownBox("instance").option("value"),
        'IT_Brand': $('#IT_Brand').dxDropDownBox("instance").option("value"),
        'IT_Kind': $('#IT_Kind').dxTextBox("instance").option("value"),
        'IT_State': $('#IT_State').dxSwitch("instance").option("value"),
        'IT_Ask_Stop': $('#IT_Ask_Stop').dxNumberBox("instance").option("value"),
        'IT_Description': $('#IT_Description').dxTextArea("instance").option("value"),
        'IT_Notes': $('#IT_Notes').dxTextArea("instance").option("value"),
        'IT_Dim': $('#IT_Dim').dxTextBox("instance").option("value"),
        'IT_Color': $('#IT_Color').dxTextBox("instance").option("value"),
        'IT_CountIn': $('#IT_CountIn').dxNumberBox("instance").option("value"),
        'IT_ItemCount': $('#IT_ItemCount').dxTextBox("instance").option("value"),
        'IT_Higx': $('#IT_Higx').dxNumberBox("instance").option("value"),
        'IT_Lowx': $('#IT_Lowx').dxNumberBox("instance").option("value"),
        'IT_ItemUnit': $('#IT_ItemUnit').dxDropDownBox("instance").option("value"),
        'IT_ItemUnit2': $('#IT_ItemUnit2').dxDropDownBox("instance").option("value"),
        'IT_ItemUnit3': $('#IT_ItemUnit3').dxDropDownBox("instance").option("value"),
        'IT_Factory2': $('#IT_Factory2').dxNumberBox("instance").option("value"),
        'IT_Factory3': $('#IT_Factory3').dxNumberBox("instance").option("value"),
        'IT_ItemUnitDefualt': unit,
        'IT_ItemUnitDefualt2': unit2,
        'IT_ItemUnitDefualt3': unit3,
        // 'IT_CurrencyGuid': $('#IT_CurrencyGuid').dxDropDownBox("instance").option("value"),
        // IT_CurrencyTrans: $('#IT_CurrencyTrans').dxTextBox("instance").option("value"),
        'IT_Normal_1_1': $('#IT_Normal_1_1').dxNumberBox("instance").option("value"),
        'IT_Mid_1_1': $('#IT_Mid_1_1').dxNumberBox("instance").option("value"),
        'IT_Good_1_1': $('#IT_Good_1_1').dxNumberBox("instance").option("value"),
        'IT_VeryGood_1_1': $('#IT_VeryGood_1_1').dxNumberBox("instance").option("value"),
        'IT_Excellent_1_1': $('#IT_Excellent_1_1').dxNumberBox("instance").option("value"),
        'IT_Supper_1_1': $('#IT_Supper_1_1').dxNumberBox("instance").option("value"),
        'IT_Normal_2_1': $('#IT_Normal_2_1').dxNumberBox("instance").option("value"),
        'IT_Mid_2_1': $('#IT_Mid_2_1').dxNumberBox("instance").option("value"),
        'IT_Good_2_1': $('#IT_Good_2_1').dxNumberBox("instance").option("value"),
        'IT_VeryGood_2_1': $('#IT_VeryGood_2_1').dxNumberBox("instance").option("value"),
        'IT_Excellent_2_1': $('#IT_Excellent_2_1').dxNumberBox("instance").option("value"),
        'IT_Supper_2_1': $('#IT_Supper_2_1').dxNumberBox("instance").option("value"),
        'IT_Normal_3_1': $('#IT_Normal_3_1').dxNumberBox("instance").option("value"),
        'IT_Mid_3_1': $('#IT_Mid_3_1').dxNumberBox("instance").option("value"),
        'IT_Good_3_1': $('#IT_Good_3_1').dxNumberBox("instance").option("value"),
        'IT_VeryGood_3_1': $('#IT_VeryGood_3_1').dxNumberBox("instance").option("value"),
        'IT_Excellent_3_1': $('#IT_Excellent_3_1').dxNumberBox("instance").option("value"),
        'IT_Supper_3_1': $('#IT_Supper_3_1').dxNumberBox("instance").option("value"),

    }

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        type: "PUT",
        url: url + 'update',
        data: data,
        success: function (response) {
            if(response){
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
            }


        }
    });

}
function Item_Checking(){
    if ($('#IT_ParentID').dxDropDownBox("instance").option("value") == '') {
        error_IT_ParentID = "Required";
        $('#error_IT_ParentID').text(error_IT_ParentID);
    } else {
        error_IT_ParentID = "";
        $('#error_IT_ParentID').text(error_IT_ParentID);
    }
    if ($('#IT_PartNumber').dxTextBox("instance").option("value") == '') {
        error_IT_PartNumber = "Required";
        $('#error_IT_PartNumber').text(error_IT_PartNumber);
    } else {
        error_IT_PartNumber = "";
        $('#error_IT_PartNumber').text(error_IT_PartNumber);
    }
    if ($('#IT_PartNumber2').dxTextBox("instance").option("value") == '') {
        error_IT_PartNumber2 = "Required";
        $('#error_IT_PartNumber2').text(error_IT_PartNumber2);
    } else {
        error_IT_PartNumber2 = "";
        $('#error_IT_PartNumber2').text(error_IT_PartNumber2);
    }
    if ($('#IT_Name').dxTextBox("instance").option("value") == '') {
        error_IT_Name = "Required";
        $('#error_IT_Name').text(error_IT_Name);
    } else {
        error_IT_Name = "";
        $('#error_IT_Name').text(error_IT_Name);
    }
    if ($('#IT_ArabicName').dxTextBox("instance").option("value") == '') {
        error_IT_ArabicName = "Required";
        $('#error_IT_ArabicName').text(error_IT_ArabicName);
    } else {
        error_IT_ArabicName = "";
        $('#error_IT_ArabicName').text(error_IT_ArabicName);
    }
    if ($('#IT_CPartNumber').dxTextBox("instance").option("value") == '') {
        error_IT_CPartNumber = "Required";
        $('#error_IT_CPartNumber').text(error_IT_CPartNumber);
    } else {
        error_IT_CPartNumber = "";
        $('#error_IT_CPartNumber').text(error_IT_CPartNumber);
    }
    if ($('#IT_GenuinePartNumber').dxTextBox("instance").option("value") == '') {
        error_IT_GenuinePartNumber = "Required";
        $('#error_IT_GenuinePartNumber').text(error_IT_GenuinePartNumber);
    } else {
        error_IT_GenuinePartNumber = "";
        $('#error_IT_GenuinePartNumber').text(error_IT_GenuinePartNumber);
    }
    if ($('#IT_Company').dxDropDownBox("instance").option("value") == '') {
        error_IT_Company = "Required";
        $('#error_IT_Company').text(error_IT_Company);
    } else {
        error_IT_Company = "";
        $('#error_IT_Company').text(error_IT_Company);
    }
    if ($('#IT_Kind').dxTextBox("instance").option("value") == '') {
        error_IT_Kind = "Required";
        $('#error_IT_Kind').text(error_IT_Kind);
    } else {
        error_IT_Kind = "";
        $('#error_IT_Kind').text(error_IT_Kind);
    }
    if ($('#IT_Brand').dxDropDownBox("instance").option("value") == '') {
        error_IT_Brand = "Required";
        $('#error_IT_Brand').text(error_IT_Brand);
    } else {
        error_IT_Brand = "";
        $('#error_IT_Brand').text(error_IT_Brand);
    }


}


//#endregion

//#region Buttons

$(document).ready(function () {
    $("#btnAddNew").dxButton({
        stylingMode: "contained",
        text: "اضافة",
        type: "success",
        icon:'add',
        width: 120,
        onClick() {
                clear_Data();
                let Cpartnumber='';
                Cpartnumber = generateRandomNumber();
                $.ajax({
                    type: "GET",
                    url: "itemsfill/checkcpartnumber",
                    data: {IT_C_PartNumber:Cpartnumber},
                    success: function (response) {
                        if(response.getCpartNumber){
                            $('#IT_CPartNumber').dxTextBox("instance").option({
                                value:Cpartnumber + " "+" Duplicate PartNumber!",
                                stylingMode:"filled",
                                inputAttr:{
                                    style:"background-color:red;color:white",
                                }
                            });
                        }else{
                            $('#IT_CPartNumber').dxTextBox("instance").option("value",Cpartnumber);
                        }
                    }
                });


        },
    });
    $("#btnSave").dxButton({
        stylingMode: "contained",
        text: "حفظ",
        type: "default",
        icon:'check',
        width: 120,
        onClick() {
           let id=$('#IT_ID').dxTextBox("instance").option("value");

           if(id == null || id =="")
           {
                Item_Checking();
                if(error_IT_ParentID != '' || error_IT_Name !='' || error_IT_Company !='' || error_IT_Kind !=''
                    || error_IT_PartNumber !='' || error_IT_PartNumber2 != '' || error_IT_CPartNumber != ''
                    || error_IT_GenuinePartNumber !='' || error_IT_ArabicName !='' || error_IT_Brand !='')
                    {
                    return false;
                }else{
                    Item_InsertData();
                }

           }else{
            Item_Checking();
            if(error_IT_ParentID != '' || error_IT_Name !='' || error_IT_Company !='' || error_IT_Kind !=''
                || error_IT_PartNumber !='' || error_IT_PartNumber2 != '' || error_IT_CPartNumber != ''
                || error_IT_GenuinePartNumber !='' || error_IT_ArabicName !='' || error_IT_Brand !='')
                {
                return false;
            }else{
                Item_UpdateData();
            }
           }
        },
    });


});

//#endregion End Buttons


//#region Component of item
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
        $("#IT_ID").dxTextBox({
            placeholder: "Guid of Item",
            inputAttr: { "aria-label": "ItemGuid" },

        });
    });
    $(() => {
        $("#IT_Name").dxTextBox({
            placeholder: "ادخل اسم المادة",
            inputAttr: { "aria-label": "Name" },

        });
    });


    $(() => {
        $("#IT_Code").dxTextBox({
            placeholder: "الكود التعريفي",
            inputAttr: { "aria-label": "Item Code" },
            readOnly:true,

        });
    });
    $(() => {
        $("#IT_ArabicName").dxTextBox({
            placeholder: "اسم المادة بالعربي",
            inputAttr: { "aria-label": "Arabic Name" },

        });
    });
    $(() => {
       $("#IT_PartNumber").dxTextBox({
            placeholder: "xxxxx-xxxxx",
            inputAttr: { "aria-label": "Part Number" },

        });
        var textBoxInputElement = $("#IT_PartNumber input.dx-texteditor-input");
        textBoxInputElement.on('input', function(event) {
            // Handle the 'input' event here if needed
            var newText = event.target.value;
            // var numericValue = newText.replace(/\D/g, '');
            // event.target.value = numericValue;

            $.ajax({
                type: "GET",
                url: "itemsfill/checkpartnumber",
                data: {PartNumber:newText},
                success: function (response) {
                    if(response.getPartNumber){
                        $('#IT_PartNumber').dxTextBox("instance").option({
                            value:response.getPartNumber,
                            stylingMode:"filled",
                                inputAttr:{
                                    style:"background-color:red;color:white",
                                }
                        })
                    }else{
                        $('#IT_PartNumber').dxTextBox("instance").option({
                            stylingMode:"outlined",
                            inputAttr:{style:""}

                        })
                    }
                }
            });

        });

    });
    $(() => {
        $("#IT_PartNumber2").dxTextBox({
            placeholder: "xxxxxxxxxx",
            inputAttr: { "aria-label": "Part Number2" },

        });
        var textBoxInputElement = $("#IT_PartNumber2 input.dx-texteditor-input");
        textBoxInputElement.on('input', function(event) {
            // Handle the 'input' event here if needed
            var newText = event.target.value;
            // var numericValue = newText.replace(/\D/g, '');
            // event.target.value = numericValue;

            $.ajax({
                type: "GET",
                url: "itemsfill/checkpartnumber2",
                data: {PartNumber2:newText},
                success: function (response) {
                    console.log(response.getPartNumber2);
                    if(response.getPartNumber2){
                        $('#IT_PartNumber2').dxTextBox("instance").option({
                            value:response.getPartNumber2,
                            stylingMode:"filled",
                                inputAttr:{
                                    style:"background-color:red;color:white",
                                }
                        })
                    }else{
                        $('#IT_PartNumber2').dxTextBox("instance").option({
                            stylingMode:"outlined",
                            inputAttr:{style:""}

                        })
                    }
                }
            });

        });
    });
    $(() => {
        $("#IT_CPartNumber").dxTextBox({
            placeholder: "xxxxxxxxxx",
            inputAttr: { "aria-label": "CPart Number" },
            readOnly:true,

        });
    });
    $(() => {
        $("#IT_GenuinePartNumber").dxTextBox({
            placeholder: "xxxxxxxxxx",
            inputAttr: { "aria-label": "Genuine Part" },

        });
    });
    $(() => {
        $("#IT_Kind").dxTextBox({
            placeholder: "اصلي \ عادي",
            inputAttr: { "aria-label": "Item Kind" },

        });
    });
    $(() => {
        $("#IT_Ask_Stop").dxNumberBox({
            placeholder: "0",
            inputAttr: { "aria-label": "Ask Limit" },
            // Specify any additional options here
            value: null, // Initial value, you can set this to any default value you want
            showSpinButtons: true, // Enable spin buttons for easier value adjustment
            format: "#0", // Format the number without decimal places
            step: 1, // Set the step for incremental adjustments
            useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
            // Add any other options you need

            // Use the 'onValueChanged' event to perform actions when the value changes
            onValueChanged: function(e) {
                // Your custom logic here if needed
            }




        });
    });
    $(() => {
        $("#IT_Description").dxTextArea({
            // ...
            minHeight: 50,
            maxHeight: 300,
            autoResizeEnabled: true,
            // value: longText,
            maxLength: 500,
            label: "تفاصيل المادة",
        });
    });
    $(() => {
        $("#IT_Notes").dxTextArea({
            // ...
            minHeight: 50,
            maxHeight: 300,
            autoResizeEnabled: true,
            // value: longText,
            maxLength: 500,
            label: "ملاحظات",
        });
    });
    $(() => {
        $("#IT_State").dxSwitch({});
    });
    $(() => {
        $("#IT_Factory2").dxNumberBox({
            placeholder: "قيمة التعادل",
            inputAttr: { "aria-label": "Factory" },
            // Specify any additional options here
            value: null, // Initial value, you can set this to any default value you want
            showSpinButtons: true, // Enable spin buttons for easier value adjustment
            format: "#0", // Format the number without decimal places
            step: 1, // Set the step for incremental adjustments
            useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
            // Add any other options you need

            // Use the 'onValueChanged' event to perform actions when the value changes
            onValueChanged: function(e) {
                // Your custom logic here if needed
            }

        });
    });
    $(() => {
        $("#IT_Factory3").dxNumberBox({
            placeholder: "قيمة التعادل",
            inputAttr: { "aria-label": "Factory" },
            // Specify any additional options here
            value: null, // Initial value, you can set this to any default value you want
            showSpinButtons: true, // Enable spin buttons for easier value adjustment
            format: "#0", // Format the number without decimal places
            step: 1, // Set the step for incremental adjustments
            useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
            // Add any other options you need

            // Use the 'onValueChanged' event to perform actions when the value changes
            onValueChanged: function(e) {
                // Your custom logic here if needed
            }

        });
    });
    $(() => {
        const radioButtonOptions = [
            {text:"الوحدة1", value:'0'},
            {text:"الوحدة2", value:'1'},
            {text:"الوحدة3", value:'2'},
          ];
        $("#IT_GroupButtons").dxRadioGroup({
          items: radioButtonOptions,
          value:radioButtonOptions,
          valueExpr:"value",
          displayExpr:"text",
        //   onValueChanged: function (e) {
        //     // console.log(e.value);//  console.log(e.value);  //   Log the selected value to the console
        //   },

        });

    });

    $(() => {
        $("#IT_Dim").dxTextBox({
            placeholder: "قياس المادة",
            inputAttr: { "aria-label": "Dim" },

        });
    });
    $(() => {
        $("#IT_Color").dxTextBox({
            placeholder: "لون المادة",
            inputAttr: { "aria-label": "Color" },

        });
    });
    $(() => {
        $("#IT_CountIn").dxNumberBox({
            placeholder: "العدد في",
            inputAttr: { "aria-label": "Count In" },
            // Specify any additional options here
            value: null, // Initial value, you can set this to any default value you want
            showSpinButtons: true, // Enable spin buttons for easier value adjustment
            format: "#0", // Format the number without decimal places
            step: 1, // Set the step for incremental adjustments
            useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
            // Add any other options you need

            // Use the 'onValueChanged' event to perform actions when the value changes
            onValueChanged: function(e) {
                // Your custom logic here if needed
            }

        });
    });
    $(() => {
        $("#IT_ItemCount").dxTextBox({
            placeholder: "كمية المادة",
            inputAttr: { "aria-label": "Item Count" },
            readOnly:true,

        });
    });
    $(() => {
        $("#IT_Higx").dxNumberBox({
            placeholder: "اعلى حد",
            inputAttr: { "aria-label": "High" },
            // Specify any additional options here
            value: null, // Initial value, you can set this to any default value you want
            showSpinButtons: true, // Enable spin buttons for easier value adjustment
            format: "#0", // Format the number without decimal places
            step: 1, // Set the step for incremental adjustments
            useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
            // Add any other options you need

            // Use the 'onValueChanged' event to perform actions when the value changes
            onValueChanged: function(e) {
                // Your custom logic here if needed
            }

        });
    });
    $(() => {
        $("#IT_Lowx").dxNumberBox({
            placeholder: "اقل حد",
            inputAttr: { "aria-label": "Low" },
            // Specify any additional options here
            value: null, // Initial value, you can set this to any default value you want
            showSpinButtons: true, // Enable spin buttons for easier value adjustment
            format: "#0", // Format the number without decimal places
            step: 1, // Set the step for incremental adjustments
            useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
            // Add any other options you need

            // Use the 'onValueChanged' event to perform actions when the value changes
            onValueChanged: function(e) {
                // Your custom logic here if needed
            }

        });
    });
    $(() => {
        $("#IT_Normal_1_1").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Price First" },
            // Specify any additional options here
            value: null, // Initial value, you can set this to any default value you want
            showSpinButtons: true, // Enable spin buttons for easier value adjustment
            format: "#0", // Format the number without decimal places
            step: 1, // Set the step for incremental adjustments
            useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
            // Add any other options you need

            // Use the 'onValueChanged' event to perform actions when the value changes
            onValueChanged: function(e) {
                // Your custom logic here if needed
            }

        });
    });
    $(() => {
        $("#IT_Mid_1_1").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Price Second" },
            // Specify any additional options here
            value: null, // Initial value, you can set this to any default value you want
            showSpinButtons: true, // Enable spin buttons for easier value adjustment
            format: "#0", // Format the number without decimal places
            step: 1, // Set the step for incremental adjustments
            useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
            // Add any other options you need

            // Use the 'onValueChanged' event to perform actions when the value changes
            onValueChanged: function(e) {
                // Your custom logic here if needed
            }
        });
    });
    $(() => {
        $("#IT_Good_1_1").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Price Third" },
            // Specify any additional options here
            value: null, // Initial value, you can set this to any default value you want
            showSpinButtons: true, // Enable spin buttons for easier value adjustment
            format: "#0", // Format the number without decimal places
            step: 1, // Set the step for incremental adjustments
            useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
            // Add any other options you need

            // Use the 'onValueChanged' event to perform actions when the value changes
            onValueChanged: function(e) {
                // Your custom logic here if needed
            }
        });
    });
    $(() => {
        $("#IT_VeryGood_1_1").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Price Fourth" },
            // Specify any additional options here
            value: null, // Initial value, you can set this to any default value you want
            showSpinButtons: true, // Enable spin buttons for easier value adjustment
            format: "#0", // Format the number without decimal places
            step: 1, // Set the step for incremental adjustments
            useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
            // Add any other options you need

            // Use the 'onValueChanged' event to perform actions when the value changes
            onValueChanged: function(e) {
                // Your custom logic here if needed
            }

        });
    });
    $(() => {
        $("#IT_Excellent_1_1").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Price Fifth" },
            // Specify any additional options here
            value: null, // Initial value, you can set this to any default value you want
            showSpinButtons: true, // Enable spin buttons for easier value adjustment
            format: "#0", // Format the number without decimal places
            step: 1, // Set the step for incremental adjustments
            useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
            // Add any other options you need

            // Use the 'onValueChanged' event to perform actions when the value changes
            onValueChanged: function(e) {
                // Your custom logic here if needed
            }

        });
    });
    $(() => {
        $("#IT_Supper_1_1").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Price Sixth" },
            // Specify any additional options here
            value: null, // Initial value, you can set this to any default value you want
            showSpinButtons: true, // Enable spin buttons for easier value adjustment
            format: "#0", // Format the number without decimal places
            step: 1, // Set the step for incremental adjustments
            useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
            // Add any other options you need

            // Use the 'onValueChanged' event to perform actions when the value changes
            onValueChanged: function(e) {
                // Your custom logic here if needed
            }

        });
    });

    $(() => {
        $("#IT_Normal_2_1").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Price First" },
            // Specify any additional options here
                value: null, // Initial value, you can set this to any default value you want
                showSpinButtons: true, // Enable spin buttons for easier value adjustment
                format: "#0", // Format the number without decimal places
                step: 1, // Set the step for incremental adjustments
                useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
                // Add any other options you need

                // Use the 'onValueChanged' event to perform actions when the value changes
                onValueChanged: function(e) {
                    // Your custom logic here if needed
                }

        });
    });
    $(() => {
        $("#IT_Mid_2_1").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Price Second" },
            // Specify any additional options here
                value: null, // Initial value, you can set this to any default value you want
                showSpinButtons: true, // Enable spin buttons for easier value adjustment
                format: "#0", // Format the number without decimal places
                step: 1, // Set the step for incremental adjustments
                useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
                // Add any other options you need

                // Use the 'onValueChanged' event to perform actions when the value changes
                onValueChanged: function(e) {
                    // Your custom logic here if needed
                }

        });
    });
    $(() => {
        $("#IT_Good_2_1").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Price Third" },
            // Specify any additional options here
                value: null, // Initial value, you can set this to any default value you want
                showSpinButtons: true, // Enable spin buttons for easier value adjustment
                format: "#0", // Format the number without decimal places
                step: 1, // Set the step for incremental adjustments
                useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
                // Add any other options you need

                // Use the 'onValueChanged' event to perform actions when the value changes
                onValueChanged: function(e) {
                    // Your custom logic here if needed
                }

        });
    });
    $(() => {
        $("#IT_VeryGood_2_1").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Price Fourth" },
            // Specify any additional options here
                value: null, // Initial value, you can set this to any default value you want
                showSpinButtons: true, // Enable spin buttons for easier value adjustment
                format: "#0", // Format the number without decimal places
                step: 1, // Set the step for incremental adjustments
                useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
                // Add any other options you need

                // Use the 'onValueChanged' event to perform actions when the value changes
                onValueChanged: function(e) {
                    // Your custom logic here if needed
                }

        });
    });
    $(() => {
        $("#IT_Excellent_2_1").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Price Fifth" },
            // Specify any additional options here
                value: null, // Initial value, you can set this to any default value you want
                showSpinButtons: true, // Enable spin buttons for easier value adjustment
                format: "#0", // Format the number without decimal places
                step: 1, // Set the step for incremental adjustments
                useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
                // Add any other options you need

                // Use the 'onValueChanged' event to perform actions when the value changes
                onValueChanged: function(e) {
                    // Your custom logic here if needed
                }

        });
    });
    $(() => {
        $("#IT_Supper_2_1").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Price Sixth" },
            // Specify any additional options here
                value: null, // Initial value, you can set this to any default value you want
                showSpinButtons: true, // Enable spin buttons for easier value adjustment
                format: "#0", // Format the number without decimal places
                step: 1, // Set the step for incremental adjustments
                useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
                // Add any other options you need

                // Use the 'onValueChanged' event to perform actions when the value changes
                onValueChanged: function(e) {
                    // Your custom logic here if needed
                }

        });
    });


    $(() => {
        $("#IT_Normal_3_1").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Price First" },
            // Specify any additional options here
                value: null, // Initial value, you can set this to any default value you want
                showSpinButtons: true, // Enable spin buttons for easier value adjustment
                format: "#0", // Format the number without decimal places
                step: 1, // Set the step for incremental adjustments
                useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
                // Add any other options you need

                // Use the 'onValueChanged' event to perform actions when the value changes
                onValueChanged: function(e) {
                    // Your custom logic here if needed
                }

        });
    });
    $(() => {
        $("#IT_Mid_3_1").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Price Second" },
            // Specify any additional options here
                value: null, // Initial value, you can set this to any default value you want
                showSpinButtons: true, // Enable spin buttons for easier value adjustment
                format: "#0", // Format the number without decimal places
                step: 1, // Set the step for incremental adjustments
                useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
                // Add any other options you need

                // Use the 'onValueChanged' event to perform actions when the value changes
                onValueChanged: function(e) {
                    // Your custom logic here if needed
                }

        });
    });
    $(() => {
        $("#IT_Good_3_1").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Price Third" },
            // Specify any additional options here
                value: null, // Initial value, you can set this to any default value you want
                showSpinButtons: true, // Enable spin buttons for easier value adjustment
                format: "#0", // Format the number without decimal places
                step: 1, // Set the step for incremental adjustments
                useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
                // Add any other options you need

                // Use the 'onValueChanged' event to perform actions when the value changes
                onValueChanged: function(e) {
                    // Your custom logic here if needed
                }

        });
    });
    $(() => {
        $("#IT_VeryGood_3_1").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Price Fourth" },
            // Specify any additional options here
                value: null, // Initial value, you can set this to any default value you want
                showSpinButtons: true, // Enable spin buttons for easier value adjustment
                format: "#0", // Format the number without decimal places
                step: 1, // Set the step for incremental adjustments
                useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
                // Add any other options you need

                // Use the 'onValueChanged' event to perform actions when the value changes
                onValueChanged: function(e) {
                    // Your custom logic here if needed
                }

        });
    });
    $(() => {
        $("#IT_Excellent_3_1").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Price Fifth" },
            // Specify any additional options here
                value: null, // Initial value, you can set this to any default value you want
                showSpinButtons: true, // Enable spin buttons for easier value adjustment
                format: "#0", // Format the number without decimal places
                step: 1, // Set the step for incremental adjustments
                useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
                // Add any other options you need

                // Use the 'onValueChanged' event to perform actions when the value changes
                onValueChanged: function(e) {
                    // Your custom logic here if needed
                }

        });
    });
    $(() => {
        $("#IT_Supper_3_1").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Price Sixth" },
            // Specify any additional options here
                value: null, // Initial value, you can set this to any default value you want
                showSpinButtons: true, // Enable spin buttons for easier value adjustment
                format: "#0", // Format the number without decimal places
                step: 1, // Set the step for incremental adjustments
                useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
                // Add any other options you need

                // Use the 'onValueChanged' event to perform actions when the value changes
                onValueChanged: function(e) {
                    // Your custom logic here if needed
                }

        });
    });
    $(() => {
        $("#IT_LastPrice").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Last Price" },
            // Specify any additional options here
                value: null, // Initial value, you can set this to any default value you want
                showSpinButtons: true, // Enable spin buttons for easier value adjustment
                format: "#0", // Format the number without decimal places
                step: 1, // Set the step for incremental adjustments
                useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
                // Add any other options you need

                // Use the 'onValueChanged' event to perform actions when the value changes
                onValueChanged: function(e) {
                    // Your custom logic here if needed
                }

        });
    });
    $(() => {
        $("#IT_LastPrice2").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Last Price" },
            // Specify any additional options here
                value: null, // Initial value, you can set this to any default value you want
                showSpinButtons: true, // Enable spin buttons for easier value adjustment
                format: "#0", // Format the number without decimal places
                step: 1, // Set the step for incremental adjustments
                useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
                // Add any other options you need

                // Use the 'onValueChanged' event to perform actions when the value changes
                onValueChanged: function(e) {
                    // Your custom logic here if needed
                }

        });
    });
    $(() => {
        $("#IT_LastPrice3").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Last Price" },
            // Specify any additional options here
                value: null, // Initial value, you can set this to any default value you want
                showSpinButtons: true, // Enable spin buttons for easier value adjustment
                format: "#0", // Format the number without decimal places
                step: 1, // Set the step for incremental adjustments
                useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
                // Add any other options you need

                // Use the 'onValueChanged' event to perform actions when the value changes
                onValueChanged: function(e) {
                    // Your custom logic here if needed
                }

        });
    });
    $(() => {
        $("#IT_Average").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Average" },
            // Specify any additional options here
                value: null, // Initial value, you can set this to any default value you want
                showSpinButtons: true, // Enable spin buttons for easier value adjustment
                format: "#0", // Format the number without decimal places
                step: 1, // Set the step for incremental adjustments
                useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
                // Add any other options you need

                // Use the 'onValueChanged' event to perform actions when the value changes
                onValueChanged: function(e) {
                    // Your custom logic here if needed
                }

        });
    });
    $(() => {
        $("#IT_Average2").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Average" },
            // Specify any additional options here
                value: null, // Initial value, you can set this to any default value you want
                showSpinButtons: true, // Enable spin buttons for easier value adjustment
                format: "#0", // Format the number without decimal places
                step: 1, // Set the step for incremental adjustments
                useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
                // Add any other options you need

                // Use the 'onValueChanged' event to perform actions when the value changes
                onValueChanged: function(e) {
                    // Your custom logic here if needed
                }

        });
    });
    $(() => {
        $("#IT_Average3").dxNumberBox({
            placeholder: "0.0",
            inputAttr: { "aria-label": "Average" },
            // Specify any additional options here
                value: null, // Initial value, you can set this to any default value you want
                showSpinButtons: true, // Enable spin buttons for easier value adjustment
                format: "#0", // Format the number without decimal places
                step: 1, // Set the step for incremental adjustments
                useLargeSpinButtons: true, // Use larger spin buttons for better touch usability
                // Add any other options you need

                // Use the 'onValueChanged' event to perform actions when the value changes
                onValueChanged: function(e) {
                    // Your custom logic here if needed
                }

        });
    });

});

//#endregion

//#region  Other Functions
function generateRandomNumber() {
    const min = 1000000000; // Smallest 10-digit number (10 zeroes)
    const max = 9999999999; // Largest 10-digit number (nine nines)
    // Generate a random number between min and max (inclusive)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNumber;
  }
function reloadRadioGroup(){
    const radioButtonOptions = [
        {text:"الوحدة1", value:'0'},
        {text:"الوحدة2", value:'1'},
        {text:"الوحدة3", value:'2'},
      ];
     $("#IT_GroupButtons").dxRadioGroup({
      items: radioButtonOptions,
      value:radioButtonOptions,
      valueExpr:"value",
      displayExpr:"text",
    //   onValueChanged: function (e) {
    //     // console.log(e.value);//  console.log(e.value);  //   Log the selected value to the console
    //   },

    });
    $('#IT_GroupButtons').addClass('#ItemRadio-container');


}




//#endregion


