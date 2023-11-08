<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;



class Brand extends Model
{


    protected $table = 'Tb_Brands';
    protected $primaryKey = 'B_Guid';
    protected $keyType = 'string';
    protected $fillable = [
        'B_Name',
        'B_RowID',
        'B_UserGuid',
    ];

}
