<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;


class ItemsThree extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    protected $table='itemsthrees';
    protected $fillable = [
            'IT2_FK_IT',
            'IT2_Count',
            'IT2_Count_Kind',
            'IT2_SmallestCount',
            'IT2_State',
            'IT2_StoreName',
            'IT2_BillGuid',
            'IT2_BillType',
            'IT2_ItemPositions',
            'IT2_UserGuid'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    // protected $hidden = [
    //     'U_Password',

    // ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    public function itemtwos()
    {
        return $this->belongsTo(Itemstwo::class,'IT2_FK_IT');
    }

}
