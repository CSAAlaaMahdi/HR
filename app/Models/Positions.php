<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Positions extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='emp_poss';
    protected $fillable = [
        'eid',
        'ptypeid',
        'pname',
        'docno',
        'docdate',
        'datefrom',
        'dateto',
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
