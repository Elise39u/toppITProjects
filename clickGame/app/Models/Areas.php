<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Areas extends Model
{
    public function locationArea() 
    {
        return $this->belongsTo(Location::class, 'area_id');
    }
}
