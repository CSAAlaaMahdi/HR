Certifications_fetch();
intializeComponent();
Certifications_filldata();

function Certifications_cleardata() {
    $("#cid").dxTextBox("instance").option("value", "");
    $("#eid").dxDropDownBox("instance").option("value", null);
    $("#Guid").dxTextBox("instance").option("value","");
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
    $("#FilePath").dxFileUploader("instance").option("value","");
    $("#image-container").empty();
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
    var selectedDate = $("#cerdate").dxDateBox("instance").option("value");
    var cerdate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(selectedDate);
    var selectedDate2 = $("#equivlent_date").dxDateBox("instance").option("value");
    var equivlent_date = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(selectedDate2);

    var formData = new FormData();

    formData.append('cid', $("#cid").dxTextBox("instance").option("value"));
    formData.append('Guid', $("#Guid").dxTextBox("instance").option("value"));
    formData.append('eid', $("#eid").dxDropDownBox("instance").option("value"));
    formData.append('certification', $("#certification").dxSelectBox("instance").option("value"));
    formData.append('college', $("#college").dxSelectBox("instance").option("value"));
    formData.append('university', $("#university").dxSelectBox("instance").option("value"));
    formData.append('country', $("#country").dxSelectBox("instance").option("value"));
    formData.append('cyears', $("#cyears").dxTextBox("instance").option("value"));
    formData.append('gspetailest', $("#gspetailest").dxSelectBox("instance").option("value"));
    formData.append('sspetailest', $("#sspetailest").dxSelectBox("instance").option("value"));
    formData.append('cer_no', $("#cer_no").dxTextBox("instance").option("value"));
    formData.append('equivlent_no', $("#equivlent_no").dxTextBox("instance").option("value"));
    formData.append('cerdate', cerdate);
    formData.append('equivlent_date', equivlent_date);
    formData.append('DocTitle', $("#certification").dxSelectBox("instance").option("value"));
    const images = $("#FilePath").dxFileUploader("option", "value");
    $.each(images, function(index, file) {
        formData.append('image[]', file);
    });
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
    });

    $.ajax({
        type: "POST",
        url: url,
        data: formData,
        contentType: false,
        processData: false,
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
                        columnChooser:{enabled : true},
                        export: {
                            enabled: true,
                            allowExportSelectedData: false,
                          },
                          onExporting(e) {
                            const workbook = new ExcelJS.Workbook();
                            const worksheet = workbook.addWorksheet('Employees');

                            DevExpress.excelExporter.exportDataGrid({
                              component: e.component,
                              worksheet,
                              autoFilterEnabled: true,
                            }).then(() => {
                              workbook.xlsx.writeBuffer().then((buffer) => {
                                saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Employees.xlsx');
                              });
                            });
                          },
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
                                dataField: "country",
                                caption: "البلد ",
                                visible:false,
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
                                dataField: "cyears",
                                caption: "السنة ",
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
                                dataField: "gspetailest",
                                caption: "الاختصاص العام ",
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
                                dataField: "sspetailest",
                                caption: "الاختصاص الدقيق ",
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
                                dataField: "cer_no",
                                caption: "رقم الشهادة ",
                                visible:false,
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
                                dataField: "cerdate",
                                caption: "تاريخ الشهادة ",
                                visible:false,
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
                                dataField: "equivlent_no",
                                caption: "رقم المعادلة ",
                                visible:false,
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
                                dataField: "equivlent_date",
                                caption: "تاريخ المعادلة ",
                                visible:false,
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

                                                    $("#cid")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.Certification.cid,
                                                        });
                                                        $("#Guid")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.Certification.Guid,
                                                        });
                                                    $("#cyears")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.Certification.cyears,
                                                        });
                                                    $("#cer_no")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.Certification.cer_no,
                                                        });
                                                    $("#equivlent_no")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.Certification.equivlent_no,
                                                        });

                                                    $("#certification")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value:response.Certification.certification
                                                        });
                                                        $("#college")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value:response.Certification.college
                                                        });
                                                        $("#university")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value:response.Certification.university
                                                        });
                                                    $("#eid")
                                                        .dxDropDownBox("instance")
                                                        .option({
                                                            value:Number(response.Certification.eid)
                                                        });
                                                        $("#country")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value:response.Certification.country
                                                        });
                                                        $("#gspetailest")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value:response.Certification.gspetailest
                                                        });
                                                        $("#sspetailest")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value:response.Certification.sspetailest
                                                        });
                                                        $("#cerdate")
                                                        .dxDateBox("instance")
                                                        .option({
                                                            value:new Date(response.Certification.cerdate)
                                                        });
                                                        $("#equivlent_date")
                                                        .dxDateBox("instance")
                                                        .option({
                                                            value:new Date(response.Certification.equivlent_date)
                                                        });

                                                        $('#image-container').empty();
                                                        let images = [];
                                                        $.each(response.Attachments, function(index, file) {
                                                            images.push(file['FilePath']);

                                                            $('#image-container').append(
                                                                '<div class="image-preview">' +
                                                                '<button class="delete-image">حذف الكتاب</button>' +
                                                                '<img src="assets/img/administrationImage/' + file['FilePath'] + '" style="max-width: 400px; margin-right: 15px;">' +
                                                                '<a href="assets/img/administrationImage/' + file['FilePath'] + '" target="_blank">عرض النسخة</a>' +
                                                                '</div>'
                                                            );
                                                        });
                                                          // Delete Image
                                                        $('#image-container').on('click', '.delete-image', function() {
                                                            var index = $(this).closest('.image-preview').index();

                                                            if(index >=0 && index < images.length){

                                                                var imageName = images[index]; // Get the filename of the image to delete

                                                                var id = $('#cid').dxTextBox("instance").option("value");
                                                                let Guid = $("#Guid").dxTextBox("instance").option("value");
                                                                // Remove the image from the images array
                                                                images.splice(index, 1);

                                                                // Remove the image preview from the view
                                                                $(this).closest('.image-preview').remove();

                                                                // Send an AJAX request to delete the image from the server
                                                                $.ajaxSetup({
                                                                    headers: {
                                                                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                                                                    },
                                                                });
                                                                $.ajax({
                                                                    url: 'certificationsDelete/DeleteImage', // Replace 'deleteImage' with your actual backend endpoint
                                                                    method: 'POST',
                                                                    data: { imageName: imageName, cid:id ,Guid:Guid }, // Send the filename of the image to delete
                                                                    success: function(data) {
                                                                        DevExpress.ui.notify({
                                                                            message:
                                                                                data.status,
                                                                            position: {
                                                                                my: "top left",
                                                                                at: "top left",
                                                                            },
                                                                            type: "error",
                                                                            width: "300",
                                                                            height: "150",
                                                                            hideAfter: 2000,
                                                                        });
                                                                    },
                                                                    error: function(xhr, status, error) {
                                                                        // Handle error response (e.g., display error message)
                                                                    }
                                                                });
                                                                }else{
                                                                    console.error('Invalid index:', index);
                                                                }



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
                Certifications_cleardata();
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
                document.getElementById("card_Certificationstitle").scrollIntoView();
            }else{
                document.getElementById("card_Certificationstitle").innerText ="اضافة شهادة";
                displaycard.style.display = "block";
                document.getElementById("card_Certificationstitle").scrollIntoView();

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

function intializeComponent(){
// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#cid").dxTextBox({
            placeholder: "",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#Guid").dxTextBox({
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
        const now = new Date();
        $("#cerdate").dxDateBox({
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
        const now = new Date();
        $("#equivlent_date").dxDateBox({
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
    $(() =>{
        let images = [];
        $('#FilePath').dxFileUploader({
            multiple: true,
            selectButtonText: 'تحميل نسخة من الكتاب',
            accept: 'image/*',
            uploadMode: 'useForm',
            onValueChanged: function(e) {
                 images = e.value;
                if (images.length > 0) {
                    // $('#image-container').empty();
                    $.each(images, function(index, file) {
                        var reader = new FileReader();
                        reader.onload = function(e) {
                            // $('#image-container').append('<img src="' + e.target.result + '" style="max-width: 400px;margin-right:15px;margin-top:15px">');
                            $('#image-container').append(
                                '<div class="image-preview">' +
                                '<button class="delete-image">حذف الصورة</button>' +
                                '<img src="' + e.target.result + '" style="max-width: 400px; margin-right: 15px;">' +
                                '</div>'
                            );
                            // saveImageToServer();
                        }
                        reader.readAsDataURL(file);
                    });
                }
            }
        });

        // Delete Image
        $('#image-container').on('click', '.delete-image', function() {
            var index = $(this).closest('.image-preview').index();

            if(index >=0 && index < images.length){
                var imageName = images[index].name; // Get the filename of the image to delete


            var id = $('#cid').dxTextBox("instance").option("value");
            // Remove the image from the images array
            images.splice(index, 1);

            // Remove the image preview from the view
            $(this).closest('.image-preview').remove();

            // Send an AJAX request to delete the image from the server
            $.ajax({
                url: 'certificationsDelete/DeleteImage', // Replace 'deleteImage' with your actual backend endpoint
                method: 'POST',
                data: { imageName: imageName, cid:id }, // Send the filename of the image to delete
                success: function(response) {
                    DevExpress.ui.notify({
                        message: response.status,
                        position: {
                        my: 'top left',
                        at: 'top left'
                        },
                        type:'danger',
                        width: '300',
                        height:'150',
                        hideAfter: 2000
                    });
                },
                error: function(xhr, status, error) {
                    // Handle error response (e.g., display error message)
                }
            });
            }else{
                console.error('Invalid index:', index);
            }



        });
    })
});
//
}

