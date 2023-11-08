<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;



class BillsType extends Model
{


    protected $table = 'Tb_BillsNames';
    protected $primaryKey = 'Guid';
    protected $keyType = 'string';
    protected $fillable = [
        'N_BillName',
        'N_AccountName',
        'N_Acc_Guid',
    ];

}
