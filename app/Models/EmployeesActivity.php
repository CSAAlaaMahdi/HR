<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EmployeesActivity extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='emp_activity';
    protected $fillable = [
     'eaid','aid','eid','atype','UserID',

    ];

    public function GetActivity()
    {
        return $this->hasMany(Activity::class,'aid','aid');
    }
}
