<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasApiTokens, HasFactory, Notifiable;

    protected $table = 'Tb_Company';
    protected $primaryKey = 'Com_Guid';
    protected $keyType = 'string';
    protected $fillable = [
        'Com_Name',
        'Com_RowID',
        'Com_UserGuid',
    ];

}
