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
                <div id="spanStyle2">: {{$Bond[0]['Currency_Guid']}}</div>
                <div id="spanStyle2">: {{$Bond[0]['Credit']}}</div>

            </div>
        </div>

        <div class="leftinfo">
            <div id="rightcontent1" class="rightcontent">
                <div id="spanStyle1">رقم السند</div>
                <div id="spanStyle1">التاريخ</div>
            </div>
            <div id="rightcontent2" class="rightcontent">
                <div id="spanStyle2">: {{$Bond[0]['Bond_Number']}}</div>
                <div id="spanStyle2">: {{$Bond[0]['created_at']}}</div>

            </div>
        </div>
        <div class="infoData">
            
                <div style="width: 20%;background-color: red">استلمت من السيد :</div>
                <div style="width:60%;background-color:blue">dddd</div>
          
           
        </div>
        <div class="Items">
            <table class="table cs_table borderd">
                <thead>
                    <tr>
                        <td>ت</td>
                        <td>اسم المادة</td>
                        <td>المعرف</td>
                        <td>الكمية</td>
                        <td>سعر الوحدة</td>
                        <td>الاجمالي</td>
                    </tr>
                </thead>
                <tbody>

                    {{-- @foreach ($BillItems as $value)
                        <tr>
                            <td>{{ ++$Count }}</td>
                            <td>{{ $value->Item_Guid }}</td>
                            <td>{{ $value->Item_PartNumber }}</td>
                            <td>{{ $value->Item_Qty1 }}</td>
                            <td>{{ $value->Item_Price }} </td>
                            <td>{{ $value->Item_Price_Final }}</td>
                        </tr>
                    @endforeach --}}


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
