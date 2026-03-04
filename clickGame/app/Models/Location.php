<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Location extends Model
{
    public function choices() {
        return $this->hasMany('App\\Models\\Choices', 'from_location_id');
    }

    public function areas() {
        return $this->hasMany('App\\Models\\Areas', 'id');
    }

    protected $fillable = [
        'name',
        'area_id',
        'title',
        'foto_url',
        'story',
        'condition',
        'condition_value',
    ];
}
