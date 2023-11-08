<!DOCTYPE html>
<html lang="en">

<head>

    <link rel="stylesheet" type="text/css" href="{{ url('resources/css/stylereports_001.css') }}" />

    <title>ملخص الاقسام</title>
</head>

<body dir="rtl">

    <header>
        <div class="columnheader1">
            جمهورية العراق <br> ديوان الوقف الشيعي <br> العتبة العباسية المقدسة<br> قسم الاليات
        </div>
        <div class="columnheader">
            تقرير <br> حركة عجلات الاقسام <br>شهر {{ $month }} / سنة {{ $year }}

        </div>
    </header>
    <hr>


    <table class="table cs_table borderd">
        <thead>
            <tr>
                <td>ت</td>
                <td></td>
                <td> رقم العجلة</td>
                <td> نوع العجلة</td>
                <td> عدد الحركات الداخلية</td>
                <td>الايفادات </td>
                <td>المسافة المقطوعة </td>

            </tr>
        </thead>
        <tbody>

            @foreach ($getMovementSummary as $value)
                <tr>
                    <td colspan="8" style="text-align: center;background-color: orange">
                        {{ $value[0]->M_Department2 }}&nbsp; /عدد العجلات
                        &nbsp;{{ count($value) }}
                    </td>
                    @foreach ($value as $col)
                <tr>
                    <td colspan="2" style="background-color: #0ea88a">{{ $col->id }}</td>
                    <td>{{ $col->M_CarNo2 }}</td>
                    <td>{{ $col->M_CarType2 }}</td>
                    <td>{{ $col->M_Movement2 }}</td>
                    <td>{{ $col->M_Dispateches2 }}</td>
                    <td>{{ $col->M_Distance2 }} كم</td>
                </tr>
            @endforeach
            </tr>
            @endforeach


        </tbody>
        <tfoot>
            <tr>

            </tr>
        </tfoot>
    </table>





</body>

</html>
