<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MonsterTypeResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

    /* 
        Query used that went wrong and gives id that Attemp to read proptery id on string 
        select * from `users` where `id` = 1 limit 1;
        select * from `monster_areas` where `area_id` = '1' order by RAND() limit 1;
        select * from `monsters` where `monsters`.`id` in (2);
        select * from `monster_types` where `monster_types`.`id` in (2);
        select * from `areas` where `areas`.`id` in (1);
    */

    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'image_url' => $this->image_url,
            'attack' => $this->attack,
            'magical_attack' => $this->magical_attack,
            'defense' => $this->defense,
            'magical_defense' => $this->magical_defense,
            'gold' => $this->gold,
            'xp' => $this->xp,
            'curhp' => $this->curhp,
            'curmp' => $this->curmp,
            'chance' => $this->chance,
            'info' => $this->info
        ];
    }
}
