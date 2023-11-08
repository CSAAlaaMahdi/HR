<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
    use HasFactory;

    protected $table='userspermissions';
    protected $fillable=[
        'Pe_User_ID',
        'Pe_FrameName',
        'Pe_Add',
        'Pe_Update',
        'Pe_Delete',
        'Pe_Show',
        'Pe_Print',
        'Pe_UserName',

    ];
}
