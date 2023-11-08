<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class BillSaleItems extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='billsaleitems';
    protected $fillable = [
        'BSI_FK_BS',
        'BSI_ItemName',
        'BSI_C_PartNumber',
        'BSI_Count',
        'BSI_CountType',
        'BSI_UnitPrice',
        'BSI_TotalMoney',
        'BSI_UserName'
    ];

    public function billSale()
    {
        return $this->belongsTo(BillSale::class,'BSI_FK_BS');
    }

 
}
