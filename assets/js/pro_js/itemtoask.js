itemstoask_fetch();
itemstoask_filldata();

// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#IT_Guid").dxTextBox({
            placeholder: "ت",
            inputAttr: { "aria-label": "IT_Guid" },

        });
    });

    $(() => {
        $("#IT_PartNumber").dxTextBox({
            placeholder: "رمز المادة",
            inputAttr: { "aria-label": "IT_PartNumber" },
        });
    });
    $(() => {
        $("#IT_VIN").dxTextBox({
            placeholder: "ادخل شاصي العجلة ",
            inputAttr: { "aria-label": "IT_VIN" },
        });
    });
    $(() => {
        $("#IT_Year").dxTextBox({
            placeholder: "السنة ",
            inputAttr: { "aria-label": "Years" },
        });
    });
    $(() => {
        $("#IT_CarNo").dxTextBox({
            placeholder: "رقم العجلة ",
            inputAttr: { "aria-label": "Years" },
        });
    });
    $(() => {
        $("#IT_QY").dxNumberBox({
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
        const searchBox = $("#IT_Engine")
            .dxSelectBox({
                // dataSource: products,
                // displayExpr: "IT_Engine",
                inputAttr: { "aria-label": "IT_Engine" },
                // valueExpr: "IT_Engine",
                searchEnabled: true,
                placeholder:"ادخل تفاصيل المحرك",
                itemTemplate: function(data, index, element) {
                    // Customize the appearance of each item
                    var $itemElement = $(element);
                    $itemElement.text(data); // Replace YourProperty with the actual property you want to display
                    $itemElement.css({
                        "font-size": "17px",
                        "font-weight": "600",
                        "color": "#283741",
                        // Add any additional styles you need
                    });
                },

            })
            .dxSelectBox("instance");
    });
    $(() => {
        const searchBox = $("#IT_ModelCode")
            .dxSelectBox({
                // dataSource: products,
                // displayExpr: "IT_ModelCode",
                inputAttr: { "aria-label": "ModelCode" },
                // valueExpr: "IT_ModelCode",
                searchEnabled: true,
                placeholder:"ادخل تفاصيل الموديل",
                itemTemplate: function(data, index, element) {
                    // Customize the appearance of each item
                    var $itemElement = $(element);
                    $itemElement.text(data); // Replace YourProperty with the actual property you want to display
                    $itemElement.css({
                        "font-size": "17px",
                        "font-weight": "600",
                        "color": "#283741",
                        // Add any additional styles you need
                    });
                },
            })
            .dxSelectBox("instance");
    });
    $(() => {
        const searchBox = $("#IT_FuelSystem")
            .dxSelectBox({
                // dataSource: products,
                // displayExpr: "IT_FuelSystem",
                inputAttr: { "aria-label": "IT_FuelSystem" },
                // valueExpr: "IT_FuelSystem",
                searchEnabled: true,
                placeholder:"ادخل نوع الوقود",
                itemTemplate: function(data, index, element) {
                    // Customize the appearance of each item
                    var $itemElement = $(element);
                    $itemElement.text(data); // Replace YourProperty with the actual property you want to display
                    $itemElement.css({
                        "font-size": "17px",
                        "font-weight": "600",
                        "color": "#283741",
                        // Add any additional styles you need
                    });
                },
            })
            .dxSelectBox("instance");
    });
    $(() => {
        const searchBox = $("#IT_Transmission")
            .dxSelectBox({
                // dataSource: products,
                // displayExpr: "IT_Transmission",
                inputAttr: { "aria-label": "IT_Transmission" },
                // valueExpr: "IT_Transmission",
                searchEnabled: true,
                placeholder:"ادخل  نوع ناقل الحركة",
                itemTemplate: function(data, index, element) {
                    // Customize the appearance of each item
                    var $itemElement = $(element);
                    $itemElement.text(data); // Replace YourProperty with the actual property you want to display
                    $itemElement.css({
                        "font-size": "17px",
                        "font-weight": "600",
                        "color": "#283741",
                        // Add any additional styles you need
                    });
                },
            })
            .dxSelectBox("instance");
    });
    $(() => {
        const searchBox = $("#IT_ItemType")
            .dxSelectBox({
                // dataSource: products,
                // displayExpr: "IT_ItemType",
                inputAttr: { "aria-label": "IT_ItemType" },
                // valueExpr: "IT_ItemType",
                searchEnabled: true,
                placeholder:"ادخل  نوع  المادة",
                itemTemplate: function(data, index, element) {
                    // Customize the appearance of each item
                    var $itemElement = $(element);
                    $itemElement.text(data); // Replace YourProperty with the actual property you want to display
                    $itemElement.css({
                        "font-size": "17px",
                        "font-weight": "600",
                        "color": "#283741",
                        // Add any additional styles you need
                    });
                },
            })
            .dxSelectBox("instance");
    });
    $(() => {
        const searchBox = $("#IT_CarType")
            .dxSelectBox({
                // dataSource: products,
                // displayExpr: "IT_CarType",
                inputAttr: { "aria-label": "IT_CarType" },
                // valueExpr: "IT_CarType",
                searchEnabled: true,
                placeholder:"ادخل  نوع  العجلة",
                itemTemplate: function(data, index, element) {
                    // Customize the appearance of each item
                    var $itemElement = $(element);
                    $itemElement.text(data); // Replace YourProperty with the actual property you want to display
                    $itemElement.css({
                        "font-size": "17px",
                        "font-weight": "600",
                        "color": "#283741",
                        // Add any additional styles you need
                    });
                },
            })
            .dxSelectBox("instance");
    });
    $(() => {
        const searchBox = $("#IT_ItemName")
            .dxSelectBox({
                // dataSource: products,
                // displayExpr: "IT_ItemName",
                inputAttr: { "aria-label": "IT_ItemName" },
                // valueExpr: "IT_ItemName",
                searchEnabled: true,
                placeholder:"ادخل  اسم  المادة",
                itemTemplate: function(data, index, element) {
                    // Customize the appearance of each item
                    var $itemElement = $(element);
                    $itemElement.text(data); // Replace YourProperty with the actual property you want to display
                    $itemElement.css({
                        "font-size": "17px",
                        "font-weight": "600",
                        "color": "#283741",
                        // Add any additional styles you need
                    });
                },
            })
            .dxSelectBox("instance");
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

});
// End Components.


$(document).ready(function () {
    $("#danger-contained").dxButton({
        stylingMode: "contained",
        text: "اغلاق",
        type: "danger",
        icon:"close",
        width: 120,
        height:50,
        onClick() {
            var displaycard = document.getElementById("Itemsaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_Itemstitle").innerText = "";
                // StoriesTree_cleardata();
                // StoriesTree_setStCode();
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
        height:52,
        onClick() {
            // let IT_Guid = $('#IT_Guid').dxTextBox("instance").option("value");
            // if(IT_Guid == null || IT_Guid ==""){
            //     // StoriesTree_insert();
            // }else{
            //     // StoriesTree_update();
            // }


        },
    });
});
// End Button Save
// Button Add Data
$(document).ready(function () {
    $("#btnAddNew").dxButton({
        stylingMode: "contained",
        text: "اضافة",
        type: "success",
        icon: 'plus',
        width: 120,
        height:52,
        onClick() {
            var displaycard =
                        document.getElementById("Itemsaction");
                        if (displaycard.style.display == "none") {
                            // ItemsTree_filldata();
                            document.getElementById(
                                "card_Itemstitle"
                            ).innerText = "اضافة مادة";

                            displaycard.style.display = "block";
                            document
                                .getElementById("btnSave")
                                .scrollIntoView();
                        } else {
                            displaycard.style.display = "none";
                            document.getElementById(
                                "card_Itemstitle"
                            ).innerText = "";
                            displaycard.style.display = "block";
                            document.getElementById(
                                "card_Itemstitle"
                            ).innerText = "اضافة مادة";
                            document
                                .getElementById("btnSave")
                                .scrollIntoView();
                        }


        },
    });
});
// End Button Add


function itemstoask_cleardata() {
    $("#IT_Guid").dxTextBox("instance").option("value","");
    $("#IT_ItemType").dxSelectBox("instance").option("value","");
    $("#IT_ItemName").dxSelectBox("instance").option("value","");
    $("#IT_CarType").dxSelectBox("instance").option("value","");
    $("#IT_Engine").dxSelectBox("instance").option("value","");
    $("#IT_ModelCode").dxSelectBox("instance").option("value","");
    $("#IT_FuelSystem").dxSelectBox("instance").option("value","");
    $("#IT_Transmission").dxSelectBox("instance").option("value","");
    $("#IT_QY").dxNumberBox("instance").option("value",0);
    $("#IT_PartNumber").dxTextBox("instance").option("value","");
    $("#IT_CarNo").dxTextBox("instance").option("value","");
    $("#IT_VIN").dxTextBox("instance").option("value","");
    $("#IT_Year").dxTextBox("instance").option("value","");
    $("#IT_Notes").dxTextArea("instance").option("value","");

}

function itemstoask_chechdata() {
    if ($.trim($('.IT_ItemType').val()).length == 0) {
        error_IT_ItemType = "Require";
        $('#error_IT_ItemType').text(error_IT_ItemType);
    } else {
        error_IT_ItemType = "";
        $('#error_IT_ItemType').text(error_IT_ItemType);
    }
    if ($.trim($('.IT_ItemName').val()).length == 0) {
        error_IT_ItemName = "Require";
        $('#error_IT_ItemName').text(error_IT_ItemName);
    } else {
        error_IT_ItemName = "";
        $('#error_IT_ItemName').text(error_IT_ItemName);
    }
    if ($.trim($('.IT_PartNumber').val()).length == 0) {
        error_IT_PartNumber = "Require";
        $('#error_IT_PartNumber').text(error_IT_PartNumber);
    } else {
        error_IT_PartNumber = "";
        $('#error_IT_PartNumber').text(error_IT_PartNumber);
    }



}

function itemstoask_UpdateOrCreate() {
    var url = 'itemstoask';
    var data = {
        'IT_Guid' : $('#IT_Guid').dxTextBox("instance").option("value"),
        'IT_ItemType': $('#IT_ItemType').dxSelectBox("instance").option("value"),
        'IT_ItemName': $('#IT_ItemName').dxSelectBox("instance").option("value"),
        'IT_PartNumber': $('#IT_PartNumber').dxTextBox("instance").option("value"),
        'IT_QY': $('#IT_QY').dxNumberBox("instance").option("value"),
        'IT_CarType': $('#IT_CarType').dxSelectBox("instance").option("value"),
        'IT_Engine': $('#IT_Engine').dxSelectBox("instance").option("value"),
        'IT_ModelCode': $('#IT_ModelCode').dxSelectBox("instance").option("value"),
        'IT_FuelSystem': $('#IT_FuelSystem').dxSelectBox("instance").option("value"),
        'IT_Transmission': $('#IT_Transmission').dxSelectBox("instance").option("value"),
        'IT_CarNo': $('#IT_CarNo').dxTextBox("instance").option("value"),
        'IT_VIN': $('#IT_VIN').dxTextBox("instance").option("value"),
        'IT_Year': $('#IT_Year').dxTextBox("instance").option("value"),
        'IT_Notes': $('#IT_Notes').dxTextArea("instance").option("value"),

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
        },

    });


}

function itemstoask_filldata() {
    var url = "itemstoasksfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + 'filldata',
            success: function (response) {

                $('#IT_ItemType')
                .dxSelectBox("instance")
                .option({
                    dataSource:response.ItemType,
                })
                $('#IT_ItemName')
                .dxSelectBox("instance")
                .option({
                    dataSource:response.ItemName,
                })

                $('#IT_CarType')
                .dxSelectBox("instance")
                .option({
                    dataSource:response.CarType,
                })

                $('#IT_Engine')
                .dxSelectBox("instance")
                .option({
                    dataSource:response.Engine,
                })

                $('#IT_ModelCode')
                .dxSelectBox("instance")
                .option({
                    dataSource:response.ModelCode,
                })

                $('#IT_Transmission')
                .dxSelectBox("instance")
                .option({
                    dataSource:response.Transmission,
                })

                $('#IT_FuelSystem')
                .dxSelectBox("instance")
                .option({
                    dataSource:response.FuelSystem,
                })

            }
        });

    });
}
function itemstoask_fetch() {

    $(document).ready(function () {
        $(document).ready(function () {
            var url = "itemstoask/";
            $.ajax({
                type: "GET",
                url: url + "create",
                success: function (response) {

                    $(function () {
                        const dataGrid = $("#ItemsDataGrid").dxDataGrid({
                            dataSource: response.getItems,
                            keyExpr: "id",
                            paging: {
                                enabled: true,
                                pageSize: 5, // Number of records per page
                                pageIndex: 0, // Initially show the first page
                            },
                            pager: {
                                showPageSizeSelector: true,
                                showInfo: true,
                                allowedPageSizes: [10, 25, 50, 100, "all"],
                                showNavigationButtons: true,
                            },
                            remoteOperations: false,
                            searchPanel: {
                                visible: true,
                                highlightCaseSensitive: true,
                                width: 500,
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
                                    dataField:"id",
                                    caption:"ت",
                                    width:75,
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        var fontWeight = "600"; // Set the desired font weight
                                        let fontSize = "17px";
                                        let fontColor = '#283741';
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
                                    dataField: "IT_ItemType",
                                    caption: "نوع المادة",
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        var fontWeight = "600"; // Set the desired font weight
                                        let fontSize = "14px";
                                        let fontColor = '#283741';
                                        $("<div>")
                                            .css({
                                                "font-size" :fontSize,
                                                "font-weight" : fontWeight,
                                                "color" : fontColor,
                                            })
                                            .text(cellValue)
                                            .appendTo(container);
                                    },
                                    // groupIndex: 0,
                                },
                                {
                                    dataField: "IT_ItemName",
                                    caption: "اسم المادة",
                                    alignment: "center",
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        var fontWeight = "600"; // Set the desired font weight
                                        let fontSize = "14px";
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
                                                "white-space": "pre-wrap",
                                            })
                                            .text(cellValue)
                                            .appendTo(container);
                                    },
                                },
                                {
                                    dataField: "IT_PartNumber",
                                    caption: "رمز المادة ",
                                    alignment: "center",
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        var fontWeight = "600"; // Set the desired font weight
                                        let fontSize = "15px";
                                        let fontColor = '#283741'
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
                                                "color" : fontColor,
                                            })
                                            .text(cellValue)
                                            .appendTo(container);
                                    },
                                },
                                {
                                    dataField: "IT_QY",
                                    caption: "العدد",
                                    width:75,
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        var fontWeight = "600"; // Set the desired font weight
                                        let fontSize = "17px";
                                        let fontColor = '#283741'
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
                                                "color" : fontColor,
                                            })
                                            .text(formattedValue)
                                            .appendTo(container);
                                    },
                                },
                                {
                                    dataField: "IT_CarType",
                                    caption: "نوع العجلة",
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        var fontWeight = "600"; // Set the desired font weight
                                        let fontSize = "15px";
                                        let fontColor = "#283741"
                                        $("<div>")
                                            .css({
                                                "font-size" :fontSize,
                                                "font-weight" : fontWeight,
                                                "color" : fontColor,
                                            })
                                            .text(cellValue)
                                            .appendTo(container);
                                    },
                                },
                                {
                                    dataField: "IT_Engine",
                                    caption: " المحرك",
                                    width: 100,
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        var fontWeight = "600"; // Set the desired font weight
                                        let fontSize = "14px";
                                        let fontColor = "#283741"
                                        $("<div>")
                                            .css({
                                                "font-size" :fontSize,
                                                "font-weight" : fontWeight,
                                                "color" : fontColor,
                                            })
                                            .text(cellValue)
                                            .appendTo(container);
                                    },
                                },
                                {
                                    dataField: "IT_ModelCode",
                                    caption: " الموديل",
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        var fontWeight = "600"; // Set the desired font weight
                                        let fontSize = "14px";
                                        let fontColor = "#283741"
                                        $("<div>")
                                            .css({
                                                "font-size" :fontSize,
                                                "font-weight" : fontWeight,
                                                "color" : fontColor,
                                            })
                                            .text(cellValue)
                                            .appendTo(container);
                                    },
                                },
                                {
                                    dataField: "IT_FuelSystem",
                                    caption: " نوع الوقود",
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        var fontWeight = "600"; // Set the desired font weight
                                        let fontSize = "14px";
                                        let fontColor = "#283741"
                                        $("<div>")
                                            .css({
                                                "font-size" :fontSize,
                                                "font-weight" : fontWeight,
                                                "color" : fontColor,
                                            })
                                            .text(cellValue)
                                            .appendTo(container);
                                    },
                                },
                                {
                                    dataField: "IT_Transmission",
                                    caption: " ناقل الحركة",
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        var fontWeight = "600"; // Set the desired font weight
                                        let fontSize = "14px";
                                        let fontColor = "#283741"
                                        $("<div>")
                                            .css({
                                                "font-size" :fontSize,
                                                "font-weight" : fontWeight,
                                                "color" : fontColor,
                                            })
                                            .text(cellValue)
                                            .appendTo(container);
                                    },
                                },
                                {
                                    dataField: "IT_CarNo",
                                    caption: " رقم العجلة",
                                    width:100,
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        var fontWeight = "600"; // Set the desired font weight
                                        let fontSize = "15px";
                                        let fontColor = "#283741"
                                        $("<div>")
                                            .css({
                                                "font-size" :fontSize,
                                                "font-weight" : fontWeight,
                                                "color" : fontColor,
                                            })
                                            .text(cellValue)
                                            .appendTo(container);
                                    },
                                },
                                {
                                    dataField: "IT_VIN",
                                    caption: " الشاصي",
                                    width: 250,
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        var fontWeight = "600"; // Set the desired font weight
                                        let fontSize = "15px";
                                        let fontColor = "#283741"
                                        $("<div>")
                                            .css({
                                                "font-size" :fontSize,
                                                "font-weight" : fontWeight,
                                                "color" : fontColor,
                                                "white-space" :"pre-wrap",
                                            })
                                            .text(cellValue)
                                            .appendTo(container);
                                    },
                                },
                                {
                                    dataField: "IT_Notes",
                                    caption: " الملاحظات",
                                    cellTemplate: function(container, options) {
                                        var cellValue = options.value;
                                        var fontWeight = "600"; // Set the desired font weight
                                        let fontSize = "17px";
                                        let fontColor = "#283741"
                                        $("<div>")
                                            .css({
                                                "font-size" :fontSize,
                                                "font-weight" : fontWeight,
                                                "color" : fontColor,
                                                "white-space" : "pre-wrap",
                                            })
                                            .text(cellValue)
                                            .appendTo(container);
                                    },
                                },
                                {
                                    caption: "الحدث",

                                    width: 200,
                                    cellTemplate: function (container, options) {
                                        var row = options.row.data;

                                        var link1 = $("<div>");
                                        link1.dxButton({
                                            stylingMode: "contained",
                                            type: "normal",
                                            icon: "edit",
                                            onClick() {
                                                var rowData = options.data;

                                                let url = "ItemThree/";
                                                let data = {
                                                    IT2_ID: rowData.IT2_ID,
                                                };
                                                $.ajax({
                                                    type: "GET",
                                                    url: url + "show",
                                                    data: data,
                                                    success: function (response) {
                                                        $("#IT2_ID")
                                                            .dxTextBox("instance")
                                                            .option({
                                                                value: response.id,
                                                            });
                                                        $("#IT2_ItemPosition")
                                                            .dxTextArea("instance")
                                                            .option({
                                                                value: response.IT2_ItemPosition,
                                                            });
                                                        if (
                                                            response.IT2_State ==
                                                            true
                                                        ) {
                                                            $("#IT2_State")
                                                                .dxSwitch(
                                                                    "instance"
                                                                )
                                                                .option(
                                                                    "value",
                                                                    true
                                                                );
                                                        } else {
                                                            $("#IT2_State")
                                                                .dxSwitch(
                                                                    "instance"
                                                                )
                                                                .option(
                                                                    "value",
                                                                    false
                                                                );
                                                        }

                                                        var displaycard =
                                                            document.getElementById(
                                                                "Storesaction"
                                                            );
                                                        if (
                                                            displaycard.style
                                                                .display == "none"
                                                        ) {
                                                            document.getElementById(
                                                                "card_Storestitle"
                                                            ).innerText =
                                                                "تحديث البيانات";
                                                            displaycard.style.display =
                                                                "block";
                                                            document
                                                                .getElementById(
                                                                    "card_Storestitle"
                                                                )
                                                                .scrollIntoView();
                                                        } else {
                                                            displaycard.style.display =
                                                                "none";
                                                            document.getElementById(
                                                                "card_Storestitle"
                                                            ).innerText = "";
                                                            displaycard.style.display =
                                                                "block";
                                                            document.getElementById(
                                                                "card_Storestitle"
                                                            ).innerText =
                                                                "تحديث البيانات";
                                                            document
                                                                .getElementById(
                                                                    "card_Storestitle"
                                                                )
                                                                .scrollIntoView();
                                                        }
                                                    },
                                                });
                                            },
                                        });

                                        var link2 = $("<div>");
                                        link2.dxButton({
                                            stylingMode: "contained",
                                            icon: "trash",
                                            onClick() {
                                                var rowData = options.data;
                                            },
                                        });

                                        $(container).append(link1, link2);
                                    },
                                },
                            ],
                            summary: {
                                totalItems: [
                                    {
                                        column: "IT2_Smallest",
                                        summaryType: "sum",
                                        valueFormat: "#0.00",
                                    },
                                ],
                            },
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

    });

}



