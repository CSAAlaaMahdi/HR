<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmployeeComity extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='emp_comity';
    protected $fillable = [
     'id','cid','eid','UserID',

    ];


}
