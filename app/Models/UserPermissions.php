<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class UserPermissions extends Authenticatable
{



    protected $table='userPermissions_tb';
    protected $fillable = [
        'userid',
        'form',
        'enable',
        'readOnly',
        'readWrite',
        'deleteOption',

    ];

    


}
