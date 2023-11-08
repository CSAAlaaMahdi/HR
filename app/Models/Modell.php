<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Modell extends Model
{


    protected $table = 'Tb_Models';
    protected $primaryKey = 'M_Guid';
    protected $keyType = 'string';
    protected $fillable = [
        'M_Name',
        'M_RowID',
        'M_UserGuid',
    ];

}
