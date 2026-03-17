<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Choices extends Model
{
    use HasFactory;
    
    public function fromLocation()
    {
        return $this->belongsTo(Location::class, 'from_location_id');
    }
}
