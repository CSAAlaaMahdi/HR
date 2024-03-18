<!DOCTYPE html>
<html lang="en">

<head>

    <title>فاتورة </title>
</head>

<body dir="rtl">

    <div class="bodyPage row">
        <div class="rightinfo">
            <div id="rightcontent1" class="rightcontent">
                <span>رقم الفاتورة</span><br>
                <span>تاريخ الفاتورة</span><br>
                <span>العميل</span><br>
                <span>المخزن</span><br>
            </div>
            <div id="rightcontent2" class="rightcontent">
                <span>: {{$BillHeader['Bill_Number']}}</span><br>
                <span>: {{$BillHeader['Bill_Date']}}</span><br>
                <span>: {{$BillHeader['Cust_Guid']}}</span><br>
                <span>: {{$BillHeader['Store_Guid']}}</span><br>
            </div>
        </div>

        <div class="leftinfo">
            <div id="rightcontent1" class="rightcontent">
                <span>العملة</span><br>
                <span>التعادل</span><br>
                <span>مبلغ الفاتورة</span><br>
                <span>نوع الفاتورة</span><br>
            </div>
            <div id="rightcontent2" class="rightcontent">
                <span>: {{$BillHeader['Currency_Guid']}}</span><br>
                <span>: {{$BillHeader['Currency_Equal']}}</span><br>
                <span>: {{$BillFooter['Total_Price_Bill']}}</span><br>
                <span>: {{$BillHeader['Pay_Type']}}</span><br>
            </div>
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

                    @foreach ($BillItems as $value)
                        <tr>
                            <td>{{ ++$Count }}</td>
                            <td>{{ $value->Item_Guid }}</td>
                            <td>{{ $value->Item_PartNumber }}</td>
                            <td>{{ $value->Item_Qty1 }}</td>
                            <td>{{ $value->Item_Price }} </td>
                            <td>{{ $value->Item_Price_Final }}</td>
                        </tr>
                    @endforeach


                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="3"> الاجمالي</td>
                        <td>{{ $BillItems->sum('Item_Qty1') }}</td>
                        <td></td>
                        <td>{{ $BillItems->sum('Item_Price_Final') }}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <div class="footerinfo">
            <div id="footercontent1" class="footercontent">
                <span>اجمالي الخصومات</span><br>
                <span>اجمالي الاضافات</span><br>
                <span>مبلغ الفاتورة</span><br>
            </div>
            <div id="footercontent2" class="footercontent">
                <span>: {{$BillFooter['Total_Discount']}}</span><br>
                <span>: {{$BillFooter['Total_Add']}}</span><br>
                <span>: {{$BillFooter['Total_Price_Bill']}}</span><br>
            </div>
        </div>

    </div>

</body>


</html>
