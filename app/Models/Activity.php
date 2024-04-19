<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Activity extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='activity_tb';
    protected $primaryKey = 'aid';
    protected $keyType = 'integer';
    protected $fillable = [
        'act_id',
        'Aname',
        'Place',
        'ActDate',
        'NoDays',
        'Participants',
        'Notes',
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
