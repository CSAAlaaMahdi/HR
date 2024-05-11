<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Positions extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='emp_poss';
    protected $fillable = [
        'eid',
        'Guid',
        'ptypeid',
        'pname',
        'docno',
        'docdate',
        'datefrom',
        'dateto',
        'filepath',
        'UserID'

    ];

    public function PositionsAttachments()
    {
        return $this->hasMany(Attachments::class,'ParentGuid','Guid');
    }

}
