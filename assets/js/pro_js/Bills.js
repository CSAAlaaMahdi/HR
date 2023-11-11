Bills_fetch();
Bills_filldata();
setting();
// Begin Create Components of Store Page
$(document).ready(function () {


    $((message) => {
        $("#notificationContainer").dxToast({
            message: message,
            position: {
                my: "top right",
                at: "top right",
                of: window,
            },
            width: 300,
            height: 100,
            animation: {
                show: { type: "fade", duration: 400, from: 0, to: 1 },
                hide: { type: "fade", duration: 400, from: 1, to: 0 },
            },
            closeOnClick: true,
            displayTime: 4000, // Adjust the display time as per your preference
        });
    });
    $(() => {
        $("#H_Pay_Type").dxSwitch({
            onText:"نقدي",
            offText:"آجل",
            // visible:Number(response.BillSettingState.Pay_Type) === 1,
            onValueChanged: function(e) {
                // This function will be called when the switch value changes
                if(e.value){
                    let onText = $('#H_Pay_Type').dxSwitch('instance').option("onText");
                   $('#lb_PayType').html(onText);
                   let totalBill = Number($("#F_Total_Price_Bill").dxTextBox("instance").option("value"));
                   $("#H_Cash_Amount").dxTextBox("instance").option("value",totalBill);

                }
                else{

                    $("#H_Cash_Amount").dxTextBox("instance").option("value",0);
                    let offText = $('#H_Pay_Type').dxSwitch('instance').option("offText");
                   $('#lb_PayType').html(offText);

                }

            }
        });
        // if(Number(response.BillSettingState.Pay_Type) === 0)
        //     $('#lb_PayType').hide();
        // else $('#lb_PayType').show();
    });
    $(() => {

        $("#H_Cash_Amount").dxTextBox({
            placeholder: "قيمة التسديد",
            inputAttr: { "aria-label": "Cash Amount" },
            readOnly: true,
            valueFormat:"#0.00",
            // visible:Number(response.BillSettingState.Header_Cash_Visible) === 1
        });
        // if(Number(response.BillSettingState.Header_Cash_Visible) === 0)
        // {
        //      $('#H_CashAmount_Lable').hide();
        // }

        // else    {
        //     $("#H_CashAmount_Label").show();
        // }
    });
    $(() => {
        $("#H_Guid").dxTextBox({
            placeholder: "Guid",
            inputAttr: { "aria-label": "Guid" },
        });
    });
    $(() => {
        $("#H_Bill_Number").dxTextBox({
            placeholder: "رقم الفاتورة",
            inputAttr: { "aria-label": "Bill Number" },
            readOnly: true,
        });
    });
    $(() => {
        const now = new Date();
        $("#H_Bill_Date").dxDateBox({
            label: "Date and time",
            labelMode: "floating",
            type: "date",
            value: now,
            dispalyFormat: "dd/MM/yyyy",
            onValueChanged: function (e) {
                var selectedDate = e.value;
                var formattedDate = new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                }).format(selectedDate);
                console.log("Selected Date:", formattedDate);
            },
        });
    });

    $(() => {
        $("#H_Currency_Equal").dxTextBox({
            placeholder: "القيمة",
            inputAttr: { "aria-label": "Equal" },
            readOnly: false,
        });
    });


    $(() => {
        $("#H_Note_Header").dxTextArea({
            // ...
            minHeight: 50,
            maxHeight: 300,
            autoResizeEnabled: true,
            // value: longText,
            maxLength: 500,
            label: "البيان",
        });
    });
    $(() => {

        $("#F_Total_Price_Bill").dxTextBox({
            placeholder: "اجمالي السعر",
            inputAttr: { "aria-label": "Total " },
            readOnly: true,
            dataType:"number",
            format:"#0.00",
            onValueChanged: function(e) {
                var formattedValue = e.component.option("value").toLocaleString();
                e.component.option("value", formattedValue);
            },

        });
    });
    $(() => {
        $("#F_Guid").dxTextBox({
            placeholder: "Guid",
            inputAttr: { "aria-label": "Guid" },
            readOnly: true,
        });
    });
    $(() => {
        $("#F_Item_Discount").dxTextBox({
            placeholder: "خصم المواد",
            inputAttr: { "aria-label": "Item Discount" },
            readOnly: true,
            dataType:"number",
            format:"#0.00",
            value:0,
             cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "bold"; // Set the desired font weight
                                    let fontSize = "16px";
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
                                        })
                                        .text(formattedValue)
                                        .appendTo(container);
                                }
        });
    });
    $(() => {
        $("#F_Bill_Discount").dxTextBox({
            placeholder: "خصم الفاتورة",
            inputAttr: { "aria-label": "Bill Discount" },
            readOnly: true,
            value:0,
            dataType: "number",
             cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "bold"; // Set the desired font weight
                                    let fontSize = "16px";
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
                                        })
                                        .text(formattedValue)
                                        .appendTo(container);
                                }
        });
    });
    $(() => {
        $("#F_Total_Discount").dxTextBox({
            placeholder: "اجمالي الخصم",
            inputAttr: { "aria-label": "Total Discount" },
            readOnly: true,
            value:0,
             cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "bold"; // Set the desired font weight
                                    let fontSize = "16px";
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
                                        })
                                        .text(formattedValue)
                                        .appendTo(container);
                                }
        });
    });
    $(() => {
        $("#F_Bill_AddAmount").dxTextBox({
            placeholder: "الاضافة",
            inputAttr: { "aria-label": "AddAmount" },
            readOnly: true,
            value: 0,
             cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "bold"; // Set the desired font weight
                                    let fontSize = "16px";
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
                                        })
                                        .text(formattedValue)
                                        .appendTo(container);
                                }
        });
    });
    $(() => {
        $("#F_Item_Add").dxTextBox({
            placeholder: "اضافة للمواد",
            inputAttr: { "aria-label": "Item Add" },
            readOnly: true,
            value: 0,
             cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "bold"; // Set the desired font weight
                                    let fontSize = "16px";
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
                                        })
                                        .text(formattedValue)
                                        .appendTo(container);
                                }
        });
    });
    $(() => {
        $("#F_Currency_Guid").dxTextBox({
            placeholder: "العملة",
            inputAttr: { "aria-label": "Total " },
            readOnly: true,
        });
    });
    $(() => {
        $("#F_Currency_Equal").dxTextBox({
            placeholder: "القيمة",
            inputAttr: { "aria-label": "Discount" },
            readOnly: true,
            onValueChanged: function (e){
                let currencyGuid = $("#F_Currency_Guid").dxTextBox("instance").option("value");
                let currencyEqual = Number(e.value);
                let girdData = $("#gridContainer").dxDataGrid("instance").option("dataSource");
                let grid = $('#gridContainer').dxDataGrid('instance');
                if(girdData.length > 0 || girdData.length != null)
                {
                    for (let index = 0; index < girdData.length; index++) {
                        let Currency_Equal = Number(girdData[index].Currency_Equal);

                        if(currencyEqual > Currency_Equal){
                            if(Currency_Equal === 1)
                            {
                                let ItemPrice = Number(girdData[index].Item_Price);
                                girdData[index].Item_Price = ItemPrice / currencyEqual;
                                girdData[index].Item_Price_Total = Number(girdData[index].Item_Price) * Number(girdData[index].Item_Count);
                                let ItemDiscount = Number(girdData[index].Item_Discount);
                                girdData[index].Item_Discount =ItemDiscount / currencyEqual;
                                let ItemExtra = Number(girdData[index].Item_Extra) ;
                                girdData[index].Item_Extra = ItemExtra / currencyEqual;
                                let FinalPrice = Number(girdData[index].Item_Price_Final) ;
                                girdData[index].Item_Price_Final = FinalPrice / currencyEqual;
                                let CostPrice = Number(girdData[index].Cost_Price) ;
                                girdData[index].Cost_Price = CostPrice / currencyEqual;
                                girdData[index].Currency_Guid = currencyGuid;
                                girdData[index].Currency_Equal = currencyEqual;
                                let discountItem = parseFloat($("#F_Item_Discount").dxTextBox("instance").option("value"));
                                let addingItem = parseFloat($("#F_Item_Add").dxTextBox("instance").option("value"));
                                let addBill = parseFloat($("#F_Bill_AddAmount").dxTextBox("instance").option("value"));
                                let discountBill = parseFloat($("#F_Bill_Discount").dxTextBox("instance").option("value"));
                                let totaldiscount = parseFloat($("#F_Total_Discount").dxTextBox("instance").option("value"));
                                $("#F_Item_Discount").dxTextBox("instance").option("value",discountItem / currencyEqual);
                                $("#F_Item_Add").dxTextBox("instance").option("value",addingItem / currencyEqual );
                                $("#F_Bill_AddAmount").dxTextBox("instance").option("value",addBill / currencyEqual );
                                $("#F_Bill_Discount").dxTextBox("instance").option("value",discountBill / currencyEqual );
                                $("#F_Total_Discount").dxTextBox("instance").option("value",totaldiscount / currencyEqual);
                            }
                            else{

                                let ItemPrice = Number(girdData[index].Item_Price);
                                girdData[index].Item_Price = (ItemPrice * Number(girdData[index].Currency_Equal)) / currencyEqual;
                                girdData[index].Item_Price_Total = Number(girdData[index].Item_Price) * Number(girdData[index].Item_Count);
                                let ItemDiscount = Number(girdData[index].Item_Discount);
                                girdData[index].Item_Discount =(ItemDiscount * Number(girdData[index].Currency_Equal)) / currencyEqual;
                                let ItemExtra = Number(girdData[index].Item_Extra) ;
                                girdData[index].Item_Extra = (ItemExtra * Number(girdData[index].Currency_Equal)) / currencyEqual;
                                let FinalPrice = Number(girdData[index].Item_Price_Final) ;
                                girdData[index].Item_Price_Final = (FinalPrice * Number(girdData[index].Currency_Equal)) / currencyEqual;
                                let CostPrice = Number(girdData[index].Cost_Price) ;
                                girdData[index].Cost_Price = (CostPrice * Number(girdData[index].Currency_Equal)) / currencyEqual;
                                girdData[index].Currency_Guid = currencyGuid;
                                girdData[index].Currency_Equal = currencyEqual;
                                let discountItem = parseFloat($("#F_Item_Discount").dxTextBox("instance").option("value"));
                                let addingItem = parseFloat($("#F_Item_Add").dxTextBox("instance").option("value"));
                                let addBill = parseFloat($("#F_Bill_AddAmount").dxTextBox("instance").option("value"));
                                let discountBill = parseFloat($("#F_Bill_Discount").dxTextBox("instance").option("value"));
                                let totaldiscount = parseFloat($("#F_Total_Discount").dxTextBox("instance").option("value"));
                                $("#F_Item_Discount").dxTextBox("instance").option("value",(discountItem * Currency_Equal) / currencyEqual);
                                $("#F_Item_Add").dxTextBox("instance").option("value",(addingItem * Currency_Equal) / currencyEqual );
                                $("#F_Bill_AddAmount").dxTextBox("instance").option("value",(addBill * Currency_Equal) / currencyEqual );
                                $("#F_Bill_Discount").dxTextBox("instance").option("value",(discountBill * Currency_Equal) / currencyEqual );
                                $("#F_Total_Discount").dxTextBox("instance").option("value",(totaldiscount * Currency_Equal) / currencyEqual);


                            }
                        }else if (currencyEqual < Currency_Equal){
                            if(currencyEqual === 1){
                                let ItemPrice = Number(girdData[index].Item_Price);
                                girdData[index].Item_Price = ItemPrice * Currency_Equal;
                                girdData[index].Item_Price_Total = Number(girdData[index].Item_Price) * Number(girdData[index].Item_Count);
                                let ItemDiscount = Number(girdData[index].Item_Discount);
                                girdData[index].Item_Discount =ItemDiscount * Currency_Equal;
                                let ItemExtra = Number(girdData[index].Item_Extra) ;
                                girdData[index].Item_Extra = ItemExtra * Currency_Equal;
                                let FinalPrice = Number(girdData[index].Item_Price_Final) ;
                                girdData[index].Item_Price_Final = FinalPrice * Currency_Equal;
                                let CostPrice = Number(girdData[index].Cost_Price) ;
                                girdData[index].Cost_Price = CostPrice * Currency_Equal;
                                girdData[index].Currency_Guid = currencyGuid;
                                girdData[index].Currency_Equal = currencyEqual;
                                let discountItem = parseFloat($("#F_Item_Discount").dxTextBox("instance").option("value"));
                                let addingItem = parseFloat($("#F_Item_Add").dxTextBox("instance").option("value"));
                                let addBill = parseFloat($("#F_Bill_AddAmount").dxTextBox("instance").option("value"));
                                let discountBill = parseFloat($("#F_Bill_Discount").dxTextBox("instance").option("value"));
                                let totaldiscount = parseFloat($("#F_Total_Discount").dxTextBox("instance").option("value"));
                                $("#F_Item_Discount").dxTextBox("instance").option("value",discountItem * Currency_Equal);
                                $("#F_Item_Add").dxTextBox("instance").option("value",addingItem * Currency_Equal );
                                $("#F_Bill_AddAmount").dxTextBox("instance").option("value",addBill * Currency_Equal );
                                $("#F_Bill_Discount").dxTextBox("instance").option("value",discountBill * Currency_Equal );
                                $("#F_Total_Discount").dxTextBox("instance").option("value",totaldiscount * Currency_Equal);
                            }
                            else{
                                let ItemPrice = Number(girdData[index].Item_Price);
                                girdData[index].Item_Price = (ItemPrice * Number(girdData[index].Currency_Equal)) / currencyEqual;
                                girdData[index].Item_Price_Total = Number(girdData[index].Item_Price) * Number(girdData[index].Item_Count);
                                let ItemDiscount = Number(girdData[index].Item_Discount);
                                girdData[index].Item_Discount =(ItemDiscount * Number(girdData[index].Currency_Equal)) / currencyEqual;
                                let ItemExtra = Number(girdData[index].Item_Extra) ;
                                girdData[index].Item_Extra = (ItemExtra * Number(girdData[index].Currency_Equal)) / currencyEqual;
                                let FinalPrice = Number(girdData[index].Item_Price_Final) ;
                                girdData[index].Item_Price_Final = (FinalPrice * Number(girdData[index].Currency_Equal)) / currencyEqual;
                                let CostPrice = Number(girdData[index].Cost_Price) ;
                                girdData[index].Cost_Price = (CostPrice * Number(girdData[index].Currency_Equal)) / currencyEqual;
                                girdData[index].Currency_Guid = currencyGuid;
                                girdData[index].Currency_Equal = currencyEqual;
                                let discountItem = parseFloat($("#F_Item_Discount").dxTextBox("instance").option("value"));
                                let addingItem = parseFloat($("#F_Item_Add").dxTextBox("instance").option("value"));
                                let addBill = parseFloat($("#F_Bill_AddAmount").dxTextBox("instance").option("value"));
                                let discountBill = parseFloat($("#F_Bill_Discount").dxTextBox("instance").option("value"));
                                let totaldiscount = parseFloat($("#F_Total_Discount").dxTextBox("instance").option("value"));
                                $("#F_Item_Discount").dxTextBox("instance").option("value",(discountItem * Currency_Equal) / currencyEqual);
                                $("#F_Item_Add").dxTextBox("instance").option("value",(addingItem * Currency_Equal) / currencyEqual );
                                $("#F_Bill_AddAmount").dxTextBox("instance").option("value",(addBill * Currency_Equal) / currencyEqual );
                                $("#F_Bill_Discount").dxTextBox("instance").option("value",(discountBill * Currency_Equal) / currencyEqual );
                                $("#F_Total_Discount").dxTextBox("instance").option("value",(totaldiscount * Currency_Equal) / currencyEqual);
                            }
                        }
                    }
                    grid.refresh();
                }
                let gridDisAdd = $("#gridContainerDiscount").dxDataGrid("instance").option("dataSource");
                let grid2 = $("#gridContainerDiscount").dxDataGrid("instance");
                if(gridDisAdd.length > 0 || gridDisAdd.length !=null){
                    for (let index = 0; index < gridDisAdd.length; index++) {
                            let Currency_Equal = Number(gridDisAdd[index].Currency_Equal);
                            if(currencyEqual > Currency_Equal){
                                if(Currency_Equal === 1)
                                {
                                    let AddAmount = Number(gridDisAdd[index].Add_Amount);
                                    gridDisAdd[index].Add_Amount = AddAmount / currencyEqual;
                                    let DisAmount = Number(gridDisAdd[index].Dis_Amount);
                                    gridDisAdd[index].Dis_Amount = DisAmount / currencyEqual;
                                    gridDisAdd[index].Currency_Guid = currencyGuid;
                                    gridDisAdd[index].Currency_Equal = currencyEqual;
                                    // $("#F_Bill_Discount")
                                    // .dxTextBox("instance")
                                    // .option("value",Number(gridDisAdd[index].Dis_Amount));
                                    // $("#F_Bill_AddAmount")
                                    // .dxTextBox("instance")
                                    // .option("value",Number(gridDisAdd[index].Add_Amount));
                                }
                                else{

                                    let AddAmount = Number(gridDisAdd[index].Add_Amount);
                                    gridDisAdd[index].Add_Amount = (AddAmount * Number(gridDisAdd[index].Currency_Equal)) / currencyEqual;
                                    let DisAmount = Number(gridDisAdd[index].Dis_Amount);
                                    gridDisAdd[index].Dis_Amount =(DisAmount * Number(gridDisAdd[index].Currency_Equal)) / currencyEqual;
                                    gridDisAdd[index].Currency_Guid = currencyGuid;
                                    gridDisAdd[index].Currency_Equal = currencyEqual;
                                    // $("#F_Bill_Discount")
                                    // .dxTextBox("instance")
                                    // .option("value",Number(gridDisAdd[index].Dis_Amount));
                                    // $("#F_Bill_AddAmount")
                                    // .dxTextBox("instance")
                                    // .option("value",Number(gridDisAdd[index].Add_Amount));
                                }
                            }else if (currencyEqual < Currency_Equal){
                                if(currencyEqual === 1){
                                    let AddAmount = Number(gridDisAdd[index].Add_Amount);
                                    gridDisAdd[index].Add_Amount = AddAmount * Currency_Equal;
                                    let DisAmount = Number(gridDisAdd[index].Dis_Amount);
                                    gridDisAdd[index].Dis_Amount = DisAmount * Currency_Equal;
                                    gridDisAdd[index].Currency_Guid = currencyGuid;
                                    gridDisAdd[index].Currency_Equal = currencyEqual;
                                    // $("#F_Bill_Discount")
                                    // .dxTextBox("instance")
                                    // .option("value",Number(gridDisAdd[index].Dis_Amount));
                                    // $("#F_Bill_AddAmount")
                                    // .dxTextBox("instance")
                                    // .option("value",Number(gridDisAdd[index].Add_Amount));
                                }
                                else{
                                    let AddAmount = Number(gridDisAdd[index].Add_Amount);
                                    gridDisAdd[index].Add_Amount = (AddAmount * Number(gridDisAdd[index].Currency_Equal)) / currencyEqual;
                                    let DisAmount = Number(gridDisAdd[index].Dis_Amount);
                                    gridDisAdd[index].Dis_Amount =(DisAmount * Number(gridDisAdd[index].Currency_Equal)) / currencyEqual;
                                    gridDisAdd[index].Currency_Guid = currencyGuid;
                                    gridDisAdd[index].Currency_Equal = currencyEqual;
                                    // $("#F_Bill_Discount")
                                    // .dxTextBox("instance")
                                    // .option("value",Number(gridDisAdd[index].Dis_Amount));
                                    // $("#F_Bill_AddAmount")
                                    // .dxTextBox("instance")
                                    // .option("value",Number(gridDisAdd[index].Add_Amount));
                                }
                            }
                    }

                    grid2.refresh();


                }
            }
        });
    });
    $(() => {
        $("#F_Total_Add").dxTextBox({
            placeholder: "اجمالي الاضافات",
            inputAttr: { "aria-label": "Total Add" },
            readOnly: true,
            value: 0,
             cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "bold"; // Set the desired font weight
                                    let fontSize = "16px";
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
                                        })
                                        .text(formattedValue)
                                        .appendTo(container);
                                }
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
        onClick() {},
    });
});
// End Components.
function setting(){
    let billType = $.trim($("#card_Billstitle").text());
    let url = '';
    switch (billType) {
        case 'فاتورة مشتريات':
                url = 'BillsBuyingSettingGet/'
            break;
        case 'فاتورة مبيعات':
                url = 'BillsSalingSettingGet/'
        break;
        case 'فاتورة طلبيات':
                url = 'BillsOrderingSettingGet/'
        break;

        default:
            break;
    }
    $.ajax({
        type: "GET",
        url: url + "GetBillSetting",
        data:{billType:billType},
        success: function (response) {

           if(Number(response.BillSettingState.Header_Cash_Visible) === 1){
            $('#H_Cash_Amount')
            .dxTextBox("instance")
            .option("visible",true);
            $('#H_CashAmount_Lable').show();
           }else{
            $('#H_CashAmount_Lable').hide();
            $('#H_Cash_Amount')
            .dxTextBox("instance")
            .option("visible",false);
           }






        }


    });
}
function Bills_cleardata() {
    $("#H_Guid").dxTextBox("instance").option("value", "");
    $("#H_Bill_Date").dxDateBox("instance").option("Date", "");
    $("#H_Store_Guid").dxDropDownBox("instance").option("value", "");
    $("#H_Cust_Guid").dxDropDownBox("instance").option("value", "");
    $("#H_Acc_Guid").dxDropDownBox("instance").option("value", "");
    // $("#H_Currency_Guid").dxDropDownBox("instance").option("value", "");
    // $("#H_Currency_Equal").dxTextBox("instance").option("value", "");
    $("#H_Cash_Amount").dxTextBox("instance").option("value", "");
    $("#H_Note_Header").dxTextArea("instance").option("value", "");
    $("#F_Guid").dxTextBox("instance").option("value", "");
    $("#H_Pay_Type").dxSwitch("instance").option("value", false);
    $("#gridContainer").dxDataGrid({
        dataSource: "",
    });
    $("#gridContainerDiscount").dxDataGrid({
        dataSource: "",
    });
}
//Begin CRUD Function...
function Bills_chechdata() {}

function Bills_UpdateOrInsert() {
    let BillType = $.trim($("#card_Billstitle").text());
    let url = '';
    switch (BillType) {
        case 'فاتورة مشتريات':
                url = 'BillsBuying'
            break;
        case 'فاتورة مبيعات':
                url = 'BillsSaling'
        break;
        case 'فاتورة طلبيات':
                url = 'BillsOrdering'
        break;

        default:
            break;
    }

    var selectedDate = $("#H_Bill_Date").dxDateBox("instance").option("value");
    var formattedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(selectedDate);
    let billBody = $("#gridContainer")
        .dxDataGrid("instance")
        .option("dataSource");
    let billDisAdd = $("#gridContainerDiscount")
        .dxDataGrid("instance")
        .option("dataSource");
    let data = {
        H_Guid: $("#H_Guid").dxTextBox("instance").option("value"),
        H_Bill_Number: $("#H_Bill_Number")
            .dxTextBox("instance")
            .option("value"),
        H_Bill_Date: formattedDate,
        H_Pay_Type: (function () {
            if ($("#H_Pay_Type").dxSwitch("instance").option("value")) {
                return 1;
            } else return 0;
        })(),
        H_Cash_Amount: $("#H_Cash_Amount")
            .dxTextBox("instance")
            .option("value"),
        H_Store_Guid: $("#H_Store_Guid")
            .dxDropDownBox("instance")
            .option("value"),
        H_Acc_Guid: $("#H_Acc_Guid").dxDropDownBox("instance").option("value"),
        H_Cust_Guid: $("#H_Cust_Guid")
            .dxDropDownBox("instance")
            .option("value"),
        H_Currency_Guid: $("#H_Currency_Guid")
            .dxDropDownBox("instance")
            .option("value"),
        H_Currency_Equal: $("#H_Currency_Equal")
            .dxTextBox("instance")
            .option("value"),
        H_Note_Header: $("#H_Note_Header")
            .dxTextArea("instance")
            .option("value"),
        H_Bill_Type: $("#H_Bill_Type")
            .dxDropDownBox("instance")
            .option("value"),
        H_Bill_Account: $("#H_Bill_Account")
            .dxDropDownBox("instance")
            .option("value"),
        H_Discount_Account: $("#H_Discount_Account")
            .dxDropDownBox("instance")
            .option("value"),
        Bill_Body: billBody,
        Bill_DisAdd: billDisAdd,
        F_Guid: $("#F_Guid").dxTextBox("instance").option("value"),
        F_Total_Price_Bill: $("#F_Total_Price_Bill")
            .dxTextBox("instance")
            .option("value"),
        F_Total_Discount: $("#F_Total_Discount")
            .dxTextBox("instance")
            .option("value"),
        F_Item_Discount: $("#F_Item_Discount")
            .dxTextBox("instance")
            .option("value"),
        F_Bill_Discount: $("#F_Bill_Discount")
            .dxTextBox("instance")
            .option("value"),
        F_TotalAward: $("#F_TotalAward").dxTextBox("instance").option("value"),
        F_Currency_Guid: $("#F_Currency_Guid")
            .dxTextBox("instance")
            .option("value"),
        F_Currency_Equal: $("#F_Currency_Equal")
            .dxTextBox("instance")
            .option("value"),
        F_checkAward: (function () {
            if ($("#F_checkAward").dxSwitch("instance").option("value")) {
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
        },
    });
}

function Bills_filldata() {
    let billType = $.trim($("#card_Billstitle").text());
    let url = '';
    switch (billType) {
        case 'فاتورة مشتريات':
                url = 'BillsBuyingfill/'
            break;
        case 'فاتورة مبيعات':
                url = 'BillsSalingfill/'
        break;
        case 'فاتورة طلبيات':
                url = 'BillsOrderingfill/'
        break;

        default:
            break;
    }

    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            data: { BillType: billType },
            success: function (response) {
                $(() => {
                    let dataGrid;
                    $("#H_Store_Guid").dxDropDownBox({
                        value: null,
                        valueExpr: "St_Guid",
                        deferRendering: false,
                        placeholder: "اختر اسم المخزن",
                        visible:
                            Number(response.billSetting.Store_Visible) ===
                            1,
                        inputAttr: { "aria-label": "Store Name" },
                        displayExpr(item) {
                            return (
                                item && `${item.St_Name}   -${item.St_Code} `
                            );
                        },
                        showClearButton: true,
                        dataSource: response.getStores, //makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField: "St_Name",
                                        caption: "اسم المخزن",
                                    },
                                    {
                                        dataField: "St_Code",
                                        caption: "كود المخزن",
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
                    $("#H_Store_Guid")
                        .dxDropDownBox("instance")
                        .option("value", response.billSetting.Store_Guid);
                    if(response.billSetting.Store_Visible === '0')
                        $("#L_Store_Guid").hide();
                    else $("#L_Store_Guid").show();
                });
                $(() => {
                    let dataGrid;
                    $("#H_Cust_Guid").dxDropDownBox({
                        value: null,
                        valueExpr: "Cs_Guid",
                        deferRendering: false,
                        placeholder: "اختر العميل",
                        inputAttr: { "aria-label": "Customer" },
                        displayExpr(item) {
                            return item && `${item.Cs_Name}`;
                        },
                        visible:Number(response.billSetting.Cust_Acc_Visible) === 1,
                        showClearButton: true,
                        dataSource: response.getCustomers, //makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField: "Cs_Name",
                                        caption: "العميل",
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
                                        hasSelection ? keys[0].Cs_Guid : null
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
                    if(response.billSetting.Cust_Acc_Visible === '0')
                    $('#H_Cust_Label').hide();
                    else $('#H_Cust_Label').show();
                });

                $(() => {
                    let dataGrid;
                    $("#H_Acc_Guid").dxDropDownBox({
                        value: null,
                        valueExpr: "Guid",
                        deferRendering: false,
                        placeholder: "اختر الحساب",
                        visible:
                            Number(response.billSetting.Acc_Visible) ===
                            1,
                        inputAttr: { "aria-label": "Account Name" },
                        displayExpr(item) {
                            return (
                                item &&
                                `${item.Ac_Name}   -${item.Ac_Code_Mask} `
                            );
                        },
                        showClearButton: true,
                        dataSource: response.getAccounts, //makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField: "Ac_Name",
                                        caption: "اسم الحساب",
                                    },
                                    {
                                        dataField: "Ac_Code_Mask",
                                        caption: "كود الحساب",
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
                    $("#H_Acc_Guid")
                        .dxDropDownBox("instance")
                        .option("value", response.billSetting.Acc_Guid);
                    if(response.billSetting.Acc_Visible === '0')
                        $("#L_Acc_Guid").hide();
                    else $("#L_Acc_Guid").show();
                });
                $(() => {

                    let dataGrid;
                    $("#H_Currency_Guid").dxDropDownBox({
                        value: null,
                        valueExpr: "Cur_Guid",
                        deferRendering: false,
                        placeholder: "اختر العملة",
                        inputAttr: { "aria-label": "Currency" },
                        visible:Number(response.billSetting.Currency_Visible) ===1,
                        displayExpr(item) {
                            return item && `${item.Cur_Name}`;
                        },
                        showClearButton: true,
                        dataSource: response.getCurrency, //makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField: "Cur_Name",
                                        caption: "العملة",
                                    },
                                    {
                                        dataField: "Cur_Cost",
                                        caption: "قيمة العملة",
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
                                        hasSelection ? keys[0].Cur_Guid : null
                                    );
                                    $("#H_Currency_Equal")
                                        .dxTextBox("instance")
                                        .option("value", keys[0].Cur_Cost);
                                    $("#F_Currency_Guid")
                                        .dxTextBox("instance")
                                        .option("value", keys[0].Cur_Guid);
                                    $("#F_Currency_Equal")
                                        .dxTextBox("instance")
                                        .option("value", keys[0].Cur_Cost);

                                    // let currencyEqual = Number($("#H_Currency_Equal").dxTextBox("instance").option("value"));
                                    // let girdData = $("#gridContainer").dxDataGrid("instance").option("dataSource");
                                    // let grid = $('#gridContainer').dxDataGrid('instance');
                                    // if(girdData.length > 0 || girdData.length != null)
                                    // {
                                    //     for (let index = 0; index < girdData.length; index++) {
                                    //         let Currency_Equal = Number(girdData[index].Currency_Equal);

                                    //         if(currencyEqual > Currency_Equal){
                                    //             if(Currency_Equal === 1)
                                    //             {
                                    //                 let ItemPrice = Number(girdData[index].Item_Price);
                                    //                 girdData[index].Item_Price = ItemPrice / currencyEqual;
                                    //                 girdData[index].Item_Price_Total = Number(girdData[index].Item_Price) * Number(girdData[index].Item_Count);
                                    //                 let ItemDiscount = Number(girdData[index].Item_Discount);
                                    //                 girdData[index].Item_Discount =ItemDiscount / currencyEqual;
                                    //                 let ItemExtra = Number(girdData[index].Item_Extra) ;
                                    //                 girdData[index].Item_Extra = ItemExtra / currencyEqual;
                                    //                 let FinalPrice = Number(girdData[index].Item_Price_Final) ;
                                    //                 girdData[index].Item_Price_Final = FinalPrice / currencyEqual;
                                    //                 let CostPrice = Number(girdData[index].Cost_Price) ;
                                    //                 girdData[index].Cost_Price = CostPrice / currencyEqual;
                                    //                 girdData[index].Currency_Guid = keys[0].Cur_Guid;
                                    //                 girdData[index].Currency_Equal = currencyEqual;
                                    //                 let discountItem = parseFloat($("#F_Item_Discount").dxTextBox("instance").option("value"));
                                    //                 let addingItem = parseFloat($("#F_Item_Add").dxTextBox("instance").option("value"));
                                    //                 let addBill = parseFloat($("#F_Bill_AddAmount").dxTextBox("instance").option("value"));
                                    //                 let discountBill = parseFloat($("#F_Bill_Discount").dxTextBox("instance").option("value"));
                                    //                 let totaldiscount = parseFloat($("#F_Total_Discount").dxTextBox("instance").option("value"));
                                    //                 $("#F_Item_Discount").dxTextBox("instance").option("value",discountItem / currencyEqual);
                                    //                 $("#F_Item_Add").dxTextBox("instance").option("value",addingItem / currencyEqual );
                                    //                 $("#F_Bill_AddAmount").dxTextBox("instance").option("value",addBill / currencyEqual );
                                    //                 $("#F_Bill_Discount").dxTextBox("instance").option("value",discountBill / currencyEqual );
                                    //                 $("#F_Total_Discount").dxTextBox("instance").option("value",totaldiscount / currencyEqual);
                                    //             }
                                    //             else{

                                    //                 let ItemPrice = Number(girdData[index].Item_Price);
                                    //                 girdData[index].Item_Price = (ItemPrice * Number(girdData[index].Currency_Equal)) / currencyEqual;
                                    //                 girdData[index].Item_Price_Total = Number(girdData[index].Item_Price) * Number(girdData[index].Item_Count);
                                    //                 let ItemDiscount = Number(girdData[index].Item_Discount);
                                    //                 girdData[index].Item_Discount =(ItemDiscount * Number(girdData[index].Currency_Equal)) / currencyEqual;
                                    //                 let ItemExtra = Number(girdData[index].Item_Extra) ;
                                    //                 girdData[index].Item_Extra = (ItemExtra * Number(girdData[index].Currency_Equal)) / currencyEqual;
                                    //                 let FinalPrice = Number(girdData[index].Item_Price_Final) ;
                                    //                 girdData[index].Item_Price_Final = (FinalPrice * Number(girdData[index].Currency_Equal)) / currencyEqual;
                                    //                 let CostPrice = Number(girdData[index].Cost_Price) ;
                                    //                 girdData[index].Cost_Price = (CostPrice * Number(girdData[index].Currency_Equal)) / currencyEqual;
                                    //                 girdData[index].Currency_Guid = keys[0].Cur_Guid;
                                    //                 girdData[index].Currency_Equal = currencyEqual;
                                    //                 let discountItem = parseFloat($("#F_Item_Discount").dxTextBox("instance").option("value"));
                                    //                 let addingItem = parseFloat($("#F_Item_Add").dxTextBox("instance").option("value"));
                                    //                 let addBill = parseFloat($("#F_Bill_AddAmount").dxTextBox("instance").option("value"));
                                    //                 let discountBill = parseFloat($("#F_Bill_Discount").dxTextBox("instance").option("value"));
                                    //                 let totaldiscount = parseFloat($("#F_Total_Discount").dxTextBox("instance").option("value"));
                                    //                 $("#F_Item_Discount").dxTextBox("instance").option("value",(discountItem * Currency_Equal) / currencyEqual);
                                    //                 $("#F_Item_Add").dxTextBox("instance").option("value",(addingItem * Currency_Equal) / currencyEqual );
                                    //                 $("#F_Bill_AddAmount").dxTextBox("instance").option("value",(addBill * Currency_Equal) / currencyEqual );
                                    //                 $("#F_Bill_Discount").dxTextBox("instance").option("value",(discountBill * Currency_Equal) / currencyEqual );
                                    //                 $("#F_Total_Discount").dxTextBox("instance").option("value",(totaldiscount * Currency_Equal) / currencyEqual);


                                    //             }
                                    //         }else if (currencyEqual < Currency_Equal){
                                    //             if(currencyEqual === 1){
                                    //                 let ItemPrice = Number(girdData[index].Item_Price);
                                    //                 girdData[index].Item_Price = ItemPrice * Currency_Equal;
                                    //                 girdData[index].Item_Price_Total = Number(girdData[index].Item_Price) * Number(girdData[index].Item_Count);
                                    //                 let ItemDiscount = Number(girdData[index].Item_Discount);
                                    //                 girdData[index].Item_Discount =ItemDiscount * Currency_Equal;
                                    //                 let ItemExtra = Number(girdData[index].Item_Extra) ;
                                    //                 girdData[index].Item_Extra = ItemExtra * Currency_Equal;
                                    //                 let FinalPrice = Number(girdData[index].Item_Price_Final) ;
                                    //                 girdData[index].Item_Price_Final = FinalPrice * Currency_Equal;
                                    //                 let CostPrice = Number(girdData[index].Cost_Price) ;
                                    //                 girdData[index].Cost_Price = CostPrice * Currency_Equal;
                                    //                 girdData[index].Currency_Guid = keys[0].Cur_Guid;
                                    //                 girdData[index].Currency_Equal = currencyEqual;
                                    //                 let discountItem = parseFloat($("#F_Item_Discount").dxTextBox("instance").option("value"));
                                    //                 let addingItem = parseFloat($("#F_Item_Add").dxTextBox("instance").option("value"));
                                    //                 let addBill = parseFloat($("#F_Bill_AddAmount").dxTextBox("instance").option("value"));
                                    //                 let discountBill = parseFloat($("#F_Bill_Discount").dxTextBox("instance").option("value"));
                                    //                 let totaldiscount = parseFloat($("#F_Total_Discount").dxTextBox("instance").option("value"));
                                    //                 $("#F_Item_Discount").dxTextBox("instance").option("value",discountItem * Currency_Equal);
                                    //                 $("#F_Item_Add").dxTextBox("instance").option("value",addingItem * Currency_Equal );
                                    //                 $("#F_Bill_AddAmount").dxTextBox("instance").option("value",addBill * Currency_Equal );
                                    //                 $("#F_Bill_Discount").dxTextBox("instance").option("value",discountBill * Currency_Equal );
                                    //                 $("#F_Total_Discount").dxTextBox("instance").option("value",totaldiscount * Currency_Equal);
                                    //             }
                                    //             else{
                                    //                 let ItemPrice = Number(girdData[index].Item_Price);
                                    //                 girdData[index].Item_Price = (ItemPrice * Number(girdData[index].Currency_Equal)) / currencyEqual;
                                    //                 girdData[index].Item_Price_Total = Number(girdData[index].Item_Price) * Number(girdData[index].Item_Count);
                                    //                 let ItemDiscount = Number(girdData[index].Item_Discount);
                                    //                 girdData[index].Item_Discount =(ItemDiscount * Number(girdData[index].Currency_Equal)) / currencyEqual;
                                    //                 let ItemExtra = Number(girdData[index].Item_Extra) ;
                                    //                 girdData[index].Item_Extra = (ItemExtra * Number(girdData[index].Currency_Equal)) / currencyEqual;
                                    //                 let FinalPrice = Number(girdData[index].Item_Price_Final) ;
                                    //                 girdData[index].Item_Price_Final = (FinalPrice * Number(girdData[index].Currency_Equal)) / currencyEqual;
                                    //                 let CostPrice = Number(girdData[index].Cost_Price) ;
                                    //                 girdData[index].Cost_Price = (CostPrice * Number(girdData[index].Currency_Equal)) / currencyEqual;
                                    //                 girdData[index].Currency_Guid = keys[0].Cur_Guid;
                                    //                 girdData[index].Currency_Equal = currencyEqual;
                                    //                 let discountItem = parseFloat($("#F_Item_Discount").dxTextBox("instance").option("value"));
                                    //                 let addingItem = parseFloat($("#F_Item_Add").dxTextBox("instance").option("value"));
                                    //                 let addBill = parseFloat($("#F_Bill_AddAmount").dxTextBox("instance").option("value"));
                                    //                 let discountBill = parseFloat($("#F_Bill_Discount").dxTextBox("instance").option("value"));
                                    //                 let totaldiscount = parseFloat($("#F_Total_Discount").dxTextBox("instance").option("value"));
                                    //                 $("#F_Item_Discount").dxTextBox("instance").option("value",(discountItem * Currency_Equal) / currencyEqual);
                                    //                 $("#F_Item_Add").dxTextBox("instance").option("value",(addingItem * Currency_Equal) / currencyEqual );
                                    //                 $("#F_Bill_AddAmount").dxTextBox("instance").option("value",(addBill * Currency_Equal) / currencyEqual );
                                    //                 $("#F_Bill_Discount").dxTextBox("instance").option("value",(discountBill * Currency_Equal) / currencyEqual );
                                    //                 $("#F_Total_Discount").dxTextBox("instance").option("value",(totaldiscount * Currency_Equal) / currencyEqual);
                                    //             }
                                    //         }
                                    //     }
                                    //     grid.refresh();
                                    // }
                                    // let gridDisAdd = $("#gridContainerDiscount").dxDataGrid("instance").option("dataSource");
                                    // let grid2 = $("#gridContainerDiscount").dxDataGrid("instance");
                                    // if(gridDisAdd.length > 0 || gridDisAdd.length !=null){
                                    //     for (let index = 0; index < gridDisAdd.length; index++) {
                                    //             let Currency_Equal = Number(gridDisAdd[index].Currency_Equal);
                                    //             if(currencyEqual > Currency_Equal){
                                    //                 if(Currency_Equal === 1)
                                    //                 {
                                    //                     let AddAmount = Number(gridDisAdd[index].Add_Amount);
                                    //                     gridDisAdd[index].Add_Amount = AddAmount / currencyEqual;
                                    //                     let DisAmount = Number(gridDisAdd[index].Dis_Amount);
                                    //                     gridDisAdd[index].Dis_Amount = DisAmount / currencyEqual;
                                    //                     gridDisAdd[index].Currency_Guid = keys[0].Cur_Guid;
                                    //                     gridDisAdd[index].Currency_Equal = currencyEqual;
                                    //                     // $("#F_Bill_Discount")
                                    //                     // .dxTextBox("instance")
                                    //                     // .option("value",Number(gridDisAdd[index].Dis_Amount));
                                    //                     // $("#F_Bill_AddAmount")
                                    //                     // .dxTextBox("instance")
                                    //                     // .option("value",Number(gridDisAdd[index].Add_Amount));
                                    //                 }
                                    //                 else{

                                    //                     let AddAmount = Number(gridDisAdd[index].Add_Amount);
                                    //                     gridDisAdd[index].Add_Amount = (AddAmount * Number(gridDisAdd[index].Currency_Equal)) / currencyEqual;
                                    //                     let DisAmount = Number(gridDisAdd[index].Dis_Amount);
                                    //                     gridDisAdd[index].Dis_Amount =(DisAmount * Number(gridDisAdd[index].Currency_Equal)) / currencyEqual;
                                    //                     gridDisAdd[index].Currency_Guid = keys[0].Cur_Guid;
                                    //                     gridDisAdd[index].Currency_Equal = currencyEqual;
                                    //                     // $("#F_Bill_Discount")
                                    //                     // .dxTextBox("instance")
                                    //                     // .option("value",Number(gridDisAdd[index].Dis_Amount));
                                    //                     // $("#F_Bill_AddAmount")
                                    //                     // .dxTextBox("instance")
                                    //                     // .option("value",Number(gridDisAdd[index].Add_Amount));
                                    //                 }
                                    //             }else if (currencyEqual < Currency_Equal){
                                    //                 if(currencyEqual === 1){
                                    //                     let AddAmount = Number(gridDisAdd[index].Add_Amount);
                                    //                     gridDisAdd[index].Add_Amount = AddAmount * Currency_Equal;
                                    //                     let DisAmount = Number(gridDisAdd[index].Dis_Amount);
                                    //                     gridDisAdd[index].Dis_Amount = DisAmount * Currency_Equal;
                                    //                     gridDisAdd[index].Currency_Guid = keys[0].Cur_Guid;
                                    //                     gridDisAdd[index].Currency_Equal = currencyEqual;
                                    //                     // $("#F_Bill_Discount")
                                    //                     // .dxTextBox("instance")
                                    //                     // .option("value",Number(gridDisAdd[index].Dis_Amount));
                                    //                     // $("#F_Bill_AddAmount")
                                    //                     // .dxTextBox("instance")
                                    //                     // .option("value",Number(gridDisAdd[index].Add_Amount));
                                    //                 }
                                    //                 else{
                                    //                     let AddAmount = Number(gridDisAdd[index].Add_Amount);
                                    //                     gridDisAdd[index].Add_Amount = (AddAmount * Number(gridDisAdd[index].Currency_Equal)) / currencyEqual;
                                    //                     let DisAmount = Number(gridDisAdd[index].Dis_Amount);
                                    //                     gridDisAdd[index].Dis_Amount =(DisAmount * Number(gridDisAdd[index].Currency_Equal)) / currencyEqual;
                                    //                     gridDisAdd[index].Currency_Guid = keys[0].Cur_Guid;
                                    //                     gridDisAdd[index].Currency_Equal = currencyEqual;
                                    //                     // $("#F_Bill_Discount")
                                    //                     // .dxTextBox("instance")
                                    //                     // .option("value",Number(gridDisAdd[index].Dis_Amount));
                                    //                     // $("#F_Bill_AddAmount")
                                    //                     // .dxTextBox("instance")
                                    //                     // .option("value",Number(gridDisAdd[index].Add_Amount));
                                    //                 }
                                    //             }
                                    //     }

                                    //     grid2.refresh();


                                    // }

                                },
                            });

                            dataGrid = $dataGrid.dxDataGrid("instance");

                            e.component.on("valueChanged", (args) => {
                                dataGrid.selectRows(args.value, true);
                                e.component.close();
                            });

                            return $dataGrid;
                        },
                        onValueChanged: function (e) {
                            let selectedValue = e.value;
                            let data = {
                                CurrencyGuid: selectedValue,
                            }
                            let billType = $.trim($("#card_Billstitle").text());
                            let url2 = '';
                            switch (billType) {
                                case 'فاتورة مشتريات':
                                        url2 = 'BillsBuyingGetCurrencyEqual/GetCurrencyEqual'
                                    break;
                                case 'فاتورة مبيعات':
                                        url2 = 'BillsSalingGetCurrencyEqual/GetCurrencyEqual'
                                break;
                                case 'فاتورة طلبيات':
                                        url2 = 'BillsOrderingGetCurrencyEqual/GetCurrencyEqual'
                                break;

                                default:
                                    break;
                            }
                            $.ajax({
                                type: "GET",
                                url: url2,
                                data: data,
                                success: function (response) {
                                    $("#H_Currency_Equal")
                                        .dxTextBox("instance")
                                        .option(
                                            "value",
                                            response.getCurrencyEqual
                                        );
                                    $("#F_Currency_Equal")
                                        .dxTextBox("instance")
                                        .option(
                                            "value",
                                            response.getCurrencyEqual
                                        );
                                },
                            });
                        },
                    });
                    $("#H_Currency_Guid")
                        .dxDropDownBox("instance")
                        .option("value", response.billSetting.Currency_Guid);

                    $("#F_Currency_Guid")
                        .dxTextBox("instance")
                        .option("value", response.billSetting.Currency_Guid);
                    if(response.billSetting.Currency_Visible === '0'){
                        $('#H_Currency_Equal')
                        .dxTextBox("instance")
                        .option({
                            visible: Number(response.billSetting.Currency_Visible) === 1,
                        });
                        $('#H_Currency_Visible').hide();
                        $('#H_Currency_Visible2').hide();
                    }else{
                        $('#H_Currency_Visible').show();
                        $('#H_Currency_Visible2').show();
                    }
                });

                $(() => {
                    let dataGrid;
                    $("#H_Bill_Type").dxDropDownBox({
                        value: null,
                        valueExpr: "Guid",
                        deferRendering: false,
                        placeholder: "اختر نوع الفاتورة",
                        inputAttr: { "aria-label": "Bill Type" },
                        displayExpr(item) {
                            return item && `${item.N_BillName}  `;
                        },
                        showClearButton: true,
                        dataSource: response.getBillsType, //makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField: "N_BillName",
                                        caption: "اسم الفاتورة",
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
                                    $("#H_Bill_Account")
                                        .dxDropDownBox("instance")
                                        .option("value", keys[0].N_Acc_Guid);
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
                    $("#H_Bill_Type")
                        .dxDropDownBox("instance")
                        .option("value", response.billSetting.Bill_Type_FK);
                });
                $(() => {
                    let dataGrid;
                    $("#H_Bill_Account").dxDropDownBox({
                        value: null,
                        valueExpr: "Guid",
                        deferRendering: false,
                        placeholder: "حساب الفاتورة",
                        inputAttr: { "aria-label": "Store Name" },
                        visible:
                        Number(response.billSetting.Acc_Contra_Visible) ===
                        1,
                        displayExpr(item) {
                            return (
                                item &&
                                `${item.Ac_Name}   -${item.Ac_Code_Mask} `
                            );
                        },
                        showClearButton: true,
                        dataSource: response.getAccounts, //makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField: "Ac_Name",
                                        caption: "اسم الحساب",
                                    },
                                    {
                                        dataField: "Ac_Code_Mask",
                                        caption: "كود الحساب",
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
                    $("#H_Bill_Account")
                        .dxDropDownBox("instance")
                        .option("value", response.billSetting.Acc_Contra_Guid);
                    if(response.billSetting.Acc_Contra_Visible === '0'){
                        $("#L_Bill_Account").hide();
                    }else {$("#L_Bill_Account").show()}
                });
                $(() => {
                    let dataGrid;
                    $("#H_Discount_Account").dxDropDownBox({
                        value: null,
                        valueExpr: "Guid",
                        deferRendering: false,
                        placeholder: "اختر الحساب",
                        inputAttr: { "aria-label": "Discount Account" },
                        visible:
                        Number(response.billSetting.Discount_Visible) ===
                        1,
                        displayExpr(item) {
                            return (
                                item &&
                                `${item.Ac_Name}   -${item.Ac_Code_Mask} `
                            );
                        },
                        showClearButton: true,
                        dataSource: response.getAccounts, //makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField: "Ac_Name",
                                        caption: "اسم الحساب",
                                    },
                                    {
                                        dataField: "Ac_Code_Mask",
                                        caption: "كود الحساب",
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
                    $("#H_Discount_Account")
                        .dxDropDownBox("instance")
                        .option("value", response.billSetting.Discount_Guid);

                    if(response.billSetting.Discount_Visible === '0'){
                        $("#L_Discount_Account").hide();
                    }else{ $("#L_Discount_Account").show()}
                });

                $(() => {
                    let dataGrid;
                    $("#H_GetBill").dxDropDownBox({
                        value: null,
                        valueExpr: "Guid",
                        deferRendering: false,
                        placeholder: "اختر رقم الفاتورة",
                        inputAttr: { "aria-label": "Bill" },
                        displayExpr(item) {
                            return item && `${item.Bill_Number}  `;
                        },
                        showClearButton: true,
                        dataSource: response.getBill, //makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField: "Bill_Number",
                                        caption: "رقم الفاتورة",
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
                                    let headerGuid = keys[0].Guid;

                                    let billTypeforgetting = $.trim($("#card_Billstitle").text());
                                    let urlforgetting = '';
                                    switch (billTypeforgetting) {
                                        case 'فاتورة مشتريات':
                                                urlforgetting = 'BillsBuying/'
                                            break;
                                        case 'فاتورة مبيعات':
                                                urlforgetting = 'BillsSaling/'
                                        break;
                                        case 'فاتورة طلبيات':
                                                urlforgetting = 'BillsOrdering/'
                                        break;

                                        default:
                                            break;
                                    }
                                    $.ajax({
                                        type: "GET",
                                        url: urlforgetting +"show",
                                        data: { HeaderGuid: headerGuid },
                                        success: function (response) {
                                            $("#gridContainer").dxDataGrid({
                                                dataSource:
                                                    response.getBillBody,
                                            });

                                            $("#H_Guid")
                                                .dxTextBox("instance")
                                                .option(
                                                    "value",
                                                    response.getBillHeader.Guid
                                                );
                                            $("#H_Bill_Number")
                                                .dxTextBox("instance")
                                                .option(
                                                    "value",
                                                    response.getBillHeader
                                                        .Bill_Number
                                                );
                                            $("#H_Bill_Date")
                                                .dxDateBox("instance")
                                                .option(
                                                    "Date",
                                                    response.getBillHeader
                                                        .Bill_Date
                                                );
                                            $("#H_Store_Guid")
                                                .dxDropDownBox("instance")
                                                .option(
                                                    "value",
                                                    response.getBillHeader
                                                        .Store_Guid
                                                );
                                            $("#H_Cust_Guid")
                                                .dxDropDownBox("instance")
                                                .option(
                                                    "value",
                                                    response.getBillHeader
                                                        .Cust_Guid
                                                );
                                            $("#H_Acc_Guid")
                                                .dxDropDownBox("instance")
                                                .option(
                                                    "value",
                                                    response.getBillHeader
                                                        .Acc_Guid
                                                );
                                            $("#H_Currency_Guid")
                                                .dxDropDownBox("instance")
                                                .option(
                                                    "value",
                                                    response.getBillHeader
                                                        .Currency_Guid
                                                );
                                            $("#H_Currency_Equal")
                                                .dxTextBox("instance")
                                                .option(
                                                    "value",
                                                    response.getBillHeader
                                                        .Currency_Equal
                                                );
                                            $("#H_Cash_Amount")
                                                .dxTextBox("instance")
                                                .option(
                                                    "value",
                                                    response.getBillHeader
                                                        .Cash_Amount
                                                );
                                            $("#H_Note_Header")
                                                .dxTextArea("instance")
                                                .option(
                                                    "value",
                                                    response.getBillHeader
                                                        .Note_Header
                                                );
                                            if (
                                                response.getBillFooter != null
                                            ) {
                                                $("#F_Guid")
                                                    .dxTextBox("instance")
                                                    .option(
                                                        "value",
                                                        response.getBillFooter
                                                            .Guid
                                                    );
                                            } else {
                                                $("#F_Guid")
                                                    .dxTextBox("instance")
                                                    .option("value", "");
                                            }

                                            if (
                                                response.getBillHeader.Pay_Type
                                            ) {
                                                $("#H_Pay_Type")
                                                    .dxSwitch("instance")
                                                    .option("value", true);
                                            } else {
                                                $("#H_Pay_Type")
                                                    .dxSwitch("instance")
                                                    .option("value", false);
                                            }

                                            if (
                                                response.getBillDisAdd != null
                                            ) {
                                                $(
                                                    "#gridContainerDiscount"
                                                ).dxDataGrid({
                                                    dataSource:
                                                        response.getBillDisAdd,
                                                });
                                            } else {
                                                $(
                                                    "#gridContainerDiscount"
                                                ).dxDataGrid({
                                                    dataSource: null,
                                                });
                                            }
                                        },
                                    });

                                    // $('#H_Bill_Account').dxDropDownBox("instance").option("value", keys[0].N_Acc_Guid);
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
                    // $('#H_Bill_Type').dxDropDownBox("instance").option("value", response.BillTypeAccount.Guid);
                });
            },
        });
    });
}

function Bills_fetch() {
    $("#CashAmount").hide();
    let billType = $.trim($("#card_Billstitle").text());
    let url = '';
    switch (billType) {
        case 'فاتورة مشتريات':
                url = 'BillsBuying/'
            break;
        case 'فاتورة مبيعات':
                url = 'BillsSaling/'
        break;
        case 'فاتورة طلبيات':
                url = 'BillsOrdering/'
        break;

        default:
            break;
    }
    let itemsforadd = [];

    let data = {
        Bill_Type: billType,
    };

    $.ajax({
        type: "GET",
        url: url + "create",
        data: data,
        success: function (response) {

            // console.log(response.getCurrency.Cur_Guid);
            const dataGrid = $("#gridContainer")
                .dxDataGrid({
                    dataSource: response.getBillBody,
                    showBorders: true,
                    paging: {
                        enabled: false,
                    },
                    editing: {
                        mode: "cell",
                        allowUpdating: true,
                        allowAdding: true,
                        allowDeleting: true,
                    },
                    selection: {
                        mode: "multiple",
                    },
                    rowAlternationEnabled: true,

                    columns: [
                        {
                            dataField: "Guid",
                            caption: "Guid",
                            visible: false,
                        },
                        {
                            dataField: "Header_Guid",
                            caption: "Header Guid",
                            visible: false,
                        },
                        {
                            dataField: "Item_Guid",
                            caption: "ت",
                            visible: false,
                        },
                        {
                            dataField: "Item_Barcode",
                            caption: "باركود",
                            visible:
                                Number(response.getBillSetting.Item_Barcode) ===
                                1,
                        },
                        {
                            dataField: "Item_PartNumber",
                            caption: "رمز المادة",
                            lookup: {
                                dataSource: response.getItems,
                                displayExpr: "IT_PartNumber",
                                valueExpr: "IT_PartNumber",

                            },
                            visible:
                                Number(response.getBillSetting.Item_Code) === 1,
                            cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "bold"; // Set the desired font weight
                                    let fontSize = "16px";

                                    $("<div>")
                                        .css({
                                            "font-size" :fontSize,
                                            "font-weight" : fontWeight,
                                        })
                                        .text(cellValue)
                                        .appendTo(container);
                                }
                        },
                        {
                            dataField: "Item_Name",
                            caption: "اسم المادة",
                            lookup: {
                                dataSource: response.getItems,
                                displayExpr: "IT_Name",
                                valueExpr: "IT_Name",
                            },
                            visible:
                                Number(response.getBillSetting.Item_Name) === 1,
                        },
                        {
                            dataField: "Item_Unit",
                            caption: "الوحدة",
                            lookup: {
                                dataSource: response.getUnits,
                                displayExpr: "Ui_Name",
                                valueExpr: "Ui_Guid",
                            },
                        },
                        {
                            dataField: "Item_Count",
                            caption: "الكمية",
                            dataType: "number",
                            alignment: "right",
                            cellTemplate: function(container, options) {
                                var cellValue = options.value;
                                var fontWeight = "bold"; // Set the desired font weight
                                let fontSize = "16px";
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
                                    })
                                    .text(formattedValue)
                                    .appendTo(container);
                            },
                            visible:
                                Number(response.getBillSetting.Item_Count) ===
                                1,
                        },
                        {
                            dataField: "Item_Qty1",
                            caption: "كمية1",
                            dataType: "number",
                            alignment: "right",
                            visible:
                                Number(response.getBillSetting.Item_Qty1) === 1,

                        },
                        {
                            dataField: "Item_Qty2",
                            caption: "كمية2",
                            dataType: "number",
                            alignment: "right",
                            visible:
                                Number(response.getBillSetting.Item_Qty2) === 1,
                        },
                        {
                            dataField: "Item_Qty3",
                            caption: "كمية3",
                            dataType: "number",
                            alignment: "right",
                            visible:
                                Number(response.getBillSetting.Item_Qty3) === 1,
                        },
                        {
                            dataField: "Item_Price",
                            caption: "سعر المفرد",
                            dataType: "number",
                            alignment: "right",
                            format:"#0.00",
                            visible:
                                Number(response.getBillSetting.Item_Price) ===
                                1,
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "bold"; // Set the desired font weight
                                    let fontSize = "16px";
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
                                        })
                                        .text(formattedValue)
                                        .appendTo(container);
                                }
                        },
                        {
                            dataField: "Item_Price_Total",
                            caption: "الاجمالي",
                            dataType: "number",
                            alignment: "right",
                            readOnly: false,
                            format:"#0.00",
                            visible:
                                Number(
                                    response.getBillSetting.Item_Price_Total
                                ) === 1,
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "bold"; // Set the desired font weight
                                    let fontSize = "16px";
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
                                        })
                                        .text(formattedValue)
                                        .appendTo(container);
                                }
                        },
                        {
                            dataField: "Item_Discount",
                            caption: "خصم",
                            dataType: "number",
                            alignment: "right",
                            format:"#0.00",
                            visible:
                                Number(
                                    response.getBillSetting.Item_Discount
                                ) === 1,
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "bold"; // Set the desired font weight
                                    let fontSize = "16px";
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
                                        })
                                        .text(formattedValue)
                                        .appendTo(container);
                                }
                        },
                        {
                            dataField: "Item_Extra",
                            caption: "اضافة",
                            dataType: "number",
                            alignment: "right",
                            value: 0,
                            format:"#0.00",
                            visible:
                                Number(response.getBillSetting.Item_Extra) ===
                                1,
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "bold"; // Set the desired font weight
                                    let fontSize = "16px";
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
                                        })
                                        .text(formattedValue)
                                        .appendTo(container);
                                }
                        },
                        {
                            dataField: "Item_Price_Final",
                            caption: "صافي الاجمالي",
                            dataType: "number",
                            alignment: "right",
                            readOnly: false,
                            format:"#0.00",
                            visible:
                                Number(
                                    response.getBillSetting.Item_Price_Net
                                ) === 1,
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "bold"; // Set the desired font weight
                                    let fontSize = "16px";
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
                                        })
                                        .text(formattedValue)
                                        .appendTo(container);
                                }
                        },
                        {
                            dataField: "Cost_Price",
                            caption: "سعر التكلفة",
                            dataType: "number",
                            alignment: "right",
                            readOnly: false,
                            format:"#0.00",
                            visible:
                                Number(response.getBillSetting.Cost_Visible) ===
                                1,
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "bold"; // Set the desired font weight
                                    let fontSize = "16px";
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
                                        })
                                        .text(formattedValue)
                                        .appendTo(container);
                                }
                        },
                        {
                            dataField: "Profits",
                            caption: "ارباح",
                            dataType: "number",
                            alignment: "right",
                            value: 0,
                            format:"#0.00",
                            visible:
                                Number(response.getBillSetting.Profits) ===
                                1,
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    if(Number(cellValue) > 0){
                                        var fontWeight = "bold"; // Set the desired font weight
                                        let fontSize = "16px";
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
                                                "color": fontColor,
                                            })
                                            .text(formattedValue)
                                            .appendTo(container);
                                    }else{
                                        var fontWeight = "bold"; // Set the desired font weight
                                        let fontSize = "16px";
                                        let fontColor = "red";
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

                                }
                        },
                        {
                            dataField: "ProductionDate",
                            caption: "تاريخ الانتاج",
                            dataType: "date",
                            readOnly: true,
                            visible:
                                Number(
                                    response.getBillSetting.ProductionDate
                                ) === 1,
                        },
                        {
                            dataField: "ExpireDate",
                            caption: "تاريخ النفاذ",
                            dataType: "date",
                            readOnly: true,
                            visible:
                                Number(
                                    response.getBillSetting.ExpireDateAlert
                                ) === 1,
                        },
                        {
                            dataField: "Currency_Guid",
                            caption: "العملة",
                            readOnly: true,
                            visible:
                                Number(
                                    response.getBillSetting.Currency_Visible
                                ) === 1,
                            lookup: {
                                dataSource: response.getCurrencyAll,
                                displayExpr: "Cur_Name",
                                valueExpr: "Cur_Guid",
                            },
                        },
                        {
                            dataField: "Currency_Equal",
                            caption: "قيمة العملة",
                            dataType: "number",
                            alignment: "right",
                            readOnly: false,
                            format:"#0.00",
                            visible:
                                Number(response.getBillSetting.Currency_Visible) ===
                                1,
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "bold"; // Set the desired font weight
                                    let fontSize = "16px";
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
                                        })
                                        .text(formattedValue)
                                        .appendTo(container);
                                }

                        },
                    ],
                    summary: {
                        totalItems: [
                            {
                                column: "Item_Count",
                                summaryType: "sum",
                                valueFormat: "#0.00",
                            },
                            {
                                column: "Item_Price_Total",
                                summaryType: "sum",
                                valueFormat: "#0.00",
                            },
                            {
                                column: "Item_Discount",
                                summaryType: "sum",
                                valueFormat: "#0.00",
                            },
                            {
                                column: "Item_Extra",
                                summaryType: "sum",
                                valueFormat: "#0.00",
                            },
                            {
                                column: "Item_Price_Final",
                                summaryType: "sum",
                                valueFormat: "#0.00",
                            },
                        ],
                    },

                    onEditorPrepared: function (e) {

                        if (e.dataField === "Item_Name") {
                            let row = e.row.data; // Get the row data
                            let partnumber = row.Item_PartNumber;
                            var responseJSONResult;

                            let result = getIDofItem(partnumber);
                            result
                                .done(function (
                                    responseData,
                                    textStatus,
                                    jqXHR
                                ) {
                                    responseJSONResult = jqXHR.responseJSON;
                                    row.Item_Guid = responseJSONResult.ItemID;
                                })
                                .fail(function (
                                    jqXHR,
                                    textStatus,
                                    errorThrown
                                ) {});
                        }
                    },
                    onCellPrepared: function(e) {
                        if(e.rowType === "data" && e.column.dataField === "Item_Discount" ) {
                                e.cellElement.css("color", e.data.Item_Discount > 0 ? "red" : "Black");
                        }
                        if(e.rowType === "data" && e.column.dataField === "Item_Extra" ) {
                            e.cellElement.css("color", e.data.Item_Extra > 0 ? "green" : "Black");
                    }

                    },
                    onEditorPreparing: function (e) {
                        if (
                            e.parentType === "dataRow" &&
                            e.dataField === "Item_Price" &&
                            e.editorOptions
                        ) {
                            e.editorOptions.onValueChanged = function (args) {
                                // Here, you can update "Column2" based on the new value of "Column1"
                                const newValue = Number(args.value);
                                const rowIndex = e.row.rowIndex;
                                // You can use the grid's instance to update the data
                                const grid =
                                    $("#gridContainer").dxDataGrid("instance");
                                let row = e.row.data; // Get the row data
                                let quantity = Number(row.Item_Count);
                                const updatedValueForColumn2 =
                                    newValue * quantity; // Update "Column2" as per your requirements
                                // Set the new value for "Column2"
                                grid.cellValue(
                                    rowIndex,
                                    "Item_Price_Total",
                                    updatedValueForColumn2
                                );
                                grid.cellValue(
                                    rowIndex,
                                    "Item_Price",
                                    newValue
                                );
                            };
                        }
                        if (
                            e.parentType === "dataRow" &&
                            e.dataField === "Item_Price_Total"
                        ) {
                            const row = e.row.data;

                            let PriceTotal = Number(row.Item_Price_Total);
                            let Discount = Number(row.Item_Discount);
                            let Extra = Number(row.Item_Extra);
                            let quantity = Number(row.Item_Count);
                            let PriceFinal =
                                PriceTotal - Discount + Extra * quantity;
                            row.Item_Price_Final = PriceFinal;
                            let ItemPrice = Number(row.Item_Price);
                            row.Cost_Price =
                                ItemPrice - Discount / quantity + Extra;
                        }
                        if (
                            e.parentType === "dataRow" &&
                            e.dataField === "Item_Discount"
                        ) {
                            e.editorOptions.onValueChanged = function (args) {
                                const newValue = Number(args.value);
                                const rowIndex = e.row.rowIndex;
                                const grid =
                                    $("#gridContainer").dxDataGrid("instance");
                                let row = e.row.data; // Get the row data
                                let quantity = Number(row.Item_Count);
                                let Extra = Number(row.Item_Extra);
                                let PriceTotal = Number(row.Item_Price_Total);
                                const updatedValueForColumn2 =
                                    PriceTotal - newValue + Extra ;
                                grid.cellValue(
                                    rowIndex,
                                    "Item_Price_Final",
                                    updatedValueForColumn2
                                );
                                grid.cellValue(
                                    rowIndex,
                                    "Item_Discount",
                                    newValue
                                );

                                let ItemPrice = Number(row.Item_Price);
                                let CostPrice =
                                    (ItemPrice - (newValue / quantity))  + (Extra * quantity);
                                grid.cellValue(
                                    rowIndex,
                                    "Cost_Price",
                                    CostPrice
                                );



                            };
                        }
                        if (
                            e.parentType === "dataRow" &&
                            e.dataField === "Item_Extra"
                        ) {
                            e.editorOptions.onValueChanged = function (args) {
                                const newValue = Number(args.value);
                                const rowIndex = e.row.rowIndex;
                                const grid =
                                    $("#gridContainer").dxDataGrid("instance");
                                let row = e.row.data; // Get the row data
                                let quantity = Number(row.Item_Count);
                                let Discount = Number(row.Item_Discount);
                                let PriceTotal = Number(row.Item_Price_Total);
                                const updatedValueForColumn2 =
                                    PriceTotal -
                                    Discount +
                                    args.value ;
                                grid.cellValue(
                                    rowIndex,
                                    "Item_Price_Final",
                                    updatedValueForColumn2
                                );
                                grid.cellValue(
                                    rowIndex,
                                    "Item_Extra",
                                    newValue
                                );

                                let ItemPrice = Number(row.Item_Price);
                                let CostPrice =
                                    ItemPrice -
                                    (Discount / quantity) +
                                    (args.value / quantity);
                                grid.cellValue(
                                    rowIndex,
                                    "Cost_Price",
                                    CostPrice
                                );


                            };
                        }
                    },
                    onInitNewRow: function (e) {
                        e.data.Item_Discount = 0;
                        e.data.Item_Extra = 0;
                        e.data.Item_Count = 0;
                        e.data.Item_Price = 0;
                        e.data.Item_Price_Total =0;
                        e.data.Item_Price_Final = 0;
                        e.data.Cost_Price =0;
                        let CurrencyGuid = $("#H_Currency_Guid").dxDropDownBox("instance").option("value"); //response.getCurrency.Cur_Guid;
                        let CurrencyEqual = $("#H_Currency_Equal").dxTextBox("instance").option("value");//response.getCurrency.Cur_Cost;
                        e.data.Currency_Guid = CurrencyGuid;
                        e.data.Currency_Equal = CurrencyEqual;
                        e.data.Header_Guid =
                            "00000000-0000-0000-0000-000000000000";
                        e.data.Guid = "00000000-0000-0000-0000-000000000000";
                    },
                    onContentReady: function (e) {
                        // Add custom class to the header panel
                        e.element
                            .find(".dx-datagrid-headers")
                            .addClass("custom-header");
                    },
                    onRowPrepared: function (e) {
                        if (e.rowType === "data" && e.dataIndex % 2 === 1) {
                            e.rowElement.addClass("custom-even-row");
                        }
                        if (e.rowType === "totalFooter") {
                            e.rowElement.addClass("custom-summary-row");
                        }

                        let finalPrice =
                            Number(dataGrid.getTotalSummaryValue("Item_Price_Final"));
                        let discount =
                            Number(dataGrid.getTotalSummaryValue("Item_Discount"));
                        let billDiscount =
                            Number($("#F_Bill_Discount").dxTextBox("instance").option("value"));
                        // console.log(billDiscount);
                        let TotalDiscount = discount + billDiscount;

                        let extra =
                            Number(dataGrid.getTotalSummaryValue("Item_Extra"));
                        let billAddAmount =
                            Number($("#F_Bill_AddAmount").dxTextBox("instance").option("value"));
                        let TotalAddAmount = extra + billAddAmount;
                        let checkCash = $("#H_Pay_Type")
                        .dxSwitch("instance")
                        .option("value");

                        $("#F_Total_Price_Bill")
                        .dxTextBox("instance")
                        .option("value", finalPrice);
                        $("#F_Item_Discount")
                        .dxTextBox("instance")
                        .option("value",discount);
                        $("#F_Total_Discount")
                        .dxTextBox("instance")
                        .option("value",TotalDiscount);
                        $("#F_Item_Add")
                        .dxTextBox("instance")
                        .option("value",extra);
                        $("#F_Total_Add")
                        .dxTextBox("instance")
                        .option("value",TotalAddAmount);



                    },
                    onRowRemoving: function (e) {
                        // console.log("Row removing event:", e.data.Guid);


                        let billTypefordeleting = $.trim($("#card_Billstitle").text());
                        let urlfordeleting = '';
                        switch (billTypefordeleting) {
                            case 'فاتورة مشتريات':
                                    urlfordeleting = 'BillsBuying/'
                                break;
                            case 'فاتورة مبيعات':
                                    urlfordeleting = 'BillsSaling/'
                            break;
                            case 'فاتورة طلبيات':
                                    urlfordeleting = 'BillsOrdering/'
                            break;

                            default:
                                break;
                         }
                         $.ajaxSetup({
                            headers: {
                                "X-CSRF-TOKEN": $(
                                    'meta[name="csrf-token"]'
                                ).attr("content"),
                            },
                        });
                        $.ajax({
                            type: "DELETE",
                            url: urlfordeleting +"destroy",
                            data: {
                                Guid: e.data.Guid,
                            },
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
                                    Bills_UpdateOrInsert();
                                    // Bills_cleardata();
                                    // Bills_fetch();
                                    // Bills_filldata();

                            },
                        });
                    },
                    toolbar: {
                        items: [
                            {
                                name: "addRowButton",
                                showText: "always",
                            },
                            {
                                location: "after",
                                widget: "dxButton",
                                options: {
                                    text: "حذف المواد المختارة",
                                    icon: "trash",
                                    disabled: true,
                                    onClick() {
                                        const selectedRowKeys =
                                            dataGrid.getSelectedRowKeys();

                                        // Assuming 'itemsforadd' is an array
                                        selectedRowKeys.forEach((key) => {
                                            const index =
                                                itemsforadd.indexOf(key);
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
                        dataGrid.option(
                            "toolbar.items[1].options.disabled",
                            !data.selectedRowsData.length
                        );
                    },
                })
                .dxDataGrid("instance");

            const dataGridDiscount = $("#gridContainerDiscount")
                .dxDataGrid({
                    dataSource: response.getDisCount,
                    showBorders: true,
                    // visible:Number(response.getBillSetting.DisAddGrid_Visible)===1,
                    paging: {
                        enabled: false,
                    },
                    editing: {
                        mode: "cell",
                        allowUpdating: true,
                        allowAdding: true,
                        allowDeleting: true,
                    },
                    selection: {
                        mode: "multiple",
                    },
                    rowAlternationEnabled: true,

                    columns: [
                        {
                            dataField: "Guid",
                            caption: "Guid",
                            visible: false,
                        },
                        {
                            dataField: "Header_Guid",
                            caption: "Header_Guid",
                            visible: false,
                        },
                        {
                            dataField: "Account_Guid",
                            caption: "الحساب",
                            lookup: {
                                dataSource: response.getAccounts,
                                displayExpr: "Ac_Name",
                                valueExpr: "Guid",
                            },
                        },
                        {
                            dataField: "Dis_Amount",
                            caption: "الخصم",
                            dataType: "number",
                            alignment: "right",
                            cellTemplate: function(container, options) {
                                var cellValue = options.value;
                                var fontWeight = "bold"; // Set the desired font weight
                                let fontSize = "16px";
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
                                    })
                                    .text(formattedValue)
                                    .appendTo(container);
                            },
                            visible:
                                Number(response.getBillSetting.DiscountAmount) ===
                                1,
                        },
                        {
                            dataField: "Dis_Percent",
                            caption: "خصم %",
                            dataType: "number",
                            alignment: "right",
                            visible:
                                Number(response.getBillSetting.DiscountPercent) ===
                                1,
                            format: {
                                type: "percent",
                                precision: 1, // Display percentage as a whole number
                            },
                            calculateDisplayValue: (data) => {
                                return data.Dis_Percent / 100; // Assuming your data is in 1700 format
                            },
                            cellTemplate: function(container, options) {
                                var cellValue = options.value;
                                var fontWeight = "bold"; // Set the desired font weight
                                let fontSize = "16px";
                                var formattedValue = (cellValue).toFixed(1) + "%";
                                $("<div>")
                                    .css({
                                        "font-size" :fontSize,
                                        "font-weight" : fontWeight,
                                    })
                                    .text(formattedValue)
                                    .appendTo(container);
                            }

                        },
                        {
                            dataField: "Add_Amount",
                            caption: "اضافة",
                            dataType: "number",
                            alignment: "right",
                            visible:
                                Number(response.getBillSetting.AddAmount) ===
                                1,
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "bold"; // Set the desired font weight
                                    let fontSize = "16px";
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
                                        })
                                        .text(formattedValue)
                                        .appendTo(container);
                                }
                        },
                        {
                            dataField: "Add_Percent",
                            caption: "اضافة %",
                            dataType: "number",
                            alignment: "right",
                            visible:
                                Number(response.getBillSetting.AddAmountPercent) ===
                                1,
                            format: {
                                type: "percent",
                                precision: 1, // Display percentage as a whole number
                            },

                            calculateDisplayValue: (data) => {
                                return data.Add_Percent / 100; // Assuming your data is in 1700 format
                            },
                            cellTemplate: function(container, options) {
                                var cellValue = options.value;
                                var fontWeight = "bold"; // Set the desired font weight
                                let fontSize = "16px";
                                var formattedValue = (cellValue).toFixed(1) + "%";
                                $("<div>")
                                    .css({
                                        "font-size" :fontSize,
                                        "font-weight" : fontWeight,
                                    })
                                    .text(formattedValue)
                                    .appendTo(container);
                            }

                        },
                        {
                            dataField: "Notes",
                            caption: "بيان",
                        },
                        {
                            dataField: "Currency_Guid",
                            caption: "العملة",
                            readOnly: true,
                            visible:
                                Number(
                                    response.getBillSetting.Currency_Visible
                                ) === 1,
                            lookup: {
                                dataSource: response.getCurrencyAll,
                                displayExpr: "Cur_Name",
                                valueExpr: "Cur_Guid",
                            },
                        },
                        {
                            dataField: "Currency_Equal",
                            caption: "التعادل",
                            dataType: "number",
                            alignment: "right",
                            readOnly: false,
                            format:"#0.00",
                            visible:
                                Number(response.getBillSetting.Currency_Visible) ===
                                1,
                                cellTemplate: function(container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "bold"; // Set the desired font weight
                                    let fontSize = "16px";
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
                                        })
                                        .text(formattedValue)
                                        .appendTo(container);
                                }

                        },
                    ],
                    summary: {
                        totalItems: [
                            {
                                column: "Dis_Amount",
                                summaryType: "sum",
                                valueFormat: "#0.00",
                            },
                            {
                                column: "Dis_Percent",
                                summaryType: "sum",
                                valueFormat: "#0.00",
                            },
                            {
                                column: "Add_Amount",
                                summaryType: "sum",
                                valueFormat: "#0.00",
                            },
                            {
                                column: "Add_Percent",
                                summaryType: "sum",
                                valueFormat: "#0.00",
                            },
                        ],
                    },

                    onEditorPreparing: function(e){
                        if (
                            e.parentType === "dataRow" &&
                            e.dataField === "Dis_Amount" &&
                            e.editorOptions
                        ) {
                            e.editorOptions.onValueChanged = function (args) {


                                const newValue = args.value;
                                const rowIndex = e.row.rowIndex;
                                // You can use the grid's instance to update the data
                                const grid =
                                    $("#gridContainerDiscount").dxDataGrid("instance");
                                    let row = e.row.data; // Get the row data
                                    let BillDiscount = Number(newValue);
                                    let gridContainer = $('#gridContainer').dxDataGrid("instance");
                                    let totalPrice = Number(gridContainer.getTotalSummaryValue("Item_Price_Total"));
                                    let BillPercent = (BillDiscount / totalPrice) * 100;
                                    // dataGridDiscount.getTotalSummaryValue("Dis_Amount");
                                    grid.cellValue(
                                        rowIndex,
                                        "Dis_Amount",
                                        BillDiscount
                                    );
                                    grid.cellValue(
                                        rowIndex,
                                        "Dis_Percent",
                                        BillPercent
                                    );

                                if(response.getBillSetting.DiscountPercentAffect == true){
                                    let billBodyData = $('#gridContainer').dxDataGrid("instance").option("dataSource");
                                    $("#F_Bill_Discount")
                                    .dxTextBox("instance")
                                    .option("value", 0);
                                     let dataGrid = $('#gridContainer').dxDataGrid("instance");
                                    let itemCount = Number(dataGrid.getTotalSummaryValue("Item_Count"));
                                    let itemDiscount = BillDiscount / itemCount;
                                    for (let index = 0; index < billBodyData.length; index++) {
                                        billBodyData[index].Item_Discount = itemDiscount * Number(billBodyData[index].Item_Count);
                                        billBodyData[index].Item_Price_Final =
                                                    (Number(billBodyData[index].Item_Price_Total) - (itemDiscount * Number(billBodyData[index].Item_Count)))
                                                    + Number(billBodyData[index].Item_Extra);
                                        billBodyData[index].Cost_Price = (Number(billBodyData[index].Item_Price)
                                                    - itemDiscount)
                                                    + Number(billBodyData[index].Item_Extra);


                                    }

                                    $("#F_Item_Discount")
                                    .dxTextBox("instance")
                                    .option("value", BillDiscount);
                                    $("#F_Bill_Discount")
                                    .dxTextBox("instance")
                                    .option("value", 0);
                                    dataGrid.refresh();
                                }
                                else{
                                    $("#F_Bill_Discount")
                                    .dxTextBox("instance")
                                    .option("value", BillDiscount);
                                    let ItemDis = Number($("#F_Item_Discount").dxTextBox("instance").option("value"));
                                    let TotalDiscount = ItemDis + BillDiscount;
                                    $("#F_Total_Discount")
                                    .dxTextBox("instance")
                                    .option("value",TotalDiscount);

                                }
                            };
                        }

                        if (
                            e.parentType === "dataRow" &&
                            e.dataField === "Add_Amount" &&
                            e.editorOptions
                        ) {
                            e.editorOptions.onValueChanged = function (args) {


                                const newValueAddAmount = args.value;
                                const rowIndex = e.row.rowIndex;
                                // You can use the grid's instance to update the data
                                const grid =
                                    $("#gridContainerDiscount").dxDataGrid("instance");
                                    let row = e.row.data; // Get the row data
                                    let addAmount = Number(newValueAddAmount);
                                    let gridContainer = $('#gridContainer').dxDataGrid("instance");
                                    let totalPrice = Number(gridContainer.getTotalSummaryValue("Item_Price_Total"));
                                    let BillPercent = (addAmount / totalPrice) * 100;
                                    // dataGridDiscount.getTotalSummaryValue("Dis_Amount");
                                    grid.cellValue(
                                        rowIndex,
                                        "Add_Amount",
                                        addAmount
                                    );
                                    grid.cellValue(
                                        rowIndex,
                                        "Add_Percent",
                                        BillPercent
                                    );

                                if(response.getBillSetting.AddPercentAffect == true){
                                    let billBodyDataAdd = $('#gridContainer').dxDataGrid("instance").option("dataSource");
                                    let dataGrid = $('#gridContainer').dxDataGrid("instance");
                                    let itemCount = Number(dataGrid.getTotalSummaryValue("Item_Count"));
                                    let itemAddAmount = addAmount / itemCount;
                                    for (let index = 0; index < billBodyDataAdd.length; index++) {

                                        billBodyDataAdd[index].Item_Extra = itemAddAmount * Number(billBodyDataAdd[index].Item_Count);
                                        billBodyDataAdd[index].Item_Price_Final =
                                                    (Number(billBodyDataAdd[index].Item_Price_Total) - Number(billBodyDataAdd[index].Item_Discount))
                                                    + (itemAddAmount * Number(billBodyDataAdd[index].Item_Count));
                                        billBodyDataAdd[index].Cost_Price = Number(billBodyDataAdd[index].Item_Price)
                                                    - (Number(billBodyDataAdd[index].Item_Discount) / Number(billBodyDataAdd[index].Item_Count))
                                                    + itemAddAmount;


                                    }
                                    $("#F_Item_Add")
                                    .dxTextBox("instance")
                                    .option("value", addAmount);
                                    $("#F_Bill_AddAmount")
                                    .dxTextBox("instance")
                                    .option("value", 0);
                                    dataGrid.refresh();
                                }
                                else{

                                    $("#F_Bill_AddAmount")
                                    .dxTextBox("instance")
                                    .option("value", addAmount);
                                    let ItemAdd = Number($("#F_Item_Add").dxTextBox("instance").option("value"));
                                    let TotalAddItem = ItemAdd + addAmount;
                                    $("#F_Total_Add")
                                    .dxTextBox("instance")
                                    .option("value",TotalAddItem);
                                }
                            };
                        }

                        if (
                            e.parentType === "dataRow" &&
                            e.dataField === "Add_Percent" &&
                            e.editorOptions
                        ) {
                            e.editorOptions.onValueChanged = function (args) {


                                const AddPercentNew = args.value;
                                const rowIndex = e.row.rowIndex;
                                // You can use the grid's instance to update the data
                                const grid =
                                    $("#gridContainerDiscount").dxDataGrid("instance");
                                    let row = e.row.data; // Get the row data
                                    let AddPercent = Number(AddPercentNew);
                                    let gridContainer = $('#gridContainer').dxDataGrid("instance");
                                    let totalPrice = Number(gridContainer.getTotalSummaryValue("Item_Price_Total"));
                                    let BillAdd = ((AddPercent /100) * totalPrice) ;
                                    // dataGridDiscount.getTotalSummaryValue("Dis_Amount");
                                    grid.cellValue(
                                        rowIndex,
                                        "Add_Percent",
                                        AddPercent
                                    );
                                    grid.cellValue(
                                        rowIndex,
                                        "Add_Amount",
                                        BillAdd
                                    );

                                if(response.getBillSetting.AddPercentAffect == true){
                                    let billBodyDataAdd = $('#gridContainer').dxDataGrid("instance").option("dataSource");
                                    let dataGrid = $('#gridContainer').dxDataGrid("instance");

                                    for (let index = 0; index < billBodyDataAdd.length; index++) {
                                        billBodyDataAdd[index].Item_Extra = (Number(billBodyDataAdd[index].Item_Price)
                                                    *(AddPercent / 100)) * Number(billBodyDataAdd[index].Item_Count);

                                        billBodyDataAdd[index].Item_Price_Final =
                                                    (Number(billBodyDataAdd[index].Item_Price_Total) - Number(billBodyDataAdd[index].Item_Discount))
                                                    + Number(billBodyDataAdd[index].Item_Extra);
                                        billBodyDataAdd[index].Cost_Price = Number(billBodyDataAdd[index].Item_Price)
                                                    - (Number(billBodyDataAdd[index].Item_Discount) / Number(billBodyDataAdd[index].Item_Count))
                                                    + (Number(billBodyDataAdd[index].Item_Extra) / Number(billBodyDataAdd[index].Item_Count));


                                    }
                                    $('#F_Item_Add')
                                    .dxTextBox("instance")
                                    .option("value",BillAdd);
                                    $('#F_Bill_AddAmount')
                                    .dxTextBox("instance")
                                    .option("value",0);
                                    dataGrid.refresh();
                                }
                                else{
                                    $('#F_Bill_AddAmount')
                                    .dxTextBox("instance")
                                    .option("value",BillAdd);

                                }
                            };
                        }

                        if (
                            e.parentType === "dataRow" &&
                            e.dataField === "Dis_Percent" &&
                            e.editorOptions
                        ) {
                            e.editorOptions.onValueChanged = function (args) {


                                const DisPercentNew = args.value;
                                const rowIndex = e.row.rowIndex;
                                // You can use the grid's instance to update the data
                                const grid =
                                    $("#gridContainerDiscount").dxDataGrid("instance");
                                    let row = e.row.data; // Get the row data
                                    let DisPercent = Number(DisPercentNew);
                                    let gridContainer = $('#gridContainer').dxDataGrid("instance");
                                    let totalPrice = Number(gridContainer.getTotalSummaryValue("Item_Price_Total"));
                                    let BillDis = ((DisPercent /100) * totalPrice) ;
                                    // dataGridDiscount.getTotalSummaryValue("Dis_Amount");
                                    grid.cellValue(
                                        rowIndex,
                                        "Dis_Percent",
                                        DisPercent
                                    );
                                    grid.cellValue(
                                        rowIndex,
                                        "Dis_Amount",
                                        BillDis
                                    );

                                if(response.getBillSetting.DiscountPercentAffect == true){
                                    let billBodyDataDis = $('#gridContainer').dxDataGrid("instance").option("dataSource");
                                    let dataGrid = $('#gridContainer').dxDataGrid("instance");

                                    for (let index = 0; index < billBodyDataDis.length; index++) {
                                        billBodyDataDis[index].Item_Discount = (Number(billBodyDataDis[index].Item_Price)
                                                    *(DisPercent / 100)) * Number(billBodyDataDis[index].Item_Count);
                                        billBodyDataDis[index].Item_Price_Final =
                                                    (Number(billBodyDataDis[index].Item_Price_Total) - Number(billBodyDataDis[index].Item_Discount))
                                                    + Number(billBodyDataDis[index].Item_Extra);
                                        billBodyDataDis[index].Cost_Price = Number(billBodyDataDis[index].Item_Price)
                                                    - (Number(billBodyDataDis[index].Item_Discount) / Number(billBodyDataDis[index].Item_Count))
                                                    + (Number(billBodyDataDis[index].Item_Extra) / Number(billBodyDataDis[index].Item_Count));


                                    }
                                    $("#F_Item_Discount")
                                    .dxTextBox("instance")
                                    .option("value", BillDis);
                                    $("#F_Bill_Discount")
                                    .dxTextBox("instance")
                                    .option("value", 0);
                                    dataGrid.refresh();
                                }
                                else{

                                    $("#F_Bill_Discount")
                                    .dxTextBox("instance")
                                    .option("value", BillDis);

                                }
                            };
                        }

                        // on Value changed of currency ....
                        if (
                            e.parentType === "dataRow" &&
                            e.dataField === "Currency_Guid" &&
                            e.editorOptions
                        ) {
                            e.editorOptions.onValueChanged = function (args) {


                                const currencyGuid = args.value;
                                const rowIndex = e.row.rowIndex;
                                // You can use the grid's instance to update the data
                                const grid =
                                    $("#gridContainerDiscount").dxDataGrid("instance");
                                    let row = e.row.data; // Get the row data
                                    // dataGridDiscount.getTotalSummaryValue("Dis_Amount");
                                    grid.cellValue(
                                        rowIndex,
                                        "Currency_Guid",
                                        currencyGuid
                                    );
                                    let url = 'BillsGetCurrencyEqual/GetCurrencyEqual'
                                    $.ajax({
                                        type: "GET",
                                        url: url,
                                        data: {CurrencyGuid:currencyGuid},
                                        success: function (response) {
                                            grid.cellValue(
                                                rowIndex,
                                                "Currency_Equal",
                                                response.getCurrencyEqual
                                            )
                                        }
                                    });
                                    // grid.cellValue(
                                    //     rowIndex,
                                    //     "Dis_Amount",
                                    //     BillDis
                                    // );

                                // if(response.getBillSetting.DiscountPercentAffect == true){
                                //     let billBodyDataDis = $('#gridContainer').dxDataGrid("instance").option("dataSource");
                                //     let dataGrid = $('#gridContainer').dxDataGrid("instance");

                                //     for (let index = 0; index < billBodyDataDis.length; index++) {
                                //         billBodyDataDis[index].Item_Discount = (Number(billBodyDataDis[index].Item_Price)
                                //                     *(DisPercent / 100)) * Number(billBodyDataDis[index].Item_Count);
                                //         billBodyDataDis[index].Item_Price_Final =
                                //                     (Number(billBodyDataDis[index].Item_Price_Total) - Number(billBodyDataDis[index].Item_Discount))
                                //                     + Number(billBodyDataDis[index].Item_Extra);
                                //         billBodyDataDis[index].Cost_Price = Number(billBodyDataDis[index].Item_Price)
                                //                     - (Number(billBodyDataDis[index].Item_Discount) / Number(billBodyDataDis[index].Item_Count))
                                //                     + (Number(billBodyDataDis[index].Item_Extra) / Number(billBodyDataDis[index].Item_Count));


                                //     }
                                //     $("#F_Item_Discount")
                                //     .dxTextBox("instance")
                                //     .option("value", BillDis);
                                //     $("#F_Bill_Discount")
                                //     .dxTextBox("instance")
                                //     .option("value", 0);
                                //     dataGrid.refresh();
                                // }
                                // else{

                                //     $("#F_Bill_Discount")
                                //     .dxTextBox("instance")
                                //     .option("value", BillDis);

                                // }
                            };
                        }

                    },

                    onEditorPrepared: function (e) {

                    },
                    onCellPrepared : function(e){
                    if(e.rowType === "data" && e.column.dataField === "Dis_Amount" ) {
                            e.cellElement.css("color", e.data.Dis_Amount > 0 ? "red" : "Black");
                    }
                    if(e.rowType === "data" && e.column.dataField === "Dis_Percent" ) {
                        e.cellElement.css("color", e.data.Dis_Percent > 0 ? "red" : "Black");
                }
                    if(e.rowType === "data" && e.column.dataField === "Add_Amount" ) {
                        e.cellElement.css("color", e.data.Add_Amount > 0 ? "green" : "Black");
                    }
                    if(e.rowType === "data" && e.column.dataField === "Add_Percent" ) {
                        e.cellElement.css("color", e.data.Add_Percent > 0 ? "green" : "Black");
                }
                    },
                    onInitNewRow: function (e) {
                        let DiscountGuid =
                            response.getBillSetting.Discount_Guid;

                        e.data.Account_Guid = DiscountGuid;
                        e.data.Guid = "00000000-0000-0000-0000-000000000000";
                        e.data.Header_Guid =
                            "00000000-0000-0000-0000-000000000000";
                        e.data.Dis_Amount = 0;
                        e.data.Dis_Percent = 0;
                        e.data.Add_Amount = 0;
                        e.data.Add_Percent = 0;
                        e.data.Notes = " ";
                        let CurrencyGuid = $("#H_Currency_Guid").dxDropDownBox("instance").option("value"); //response.getCurrency.Cur_Guid;
                        let CurrencyEqual = $("#H_Currency_Equal").dxTextBox("instance").option("value");//response.getCurrency.Cur_Cost;
                        e.data.Currency_Guid = CurrencyGuid;
                        e.data.Currency_Equal = CurrencyEqual;
                    },
                    onContentReady: function (e) {
                        // Add custom class to the header panel
                        e.element
                            .find(".dx-datagrid-headers")
                            .addClass("custom-header");
                    },
                    onRowPrepared: function (e) {
                        if (e.rowType === "data" && e.dataIndex % 2 === 1) {
                            e.rowElement.addClass("custom-even-row");
                        }
                        if (e.rowType === "totalFooter") {
                            e.rowElement.addClass("custom-summary-row");
                        }


                    },
                    onRowRemoving: function (e) {
                        let billTypefordeleting = $.trim($("#card_Billstitle").text());
                        let urlfordeleting = '';
                        switch (billTypefordeleting) {
                            case 'فاتورة مشتريات':
                                urlfordeleting = 'BillsBuying/'
                                break;
                            case 'فاتورة مبيعات':
                                urlfordeleting = 'BillsSaling/'
                            break;
                            case 'فاتورة طلبيات':
                                urlfordeleting = 'BillsOrdering/'
                            break;

                            default:
                                break;
                        }
                        $.ajaxSetup({
                            headers: {
                                "X-CSRF-TOKEN": $(
                                    'meta[name="csrf-token"]'
                                ).attr("content"),
                            },
                        });

                        $.ajax({
                            type: "DELETE",
                            url: urlfordeleting +"destroy",
                            data: {
                                Guid: e.data.Guid,
                            },

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
                                    Bills_UpdateOrInsert();
                                    // Bills_cleardata();
                                    // Bills_fetch();
                                    // Bills_filldata();

                            },
                        });
                    },
                    toolbar: {
                        items: [
                            {
                                name: "addRowButton",
                                showText: "always",
                            },
                            {
                                location: "after",
                                widget: "dxButton",
                                options: {
                                    text: "حذف الحقول المختارة",
                                    icon: "trash",
                                    disabled: true,
                                    onClick() {
                                        dataGridDiscount
                                            .getSelectedRowKeys()
                                            .forEach((key) => {
                                                itemsforadd.remove(key);
                                            });
                                        dataGridDiscount.refresh();
                                    },
                                },
                            },
                        ],
                    },
                    onSelectionChanged(data) {
                        dataGridDiscount.option(
                            "toolbar.items[1].options.disabled",
                            !data.selectedRowsData.length
                        );
                    },
                })
                .dxDataGrid("instance");
                if(Number(response.getBillSetting.DisAddGrid_Visible) === 0){
                    $('.DisAddGrid').hide();
                }else{
                    $(".DisAddGrid").show();
                }
        },
    });
}

function getIDofItem(partnumber) {
    let BillType = $.trim($("#card_Billstitle").text());
    let url = '';
    switch (BillType) {
        case 'فاتورة مشتريات':
                url = 'BillsBuyingfill/'
            break;
        case 'فاتورة مبيعات':
                url = 'BillsSalingfill/'
        break;
        case 'فاتورة طلبيات':
                url = 'BillsOrderingfill/'
        break;

        default:
            break;
    }

    if (partnumber != null) {
        var result = $.ajax({
            type: "GET",
            url: url +"GetID",
            data: { PartNumber: partnumber },
        });
        return result
            .done(function (responseData, textStatus, jqXHR) {
                return jqXHR.responseJSON;
            })
            .fail(function (jqXHR, textStatus, errorThrown) {});
    }
}
// End CRUD Functions.

$(document).ready(function () {
    $("#btnNewAdd").dxButton({
        stylingMode: "contained",
        text: "اضافة",
        type: "success",
        icon: "add",
        width: 120,
        onClick() {
            let billType = $("#H_Bill_Type").dxDropDownBox("instance").option("value");
            let BillTypeGetting = $.trim($("#card_Billstitle").text());
            let url = '';
            switch (BillTypeGetting) {
                case 'فاتورة مشتريات':
                        url = 'BillsBuyingfill/'
                    break;
                case 'فاتورة مبيعات':
                        url = 'BillsSalingfill/'
                break;
                case 'فاتورة طلبيات':
                        url = 'BillsOrderingfill/'
                break;

                default:
                    break;
            }
            $.ajax({
                type: "GET",
                url: url + "getBillNumber",
                data: { BillType: billType },
                success: function (response) {
                    Bills_cleardata();
                    Bills_fetch();
                    Bills_filldata();
                    let BillNumber = Number(response.BillNumber) + 1;
                    $("#H_Bill_Number")
                        .dxTextBox("instance")
                        .option("value", BillNumber);
                },
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
        icon: "check",
        width: 120,
        onClick() {
            Bills_UpdateOrInsert();
        },
    });
});
// End Button Save
