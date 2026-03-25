<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Monster extends Model
{   
    protected $fillable = [
        'aggressionLvL',
        'type',
    ];

    public function monster_type()
    {
        return $this->belongsTo(MonsterType::class, 'id');
    }
}
