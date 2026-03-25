<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MonsterResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {   
        $monster_stats = new MonsterTypeResource($this->whenLoaded('monster_type'));

        return [ 
            'aggressionLvL' => $this->aggressionLvL,
            'type' => $this->type,
            $this->merge($monster_stats),
        ];
    }
}
