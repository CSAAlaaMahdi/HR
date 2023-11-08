<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Battrey extends Model
{


    protected $table='battreys';
    protected $fillable=[
        'B_Group',
        'B_Model',
        'B_Ref',
        'B_AH',
        'B_L',
        'B_R',
        'B_H',
        'B_Brand',
        'B_Price',
        'B_CarType',
        'B_Count',
        'B_QY'
    ];
}
