<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ItemsBarcode extends Model
{


    protected $table='itemsBarcode';
    protected $fillable=[
        'ITB_FK_IT',
        'ITB_Barcode',
        'ITB_UserName',

    ];

    public function itemsBarcode()
    {
        return $this->belongsTo(Itemstwo::class,'ITB_FK_IT');
    }
}
