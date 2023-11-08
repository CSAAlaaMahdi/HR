<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;



class Car extends Model
{


    protected $fillable = [
        'vin', 'make', 'model', 'year','vds','spare_parts'
    ];

}
