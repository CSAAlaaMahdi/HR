<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Places extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='place_tb';
    protected $primaryKey = 'ID';
    protected $keyType = 'integer';
    protected $fillable = [
        'perID',
        'placeName',

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
