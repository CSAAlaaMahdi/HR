

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

                console.log(response);
                $.each(response.Employees, function (index, value) { 
                    $('#EmpCount').text(value);
                });
                
               

            }
        });
    };

        setInterval(request,4000);


});
