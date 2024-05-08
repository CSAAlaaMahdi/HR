<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vacations extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='vaction_tb';
    protected $primaryKey = 'vcid';
    protected $keyType = 'integer';
    protected $fillable = [
        'eid',
        'Guid',
        'vtid',
        'vdate',
        'nodays',
        'docno',
        'docdate',
        'filepath',
        'UserID',


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
