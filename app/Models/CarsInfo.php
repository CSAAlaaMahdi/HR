<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class CarsInfo extends Model
{

    protected $table='Tb_CarsInfo';
    protected $primaryKey = 'Guid';
    protected $keyType = 'string';
    protected $fillable=[
        'Guid',
        'Parent_Guid',
        'Company',
        'CarType',
        'CylinderCount',
        'Engine',
        'EngineType',
        'FuelSystem',
        'Transmission',
        'VIN',
        'Year',
        'Brand',
        'CarCount',
        'Notes',
        'RowID',

    ];


}
