<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Disapear extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='disapear_tb';
    protected $primaryKey = 'rid';
    protected $keyType = 'integer';
    protected $fillable = [
        'eid',
        'Guid',
        'rtype',
        'ndirection',
        'duration_from',
        'duration_to',
        'docno',
        'docdate',
        'notes',
        'filepath',
        'UserID',

    ];

    public function DisapearAttachments()
    {
        return $this->hasMany(Attachments::class,'ParentGuid','Guid');
    }
}
