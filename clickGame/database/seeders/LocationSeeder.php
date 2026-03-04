<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('locations')->truncate(); // first clear the tables to be sure
        DB::table('choices')->truncate();

        DB::table('locations')->insert(['id' => 1, 'name' => 'Deja vu? In new york?', 'area_id' => 1,
            'title' => 'Deja vu? In new york?', 'foto_url' => '../img/locations/dejavu.jpg',
            'story' => 'You wake up after a nap what feels like for ever <br />
                    Memorys flood your brain of a wild New years eve. Only one look on your phone confirms your worst fear. <br />
                    Its currently the 31st of January 2059. As you scratch head from the sereve headache and your phones dies and runs out of battery. You hear the following on the radio <br /><br />
                    <i>Radio broadcaster:</i> in the past 24 hours New york has been hit with a unknown virus. Causing the city to go into lockdown. <br />
                    <i>Radio broadcaster:</i> People are adviced to keep watch and those seeking out rescue can meet the miltary at the Brooklyn Bridge. <br />
                    <i>Radio broadcaster:</i> The miltary will ask for idenitfycation and guns but in exchange wille evucate the population if your not infected. <br />
                    <i>Radio broadcaster:</i> For those hearing this message. We wish you the best of luck and hope your journey stays safe. This is jack from channel 9 signing off<br /><br />

                    <b>username:</b> Great you think to yourself. With vauge memories of waht happend on New years eve you are left no choice. <br />
                    <b>username:</b> You vaguley recall a pregnant transgirl and thier pregnant coach. Talking about a hidden subbase seieng this coming <br />
                    <b>username:</b> I did have their number i did ask it after that awesome night. But my phone is dead and there is no more power <br />
                    <b>username:</b> Guess not finding out what happend to that duo if i stick here. Think my only option now is the brooklyn bridge. <br />
                    ']);
        DB::table('choices')->insert(['id' => 1, 'name' => 'Go to the kitchen', 'from_location_id' => 1, 'to_location_id' => 2]);
        DB::table('choices')->insert(['id' => 2, 'name' => 'Go to the bathroom', 'from_location_id' => 1, 'to_location_id' => 3]);
        DB::table('choices')->insert(['id' => 3, 'name' => 'Go to the windows', 'from_location_id' => 1, 'to_location_id' => 4]);
        DB::table('choices')->insert(['id' => 4, 'name' => 'Go to the hallways of the hotel', 'from_location_id' => 1, 'to_location_id' => 5]);
    }
}
