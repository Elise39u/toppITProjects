<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Areas extends Model
{ 
    use HasFactory;

    public function Location() {
        return $this->hasMany('App\\Models\\Location', 'area_id');
    }

    public function locationArea() 
    {
        return $this->belongsTo(Location::class, 'area_id');
    }
}
