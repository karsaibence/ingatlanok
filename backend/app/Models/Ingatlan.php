<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ingatlan extends Model
{
    /** @use HasFactory<\Database\Factories\IngatlanFactory> */
    use HasFactory;
    protected $fillable = [
        'kategoria',
        'hirdetesDatuma',
        'tehermentes',
        'ar',
        'kepURL',
    ];
    function kat()
    {
        return $this->belongsTo(Kategoria::class, 'kategoria', 'id');
    }
}
