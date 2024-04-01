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
                <div id="spanStyle2">: {{ $Bond[0]['Credit'] }}</div>

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
            <div style="width:84%; border-bottom:1px dotted black;float: left;">علاء مهدي حسن</div>
        </div>
        <div class="infoData">
            <div style="width: 10%;float: right;">مبلغ قدره:</div>
            <div style="width:90%; border-bottom:1px dotted black;float: left;">علاء مهدي حسن</div>
        </div>
        <div class="infoData">
            <div style="width: 10%;float: right;"> مقابل:</div>
            <div style="width:90%; border-bottom:1px dotted black;float: left;">علاء مهدي حسن</div>
        </div>
        <br><br>
        <br>
        <br>

        <div class="Items">
            <table class="table cs_table borderd">
                <thead>
                    <tr>
                        <td>الحساب الدائن</td>
                        <td> الدليل المحاسبي</td>
                        <td>المبلغ</td>

                    </tr>
                </thead>
                <tbody>

                    @foreach ($Bond as $value)
                        <tr>
                            <td>{{ $value->Acc_Guid }}</td>
                            <td>{{ $value->Acc_MaskCode }}</td>
                            <td>{{ $value->Credit }}</td>
                        </tr>
                    @endforeach


                </tbody>
                <tfoot>
                    <tr>
                        {{-- <td colspan="3"> الاجمالي</td>
                        <td>{{ $BillItems->sum('Item_Qty1') }}</td>
                        <td></td>
                        <td>{{ $BillItems->sum('Item_Price_Final') }}</td> --}}
                    </tr>
                </tfoot>
            </table>
        </div>
        <div class="footerinfo">
            <div id="footercontent1" class="footercontent">
                {{-- <span>اجمالي الخصومات</span><br>
                <span>اجمالي الاضافات</span><br>
                <span>مبلغ الفاتورة</span><br> --}}
            </div>
            <div id="footercontent2" class="footercontent">
                {{-- <span>: {{$BillFooter['Total_Discount']}}</span><br>
                <span>: {{$BillFooter['Total_Add']}}</span><br>
                <span>: {{$BillFooter['Total_Price_Bill']}}</span><br> --}}
            </div>
        </div>

    </div>

</body>


</html>
