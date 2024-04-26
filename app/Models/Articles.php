<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Articles extends Model
{


    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $table='article_tb';
    protected $fillable = [
        'did',
        'article_title',
        'nof_aut',
        'pub_date',
        'Alink',
        'filepath'

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

}
