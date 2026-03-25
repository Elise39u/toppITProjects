<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MonsterArea extends Model
{
    public function monster() {
        return $this->belongsTo(Monster::class, 'monster_id');
    }

    public function area()
    {
        return $this->belongsTo(Areas::class, 'area_id');
    }
}
