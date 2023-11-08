<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CustomerSupplier extends Model
{

    protected $table='Tb_CustomerSupplier';
    protected $primaryKey = 'Cs_Guid';
    protected $keyType = 'string';
    protected $fillable=[
        'Cs_Guid',
        'Cs_Name',
        'Cs_State',
        'Cs_GroupSales',
        'Cs_Address',
        'Cs_Email',
        'Cs_Mobile',
        'Cs_Account',
        'Cs_Notes',
        'Cs_RowID',
        'Cs_Type',
        'Cs_UserName',

    ];
}
