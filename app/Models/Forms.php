<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Forms extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='forms_tb';
    protected $fillable = [
        'FormName',


    ];

   
}
