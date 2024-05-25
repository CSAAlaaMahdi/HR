

$(document).ready(function () {
    var lastid =0;
    var request=function()
    {
        requesting=true;
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });

        $.ajax({
            type: "GET",
            url: 'dashboard/cardsdata',
            data:{id:lastid},
            success: function (response) {

                $.each(response.Employees, function (index, value) {
                    $('#EmpCount').text(value);
                });
                $.each(response.GetVacations, function (index, value) {
                    $('#GetVacations').text(value);
                });
                $.each(response.GetDispatches, function (index, value) {
                    $('#GetDispatches').text(value);
                });
                $.each(response.GetResearches, function (index, value) {
                    $('#GetResearches').text(value);
                });


            }
        });
    };

        setInterval(request,4000);


});

$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "dashboard/Certifications",
        success: function (response) {
            const dataGrid = $("#Certificationsdatagrid").dxDataGrid({
                dataSource: response.GetCertifications,
                keyExpr: "id",
                height:670,
                paging: {
                    enabled: true,
                    pageSize: 10, // Number of records per page
                    pageIndex: 0, // Initially show the first page
                },
                pager: {
                    showPageSizeSelector: true,
                    showInfo: true,
                    allowedPageSizes: [ 25, 50, 100, "all"],
                    showNavigationButtons: true,
                },
                remoteOperations: false,
                searchPanel: {
                    visible: false,
                    highlightCaseSensitive: true,
                    width: 300,
                },
                focusedRowEnabled: false,
                filterRow: { visible: false },
                groupPanel: { visible: false },
                grouping: {
                    autoExpandAll: false,
                },
                allowColumnReordering: true,
                rowAlternationEnabled: true,
                showBorders: true,
                columnChooser:{enabled : false},
                export: {
                    enabled: false,
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
                        dataField: "total",
                        caption: "المجموع ",
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
                onContentReady: function (e) {
                    // Add custom class to the header panel
                    e.element
                        .find(".dx-datagrid-headers")
                        .addClass("custom-header_Certifications");
                },
            });
            const dataGrid2 = $("#Certificationsdatagrid2").dxDataGrid({
                dataSource: response.GetCategory,
                keyExpr: "id",
                height:670,
                paging: {
                    enabled: true,
                    pageSize: 10, // Number of records per page
                    pageIndex: 0, // Initially show the first page
                },
                pager: {
                    showPageSizeSelector: true,
                    showInfo: true,
                    allowedPageSizes: [ 25, 50, 100, "all"],
                    showNavigationButtons: true,
                },
                remoteOperations: false,
                searchPanel: {
                    visible: false,
                    highlightCaseSensitive: true,
                    width: 300,
                },
                focusedRowEnabled: false,
                filterRow: { visible: false },
                groupPanel: { visible: false },
                grouping: {
                    autoExpandAll: false,
                },
                allowColumnReordering: true,
                rowAlternationEnabled: true,
                showBorders: true,
                columnChooser:{enabled : false},
                export: {
                    enabled: false,
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
                        dataField: "jcategory",
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
                        dataField: "total",
                        caption: "المجموع ",
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
                onContentReady: function (e) {
                    // Add custom class to the header panel
                    e.element
                        .find(".dx-datagrid-headers")
                        .addClass("custom-header_Certifications");
                },
            });
        }
    });
});
