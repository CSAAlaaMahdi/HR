<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class AdministrationOrdersImages extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='Tb_AdministrationOrdersImages';
    protected $fillable = [
        'Aid',
        'FilePath',
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
