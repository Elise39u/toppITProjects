<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class LocationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        #https://laravel.com/docs/12.x/eloquent-resources
        return [
            'id' => $this->id,
            'name' => $this->name,
            'area_id' => $this->area_id,
            'title' => $this->title,
            'foto_url' => $this->foto_url,
            'story' => $this->story,
            'condition' => $this->condition,
            'condition_value' => $this->condition_value,

            'choices' => ChoicesResource::collection($this->whenLoaded('choices')),
            'area' => new AreasResource($this->whenLoaded('area')),
        ];
    }
}
