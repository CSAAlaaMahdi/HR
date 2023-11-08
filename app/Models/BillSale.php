<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class BillSale extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='billsale';
    protected $fillable = [
        'BS_BillNumber',
        'BS_BillDate',
        'BS_Customer',
        'BS_Provider',
        'BS_BillType',
        'BS_Currency',
        'BS_CurrencyCost',
        'BS_Credit',
        'BS_Debt',
        'BS_TotalMoney',
        'BS_StoreName',
        'BS_Notes',
        'BS_State',
        'BS_UserName'
    ];

    public function billSaleItems()
    {
        return $this->hasMany(BillSaleItems::class,'BSI_FK_BS');
    }

}
