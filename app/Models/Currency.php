<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Currency extends Model
{


    protected $table = 'Tb_Currency';
    protected $primaryKey = 'Cur_Guid';
    protected $keyType = 'string';
    protected $fillable = [
        'Cur_Name',
        'Cur_Cost',
        'Cur_IsMain',
        'Cur_RowID',
        'Cur_UserGuid',
    ];

}
