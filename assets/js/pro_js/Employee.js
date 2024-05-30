
Employee_filldata();
EmpCertificationComponent();
EmpThanksComponent();
EmpVacationsComponent();
EmpJobsComponent();
EmpPositionsComponent();
EmpSupervisorsComponent();
EmpArticlesComponent();
EmpChildrenComponent();
Employee_Permissions();
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
    $("#empno").dxTextBox("instance").option("value", "");
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
    formData.append('idcerno', $("#idcerno").dxTextBox("instance").option("value"));
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
    formData.append('empno', $("#empno").dxTextBox("instance").option("value"));
    formData.append('active', (function(){
        if($("#active").dxSwitch("instance").option("value")){
            return 1;
        }else return 0;
    })());
    formData.append('DocTitle', $("#fullname").dxTextBox("instance").option("value"));
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
                                                console.log(response);
                                                //#region EmployeesData....
                                                $("#eid").dxTextBox("instance").option("value",response.Emp.eid);
                                                $("#Guid").dxTextBox("instance").option("value",response.Emp.Guid);
                                                $("#firstname").dxTextBox("instance").option("value",response.Emp.firstname);
                                                $("#secondname").dxTextBox("instance").option("value",response.Emp.secondname);
                                                $("#thirdname").dxTextBox("instance").option("value",response.Emp.thirdname);
                                                $("#forthname").dxTextBox("instance").option("value",response.Emp.forthname);
                                                $("#surname").dxTextBox("instance").option("value",response.Emp.surname);
                                                $("#fullname").dxTextBox("instance").option("value",response.Emp.fullname);
                                                $("#mothername").dxTextBox("instance").option("value",response.Emp.mothername);
                                                $("#address").dxTextBox("instance").option("value",response.Emp.address);
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
                                                $("#empno").dxTextBox("instance").option("value",response.Emp.empno);
                                                $("#active")
                                                .dxSwitch("instance")
                                                .option("value",response.Emp.active === "1" ? true:false);
                                                $("#gender").dxSelectBox("instance").option("value",response.Emp.gender);
                                                $("#deptid").dxDropDownBox("instance").option("value",Number(response.Emp.deptid));

                                                $('#EmpImage').empty();
                                                $('#EmpImageDelete').empty();
                                                let images = [];
                                                $.each(response.Attachments, function(index, file) {
                                                    images.push(file['FilePath']);

                                                    $('#EmpImage').append(
                                                        '<div class="image-preview">' +
                                                        '<img src="assets/img/employeesImage/' + file['FilePath'] + '" >' +
                                                        '<a href="assets/img/employeesImage/' + file['FilePath'] + '" target="_blank">عرض النسخة</a>' +
                                                        '</div>'

                                                    );
                                                    $('#EmpImageDelete').append(
                                                        '<div class="image-preview">' +
                                                        '<button type="button" class="delete-imageEmp btn-outline-danger " id="titlefont"><i class="fa fa-trash"> حذف</i> </button>' +
                                                        '</div>'
                                                    );
                                                });
                                                  // Delete Image
                                                $('#EmpImageDelete').on('click', '.delete-imageEmp', function() {
                                                    var index = $(this).closest('.image-preview').index();

                                                    if(index >=0 && index < images.length){

                                                        var imageName = images[index]; // Get the filename of the image to delete

                                                        var id = $('#eid').dxTextBox("instance").option("value");
                                                        let Guid = $("#Guid").dxTextBox("instance").option("value");
                                                        // Remove the image from the images array
                                                        images.splice(index, 0);

                                                        // Remove the image preview from the view
                                                        $('.image-preview').remove();

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
                                                //#endregion


                                                //#region EmpCertification
                                                $(function () {
                                                    const dataGrid = $("#EmpCertificationsdatagrid").dxDataGrid({
                                                        dataSource: response.Emp.emp_certification,
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
                                                                caption: "تفاصيل",
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
                                                                            EmpCertificationClear();
                                                                            var rowData = options.data;
                                                                            const rowIndex = options.row.rowIndex;
                                                                            let data = {
                                                                                cid: rowData.cid,
                                                                            };

                                                                            $("#EmpCercountry").dxTextBox("instance").option("value",rowData.country);
                                                                            $("#EmpCeruniversity").dxTextBox("instance").option("value",rowData.university);
                                                                            $("#EmpCercid").dxTextBox("instance").option("value",rowData.cid);
                                                                            $("#EmpCereid").dxTextBox("instance").option("value",rowData.eid);
                                                                            $("#EmpCercer_no").dxTextBox("instance").option("value",rowData.cer_no);
                                                                            $("#EmpCercerdate").dxTextBox("instance").option("value",rowData.cerdate);
                                                                            $("#EmpCerequivlent_no").dxTextBox("instance").option("value",rowData.equivlent_no);
                                                                            $("#EmpCerequivlent_date").dxTextBox("instance").option("value",rowData.equivlent_date);
                                                                            $("#EmpCergspetailest").dxTextBox("instance").option("value",rowData.gspetailest);
                                                                            $("#EmpCersspetailest").dxTextBox("instance").option("value",rowData.sspetailest);
                                                                            $("#EmpCercyears").dxTextBox("instance").option("value",rowData.cyears);
                                                                            $("#EmpCercertification").dxTextBox("instance").option("value",rowData.certification);
                                                                            $("#EmpCerGuid").dxTextBox("instance").option("value",rowData.Guid);

                                                                            $('#image-container').empty();
                                                                            let images = [];
                                                                            $.each(response.Emp.emp_certification[rowIndex].cer_attachments, function(index, file) {
                                                                                images.push(file['FilePath']);

                                                                                $('#image-container').append(
                                                                                    '<div class="image-preview">' +
                                                                                    '<img src="assets/img/administrationImage/' + file['FilePath'] + '" style="max-width: 400px; margin-right: 15px;">' +
                                                                                    '<a href="assets/img/administrationImage/' + file['FilePath'] + '" target="_blank">عرض النسخة</a>' +
                                                                                    '</div>'
                                                                                );
                                                                            });



                                                                                    var displaycard =
                                                                                        document.getElementById(
                                                                                            "EmpCertificationsaction"
                                                                                        );
                                                                                    if (
                                                                                        displaycard.style
                                                                                            .display == "none"
                                                                                    ) {
                                                                                        document.getElementById(
                                                                                            "card_EmpCertificationstitle"
                                                                                        ).innerText =
                                                                                            rowData.eid;
                                                                                        displaycard.style.display =
                                                                                            "block";
                                                                                        document
                                                                                            .getElementById(
                                                                                                "card_EmpCertificationstitle"
                                                                                            )
                                                                                            .scrollIntoView();
                                                                                    } else {
                                                                                        displaycard.style.display =
                                                                                            "none";
                                                                                        document.getElementById(
                                                                                            "card_EmpCertificationstitle"
                                                                                        ).innerText = "";
                                                                                        displaycard.style.display =
                                                                                            "block";
                                                                                        document.getElementById(
                                                                                            "card_EmpCertificationstitle"
                                                                                        ).innerText =
                                                                                            rowData.eid;
                                                                                        document
                                                                                            .getElementById(
                                                                                                "card_EmpCertificationstitle"
                                                                                            )
                                                                                            .scrollIntoView();
                                                                                    }
                                                                            //     },
                                                                        },
                                                                    });

                                                                    $(container).append(link1);
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
                                                //#endregion

                                                //#region EmpThansk
                                                $(function () {
                                                    const dataGrid = $("#EmpThanksdatagrid").dxDataGrid({
                                                        dataSource: response.Emp.emp_thanks,
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
                                                        columnChooser:{enabled : true},
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
                                                                    var imageUrl = 'assets/img/navbar/icons8_salute_64px.png' ;

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
                                                                dataField: "ttype",
                                                                caption: " النوع",
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
                                                                dataField: "reason",
                                                                caption: "السبب  ",
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
                                                                caption: "رقم الكتاب  ",
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
                                                                caption: "تاريخ الكتاب  ",
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
                                                                dataField: "notes",
                                                                caption: "ملاحظات ",
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
                                                                            EmpCertificationClear();
                                                                            var rowData = options.data;
                                                                            const rowIndex = options.row.rowIndex;
                                                                            let data = {
                                                                                id: rowData.id,
                                                                            };

                                                                            $("#EmpThanksid").dxTextBox("instance").option("value",rowData.id);
                                                                            $("#EmpThanksGuid").dxTextBox("instance").option("value",rowData.Guid);
                                                                            $("#EmpThankseid").dxTextBox("instance").option("value",rowData.eid);
                                                                            $("#EmpCereid").dxTextBox("instance").option("value",rowData.eid);
                                                                            $("#EmpThanksttype").dxTextBox("instance").option("value",rowData.ttype);
                                                                            $("#EmpThanksreason").dxTextBox("instance").option("value",rowData.reason);
                                                                            $("#EmpThanksdocno").dxTextBox("instance").option("value",rowData.docno);
                                                                            $("#EmpThanksdocdate").dxTextBox("instance").option("value",rowData.docdate);
                                                                            $("#EmpThanksnotes").dxTextBox("instance").option("value",rowData.notes);


                                                                            $('#EmpThanksimage-container').empty();
                                                                            let images = [];
                                                                            $.each(response.Emp.emp_thanks[rowIndex].thanks_attachments, function(index, file) {
                                                                                images.push(file['FilePath']);

                                                                                $('#EmpThanksimage-container').append(
                                                                                    '<div class="image-preview">' +
                                                                                    '<img src="assets/img/administrationImage/' + file['FilePath'] + '" style="max-width: 400px; margin-right: 15px;">' +
                                                                                    '<a href="assets/img/administrationImage/' + file['FilePath'] + '" target="_blank">عرض النسخة</a>' +
                                                                                    '</div>'
                                                                                );
                                                                            });



                                                                                    var displaycard =
                                                                                        document.getElementById(
                                                                                            "EmpThanksaction"
                                                                                        );
                                                                                    if (
                                                                                        displaycard.style
                                                                                            .display == "none"
                                                                                    ) {
                                                                                        document.getElementById(
                                                                                            "card_EmpThankstitle"
                                                                                        ).innerText =
                                                                                            rowData.eid;
                                                                                        displaycard.style.display =
                                                                                            "block";
                                                                                        document
                                                                                            .getElementById(
                                                                                                "card_EmpThankstitle"
                                                                                            )
                                                                                            .scrollIntoView();
                                                                                    } else {
                                                                                        displaycard.style.display =
                                                                                            "none";
                                                                                        document.getElementById(
                                                                                            "card_EmpThankstitle"
                                                                                        ).innerText = "";
                                                                                        displaycard.style.display =
                                                                                            "block";
                                                                                        document.getElementById(
                                                                                            "card_EmpThankstitle"
                                                                                        ).innerText =
                                                                                            rowData.eid;
                                                                                        document
                                                                                            .getElementById(
                                                                                                "card_EmpThankstitle"
                                                                                            )
                                                                                            .scrollIntoView();
                                                                                    }
                                                                            //     },
                                                                        },
                                                                    });

                                                                    $(container).append(link1);
                                                                },
                                                            },
                                                        ],
                                                        onContentReady: function (e) {
                                                            // Add custom class to the header panel
                                                            e.element
                                                                .find(".dx-datagrid-headers")
                                                                .addClass("custom-header_Thanks");
                                                        },
                                                    });
                                                });

                                                //#endregion

                                                //#region Emp Varcations
                                                $(function () {
                                                    const dataGrid = $("#EmpVacationsdatagrid").dxDataGrid({
                                                        dataSource: response.Emp.emp_vacations,
                                                        keyExpr: "vcid",
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
                                                        columns: [
                                                            {
                                                                dataField:"vcid",
                                                                caption:"ت",
                                                                visible:false,

                                                            },
                                                            {
                                                                caption: "#",
                                                                width: 100,
                                                                cellTemplate: function (container, options) {
                                                                    var imageUrl = 'assets/img/navbar/icons8_Traveler_64px.png' ;

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
                                                                dataField: "vtid",
                                                                caption: " النوع",
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
                                                                dataField: "vdate",
                                                                caption: "تاريخ الاجازة",
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
                                                                dataField: "nodays",
                                                                caption: "عدد الايام",
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
                                                                caption: " رقم الكتاب",
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
                                                                            EmpVacationsClear();
                                                                            var rowData = options.data;
                                                                            const rowIndex = options.row.rowIndex;
                                                                            let data = {
                                                                                vcid: rowData.vcid,
                                                                            };

                                                                            $("#EmpVacationsvcid").dxTextBox("instance").option("value",rowData.vcid);
                                                                            $("#EmpVacationsGuid").dxTextBox("instance").option("value",rowData.Guid);
                                                                            $("#EmpVacationseid").dxTextBox("instance").option("value",rowData.eid);
                                                                            $("#EmpVacationsvtid").dxTextBox("instance").option("value",rowData.vtid);
                                                                            $("#EmpVacationsvdate").dxTextBox("instance").option("value",rowData.vdate);
                                                                            $("#EmpVacationsdocno").dxTextBox("instance").option("value",rowData.docno);
                                                                            $("#EmpVacationsdocdate").dxTextBox("instance").option("value",rowData.docdate);
                                                                            $("#EmpVacationsnodays").dxTextBox("instance").option("value",rowData.nodays);


                                                                            $('#EmpVacationsimage-container').empty();
                                                                            let images = [];
                                                                            $.each(response.Emp.emp_vacations[rowIndex].vac_attachments, function(index, file) {
                                                                                images.push(file['FilePath']);

                                                                                $('#EmpVacationsimage-container').append(
                                                                                    '<div class="image-preview">' +
                                                                                    '<img src="assets/img/administrationImage/' + file['FilePath'] + '" style="max-width: 400px; margin-right: 15px;">' +
                                                                                    '<a href="assets/img/administrationImage/' + file['FilePath'] + '" target="_blank">عرض النسخة</a>' +
                                                                                    '</div>'
                                                                                );
                                                                            });



                                                                                    var displaycard =
                                                                                        document.getElementById(
                                                                                            "EmpVacationsaction"
                                                                                        );
                                                                                    if (
                                                                                        displaycard.style
                                                                                            .display == "none"
                                                                                    ) {
                                                                                        document.getElementById(
                                                                                            "card_EmpVacationstitle"
                                                                                        ).innerText =
                                                                                            rowData.eid;
                                                                                        displaycard.style.display =
                                                                                            "block";
                                                                                        document
                                                                                            .getElementById(
                                                                                                "card_EmpVacationstitle"
                                                                                            )
                                                                                            .scrollIntoView();
                                                                                    } else {
                                                                                        displaycard.style.display =
                                                                                            "none";
                                                                                        document.getElementById(
                                                                                            "card_EmpVacationstitle"
                                                                                        ).innerText = "";
                                                                                        displaycard.style.display =
                                                                                            "block";
                                                                                        document.getElementById(
                                                                                            "card_EmpVacationstitle"
                                                                                        ).innerText =
                                                                                            rowData.eid;
                                                                                        document
                                                                                            .getElementById(
                                                                                                "card_EmpVacationstitle"
                                                                                            )
                                                                                            .scrollIntoView();
                                                                                    }
                                                                            //     },
                                                                        },
                                                                    });

                                                                    $(container).append(link1);
                                                                },
                                                            },
                                                        ],
                                                        onContentReady: function (e) {
                                                            // Add custom class to the header panel
                                                            e.element
                                                                .find(".dx-datagrid-headers")
                                                                .addClass("custom-header_Thanks");
                                                        },
                                                    });
                                                });
                                                //#endregion

                                                //#region Emp Jobs
                                                $(function () {
                                                    const dataGrid = $("#EmpJobsdatagrid").dxDataGrid({
                                                        dataSource: response.Emp.emp_jobs,
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
                                                        columnChooser:{enabled : true},
                                                        columns: [
                                                            {
                                                                dataField:"vcid",
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
                                                                caption: " العنوان الوظيفي",
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
                                                                caption: "الدرجة",
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
                                                                dataField: "getdate",
                                                                caption: "تاريخ الحصول عليها ",
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
                                                                dataField: "docno",
                                                                caption: " رقم الكتاب",
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
                                                                dataField: "docdate",
                                                                caption: "تاريخ الكتاب",
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
                                                                            EmpVacationsClear();
                                                                            var rowData = options.data;
                                                                            const rowIndex = options.row.rowIndex;
                                                                            let data = {
                                                                                jid: rowData.jid,
                                                                            };

                                                                            $("#EmpJobsjid").dxTextBox("instance").option("value",rowData.jid);
                                                                            $("#EmpJobsGuid").dxTextBox("instance").option("value",rowData.Guid);
                                                                            $("#EmpJobseid").dxTextBox("instance").option("value",rowData.eid);
                                                                            $("#EmpJobsjtitle").dxTextBox("instance").option("value",rowData.jtitle);
                                                                            $("#EmpJobsjdegree").dxTextBox("instance").option("value",rowData.jdegree);
                                                                            $("#EmpJobsdocno").dxTextBox("instance").option("value",rowData.docno);
                                                                            $("#EmpJobsdocdate").dxTextBox("instance").option("value",rowData.docdate);
                                                                            $("#EmpJobsjstage").dxTextBox("instance").option("value",rowData.jstage);
                                                                            $("#EmpJobsgetdate").dxTextBox("instance").option("value",rowData.getdate);


                                                                            $('#EmpJobsimage-container').empty();
                                                                            let images = [];
                                                                            $.each(response.Emp.emp_jobs[rowIndex].jobs_attachments, function(index, file) {
                                                                                images.push(file['FilePath']);

                                                                                $('#EmpJobsimage-container').append(
                                                                                    '<div class="image-preview">' +
                                                                                    '<img src="assets/img/administrationImage/' + file['FilePath'] + '" style="max-width: 400px; margin-right: 15px;">' +
                                                                                    '<a href="assets/img/administrationImage/' + file['FilePath'] + '" target="_blank">عرض النسخة</a>' +
                                                                                    '</div>'
                                                                                );
                                                                            });



                                                                                    var displaycard =
                                                                                        document.getElementById(
                                                                                            "EmpJobsaction"
                                                                                        );
                                                                                    if (
                                                                                        displaycard.style
                                                                                            .display == "none"
                                                                                    ) {
                                                                                        document.getElementById(
                                                                                            "card_EmpJobstitle"
                                                                                        ).innerText =
                                                                                            rowData.eid;
                                                                                        displaycard.style.display =
                                                                                            "block";
                                                                                        document
                                                                                            .getElementById(
                                                                                                "card_EmpJobstitle"
                                                                                            )
                                                                                            .scrollIntoView();
                                                                                    } else {
                                                                                        displaycard.style.display =
                                                                                            "none";
                                                                                        document.getElementById(
                                                                                            "card_EmpJobstitle"
                                                                                        ).innerText = "";
                                                                                        displaycard.style.display =
                                                                                            "block";
                                                                                        document.getElementById(
                                                                                            "card_EmpJobstitle"
                                                                                        ).innerText =
                                                                                            rowData.eid;
                                                                                        document
                                                                                            .getElementById(
                                                                                                "card_EmpJobstitle"
                                                                                            )
                                                                                            .scrollIntoView();
                                                                                    }
                                                                            //     },
                                                                        },
                                                                    });

                                                                    $(container).append(link1);
                                                                },
                                                            },
                                                        ],
                                                        onContentReady: function (e) {
                                                            // Add custom class to the header panel
                                                            e.element
                                                                .find(".dx-datagrid-headers")
                                                                .addClass("custom-header_Thanks");
                                                        },
                                                    });
                                                });

                                                //#endregion

                                                //#region Emp Positions
                                                $(function () {
                                                    const dataGrid = $("#EmpPositionsdatagrid").dxDataGrid({
                                                        dataSource: response.Emp.emp_positions,
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
                                                        columnChooser:{enabled : true},
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
                                                                    var imageUrl = 'assets/img/navbar/icons8_project_manager_64px.png' ;

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
                                                                dataField: "ptypeid",
                                                                caption: " المنصب",
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
                                                                dataField: "pname",
                                                                caption: " الموقع",
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
                                                                caption: " رقم الكتاب",
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
                                                                caption: " تاريخ الكتاب",
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
                                                                dataField: "datefrom",
                                                                caption: "من تاريخ  ",
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
                                                                dataField: "dateto",
                                                                caption: "الى تاريخ  ",
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
                                                                            EmpPositionsClear();
                                                                            var rowData = options.data;
                                                                            const rowIndex = options.row.rowIndex;
                                                                            let data = {
                                                                                id: rowData.id,
                                                                            };

                                                                            $("#EmpPositionsid").dxTextBox("instance").option("value",rowData.id);
                                                                            $("#EmpPositionsGuid").dxTextBox("instance").option("value",rowData.Guid);
                                                                            $("#EmpPositionseid").dxTextBox("instance").option("value",rowData.eid);
                                                                            $("#EmpPositionsptypeid").dxTextBox("instance").option("value",rowData.ptypeid);
                                                                            $("#EmpPositionspname").dxTextBox("instance").option("value",rowData.deptname);
                                                                            $("#EmpPositionsdocno").dxTextBox("instance").option("value",rowData.docno);
                                                                            $("#EmpPositionsdocdate").dxTextBox("instance").option("value",rowData.docdate);
                                                                            $("#EmpPositionsdatefrom").dxTextBox("instance").option("value",rowData.datefrom);
                                                                            $("#EmpPositionsdateto").dxTextBox("instance").option("value",rowData.dateto);


                                                                            $('#EmpPositionsimage-container').empty();
                                                                            let images = [];
                                                                            $.each(response.Emp.emp_positions[rowIndex].positions_attachments, function(index, file) {
                                                                                images.push(file['FilePath']);

                                                                                $('#EmpPositionsimage-container').append(
                                                                                    '<div class="image-preview">' +
                                                                                    '<img src="assets/img/administrationImage/' + file['FilePath'] + '" style="max-width: 400px; margin-right: 15px;">' +
                                                                                    '<a href="assets/img/administrationImage/' + file['FilePath'] + '" target="_blank">عرض النسخة</a>' +
                                                                                    '</div>'
                                                                                );
                                                                            });



                                                                                    var displaycard =
                                                                                        document.getElementById(
                                                                                            "EmpPositionsaction"
                                                                                        );
                                                                                    if (
                                                                                        displaycard.style
                                                                                            .display == "none"
                                                                                    ) {
                                                                                        document.getElementById(
                                                                                            "card_EmpPositionstitle"
                                                                                        ).innerText =
                                                                                            rowData.eid;
                                                                                        displaycard.style.display =
                                                                                            "block";
                                                                                        document
                                                                                            .getElementById(
                                                                                                "card_EmpPositionstitle"
                                                                                            )
                                                                                            .scrollIntoView();
                                                                                    } else {
                                                                                        displaycard.style.display =
                                                                                            "none";
                                                                                        document.getElementById(
                                                                                            "card_EmpPositionstitle"
                                                                                        ).innerText = "";
                                                                                        displaycard.style.display =
                                                                                            "block";
                                                                                        document.getElementById(
                                                                                            "card_EmpPositionstitle"
                                                                                        ).innerText =
                                                                                            rowData.eid;
                                                                                        document
                                                                                            .getElementById(
                                                                                                "card_EmpPositionstitle"
                                                                                            )
                                                                                            .scrollIntoView();
                                                                                    }
                                                                            //     },
                                                                        },
                                                                    });

                                                                    $(container).append(link1);
                                                                },
                                                            },
                                                        ],
                                                        onContentReady: function (e) {
                                                            // Add custom class to the header panel
                                                            e.element
                                                                .find(".dx-datagrid-headers")
                                                                .addClass("custom-header_Thanks");
                                                        },
                                                    });
                                                });

                                                //#endregion

                                                //#region Emp Supervisors
                                                $(function () {
                                                    const dataGrid = $("#EmpSupervisorsdatagrid").dxDataGrid({
                                                        dataSource: response.Emp.emp_supervisors,
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
                                                        columnChooser:{enabled : true},
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
                                                                            EmpPositionsClear();
                                                                            var rowData = options.data;
                                                                            const rowIndex = options.row.rowIndex;
                                                                            let data = {
                                                                                id: rowData.id,
                                                                            };

                                                                            $("#EmpSupervisorsid").dxTextBox("instance").option("value",rowData.id);
                                                                            $("#EmpSupervisorsGuid").dxTextBox("instance").option("value",rowData.Guid);
                                                                            $("#EmpSupervisorseid").dxTextBox("instance").option("value",rowData.eid);
                                                                            $("#EmpSupervisorssdeg").dxTextBox("instance").option("value",rowData.sdeg);
                                                                            $("#EmpSupervisorssname").dxTextBox("instance").option("value",rowData.sname);
                                                                            $("#EmpSupervisorsdocno").dxTextBox("instance").option("value",rowData.docno);
                                                                            $("#EmpSupervisorsdocdate").dxTextBox("instance").option("value",rowData.docdate);


                                                                            $('#EmpSupervisorsimage-container').empty();
                                                                            let images = [];
                                                                            $.each(response.Emp.emp_supervisors[rowIndex].supervisors_attachments, function(index, file) {
                                                                                images.push(file['FilePath']);

                                                                                $('#EmpSupervisorsimage-container').append(
                                                                                    '<div class="image-preview">' +
                                                                                    '<img src="assets/img/administrationImage/' + file['FilePath'] + '" style="max-width: 400px; margin-right: 15px;">' +
                                                                                    '<a href="assets/img/administrationImage/' + file['FilePath'] + '" target="_blank">عرض النسخة</a>' +
                                                                                    '</div>'
                                                                                );
                                                                            });



                                                                                    var displaycard =
                                                                                        document.getElementById(
                                                                                            "EmpSupervisorsaction"
                                                                                        );
                                                                                    if (
                                                                                        displaycard.style
                                                                                            .display == "none"
                                                                                    ) {
                                                                                        document.getElementById(
                                                                                            "card_EmpSupervisorstitle"
                                                                                        ).innerText =
                                                                                            rowData.eid;
                                                                                        displaycard.style.display =
                                                                                            "block";
                                                                                        document
                                                                                            .getElementById(
                                                                                                "card_EmpSupervisorstitle"
                                                                                            )
                                                                                            .scrollIntoView();
                                                                                    } else {
                                                                                        displaycard.style.display =
                                                                                            "none";
                                                                                        document.getElementById(
                                                                                            "card_EmpSupervisorstitle"
                                                                                        ).innerText = "";
                                                                                        displaycard.style.display =
                                                                                            "block";
                                                                                        document.getElementById(
                                                                                            "card_EmpSupervisorstitle"
                                                                                        ).innerText =
                                                                                            rowData.eid;
                                                                                        document
                                                                                            .getElementById(
                                                                                                "card_EmpSupervisorstitle"
                                                                                            )
                                                                                            .scrollIntoView();
                                                                                    }
                                                                            //     },
                                                                        },
                                                                    });

                                                                    $(container).append(link1);
                                                                },
                                                            },
                                                        ],
                                                        onContentReady: function (e) {
                                                            // Add custom class to the header panel
                                                            e.element
                                                                .find(".dx-datagrid-headers")
                                                                .addClass("custom-header_Thanks");
                                                        },
                                                    });
                                                });


                                                //#endregion

                                                //#region Emp Articles
                                                $(function () {
                                                    const dataGrid = $("#EmpArticlesdatagrid").dxDataGrid({
                                                        dataSource: response.Emp.emp_articles,
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
                                                        columnChooser:{enabled : true},
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
                                                                        onClick() {
                                                                            EmpPositionsClear();
                                                                            var rowData = options.data;
                                                                            const rowIndex = options.row.rowIndex;
                                                                            let data = {
                                                                                id: rowData.id,
                                                                            };

                                                                            $("#EmpArticlesid").dxTextBox("instance").option("value",rowData.id);
                                                                            $("#EmpArticlesGuid").dxTextBox("instance").option("value",rowData.Guid);
                                                                            $("#EmpArticlesdid").dxTextBox("instance").option("value",rowData.did);
                                                                            $("#EmpArticlesarticle_title").dxTextBox("instance").option("value",rowData.article_title);
                                                                            $("#EmpArticlesnof_aut").dxTextBox("instance").option("value",rowData.nof_aut);
                                                                            $("#EmpArticlespub_date").dxTextBox("instance").option("value",rowData.pub_date);
                                                                            $("#EmpArticlesAlink").dxTextBox("instance").option("value",rowData.Alink);

                                                                            $('#EmpArticlesimage-container').empty();
                                                                            let images = [];
                                                                            $.each(response.Emp.emp_articles[rowIndex].articles_attachments, function(index, file) {
                                                                                images.push(file['FilePath']);

                                                                                $('#EmpArticlesimage-container').append(
                                                                                    '<div class="image-preview">' +
                                                                                    '<img src="assets/img/administrationImage/' + file['FilePath'] + '" style="max-width: 400px; margin-right: 15px;">' +
                                                                                    '<a href="assets/img/administrationImage/' + file['FilePath'] + '" target="_blank">عرض النسخة</a>' +
                                                                                    '</div>'
                                                                                );
                                                                            });



                                                                                    var displaycard =
                                                                                        document.getElementById(
                                                                                            "EmpArticlesaction"
                                                                                        );
                                                                                    if (
                                                                                        displaycard.style
                                                                                            .display == "none"
                                                                                    ) {
                                                                                        document.getElementById(
                                                                                            "card_EmpArticlestitle"
                                                                                        ).innerText =
                                                                                            rowData.did;
                                                                                        displaycard.style.display =
                                                                                            "block";
                                                                                        document
                                                                                            .getElementById(
                                                                                                "card_EmpArticlestitle"
                                                                                            )
                                                                                            .scrollIntoView();
                                                                                    } else {
                                                                                        displaycard.style.display =
                                                                                            "none";
                                                                                        document.getElementById(
                                                                                            "card_EmpArticlestitle"
                                                                                        ).innerText = "";
                                                                                        displaycard.style.display =
                                                                                            "block";
                                                                                        document.getElementById(
                                                                                            "card_EmpArticlestitle"
                                                                                        ).innerText =
                                                                                            rowData.did;
                                                                                        document
                                                                                            .getElementById(
                                                                                                "card_EmpArticlestitle"
                                                                                            )
                                                                                            .scrollIntoView();
                                                                                    }
                                                                            //     },
                                                                        },
                                                                    });

                                                                    $(container).append(link1);
                                                                },
                                                            },
                                                        ],
                                                        onContentReady: function (e) {
                                                            // Add custom class to the header panel
                                                            e.element
                                                                .find(".dx-datagrid-headers")
                                                                .addClass("custom-header_Thanks");
                                                        },
                                                    });
                                                });
                                                //#endregion

                                                //#region Emp Family...
                                                $(function () {
                                                    const dataGrid = $("#EmpChildrendatagrid").dxDataGrid({
                                                        dataSource: response.Emp.emp_children,
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
                                                        columnChooser:{enabled : true},
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
                                                                    var imageUrl = 'assets/img/navbar/icons8_children_64px.png' ;

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
                                                                caption: " اسم الموظف",
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
                                                                // groupIndex: 0,
                                                            },
                                                            {
                                                                dataField: "chname",
                                                                caption: " الاسم",
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
                                                                dataField: "chsex",
                                                                caption: "الجنس",
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
                                                                dataField: "csid",
                                                                caption: "المهنة",
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
                                                                dataField: "chdob",
                                                                caption: " تاريخ الولادة",
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
                                                                            EmpChildrenClear();
                                                                            var rowData = options.data;
                                                                            const rowIndex = options.row.rowIndex;
                                                                            let data = {
                                                                                id: rowData.id,
                                                                            };

                                                                            $("#EmpChildrenid").dxTextBox("instance").option("value",rowData.id);
                                                                            $("#EmpChildrenGuid").dxTextBox("instance").option("value",rowData.Guid);
                                                                            $("#EmpChildreneid").dxTextBox("instance").option("value",rowData.eid);
                                                                            $("#EmpChildrenchname").dxTextBox("instance").option("value",rowData.chname);
                                                                            $("#EmpChildrenchsex").dxTextBox("instance").option("value",rowData.chsex);
                                                                            $("#EmpChildrenchdob").dxTextBox("instance").option("value",rowData.chdob);
                                                                            $("#EmpChildrencsid").dxTextBox("instance").option("value",rowData.csid);

                                                                            $('#EmpChildrenimage-container').empty();
                                                                            let images = [];
                                                                            $.each(response.Emp.emp_children[rowIndex].children_attachments, function(index, file) {
                                                                                images.push(file['FilePath']);

                                                                                $('#EmpChildrenimage-container').append(
                                                                                    '<div class="image-preview">' +
                                                                                    '<img src="assets/img/administrationImage/' + file['FilePath'] + '" style="max-width: 400px; margin-right: 15px;">' +
                                                                                    '<a href="assets/img/administrationImage/' + file['FilePath'] + '" target="_blank">عرض النسخة</a>' +
                                                                                    '</div>'
                                                                                );
                                                                            });



                                                                                    var displaycard =
                                                                                        document.getElementById(
                                                                                            "EmpChildrenaction"
                                                                                        );
                                                                                    if (
                                                                                        displaycard.style
                                                                                            .display == "none"
                                                                                    ) {
                                                                                        document.getElementById(
                                                                                            "card_EmpChildrentitle"
                                                                                        ).innerText =
                                                                                            rowData.eid;
                                                                                        displaycard.style.display =
                                                                                            "block";
                                                                                        document
                                                                                            .getElementById(
                                                                                                "card_EmpChildrentitle"
                                                                                            )
                                                                                            .scrollIntoView();
                                                                                    } else {
                                                                                        displaycard.style.display =
                                                                                            "none";
                                                                                        document.getElementById(
                                                                                            "card_EmpChildrentitle"
                                                                                        ).innerText = "";
                                                                                        displaycard.style.display =
                                                                                            "block";
                                                                                        document.getElementById(
                                                                                            "card_EmpChildrentitle"
                                                                                        ).innerText =
                                                                                            rowData.eid;
                                                                                        document
                                                                                            .getElementById(
                                                                                                "card_EmpChildrentitle"
                                                                                            )
                                                                                            .scrollIntoView();
                                                                                    }
                                                                            //     },
                                                                        },
                                                                    });

                                                                    $(container).append(link1);
                                                                },
                                                            },
                                                        ],
                                                        onContentReady: function (e) {
                                                            // Add custom class to the header panel
                                                            e.element
                                                                .find(".dx-datagrid-headers")
                                                                .addClass("custom-header_Thanks");
                                                        },
                                                    });
                                                });

                                                //#endregion

                                                //#region Emp Acitivity
                                                $(function () {
                                                    const dataGrid = $("#EmpActivitydatagrid").dxDataGrid({
                                                        dataSource: response.EmpActivity,
                                                        keyExpr: "eaid",
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
                                                        columns: [
                                                            {
                                                                dataField:"eaid",
                                                                caption:"ت",
                                                                visible:false,

                                                            },
                                                            {
                                                                caption: "#",
                                                                width: 100,
                                                                cellTemplate: function (container, options) {
                                                                    var imageUrl = 'assets/img/navbar/icons8_crowd_64px.png' ;

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
                                                                dataField: "atype",
                                                                caption: "الحالة",

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
                                                                dataField: "Type",
                                                                caption: "النوع",

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
                                                                dataField: "Name",
                                                                caption: "العنوان",

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
                                                                dataField: "Place",
                                                                caption: "المكان",

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
                                                                dataField: "NoDays",
                                                                caption: "عدد الايام",

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
                                                                dataField: "Participants",
                                                                caption: "المشاركين",

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

                                                        ],
                                                        onContentReady: function (e) {
                                                            // Add custom class to the header panel
                                                            e.element
                                                                .find(".dx-datagrid-headers")
                                                                .addClass("custom-header_EmpActivity");
                                                        },
                                                    });
                                                });

                                                //#endregion

                                                //#region Emp Comity
                                                $(function () {
                                                    const dataGrid = $("#EmpComitydatagrid").dxDataGrid({
                                                        dataSource: response.EmpComity,
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
                                                        columnChooser:{enabled : true},
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
                                                                    var imageUrl = 'assets/img/navbar/icons8_crowd_64px.png' ;

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
                                                                caption: "اللجنة",

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
                                                                // groupIndex: 0,
                                                            },
                                                            {
                                                                dataField: "docdate",
                                                                caption: "تاريخ الكتاب",

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
                                                                dataField: "notes",
                                                                caption: "ملاحظات",
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
                                                                // groupIndex: 0,
                                                            },

                                                        ],
                                                        onContentReady: function (e) {
                                                            // Add custom class to the header panel
                                                            e.element
                                                                .find(".dx-datagrid-headers")
                                                                .addClass("custom-header_EmpComity");
                                                        },
                                                    });
                                                });

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

function Employee_Permissions(){
    $.ajax({
        type: "GET",
        url: "dashboardmainPermissions/Permissions",
        success: function (response) {
            // console.log(response);
            let OptionAdd = response.Permission.filter(function (item){
                return item.FormName === 'الموظفين';
            })

            $("#btnNewAddEmp").dxButton("instance").option("disabled", !OptionAdd[0]['OptionAdd']);
            let OptionEdit = response.Permission.filter(function (item){
                return item.FormName === 'الموظفين';
            })

            $("#btnSaveEmp").dxButton("instance").option("disabled", !OptionEdit[0]['OptionEdit']);
       }
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
        $("#empno").dxTextBox({
            placeholder: "",
            inputAttr: { style:"font-size:13px", },
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
                                '<img src="' + e.target.result + '" style="max-width: 400px; margin-right: 15px;">' +
                                '</div>'
                            );
                            $('#EmpImageDelete').append(
                                '<div class="image-preview">' +
                                '<button class="delete-imageEmp btn-danger"> <i class="fa fa-trash"> حذف</button>' +
                                '</div>'
                            );

                        }
                        reader.readAsDataURL(file);
                    });
                }
            }
        });

        // Delete Image
        $('#EmpImageDelete').on('click', '.delete-imageEmp', function() {
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

function EmpCertificationComponent(){
    $(() =>{
        $("#Empdanger-contained").dxButton({
            stylingMode: "contained",
            text: "اغلاق",
            type: "danger",
            icon: "close",
            width: 120,
            onClick() {
                var displaycard = document.getElementById("EmpCertificationsaction");
                if (displaycard.style.display == "block") {
                    document.getElementById("card_EmpCertificationstitle").innerText = "";
                    EmpCertificationClear();
                    displaycard.style.display = "none";
                    document.getElementById("EmpCertification").scrollIntoView();
                }
            },
        });
    })
    $(() => {
        $("#EmpCercid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpCereid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpCerGuid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpCeruniversity").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpCergspetailest").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpCercerdate").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpCercertification").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpCercountry").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpCersspetailest").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpCerequivlent_no").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpCercollege").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpCercyears").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpCercer_no").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpCerequivlent_date").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
}
function EmpCertificationClear(){
    $("#EmpCercountry").dxTextBox("instance").option("value","");
    $("#EmpCeruniversity").dxTextBox("instance").option("value","");
    $("#EmpCercid").dxTextBox("instance").option("value","");
    $("#EmpCereid").dxTextBox("instance").option("value","");
    $("#EmpCercer_no").dxTextBox("instance").option("value","");
    $("#EmpCercerdate").dxTextBox("instance").option("value","");
    $("#EmpCerequivlent_no").dxTextBox("instance").option("value","");
    $("#EmpCerequivlent_date").dxTextBox("instance").option("value","");
    $("#EmpCergspetailest").dxTextBox("instance").option("value","");
    $("#EmpCersspetailest").dxTextBox("instance").option("value","");
    $("#EmpCercyears").dxTextBox("instance").option("value","");
    $("#EmpCercertification").dxTextBox("instance").option("value","");
    $("#EmpCerGuid").dxTextBox("instance").option("value","");

}

function EmpComityComponent(){
    $(() =>{
        $("#EmpComitydanger-contained").dxButton({
            stylingMode: "contained",
            text: "اغلاق",
            type: "danger",
            icon: "close",
            width: 120,
            onClick() {
                var displaycard = document.getElementById("EmpComityaction");
                if (displaycard.style.display == "block") {
                    document.getElementById("card_EmpComitytitle").innerText = "";
                    EmpComityClear();
                    displaycard.style.display = "none";
                    document.getElementById("EmpComity").scrollIntoView();
                }
            },
        });
    })
    $(() => {
        $("#EmpComityid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpComityGuid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpComityctype").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpComitydocno").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpComitydocdate").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpComitynotes").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
}
function EmpComityClear(){
    $("#EmpComityid").dxTextBox("instance").option("value","");
    $("#EmpComityGuid").dxTextBox("instance").option("value","");
    $("#EmpComityctype").dxTextBox("instance").option("value","");
    $("#EmpComitydocno").dxTextBox("instance").option("value","");
    $("#EmpComitydocdate").dxTextBox("instance").option("value","");
    $("#EmpComitynotes").dxTextBox("instance").option("value","");

}
function EmpThanksComponent(){
    $(() =>{
        $("#EmpThanskdanger-contained").dxButton({
            stylingMode: "contained",
            text: "اغلاق",
            type: "danger",
            icon: "close",
            width: 120,
            onClick() {
                var displaycard = document.getElementById("EmpThanksaction");
                if (displaycard.style.display == "block") {
                    document.getElementById("card_EmpThankstitle").innerText = "";
                    EmpThanksClear();
                    displaycard.style.display = "none";
                    document.getElementById("EmpThanks").scrollIntoView();
                }
            },
        });
    })
    $(() => {
        $("#EmpThanksid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpThanksGuid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpThankseid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpThanksdocno").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpThanksdocdate").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpThanksnotes").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpThanksttype").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpThanksreason").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
}
function EmpThanksClear(){
    $("#EmpThanksid").dxTextBox("instance").option("value","");
    $("#EmpThanksGuid").dxTextBox("instance").option("value","");
    $("#EmpThankseid").dxTextBox("instance").option("value","");
    $("#EmpThanksttype").dxTextBox("instance").option("value","");
    $("#EmpThanksreason").dxTextBox("instance").option("value","");
    $("#EmpThanksdocno").dxTextBox("instance").option("value","");
    $("#EmpThanksdocdate").dxTextBox("instance").option("value","");
    $("#EmpThanksnotes").dxTextBox("instance").option("value","");

}

function EmpVacationsComponent(){
    $(() =>{
        $("#EmpVacationsdanger-contained").dxButton({
            stylingMode: "contained",
            text: "اغلاق",
            type: "danger",
            icon: "close",
            width: 120,
            onClick() {
                var displaycard = document.getElementById("EmpVacationsaction");
                if (displaycard.style.display == "block") {
                    document.getElementById("card_EmpVacationstitle").innerText = "";
                    EmpVacationsClear();
                    displaycard.style.display = "none";
                    document.getElementById("EmpVacations").scrollIntoView();
                }
            },
        });
    })
    $(() => {
        $("#EmpVacationsvcid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpVacationsGuid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpVacationseid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpVacationsvtid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpVacationsvdate").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpVacationsnodays").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpVacationsdocno").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpVacationsdocdate").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
}
function EmpVacationsClear(){
    $("#EmpVacationsvcid").dxTextBox("instance").option("value","");
    $("#EmpVacationsGuid").dxTextBox("instance").option("value","");
    $("#EmpVacationseid").dxTextBox("instance").option("value","");
    $("#EmpVacationsvtid").dxTextBox("instance").option("value","");
    $("#EmpVacationsvdate").dxTextBox("instance").option("value","");
    $("#EmpVacationsdocno").dxTextBox("instance").option("value","");
    $("#EmpVacationsdocdate").dxTextBox("instance").option("value","");
    $("#EmpVacationsnodays").dxTextBox("instance").option("value","");

}
function EmpJobsComponent(){
    $(() =>{
        $("#EmpJobsdanger-contained").dxButton({
            stylingMode: "contained",
            text: "اغلاق",
            type: "danger",
            icon: "close",
            width: 120,
            onClick() {
                var displaycard = document.getElementById("EmpJobsaction");
                if (displaycard.style.display == "block") {
                    document.getElementById("card_EmpJobstitle").innerText = "";
                    EmpJobsClear();
                    displaycard.style.display = "none";
                    document.getElementById("EmpJobs").scrollIntoView();
                }
            },
        });
    })
    $(() => {
        $("#EmpJobsjid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpJobsGuid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpJobseid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpJobsjtitle").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpJobsjdegree").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpJobsjstage").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpJobsdocno").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpJobsdocdate").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpJobsgetdate").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
}
function EmpJobsClear(){
    $("#EmpJobsjid").dxTextBox("instance").option("value","");
    $("#EmpJobsGuid").dxTextBox("instance").option("value","");
    $("#EmpJobseid").dxTextBox("instance").option("value","");
    $("#EmpJobsjtitle").dxTextBox("instance").option("value","");
    $("#EmpJobsjdegree").dxTextBox("instance").option("value","");
    $("#EmpJobsdocno").dxTextBox("instance").option("value","");
    $("#EmpJobsdocdate").dxTextBox("instance").option("value","");
    $("#EmpJobsjstage").dxTextBox("instance").option("value","");
    $("#EmpJobsgetdate").dxTextBox("instance").option("value","");

}

function EmpPositionsComponent(){
    $(() =>{
        $("#EmpPositionsdanger-contained").dxButton({
            stylingMode: "contained",
            text: "اغلاق",
            type: "danger",
            icon: "close",
            width: 120,
            onClick() {
                var displaycard = document.getElementById("EmpPositionsaction");
                if (displaycard.style.display == "block") {
                    document.getElementById("card_EmpPositionstitle").innerText = "";
                    EmpPositionsClear();
                    displaycard.style.display = "none";
                    document.getElementById("EmpPositions").scrollIntoView();
                }
            },
        });
    })
    $(() => {
        $("#EmpPositionsid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpPositionsGuid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpPositionseid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpPositionsptypeid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpPositionspname").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpPositionsdatefrom").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpPositionsdocno").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpPositionsdocdate").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpPositionsdateto").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
}
function EmpPositionsClear(){
    $("#EmpPositionsid").dxTextBox("instance").option("value","");
    $("#EmpPositionsGuid").dxTextBox("instance").option("value","");
    $("#EmpPositionseid").dxTextBox("instance").option("value","");
    $("#EmpPositionsptypeid").dxTextBox("instance").option("value","");
    $("#EmpPositionspname").dxTextBox("instance").option("value","");
    $("#EmpPositionsdocno").dxTextBox("instance").option("value","");
    $("#EmpPositionsdocdate").dxTextBox("instance").option("value","");
    $("#EmpPositionsdatefrom").dxTextBox("instance").option("value","");
    $("#EmpPositionsdateto").dxTextBox("instance").option("value","");

}

function EmpSupervisorsComponent(){
    $(() =>{
        $("#EmpSupervisorsdanger-contained").dxButton({
            stylingMode: "contained",
            text: "اغلاق",
            type: "danger",
            icon: "close",
            width: 120,
            onClick() {
                var displaycard = document.getElementById("EmpSupervisorsaction");
                if (displaycard.style.display == "block") {
                    document.getElementById("card_EmpSupervisorstitle").innerText = "";
                    EmpSupervisorsClear();
                    displaycard.style.display = "none";
                    document.getElementById("EmpSupervisors").scrollIntoView();
                }
            },
        });
    })
    $(() => {
        $("#EmpSupervisorsid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpSupervisorsGuid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpSupervisorseid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpSupervisorssdeg").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpSupervisorssname").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpSupervisorsdocno").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpSupervisorsdocdate").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });

}
function EmpSupervisorsClear(){
    $("#EmpSupervisorsid").dxTextBox("instance").option("value","");
    $("#EmpSupervisorsGuid").dxTextBox("instance").option("value","");
    $("#EmpSupervisorseid").dxTextBox("instance").option("value","");
    $("#EmpSupervisorssdeg").dxTextBox("instance").option("value","");
    $("#EmpSupervisorssname").dxTextBox("instance").option("value","");
    $("#EmpSupervisorsdocno").dxTextBox("instance").option("value","");
    $("#EmpSupervisorsdocdate").dxTextBox("instance").option("value","");

}

function EmpArticlesComponent(){
    $(() =>{
        $("#EmpArticlesdanger-contained").dxButton({
            stylingMode: "contained",
            text: "اغلاق",
            type: "danger",
            icon: "close",
            width: 120,
            onClick() {
                var displaycard = document.getElementById("EmpArticlesaction");
                if (displaycard.style.display == "block") {
                    document.getElementById("card_EmpArticlestitle").innerText = "";
                    EmpArticlesClear();
                    displaycard.style.display = "none";
                    document.getElementById("EmpArticles").scrollIntoView();
                }
            },
        });
    })
    $(() => {
        $("#EmpArticlesid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpArticlesGuid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpArticlesdid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpArticlesarticle_title").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpArticlesnof_aut").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpArticlespub_date").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpArticlesAlink").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });

}
function EmpArticlesClear(){
    $("#EmpArticlesid").dxTextBox("instance").option("value","");
    $("#EmpArticlesGuid").dxTextBox("instance").option("value","");
    $("#EmpArticlesdid").dxTextBox("instance").option("value","");
    $("#EmpArticlesarticle_title").dxTextBox("instance").option("value","");
    $("#EmpArticlesnof_aut").dxTextBox("instance").option("value","");
    $("#EmpArticlespub_date").dxTextBox("instance").option("value","");
    $("#EmpArticlesAlink").dxTextBox("instance").option("value","");

}

function EmpChildrenComponent(){
    $(() =>{
        $("#EmpChildrendanger-contained").dxButton({
            stylingMode: "contained",
            text: "اغلاق",
            type: "danger",
            icon: "close",
            width: 120,
            onClick() {
                var displaycard = document.getElementById("EmpChildrenaction");
                if (displaycard.style.display == "block") {
                    document.getElementById("card_EmpChildrentitle").innerText = "";
                    EmpChildrenClear();
                    displaycard.style.display = "none";
                    document.getElementById("EmpChildren").scrollIntoView();
                }
            },
        });
    })
    $(() => {
        $("#EmpChildrenid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpChildrenGuid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpChildreneid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpChildrenchname").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpChildrenchsex").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpChildrenchdob").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#EmpChildrencsid").dxTextBox({
            placeholder: " ",
            inputAttr: { style:"font-size:13px", },
        });
    });

}
function EmpChildrenClear(){
    $("#EmpChildrenid").dxTextBox("instance").option("value","");
    $("#EmpChildrenGuid").dxTextBox("instance").option("value","");
    $("#EmpChildreneid").dxTextBox("instance").option("value","");
    $("#EmpChildrenchname").dxTextBox("instance").option("value","");
    $("#EmpChildrenchsex").dxTextBox("instance").option("value","");
    $("#EmpChildrenchdob").dxTextBox("instance").option("value","");
    $("#EmpChildrencsid").dxTextBox("instance").option("value","");

}
