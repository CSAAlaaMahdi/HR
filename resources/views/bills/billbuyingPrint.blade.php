<!DOCTYPE html>
<html lang="en">

<head>

    <link rel="stylesheet" type="text/css" href="{{ url('admin/assets/css/reportBuyingBill.css') }}" />

    <title> Buying Bill </title>
</head>

<body>

    <header>
        <div class="columnheader1">
            ALMATANA COMPANY<br> IRAQ<br> KERBALA CITY<br> PUBLIC TRADING
        </div>
        <div class="columnheader">
            BUYING VOUCHER <br>

        </div>
    </header>
    <hr>

    <main>
        <div class="headerBillLeft">
            <label for="" class="labelBuyingBill"> Bill Number &nbsp;:
            </label>

            <label for="" class="labelBuyingBillValue">{{ $billNumber[0]->BB_BillNumber }}
            </label>
            <br>

            <label for="" class="labelBuyingBill"> Bill Date &nbsp;&nbsp;&nbsp;:
            </label>
            <label for="" class="labelBuyingBillValue">{{ $billNumber[0]->BB_BillDate }}
            </label>
            <br>
            <label for="" class="labelBuyingBill"> Customer &nbsp;&nbsp;&nbsp;&nbsp;:
            </label>
            <label for="" class="labelBuyingBillValue">{{ $billNumber[0]->BB_Customer }}
            </label><br>
            <label for="" class="labelBuyingBill"> Bill Type &nbsp;&nbsp;&nbsp;:
            </label>
            <label for="" class="labelBuyingBillValue">{{ $billNumber[0]->BB_BillType }}
            </label><br>
            <label for="" class="labelBuyingBill"> Currency &nbsp;&nbsp;&nbsp;&nbsp;:
            </label>
            <label for="" class="labelBuyingBillValue">{{ $billNumber[0]->BB_Currency }}
            </label><br>

        </div>
        <div class="headerBillRight">
            <label for="" class="labelBuyingBill"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            </label>
            <label for="" class="labelBuyingBillValue">{{ $billNumber[0]->BB_Credit }}
            </label>
            <br>

            <label for="" class="labelBuyingBill"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Debt &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            </label>
            <label for="" class="labelBuyingBillValue">{{ $billNumber[0]->BB_Debt }}
            </label>
            <br>
            <label for="" class="labelBuyingBill"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total Money
                &nbsp;&nbsp;&nbsp;:
            </label>
            <label for="" class="labelBuyingBillValue">{{ $billNumber[0]->BB_TotalMoney }}
            </label><br>
            <label for="" class="labelBuyingBill"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Warehouse
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            </label>
            <label for="" class="labelBuyingBillValue">{{ $billNumber[0]->BB_StoreName }}
            </label><br>
        </div>






        <table class="table cs_table borderd">
            <thead>
                <tr>
                    <td>SSN</td>
                    <td>Item Name </td>
                    <td> Quantity</td>
                    <td> Count Type</td>
                    <td> Unit Price </td>
                    <td>Total Money </td>
                    <td>Unit Price C</td>
                    <td>Total Money C</td>

                </tr>
            </thead>
            <tbody>

                @foreach ($billNumber[0]->billBuyingItems as $value)
                    <tr>
                        <td>{{ ++$count }}</td>
                        <td>{{ $value->BI_ItemName }}-{{$value->itemstwo->IT_C_PartNumber}}</td>
                        <td>{{ $value->BI_Count }}</td>
                        <td>{{ $value->BI_CountType }}</td>
                        <td>{{ $value->BI_UnitPrice }} {{$value->BI_Currency}} </td>
                        <td>{{ $value->BI_TotalMoney }} {{$value->BI_Currency}}</td>
                        <td>{{ $value->BI_UnitPriceC }} </td>
                        <td>{{ $value->BI_TotalMoneyC }} </td>
                    </tr>
                @endforeach


            </tbody>
            <tfoot>
                <tr>
                    <td colspan="2"> Total</td>
                    <td>{{ $billNumber[0]->billBuyingItems->sum('BI_Count') }}</td>
                    <td></td>
                    <td></td>
                    <td>{{ $billNumber[0]->billBuyingItems->sum('BI_TotalMoney') }} {{$billNumber[0]->billBuyingItems[0]->BI_Currency}}</td>
                    <td></td>
                    <td>{{ $billNumber[0]->billBuyingItems->sum('BI_TotalMoneyC') }} IDQ</td>
                </tr>
            </tfoot>
        </table>

    </main>


<footer class="footer">
    ALMATAN@GMAIL.COM
</footer>


</body>

</html>
