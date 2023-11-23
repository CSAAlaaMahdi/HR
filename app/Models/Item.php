<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Item extends Model
{


    protected $table='items';
    protected $fillable=[
        'IT_ItemType',
        'IT_ItemName',
        'IT_PartNumber',
        'IT_QY',
        'IT_CarType',
        'IT_Engine',
        'IT_ModelCode',
        'IT_FuelSystem',
        'IT_Transmission',
        'IT_CarNo',
        'IT_VIN',
        'IT_Year',
        'IT_Notes',
    ];
}
