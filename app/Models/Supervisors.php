<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Supervisors extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='supervisor_tb';
    protected $fillable = [
        'eid',
        'Guid',
        'sdeg',
        'sname',
        'docno',
        'docdate',
        'filepath',
        'UserID'

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
