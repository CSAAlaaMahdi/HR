<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmployeesAttachments extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='emp_attach';
    protected $fillable = [
        'id',
        'eid',
        'Guid',
        'Title',
        'UserID',
    ];



}
