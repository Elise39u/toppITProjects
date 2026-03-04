<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AreaSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('areas')->insert(['id' => 1, 'name' => 'Brooklyn']);
        DB::table('areas')->insert(['id' => 2, 'name' => 'Staten Island']);
        DB::table('areas')->insert(['id' => 3, 'name' => 'On the carrier']);
        DB::table('areas')->insert(['id' => 4, 'name' => 'Hidden New York Sub base']);
    }
}
