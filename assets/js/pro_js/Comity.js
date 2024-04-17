Comity_fetch();
Comity_filldata();

function Comity_cleardata() {
    $("#id").dxTextBox("instance").option("value", "");
    $("#ctype").dxSelectBox("instance").option("value", "");
    $("#docno").dxTextBox("instance").option("value", "");
    $("#docdate").dxDateBox("instance").option("value", "");
    $("#notes").dxTextArea("instance").option("value", "");
   
}

function Comity_chechdata() {
    if ($.trim($("#ctype").dxSelectBox("instance").option('value')).length == 0) {
        error_ctype = " مطلوب ";
        $("#error_ctype").text(error_ctype);
    } else {
        error_ctype = "";
        $("#error_ctype").text(error_ctype);
    }
   
}

function Comity_UpdateOrCreate() {
    var url = "comity";
    var data = {
        id: $("#id").dxTextBox("instance").option("value"),
        ctype: $("#ctype").dxSelectBox("instance").option("value"),
        docno: $("#docno").dxTextBox("instance").option("value"),
        docdate: $("#docdate").dxDateBox("instance").option("value"),
        notes: $("#notes").dxTextArea("instance").option("value"),
      

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
                    my: "top left",
                    at: "top left",
                },
                type: "success",
                width: "300",
                height: "150",
                hideAfter: 2000,
            });
            Comity_cleardata();
            Comity_fetch();
        },
    });
}

function Comity_fetch() {
    $(document).ready(function () {
        var url = "comity/";
        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {
                    const dataGrid = $("#Comitydatagrid").dxDataGrid({
                        dataSource: response.getComity,
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
                            width: 300,
                        },
                        focusedRowEnabled: true,
                        filterRow: { visible: true },
                        groupPanel: { visible: true },
                        grouping: {
                            autoExpandAll: false,
                        },
                        allowColumnReordering: true,
                        rowAlternationEnabled: true,
                        showBorders: true,
                        columns: [
                            {
                                dataField:"id",
                                caption:"ت",
                                visible:false,

                            },
                            {
                                caption: "#",
                                width: 100,
                                cellTemplate: function (container, options) {
                                    var imageUrl = 'assets/img/navbar/icons8_collaboration_64px.png' ;
                            
                                    // Concatenate the base URL with the image filename
                                    // var imageUrl = baseUrl + imageName;
                            
                                    var image = $("<img>")
                                        .attr("src", imageUrl)
                                        .css({
                                            width: "40px",
                                            height: "40px",
                                        });
                                    $(container).append(image);
                                },
                            },
                            {
                                dataField: "ctype",
                                caption: " اللجنة",
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "13px";
                                    let fontColor = "#2F4F4F";
                                    $("<div>")
                                        .css({
                                            "font-size": fontSize,
                                            "font-weight": fontWeight,
                                            color: fontColor,
                                        })
                                        .text(cellValue)
                                        .appendTo(container);
                                },
                                // groupIndex: 0,
                            },
                            {
                                dataField: "docno",
                                caption: " رقم الكتاب ",
                                alignment: "right",
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "13px";
                                    let fontColor = "#2F4F4F";
                                    $("<div>")
                                        .css({
                                            "font-size": fontSize,
                                            "font-weight": fontWeight,
                                            color: fontColor,
                                        })
                                        .text(cellValue)
                                        .appendTo(container);
                                    
                                },
                            },
                            {
                                dataField: "docdate",
                                caption: "تاريخ الكتاب ",
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "13px";
                                    let fontColor = "#2F4F4F";
                                    $("<div>")
                                        .css({
                                            "font-size": fontSize,
                                            "font-weight": fontWeight,
                                            color: fontColor,
                                        })
                                        .text(cellValue)
                                        .appendTo(container);
                                },
                            },
                            {
                                dataField: "filepath",
                                caption: "نسخة مصورة ",
                                cellTemplate: function (container, options) {
                                    var cellValue = options.value;
                                    var fontWeight = "450"; // Set the desired font weight
                                    let fontSize = "13px";
                                    let fontColor = "#2F4F4F";
                                    $("<div>")
                                        .css({
                                            "font-size": fontSize,
                                            "font-weight": fontWeight,
                                            color: fontColor,
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
                                    var link1 = $("<div>").css({
                                        "background-color": "##64DDBB",
                                    });
                                    link1.dxButton({
                                        stylingMode: "contained",
                                        type: "normal",
                                        icon: "edit",
                                        onClick() {
                                            var rowData = options.data;
                                            let data = {
                                                id: rowData.id,
                                            };
                                            $.ajax({
                                                type: "GET",
                                                url: "comity/show",
                                                data: data,
                                                success: function (response) {
                                                    console.log(response);
                                                    $("#id")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.id,
                                                        });
                                                    $("#ctype")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value: response.ctype,
                                                        });
                                                    $("#docno")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.docno,
                                                        });
                                                    $("#docdate")
                                                        .dxDateBox("instance")
                                                        .option({
                                                            value: response.docdate,
                                                        });
                                                  
                                                    $("#notes")
                                                        .dxTextArea("instance")
                                                        .option({
                                                            value:response.notes
                                                        });
                                                        

                                                    var displaycard =
                                                        document.getElementById(
                                                            "Comityaction"
                                                        );
                                                    if (
                                                        displaycard.style
                                                            .display == "none"
                                                    ) {
                                                        document.getElementById(
                                                            "card_Comitytitle"
                                                        ).innerText =
                                                            "تعديل البيانات";
                                                        displaycard.style.display =
                                                            "block";
                                                        document
                                                            .getElementById(
                                                                "card_Comitytitle"
                                                            )
                                                            .scrollIntoView();
                                                    } else {
                                                        displaycard.style.display =
                                                            "none";
                                                        document.getElementById(
                                                            "card_Comitytitle"
                                                        ).innerText = "";
                                                        displaycard.style.display =
                                                            "block";
                                                        document.getElementById(
                                                            "card_Comitytitle"
                                                        ).innerText =
                                                            "تعديل البيانات";
                                                        document
                                                            .getElementById(
                                                                "card_Comitytitle"
                                                            )
                                                            .scrollIntoView();
                                                    }
                                                },
                                            });
                                        },
                                    });

                                    var link2 = $("<div>").css({
                                        "margin-right": "10px"
                                    });
                                    link2.dxButton({
                                        stylingMode: "contained",
                                        icon: "trash",
                                        type: "default",
                                        onClick() {
                                            var rowData = options.data;
                                            let data = {
                                                id: rowData.id,
                                            };

                                            $.ajaxSetup({
                                                headers: {
                                                    "X-CSRF-TOKEN": $(
                                                        'meta[name="csrf-token"]'
                                                    ).attr("content"),
                                                },
                                            });
                                            $.ajax({
                                                type: "DELETE",
                                                url: "comity/destroy",
                                                data: data,
                                                success: function (response) {
                                                    Comity_fetch();
                                                    Comity_cleardata();
                                                    DevExpress.ui.notify({
                                                        message:
                                                            response.status,
                                                        position: {
                                                            my: "top left",
                                                            at: "top left",
                                                        },
                                                        type: "error",
                                                        width: "300",
                                                        height: "150",
                                                        hideAfter: 2000,
                                                    });
                                                    Comity_fetch();
                                                },
                                            });
                                        },
                                    });

                                    $(container).append(link1, link2);
                                },
                            },
                        ],
                        onContentReady: function (e) {
                            // Add custom class to the header panel
                            e.element
                                .find(".dx-datagrid-headers")
                                .addClass("custom-header_Comity");
                        },
                    });
                });
            },
        });
    });
}

function Comity_filldata() {
    var url = "comityfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {
                $(() => {
                    $('#ctype').dxSelectBox({
                        dataSource: response.getComity,
                        inputAttr: {style:"font-size:13px", },
                        placeholder:" ادخل اسم اللجنة   ",
                        searchEnabled:true,
                        displayExpr: 'ctype',
                        valueExpr: 'ctype',
                        searchMode: "contains",
                        acceptCustomValue: true,
                        dropDownOptions: {
                            height: 400
                        },
                        onCustomItemCreating(data) {
                                if (!data.text) {
                                    data.customItem = null;
                                    return;
                                }
                            
                                const newItem = {
                                    ctype: data.text
                                };

                                response.getComity.push(newItem);
                                data.component.option("value",newItem);
                                data.customItem = newItem;
                                
                        },
                        
                    });
                });
              
               
               
            },
        });
    });
}
$(document).ready(function () {
    $("#danger-contained").dxButton({
        stylingMode: "contained",
        text: "اغلاق",
        type: "danger",
        icon: "close",
        width: 120,
        onClick() {
            var displaycard = document.getElementById("Comityaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_Comitytitle").innerText = "";
                // Comity_cleardata();
                // Comity_setStCode();
                displaycard.style.display = "none";
                document.getElementById("firstCard").scrollIntoView();
            }
        },
    });
});
$(document).ready(function () {
    $("#btnNewAdd").dxButton({
        stylingMode: "contained",
        text: "اضافة",
        type: "success",
        icon: "plus",
        width: 120,
        onClick() {
            var displaycard = document.getElementById("Comityaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_Comitytitle").innerText = "";
                Comity_cleardata();
                // Comity_setStCode();
                displaycard.style.display = "none";
                document.getElementById("firstCard").scrollIntoView();
            }else{
                document.getElementById("card_Comitytitle").innerText ="اضافة لجنة";
                displaycard.style.display = "block";
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
        type: "success",
        icon: "check",
        width: 120,
        onClick() {
            Comity_chechdata();
            if(
                error_ctype != ""
            )
            {
                return false;
            }else{
                Comity_UpdateOrCreate();
            }
        },
    });
});
// End Button Save

// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#id").dxTextBox({
            placeholder: "",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#docno").dxTextBox({
            placeholder: "",
            inputAttr: {  style:"font-size:13px", },
        });
    });
    
    $(() => {
        $("#docdate").dxDateBox({
            
        });
    });
    $(() => {
        $("#notes").dxTextArea({
            // ...
            minHeight: 50,
            maxHeight: 300,
            autoResizeEnabled: true,
            // value: longText,
            maxLength: 4000,
            label: "ملاحظات",
        });
    });
    $('#filepath').dxFileUploader({
        selectButtonText: 'تحميل نسخة من الكتاب',
        labelText: '',
        accept: 'image/*',
        uploadMode: 'useForm',
        inputAttr: { 'aria-label': 'Select Photo' },
      });
    
});
//
