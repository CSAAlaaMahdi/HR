Researches_fetch();
Researches_filldata();

function Researches_cleardata() {
    $("#rid").dxTextBox("instance").option("value", "");
    $("#ResType").dxSelectBox("instance").option("value", "");
    $("#Title").dxTextBox("instance").option("value", "");
    $("#JournalName").dxTextBox("instance").option("value", "");
    $("#PubDate").dxDateBox("instance").option("value", "");
    $("#JournalType").dxSelectBox("instance").option("value", "");
    $("#Jpos").dxSelectBox("instance").option("value", "");
    $("#Numb").dxTextBox("instance").option("value", "");
    $("#Page").dxTextBox("instance").option("value", "");
    $("#Isconf").dxSelectBox("instance").option("value", "");
    $("#ConfName").dxTextBox("instance").option("value", "");
    $("#ConfPlace").dxTextBox("instance").option("value", "");
    $("#Rtype").dxSelectBox("instance").option("value", "");
    $("#CiteScor").dxTextBox("instance").option("value", "");
    $("#ImpactFactor").dxTextBox("instance").option("value", "");
    $("#JournalQuartile").dxTextBox("instance").option("value", "");
    $("#ISSN").dxTextBox("instance").option("value", "");
    $("#DOI").dxTextBox("instance").option("value", "");
    $("#Rlink").dxTextBox("instance").option("value", "");
    $("#Extaut").dxTextBox("instance").option("value", "");

}

function Researches_chechdata() {
    if ($.trim($("#ResType").dxSelectBox("instance").option('value')).length == 0) {
        error_ResType = " مطلوب ";
        $("#error_ResType").text(error_ResType);
    } else {
        error_ResType = "";
        $("#error_ResType").text(error_ResType);
    }
    if ($.trim($("#Title").dxTextBox("instance").option('value')).length == 0) {
        error_Title = " مطلوب ";
        $("#error_Title").text(error_Title);
    } else {
        error_Title = "";
        $("#error_Title").text(error_Title);
    }
   
}

function Researches_UpdateOrCreate() {
    var url = "researches";
    var selectedDate = $("#PubDate").dxDateBox("instance").option("value");
    var PubDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(selectedDate);
    var data = {
        rid: $("#rid").dxTextBox("instance").option("value"),
        ResType: $("#ResType").dxSelectBox("instance").option("value"),
        Title: $("#Title").dxTextBox("instance").option("value"),
        JournalName: $("#JournalName").dxTextBox("instance").option("value"),
        PubDate: PubDate,
        JournalType: $("#JournalType").dxSelectBox("instance").option("value"),
        Jpos: $("#Jpos").dxSelectBox("instance").option("value"),
        Numb: $("#Numb").dxTextBox("instance").option("value"),
        Page: $("#Page").dxTextBox("instance").option("value"),
        Isconf: $("#Isconf").dxSelectBox("instance").option("value"),
        ConfName: $("#ConfName").dxTextBox("instance").option("value"),
        ConfPlace: $("#ConfPlace").dxTextBox("instance").option("value"),
        Rtype: $("#Rtype").dxSelectBox("instance").option("value"),
        CiteScor: $("#CiteScor").dxTextBox("instance").option("value"),
        ImpactFactor: $("#ImpactFactor").dxTextBox("instance").option("value"),
        JournalQuartile: $("#JournalQuartile").dxTextBox("instance").option("value"),
        ISSN: $("#ISSN").dxTextBox("instance").option("value"),
        DOI: $("#DOI").dxTextBox("instance").option("value"),
        Rlink: $("#Rlink").dxTextBox("instance").option("value"),
        Extaut: $("#Extaut").dxTextBox("instance").option("value"),
     

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
            Researches_cleardata();
            Researches_fetch();
        },
    });
}

function Researches_fetch() {
    $(document).ready(function () {
        var url = "researches/";
        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {
                    const dataGrid = $("#Researchesdatagrid").dxDataGrid({
                        dataSource: response.getResearches,
                        keyExpr: "rid",
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
                                dataField:"rid",
                                caption:"ت",
                                visible:false,

                            },
                            {
                                caption: "#",
                                width: 100,
                                cellTemplate: function (container, options) {
                                    var imageUrl = 'assets/img/navbar/icons8_reading_64px.png' ;
                            
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
                                dataField: "ResType",
                                caption: " نوع البحث",
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
                                dataField: "Title",
                                caption: " عنوان البحث  ",
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
                                dataField: "JournalName",
                                caption: "اسم المجلة ",
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
                                dataField: "PubDate",
                                caption: "تاريخ النشر ",
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
                                dataField: "JournalType",
                                caption: "نوع المجلة  ",
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
                                dataField: "Jpos",
                                caption: "النوع  ",
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
                                caption: "نسخة  مصورة ",
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
                                                rid: rowData.rid,
                                            };
                                            $.ajax({
                                                type: "GET",
                                                url: "researches/show",
                                                data: data,
                                                success: function (response) {
                                                   
                                                    $("#rid")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.rid,
                                                        });
                                                    $("#ResType")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value:response.ResType ,
                                                        });
                                                    $("#Title")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.Title,
                                                        });
                                                    $("#JournalName")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.JournalName,
                                                        });
                                                  
                                                    $("#PubDate")
                                                        .dxDateBox("instance")
                                                        .option({
                                                            value: new Date(response.PubDate)
                                                        });
                                                        $("#JournalType")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value:response.JournalType
                                                        });
                                                        $("#Jpos")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value:response.Jpos
                                                        });
                                                    $("#Numb")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.Numb
                                                        });
                                                        $("#Page")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.Page
                                                        });
                                                        $("#Isconf")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value:response.Isconf
                                                        });
                                                        $("#ConfName")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.confName
                                                        });
                                                        $("#ConfPlace")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.ConfPlace
                                                        });
                                                        $("#Rtype")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value:response.Rtype
                                                        });
                                                        $("#CiteScor")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.CiteScor
                                                        });
                                                        $("#ImpactFactor")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.ImpactFactor
                                                        });
                                                        $("#JournalQuartile")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.JournalQuartile
                                                        });
                                                        $("#ISSN")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.ISSN
                                                        });
                                                        $("#DOI")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.DOI
                                                        });
                                                        $("#Rlink")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.Rlink
                                                        });
                                                        $("#Extaut")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.Extaut
                                                        });

                                                    var displaycard =
                                                        document.getElementById(
                                                            "Researchesaction"
                                                        );
                                                    if (
                                                        displaycard.style
                                                            .display == "none"
                                                    ) {
                                                        document.getElementById(
                                                            "card_Researchestitle"
                                                        ).innerText =
                                                            "تعديل البيانات";
                                                        displaycard.style.display =
                                                            "block";
                                                        document
                                                            .getElementById(
                                                                "card_Researchestitle"
                                                            )
                                                            .scrollIntoView();
                                                    } else {
                                                        displaycard.style.display =
                                                            "none";
                                                        document.getElementById(
                                                            "card_Researchestitle"
                                                        ).innerText = "";
                                                        displaycard.style.display =
                                                            "block";
                                                        document.getElementById(
                                                            "card_Researchestitle"
                                                        ).innerText =
                                                            "تعديل البيانات";
                                                        document
                                                            .getElementById(
                                                                "card_Researchestitle"
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
                                                rid: rowData.rid,
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
                                                url: "researches/destroy",
                                                data: data,
                                                success: function (response) {
                                                    Researches_fetch();
                                                    Researches_cleardata();
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
                                                    Researches_fetch();
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
                                .addClass("custom-header_Researches");
                        },
                    });
                });
            },
        });
    });
}

function Researches_filldata() {
    var url = "researchesfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {
                console.log(response);
                $(() => {
                    $('#ResType').dxSelectBox({
                        dataSource: response.getResType,
                        inputAttr: {style:"font-size:13px", },
                        placeholder:" ادخل نوع البحث ",
                        searchEnabled:true,
                        displayExpr: 'ResType',
                        valueExpr: 'ResType',
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
                                    ResType: data.text
                                };

                                response.getResType.push(newItem);
                                data.component.option("value",newItem);
                                data.customItem = newItem;
                                
                        },
                        
                    });
                });
                $(() => {
                    $('#JournalType').dxSelectBox({
                        dataSource: response.getJournalType,
                        inputAttr: {style:"font-size:13px", },
                        placeholder:"نوع المجلة ",
                        searchEnabled:true,
                        displayExpr: 'JournalType',
                        valueExpr: 'JournalType',
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
                                    JournalType: data.text
                                };

                                response.getJournalType.push(newItem);
                                data.component.option("value",newItem);
                                data.customItem = newItem;
                                
                        },
                        
                    });
                });
                $(() => {
                    $('#Jpos').dxSelectBox({
                        dataSource: response.getJpos,
                        inputAttr: {style:"font-size:13px", },
                        placeholder:"   ",
                        searchEnabled:true,
                        displayExpr: 'Jpos',
                        valueExpr: 'Jpos',
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
                                    Jpos: data.text
                                };

                                response.getJpos.push(newItem);
                                data.component.option("value",newItem);
                                data.customItem = newItem;
                                
                        },
                        
                    });
                });
                $(() => {
                    $('#Isconf').dxSelectBox({
                        dataSource: response.getIsconf,
                        inputAttr: {style:"font-size:13px", },
                        placeholder:"    ",
                        searchEnabled:true,
                        displayExpr: 'Isconf',
                        valueExpr: 'Isconf',
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
                                    Isconf: data.text
                                };

                                response.getIsconf.push(newItem);
                                data.component.option("value",newItem);
                                data.customItem = newItem;
                                
                        },
                        
                    });
                });
                $(() => {
                    $('#Rtype').dxSelectBox({
                        dataSource: response.getRtype,
                        inputAttr: {style:"font-size:13px", },
                        placeholder:"    ",
                        searchEnabled:true,
                        displayExpr: 'Rtype',
                        valueExpr: 'Rtype',
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
                                    Rtype: data.text
                                };

                                response.getRtype.push(newItem);
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
            var displaycard = document.getElementById("Researchesaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_Researchestitle").innerText = "";
                // Researches_cleardata();
                // Researches_setStCode();
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
            var displaycard = document.getElementById("Researchesaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_Researchestitle").innerText = "";
                Researches_cleardata();
                // Researches_setStCode();
                displaycard.style.display = "none";
                document.getElementById("firstCard").scrollIntoView();
            }else{
                document.getElementById("card_Researchestitle").innerText ="اضافة  بحث";
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
            Researches_chechdata();
            if(
                error_ResType != "" || error_Title != ""
            )
            {
                return false;
            }else{
                Researches_UpdateOrCreate();
            }
        },
    });
});
// End Button Save

// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#rid").dxTextBox({
            placeholder: "",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#Title").dxTextBox({
            placeholder: "",
            inputAttr: {  style:"font-size:13px", },
        });
    });
    $(() => {
        $("#JournalName").dxTextBox({
            placeholder: "",
            inputAttr: {
                style:"font-size:13px",
                 },
        });
    });

    $(() => {
        $("#Jpos").dxTextBox({
            placeholder: " ",
            inputAttr: {  style:"font-size:13px",},
        });
    });
    $(() => {
        const now = new Date();
        $("#PubDate").dxDateBox({
            label: "Date",
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

            },
        });
    });
    $(() => {
        $("#Numb").dxTextBox({
            placeholder: " ",
            inputAttr: {  style:"font-size:13px",},
        });
    });
    $(() => {
        $("#Page").dxTextBox({
            placeholder: " ",
            inputAttr: {  style:"font-size:13px",},
        });
    });
    $(() => {
        $("#ConfName").dxTextBox({
            placeholder: " ",
            inputAttr: {  style:"font-size:13px",},
        });
    });
    $(() => {
        $("#ConfPlace").dxTextBox({
            placeholder: " ",
            inputAttr: {  style:"font-size:13px",},
        });
    });
    $(() => {
        $("#CiteScor").dxTextBox({
            placeholder: " ",
            inputAttr: {  style:"font-size:13px",},
        });
    });
    $(() => {
        $("#ImpactFactor").dxTextBox({
            placeholder: " ",
            inputAttr: {  style:"font-size:13px",},
        });
    });
    $(() => {
        $("#JournalQuartile").dxTextBox({
            placeholder: " ",
            inputAttr: {  style:"font-size:13px",},
        });
    });
    $(() => {
        $("#ISSN").dxTextBox({
            placeholder: " ",
            inputAttr: {  style:"font-size:13px",},
        });
    });
    $(() => {
        $("#DOI").dxTextBox({
            placeholder: " ",
            inputAttr: {  style:"font-size:13px",},
        });
    });
    $(() => {
        $("#Rlink").dxTextBox({
            placeholder: " ",
            inputAttr: {  style:"font-size:13px",},
        });
    });
    $(() => {
        $("#Extaut").dxTextBox({
            placeholder: " ",
            inputAttr: {  style:"font-size:13px",},
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