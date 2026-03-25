<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(LocationSeeder::class);
        $this->call(AreaSeeder::class);
        $this->call(MonsterAreaSeeder::class);
        $this->call(MonsterSeeder::class);
        $this->call(MonsterTypeSeeder::class);
        $this->call(UserSeeder::class);
    }
}
