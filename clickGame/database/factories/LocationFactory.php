<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Location>
 */
class LocationFactory extends Factory
{
    
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;


    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    { 
        return [
            'name' => fake()->name,
            'area_id' => 1,
            'title' => fake()->name,
            'foto_url' => fake()->name,
            'story' => fake()->name,
            'condition' => '',
            'condition_value' => ''
        ];
    }
}
