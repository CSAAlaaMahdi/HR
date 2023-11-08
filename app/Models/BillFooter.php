<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BillFooter extends Model
{

    protected $table='Tb_Bill_Footer';
    protected $primaryKey = 'Guid';
    protected $keyType = 'string';
    protected $fillable=[
        'Guid',
        'Header_Guid',
        'Total_Price_Bill',
        'Total_Discount',
        'Item_Discount',
        'Bill_Discount',
        'Net_Price_Bill',
        'Bill_AddAmount',
        'Item_Add',
        'Total_Add',
        'UserGuid',
        'Currency_Guid',
        'Currency_Equal',
        'Branch_Guid',
        'RowID'


    ];

    public function billHeader()
    {
        return $this->belongsTo(BillHeader::class,'Header_Guid');
    }
}
