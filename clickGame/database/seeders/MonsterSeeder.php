<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MonsterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('monsters')->truncate();

        //Area 1 monsters 
        DB::table('monsters')->insert(['monster_type_id' => 1, 'inventory_id' => NULL, 'aggressionLvL' => 50, 
            'type' => "sand"]);
        DB::table('monsters')->insert(['monster_type_id' => 2, 'inventory_id' => NULL, 'aggressionLvL' => 10, 
            'type' => "sand"]);
        DB::table('monsters')->insert(['monster_type_id' => 3, 'inventory_id' => NULL, 'aggressionLvL' => 75, 
            'type' => "sand"]);
        DB::table('monsters')->insert(['monster_type_id' => 4, 'inventory_id' => NULL, 'aggressionLvL' => 50, 
            'type' => "sand"]);
        DB::table('monsters')->insert(['monster_type_id' => 5, 'inventory_id' => NULL, 'aggressionLvL' => 101, 
            'type' => "Boss"]);
    }
}
