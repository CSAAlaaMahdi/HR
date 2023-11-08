<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder;

class BillBuying extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='billbuying';
    protected $fillable = [
        'BB_BillNumber',
        'BB_BillDate',
        'BB_Customer',
        'BB_Provider',
        'BB_BillType',
        'BB_Currency',
        'BB_CurrencyCost',
        'BB_Credit',
        'BB_Debt',
        'BB_TotalMoney',
        'BB_StoreName',
        'BB_Notes',
        'BB_State',
        'BB_UserName'
    ];

    public function billBuyingItems()
    {
        return $this->hasMany(BillBuyingItems::class,'BI_FK_BB');
    }

}
