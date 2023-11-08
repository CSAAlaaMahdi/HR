<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Permissionname extends Model
{
    use HasFactory;
    protected $table='permissionnames';
    protected $fillable=[
        'P_Name',
        'P_UserName'
    ];
}
