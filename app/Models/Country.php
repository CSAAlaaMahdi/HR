<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{


    protected $table = 'Tb_Country';
    protected $primaryKey = 'C_Guid';
    protected $keyType = 'string';
    protected $fillable = [
        'C_Name',
        'C_RowID',
        'C_UserGuid',
    ];

}
