<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Comity extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='comity_tb';
    protected $fillable = [
        'id',
        'Guid',
        'ctype',
        'docno',
        'docdate',
        'notes',
        'filepath',
        'UserID',

    ];



}
