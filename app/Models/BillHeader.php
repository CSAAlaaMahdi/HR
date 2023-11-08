<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BillHeader extends Model
{

    protected $table='Tb_Bill_Header';
    protected $primaryKey = 'Guid';
    protected $keyType = 'string';
    protected $fillable=[
        'Guid',
        'Acc_Guid',
        'Cust_Guid',
        'Store_Guid',
        'Branch_Guid',
        'Bill_Type',
        'Bill_Number',
        'Bill_Date',
        'Pay_Type',
        'Price_Group',
        'Currency_Guid',
        'Currency_Equal',
        'Cash_Amount',
        'isLock',
        'isAccept',
        'isMaintenance',
        'isPaid',
        'LockDate',
        'AcceptDate',
        'Bill_ID',
        'Note_Header',
        'UserGuid'

    ];

    public function billBody()
    {
        return $this->hasMany(BillBody::class,'Header_Guid');
    }
    public function billFooter()
    {
        return $this->hasMany(BillFooter::class,'Header_Guid');
    }
}
