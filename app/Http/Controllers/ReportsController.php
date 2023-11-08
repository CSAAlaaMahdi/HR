<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use \Mpdf\Mpdf;

use PDF;



class ReportsController extends Controller
{

    public function index()
    {
        if (session()->has('user')) {
            return view('reports.index');
        }
    }


    public function create(Request $request)
    {

        $daily = $request->input('daily');
        $request->session()->put('daily', $daily);
        $monthly = $request->input('monthly');
        $request->session()->put('monthly', $monthly);
        $yearly = $request->input('yearly');
        $request->session()->put('yearly', $yearly);
        $reportperiod = $request->input('reportperiod');
        $request->session()->put('reportperiod', $reportperiod);
        $reporttype = $request->input('reporttype');
        $request->session()->put('reporttype', $reporttype);
    }


    public function store(Request $request)
    {
        //
    }


    public function show()
    {
        switch (session('reporttype')) {
            case 'Movement_Summary':
                switch (session('reportperiod')) {
                    case 'Daily':

                        break;
                    case 'Monthly':
                        $mpdf = new \Mpdf\Mpdf();
                        $mpdf->autoScriptToLang = true;
                        $mpdf->autoLangToFont = true;
                        $stylesheet = file_get_contents(url('admin/assets/css/stylereports_001.css'));
                        $html = $this->getMovementSummary();
                        $mpdf->WriteHTML($stylesheet, 1);
                        $mpdf->WriteHTML($html);
                        return redirect()->to($mpdf->Output('filename.pdf', 'I'));

                        break;
                    case 'Yearly':

                        break;

                    default:
                        # code...
                        break;
                }
                break;



            default:
                # code...
                break;
        }
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

    public function getMovementSummary()
    {

        // $data=array(DB::update("exec Sp_CarMovementReport @month ='" . session('monthly') . "' ,@year ='" . session('yearly') . "'"));

        $query = [
            'getMovementSummary' => collect(DB::select("SET NOCOUNT ON ; exec Sp_CarMovementReport @month ='" . session('monthly') . "' ,@year ='" . session('yearly') . "'"))
                ->groupBy('M_Department2')
                ->all(),
            'ReportTitle' => session('reporttype'),
            'month' => session('monthly'),
            'year' => session('yearly')
        ];
        return view('reports.getMovementSummary', collect($query));
    }

    public function testalaa()
    {
        $query = collect(DB::select("SET NOCOUNT ON ; exec Sp_CarMovementReport @month ='" . session('monthly') . "' ,@year ='" . session('yearly') . "'"));
        $groupby = $query->groupBy('M_Department2');
        $groupby->all();
        foreach ($groupby as $key => $value) {
            echo json_encode($value[0]->M_CarNo2);
            // for ($i=0; $i < count($value); $i++) {
            //      echo json_encode($value[$i]->M_CarNo2);
            // }

        }


        // return response()->json($query);
    }
}
