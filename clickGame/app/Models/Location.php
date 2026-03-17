<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Location extends Model
{
    use HasFactory;

    public function choices() {
        return $this->hasMany('App\\Models\\Choices', 'from_location_id');
    }

    public function area()
    {
        return $this->belongsTo(Areas::class, 'area_id');
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
