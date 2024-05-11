<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Supervisors extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='supervisor_tb';
    protected $fillable = [
        'eid',
        'Guid',
        'sdeg',
        'sname',
        'docno',
        'docdate',
        'filepath',
        'UserID'

    ];

    public function SupervisorsAttachments()
    {
        return $this->hasMany(Attachments::class,'ParentGuid','Guid');
    }

}
