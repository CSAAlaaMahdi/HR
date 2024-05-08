<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Certifications extends Model
{


    protected $table='certification_data';
    protected $primaryKey = 'cid';
    protected $keyType = 'integer';
    protected $fillable=[
        'eid',
        'Guid',
        'certification',
        'college',
        'university',
        'country',
        'cyear',
        'gspetailest',
        'sspetailest',
        'cer_no',
        'cerdate',
        'equivlent_no',
        'equivlent_date',
        'filepath',
        'UserID',
        

        
    ];
}
