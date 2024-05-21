<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserPermissions extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='userPermissions_tb';
    protected $fillable = [
        'GroupID',
        'FormName',
        'Enable',
        'OptionAdd',
        'OptionEdit',
        'OptionDel',
        'ReadOnly',
        'UserID',


    ];

   
}
