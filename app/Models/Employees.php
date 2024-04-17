<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employees extends Model
{


    protected $table='emp_data';
    protected $primaryKey = 'eid';
    protected $keyType = 'integer';
    protected $fillable=[
        'firstname',
        'secondname',
        'thirdname',
        'forthname',
        'surname',
        'mothername',
        'gender',
        'mobile',
        'email',
        'governorate',
        'addres',
        'bplace',
        'dob',
        'bloodtype',
        'MaritalStatus',
        'wifejobe',
        'idno',
        'iddate',
        'issueplace',
        'idcerno',
        'idcerdate',
        'homeid',
        'homedate',
        'rationo',
        'jclass',
        'jcategory',
        'hiredate',
        'moh_wdate',
        'rehiredate',
        'notes',
        'photo',
        'fullname',
        'deptid',
        'empno',
        'genralspt',
        'spacifspt',
        'active',
        
    ];
}