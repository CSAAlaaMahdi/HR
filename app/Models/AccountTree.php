<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AccountTree extends Model
{
    use HasFactory;

    protected $table='accounttreemains';
    protected $primaryKey = 'Guid';
    protected $keyType = 'string';
    protected $fillable=[
        'Guid',
        'Parent_Guid',
        'Ac_Code_Mask',
        'Ac_Name',
        'Ac_Debt',
        'Ac_Credit',
        'Ac_Type',
        'Ac_Icon1',
        'Ac_Icon2',
        'Ac_RowID',
        'Ac_UserGuid',
        'Branch_Guid'

    ];
}
