<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AreasResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'location_one' => $this->location_one,
            'location_one_name'=> $this->location_one_name,
            'location_two' => $this->location_two,
            'location_two_name' => $this->location_two_name
        ];
    }
}
