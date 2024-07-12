Articles_fetch();
Articles_filldata();
Articles_Permissions();

function Articles_cleardata() {
    $("#id").dxTextBox("instance").option("value", "");
    $("#Guid").dxTextBox("instance").option("value", "");
    $("#did").dxDropDownBox("instance").option("value", null);
    $("#article_title").dxTextBox("instance").option("value", "");
    $("#nof_aut").dxTextBox("instance").option("value", "");
    $("#pub_date").dxDateBox("instance").option("value", "");
    $("#Alink").dxTextBox("instance").option("value", "");
    $("#FilePath").dxFileUploader("instance").option("value","");
    $("#image-containter").empty();

}

function Articles_chechdata() {
    if ($.trim($("#article_title").dxTextBox("instance").option('value')).length == 0) {
        error_article_title = " مطلوب ";
        $("#error_article_title").text(error_article_title);
    } else {
        error_article_title = "";
        $("#error_article_title").text(error_article_title);
    }

}

function Articles_UpdateOrCreate() {
    var url = "articles";
    var selectedDate = $("#pub_date").dxDateBox("instance").option("value");
    var pub_date = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(selectedDate);

    var formData = new FormData();
    formData.append('id', $("#id").dxTextBox("instance").option("value"));
    formData.append('Guid', $("#Guid").dxTextBox("instance").option("value"));
    formData.append('did', $("#did").dxDropDownBox("instance").option("value"));
    formData.append('article_title', $("#article_title").dxTextBox("instance").option("value"));
    formData.append('nof_aut', $("#nof_aut").dxTextBox("instance").option("value"));
    formData.append('Alink', $("#Alink").dxTextBox("instance").option("value"));
    formData.append('pub_date', pub_date);
    formData.append('DocTitle', $("#article_title").dxTextBox("instance").option("value"));
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
            Articles_cleardata();
            Articles_fetch();
        },
    });
}

function Articles_fetch() {
    $(document).ready(function () {
        var url = "articles/";
        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {
                    const dataGrid = $("#Articlesdatagrid").dxDataGrid({
                        dataSource: response.getArticles,
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
                                    var imageUrl = 'assets/img/navbar/icons8_article_64px.png' ;

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
                                dataField: "did",
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
                                dataField: "article_title",
                                caption: " عنوان المقال",
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
                                dataField: "nof_aut",
                                caption: "عددا لمشتركين  ",
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
                                dataField: "pub_date",
                                caption: "تاريخ النشر   ",
                                dataType: "date",
                                format : "yyyy-MM-dd",

                            },
                            {
                                dataField: "Alink",
                                caption: "الرابط",
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
                                        disabled:!response.Permission['OptionEdit'],
                                        onClick() {
                                            var rowData = options.data;
                                            let data = {
                                                id: rowData.id,
                                            };
                                            $.ajax({
                                                type: "GET",
                                                url: "articles/show",
                                                data: data,
                                                success: function (response) {
                                                    $("#id")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.Articles.id,
                                                        });
                                                        $("#Guid")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.Articles.Guid,
                                                        });
                                                    $("#did")
                                                        .dxDropDownBox("instance")
                                                        .option({
                                                            value: Number(response.Articles.did),
                                                        });
                                                    $("#article_title")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.Articles.article_title,
                                                        });
                                                    $("#nof_aut")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.Articles.nof_aut,
                                                        });

                                                        $("#pub_date")
                                                        .dxDateBox("instance")
                                                        .option({
                                                            value:new Date(response.Articles.pub_date)
                                                        });
                                                        $("#Alink")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            Date:response.Articles.Alink
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
                                                                    url: 'articlesDelete/DeleteImage', // Replace 'deleteImage' with your actual backend endpoint
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
                                                            "Articlesaction"
                                                        );
                                                    if (
                                                        displaycard.style
                                                            .display == "none"
                                                    ) {
                                                        document.getElementById(
                                                            "card_Articlestitle"
                                                        ).innerText =
                                                            "تعديل البيانات";
                                                        displaycard.style.display =
                                                            "block";
                                                        document
                                                            .getElementById(
                                                                "card_Articlestitle"
                                                            )
                                                            .scrollIntoView();
                                                    } else {
                                                        displaycard.style.display =
                                                            "none";
                                                        document.getElementById(
                                                            "card_Articlestitle"
                                                        ).innerText = "";
                                                        displaycard.style.display =
                                                            "block";
                                                        document.getElementById(
                                                            "card_Articlestitle"
                                                        ).innerText =
                                                            "تعديل البيانات";
                                                        document
                                                            .getElementById(
                                                                "card_Articlestitle"
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
                                                url: "articles/destroy",
                                                data: data,
                                                success: function (response) {
                                                    Articles_fetch();
                                                    Articles_cleardata();
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
                                                    Articles_fetch();
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
                                .addClass("custom-header_Articles");
                        },
                    });
                });
            },
        });
    });
}

function Articles_filldata() {
    var url = "articlesfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {

                $(() => {
                    let dataGrid;
                    $("#did").dxDropDownBox({
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
function Articles_Permissions(){
    $.ajax({
        type: "GET",
        url: "dashboardmainPermissions/Permissions",
        success: function (response) {
            let MainValue = response.Permission.filter(function (item){
                return item.FormName === 'المقالات';
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
            var displaycard = document.getElementById("Articlesaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_Articlestitle").innerText = "";
                Articles_cleardata();
                // Articles_setStCode();
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
            var displaycard = document.getElementById("Articlesaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_Articlestitle").innerText = "";
                Articles_cleardata();
                // Articles_setStCode();
                displaycard.style.display = "none";
                document.getElementById("btnSave").scrollIntoView();
            }else{
                document.getElementById("card_Articlestitle").innerText ="اضافة  مقال";
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
            Articles_chechdata();
            if(
                error_article_title != ""
            )
            {
                return false;
            }else{
                Articles_UpdateOrCreate();
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
        $("#article_title").dxTextBox({
            placeholder: "",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#nof_aut").dxTextBox({
            placeholder: "",
            inputAttr: {  style:"font-size:13px", },
        });
    });
    $(() => {
        $("#Alink").dxTextBox({
            placeholder: "",
            inputAttr: {  style:"font-size:13px", },
        });
    });

    $(() => {
        const now = new Date();
        $("#pub_date").dxDateBox({
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
                                '<button class="delete-image  btn-danger"><i class="fa fa-trash"></i>حذف الصورة</button>' +
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
                url: 'articlesDelete/DeleteImage', // Replace 'deleteImage' with your actual backend endpoint
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
