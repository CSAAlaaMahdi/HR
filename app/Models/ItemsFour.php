<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class ItemsFour extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='itemsfours';
    protected $fillable = [
            'IT4_FK_IT',
            'IT4_DateRange',
            'IT4_Model',
            'IT4_FramesOptions',
            'IT4_UserGuid'
    ];

    public function itemsFive()
    {
        return $this->hasMany(ItemsFive::class,'IT5_FK_IT4');
    }


}
