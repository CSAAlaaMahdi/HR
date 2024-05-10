<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Thanks extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='thanks_tb';
    protected $fillable = [
        'eid',
        'Guid',
        'ttype',
        'reason',
        'docno',
        'docdate',
        'notes',
        'filepath',
        'UserID',

    ];

    public function ThanksAttachments()
    {
        return $this->hasMany(Attachments::class,'ParentGuid','Guid');
    }
}
