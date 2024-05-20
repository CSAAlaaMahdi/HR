<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserGroupPermissions extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='userGroupPermissions_tb';
    protected $fillable = [
        'GroupName',
        'Status',
        'UserID',


    ];

   
}
