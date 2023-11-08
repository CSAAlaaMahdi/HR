<?php

namespace App\Http\Controllers;

use App\Models\BillBuying;
use App\Models\BillSale;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use \Mpdf\Mpdf;

use PDF;



class ReportBuyingBillController extends Controller
{

    public function index()
    {
        // if (session()->has('User')) {
        //     return view('bills.billsalingPrint');
        // }
    }


    public function create(Request $request)
    {

        $billnumberID = $request->input('BillNumberID');
        $request->session()->put('billnumberID', $billnumberID);
    }


    public function store(Request $request)
    {
        //
    }


    public function show()
    {

        $mpdf = new \Mpdf\Mpdf();
        $mpdf->autoScriptToLang = true;
        $mpdf->autoLangToFont = true;
        $stylesheet = file_get_contents(url('admin/assets/css/reportBuyingBill.css'));
        $html = $this->buyingBillPrint();
        $mpdf->WriteHTML($stylesheet, 1);
        $mpdf->WriteHTML($html);
        return redirect()->to($mpdf->Output('filename.pdf', 'I'));
    }


    public function edit(Request $request)
    {
        // $daily = $request->input('daily');
        // $request->session()->put('daily', $daily);
        // $monthly = $request->input('monthly');
        // $request->session()->put('monthly', $monthly);
        // $yearly = $request->input('yearly');
        // $request->session()->put('yearly', $yearly);
        // $reportperiod = $request->input('reportperiod');
        // $request->session()->put('reportperiod', $reportperiod);
        // $reporttype = $request->input('reporttype');
        // $request->session()->put('reporttype', $reporttype);
        // $data = [
        //     'daily' => $daily,
        //     'monthly' => $monthly,
        //     'yearly' => $yearly,
        //     'reportperiod' => $reportperiod,
        //     'reporttype' => $reporttype,
        //     'getMovementSummary' => DB::select('exec testproc'),
        // ];



    }


    public function update(Request $request, $id)
    {
    }


    public function destroy($id)
    {
        //
    }

    public function buyingBillPrint()
    {

        // $query = [
        //     'billNumber' => collect(DB::select("SET NOCOUNT ON ; exec Sp_CarMovementReport @month ='" . session('monthly') . "' ,@year ='" . session('yearly') . "'"))
        //         ->groupBy('M_Department2')
        //         ->all(),

        // ];

        $query = [
            'billNumber' => BillBuying::with(['billBuyingItems','billBuyingItems.Itemstwo'])->where('id',session('billnumberID'))->get(),
            'count'=>0,

        ];


        return view('bills.billbuyingPrint', $query);
    }

    public function testalaa()
    {
        // $query = collect(DB::select("SET NOCOUNT ON ; exec Sp_CarMovementReport @month ='" . session('monthly') . "' ,@year ='" . session('yearly') . "'"));
        // $groupby = $query->groupBy('M_Department2');
        // $groupby->all();
        // foreach ($groupby as $key => $value) {
        //     echo json_encode($value[0]->M_CarNo2);
         // for ($i=0; $i < count($value); $i++) {
        //      echo json_encode($value[$i]->M_CarNo2);
       // }

        // }


        // return response()->json($query);
    }
}
