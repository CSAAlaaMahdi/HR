Activity_fetch();
Activity_filldata();

function Activity_cleardata() {
    $("#aid").dxTextBox("instance").option("value", "");
    $("#act_id").dxSelectBox("instance").option("value", "");
    $("#Aname").dxTextBox("instance").option("value", "");
    $("#Place").dxTextBox("instance").option("value", "");
    $("#ActDate").dxDateBox("instance").option("value", "");
    $("#Participants").dxTextBox("instance").option("value", "");
    $("#NoDays").dxTextBox("instance").option("value", "");

}

function Activity_chechdata() {
    if ($.trim($("#act_id").dxSelectBox("instance").option('value')).length == 0) {
        error_act_id = " مطلوب ";
        $("#error_act_id").text(error_act_id);
    } else {
        error_act_id = "";
        $("#error_act_id").text(error_act_id);
    }

}

function Activity_UpdateOrCreate() {
    var url = "activity";
    var selectedDate = $("#ActDate").dxDateBox("instance").option("value");
    var ActDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
    }).format(selectedDate);
    var data = {
        aid: $("#aid").dxTextBox("instance").option("value"),
        act_id: $("#act_id").dxSelectBox("instance").option("value"),
        Aname: $("#Aname").dxTextBox("instance").option("value"),
        Place: $("#Place").dxTextBox("instance").option("value"),
        NoDays: $("#NoDays").dxTextBox("instance").option("value"),
        Participants: $("#Participants").dxTextBox("instance").option("value"),
        Notes: $("#Notes").dxTextArea("instance").option("value"),
        ActDate: ActDate,


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
            Activity_cleardata();
            Activity_fetch();
        },
    });
}

function Activity_fetch() {
    $(document).ready(function () {
        var url = "activity/";
        $.ajax({
            type: "GET",
            url: url + "create",
            success: function (response) {
                $(function () {
                    const dataGrid = $("#Activitydatagrid").dxDataGrid({
                        dataSource: response.getActivity,
                        keyExpr: "aid",
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
                                dataField:"aid",
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
                                dataField: "act_id",
                                caption: " اسم النشاط",
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
                                dataField: "Aname",
                                caption: " العنوان",
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
                                dataField: "Place",
                                caption: " مكان الانعقاد",
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
                                dataField: "ActDate",
                                caption: " تاريخه ",
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
                                dataField: "NoDays",
                                caption: " عدد الايام ",
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
                                caption: "نسخة مصورة ",
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
                                                aid: rowData.aid,
                                            };
                                            $.ajax({
                                                type: "GET",
                                                url: "activity/show",
                                                data: data,
                                                success: function (response) {
                                                    $("#aid")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.aid,
                                                        });
                                                    $("#act_id")
                                                        .dxSelectBox("instance")
                                                        .option({
                                                            value: response.act_id,
                                                        });
                                                    $("#Aname")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value: response.Aname,
                                                        });

                                                    $("#Place")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.Place
                                                        });
                                                        $("#ActDate")
                                                        .dxDateBox("instance")
                                                        .option({
                                                            value:new Date(response.ActDate)
                                                        });
                                                        $("#NoDays")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.NoDays
                                                        });
                                                        $("#Participants")
                                                        .dxTextBox("instance")
                                                        .option({
                                                            value:response.Participants
                                                        });
                                                        $("#Notes")
                                                        .dxTextArea("instance")
                                                        .option({
                                                            value:response.Notes
                                                        });

                                                    var displaycard =
                                                        document.getElementById(
                                                            "Activityaction"
                                                        );
                                                    if (
                                                        displaycard.style
                                                            .display == "none"
                                                    ) {
                                                        document.getElementById(
                                                            "card_Activitytitle"
                                                        ).innerText =
                                                            "تعديل البيانات";
                                                        displaycard.style.display =
                                                            "block";
                                                        document
                                                            .getElementById(
                                                                "card_Activitytitle"
                                                            )
                                                            .scrollIntoView();
                                                    } else {
                                                        displaycard.style.display =
                                                            "none";
                                                        document.getElementById(
                                                            "card_Activitytitle"
                                                        ).innerText = "";
                                                        displaycard.style.display =
                                                            "block";
                                                        document.getElementById(
                                                            "card_Activitytitle"
                                                        ).innerText =
                                                            "تعديل البيانات";
                                                        document
                                                            .getElementById(
                                                                "card_Activitytitle"
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
                                                aid: rowData.aid,
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
                                                url: "activity/destroy",
                                                data: data,
                                                success: function (response) {
                                                    Activity_fetch();
                                                    Activity_cleardata();
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
                                                    Activity_fetch();
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
                                .addClass("custom-header_Activity");
                        },
                    });
                });
            },
        });
    });
}

function Activity_filldata() {
    var url = "activityfill/";
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: url + "filldata",
            success: function (response) {
                $(() => {
                    $('#act_id').dxSelectBox({
                        dataSource: response.getAct_ID,
                        inputAttr: {style:"font-size:13px", },
                        placeholder:"اسم النشاط",
                        searchEnabled:true,
                        displayExpr: 'act_id',
                        valueExpr: 'act_id',
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
                                    act_id: data.text
                                };

                                response.getAct_ID.push(newItem);
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
            var displaycard = document.getElementById("Activityaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_Activitytitle").innerText = "";
                Activity_cleardata();
                // Activity_setStCode();
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
            var displaycard = document.getElementById("Activityaction");
            if (displaycard.style.display == "block") {
                document.getElementById("card_Activitytitle").innerText = "";
                Activity_cleardata();
                // Activity_setStCode();
                displaycard.style.display = "none";
                document.getElementById("btnSave").scrollIntoView();
            }else{
                document.getElementById("card_Activitytitle").innerText ="اضافة نشاط";
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
            Activity_chechdata();
            if(
                error_act_id != ""
            )
            {
                return false;
            }else{
                Activity_UpdateOrCreate();
            }
        },
    });
});
// End Button Save

// Begin Create Components of Store Page
$(document).ready(function () {
    $(() => {
        $("#aid").dxTextBox({
            placeholder: "",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#Aname").dxTextBox({
            placeholder: "",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#Participants").dxTextBox({
            placeholder: "",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#NoDays").dxTextBox({
            placeholder: "",
            inputAttr: { style:"font-size:13px", },
        });
    });
    $(() => {
        $("#Place").dxTextBox({
            placeholder: "",
            inputAttr: { style:"font-size:13px", },
        });
    });


    $(() => {
        const now = new Date();
        $("#ActDate").dxDateBox({
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
        $("#Notes").dxTextArea({
            // ...
            minHeight: 50,
            maxHeight: 300,
            autoResizeEnabled: true,
            // value: longText,
            maxLength: 4000,
            label: "ملاحظات",
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
