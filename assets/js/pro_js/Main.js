
DashboardMain_FillData();
GetPermission();


function GetPermission(){

    $.ajax({
        type: "GET",
        url: "dashboardmainPermissions/Permissions",
        success: function (response) {

            let MainValue = response.Permission.filter(function (item){
                return item.FormName === 'الرئيسية';
            })
            if (!MainValue[0]['Enable']) {
                $("#Login_Dashboard_Departments a").click(function(e) {
                    e.preventDefault();

                });

            }
            let UserValue = response.Permission.filter(function (item){
                return item.FormName === 'المستخدمون';
            })
            if (!UserValue[0]['Enable']) {
                $("#Login_Users a").click(function(e) {
                    e.preventDefault();

                });

            }
            let GroupsValue = response.Permission.filter(function (item){
                return item.FormName === 'المجموعات';
            })
            if (!GroupsValue[0]['Enable']) {
                $("#Login_UserGroupPermissions a").click(function(e) {
                    e.preventDefault();

                });

            }
            let UserPermissionsValue = response.Permission.filter(function (item){
                return item.FormName === 'الصلاحيات';
            })
            if (!UserPermissionsValue[0]['Enable']) {
                $("#Login_UserPermissions a").click(function(e) {
                    e.preventDefault();

                });

            }
            let EmployeesValue = response.Permission.filter(function (item){
                return item.FormName === 'الموظفين';
            })
            if (!EmployeesValue[0]['Enable']) {
                $("#Login_Employees a").click(function(e) {
                    e.preventDefault();

                });

            }
            let ArchiveEmp = response.Permission.filter(function (item){
                return item.FormName === 'الاضبارة الالكترونية';
            })
            if (!ArchiveEmp[0]['Enable']) {
                $("#Login_EmployeesAttachments a").click(function(e) {
                    e.preventDefault();

                });

            }
            let EmployeesReport = response.Permission.filter(function (item){
                return item.FormName === 'تقارير الموظفين';
            })
            if (!EmployeesReport[0]['Enable']) {
                $("#Login_EmployeesReport a").click(function(e) {
                    e.preventDefault();

                });

            }
            let JobsValue = response.Permission.filter(function (item){
                return item.FormName === 'الترفيعات';
            })
            if (!JobsValue[0]['Enable']) {
                $("#Login_Jobs a").click(function(e) {
                    e.preventDefault();

                });

            }
            let VacationsValue = response.Permission.filter(function (item){
                return item.FormName === 'الاجازات';
            })

            if (!VacationsValue[0]['Enable']) {
                $("#Login_Vacations a").click(function(e) {
                    e.preventDefault();

                });

            }
            let ThanksValue = response.Permission.filter(function (item){
                return item.FormName === 'التشكرات';
            })
            if (!ThanksValue[0]['Enable']) {
                $("#Login_Thanks a").click(function(e) {
                    e.preventDefault();

                });

            }
            let ChildrenValue = response.Permission.filter(function (item){
                return item.FormName === 'الزوجية والاطفال';
            })
            if (!ChildrenValue[0]['Enable']) {
                $("#Login_Children a").click(function(e) {
                    e.preventDefault();

                });

            }
            let AdministraionOrdersValue = response.Permission.filter(function (item){
                return item.FormName === 'الاوامر الادارية';
            })
            if (!AdministraionOrdersValue[0]['Enable']) {
                $("#Login_AdministrationOrders a").click(function(e) {
                    e.preventDefault();

                });

            }
            let DispearValue = response.Permission.filter(function (item){
                return item.FormName === 'حركة الملاك';
            })
            if (!DispearValue[0]['Enable']) {
                $("#Login_Disapear a").click(function(e) {
                    e.preventDefault();

                });

            }
            let DispatchValue = response.Permission.filter(function (item){
                return item.FormName === 'الايفادات';
            })
            if (!DispatchValue[0]['Enable']) {
                $("#Login_Dispatch a").click(function(e) {
                    e.preventDefault();

                });

            }
            let Certification = response.Permission.filter(function (item){
                return item.FormName === 'الشهادات';
            })
            if (!Certification[0]['Enable']) {
                $("#Login_Certification a").click(function(e) {
                    e.preventDefault();

                });

            }
            let ComityValue = response.Permission.filter(function (item){
                return item.FormName === 'اللجان';
            })
            if (!ComityValue[0]['Enable']) {
                $("#Login_Comity a").click(function(e) {
                    e.preventDefault();

                });

            }
            let Supervisor = response.Permission.filter(function (item){
                return item.FormName === 'الاشراف';
            })
            if (!Supervisor[0]['Enable']) {
                $("#Login_Supervisor a").click(function(e) {
                    e.preventDefault();

                });

            }
            let PositionsValue = response.Permission.filter(function (item){
                return item.FormName === 'المناصب';
            })
            if (!PositionsValue[0]['Enable']) {
                $("#Login_Positions a").click(function(e) {
                    e.preventDefault();

                });

            }
            let ActivityValue = response.Permission.filter(function (item){
                return item.FormName === 'الانشطة والفعاليات';
            })
            if (!ActivityValue[0]['Enable']) {
                $("#Login_Activity a").click(function(e) {
                    e.preventDefault();

                });

            }
            let ResearchesValue = response.Permission.filter(function (item){
                return item.FormName === 'البحوث والنشر';
            })
            if (!ResearchesValue[0]['Enable']) {
                $("#Login_Researches a").click(function(e) {
                    e.preventDefault();

                });

            }
            let Articles = response.Permission.filter(function (item){
                return item.FormName === 'المقالات';
            })
            if (!Articles[0]['Enable']) {
                $("#Login_Articles a").click(function(e) {
                    e.preventDefault();

                });

            }
            let Places = response.Permission.filter(function (item){
                return item.FormName === 'مواقع وذمم';
            })
            if (!Places[0]['Enable']) {
                $("#Login_Places a").click(function(e) {
                    e.preventDefault();

                });

            }
            let ItemsGroups = response.Permission.filter(function (item){
                return item.FormName === 'دليل المواد';
            })
            if (!ItemsGroups[0]['Enable']) {
                $("#Login_ItemsGroups a").click(function(e) {
                    e.preventDefault();

                });

            }
            let Items = response.Permission.filter(function (item){
                return item.FormName === 'المواد';
            })
            if (!Items[0]['Enable']) {
                $("#Login_Items a").click(function(e) {
                    e.preventDefault();

                });

            }

        }
    });
}

function DashboardMain_FillData(){
    $.ajax({
        type: "GET",
        url: "dashboardmainfill/filldata",
        success: function (data) {

           $(".loginname").text(data.User);
        }
    });
}

// $(document).ready(function () {
//     var lastid =0;
//     var request=function()
//     {
//         requesting=true;
//         $.ajaxSetup({
//             headers: {
//                 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
//             }
//         });

//         $.ajax({
//             type: "GET",
//             url: 'dashboardmainCards/CardsData',
//             data:{id:lastid},
//             success: function (response) {

//                 console.log(response);
//                 // $('#PatientCount').text(response.PatientCount);
//                 // $('#PatientDates').text(response.PatientDates);
//                 // $('#UsersCount').text(response.UsersCount);
//                 // $('#DaysOfAccount').text(response.DifferenceInDays);
//                 // $('#PurchasesSum').text(response.Purchases);
//                 // $('#IncomeSum').text(response.Income);
//                 // $('#DebitSum').text(response.Debit);
//                 // $('#CreditSum').text(response.Credit);


//             }
//         });
//     };

//         setInterval(request,4000);


// });
