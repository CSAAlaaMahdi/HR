<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Query\Builder;

class Itemstwo extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */

    protected $table='itemstwos';
    protected $fillable = [
            'IT_ParentID',
            'IT_Code',
            'IT_Name',
            'IT_ArabicName',
            'IT_PartNumber',
            'IT_PartNumber2',
            'IT_C_PartNumber',
            'IT_GenuinePartNumber',
            'IT_Company',
            'IT_Brand',
            'IT_Kind',
            'IT_State',
            'IT_Ask_Stop',
            'IT_Description',
            'IT_Notes',
            'IT_Dim',
            'IT_Color',
            'IT_CountIn',
            'IT_ItemCount',
            'IT_Higx',
            'IT_Lowx',
            'IT_Image',
            'IT_ItemUnit',
            'IT_ItemUnit2',
            'IT_ItemUnit3',
            'IT_Factory2',
            'IT_Factory3',
            'IT_ItemUnitDefualt',
            'IT_ItemUnit2Defualt',
            'IT_ItemUnit3Defualt',
            'IT_Normal_1_1',
            'IT_Mid_1_1',
            'IT_Good_1_1',
            'IT_VeryGood_1_1',
            'IT_Excellent_1_1',
            'IT_Supper_1_1',
            'IT_Normal_2_1',
            'IT_Mid_2_1',
            'IT_Good_2_1',
            'IT_VeryGood_2_1',
            'IT_Excellent_2_1',
            'IT_Supper_2_1',
            'IT_Normal_3_1',
            'IT_Mid_3_1',
            'IT_Good_3_1',
            'IT_VeryGood_3_1',
            'IT_Excellent_3_1',
            'IT_Supper_3_1',
            'IT_Tree',
            'IT_CurrencyGuid',
            'IT_CurrencyGuid2',
            'IT_CurrencyTrans',
            'IT_UserName'
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
    public function itemsthrees()
    {
        return $this->hasMany(ItemsThree::class,'IT2_FK_IT');
    }
    public function itemsBarcode()
    {
        return $this->hasMany(Itemstwo::class,'ITB_FK_IT');
    }

    public function billbuyingitems(){
        return $this->belongsTo(BillBuyingItems::class,'BI_PartNumber','IT_PartNumber');
    }
}
