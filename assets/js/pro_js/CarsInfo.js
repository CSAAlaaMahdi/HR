CarsInfo_fetch();
// CarsInfo_filldata();

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
        $("#H_Guid").dxTextBox({
            placeholder: "Guid",
            inputAttr: { "aria-label": "Guid" },
        });
    });
    $(() => {
        $("#H_Bill_Number").dxTextBox({
            placeholder: "Bill Number",
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
        $("#H_Pay_Type").dxSwitch({
            onText:"Cash",
            offText:"Debit",
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
    });
    $(() => {
        $("#H_Currency_Equal").dxTextBox({
            placeholder: "Equal",
            inputAttr: { "aria-label": "Equal" },
            readOnly: false,
        });
    });
    $(() => {
        $("#H_Cash_Amount").dxTextBox({
            placeholder: "cash Amount",
            inputAttr: { "aria-label": "Cash Amount" },
            readOnly: true,
            valueFormat:"#0.00",
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
            label: "Notes",
        });
    });
    $(() => {

        $("#F_Total_Price_Bill").dxTextBox({
            placeholder: "Total Price",
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
            placeholder: "Item Discount",
            inputAttr: { "aria-label": "Item Discount" },
            readOnly: true,
            dataType:"number",
            format:"#0.00",
            value:0,
            // onValueChanged: function (e) {
            //     var roundedValue = parseFloat(e.value).toFixed(2);
            //     e.component.option("value", roundedValue);

            // },
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
            placeholder: "Bill Discount",
            inputAttr: { "aria-label": "Bill Discount" },
            readOnly: true,
            value:0,
            dataType: "number",
            // onValueChanged: function (e) {
            //     var roundedValue = parseFloat(e.value).toFixed(3);
            //     e.component.option("value", roundedValue);

            // },

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
            placeholder: "Total Discount",
            inputAttr: { "aria-label": "Total Discount" },
            readOnly: true,
            value:0,
            // onValueChanged: function (e) {

            //     var roundedValue = parseFloat(e.value).toFixed(2);
            //     e.component.option("value", roundedValue);
            // }
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
            placeholder: "Add Amount",
            inputAttr: { "aria-label": "AddAmount" },
            readOnly: true,
            value: 0,
            // onValueChanged: function (e) {
            //     var roundedValue = parseFloat(e.value).toFixed(2);
            //     e.component.option("value", roundedValue);

            // },
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
            placeholder: "Item Add",
            inputAttr: { "aria-label": "Item Add" },
            readOnly: true,
            value: 0,
            // onValueChanged: function (e) {
            //     var roundedValue = parseFloat(e.value).toFixed(2);
            //     e.component.option("value", roundedValue);

            // },
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
            placeholder: "Currency Guid",
            inputAttr: { "aria-label": "Total " },
            readOnly: true,
        });
    });
    $(() => {
        $("#F_Currency_Equal").dxTextBox({
            placeholder: "Equal",
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
            placeholder: "Total Add",
            inputAttr: { "aria-label": "Total Add" },
            readOnly: true,
            value: 0,
            // onValueChanged: function (e){
            //     var roundedValue = parseFloat(e.value).toFixed(2);
            //     e.component.option("value", roundedValue);
            // }
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

function CarsInfo_cleardata() {
    // $("#H_Guid").dxTextBox("instance").option("value", "");
    // $("#H_Bill_Date").dxDateBox("instance").option("Date", "");
    // $("#H_Store_Guid").dxDropDownBox("instance").option("value", "");
    // $("#H_Cust_Guid").dxDropDownBox("instance").option("value", "");
    // $("#H_Acc_Guid").dxDropDownBox("instance").option("value", "");
    // $("#H_Currency_Guid").dxDropDownBox("instance").option("value", "");
    // $("#H_Currency_Equal").dxTextBox("instance").option("value", "");
    // $("#H_Cash_Amount").dxTextBox("instance").option("value", "");
    // $("#H_Note_Header").dxTextArea("instance").option("value", "");
    // $("#F_Guid").dxTextBox("instance").option("value", "");
    // $("#H_Pay_Type").dxSwitch("instance").option("value", false);
    // $("#gridContainer").dxDataGrid({
    //     dataSource: "",
    // });
    // $("#CarsInfoGrid").dxDataGrid({
    //     dataSource: "",
    // });
}
//Begin CRUD Function...
function CarsInfo_chechdata() {}

function CarsInfo_UpdateOrInsert() {
    // let url = "CarsInfo";
    // var selectedDate = $("#H_Bill_Date").dxDateBox("instance").option("value");
    // var formattedDate = new Intl.DateTimeFormat("en-US", {
    //     year: "numeric",
    //     month: "2-digit",
    //     day: "2-digit",
    // }).format(selectedDate);
    // let billBody = $("#gridContainer")
    //     .dxDataGrid("instance")
    //     .option("dataSource");
    // let billDisAdd = $("#gridContainerDiscount")
    //     .dxDataGrid("instance")
    //     .option("dataSource");
    // let data = {
    //     H_Guid: $("#H_Guid").dxTextBox("instance").option("value"),
    //     H_Bill_Number: $("#H_Bill_Number")
    //         .dxTextBox("instance")
    //         .option("value"),
    //     H_Bill_Date: formattedDate,
    //     H_Pay_Type: (function () {
    //         if ($("#H_Pay_Type").dxSwitch("instance").option("value")) {
    //             return 1;
    //         } else return 0;
    //     })(),
    //     H_Cash_Amount: $("#H_Cash_Amount")
    //         .dxTextBox("instance")
    //         .option("value"),
    //     H_Store_Guid: $("#H_Store_Guid")
    //         .dxDropDownBox("instance")
    //         .option("value"),
    //     H_Acc_Guid: $("#H_Acc_Guid").dxDropDownBox("instance").option("value"),
    //     H_Cust_Guid: $("#H_Cust_Guid")
    //         .dxDropDownBox("instance")
    //         .option("value"),
    //     H_Currency_Guid: $("#H_Currency_Guid")
    //         .dxDropDownBox("instance")
    //         .option("value"),
    //     H_Currency_Equal: $("#H_Currency_Equal")
    //         .dxTextBox("instance")
    //         .option("value"),
    //     H_Note_Header: $("#H_Note_Header")
    //         .dxTextArea("instance")
    //         .option("value"),
    //     H_Bill_Type: $("#H_Bill_Type")
    //         .dxDropDownBox("instance")
    //         .option("value"),
    //     H_Bill_Account: $("#H_Bill_Account")
    //         .dxDropDownBox("instance")
    //         .option("value"),
    //     H_Discount_Account: $("#H_Discount_Account")
    //         .dxDropDownBox("instance")
    //         .option("value"),
    //     Bill_Body: billBody,
    //     Bill_DisAdd: billDisAdd,
    //     F_Guid: $("#F_Guid").dxTextBox("instance").option("value"),
    //     F_Total_Price_Bill: $("#F_Total_Price_Bill")
    //         .dxTextBox("instance")
    //         .option("value"),
    //     F_Total_Discount: $("#F_Total_Discount")
    //         .dxTextBox("instance")
    //         .option("value"),
    //     F_Item_Discount: $("#F_Item_Discount")
    //         .dxTextBox("instance")
    //         .option("value"),
    //     F_Bill_Discount: $("#F_Bill_Discount")
    //         .dxTextBox("instance")
    //         .option("value"),
    //     F_TotalAward: $("#F_TotalAward").dxTextBox("instance").option("value"),
    //     F_Currency_Guid: $("#F_Currency_Guid")
    //         .dxTextBox("instance")
    //         .option("value"),
    //     F_Currency_Equal: $("#F_Currency_Equal")
    //         .dxTextBox("instance")
    //         .option("value"),
    //     F_checkAward: (function () {
    //         if ($("#F_checkAward").dxSwitch("instance").option("value")) {
    //             return 1;
    //         } else return 0;
    //     })(),
    // };
    // console.log(data);
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
    //         if (response) {
    //             $("#notificationContainer")
    //                 .dxToast("instance")
    //                 .option("message", response.status);
    //             $("#notificationContainer").dxToast("instance").show();
    //             // CarsInfo_cleardata();
    //             // CarsInfo_fetch();
    //             // CarsInfo_filldata();
    //         }
    //     },
    // });
}

function CarsInfo_filldata() {
    // let billType = $("#card_CarsInfotitle").text();
    // var url = "CarsInfofill/";
    // $(document).ready(function () {
    //     $.ajax({
    //         type: "GET",
    //         url: url + "filldata",
    //         data: { BillType: billType },
    //         success: function (response) {

    //         },
    //     });
    // });
}

function CarsInfo_fetch() {

    let url = "CarsInfo/";
    $.ajax({
        type: "GET",
        url: url + "create",
        success: function (response) {


            const dataGrid = $("#CarsInfoGrid")
                .dxDataGrid({
                    dataSource: response.getCarsInfo,
                    showBorders: true,
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
                          width:350,
                        },
                        filterRow: { visible: true },
                        groupPanel: { visible: true },
                        grouping: {
                          autoExpandAll: false,
                        },
                        allowColumnReordering: true,
                        showBorders: true,
                    editing: {
                        mode: "cell",
                        allowUpdating: false,
                        allowAdding: false,
                        allowDeleting: false,
                    },
                    selection: {
                        mode: "single",
                    },
                    rowAlternationEnabled: true,

                    columns: [
                        {
                            dataField: "Guid",
                            caption: "Guid",
                            visible: false,
                        },
                        {
                            dataField: "Parent_Guid",
                            caption: "Header Guid",
                            visible: false,
                        },
                        {
                            dataField: "Company_Name",
                            caption: "Company",

                        },
                        {
                            dataField: "CarType",
                            caption: "Car Type",

                        },
                        {
                            dataField: "Brand_Name",
                            caption: "Brand",

                        },
                        {
                            dataField: "CylinderCount",
                            caption: "Cylinder Count",

                        },
                        {
                            dataField: "Engine",
                            caption: "Engine",

                        },
                        {
                            dataField: "EngineType",
                            caption: "Engine Type",

                        },
                        {
                            dataField: "FuelSystem",
                            caption: "Fuel Type",

                        },
                        {
                            dataField: "Transmission",
                            caption: "Transmission",

                        },
                        {
                            dataField: "VIN",
                            caption: "VIN",

                        },
                        {
                            dataField: "Year",
                            caption: "Production Date",

                        },

                        {
                            dataField: "CarCount",
                            caption: "Cars Count",

                        },
                        {
                            dataField: "Notes",
                            caption: "Notes",

                        },


                    ],
                    summary: {
                        totalItems: [
                            {
                                column: "CarCount",
                                summaryType: "sum",
                                valueFormat: "#0.00",
                            },

                        ],
                    },
                    export: {
                        enabled: true,
                        formats: ['xlsx', 'pdf']
                    },
                    onExporting(e) {
                        if (e.format === 'xlsx') {
                            const workbook = new ExcelJS.Workbook();
                            const worksheet = workbook.addWorksheet("Main sheet");
                            DevExpress.excelExporter.exportDataGrid({
                                worksheet: worksheet,
                                component: e.component,
                            }).then(function() {
                                workbook.xlsx.writeBuffer().then(function(buffer) {
                                    saveAs(new Blob([buffer], { type: "application/octet-stream" }), "DataGrid.xlsx");
                                });
                            });
                        }
                        else if (e.format === 'pdf') {
                            const doc = new jsPDF();
                            DevExpress.pdfExporter.exportDataGrid({
                                jsPDFDocument: doc,
                                component: e.component,
                            }).then(() => {
                                doc.save('DataGrid.pdf');
                            });
                        }
                    },

                    // toolbar: {
                    //     items: [
                    //         {
                    //             name: "addRowButton",
                    //             showText: "always",
                    //         },
                    //         {
                    //             location: "after",
                    //             widget: "dxButton",
                    //             options: {
                    //                 text: "Delete Selected Records",
                    //                 icon: "trash",
                    //                 disabled: true,
                    //                 onClick() {
                    //                     // const selectedRowKeys =
                    //                     //     dataGrid.getSelectedRowKeys();

                    //                     // // Assuming 'itemsforadd' is an array
                    //                     // selectedRowKeys.forEach((key) => {
                    //                     //     const index =
                    //                     //         itemsforadd.indexOf(key);
                    //                     //     if (index !== -1) {
                    //                     //         itemsforadd.splice(index, 1);
                    //                     //     }
                    //                     // });
                    //                     // dataGrid.refresh();
                    //                 },
                    //             },
                    //         },
                    //     ],
                    // },
                    onContentReady: function (e) {
                        // Add custom class to the header panel
                        e.element
                            .find(".dx-datagrid-headers")
                            .addClass("custom-header");

                    },
                    onRowPrepared: function (e){
                        if (e.rowType === "data" && e.dataIndex % 2 === 1) {
                            e.rowElement.addClass("custom-even-row");
                        }
                        if (e.rowType === "totalFooter") {
                            e.rowElement.addClass("custom-summary-row");
                        }
                    },
                    onSelectionChanged(data) {
                        dataGrid.option(
                            "toolbar.items[1].options.disabled",
                            !data.selectedRowsData.length
                        );
                    },
                })
                .dxDataGrid("instance");


        },
    });
}


// End CRUD Functions.

$(document).ready(function () {
    $("#btnNewAdd").dxButton({
        stylingMode: "contained",
        text: "New",
        type: "success",
        icon: "add",
        width: 120,
        onClick() {
            // let billType = $("#card_CarsInfotitle").text();
            // let url = "CarsInfofill/";
            // $.ajax({
            //     type: "GET",
            //     url: url + "getBillNumber",
            //     data: { BillType: billType },
            //     success: function (response) {

            //     },
            // });
        },
    });
});

// Button Save Data
$(document).ready(function () {
    $("#btnSave").dxButton({
        stylingMode: "contained",
        text: "Save",
        type: "Default",
        icon: "check",
        width: 120,
        onClick() {
            // CarsInfo_UpdateOrInsert();
        },
    });
});
// End Button Save
