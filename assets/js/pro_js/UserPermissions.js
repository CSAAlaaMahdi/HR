
UserPermissions_filldata();

function UserPermissions_cleardata() {
    $("#SearchEmp").dxDropDownBox("instance").option("value",null);
    $("#eid").dxTextBox("instance").option("value", "");
    $("#Guid").dxTextBox("instance").option("value", "");
    $("#firstname").dxTextBox("instance").option("value", "");
    $("#secondname").dxTextBox("instance").option("value", "");
    $("#thirdname").dxTextBox("instance").option("value", "");
    $("#forthname").dxTextBox("instance").option("value", "");
    $("#surname").dxTextBox("instance").option("value", "");
    $("#fullname").dxTextBox("instance").option("value", "");
    $("#mothername").dxTextBox("instance").option("value", "");
    $("#address").dxTextBox("instance").option("value", "");
    $("#wifename").dxTextBox("instance").option("value", "");
    $("#email").dxTextBox("instance").option("value", "");
    $("#mobile").dxTextBox("instance").option("value", "");
    $("#idno").dxTextBox("instance").option("value", "");
    $("#idcerno").dxTextBox("instance").option("value", "");
    $("#homeid").dxTextBox("instance").option("value", "");
    $("#rationo").dxTextBox("instance").option("value", "");
    $("#notes").dxTextArea("instance").option("value", "");
    $("#gender").dxSelectBox("instance").option("value", "");
    $("#active").dxSwitch("instance").option("value", false);
    $("#dob").dxDateBox("instance").option("value", "");
    $("#iddate").dxDateBox("instance").option("value", "");
    $("#idcerdate").dxDateBox("instance").option("value", "");
    $("#homedate").dxDateBox("instance").option("value", "");
    $("#hiredate").dxDateBox("instance").option("value", "");
    $("#rehiredate").dxDateBox("instance").option("value", "");
    $("#moh_wdate").dxDateBox("instance").option("value", "");
    $("#bplace").dxSelectBox("instance").option("value", "");
    $("#governorate").dxSelectBox("instance").option("value", "");
    $("#MaritalStatus").dxSelectBox("instance").option("value", "");
    $("#wifejob").dxSelectBox("instance").option("value", "");
    $("#issueplace").dxSelectBox("instance").option("value", "");
    $("#jclass").dxSelectBox("instance").option("value", "");
    $("#jcategory").dxSelectBox("instance").option("value", "");
    $("#genralspt").dxSelectBox("instance").option("value", "");
    $("#spacifspt").dxSelectBox("instance").option("value", "");
    $("#deptid").dxDropDownBox("instance").option("value", null);
    $("#bloodtype").dxSelectBox("instance").option("value", "");
    $("#FilePath").dxFileUploader("instance").option("value","");
    $("#EmpImage").empty();



}

function UserPermissions_chechdata() {
    if ($.trim($("#firstname").dxTextBox("instance").option('value')).length == 0) {
        error_firstname = " مطلوب ";
        $("#error_firstname").text(error_firstname);
    } else {
        error_firstname = "";
        $("#error_firstname").text(error_firstname);
    }
    if ($.trim($("#secondname").dxTextBox("instance").option('value')).length == 0) {
        error_secondname = "  مطلوب";
        $("#error_secondname").text(error_secondname);
    } else {
        error_secondname = "";
        $("#error_secondname").text(error_secondname);
    }
    if ($.trim($("#thirdname").dxTextBox("instance").option('value')).length == 0) {
        error_thirdname = " مطلوب";
        $("#error_thirdname").text(error_thirdname);
    } else {
        error_thirdname = "";
        $("#error_thirdname").text(error_thirdname);
    }
    if ($.trim($("#forthname").dxTextBox("instance").option('value')).length == 0) {
        error_forthname = " مطلوب";
        $("#error_forthname").text(error_forthname);
    } else {
        error_forthname = "";
        $("#error_forthname").text(error_forthname);
    }
    if ($.trim($("#surname").dxTextBox("instance").option('value')).length == 0) {
        error_surname = " مطلوب";
        $("#error_surname").text(error_surname);
    } else {
        error_surname = "";
        $("#error_surname").text(error_surname);
    }
    if ($.trim($("#mothername").dxTextBox("instance").option('value')).length == 0) {
        error_mothername = " مطلوب";
        $("#error_mothername").text(error_mothername);
    } else {
        error_mothername = "";
        $("#error_mothername").text(error_mothername);
    }
    if ($.trim($("#gender").dxSelectBox("instance").option('value')).length == 0) {
        error_gender = " مطلوب";
        $("#error_gender").text(error_gender);
    } else {
        error_gender = "";
        $("#error_gender").text(error_gender);
    }
    if ($.trim($("#mobile").dxTextBox("instance").option('value')).length == 0) {
        error_mobile = " مطلوب";
        $("#error_mobile").text(error_mobile);
    } else {
        error_mobile = "";
        $("#error_mobile").text(error_mobile);
    }
}

function UserPermissions_UpdateOrCreate() {
    var url = "userPermissions";
    var formData = new FormData();
    formData.append('id', $("#id").dxTextBox("instance").option("value"));
    formData.append('userid', $("#userid").dxDropDownBox("instance").option("value"));
    formData.append('form', $("#form").dxTextBox("instance").option("value"));
    formData.append('enable', (function(){
        if($("#enable").dxSwitch("instance").option("value")){
            return 1;
        }else return 0;
    })());
    formData.append('readOnly', (function(){
        if($("#readOnly").dxSwitch("instance").option("value")){
            return 1;
        }else return 0;
    })());
    formData.append('readWrite', (function(){
        if($("#readWrite").dxSwitch("instance").option("value")){
            return 1;
        }else return 0;
    })());
    formData.append('deleteOption', (function(){
        if($("#deleteOption").dxSwitch("instance").option("value")){
            return 1;
        }else return 0;
    })());

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

        },
    });
}



function UserPermissions_filldata() {
    var url = "userPermissionsfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {

                $(() => {


                    $(() => {
                        $("#SearchUser").dxDropDownBox({
                            value: 0,
                            valueExpr: "userid",
                            deferRendering: false,
                            placeholder: "بحث في الاسم ",
                            inputAttr: { "aria-label": "deptname",style:"font-size:14px",  },
                            displayExpr(item) {
                                return item && `${item.username}`;
                            },
                            showClearButton: true,
                            dataSource: response.getUsers,//makeAsyncDataSource('customer.json'),
                            contentTemplate(e) {
                                const value = e.component.option("value");
                                const $dataGrid = $("<div>").dxDataGrid({
                                    dataSource: e.component.getDataSource(),
                                    columns: [
                                        {
                                            dataField:"username",
                                            caption : "اسم المستخدم",
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
                                    paging: { enabled: true, pageSize: 10},
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
                                            hasSelection ? keys[0].userid : 0

                                        );
                                        let userid = keys[0].userid;
                                        $.ajax({
                                            type: "GET",
                                            url: "userPermissionss/show",
                                            data: {userid:userid},
                                            success: function (response) {
                                                console.log(response);
                                                //#region UserPermissionssData....
                                                $("#id").dxTextBox("instance").option("value",response.UserPermissions.id);
                                                $("#form").dxTextBox("instance").option("value",response.UserPermissions.form);

                                                $("#enable")
                                                .dxSwitch("instance")
                                                .option("value",response.UserPermissions.enable === "1" ? true:false);


                                                //#endregion


                                            }
                                        });
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

                });

            },
        });
    });
}

$(document).ready(function () {
    $("#btnNewAddEmp").dxButton({
        stylingMode: "contained",
        text: "جديد",
        type: "success",
        icon: "plus",
        width: 120,
        onClick() {

            UserPermissions_cleardata();
        },
    });
});
// Button Save Data
$(document).ready(function () {
    $("#btnSaveEmp").dxButton({
        stylingMode: "contained",
        text: "حفظ",
        type: "default",
        icon: "check",
        width: 120,
        onClick() {

            // UserPermissions_UpdateOrCreate();
            UserPermissions_chechdata();
            if(error_firstname != "" || error_secondname !=  "" || error_thirdname !=  ""
            ||  error_forthname !=  "" || error_surname != ""  || error_mothername != ""
            || error_mobile != "" || error_gender != "")
            {
                return false;
            }else{
                UserPermissions_UpdateOrCreate();
            }
        },
    });
});
// End Button Save

// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#eid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#cid").dxTextBox({
            placeholder: " ",
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
        $("#firstname").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
            onValueChanged: function(e) {
                // When the value changes, set the value of the second dxTextBox
                if (e.value) {
                    let oldtext = $('#fullname').dxTextBox("instance").option("value");
                    $("#fullname").dxTextBox("instance").option("value",oldtext + ' ' + e.value);
                }
            },

        });
    });

    $(() => {
        $("#secondname").dxTextBox({
            placeholder: "",
            inputAttr: { style:"font-size:13px", },
            onValueChanged: function(e) {
                // When the value changes, set the value of the second dxTextBox
                if (e.value) {
                    let oldtext = $('#fullname').dxTextBox("instance").option("value");
                    $("#fullname").dxTextBox("instance").option("value",oldtext + ' ' + e.value);
                }
            }
        });
    });
    $(() => {
        $("#thirdname").dxTextBox({
            placeholder: "",
            inputAttr: {
                 style:"font-size:13px",
                 },
                 onValueChanged: function(e) {
                    // When the value changes, set the value of the second dxTextBox
                    if (e.value) {
                        let oldtext = $('#fullname').dxTextBox("instance").option("value");
                        $("#fullname").dxTextBox("instance").option("value",oldtext + ' ' + e.value);
                    }
                }
        });
    });
    $(() => {
        $("#forthname").dxTextBox({
            placeholder: "",
            inputAttr: {
                 style:"font-size:13px",
                 },
                 onValueChanged: function(e) {
                    // When the value changes, set the value of the second dxTextBox
                    if (e.value) {
                        let oldtext = $('#fullname').dxTextBox("instance").option("value");
                        $("#fullname").dxTextBox("instance").option("value",oldtext + ' ' + e.value);
                    }
                }
        });
    });
    $(() => {
        $("#surname").dxTextBox({
            placeholder: "",
            inputAttr: {
                 style:"font-size:13px",
                 },
                 onValueChanged: function(e) {
                    // When the value changes, set the value of the second dxTextBox
                    if (e.value) {
                        let oldtext = $('#fullname').dxTextBox("instance").option("value");
                        $("#fullname").dxTextBox("instance").option("value",oldtext + ' ' + e.value);
                    }
                }
        });
    });
    $(() => {
        $("#fullname").dxTextBox({
            placeholder: "",
            inputAttr: {
                 style:"font-size:13px",
                 },
        });
    });
    $(() => {
        $("#mothername").dxTextBox({
            placeholder: "",
            inputAttr: {
                 style:"font-size:13px",
                 },
        });
    });
    $(() => {
        $("#wifename").dxTextBox({
            placeholder: "",
            inputAttr: {
                 style:"font-size:13px",
                 },
        });
    });
    $(() => {
        $("#address").dxTextBox({
            placeholder: "",
            inputAttr: {
                 style:"font-size:13px",
                 },
        });
    });
    $(() => {
        $("#email").dxTextBox({
            placeholder: "ادخل  البريد الالكتروني",
            inputAttr: {
                 style:"font-size:13px",
                 },
        });
    });
    $(() => {
        $("#mobile").dxTextBox({
            placeholder: "ادخل رقم الموبايل",
            inputAttr: {
                 style:"font-size:13px",
                 },
        });
    });

    $(() => {
        $("#dob").dxDateBox({

        });
    });
    $(() => {
        $("#idno").dxTextBox({
            placeholder: "  ",
            inputAttr: {
                 style:"font-size:13px",
                 },
        });
    });
    $(() => {
        $("#idcerno").dxTextBox({
            placeholder: "  ",
            inputAttr: {
                 style:"font-size:13px",
                 },
        });
    });
    $(() => {
        $("#homeid").dxTextBox({
            placeholder: "  ",
            inputAttr: {
                 style:"font-size:13px",
                 },
        });
    });
    $(() => {
        $("#rationo").dxTextBox({
            placeholder: "  ",
            inputAttr: {
                 style:"font-size:13px",
                 },
        });
    });
    $(() => {
        $("#iddate").dxDateBox({

        });
    });
    $(() => {
        $("#homedate").dxDateBox({

        });
    });
    $(() => {
        $("#idcerdate").dxDateBox({

        });
    });
    $(() => {
        $("#hiredate").dxDateBox({

        });
    });
    $(() => {
        $("#rehiredate").dxDateBox({

        });
    });
    $(() => {
        $("#moh_wdate").dxDateBox({

        });
    });
    $(() => {
        $("#active").dxSwitch({

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
    $(() =>{
        let images = [];
        $('#FilePath').dxFileUploader({
            multiple: true,
            selectButtonText: 'تحميل صورة شخصية',
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
                            $('#EmpImage').append(
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
        $('#EmpImage').on('click', '.delete-image', function() {
            var index = $(this).closest('.image-preview').index();

            if(index >=0 && index < images.length){
                var imageName = images[index].name; // Get the filename of the image to delete


            var id = $('#eid').dxTextBox("instance").option("value");
            // Remove the image from the images array
            images.splice(index, 1);

            // Remove the image preview from the view
            $(this).closest('.image-preview').remove();

            // Send an AJAX request to delete the image from the server
            $.ajax({
                url: 'UserPermissionssDelete/DeleteImage', // Replace 'deleteImage' with your actual backend endpoint
                method: 'POST',
                data: { imageName: imageName, eid:id }, // Send the filename of the image to delete
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
