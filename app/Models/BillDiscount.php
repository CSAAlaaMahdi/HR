<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BillDiscount extends Model
{

    protected $table='Tb_Bill_DisAdd';
    protected $primaryKey = 'Guid';
    protected $keyType = 'string';
    protected $fillable=[
        'Guid',
        'Header_Guid',
        'Account_Guid',
        'Dis_Amount',
        'Add_Amount',
        'Dis_Percent',
        'Add_Percent',
        'Notes',
        'Acc_Contra_Guid',
        'Currency_Guid',
        'Currency_Equal',
        'UserGuid',
        'RowIndex'
    ];

    public function billHeader()
    {
        return $this->belongsTo(BillHeader::class,'Header_Guid');
    }
}
