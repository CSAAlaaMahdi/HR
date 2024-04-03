<!DOCTYPE html>
<html lang="en">

<head>

    <title>فاتورة </title>
</head>

<body dir="rtl">

    <div class="bodyPage row">
        <div class="rightinfo">
            <div id="rightcontent1" class="rightcontent">
                <div id="spanStyle1">العملة </div>
                <div id="spanStyle1">المبلغ </div>

            </div>
            <div id="rightcontent2" class="rightcontent">
                <div id="spanStyle2">: {{ $Bond[0]['Currency_Guid'] }}</div>
                <div id="spanStyle2" class="TotalMoney">: {{ $TotalMoney }}</div>

            </div>
        </div>

        <div class="leftinfo">
            <div id="rightcontent1" class="rightcontent">
                <div id="spanStyle1">رقم السند</div>
                <div id="spanStyle1">التاريخ</div>
            </div>
            <div id="rightcontent2" class="rightcontent">
                <div id="spanStyle2">: {{ $Bond[0]['Bond_Number'] }}</div>
                <div id="spanStyle2">: {{ $Bond[0]['created_at'] }}</div>

            </div>
        </div>

        <div class="infoData">
            <div style="width: 16%;float: right;">استلمت من السيد :</div>
            <div style="width:84%; border-bottom:1px dotted black;float: left;"> {{ $Bond[0]['txtUser01Optional'] }} </div>
        </div>
        <div class="infoData">
            <div style="width: 10%;float: right;">مبلغ قدره:</div>
            <div style="width:90%; border-bottom:1px dotted black;float: left;"> {{ $NW }}</div>
        </div>
        <div class="infoData">
            <div style="width: 10%;float: right;"> مقابل:</div>
            <div style="width:90%; border-bottom:1px dotted black;float: left;"> {{ $Bond[0]['Notes'] }}</div>
        </div>
        <br><br>
        <br>
        <br>

        
        @include('bonds.bondBody')

        @include('bonds.bondBodyFooter')


    </div>

</body>


</html>
