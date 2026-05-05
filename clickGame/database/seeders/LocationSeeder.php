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
        /*
            Location structure:
            15/X is monster fight location where X stands for the Area of the gam. Each one returns to their respective locations.
            21/X Are NPCs. Where X stands for the NPC id. 
            22/X Would become items where X stands for the item id. Found items always return the player to the location their found on
            27/X Are shops with each an special effect. X stands for the shop idea and as example the ATM is an shop where the player can store and depoist money into their bank.
            46/X Is a warehouse where the user can use items like potions and such. X is for the id and mabye in the future each warehouse has a special effect. 
        */
        DB::table('locations')->truncate(); // first clear the tables to be sure
        DB::table('choices')->truncate();

        DB::table('locations')->insert(['id' => 1, 'name' => 'A new adventure in new york!', 'area_id' => 1,
            'title' => 'Deja vu? In new york?', 'foto_url' => '../img/locations/dejavu.jpg',
            'story' => 'You wake up in an abandoned hotel room in New York. What was supposed to be a fun New Years Eve in "The City That Never Sleeps" </br>
                    now feels like a distant, distorted memory. Before you can piece your thoughts together, the dusty radio on the nightstand crackles to life.  <br /><br />
                    <i>Radio broadcaster:</i> To the viewers of Channel 9 and for those of you still trapped in New York. We have terrible news. Over the past month, the city has been ravaged by a strange virus and a mysterious gas <br />
                    <i>Radio broadcaster:</i> For those daring enough to seek rescue: the military checkpoint on the Brooklyn Bridge is evacuating survivors. You must prove you arent infected, and you are required to bring identification and any available firearms for defense <br />
                    <i>Radio broadcaster:</i> TThis virus causes rapid mutations in the ecosystem. If you do not have a fortified shelter, we advise you to navigate the streets with extreme caution. To anyone hearing this... we wish you luck. Stay safe. This is Jack from Channel 9, signing off <br /><br />

                    <b>username:</b> "Great," you mutter. "What year is it? Ugh, my head... I guess I partied a bit too hard on New Year’s Eve. Way too hard." <br />
                    <b>username:</b> "I remember a group of friends I made. I cant recall if there were one or two pregnant girls in the group, but they were good people. They mentioned a sub-base, a place hidden from the public."<br />
                    <b>username:</b> They knew about it and were planning to hide there. I wonder what happened to them... I remember the group was led by two coaches and their colleagues. I need to clear my head and grab my gear. I wont find my friends or a way out by standing around here. <br />']);
        DB::table('choices')->insert(['name' => 'Go to the kitchen', 'from_location_id' => 1, 'to_location_id' => 2, 'type' => 'safe']);
        DB::table('choices')->insert(['name' => 'Go to the bathroom', 'from_location_id' => 1, 'to_location_id' => 3 , 'type' => 'safe']);
        DB::table('choices')->insert(['name' => 'Go to the windows', 'from_location_id' => 1, 'to_location_id' => 4 , 'type' => 'safe']);
        DB::table('choices')->insert(['name' => 'Go to the hallways of the hotel', 'from_location_id' => 1, 'to_location_id' => 5, 'type' => 'safe']);

        DB::table('locations')->insert(['id' => 2, 'name' => 'Room for a snack or should you let that weater rest?',  'area_id' => '1',
            'title' => 'Mabye a refresher doesnt sound that bad.. But a kitchen like this?', 'foto_url' => '../img/locations/hotelKitchen.jpg',
            'story' => "You scratch your head as you stumble into the small kitchen area of your hotel suite. You look around, wondering if any of it is still functional. Is the water from the sink even safe to drink? Is the food in the fridge still edible or has it become its own science experiment? <br />
            On second thought, it might be better to let those questions slide. You still have no idea how long you were passed out. Looking at the thick layer of dust and the peeling wallpaper, you have to wonder: how long ago did this room start falling apart? <br /><br />

            <b>username:</b> Focus... if I’m going to make it to the Brooklyn Bridge, I can’t leave on an empty stomach. But man, this place looks like it’s been empty for years, not weeks. <br />
            <b>username:</b> I should check the cupboards. Maybe I left some canned goods behind. Anything is better than whatever is growing in that fridge."]);
        DB::table('choices')->insert(['name' => 'Go back to your hotel room.', 'from_location_id' => 2, 'to_location_id' => 1, 'type' => 'safe']);
        DB::table('choices')->insert(['name' => 'Go to the bathroom', 'from_location_id' => 2, 'to_location_id' => 3, 'type' => 'safe']);

        DB::table('locations')->insert(['id' => 3, 'name' => 'A memory fading away? From an awesome night', 'area_id' => 1,
            'title' => 'You dont remeber your hotel bathroom this dirty and overrun?', 'foto_url' => '../img/locations/hotelBathroom.jpg',
            'story' => "You stand at the doorway of the bathroom, peering inside. A wave of unease washes over you. How long has it been since this room was actually clean? It’s unsettling to think that you once showered here or used this space without a second thought. <br />
             As you scratch your throbbing head, another hazy fragment of New Year’s Eve flickers in your mind. <br /><br />
             
             <b>username</b>: Ugh... was it always this bad, or was it cleaner back on New Year's? Just how long have I been passed out in this place? <br />
             <b>username</b>: I vaguely remember bringing the group back here. Or was I alone with that pregnant coach... or maybe their friend? I can’t tell. My head hurts too much to piece it together. <br />
             <b>username</b>: Did I...? Am I sure...? Ugh, forget it. My head is pounding. Maybe it’s better if I don't remember exactly what happened that night. <br />
             <b>username</b>: I need to move on. Reminiscing about the past isn't going to help me get out of this mess. I need to focus on the now."]);
        DB::table('choices')->insert(['name' => 'Go back to your hotel room', 'from_location_id' => 3, 'to_location_id' => 1, 'type' => 'safe']);
        DB::table('choices')->insert(['name' => 'Go to the kitchen', 'from_location_id' => 3, 'to_location_id' => 2, 'type' => 'safe']); 

        DB::table('locations')->insert(['id' => 4, 'name' => 'A view to think about for sure', 'area_id' => 1, 
            'title' => 'A view with a certain deep message behind it', 'foto_url' => '../img/locations/hotelWindow.jpg',
            'story' => 'You gaze out the window, looking down at the streets of New York from several stories up. A troubling question lingers in your mind: <br />
                "The City That Never Sleeps?" For a place that supposedly never rests, the streets are eerily empty. There isnt a soul in sight. <br />
                Suddenly, as you stare into the void of the city, the names of your friends rush back to you: <b> Elise, Marieke, Jeroen, Lisette, Judith, and Mark. </b> <br />
                You remember the names, but the details remain fuzzy. You still can’t recall which of them were expecting. <br />
                It doesn’t matter now who had the baby bump. You need to get out of this mess. If they made it, they’ll be at the sub-base... right? Only one way to find out. <br /> <br />

                <b>username</b>: "Elise... Marieke... Jeroen... the names are there, but the faces are a blur. Which ones were the pregnant ones? Why cant I remember?" <br />
                <b>username</b>: "Forget it. Standing here staring at an empty city wont bring my memory back. If that group is still alive, that sub-base is where they’ll be. I have to move."']);
        DB::table('choices')->insert(['name' => 'Back off from the window', 'from_location_id' => 4, 'to_location_id' => 1, 'type' => 'safe']);

        DB::table('locations')->insert(['id' => 5, 'name' => 'Once a beautifull and alive hotel.. Now a dead dornment remains', 'area_id' => 1,
            'title' => 'An empty hotel. Once blooming and sprining now abonanded and left to rot', 'foto_url' =>  '../img/locations/hotelHalls.jpg',
            'story' => 'One step at a time, you carefully pick your path across the floor, avoiding the deep cracks that threaten to give way beneath you. After a tense descent down the crumbling hotel stairs, <br />
             you finally reach the lobby. You take a breath safely down. You look around the reception area. This place was once the height of luxury, a "social hub" for the citys tourist. <br />
             Now, it’s just a hollow, abandoned shell. As you poke around the dust-covered front desk, a vivid memory of New Year’s Eve suddenly floods back. <br /><br />
              
             <i>The city lights are bright, and the air is filled with laughter. Your group is strolling through the night air, fresh from a midnight snack at 7th Street Burger. <br />
             The group is debating a trip to the Comedy Cellar, though everyone is mindful of Marieke and Elise. </i><br />
             <b>Judith</b>: "Look, holiday or not, are you two sure youre up for the rest of the night?" <br />
             <b>Marieke (Heavily pregnant)</b>: "Sure, why not? We wll keep an eye on each other. If we get too tired, well speak up and head back." <br />
             <b>Lisette</b>: "I dont know... we have work tomorrow, and we just invited a new friend into the group. <b>username</b> and <b>Elise</b> seem to be getting along great, though." <br />
             <b>Jeroen</b>: "Look, its a comedy club and its only 11:00 PM. Lets just go in for a little while. Work doesnt even start until tomorrow afternoon." <br />
             <b>Judith</b>: "Yeah, youre right. It cant hurt to try. If <b>Marieke</b> and <b>Elise</b> need anything, were right here to support them." <br />
             <b>Marieke (Heavily pregnant)</b>: "By the way... where are <b>Elise</b> and <b>username?</b> Oh, look. Theyre over there talking." <br /> <br />

             <b>username:</b> "The memory goes fuzzy after that... So it was Elise and Marieke who were expecting. Ugh, my head is throbbing. It doesn’t matter right now, I need to keep moving." 
             ']);
        DB::table('choices')->insert(['name' => 'Go back to your hotel room', 'from_location_id' => 5, 'to_location_id' => 1, 'type' => 'safe']);
        DB::table('choices')->insert(['name' => 'Go outside to explore new york', 'from_location_id' => 5, 'to_location_id' => 6, 'type' => 'safe']);

        DB::table('locations')->insert(['id' => 6, 'name' => 'Once a blooming and alive city.. Now left to rot and get dust', 'area_id' => 1,
            'title' => 'A once alive and blooming city now left to crumble and be overgrown', 'foto_url' => '../img/locations/outsideHotel.jpg',
            'story' => 'Ah, the streets of what was once the City of Lights,the city that never sleeps. As you step outside your hotel, the reality of the situation finally settles in. <br />
                Not a single soul is visible on the pavement. Is the virus really that devastating? To your left and right, storefronts sit hollow and dark, perhaps harboring supplies worth investigating. <br />
                The street seems to stretch on forever, but ahead, the path splits: to the left lies a rugged sand path, and to the right, the shoreline overlooking the water between Manhattan and Staten Island. <br />
                As you take a step forward, the memory from the hotel rushes back, picking up exactly where it left off your conversation with Elise. <br /> <br />

                <i>The noise of the city fades into the background as you and Elise talk privately.</i> <br />
                <b>Elise (Heavily pregnant):</b> "Look, username. You’re cute, and you’ve been really kind to me and my friends tonight. Especially to me. Listen... if our suspicions about what’s happening come true, <br />
                come find us at the sub-base nearby. There’s an abandoned carrier ship on the river; I’m not supposed to tell you this, but that carrier has the coordinates to the base." <br />
                <b>Elise (Heavily pregnant):</b> "If it comes to that, ask for my secret so I know it’s really you. I’m just glad I met you... and hey, do you want to have some fun later?" <br /><br />

                <b>username:</b> "So it was Elise and Marieke who were expecting. And Elise trusted me with that information... If I head to the shoreline, I should be able to reach that carrier." <br />
                <b>username:</b> "But that leaves me with even more questions. What is Elise’s secret? And did we actually... have some fun? No time to ponder that now. I have to keep moving."
                ']);
        DB::table('choices')->insert(['name' => 'Go back inside the hotel', 'from_location_id' => 6, 'to_location_id' => 5, 'type' => 'safe']);
        DB::table('choices')->insert(['name' => 'Go to the wood store', 'from_location_id' => 6, 'to_location_id' => 7, 'type' => 'locked']);
        DB::table('choices')->insert(['name' => 'Go to the gadget store', 'from_location_id' => 6, 'to_location_id' => 8, 'type' => 'locked']);
        DB::table('choices')->insert(['name' => 'Go check out the sand path', 'from_location_id' => 6, 'to_location_id' => 9, 'type' => 'safe']);
        DB::table('choices')->insert(['name' => 'Check the shore line', 'from_location_id' => 6, 'to_location_id' => 10, 'type' => 'safe']);
        DB::table('choices')->insert(['name' => 'Go further down the streets', 'from_location_id' => 6, 'to_location_id' => 11, 'type' => 'locked']);

        DB::table('locations')->insert(['id' => 9, 'name' => 'Sand Sand SAnd everywhere and a escpae in sight?', 'area_id' => 1,
            'title' => 'Mabye you should have brought something to wipe of that sand?', 'foto_url' => '../img/locations/sandPath.jpg',
            'story' => 'You find yourself on a path buried in deep sand, a strange sight that seems to have developed only recently. As you stop to shake the grit out of your shoes, you notice a silhouette in the distance: <br />
             a dock. Could there be a boat waiting there to take you out of the city? Or better yet, the vessel you need to find your friends? <br />
             As you take in the salt breeze and weigh your options on this desolate, sandy road, a sudden chill runs down your spine. You feel it in your gut something is watching you. <br />
             It’s out there, hidden, waiting for the right moment to strike. But what could it be? Do you dare to find out by moving forward? <br /><br />
             
             <b>username:</b> "This sand... it shouldnt be here. It’s like the coast is moving inland. Something is seriously wrong with this city." <br />
             <b>username:</b> "That dock is my best bet, but I cant shake the feeling that Im being hunted. Is it one of those mutations the radio mentioned? Or something else?" <br />
             <b>username:</b> "Focus. If I want to find Elise and the others, I have to reach that water. Whatever is out there... let it come."']);
        DB::table('choices')->insert(['name' => 'Go on to the docks if you dare', 'from_location_id' => 9, 'to_location_id' => '15/1', 'type' => 'hostile']); 
        DB::table('choices')->insert(['name' => 'Go back into the city', 'from_location_id' => 9, 'to_location_id' => 6, 'type' => 'safe']);

        DB::table('locations')->insert(['id' => 10, 'name' => 'A night view... An army and a way to go across.', 'area_id' => 1,
            'title' => 'A once alive and blooming city now left to crumble and be overgrown', 'foto_url' => '../img/locations/shoreline.jpg',
            'story' => 'You gaze across the water, and there it is: the Brooklyn Bridge. Even from here, you can make out the silhouette of military columns, fortified stands, and heavy equipment. <br />
            They werent kidding about the evacuation. Does that mean parts of New York are actually being held as safe havens? To the south, you see the outline of Staten Island in the distance. <br />
            You arent sure how you know its there, but your gut tells you youre right. Then, your eyes catch something else, a massive, dark shape cutting through the haze on the river. A ship. <br />
            Could that be the carrier Elise mentioned? It raises a chilling question: why would the military abandon a carrier in the middle of the city...  <br />
            unless it isnt an abandonment, but a warning? Or perhaps its their true staging base. <br /><br />

            <b>username</b>: "The bridge looks like a fortress. If I want safety, that’s the place to go. But if I want answers... I have to get to that ship." <br />
            <b>username</b>: "Why would they leave a carrier sitting there? If it’s as abandoned as Elise said, it’s either a goldmine of supplies or a deathtrap. Or both." <br />
            <b>username</b>: "Staten Island, the Brooklyn Bridge, or the Carrier. The city is falling apart, but the options are starting to pile up. I just need to make sure I pick the right one." 
            ']);
        DB::table('choices')->insert(['name' => 'Go back to your hotel', 'from_location_id' => 10, 'to_location_id' => 6, 'type' => 'safe']);
        DB::table('choices')->insert(['name' => 'Go swimming', 'from_location_id' => 10, 'to_location_id' => 14, 'type' => 'quest']);
        DB::table('choices')->insert(['name' => 'Take the boat to paddle on the rivier ', 'from_location_id' => 10, 'to_location_id' => 16, 'type' => 'item_needed']);

        DB::table('locations')->insert(['id' => 12, 'name' => 'A possible way out of infected new york?', 'area_id' => 1,
            'title' => 'I hope you can swim.. Because i surely cant oh, hey a boat', 'foto_url' => '../img/locations/docks.jpg',
            'story' => '"That was quite the fight, username. I honestly dont know what that thing was or how you managed to win. But let’s be real for a second <br />
                tell me you didn’t try to seduce any of those mutations, right? Just between us, that is definitely not the way to survive an apocalypse. <br />
                But hey, as your inner voice, I’m not here to judge your... unique tastes. Back to business. There’s a boat here, but it’s just a rowboat and it’s missing the oars. <br />
                Maybe one of those creatures made off with them? You might have to track it down and persuade it to give them back. <br />
                On the other hand, if you actually managed to get to the city by car, maybe you could drive down to the shoreline with the boat and search for your friends that way.  <br />
                But that raises the big question: is there even a working car left in this graveyard of a city? So, what’s it going to be? Do we push forward or head back? <br /><br />
                
                <b>username:</b> "Very funny. I’m not seducing anything. And my head hurts way too much for your sarcasm right now." <br />
                <b>username:</b> "A rowboat without oars is just a floating coffin. I either need to find those paddles or find a vehicle that still has some life in its battery. <br />
                Either way, Im not staying on this beach.""']);
        DB::table('choices')->insert(['name' => 'Dare to go back on the path?', 'from_location_id' => 12, 'to_location_id' => '15/1', 'type' => 'hostile']); 
        DB::table('choices')->insert(['name' => 'Take the car', 'from_location_id' => 12, 'to_location_id' => 10, 'type' => 'item_needed']);
        DB::table('choices')->insert(['name' => 'Escape the city', 'from_location_id' => 12, 'to_location_id' => 13, 'type' => 'item_needed']);

         DB::table('locations')->insert(['id' => 13, 'name' => 'Escaped by paddling your way out of here', 'area_id' => 1,
            'title' => 'That was surely an adventure aint it?', 'foto_url' => '../img/locations/end1.jpg',
            'story' => '"Even I, your incredibly handsome inner voice am disgusted by the color of that water. Eww... has it always been that shade of toxic sludge? <br />
            Well, I warned you about going for a swim, didnt I? But hey, username, did you know there’s more than one way to get out of this mess? <br /> 
            I have to give you credit for beating that mutated scorpion, though. I mean, who would’ve thought a giant scorpion would be hoarding a pair of oars? Nature is truly healing. <br />
            Just a heads-up: Manhattan, the Carrier, and Staten Island each have their own unique escape methods. Can you find them all? You can always go back and try a different path, <br />
            but dont worry your stats wont reset. So, are you willing to try again, username, or are we sticking with this plan? <br />
            
            <b>username:</b> "A mutated scorpion with oars... if I told anyone that back on New Years, they wouldve staged an intervention. This city has gone to hell." <br/>
            <b>username:</b> "So, I have choices. The bridge, the ship, or the island. If I pick one, Id better be ready for whatevers waiting there.""']);
        DB::table('choices')->insert(['name' => 'You escaped on way 1', 'from_location_id' => 13, 'to_location_id' => 1, 'type' => 'safe']); 

        DB::table('locations')->insert(['id' => 14, 'name' => 'Dying in the toxic water... You really thought that worked', 'area_id' => 1,
            'title' => 'Whomp Whomp Purple water aint safe', 'foto_url' => '../img/locations/death1-test.jpg',
            'story' => '"I did warn you, didnt I, username? Look, as your inner voice and the one guiding you through this mess, I have to be honest. I get it, <br /> 
            you see a click option, and you just have to know what it does. Curiosity is a powerful thing. After all, I probably would have done the same. <br />
            But did you really think swimming in glowing purple water was a good idea? Especially with those... things... that have started growing in the depths? <br />
            Well, I’m sorry to be the bearer of bad news, but you’re dead. Your stats have been reset. But hey, look on the bright side: death is just a learning experience!  <br />
            You can always try again whenever you feel like it. There is still so much more to explore... if you think you can handle it this time. Ready for Round 2?"']);
        DB::table('choices')->insert(['name' => 'That was not a smart decision right?', 'from_location_id' => 14, 'to_location_id' => 1, 'type' => 'safe']); 
    }
}
