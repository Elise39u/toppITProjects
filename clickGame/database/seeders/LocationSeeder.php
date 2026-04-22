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

        DB::table('locations')->insert(['id' => 1, 'name' => 'A new adventure in new york!', 'area_id' => 1,
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
        DB::table('choices')->insert(['name' => 'Go to the kitchen', 'from_location_id' => 1, 'to_location_id' => 2, 'type' => 'safe']);
        DB::table('choices')->insert(['name' => 'Go to the bathroom', 'from_location_id' => 1, 'to_location_id' => 3 , 'type' => 'safe']);
        DB::table('choices')->insert(['name' => 'Go to the windows', 'from_location_id' => 1, 'to_location_id' => 4 , 'type' => 'safe']);
        DB::table('choices')->insert(['name' => 'Go to the hallways of the hotel', 'from_location_id' => 1, 'to_location_id' => 5, 'type' => 'safe']);

        DB::table('locations')->insert(['id' => 2, 'name' => 'Room for a snack or should you let that weater rest?',  'area_id' => '1',
            'title' => 'Mabye a refresher doesnt sound that bad.. But a kitchen like this?', 'foto_url' => '../img/locations/hotelKitchen.jpg',
            'story' => "You scratch you're head as you walk into the kitchen that came with your hotel room. <br />
                        As you look around you start to ponder what happender here. As the kitchen seems to fall apart <br /> 
                        You start to look around wondering if there are any snacks or drinks left but the question remains here <br />
                        Is it still safe to consume after all this time?"]);
        DB::table('choices')->insert(['name' => 'Go back to your hotel room.', 'from_location_id' => 2, 'to_location_id' => 1, 'type' => 'safe']);
        DB::table('choices')->insert(['name' => 'Go to the bathroom', 'from_location_id' => 2, 'to_location_id' => 3, 'type' => 'safe']);

        DB::table('locations')->insert(['id' => 3, 'name' => 'A memory fading away? From an awesome night', 'area_id' => 1,
            'title' => 'You dont remeber your hotel bathroom this dirty and overrun?', 'foto_url' => '../img/locations/hotelBathroom.jpg',
            'story' => "You look suprised into the bathroom of your hotel room. Not daring a step inside. <br />
                        You're mind feeling clogged and cleary remebering the bathroom way more clean then it be. <br />
                        To yourself you think of a nice clean bathroom. After that last amazing night with at least the transgirl. <br /><br />
                        <b> username: </b> Ugh my head... Wasnt this cleaner? Im pretty sure it was how long did i pass out? <br />
                        <b> username: </b> I can remeber that i took that pregnant transgirl home after they departed with their pregnant coworker coach <br />
                        <b> username: </b> I had sex with them im pretty sure. Because i remeber cleaning myself after here but now i doubt myself <br />
                        <b> username: </b> No need pondering about that as you shake your head. No matter if it was clean and how great the sex with them was. <br />
                        <b> username: </b> Sitting around here wont get me out of this mess i am in."]);
        DB::table('choices')->insert(['name' => 'Go back to your hotel room', 'from_location_id' => 3, 'to_location_id' => 1, 'type' => 'safe']);
        DB::table('choices')->insert(['name' => 'Go to the kitchen', 'from_location_id' => 3, 'to_location_id' => 2, 'type' => 'safe']); 

        DB::table('locations')->insert(['id' => 4, 'name' => 'A view to think about for sure', 'area_id' => 1, 
            'title' => 'A view with a certain deep message behind it', 'foto_url' => '../img/locations/hotelWindow.jpg',
            'story' => 'You approach the window as you look out. With the returning memory of new years eve you look down at the streets <br />
                        All you noticed are empty cars and a dead silence across the street as rain tick the windows you start to ponder <br />
                        Your memories flood back as you recall that coach and the transgirl their name: Elise and Marieke. <br />
                        You recall them telling about a work trip and helping new york out together with a few of their friends and collegues named: Judith, Lisette and Jeroen <br />
                        Now the question remains. Did they made it out as safe as your gonna do.. Or is that sub base their new home? ']);
        DB::table('choices')->insert(['name' => 'Back off from the window', 'from_location_id' => 4, 'to_location_id' => 1, 'type' => 'safe']);

        DB::table('locations')->insert(['id' => 5, 'name' => 'Once a beautifull and alive hotel.. Now a dead dornment remains', 'area_id' => 1,
            'title' => 'An empty hotel. Once blooming and sprining now abonanded and left to rot', 'foto_url' =>  '../img/locations/hotelHalls.jpg',
            'story' => 'As you carefully wander through the halls of the hotel. Not trying to fall floors down you think as you reach the lobby. <br />
                        You wonder where everyone is and what happend to the party night of new york. Then a memory flood your brain back in <br /><br />
                        A memory flood back as the group of friends are standing near a dance club. Streets bussing with life as the group discusses something <br />
                        You look around in the memory as you see the pregnant girls well dressed and the group thinking if its right to go out with them <br />
                        After all you just met them and you cant agree but then you see Elise turning to you and whispering something <br />
                        <i><b> Elise (heavily pregnant): </b> Hey you look cute care to have some fun later together... They dont have to know </i> <br /><br />
                        Then you spring back to sense and think.... Why did i space out.. its better that i move on.. Why do i keep remebring Elise? and the blooming life of new york <br />
                        A new found determination pushes you on.. Detrimend to find out what happend to new york and its citizen and your new friend group']);
        DB::table('choices')->insert(['name' => 'Go back to your hotel room', 'from_location_id' => 5, 'to_location_id' => 1, 'type' => 'safe']);
        DB::table('choices')->insert(['name' => 'Go outside to explore new york', 'from_location_id' => 5, 'to_location_id' => 6, 'type' => 'safe']);

        DB::table('locations')->insert(['id' => 6, 'name' => 'Once a blooming and alive city.. Now left to rot and get dust', 'area_id' => 1,
            'title' => 'A once alive and blooming city now left to crumble and be overgrown', 'foto_url' => '../img/locations/outsideHotel.jpg',
            'story' => 'As you take in the sight of a once alive and blooming city.. You start to ponder. Backpack in hand you look to horizon <br />
                        Green mist damps the air.. you start to wonder what happend. But you are aware of your task because staying here is no good choice <br />
                        You look around the streets to the left is a wood store the right an gagdet story... Probably runned down you think. <br /> 
                        As you scan the street you notice to the left an rough sand road while to the right of you is a run down shore <br />
                        You can go on and go to brooklyn bridge.. But you dont have a weapon you think.. so whats going it to be?']);
        DB::table('choices')->insert(['name' => 'Go back inside the hotel', 'from_location_id' => 6, 'to_location_id' => 5, 'type' => 'safe']);
        DB::table('choices')->insert(['name' => 'Go to the wood store', 'from_location_id' => 6, 'to_location_id' => 7, 'type' => 'locked']);
        DB::table('choices')->insert(['name' => 'Go to the gadget store', 'from_location_id' => 6, 'to_location_id' => 8, 'type' => 'locked']);
        DB::table('choices')->insert(['name' => 'Go check out the sand path', 'from_location_id' => 6, 'to_location_id' => 9, 'type' => 'safe']);
        DB::table('choices')->insert(['name' => 'Check the shore line', 'from_location_id' => 6, 'to_location_id' => 10, 'type' => 'locked']);
        DB::table('choices')->insert(['name' => 'Go further down the streets', 'from_location_id' => 6, 'to_location_id' => 11, 'type' => 'locked']);

        DB::table('locations')->insert(['id' => 9, 'name' => 'Sand Sand SAnd everywhere and a escpae in sight?', 'area_id' => 1,
            'title' => 'Mabye you should have brought something to wipe of that sand?', 'foto_url' => '../img/locations/sandPath.jpg',
            'story' => 'So there was apprently a new developed not so sneaky sandpath here. That is suppose to be a shortcut through the city <br />
            The question now remains whats that in the distance and holds it a possible escpae route. From here it looks like a docks? <br />
            But with all the gras and hills around its only the question that remains. Is it safe to cross these paths? After all you dont know what houses here <br />
            You have been knocked out for a while.. So the lingering thought is a escpae possible or do you fear the unkown lurking at you?']);
        DB::table('choices')->insert(['name' => 'Go on to the docks if you dare', 'from_location_id' => 9, 'to_location_id' => '15/1', 'type' => 'hostile']); 
        DB::table('choices')->insert(['name' => 'Go back into the city', 'from_location_id' => 9, 'to_location_id' => 6, 'type' => 'safe']);
    }
}
