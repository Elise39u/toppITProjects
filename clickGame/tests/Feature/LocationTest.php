<?php

namespace Tests\Feature;

use App\Models\User;
use App\Models\Location;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class LocationTest extends TestCase
{
    use RefreshDatabase;     
    protected $seed = true;

    public function test_location_not_found_check(): void
    {
        $response = $this->get('/location');

        $response->assertStatus(404);
    }

    public function test_location_redirects_when_not_logged_in(): void
    {
        $response = $this->get('/location/1');

        $response->assertRedirect('/');
        $this->assertStatus(500);
    }

    public function test_location_page_loads_when_logged_in(): void
    {
        $user = User::factory()->create();
        $location = Location::factory()->create();

        $this->assertModelExists($user);
        $this->assertModelExists($location);

        $response = $this->actingAs($user)
                        ->get("/location/{$location->id}");

        $response->assertStatus(200);
    }
}