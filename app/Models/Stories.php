<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Stories extends Model
{

    protected $table='Tb_Stores';
    protected $primaryKey = 'St_Guid';
    protected $keyType = 'string';
    protected $fillable=[
        'St_Guid',
        'St_ParentGuid',
        'St_Code',
        'St_Name',
        'St_State',
        'St_Account',
        'St_IsGroup',
        'St_Address',
        'St_StoreKeeper',
        'St_Notes',
        'St_RowID',
        'St_UserName',

    ];
}
