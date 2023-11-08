<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SalesGroup extends Model
{
    use HasFactory;

    protected $table='Tb_SalingGroups';
    protected $primaryKey = 'Gs_Guid';
    protected $keyType = 'string';
    protected $fillable=[
        'Gs_Name',
        'Gs_State',
        'Gs_SalesRatio',
        'Gs_RowID',
        'Gs_UserName',
    ];
}
