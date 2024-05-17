<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dispatch extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='dispatch_tb';
    protected $fillable = [
        'eid',
        'Guid',
        'dtype',
        'ddirection',
        'datefrom',
        'dateto',
        'docno',
        'docdate',
        'notes',
        'filepath',
        'UserID',

    ];

    public function DispatchAttachments()
    {
        return $this->hasMany(Attachments::class,'ParentGuid','Guid');
    }
}
