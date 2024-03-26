<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BondsSetting extends Model
{

    protected $table='Tb_Vou_Setting';
    protected $fillable=[
        'st_Guid',
        'Receipts_Type',
        'Acc_Guid',
        'Currency_Guid',
        'RowsNoGrid',
        'Debit_Visible',
        'Credit_Visible',
        'AcceptZero',
        'NoteAll_Visible',
        'Acc_Guid_Visible',
        'Note_Acc_Visible',
        'us_Guid',
        'No_Copy_Print',
        'Save_And_Print',
        'Show_Before_Print',
        'Print_Temp',
        'Branch_Guid',
        'txtUserVisible01',
        'txtUserVisible02',
        'txtUserVisible03',
        'txtUserVisible04',
        'txtUser01Optional',
        'txtUser02Optional',
        'txtUser03Optional',
        'txtUser04Optional',
        'CurrencyVisible',
        'BranchVisible',
        'CostVisible',
        'SaveAndNew',
    ];


}
