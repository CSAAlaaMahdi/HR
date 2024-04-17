Certifications_fetch();
Certifications_filldata();

function Certifications_cleardata() {
    $("#cid").dxTextBox("instance").option("value", "");
    $("#eid").dxDropDownBox("instance").option("value", null);
    $("#cyears").dxTextBox("instance").option("value", "");
    $("#cer_no").dxTextBox("instance").option("value", "");
    $("#equivlent_no").dxTextBox("instance").option("value", "");
    $("#certification").dxSelectBox("instance").option("value", "");
    $("#college").dxSelectBox("instance").option("value", "");
    $("#university").dxSelectBox("instance").option("value", "");
    $("#country").dxSelectBox("instance").option("value", "");
    $("#gspetailest").dxSelectBox("instance").option("value", "");
    $("#sspetailest").dxSelectBox("instance").option("value", "");
    $("#cerdate").dxDateBox("instance").option("value", "");
    $("#equivlent_date").dxDateBox("instance").option("value", "");
}

function Certifications_chechdata() {
    if ($.trim($("#eid").dxDropDownBox("instance").option('value')).length == 0) {
        error_eid = " مطلوب ";
        $("#error_eid").text(error_eid);
    } else {
        error_eid = "";
        $("#error_eid").text(error_eid);
    }
   
}

function Certifications_UpdateOrCreate() {
    var url = "certifications";
    var data = {
        cid: $("#cid").dxTextBox("instance").option("value"),
        eid: $("#eid").dxDropDownBox("instance").option("value"),
        certification: $("#certification").dxSelectBox("instance").option("value"),
        college: $("#college").dxSelectBox("instance").option("value"),
        university: $("#university").dxSelectBox("instance").option("value"),
        country: $("#country").dxSelectBox("instance").option("value"),
        cyears: $("#cyears").dxTextBox("instance").option("value"),
        gspetailest: $("#gspetailest").dxSelectBox("instance").option("value"),
        sspetailest: $("#sspetailest").dxSelectBox("instance").option("value"),
        cer_no: $("#cer_no").dxTextBox("instance").option("value"),
        equivlent_no: $("#equivlent_no").dxTextBox("instance").option("value"),
        cerdate: $("#cerdate").dxDateBox("instance").option("value"),
        equivlent_date: $("#equivlent_date").dxDateBox("instance").option("value"),

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
            Certifications_cleardata();
            Certifications_fetch();
        },
    });
}

function Certifications_fetch() {
    $(document).ready(function () {
        var url = "certifications/";
        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {
                    const dataGrid = $("#Certificationsdatagrid").dxDataGrid({
                        dataSource: response.getCertification,
                        keyExpr: "cid",
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
                                dataField:"cid",
                                caption:"ت",
                                visible:false,

                            },
                            {
                                caption: "#",
                                width: 100,
                                cellTemplate: function (container, options) {
                                    var imageUrl = 'assets/img/navbar/icons8_certificate_64px.png' ;
                            
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
                                dataField: "certification",
                                caption: " الشهادة ",
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
                                dataField: "college",
                                caption: "الكلية ",
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
                                dataField: "university",
                                caption: "الجامعة ",
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
                                                cid: rowData.cid,
                                            };
                                            $.ajax({
                                                type: "GET",
                                                url: "certifications/show",
                                                data: data,
                                                success: function (response) {
                                                    console.log(response);
                                                    $("#cid")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.cid,
                                                        });
                                                    $("#cyears")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.cyears,
                                                        });
                                                    $("#cer_no")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.cer_no,
                                                        });
                                                    $("#equivlent_no")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.equivlent_no,
                                                        });
                                                  
                                                    $("#certification")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value:response.certification
                                                        });
                                                        $("#college")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value:response.college
                                                        });
                                                        $("#university")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value:response.university
                                                        });
                                                    $("#eid")
                                                        .dxDropDownBox("instance")
                                                        .option({
                                                            value:Number(response.eid)
                                                        });
                                                        $("#country")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value:response.country
                                                        });
                                                        $("#gspetailest")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value:response.gspetailest
                                                        });
                                                        $("#sspetailest")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value:response.sspetailest
                                                        });
                                                        $("#cerdate")
                                                        .dxDateBox("instance")
                                                        .option({
                                                            value:response.cerdate
                                                        });
                                                        $("#equivlent_date")
                                                        .dxDateBox("instance")
                                                        .option({
                                                            value:response.equivlent_date
                                                        });

                                                    var displaycard =
                                                        document.getElementById(
                                                            "Certificationsaction"
                                                        );
                                                    if (
                                                        displaycard.style
                                                            .display == "none"
                                                    ) {
                                                        document.getElementById(
                                                            "card_Certificationstitle"
                                                        ).innerText =
                                                            "تعديل البيانات";
                                                        displaycard.style.display =
                                                            "block";
                                                        document
                                                            .getElementById(
                                                                "card_Certificationstitle"
                                                            )
                                                            .scrollIntoView();
                                                    } else {
                                                        displaycard.style.display =
                                                            "none";
                                                        document.getElementById(
                                                            "card_Certificationstitle"
                                                        ).innerText = "";
                                                        displaycard.style.display =
                                                            "block";
                                                        document.getElementById(
                                                            "card_Certificationstitle"
                                                        ).innerText =
                                                            "تعديل البيانات";
                                                        document
                                                            .getElementById(
                                                                "card_Certificationstitle"
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
                                                cid: rowData.cid,
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
                                                url: "certifications/destroy",
                                                data: data,
                                                success: function (response) {
                                                    Certifications_fetch();
                                                    Certifications_cleardata();
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
                                                    Certifications_fetch();
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
                                .addClass("custom-header_Certifications");
                        },
                    });
                });
            },
        });
    });
}

function Certifications_filldata() {
    var url = "certificationsfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {
                
                $(() => {
                    $('#certification').dxSelectBox({
                        dataSource: response.getCertification,
                        inputAttr: {style:"font-size:13px", },
                        placeholder:" الشهادة   ",
                        searchEnabled:true,
                        displayExpr: 'certification',
                        valueExpr: 'certification',
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
                                    certification: data.text
                                };

                                response.getCertification.push(newItem);
                                data.component.option("value",newItem);
                                data.customItem = newItem;
                                
                        },
                        
                    });
                });
                $(() => {
                    $('#college').dxSelectBox({
                        dataSource: response.getCollege,
                        inputAttr: {style:"font-size:13px", },
                        placeholder:" الكلية   ",
                        searchEnabled:true,
                        displayExpr: 'college',
                        valueExpr: 'college',
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
                                    college: data.text
                                };

                                response.getCollege.push(newItem);
                                data.component.option("value",newItem);
                                data.customItem = newItem;
                                
                        },
                        
                    });
                });
                $(() => {
                    $('#university').dxSelectBox({
                        dataSource: response.getUniversity,
                        inputAttr: {style:"font-size:13px", },
                        placeholder:"الجامعة ",
                        searchEnabled:true,
                        displayExpr: 'university',
                        valueExpr: 'university',
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
                                    university: data.text
                                };

                                response.getUniversity.push(newItem);
                                data.component.option("value",newItem);
                                data.customItem = newItem;
                                
                        },
                        
                    });
                });
                $(() => {
                    $('#country').dxSelectBox({
                        dataSource: response.getCountry,
                        inputAttr: {style:"font-size:13px", },
                        placeholder:"الدولة ",
                        searchEnabled:true,
                        displayExpr: 'country',
                        valueExpr: 'country',
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
                                    country: data.text
                                };

                                response.getCountry.push(newItem);
                                data.component.option("value",newItem);
                                data.customItem = newItem;
                                
                        },
                        
                    });
                });
                $(() => {
                    $('#gspetailest').dxSelectBox({
                        dataSource: response.getGspetailest,
                        inputAttr: {style:"font-size:13px", },
                        placeholder:"ادخل الاختصاص العام ",
                        searchEnabled:true,
                        displayExpr: 'gspetailest',
                        valueExpr: 'gspetailest',
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
                                    gspetailest: data.text
                                };

                                response.getGspetailest.push(newItem);
                                data.component.option("value",newItem);
                                data.customItem = newItem;
                                
                        },
                        
                    });
                });
                $(() => {
                    $('#sspetailest').dxSelectBox({
                        dataSource: response.getSspetailest,
                        inputAttr: {style:"font-size:13px", },
                        placeholder:"الاختصاص الدقيق ",
                        searchEnabled:true,
                        displayExpr: 'sspetailest',
                        valueExpr: 'sspetailest',
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
                                    sspetailest: data.text
                                };

                                response.getSspetailest.push(newItem);
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
                        inputAttr: { "aria-label": "Sales_Group" },
                        displayExpr(item) {
                            return item && `${item.fullname} `;
                        },
                        showClearButton: true,
                        dataSource: response.getEmployees,//makeAsyncDataSource('customer.json'),
                        contentTemplate(e) {
                            const value = e.component.option("value");
                            const $dataGrid = $("<div>").dxDataGrid({
                                dataSource: e.component.getDataSource(),
                                columns: [
                                    {
                                        dataField:"fullname",
                                        caption:"الاسم "

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
            var displaycard = document.getElementById("Certificationsaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_Certificationstitle").innerText = "";
                // Certifications_cleardata();
                // Certifications_setStCode();
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
            var displaycard = document.getElementById("Certificationsaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_Certificationstitle").innerText = "";
                Certifications_cleardata();
                // Certifications_setStCode();
                displaycard.style.display = "none";
                document.getElementById("firstCard").scrollIntoView();
            }else{
                document.getElementById("card_Certificationstitle").innerText ="اضافة شهادة";
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
            Certifications_chechdata();
            if(
                error_eid != ""
            )
            {
                return false;
            }else{
                Certifications_UpdateOrCreate();
            }
        },
    });
});
// End Button Save

// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#cid").dxTextBox({
            placeholder: "",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#cyears").dxTextBox({
            placeholder: "",
            inputAttr: {  style:"font-size:13px", },
        });
    });
    $(() => {
        $("#cer_no").dxTextBox({
            placeholder: "",
            inputAttr: {
                style:"font-size:13px",
                 },
        });
    });

    $(() => {
        $("#equivlent_no").dxTextBox({
            placeholder: " ",
            inputAttr: {  style:"font-size:13px",},
        });
    });
    $(() => {
        $("#cerdate").dxDateBox({
            
        });
    });
    $(() => {
        $("#equivlent_date").dxDateBox({
            
        });
    });
    
});
//
