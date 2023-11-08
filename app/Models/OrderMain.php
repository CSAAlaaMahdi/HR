<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderMain extends Model
{


    protected $table='ordermain';
    protected $fillable=[
        'Orm_OrderNo',
        'Orm_OrderDate',
        'Orm_Company',
        'Orm_Model',
        'Orm_VIN',
        'Orm_Description',
        'Orm_ItemsType',
        'Orm_Complete',
        'Orm_UserName'
    ];

}
