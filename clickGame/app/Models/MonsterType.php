<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MonsterType extends Model
{
    protected $fillable = [
        'name',
        'image_url',
        'attack',
        'magical_attack',
        'defense',
        'magical_defense',
        'gold',
        'xp',
        'curhp',
        'curmp',
        'chance',
        'info,'
    ];
}
