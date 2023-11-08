<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bonds extends Model
{

    protected $table='Tb_Vou';
    protected $primaryKey = 'Guid';
    protected $keyType = 'string';
    protected $fillable=[
        'Guid',
        'Bond_Number',
        'Parent_Guid',
        'Doc_Number',
        'Acc_Guid',
        'Acc_Contra_Guid',
        'Source_Guid',
        'Debit',
        'Credit',
        'Notes',
        'NotesAll',
        'Datex',
        'Is_Bill',
        'Vou_Type',
        'Vou_Row_No',
        'Currency_Guid',
        'Currency_Equal',
        'st_Guid',
        'isLock',
        'isAccept',
        'isPaidBill',
        'us_Guid',
        'Branch_Guid'

    ];


}
