Researches_fetch();
Researches_filldata();

function Researches_cleardata() {
    $("#rid").dxTextBox("instance").option("value", "");
    $("#Guid").dxTextBox("instance").option("value", "");
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
    $("#FilePath").dxFileUploader("instance").option("value","");
    $("#image-container").empty();

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

    var formData = new FormData();
    formData.append('rid', $("#rid").dxTextBox("instance").option("value"));
    formData.append('Guid', $("#Guid").dxTextBox("instance").option("value"));
    formData.append('ResType', $("#ResType").dxSelectBox("instance").option("value"));
    formData.append('Title', $("#Title").dxTextBox("instance").option("value"));
    formData.append('JournalName', $("#JournalName").dxTextBox("instance").option("value"));
    formData.append('PubDate', PubDate);
    formData.append('JournalType', $("#JournalType").dxSelectBox("instance").option("value"));
    formData.append('Jpos', $("#Jpos").dxSelectBox("instance").option("value"));
    formData.append('Numb', $("#Numb").dxTextBox("instance").option("value"));
    formData.append('Page', $("#Page").dxTextBox("instance").option("value"));
    formData.append('Isconf', $("#Isconf").dxSelectBox("instance").option("value"));
    formData.append('ConfName', $("#ConfName").dxTextBox("instance").option("value"));
    formData.append('ConfPlace', $("#ConfPlace").dxTextBox("instance").option("value"));
    formData.append('Rtype', $("#Rtype").dxSelectBox("instance").option("value"));
    formData.append('CiteScor', $("#CiteScor").dxTextBox("instance").option("value"));
    formData.append('ImpactFactor', $("#ImpactFactor").dxTextBox("instance").option("value"));
    formData.append('JournalQuartile', $("#JournalQuartile").dxTextBox("instance").option("value"));
    formData.append('ISSN', $("#ISSN").dxTextBox("instance").option("value"));
    formData.append('DOI', $("#DOI").dxTextBox("instance").option("value"));
    formData.append('Rlink', $("#Rlink").dxTextBox("instance").option("value"));
    formData.append('Extaut', $("#Extaut").dxTextBox("instance").option("value"));
    formData.append('DocTitle', $("#Title").dxTextBox("instance").option("value"));
    formData.append('eid', $("#eid").dxDropDownBox("instance").option("value"));
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
                        columnChooser:{enabled:true},
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
                                dataType : "date",
                                format: "yyyy-MM-dd",

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
                                dataField: "Numb",
                                caption: "Numb",
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
                                dataField: "Page",
                                caption: "عدد الصفحات",
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
                                dataField: "Isconf",
                                caption: "Isconf",
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
                                dataField: "ConfName",
                                caption: "ConfName",
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
                                dataField: "ConfPlace",
                                caption: "ConfPlace",
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
                                dataField: "Rtype",
                                caption: "Rtype",
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
                                dataField: "CiteScor",
                                caption: "CiteScor",
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
                                dataField: "ImpactFactor",
                                caption: "ImpactFactor",
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
                                dataField: "JournalQuartile",
                                caption: "JournalQuartile",
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
                                dataField: "ISSN",
                                caption: "ISSN",
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
                                dataField: "DOI",
                                caption: "DOI",
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
                                dataField: "Rlink",
                                caption: "رابط البحث",
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
                                dataField: "Extaut",
                                caption: "Extaut",
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
                                                rid: rowData.rid,
                                            };
                                            $.ajax({
                                                type: "GET",
                                                url: "researches/show",
                                                data: data,
                                                success: function (response) {
                                                    console.log(response);
                                                    $("#rid")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.Researches.rid,
                                                        });
                                                        $("#Guid")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.Researches.Guid,
                                                        });
                                                    $("#ResType")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value:response.Researches.ResType ,
                                                        });
                                                    $("#Title")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.Researches.Title,
                                                        });
                                                    $("#JournalName")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.Researches.JournalName,
                                                        });

                                                    $("#PubDate")
                                                        .dxDateBox("instance")
                                                        .option({
                                                            value: new Date(response.Researches.PubDate)
                                                        });
                                                        $("#JournalType")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value:response.Researches.JournalType
                                                        });
                                                        $("#Jpos")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value:response.Researches.Jpos
                                                        });
                                                    $("#Numb")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.Researches.Numb
                                                        });
                                                        $("#Page")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.Researches.Page
                                                        });
                                                        $("#Isconf")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value:response.Researches.Isconf
                                                        });
                                                        $("#ConfName")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.Researches.ConfName
                                                        });
                                                        $("#ConfPlace")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.Researches.ConfPlace
                                                        });
                                                        $("#Rtype")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value:response.Researches.Rtype
                                                        });
                                                        $("#CiteScor")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.Researches.CiteScor
                                                        });
                                                        $("#ImpactFactor")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.Researches.ImpactFactor
                                                        });
                                                        $("#JournalQuartile")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.Researches.JournalQuartile
                                                        });
                                                        $("#ISSN")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.Researches.ISSN
                                                        });
                                                        $("#DOI")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.Researches.DOI
                                                        });
                                                        $("#Rlink")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.Researches.Rlink
                                                        });
                                                        $("#Extaut")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.Researches.Extaut
                                                        });
                                                        let eidValue = [];
                                                        let eidValueName = [];

                                                        $.each(response.EmpResearch, function (index, value) {
                                                            eidValue.push(Number(value['Eid']));
                                                        });
                                                        $.each(response.EmpResearch2, function (index, value2) {
                                                            eidValueName.push(value2['Eid']);
                                                        });
                                                        $("#eid")
                                                        .dxDropDownBox("instance")
                                                        .option({
                                                            value: eidValue
                                                        });
                                                        let eidValueNameString = eidValueName.join('\n');
                                                        $("#EmpNames").dxTextArea('instance').option(
                                                            {
                                                                value:eidValueNameString
                                                            }
                                                        )


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

                                                                var id = $('#rid').dxTextBox("instance").option("value");
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
                                                                    url: 'researchesDelete/DeleteImage', // Replace 'deleteImage' with your actual backend endpoint
                                                                    method: 'POST',
                                                                    data: { imageName: imageName, rid:id ,Guid:Guid }, // Send the filename of the image to delete
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

                $(() => {
                    let dataGrid;
                    $("#eid").dxDropDownBox({
                        value: [],
                        valueExpr: "eid",
                        deferRendering: false,
                        placeholder: "الاسم   ",
                        inputAttr: {  style:"font-size:12px" },
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
                                selection: { mode: "multiple" },
                                selectedRowKeys: value,
                                height: 300,
                                onSelectionChanged(selectedItems) {
                                    const keys = selectedItems.selectedRowKeys;
                                    const hasSelection = keys.length;

                                    e.component.option(
                                        "value",
                                        hasSelection ? keys.map(key => key.eid) : null

                                    );
                                },


                            });

                            dataGrid = $dataGrid.dxDataGrid("instance");

                            e.component.on("valueChanged", (args) => {
                                if(Array.isArray(args.value)) {
                                    dataGrid.selectRows(args.value.map(eid => ({ eid })), true);
                                } else if (args.value) {
                                    // If it's not an array but has a value, create an array with that value
                                    dataGrid.selectRows([{ eid: args.value }], true);
                                } else {
                                    // If it's null or undefined, clear the selection
                                    dataGrid.clearSelection();
                                }

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
            var displaycard = document.getElementById("Researchesaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_Researchestitle").innerText = "";
                Researches_cleardata();
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
                document.getElementById("card_Researchestitle").scrollIntoView();
            }else{
                document.getElementById("card_Researchestitle").innerText ="اضافة  بحث";
                displaycard.style.display = "block";
                document.getElementById("card_Researchestitle").scrollIntoView();

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
        $("#Guid").dxTextBox({
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
    $(() => {
        $("#EmpNames").dxTextArea({
            // ...
            minHeight: 50,
            maxHeight: 500,
            autoResizeEnabled: true,
            // value: longText,
            maxLength: 4000,
            label: "الاسماء ",
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


            var id = $('#rid').dxTextBox("instance").option("value");
            // Remove the image from the images array
            images.splice(index, 1);

            // Remove the image preview from the view
            $(this).closest('.image-preview').remove();

            // Send an AJAX request to delete the image from the server
            $.ajax({
                url: 'certificationsDelete/DeleteImage', // Replace 'deleteImage' with your actual backend endpoint
                method: 'POST',
                data: { imageName: imageName, rid:id }, // Send the filename of the image to delete
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
