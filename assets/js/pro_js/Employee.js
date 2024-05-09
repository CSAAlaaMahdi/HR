
Employee_filldata();

function Employee_cleardata() {
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
    $("#addres").dxTextBox("instance").option("value", "");
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

function Employee_chechdata() {
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

function Employee_UpdateOrCreate() {
    var url = "employees";
    var selectedDate = $("#dob").dxDateBox("instance").option("value");
    var dob = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(selectedDate);

    var selectedDate2 = $("#iddate").dxDateBox("instance").option("value");
    var iddate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(selectedDate2);

    var selectedDate3 = $("#idcerdate").dxDateBox("instance").option("value");
    var idcerdate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(selectedDate3);

    var selectedDate4 = $("#homedate").dxDateBox("instance").option("value");
    var homedate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(selectedDate4);
    var selectedDate5 = $("#hiredate").dxDateBox("instance").option("value");
    var hiredate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(selectedDate5);

    var selectedDate6 = $("#rehiredate").dxDateBox("instance").option("value");
    var rehiredate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(selectedDate6);
    var selectedDate7 = $("#moh_wdate").dxDateBox("instance").option("value");
    var moh_wdate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(selectedDate7);

    var formData = new FormData();
    formData.append('eid', $("#eid").dxTextBox("instance").option("value"));
    formData.append('Guid', $("#Guid").dxTextBox("instance").option("value"));
    formData.append('firstname', $("#firstname").dxTextBox("instance").option("value"));
    formData.append('secondname', $("#secondname").dxTextBox("instance").option("value"));
    formData.append('thirdname', $("#thirdname").dxTextBox("instance").option("value"));
    formData.append('forthname', $("#forthname").dxTextBox("instance").option("value"));
    formData.append('surname', $("#surname").dxTextBox("instance").option("value"));
    formData.append('fullname', $("#fullname").dxTextBox("instance").option("value"));
    formData.append('mothername', $("#mothername").dxTextBox("instance").option("value"));
    formData.append('address', $("#address").dxTextBox("instance").option("value"));
    formData.append('wifename', $("#wifename").dxTextBox("instance").option("value"));
    formData.append('email', $("#email").dxTextBox("instance").option("value"));
    formData.append('mobile', $("#mobile").dxTextBox("instance").option("value"));
    formData.append('idno', $("#idno").dxTextBox("instance").option("value"));
    formData.append('idcerno', $("#mobile").idcerno("instance").option("value"));
    formData.append('homeid', $("#homeid").dxTextBox("instance").option("value"));
    formData.append('rationo', $("#rationo").dxTextBox("instance").option("value"));
    formData.append('notes', $("#notes").dxTextArea("instance").option("value"));
    formData.append('dob', dob);
    formData.append('iddate', iddate);
    formData.append('idcerdate', idcerdate);
    formData.append('homedate', homedate);
    formData.append('hiredate', hiredate);
    formData.append('rehiredate', rehiredate);
    formData.append('moh_wdate', moh_wdate);
    formData.append('bplace', $("#bplace").dxSelectBox("instance").option("value"));
    formData.append('governorate', $("#governorate").dxSelectBox("instance").option("value"));
    formData.append('MaritalStatus', $("#MaritalStatus").dxSelectBox("instance").option("value"));
    formData.append('wifejob', $("#wifejob").dxSelectBox("instance").option("value"));
    formData.append('issueplace', $("#issueplace").dxSelectBox("instance").option("value"));
    formData.append('jclass', $("#jclass").dxSelectBox("instance").option("value"));
    formData.append('jcategory', $("#jcategory").dxSelectBox("instance").option("value"));
    formData.append('genralspt', $("#genralspt").dxSelectBox("instance").option("value"));
    formData.append('spacifspt', $("#spacifspt").dxSelectBox("instance").option("value"));
    formData.append('deptid', $("#deptid").dxDropDownBox("instance").option("value"));
    formData.append('bloodtype', $("#bloodtype").dxSelectBox("instance").option("value"));
    formData.append('gender', $("#gender").dxSelectBox("instance").option("value"));
    formData.append('active', (function(){
        if($("#active").dxSwitch("instance").option("value")){
            return 1;
        }else return 0;
    })());





    formData.append('DocTitle', $("#ttype").dxSelectBox("instance").option("value"));
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

        },
    });
}



function Employee_filldata() {
    var url = "employeesfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {

                $(() => {


                    $(() => {
                        $('#bplace').dxSelectBox({
                            dataSource: response.getBPlace,
                            inputAttr: {style:"font-size:13px", },
                            placeholder:" ادخل مكان الولادة ",
                            searchEnabled:true,
                            displayExpr: 'bplace',
                            valueExpr: 'bplace',
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
                                        bplace: data.text
                                    };

                                    response.getBPlace.push(newItem);
                                    data.component.option("value",newItem);
                                    data.customItem = newItem;

                            },

                        });
                    });
                    $(() => {
                        $('#gender').dxSelectBox({
                            dataSource: response.getGender,
                            inputAttr: {style:"font-size:13px", },
                            placeholder:"الجنس",
                            searchEnabled:true,
                            displayExpr: 'gender',
                            valueExpr: 'gender',
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
                                        gender: data.text
                                    };

                                    response.getGender.push(newItem);
                                    data.component.option("value",newItem);
                                    data.customItem = newItem;

                            },

                        });
                    });
                    $(() => {
                        $('#governorate').dxSelectBox({
                            dataSource: response.getGovernorate,
                            inputAttr: {style:"font-size:13px", },
                            placeholder:" ادخل المحافظة ",
                            searchEnabled:true,
                            displayExpr: 'governorate',
                            valueExpr: 'governorate',
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
                                        governorate: data.text
                                    };

                                    response.getGovernorate.push(newItem);
                                    data.component.option("value",newItem);
                                    data.customItem = newItem;

                            },

                        });
                    });
                    $(() => {
                        $('#bloodtype').dxSelectBox({
                            dataSource: response.getBloodType,
                            inputAttr: {style:"font-size:13px", },
                            placeholder:"ادخل فئة الدم  ",
                            searchEnabled:true,
                            displayExpr: 'bloodtype',
                            valueExpr: 'bloodtype',
                            searchMode: "contains",
                            acceptCustomValue: true,
                            dropDownOptions: {
                                height: 250
                            },
                            onCustomItemCreating(data) {
                                    if (!data.text) {
                                        data.customItem = null;
                                        return;
                                    }

                                    const newItem = {
                                        bloodtype: data.text
                                    };

                                    response.getBloodType.push(newItem);
                                    data.component.option("value",newItem);
                                    data.customItem = newItem;

                            },

                        });
                    });
                    $(() => {
                        $('#MaritalStatus').dxSelectBox({
                            dataSource: response.getMaritalStatus,
                            inputAttr: {style:"font-size:13px", },
                            placeholder:"الحالة الزوجية ",
                            searchEnabled:true,
                            displayExpr: 'MaritalStatus',
                            valueExpr: 'MaritalStatus',
                            searchMode: "contains",
                            acceptCustomValue: true,
                            dropDownOptions: {
                                height: 250
                            },
                            onCustomItemCreating(data) {
                                    if (!data.text) {
                                        data.customItem = null;
                                        return;
                                    }

                                    const newItem = {
                                        MaritalStatus: data.text
                                    };

                                    response.getMaritalStatus.push(newItem);
                                    data.component.option("value",newItem);
                                    data.customItem = newItem;

                            },

                        });
                    });
                    $(() => {
                        $('#wifejob').dxSelectBox({
                            dataSource: response.getWifeJobe,
                            inputAttr: {style:"font-size:13px", },
                            placeholder:"مهنة الزوجة",
                            searchEnabled:true,
                            displayExpr: 'wifejobe',
                            valueExpr: 'wifejobe',
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
                                        wifejobe: data.text
                                    };

                                    response.getWifeJobe.push(newItem);
                                    data.component.option("value",newItem);
                                    data.customItem = newItem;

                            },

                        });

                    });
                    $(() => {
                        $('#issueplace').dxSelectBox({
                            dataSource: response.getIssuePlace,
                            inputAttr: {style:"font-size:13px", },
                            placeholder:"ادخل جهة الاصدار ",
                            searchEnabled:true,
                            displayExpr: 'issueplace',
                            valueExpr: 'issueplace',
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
                                        issueplace: data.text
                                    };

                                    response.getIssuePlace.push(newItem);
                                    data.component.option("value",newItem);
                                    data.customItem = newItem;

                            },

                        });

                    });
                    $(() => {
                        $('#jclass').dxSelectBox({
                            dataSource: response.getJClass,
                            inputAttr: {style:"font-size:13px", },
                            placeholder:"ادخل الصنف الوظيفي  ",
                            searchEnabled:true,
                            displayExpr: 'jclass',
                            valueExpr: 'jclass',
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
                                        jclass: data.text
                                    };

                                    response.getJClass.push(newItem);
                                    data.component.option("value",newItem);
                                    data.customItem = newItem;

                            },

                        });

                    });
                    $(() => {
                        $('#jcategory').dxSelectBox({
                            dataSource: response.getJCategory,
                            inputAttr: {style:"font-size:13px", },
                            placeholder:"ادخل العنوان الوظيفي  ",
                            searchEnabled:true,
                            displayExpr: 'jcategory',
                            valueExpr: 'jcategory',
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
                                        jcategory: data.text
                                    };

                                    response.getJCategory.push(newItem);
                                    data.component.option("value",newItem);
                                    data.customItem = newItem;

                            },

                        });

                    });
                    $(() => {
                        $('#genralspt').dxSelectBox({
                            dataSource: response.getGenralSpt,
                            inputAttr: {style:"font-size:13px", },
                            placeholder:"ادخل الاختصاص العام",
                            searchEnabled:true,
                            displayExpr: 'genralspt',
                            valueExpr: 'genralspt',
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
                                        genralspt: data.text
                                    };

                                    response.getGenralSpt.push(newItem);
                                    data.component.option("value",newItem);
                                    data.customItem = newItem;

                            },

                        });

                    });
                    $(() => {
                        $('#spacifspt').dxSelectBox({
                            dataSource: response.getSpacifSpt,
                            inputAttr: {style:"font-size:13px", },
                            placeholder:"ادخل الاختصاص الدقيق",
                            searchEnabled:true,
                            displayExpr: 'spacifspt',
                            valueExpr: 'spacifspt',
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
                                        spacifspt: data.text
                                    };

                                    response.getSpacifSpt.push(newItem);
                                    data.component.option("value",newItem);
                                    data.customItem = newItem;

                            },

                        });

                    });
                    $(() => {
                        let dataGrid;
                        $("#deptid").dxDropDownBox({
                            value: null,
                            valueExpr: "deptid",
                            deferRendering: false,
                            placeholder: "ادخل مكان العمل ",
                            inputAttr: { "aria-label": "Sales_Group" },
                            displayExpr(item) {
                                return item && `${item.deptname} `;
                            },
                            showClearButton: true,
                            dataSource: response.getDepts,//makeAsyncDataSource('customer.json'),
                            contentTemplate(e) {
                                const value = e.component.option("value");
                                const $dataGrid = $("<div>").dxDataGrid({
                                    dataSource: e.component.getDataSource(),
                                    columns: [
                                        {
                                            dataField:"deptname",
                                            caption:"مكان العمل"

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
                                            hasSelection ? keys[0].deptid : null

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

                    $(() => {

                        $("#SearchEmp").dxDropDownBox({
                            value: 0,
                            valueExpr: "eid",
                            deferRendering: false,
                            placeholder: "بحث في الاسم ",
                            inputAttr: { "aria-label": "deptname",style:"font-size:14px",  },
                            displayExpr(item) {
                                return item && `${item.fullname}`;
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
                                            caption : "اسم الموظف",
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
                                            hasSelection ? keys[0].eid : 0

                                        );
                                        let eid = keys[0].eid;
                                        $.ajax({
                                            type: "GET",
                                            url: "employees/show",
                                            data: {eid:eid},
                                            success: function (response) {

                                                $("#eid").dxTextBox("instance").option("value",response.Emp.eid);
                                                $("#Guid").dxTextBox("instance").option("value",response.Emp.Guid);
                                                $("#firstname").dxTextBox("instance").option("value",response.Emp.firstname);
                                                $("#secondname").dxTextBox("instance").option("value",response.Emp.secondname);
                                                $("#thirdname").dxTextBox("instance").option("value",response.Emp.thirdname);
                                                $("#forthname").dxTextBox("instance").option("value",response.Emp.forthname);
                                                $("#surname").dxTextBox("instance").option("value",response.Emp.surname);
                                                $("#fullname").dxTextBox("instance").option("value",response.Emp.fullname);
                                                $("#mothername").dxTextBox("instance").option("value",response.Emp.mothername);
                                                $("#addres").dxTextBox("instance").option("value",response.Emp.addres);
                                                $("#wifename").dxTextBox("instance").option("value",response.Emp.wifename);
                                                $("#email").dxTextBox("instance").option("value",response.Emp.email);
                                                $("#mobile").dxTextBox("instance").option("value",response.Emp.mobile);
                                                $("#idno").dxTextBox("instance").option("value",response.Emp.idno);
                                                $("#idcerno").dxTextBox("instance").option("value",response.Emp.idcerno);
                                                $("#homeid").dxTextBox("instance").option("value",response.Emp.homeid);
                                                $("#rationo").dxTextBox("instance").option("value",response.Emp.rationo);
                                                $("#notes").dxTextArea("instance").option("value",response.Emp.notes);
                                                $("#dob").dxDateBox("instance").option("value",new Date(response.Emp.dob));
                                                $("#iddate").dxDateBox("instance").option("value",new Date(response.Emp.iddate));
                                                $("#idcerdate").dxDateBox("instance").option("value",new Date(response.Emp.idcerdate));
                                                $("#homedate").dxDateBox("instance").option("value",new Date(response.Emp.homedate));
                                                $("#hiredate").dxDateBox("instance").option("value",new Date(response.Emp.hiredate));
                                                $("#rehiredate").dxDateBox("instance").option("value",new Date(response.Emp.rehiredate));
                                                $("#moh_wdate").dxDateBox("instance").option("value",new Date(response.Emp.moh_wdate));
                                                $("#bplace").dxSelectBox("instance").option("value",response.bplace);
                                                $("#governorate").dxSelectBox("instance").option("value",response.Emp.governorate);
                                                $("#MaritalStatus").dxSelectBox("instance").option("value",response.Emp.MaritalStatus);
                                                $("#wifejob").dxSelectBox("instance").option("value",response.Emp.wifejob);
                                                $("#issueplace").dxSelectBox("instance").option("value",response.Emp.issueplace);
                                                $("#jclass").dxSelectBox("instance").option("value",response.Emp.jclass);
                                                $("#jcategory").dxSelectBox("instance").option("value",response.Emp.jcategory);
                                                $("#genralspt").dxSelectBox("instance").option("value",response.Emp.genralspt);
                                                $("#spacifspt").dxSelectBox("instance").option("value",response.Emp.spacifspt);
                                                $("#bloodtype").dxSelectBox("instance").option("value",response.Emp.bloodtype);
                                                $("#active")
                                                .dxSwitch("instance")
                                                .option("value",response.Emp.active === "1" ? true:false);
                                                $("#gender").dxSelectBox("instance").option("value",response.Emp.gender);
                                                $("#deptid").dxDropDownBox("instance").option("value",Number(response.Emp.deptid));

                                                $('#EmpImage').empty();
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
                                                $('#EmpImage').on('click', '.delete-image', function() {
                                                    var index = $(this).closest('.image-preview').index();

                                                    if(index >=0 && index < images.length){

                                                        var imageName = images[index]; // Get the filename of the image to delete

                                                        var id = $('#eid').dxTextBox("instance").option("value");
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
                                                            url: 'employeesDelete/DeleteImage', // Replace 'deleteImage' with your actual backend endpoint
                                                            method: 'POST',
                                                            data: { imageName: imageName, eid:id ,Guid:Guid }, // Send the filename of the image to delete
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

            Employee_cleardata();
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

            // Employee_UpdateOrCreate();
            Employee_chechdata();
            if(error_firstname != "" || error_secondname !=  "" || error_thirdname !=  ""
            ||  error_forthname !=  "" || error_surname != ""  || error_mothername != ""
            || error_mobile != "" || error_gender != "")
            {
                return false;
            }else{
                Employee_UpdateOrCreate();
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
        $("#addres").dxTextBox({
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
                url: 'employeesDelete/DeleteImage', // Replace 'deleteImage' with your actual backend endpoint
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
//
