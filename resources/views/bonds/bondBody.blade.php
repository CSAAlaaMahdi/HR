<div class="Items">
    <table class="table cs_table borderd">

        @switch($Bond[0]['Vou_Type'])
            @case(1)
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

                    </tr>
                </tfoot>
            @break

            @case(2)
                <thead>
                    <tr>
                        <td> المدين</td>
                        <td> الدائن</td>
                        <td>  الفرعي</td>
                        <td>الحساب</td>
                        <td>الدليل المحاسبي</td>

                    </tr>
                </thead>
                <tbody>

                    @foreach ($Bond as $value)
                        <tr>
                            <td>{{ $value->Debit }}</td>
                            <td>{{ $value->Credit }}</td>
                            <td></td>
                            <td>{{ $value->Acc_Guid }}</td>
                            <td>{{ $value->Acc_MaskCode }}</td>
                        </tr>
                    @endforeach


                </tbody>
                <tfoot>
                    <tr>

                    </tr>
                </tfoot>
            @break

            @default
        @endswitch

    </table>
</div>
