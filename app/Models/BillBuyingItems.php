<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;

class BillBuyingItems extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='billbuyingitems';
    protected $fillable = [
        'BI_FK_BB',
        'BI_ItemName',
        'BI_PartNumber',
        'BI_Count',
        'BI_CountType',
        'BI_UnitPrice',
        'BI_TotalMoney',
        'BI_Currency',
        'BI_UnitPriceC',
        'BI_TotalMoneyC',
        'BI_UserName'
    ];

    public function billBuying()
    {
        return $this->belongsTo(BillBuying::class,'BI_FK_BB');
    }

    public function itemstwo()
    {
        return $this->hasOne(Itemstwo::class,'IT_PartNumber','BI_PartNumber');
    }
}
