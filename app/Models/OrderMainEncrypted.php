<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Crypt;
use ESolution\DBEncryption\Traits\EncryptedAttribute;

class OrderMainEncrypted extends Model
{

    use EncryptedAttribute;
    protected $table = 'orderMain';

    protected $fillable = [
        'Orm_OrderNo',
        'Orm_OrderDate',
        'Orm_Company',
        'Orm_Model',
        'Orm_VIN',
        'Orm_Description',
        'Orm_ItemsType',
        'Orm_UserName'
    ];
    protected $encryptable = [
        'Orm_Company'
    ];
    // ()
    // {

    //     return $data;
    // }

}
