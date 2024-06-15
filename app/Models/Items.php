<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Items extends Model
{



    protected $table='Tb_Store';
    protected $fillable = [
        'ParentID',
        'ItemName',
        'ItemCode',
        'Brand',
        'ItemUnit',
        'Quantity',
        'ItemPlace',
        'ItemStatus',
        'IsGroup',
        'Description',

    ];



}
