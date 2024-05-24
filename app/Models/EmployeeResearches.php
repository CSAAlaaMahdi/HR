<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmployeeResearches extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='emp_research';
    protected $fillable = [
     'erid','Rid','Eid','EmpSeq','UserID'

    ];


}
