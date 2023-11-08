<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class OrderSecondary extends Model
{
    protected $table='ordersecondary';
    protected $fillable=[
        'Ors_FK_Orm',
        'Ors_ItemName',
        'Ors_PartNumber',
        'Ors_Quantity',
        'Ors_Notes',
        'Ors_UserName'
    ];
}
