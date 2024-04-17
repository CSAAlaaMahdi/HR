<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comity extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='comity_tb';
    protected $fillable = [
        'ctype',
        'docno',
        'docdate',
        'notes',
        'filepath'

    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    // protected $hidden = [
    //     'U_Password',

    // ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */

}
