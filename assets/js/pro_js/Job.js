Job_fetch();
Job_filldata();

function Job_cleardata() {
    $("#jid").dxTextBox("instance").option("value", "");
    $("#eid").dxDropDownBox("instance").option("value", null);
    $("#jtitle").dxSelectBox("instance").option("value", "");
    $("#jdegree").dxTextBox("instance").option("value", "");
    $("#jstage").dxTextBox("instance").option("value", "");
    $("#getdate").dxDateBox("instance").option("value", "");
    $("#docno").dxTextBox("instance").option("value", "");
    $("#docdate").dxDateBox("instance").option("value", "");

}

function Job_chechdata() {
    if ($.trim($("#eid").dxDropDownBox("instance").option('value')).length == 0) {
        error_eid = " مطلوب ";
        $("#error_eid").text(error_eid);
    } else {
        error_eid = "";
        $("#error_eid").text(error_eid);
    }
    if ($.trim($("#jtitle").dxSelectBox("instance").option('value')).length == 0) {
        error_jtitle = " مطلوب ";
        $("#error_jtitle").text(error_jtitle);
    } else {
        error_jtitle = "";
        $("#error_jtitle").text(error_jtitle);
    }
   
}

function Job_UpdateOrCreate() {
    var url = "jobs";
    var data = {
        jid: $("#jid").dxTextBox("instance").option("value"),
        eid: $("#eid").dxDropDownBox("instance").option("value"),
        jtitle: $("#jtitle").dxSelectBox("instance").option("value"),
        jdegree: $("#jdegree").dxTextBox("instance").option("value"),
        jstage: $("#jstage").dxTextBox("instance").option("value"),
        getdate: $("#getdate").dxDateBox("instance").option("value"),
        docno: $("#docno").dxTextBox("instance").option("value"),
        docdate: $("#docdate").dxDateBox("instance").option("value"),
     

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
            Job_cleardata();
            Job_fetch();
        },
    });
}

function Job_fetch() {
    $(document).ready(function () {
        var url = "jobs/";
        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {
                    const dataGrid = $("#Jobdatagrid").dxDataGrid({
                        dataSource: response.getJobs,
                        keyExpr: "jid",
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
                                dataField:"jid",
                                caption:"ت",
                                visible:false,

                            },
                            {
                                caption: "#",
                                width: 100,
                                cellTemplate: function (container, options) {
                                    var imageUrl = 'assets/img/navbar/icons8_businessman_64px.png' ;
                            
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
                                dataField: "eid",
                                caption: " الاسم",
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
                                dataField: "jtitle",
                                caption: " العنوان الوظيفي ",
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
                                dataField: "jdegree",
                                caption: "الدرجة ",
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
                                dataField: "jstage",
                                caption: "المرحلة ",
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
                                                jid: rowData.jid,
                                            };
                                            $.ajax({
                                                type: "GET",
                                                url: "jobs/show",
                                                data: data,
                                                success: function (response) {
                                                   
                                                    $("#jid")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.jid,
                                                        });
                                                    $("#eid")
                                                        .dxDropDownBox("instance")
                                                        .option({
                                                            value:Number(response.eid) ,
                                                        });
                                                    $("#jtitle")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value: response.jtitle,
                                                        });
                                                    $("#jdegree")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.jdegree,
                                                        });
                                                  
                                                    $("#jstage")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.jstage
                                                        });
                                                        $("#getdate")
                                                        .dxDateBox("instance")
                                                        .option({
                                                            value:response.getdate
                                                        });
                                                        $("#docno")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.docno
                                                        });
                                                    $("#docdate")
                                                        .dxDateBox("instance")
                                                        .option({
                                                            value:response.docdate
                                                        });
                                                     

                                                    var displaycard =
                                                        document.getElementById(
                                                            "Jobaction"
                                                        );
                                                    if (
                                                        displaycard.style
                                                            .display == "none"
                                                    ) {
                                                        document.getElementById(
                                                            "card_Jobtitle"
                                                        ).innerText =
                                                            "تعديل البيانات";
                                                        displaycard.style.display =
                                                            "block";
                                                        document
                                                            .getElementById(
                                                                "card_Jobtitle"
                                                            )
                                                            .scrollIntoView();
                                                    } else {
                                                        displaycard.style.display =
                                                            "none";
                                                        document.getElementById(
                                                            "card_Jobtitle"
                                                        ).innerText = "";
                                                        displaycard.style.display =
                                                            "block";
                                                        document.getElementById(
                                                            "card_Jobtitle"
                                                        ).innerText =
                                                            "تعديل البيانات";
                                                        document
                                                            .getElementById(
                                                                "card_Jobtitle"
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
                                                jid: rowData.jid,
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
                                                url: "jobs/destroy",
                                                data: data,
                                                success: function (response) {
                                                    Job_fetch();
                                                    Job_cleardata();
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
                                                    Job_fetch();
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
                                .addClass("custom-header_Job");
                        },
                    });
                });
            },
        });
    });
}

function Job_filldata() {
    var url = "jobsfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {
                
                $(() => {
                    $('#jtitle').dxSelectBox({
                        dataSource: response.getJobTitle,
                        inputAttr: {style:"font-size:13px", },
                        placeholder:" الشهادة   ",
                        searchEnabled:true,
                        displayExpr: 'jtitle',
                        valueExpr: 'jtitle',
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
                                    jtitle: data.text
                                };

                                response.getJobTitle.push(newItem);
                                data.component.option("value",newItem);
                                data.customItem = newItem;
                                
                        },
                        
                    });
                });
             
                $(() => {
                    let dataGrid;
                    $("#eid").dxDropDownBox({
                        value: 0,
                        valueExpr: "eid",
                        deferRendering: false,
                        placeholder: "الاسم   ",
                        inputAttr: { style:"font-size:13px", },
                        displayExpr(item) {
                            return item && `${item.fullname} `;
                        },
                        showClearButton: true,
                        dataSource: response.getEmp,//makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField:"fullname",
                                        caption:"الاسم ",
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
                                        hasSelection ? keys[0].eid : null

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
            var displaycard = document.getElementById("Jobaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_Jobtitle").innerText = "";
                // Job_cleardata();
                // Job_setStCode();
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
            var displaycard = document.getElementById("Jobaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_Jobtitle").innerText = "";
                Job_cleardata();
                // Job_setStCode();
                displaycard.style.display = "none";
                document.getElementById("firstCard").scrollIntoView();
            }else{
                document.getElementById("card_Jobtitle").innerText ="اضافة عنوان وظيفي";
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
            Job_chechdata();
            if(
                error_eid != "" || error_jtitle != ""
            )
            {
                return false;
            }else{
                Job_UpdateOrCreate();
            }
        },
    });
});
// End Button Save

// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#jid").dxTextBox({
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
        $("#jdegree").dxTextBox({
            placeholder: "",
            inputAttr: {
                style:"font-size:13px",
                 },
        });
    });

    $(() => {
        $("#jstage").dxTextBox({
            placeholder: " ",
            inputAttr: {  style:"font-size:13px",},
        });
    });
    $(() => {
        $("#docdate").dxDateBox({
            
        });
    });
    $(() => {
        $("#getdate").dxDateBox({
            
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
