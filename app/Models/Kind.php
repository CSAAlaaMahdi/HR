<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class Kind extends Model
{


    protected $table = 'Tb_Kind';
    protected $primaryKey = 'K_Guid';
    protected $keyType = 'string';
    protected $fillable = [
        'K_Name',
        'K_RowID',
        'K_UserGuid',
    ];

}
