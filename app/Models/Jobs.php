<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Jobs extends Model
{


    protected $table='emp_job';
    protected $primaryKey = 'jid';
    protected $keyType = 'integer';
    protected $fillable=[
        'eid',
        'jtitle',
        'jdegree',
        'jstage',
        'getdate',
        'docno',
        'docdate',
        'filepath'
    ];
}
