<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BondsSetting extends Model
{

    protected $table='Tb_Vou_Setting';
    protected $fillable=[
        'st_Guid',
        'Receipts_Type',
        'Form_Text',
        'Acc_Guid',
        'Currency_Guid',
        'RownoGrid',
        'AcceptZero',
        'BodyColorOdd',
        'BodyColorEven',
        'NoteAll_Visible',
        'Acc_Guid_Visible',
        'Note_Acc_Visible',
        'Debit_Visible',
        'Credit_Visible',
        'us_Guid',

    ];


}
