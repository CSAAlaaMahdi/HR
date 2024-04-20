<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Researches extends Model
{


    protected $table='research_tb';
    protected $primaryKey = 'rid';
    protected $keyType = 'integer';
    protected $fillable=[
        'Res_Type',
        'Title',
        'JournalName',
        'PubDate',
        'JournalType',
        'Jpos',
        'Numb',
        'Page',
        'Isconf',
        'ConfName',
        'ConfPlace',
        'Rtype',
        'CiteScor',
        'ImpactFactor',
        'JournalQuartile',
        'ISSN',
        'DOI',
        'Rlink',
        'Extaut',
        'filepath'
    ];
}
