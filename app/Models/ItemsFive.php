<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class ItemsFive extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='itemsfive';
    protected $fillable = [
            'IT5_FK_IT4',
            'IT5_ModelDate',
            'IT5_MatchingModels',
            'IT5_ModelOptions',
            'IT5_UserGuid'
    ];

    public function itemThree()
    {
        return $this->belongsTo(ItemsThree::class,'IT5_FK_IT4');
    }

}
