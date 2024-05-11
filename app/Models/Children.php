<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Children extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='children_tb';
    protected $fillable = [
        'eid',
        'Guid',
        'chname',
        'chsex',
        'chdob',
        'csid',
        'filepath'

    ];
    public function ChildrenAttachments()
    {
        return $this->hasMany(Attachments::class,'ParentGuid','Guid');
    }


}
