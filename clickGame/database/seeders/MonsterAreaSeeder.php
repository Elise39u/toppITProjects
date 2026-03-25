<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class MonsterAreaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('monster_areas')->truncate();

        // Area 1 monsters 
        DB::table('monster_areas')->insert(['area_id' => 1, 'monster_id' => 1]);
        DB::table('monster_areas')->insert(['area_id' => 1, 'monster_id' => 2]);
        DB::table('monster_areas')->insert(['area_id' => 1, 'monster_id' => 3]);
        DB::table('monster_areas')->insert(['area_id' => 1, 'monster_id' => 4]);
        DB::table('monster_areas')->insert(['area_id' => 1, 'monster_id' => 5]);
    }
}
