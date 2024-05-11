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
        'Guid',
        'article_title',
        'nof_aut',
        'pub_date',
        'Alink',
        'filepath',
        'UserID'

    ];

    public function ArticlesAttachments()
    {
        return $this->hasMany(Attachments::class,'ParentGuid','Guid');
    }

}
