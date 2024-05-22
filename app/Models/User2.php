<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User2 extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='users_tb';
    protected $primaryKey = 'userid';
    protected $keyType = 'integer';
    protected $fillable = [
        'loginname',
        'username',
        'pwd',
        // 'ulvl',
        'deptid',
        // 'userPassW',
        'GroupID',
    ];

    // protected $casts = [
    //     'pwd'=> 'hashed',
    // ];


}
