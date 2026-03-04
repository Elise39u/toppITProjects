<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Choices extends Model
{
    public function fromLocation()
    {
        return $this->belongsTo(Location::class, 'from_location_id');
    }
}
