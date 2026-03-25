<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MonsterAreaResource extends JsonResource
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
            'area_id' => $this->area_id,
            'monster_id' => $this->monster_id,

            'monster' => new MonsterResource($this->whenLoaded('monster')),
            'area' => new AreasResource($this->whenLoaded('area')),
        ];
    }
}
