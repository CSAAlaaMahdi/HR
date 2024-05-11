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
        'Guid',
        'jtitle',
        'jdegree',
        'jstage',
        'getdate',
        'docno',
        'docdate',
        'filepath',
        'UserID'
    ];

    public function JobsAttachments()
    {
        return $this->hasMany(Attachments::class,'ParentGuid','Guid');
    }
}
