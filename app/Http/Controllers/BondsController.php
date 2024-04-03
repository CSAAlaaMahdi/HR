<?php

namespace App\Http\Controllers;

use App\Models\AccountTree;
use App\Models\Bonds;
use App\Models\BondsSetting;
use App\Models\Currency;
use Illuminate\Http\Request;
use Ramsey\Uuid\Uuid;


class BondsController extends Controller
{

    public function index(Request $request)
    {
        if (session()->has('User')) {
            $data = [
                'BondType' => $request->input('BondType'),
            ];
            return view('bonds.index', $data);
        }
    }


    public function create(Request $request)
    {
        $getBond = $request->input('B_Guid');
        $BondType = $request->input('BondType');
        $BondTypeSetting = BondsSetting::where('Form_Text', $BondType)->first();

        $data = [

            'getAccounts' => AccountTree::select('Guid', 'Ac_Name', 'Ac_Code_Mask')->orderBy('Ac_RowID', 'ASC')->get(),
            'getBonds' => Bonds::where('Guid', $getBond)->get(),
            'State' => $BondTypeSetting,

        ];
        return response()->json($data);
    }


    public function store(Request $request)
    {

        $Note = $request->post('B_Note');
        $DocNumber = $request->post('B_Doc_Number');
        $BondNumber = $request->post('B_Bond_Number');
        $Datex = $request->post('B_Datex');
        $Account = $request->post('B_Account');
        $StGuid = $request->post('B_st_Guid');
        $BondType = $request->post('B_Bond_Type');
        $CurrencyGuid = $request->post('B_Currency_Guid');
        $CurrencyEqual = $request->post('B_Currency_Equal');
        $IsBill = $request->post('B_IsBill');
        $IsAccept = $request->post('B_IsAccept');
        $IsLock = $request->post('B_IsLock');
        $IsPaidBill = $request->post('B_IsPaidBill');
        $txtUser01Optional = $request->post('B_txtUser01Optional');
        $txtUser02Optional = $request->post('B_txtUser02Optional');
        $txtUser03Optional = $request->post('B_txtUser03Optional');
        $txtUser04Optional = $request->post('B_txtUser04Optional');

        $BondBody = $request->post('Bond_Body');


        if (empty($BondBody)) {
        } else {
            $ParentGuidBody = "";
            // $Vou_Row_No = 0;
            $countZero = 0;
            for ($j = 0; $j < count($BondBody); $j++) {
                if ($BondBody[$j]['Guid'] === '00000000-0000-0000-0000-000000000000')
                    $countZero++;
            }
            if ($countZero == count($BondBody)) {

                $ParentGuidBody = strtoupper(Uuid::uuid4()->toString());
            } else {
                for ($k = 0; $k < count($BondBody); $k++) {
                    if ($BondBody[$k]['Parent_Guid'] !== '00000000-0000-0000-0000-000000000000') {
                        $ParentGuidBody = $BondBody[$k]['Parent_Guid'];
                    }
                }
            }
            for ($i = 0; $i < count($BondBody); $i++) {
                switch ($BondType) {
                    case "1":
                        $guidBody = $BondBody[$i]['Guid'];
                        if ($guidBody === '00000000-0000-0000-0000-000000000000') {
                            $guidBody = strtoupper(Uuid::uuid4()->toString());
                            $guidBodyGuid = strtoupper(Uuid::uuid4()->toString());
                            $guidBody2 = $ParentGuidBody;

                            $Vou_Row_No = Bonds::where([['Bond_Number', $BondNumber], ['st_Guid', $StGuid]])->max('Vou_Row_No');
                            if ($Vou_Row_No == null || $Vou_Row_No == 0) {
                                $Vou_Row_No = 0;
                            } else {
                                $Vou_Row_No = $Vou_Row_No + 1;
                            }



                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => $guidBody,

                                ],
                                [
                                    'Parent_Guid' => $guidBody2,
                                    'Bond_Number' => $BondNumber,
                                    'Doc_Number' => $DocNumber,
                                    'Acc_Guid' => $Account,
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $ParentGuidBody,
                                    'Datex' => $Datex,
                                    'Currency_Guid' => $CurrencyGuid,
                                    'Currency_Equal' => $CurrencyEqual,
                                    'st_Guid' => $StGuid,
                                    'Vou_Type' => $BondType,
                                    'Is_Bill' => $IsBill,
                                    'isAccept' => $IsAccept,
                                    'IsPaidBill' => $IsPaidBill,
                                    'isLock' => $IsLock,
                                    'Notes' => $Note,
                                    'NotesAll' => $BondBody[$i]['NotesAll'],
                                    'Credit' => 0,
                                    'Debit' => $BondBody[$i]['Credit'],
                                    'Vou_Row_No' => $Vou_Row_No,
                                    'txtUser01Optional' => $txtUser01Optional,
                                    'txtUser02Optional' => $txtUser02Optional,
                                    'txtUser03Optional' => $txtUser03Optional,
                                    'txtUser04Optional' => $txtUser04Optional,

                                ]
                            );
                            $Vou_Row_No++;
                            $Bond_Body2 =  Bonds::updateOrCreate(
                                [
                                    'Guid' => $guidBodyGuid,

                                ],
                                [
                                    'Parent_Guid' => $guidBody2,
                                    'Bond_Number' => $BondNumber,
                                    'Doc_Number' => $DocNumber,
                                    'Acc_Guid' => $BondBody[$i]['Acc_Guid'],
                                    'Acc_Contra_Guid' => $Account,
                                    'Source_Guid' => $ParentGuidBody,
                                    'Datex' => $Datex,
                                    'Currency_Guid' => $CurrencyGuid,
                                    'Currency_Equal' => $CurrencyEqual,
                                    'st_Guid' => $StGuid,
                                    'Vou_Type' => $BondType,
                                    'Is_Bill' => $IsBill,
                                    'isAccept' => $IsAccept,
                                    'IsPaidBill' => $IsPaidBill,
                                    'isLock' => $IsLock,
                                    'NotesAll' => $BondBody[$i]['NotesAll'],
                                    'Notes' => $Note,
                                    'Credit' => $BondBody[$i]['Credit'],
                                    'Debit' => 0,
                                    'Vou_Row_No' => $Vou_Row_No,
                                    'txtUser01Optional' => $txtUser01Optional,
                                    'txtUser02Optional' => $txtUser02Optional,
                                    'txtUser03Optional' => $txtUser03Optional,
                                    'txtUser04Optional' => $txtUser04Optional,

                                ]
                            );
                        } else {

                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => $guidBody,

                                ],
                                [
                                    'Acc_Guid' => $Account,
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Currency_Guid' => $CurrencyGuid,
                                    'Currency_Equal' => $CurrencyEqual,
                                    'Notes' => $Note,
                                    'NotesAll' => $BondBody[$i]['NotesAll'],
                                    'Credit' => 0,
                                    'Debit' => $BondBody[$i + 1]['Credit'],
                                ]
                            );

                            $i++;
                            $guidBodyGuid = $BondBody[$i]['Guid'];
                            $Bond_Body2 =  Bonds::updateOrCreate(
                                [
                                    'Guid' => $guidBodyGuid,

                                ],
                                [
                                    'Acc_Guid' => $BondBody[$i]['Acc_Guid'],
                                    'Acc_Contra_Guid' => $Account,
                                    'Currency_Guid' => $CurrencyGuid,
                                    'Currency_Equal' => $CurrencyEqual,
                                    'NotesAll' => $BondBody[$i]['NotesAll'],
                                    'Notes' => $Note,
                                    'Credit' => $BondBody[$i]['Credit'],
                                    'Debit' => 0,

                                ]
                            );
                        }
                        break;
                    case "2":
                        $guidBody = $BondBody[$i]['Guid'];
                        if ($guidBody === '00000000-0000-0000-0000-000000000000') {
                            $guidBody = strtoupper(Uuid::uuid4()->toString());
                            $guidBodyGuid = strtoupper(Uuid::uuid4()->toString());
                            $guidBody2 = $ParentGuidBody;

                            $Vou_Row_No = Bonds::where([['Bond_Number', $BondNumber], ['st_Guid', $StGuid]])->max('Vou_Row_No');
                            if ($Vou_Row_No == null || $Vou_Row_No == 0) {
                                $Vou_Row_No = 0;
                            } else {
                                $Vou_Row_No = $Vou_Row_No + 1;
                            }



                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => $guidBody,

                                ],
                                [
                                    'Parent_Guid' => $guidBody2,
                                    'Bond_Number' => $BondNumber,
                                    'Doc_Number' => $DocNumber,
                                    'Acc_Guid' => $Account,
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $ParentGuidBody,
                                    'Datex' => $Datex,
                                    'Currency_Guid' => $CurrencyGuid,
                                    'Currency_Equal' => $CurrencyEqual,
                                    'st_Guid' => $StGuid,
                                    'Vou_Type' => $BondType,
                                    'Is_Bill' => $IsBill,
                                    'isAccept' => $IsAccept,
                                    'IsPaidBill' => $IsPaidBill,
                                    'isLock' => $IsLock,
                                    'Notes' => $Note,
                                    'NotesAll' => $BondBody[$i]['NotesAll'],
                                    'Credit' => $BondBody[$i]['Debit'],
                                    'Debit' => 0,
                                    'Vou_Row_No' => $Vou_Row_No,
                                    'txtUser01Optional' => $txtUser01Optional,
                                    'txtUser02Optional' => $txtUser02Optional,
                                    'txtUser03Optional' => $txtUser03Optional,
                                    'txtUser04Optional' => $txtUser04Optional,

                                ]
                            );
                            $Vou_Row_No++;
                            $Bond_Body2 =  Bonds::updateOrCreate(
                                [
                                    'Guid' => $guidBodyGuid,

                                ],
                                [
                                    'Parent_Guid' => $guidBody2,
                                    'Bond_Number' => $BondNumber,
                                    'Doc_Number' => $DocNumber,
                                    'Acc_Guid' => $BondBody[$i]['Acc_Guid'],
                                    'Acc_Contra_Guid' => $Account,
                                    'Source_Guid' => $ParentGuidBody,
                                    'Datex' => $Datex,
                                    'Currency_Guid' => $CurrencyGuid,
                                    'Currency_Equal' => $CurrencyEqual,
                                    'st_Guid' => $StGuid,
                                    'Vou_Type' => $BondType,
                                    'Is_Bill' => $IsBill,
                                    'isAccept' => $IsAccept,
                                    'IsPaidBill' => $IsPaidBill,
                                    'isLock' => $IsLock,
                                    'NotesAll' => $BondBody[$i]['NotesAll'],
                                    'Notes' => $Note,
                                    'Credit' => 0,
                                    'Debit' => $BondBody[$i]['Debit'],
                                    'Vou_Row_No' => $Vou_Row_No,
                                    'txtUser01Optional' => $txtUser01Optional,
                                    'txtUser02Optional' => $txtUser02Optional,
                                    'txtUser03Optional' => $txtUser03Optional,
                                    'txtUser04Optional' => $txtUser04Optional,

                                ]
                            );
                        } else {

                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => $guidBody,

                                ],
                                [
                                    'Acc_Guid' => $Account,
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Currency_Guid' => $CurrencyGuid,
                                    'Currency_Equal' => $CurrencyEqual,
                                    'Notes' => $Note,
                                    'NotesAll' => $BondBody[$i]['NotesAll'],
                                    'Credit' => $BondBody[$i + 1]['Credit'],
                                    'Debit' => 0,
                                ]
                            );

                            $i++;
                            $guidBodyGuid = $BondBody[$i]['Guid'];
                            $Bond_Body2 =  Bonds::updateOrCreate(
                                [
                                    'Guid' => $guidBodyGuid,

                                ],
                                [
                                    'Acc_Guid' => $BondBody[$i]['Acc_Guid'],
                                    'Acc_Contra_Guid' => $Account,
                                    'Currency_Guid' => $CurrencyGuid,
                                    'Currency_Equal' => $CurrencyEqual,
                                    'NotesAll' => $BondBody[$i]['NotesAll'],
                                    'Notes' => $Note,
                                    'Credit' => 0,
                                    'Debit' => $BondBody[$i]['Credit'],

                                ]
                            );
                        }
                        break;
                    default:
                        $guidBody = $BondBody[$i]['Guid'];
                        if ($guidBody === '00000000-0000-0000-0000-000000000000') {
                            $guidBody = strtoupper(Uuid::uuid4()->toString());
                            $guidBodyGuid = strtoupper(Uuid::uuid4()->toString());
                            $guidBody2 = $ParentGuidBody;

                            $Vou_Row_No = Bonds::where([['Bond_Number', $BondNumber], ['st_Guid', $StGuid]])->max('Vou_Row_No');
                            if ($Vou_Row_No == null || $Vou_Row_No == 0) {
                                $Vou_Row_No = 0;
                            } else {
                                $Vou_Row_No = $Vou_Row_No + 1;
                            }



                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => $guidBody,
                                ],
                                [
                                    'Parent_Guid' => $guidBody2,
                                    'Bond_Number' => $BondNumber,
                                    'Doc_Number' => $DocNumber,
                                    'Acc_Guid' => $BondBody[$i]['Acc_Guid'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Source_Guid' => $ParentGuidBody,
                                    'Datex' => $Datex,
                                    'Currency_Guid' => $CurrencyGuid,
                                    'Currency_Equal' => $CurrencyEqual,
                                    'st_Guid' => $StGuid,
                                    'Vou_Type' => $BondType,
                                    'Is_Bill' => $IsBill,
                                    'isAccept' => $IsAccept,
                                    'IsPaidBill' => $IsPaidBill,
                                    'isLock' => $IsLock,
                                    'Notes' => $Note,
                                    'NotesAll' => $BondBody[$i]['NotesAll'],
                                    'Credit' => $BondBody[$i]['Credit'],
                                    'Debit' => $BondBody[$i]['Debit'],
                                    'Vou_Row_No' => $Vou_Row_No,
                                    'txtUser01Optional' => $txtUser01Optional,
                                    'txtUser02Optional' => $txtUser02Optional,
                                    'txtUser03Optional' => $txtUser03Optional,
                                    'txtUser04Optional' => $txtUser04Optional,

                                ]
                            );
                            $Vou_Row_No++;
                        } else {

                            $Bond_Body =  Bonds::updateOrCreate(
                                [
                                    'Guid' => $guidBody,
                                ],
                                [
                                    'Acc_Guid' => $BondBody[$i]['Acc_Guid'],
                                    'Acc_Contra_Guid' => '00000000-0000-0000-0000-000000000000',
                                    'Currency_Guid' => $CurrencyGuid,
                                    'Currency_Equal' => $CurrencyEqual,
                                    'Notes' => $Note,
                                    'NotesAll' => $BondBody[$i]['NotesAll'],
                                    'Credit' => $BondBody[$i]['Credit'],
                                    'Debit' => $BondBody[$i]['Debit'],
                                ]
                            );
                        }
                        break;
                }
            }
        }


        return response()->json(['status' => 'تم اجراء العملية بنجاح']);
    }


    public function show(Request $request)
    {
        // where('Acc_Contra_Guid','!=','00000000-0000-0000-0000-000000000000')->
        $B_Guid = $request->input('B_Guid');
        $B_Type = $request->input('B_Type');
        $getParentGuid = Bonds::where([['Bond_Number', $B_Guid], ['Vou_Type', $B_Type]])->select('Parent_Guid')->first()->Parent_Guid;
        $BondInfo = Bonds::where('Parent_Guid', $getParentGuid)->orderBy('Vou_Row_No')->get();

        $data = [
            'getBondBody' => $BondInfo,
        ];

        return response()->json($data);
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request)
    {
    }


    public function destroy(Request $request)
    {
        // $guid = $request->post('Guid');
        // if (BillBody::find($guid)) {
        //     $itemthreeGuid = ItemsThree::where('IT2_BillGuid', $guid)->first()->id;
        //     $itemGuid = ItemsThree::where('IT2_BillGuid', $guid)->first()->IT2_FK_IT;
        //     BillBody::find($guid)->delete();
        //     ItemsThree::find($itemthreeGuid)->delete();
        //     $this->updateItemCount($itemGuid);

        //     return response()->json(['status' => 'Deleting Successfully...']);
        // } else if (BillDiscount::find($guid)) {
        //     BillDiscount::find($guid)->delete();
        //     return response()->json(['status' => 'Deleting Successfully...']);
        // }
    }

    public function filldata(Request $request)
    {
        $BondType = $request->input('BondType');
        $getBondType = BondsSetting::where('Form_Text', $BondType)->first();
        $data = [
            'getAccounts' => AccountTree::select('Guid', 'Ac_Name', 'Ac_Code_Mask')->orderBy('Ac_RowID', 'ASC')->get(),
            'getCurrency' => Currency::all(),
            'defualtAccount' => $getBondType->Acc_Guid,
            'getBondsType' => BondsSetting::all(),
            'defualtCurrencyGuid' => $getBondType->CurrencyGuid,
            'defualtCurrencyEqual' => Currency::where('Cur_Guid', $getBondType->CurrencyGuid)->first()->Cur_Cost,
            'getBonds' => $getBondType,
            'getBondsNumbers' => Bonds::select('Bond_Number')->where('Vou_Type', $getBondType->id)->groupBy('Bond_Number')->get(),
        ];
        return response()->json($data);
    }

    public function getBondNumber(Request $request)
    {
        $BondType = $request->input('BondType');
        $BondNumber = Bonds::where('Vou_Type', $BondType)->max('Bond_Number');
        $data = [
            'BondNumber' => $BondNumber ? $BondNumber : 0,
        ];
        return response()->json($data);
    }

    // Print Bond ............
    function CreatePrint(Request $request)
    {
        // $parentGuid = $request->input('ParentGuid');
        $BondNumber = $request->input('BondNumber');
        $BondType = $request->input('BondType');
        $request->session()->put('Bond_Number', $BondNumber);
        $request->session()->put('Bond_Type', $BondType);
    }

    function BondPrint(Request $request)
    {

        $mpdf = new \Mpdf\Mpdf([
            'mode' => 'utf-8',
            'format' => 'A4',
            'margin_left' => 0,
            'margin_right' => 0,
            'margin_top' => 50,
            'margin_bottom' => 10,
            'margin_header' => 3,
            'margin_footer' => 5,
        ]);
        $mpdf->autoScriptToLang = true;
        $mpdf->autoLangToFont = true;
        $footer = $this->Setfooter();
        $header = $this->Setheader();
        $mpdf->SetHTMLHeader($header);
        $mpdf->SetHTMLFooter($footer);
        $stylesheet = file_get_contents(url('assets/css/Pro_css/PrintBond.css'));
        try {
            $html = $this->PrintPage();
            $mpdf->WriteHTML($stylesheet, 1);
            $mpdf->WriteHTML($html);
            return redirect()->to($mpdf->Output('filename.pdf', 'I'));
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function PrintPage()
    {
        $BondType = session('Bond_Type');
        $BondNumber = session('Bond_Number');

        switch ($BondType) {
            case '1':
                $Bond = Bonds::select('Tb_Vou.*', 'accounttreemains.Ac_Code_Mask as Acc_MaskCode')
                    ->join('accounttreemains', 'Tb_Vou.Acc_Guid', '=', 'accounttreemains.Guid')
                    ->where([
                        ['Vou_Type', $BondType],
                        ['Bond_Number', $BondNumber],
                        ['Credit', '<>', 0]
                    ])->orderBy('Vou_Row_No')->get()
                    ->map(function ($item) {
                        $item['Currency_Guid'] = Currency::find($item['Currency_Guid'])->Cur_Name;
                        $item['Acc_Guid'] = AccountTree::find($item['Acc_Guid'])->Ac_Name;
                        return $item;
                    });
                $collection = collect($Bond);
                $query = [
                    'Bond' => $Bond,
                    'TotalMoney' => $collection->pluck('Credit')->sum(),

                ];


                return view('bonds.bondPrint', $query);
                break;

            case '2':
                $Bond = Bonds::select('Tb_Vou.*', 'accounttreemains.Ac_Code_Mask as Acc_MaskCode')
                    ->join('accounttreemains', 'Tb_Vou.Acc_Guid', '=', 'accounttreemains.Guid')
                    ->where([
                        ['Vou_Type', $BondType],
                        ['Bond_Number', $BondNumber],
                        ['Debit', '<>', 0]
                    ])->orderBy('Vou_Row_No')->get()
                    ->map(function ($item) {
                        $item['Currency_Guid'] = Currency::find($item['Currency_Guid'])->Cur_Name;
                        $item['Acc_Guid'] = AccountTree::find($item['Acc_Guid'])->Ac_Name;
                        return $item;
                    });
                // $collection = collect($Bond);
                $query = [
                    'Bond' => $Bond,
                    'TotalMoney' => $Bond->pluck('Debit')->sum(),
                    'NW' => $this->convert_number_to_words($Bond->pluck('Debit')->sum())
                ];


                return view('bonds.bondPrint', $query);
                break;
            default:
                # code...
                break;
        }
    }

    public function Setheader()
    {
        $BondType = session('Bond_Type');
        $BondName = BondsSetting::find($BondType)->Form_Text;
        $query = [
            'BondName' => $BondName,
        ];
        return view('bonds.bondHeader', $query)->render();
    }

    public function Setfooter()
    {
        return view('bonds.bondFooter')->render();
    }

    // Convert Numbers to Words....
    public function convert_number_to_words($number)
    {

        $hyphen = ' و ';
        $conjunction = ' و ';
        $separator = ' و ';
        $negative = 'negative ';
        $decimal = ' and Cents ';
        $dictionary = array(
            0 => 'صفر',
            1 => 'واحد',
            2 => 'اثنان',
            3 => 'ثلاثة',
            4 => 'اربعة',
            5 => 'خمسة',
            6 => 'ستة',
            7 => 'سبعة',
            8 => 'ثمانية',
            9 => 'تسعة',
            10 => 'عشرة',
            11 => 'احد عشر',
            12 => 'اثنى عشر',
            13 => 'ثلاثة عشر',
            14 => 'اربعة عشر',
            15 => 'خمسة عشر',
            16 => 'ستة عشر',
            17 => 'سبعة عشر',
            18 => 'ثمانية عشر',
            19 => 'تسعة عشر',
            20 => 'عشرون',
            30 => 'ثلاثون',
            40 => 'اربعون',
            50 => 'خمسون',
            60 => 'ستون',
            70 => 'سبعون',
            80 => 'ثمانون',
            90 => 'تسعون',
            100 => 'مائة',
            1000 => 'الف',
            1000000 => 'مليون',
        );

        if (!is_numeric($number)) {
            return false;
        }

        if ($number < 0) {
            return $negative . $this->convert_number_to_words(abs($number));
        }

        $string = $fraction = null;

        if (strpos($number, '.') !== false) {
            list($number, $fraction) = explode('.', $number);
        }

        switch (true) {
            case $number < 21:
                $string = $dictionary[$number];
                break;
            case $number < 100:
                $tens = ((int)($number / 10)) * 10;
                $units = $number % 10;

                if ((int)($number) % 10 == 0) {
                    $string = $dictionary[$tens];
                } else {
                    $string = $dictionary[$units];
                    if ($units) {
                        $string .= $hyphen . $dictionary[$tens];
                    }
                }

                break;
            case $number < 1000:
                $hundreds = $number / 100;
                $remainder = $number % 100;

                if ((int)($number / 100) == 1) {
                    $string = $dictionary[100];
                    if ($remainder) {
                        $string .= $conjunction . $this->convert_number_to_words($remainder);
                    }
                } elseif ((int)($number / 100) == 2) {
                    $string = 'مائتان';
                    if ($remainder) {
                        $string .= $conjunction . $this->convert_number_to_words($remainder);
                    }
                } else {
                    $string = $dictionary[$hundreds] . ' ' . $dictionary[100];
                    if ($remainder) {
                        $string .= $conjunction . $this->convert_number_to_words($remainder);
                    }
                }



                break;
            default:
                $baseUnit = pow(1000, floor(log($number, 1000)));
                $numBaseUnits = (int)($number / $baseUnit);
                $remainder = $number % $baseUnit;
                if ((int)($baseUnit) == 1000) {
                    if ((int)($numBaseUnits)  == 1) {
                        $string = $dictionary[$baseUnit];
                        if ($remainder) {
                            $string .= $remainder < 100 ? $conjunction : $separator;
                            $string .= $this->convert_number_to_words($remainder);
                        }
                    } elseif ((int)($numBaseUnits)  == 2) {
                        $string = 'الفان';
                        if ($remainder) {
                            $string .= $remainder < 100 ? $conjunction : $separator;
                            $string .= $this->convert_number_to_words($remainder);
                        }
                    } else {
                        $string = $this->convert_number_to_words($numBaseUnits) . ' ' . $dictionary[$baseUnit];
                        if ($remainder) {
                            $string .= $remainder < 100 ? $conjunction : $separator;
                            $string .= $this->convert_number_to_words($remainder);
                        }
                    }
                } elseif ((int)($baseUnit) == 1000000) {
                    if ((int)($numBaseUnits)  == 1) {
                        $string = $dictionary[$baseUnit];
                        if ($remainder) {
                            $string .= $remainder < 100 ? $conjunction : $separator;
                            $string .= $this->convert_number_to_words($remainder);
                        }
                    } elseif ((int)($numBaseUnits)  == 2) {
                        $string = 'مليونان';
                        if ($remainder) {
                            $string .= $remainder < 100 ? $conjunction : $separator;
                            $string .= $this->convert_number_to_words($remainder);
                        }
                    } else {
                        $string = $this->convert_number_to_words($numBaseUnits) . ' ' . $dictionary[$baseUnit];
                        if ($remainder) {
                            $string .= $remainder < 100 ? $conjunction : $separator;
                            $string .= $this->convert_number_to_words($remainder);
                        }
                    }
                }




                // $string = $this->convert_number_to_words($numBaseUnits) . ' ' . $dictionary[$baseUnit];
                // if ($remainder) {
                //     $string .= $remainder < 100 ? $conjunction : $separator;
                //     $string .= $this->convert_number_to_words($remainder);
                // }
                break;
        }

        if (null !== $fraction && is_numeric($fraction)) {
            $string .= $decimal;
            $words = array();
            foreach (str_split((string)$fraction) as $number) {
                $words[] = $dictionary[$number];
            }
            $string .= implode(' ', $words);
        }

        return $string;
    }
}
