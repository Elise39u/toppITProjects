<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('users')->truncate();

        DB::table('users')->insert(['id' => 1, 'name' => 'Alisa39', 'email' => 'test@test.com', 
        'password' => '$2y$12$otp70AFMx.lPV3S5VsvSZ.C3XpV3qi52Dv0kQ.ryKpehwEEeurXES', 'inventory_id' => 1]);
    }
}
