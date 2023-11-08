<!DOCTYPE html>
<html lang="en">

<head>

    <link rel="stylesheet" type="text/css" href="{{ url('admin/assets/css/reportSalingBill.css') }}" />

    <title> Saling Bill </title>
</head>

<body>

    <header>
        <div class="columnheader1">
            ALMATANA COMPANY<br> IRAQ<br> KERBALA CITY<br> PUBLIC TRADING
        </div>
        <div class="columnheader">
            SALING VOUCHER <br>

        </div>
    </header>
    <hr>

    <main>
        <div class="headerBillLeft">
            <label for="" class="labelSalingBill"> Bill Number &nbsp;:
            </label>

            <label for="" class="labelSalingBillValue">{{ $billNumber[0]->BS_BillNumber }}
            </label>
            <br>

            <label for="" class="labelSalingBill"> Bill Date &nbsp;&nbsp;&nbsp;:
            </label>
            <label for="" class="labelSalingBillValue">{{ $billNumber[0]->BS_BillDate }}
            </label>
            <br>
            <label for="" class="labelSalingBill"> Customer &nbsp;&nbsp;&nbsp;&nbsp;:
            </label>
            <label for="" class="labelSalingBillValue">{{ $billNumber[0]->BS_Customer }}
            </label><br>
            <label for="" class="labelSalingBill"> Bill Type &nbsp;&nbsp;&nbsp;:
            </label>
            <label for="" class="labelSalingBillValue">{{ $billNumber[0]->BS_BillType }}
            </label><br>
            <label for="" class="labelSalingBill"> Currency &nbsp;&nbsp;&nbsp;&nbsp;:
            </label>
            <label for="" class="labelSalingBillValue">{{ $billNumber[0]->BS_Currency }}
            </label><br>

        </div>
        <div class="headerBillRight">
            <label for="" class="labelSalingBill"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Credit &nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            </label>
            <label for="" class="labelSalingBillValue">{{ $billNumber[0]->BS_Credit }}
            </label>
            <br>

            <label for="" class="labelSalingBill"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Debt &nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            </label>
            <label for="" class="labelSalingBillValue">{{ $billNumber[0]->BS_Debt }}
            </label>
            <br>
            <label for="" class="labelSalingBill"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Total Money
                &nbsp;&nbsp;&nbsp;:
            </label>
            <label for="" class="labelSalingBillValue">{{ $billNumber[0]->BS_TotalMoney }}
            </label><br>
            <label for="" class="labelSalingBill"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Warehouse
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
            </label>
            <label for="" class="labelSalingBillValue">{{ $billNumber[0]->BS_StoreName }}
            </label><br>
        </div>






        <table class="table cs_table borderd">
            <thead>
                <tr>
                    <td>SSN</td>
                    <td>Item Name </td>
                    <td> Part Number</td>
                    <td> Quantity</td>
                    <td> Unit Price </td>
                    <td>Total Money </td>

                </tr>
            </thead>
            <tbody>

                @foreach ($billNumber[0]->billSaleItems as $value)
                    <tr>
                        <td>{{ ++$count }}</td>
                        <td>{{ $value->BSI_ItemName }}</td>
                        <td>{{ $value->BSI_C_PartNumber }}</td>
                        <td>{{ $value->BSI_Count }}</td>
                        <td>{{ $value->BSI_UnitPrice }} </td>
                        <td>{{ $value->BSI_TotalMoney }} </td>
                    </tr>
                @endforeach


            </tbody>
            <tfoot>
                <tr>
                    <td colspan="3"> Total</td>
                    <td>{{ $billNumber[0]->billSaleItems->sum('BSI_Count') }}</td>
                    <td></td>
                    <td>{{ $billNumber[0]->billSaleItems->sum('BSI_TotalMoney') }}</td>
                </tr>
            </tfoot>
        </table>

    </main>


<footer class="footer">
    ALMATAN@GMAIL.COM
</footer>


</body>

</html>
