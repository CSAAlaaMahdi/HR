<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Children extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='children_tb';
    protected $fillable = [
        'eid',
        'chname',
        'chsex',
        'chdob',
        'csid',
        'filepath'

    ];

 

}
