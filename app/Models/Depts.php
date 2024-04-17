<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Depts extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='dept_tb';
    protected $primaryKey = 'deptid';
    protected $keyType = 'integer';
    protected $fillable = [
        'deptname',

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
