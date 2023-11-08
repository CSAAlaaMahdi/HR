
    $(document).ready(function() {
        $('#R_DayInput').on('keypress', function(event) {
            var regex = new RegExp("^[.0-9]+$");
            var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
            if (!regex.test(key)) {
                event.preventDefault();
                return false;
            }
        });
        $('#R_MonthInput').on('keypress', function(event) {
            var regex = new RegExp("^[.0-9]+$");
            var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
            if (!regex.test(key)) {
                event.preventDefault();
                return false;
            }
        });
        $('#R_YearInput').on('keypress', function(event) {
            var regex = new RegExp("^[.0-9]+$");
            var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
            if (!regex.test(key)) {
                event.preventDefault();
                return false;
            }
        });
    });

    $(document).ready(function() {

        $('#R_DayInput').hide();
        $('#DayLabel').hide();
        $('#R_MonthInput').hide();
        $('#MonthLabel').hide();
        $('#R_YearInput').hide();
        $('#YearLabel').hide();

    });

    $(document).on('change', '.R_ReportPeriod', function() {
        var selectedtext = $('#R_ReportPeriod').val();
        switch (selectedtext) {
            case 'Daily':
                $('#R_DayInput').show();
                $('#DayLabel').show();
                $('#R_MonthInput').show();
                $('#MonthLabel').show();
                $('#R_YearInput').show();
                $('#YearLabel').show();
                break;
            case 'Monthly':
                $('#R_DayInput').hide();
                $('#DayLabel').hide();
                $('#R_MonthInput').show();
                $('#MonthLabel').show();
                $('#R_YearInput').show();
                $('#YearLabel').show();
                break;

            case 'Yearly':
                $('#R_DayInput').hide();
                $('#DayLabel').hide();
                $('#R_MonthInput').hide();
                $('#MonthLabel').hide();
                $('#R_YearInput').show();
                $('#YearLabel').show();
                break;

            default:
                $('#R_DayInput').hide();
                $('#DayLabel').hide();
                $('#R_MonthInput').hide();
                $('#MonthLabel').hide();
                $('#R_YearInput').hide();
                $('#YearLabel').hide();
                break;
        }
    });

    $(document).on('click', '.reportprint', function() {
        var url='reports/';
        data = {
            'daily': $('#R_DayInput').val(),
            'monthly': $('#R_MonthInput').val(),
            'yearly': $('#R_YearInput').val(),
            'reportperiod': $('#R_ReportPeriod').val(),
            'reporttype': $('#R_ReportType').val(),

        };
        // console.log(data);
        $.ajax({
            type: "GET",
            url: url + 'create',
            data: data,
            success: function(response) {

                
                var a = document.createElement('a');
                a.href = url + 'show';
                window.open(a.href, '_blank');

            }

        });
    });

