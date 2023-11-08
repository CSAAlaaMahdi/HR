<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Unitname extends Model
{
    use HasFactory;
    protected $table='Tb_Units';
    protected $primaryKey = 'Ui_Guid';
    protected $keyType = 'string';
    protected $fillable=[
        'Ui_Name',
        'Ui_Piece',
        'Ui_PieceType',
        'Ui_RowID',
        'Ui_UserGuid'
    ];
}
