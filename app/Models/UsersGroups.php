<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UsersGroups extends Model
{


    protected $table='Tb_UsersGroups';
    protected $primaryKey = 'UG_Guid';
    protected $keyType = 'string';
    protected $fillable=[
        'UG_Guid',
        'UG_Name',
        'UG_State',
        'UG_UserName',
        'UG_RowID'
    ];
}
