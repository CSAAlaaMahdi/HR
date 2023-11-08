
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
            url: 'dashboardmain/cardsdata',
            data:{id:lastid},
            success: function (response) {
                // console.log(response.employeescount[0]);
                $.each(response.employeescount, function (key, value) {
                    // console.log(value['EmpCount']);
                    $('#EmployeesCount').text(value['EmpCount']);
                });
                $.each(response.carscount, function (key, value) {
                    // console.log(value['CarsCount']);
                    $('#CarsCount').text(value['CarsCount']);
                });
                $.each(response.attendance, function (key, value) {
                    // console.log(value['AttendanceCount']);
                    $('#AttendanceCount').text(value['AttendanceCount']);
                });

                $.each(response.movementsanddispatches, function (key, value) {
                    console.log(value['Movements']);
                    $('#CarsDispatches').text(value['Dispatches']);
                    $('#CarsMovements').text(value['Movements']);
                });

            }
        });
    };

        setInterval(request,10000);


});
