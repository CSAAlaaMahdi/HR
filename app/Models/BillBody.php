<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BillBody extends Model
{

    protected $table='Tb_Bill_Body';
    protected $primaryKey = 'Guid';
    protected $keyType = 'string';
    protected $fillable=[
        'Guid',
        'Header_Guid',
        'Item_Guid',
        'Item_Qty1',
        'Item_Qty2',
        'Item_Qty3',
        'Item_Price',
        'Item_Price_Total',
        'Item_Discount',
        'Item_Extra',
        'Item_number',
        'Item_Unit',
        'Item_Count',
        'User_Guid',
        'Store_Guid',
        'StoreAccountGuid',
        'Currency_Guid',
        'Currency_Equal',
        'ProductionDate',
        'ExpireDate',
        'BonusQty',
        'Profits',
        'Item_Price_Final',
        'SeqGuid',
        'Branch_Guid',
        'Avg_Price',
        'CostPrice',
        'Item_Barcode',
        'RowID'


    ];

    public function billHeader()
    {
        return $this->belongsTo(BillHeader::class,'Header_Guid');
    }
    // public function getItem_GuidAttribute($value)
    // {
    //     $value = 5; //Itemstwo::where('id',$value)->select('IT_Name')->first();
    //     return $value;
    // }
    public function getRowIDAttribute($value)
    {
        // Format the price and add currency symbol
        return '$' . number_format($value, 2);
    }

}
