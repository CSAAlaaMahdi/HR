Supervisors_fetch();
Supervisors_filldata();
Supervisors_Permissions();

function Supervisors_cleardata() {
    $("#id").dxTextBox("instance").option("value", "");
    $("#Guid").dxTextBox("instance").option("value", "");
    $("#eid").dxDropDownBox("instance").option("value", null);
    $("#sdeg").dxSelectBox("instance").option("value", "");
    $("#sname").dxTextBox("instance").option("value", "");
    $("#docno").dxTextBox("instance").option("value", "");
    $("#docdate").dxDateBox("instance").option("value", "");
    $("#FilePath").dxFileUploader("instance").option("value","");
    $("#image-container").empty();

}

function Supervisors_chechdata() {
    if ($.trim($("#sdeg").dxSelectBox("instance").option('value')).length == 0) {
        error_sdeg = " مطلوب ";
        $("#error_sdeg").text(error_sdeg);
    } else {
        error_sdeg = "";
        $("#error_sdeg").text(error_sdeg);
    }

}

function Supervisors_UpdateOrCreate() {
    var url = "supervisors";
    var selectedDate = $("#docdate").dxDateBox("instance").option("value");
    var docdate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(selectedDate);
    var formData = new FormData();

    formData.append('id', $("#id").dxTextBox("instance").option("value"));
    formData.append('Guid', $("#Guid").dxTextBox("instance").option("value"));
    formData.append('eid', $("#eid").dxDropDownBox("instance").option("value"));
    formData.append('sdeg', $("#sdeg").dxSelectBox("instance").option("value"));
    formData.append('sname', $("#sname").dxTextBox("instance").option("value"));
    formData.append('docno', $("#docno").dxTextBox("instance").option("value"));
    formData.append('docdate', docdate);
    formData.append('DocTitle', $("#sdeg").dxSelectBox("instance").option("value"));
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
            Supervisors_cleardata();
            Supervisors_fetch();
        },
    });
}

function Supervisors_fetch() {
    $(document).ready(function () {
        var url = "supervisors/";
        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {
                    const dataGrid = $("#Supervisorsdatagrid").dxDataGrid({
                        dataSource: response.getSupervisors,
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
                        columnChooser:{enabled:true},
                        export: {
                            enabled: response.Permission['OptionEdit'],
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
                                dataField:"id",
                                caption:"ت",
                                visible:false,

                            },
                            {
                                caption: "#",
                                width: 100,
                                cellTemplate: function (container, options) {
                                    var imageUrl = 'assets/img/navbar/icons8_coach_64px.png' ;

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
                                caption: " المشرف",
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
                                dataField: "sdeg",
                                caption: " الدرجة",
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
                                dataField: "sname",
                                caption: "الاسماء  ",
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
                                dataField: "docno",
                                caption: "رقم الكتاب",
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
                                caption: "تاريخ الكتاب",
                                dataType : "date",
                                format: "yyyy-MM-dd",

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
                                        disabled:!response.Permission['OptionEdit'],
                                        onClick() {
                                            var rowData = options.data;
                                            let data = {
                                                id: rowData.id,
                                            };
                                            $.ajax({
                                                type: "GET",
                                                url: "supervisors/show",
                                                data: data,
                                                success: function (response) {
                                                    $("#id")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.Supervisors.id,
                                                        });
                                                        $("#Guid")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.Supervisors.Guid,
                                                        });
                                                    $("#eid")
                                                        .dxDropDownBox("instance")
                                                        .option({
                                                            value: Number(response.Supervisors.eid),
                                                        });
                                                    $("#sdeg")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value: response.Supervisors.sdeg,
                                                        });
                                                    $("#sname")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.Supervisors.sname,
                                                        });

                                                    $("#docno")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.Supervisors.docno
                                                        });
                                                        $("#docdate")
                                                        .dxDateBox("instance")
                                                        .option({
                                                            value:new Date(response.Supervisors.docdate)
                                                        });
                                                        $('#image-container').empty();
                                                        let images = [];
                                                        $.each(response.Attachments, function(index, file) {
                                                            images.push(file['FilePath']);

                                                            $('#image-container').append(
                                                                '<div class="image-preview">' +
                                                                '<button class="delete-image btn-danger"><i class="fa fa-trash"></i>حذف الكتاب</button>' +
                                                                '<img src="assets/img/administrationImage/' + file['FilePath'] + '" style="max-width: 400px; margin-right: 15px;">' +
                                                                '<a href="assets/img/administrationImage/' + file['FilePath'] + '" target="_blank">عرض النسخة</a>' +
                                                                '</div>'
                                                            );
                                                            setButtonState(!response.Permission['OptionDel']);
                                                        });
                                                          // Delete Image
                                                        $('#image-container').on('click', '.delete-image', function() {
                                                            var index = $(this).closest('.image-preview').index();

                                                            if(index >=0 && index < images.length){

                                                                var imageName = images[index]; // Get the filename of the image to delete

                                                                var id = $('#id').dxTextBox("instance").option("value");
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
                                                                    url: 'supervisorsDelete/DeleteImage', // Replace 'deleteImage' with your actual backend endpoint
                                                                    method: 'POST',
                                                                    data: { imageName: imageName, id:id ,Guid:Guid }, // Send the filename of the image to delete
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
                                                            "Supervisorsaction"
                                                        );
                                                    if (
                                                        displaycard.style
                                                            .display == "none"
                                                    ) {
                                                        document.getElementById(
                                                            "card_Supervisorstitle"
                                                        ).innerText =
                                                            "تعديل البيانات";
                                                        displaycard.style.display =
                                                            "block";
                                                        document
                                                            .getElementById(
                                                                "card_Supervisorstitle"
                                                            )
                                                            .scrollIntoView();
                                                    } else {
                                                        displaycard.style.display =
                                                            "none";
                                                        document.getElementById(
                                                            "card_Supervisorstitle"
                                                        ).innerText = "";
                                                        displaycard.style.display =
                                                            "block";
                                                        document.getElementById(
                                                            "card_Supervisorstitle"
                                                        ).innerText =
                                                            "تعديل البيانات";
                                                        document
                                                            .getElementById(
                                                                "card_Supervisorstitle"
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
                                        disabled:!response.Permission['OptionDel'],
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
                                                url: "supervisors/destroy",
                                                data: data,
                                                success: function (response) {
                                                    Supervisors_fetch();
                                                    Supervisors_cleardata();
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
                                                    Supervisors_fetch();
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
                                .addClass("custom-header_Supervisors");
                        },
                    });
                });
            },
        });
    });
}

function Supervisors_filldata() {
    var url = "supervisorsfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {
                $(() => {
                    $('#sdeg').dxSelectBox({
                        dataSource: response.getSdeg,
                        inputAttr: {style:"font-size:13px", },
                        placeholder:" الشهادة او الدرجة ",
                        searchEnabled:true,
                        displayExpr: 'sdeg',
                        valueExpr: 'sdeg',
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
                                    sdeg: data.text
                                };

                                response.getSdeg.push(newItem);
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
function Supervisors_Permissions(){
    $.ajax({
        type: "GET",
        url: "dashboardmainPermissions/Permissions",
        success: function (response) {
            let MainValue = response.Permission.filter(function (item){
                return item.FormName === 'الاشراف';
            })

            $("#btnNewAdd").dxButton("instance").option("disabled", !MainValue[0]['OptionAdd']);

       }
    });
}
function setButtonState(isDisabled) {
    $('.delete-image').prop('disabled', isDisabled);
}
$(document).ready(function () {
    $("#danger-contained").dxButton({
        stylingMode: "contained",
        text: "اغلاق",
        type: "danger",
        icon: "close",
        width: 120,
        onClick() {
            var displaycard = document.getElementById("Supervisorsaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_Supervisorstitle").innerText = "";
                Supervisors_cleardata();
                // Supervisors_setStCode();
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
            var displaycard = document.getElementById("Supervisorsaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_Supervisorstitle").innerText = "";
                Supervisors_cleardata();
                // Supervisors_setStCode();
                displaycard.style.display = "none";
                document.getElementById("btnSave").scrollIntoView();
            }else{
                document.getElementById("card_Supervisorstitle").innerText ="اضافة مشرف";
                displaycard.style.display = "block";
                document.getElementById("btnSave").scrollIntoView();

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
            Supervisors_chechdata();
            if(
                error_sdeg != ""
            )
            {
                return false;
            }else{
                Supervisors_UpdateOrCreate();
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
        $("#Guid").dxTextBox({
            placeholder: "",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#sname").dxTextBox({
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
                                '<button class="delete-image btn-danger"><i class="fa fa-trash"></i>حذف الصورة</button>' +
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


            var id = $('#id').dxTextBox("instance").option("value");
            // Remove the image from the images array
            images.splice(index, 1);

            // Remove the image preview from the view
            $(this).closest('.image-preview').remove();

            // Send an AJAX request to delete the image from the server
            $.ajax({
                url: 'suppervisorsDelete/DeleteImage', // Replace 'deleteImage' with your actual backend endpoint
                method: 'POST',
                data: { imageName: imageName, id:id }, // Send the filename of the image to delete
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
