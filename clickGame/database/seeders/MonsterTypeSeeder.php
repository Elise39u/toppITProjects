<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class MonsterTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('monster_types')->truncate();
        
        // Monsters possible to encounter in Area 1
        DB::table('monster_types')->insert(['name' => 'Mutated Sand Rat', 'image_url' => '../../img/monsters/sandRat.jpg',  'attack' => 50, 
            'magical_attack' => 0, 'defense' => 150, 'magical_defense' => 0, 'gold' => 100, 'xp' => 50, 'curhp' => 150, 'curmp' => 0, 'chance' => null,
                'info' => 'Once inncocent rats that got mutated by the virus spreading through the air <br /> 
                These rats are known for their territorial control and wont hesitate to defend it. <br />
                However they are heistant on their aggression if you stay outside their claimed territory']);
        DB::table('monster_types')->insert(['name' => 'Eheee.... Sand creature? I guess?', 'image_url' => '../../img/monsters/sandCreature.jpg',  'attack' => 5, 
            'magical_attack' => 0, 'defense' => 15, 'magical_defense' => 0, 'gold' => 5, 'xp' => 10, 'curhp' => 50, 'curmp' => 0, 'chance' => null,
                'info' => 'One of the weirder sightings since the outbreak of the virus here in new york. <br />
                People who have experinced these creatures often experince them as friendly sand made creatures. <br />
                These creatures are also observed to rather avoid fights due to their fragile states. ']);
        DB::table('monster_types')->insert(['name' => 'Sand Golem', 'image_url' => '../../img/monsters/sandGolem.jpg',  'attack' => 25, 
            'magical_attack' => 0, 'defense' => 400, 'magical_defense' => 400, 'gold' => 250, 'xp' => 100, 'curhp' => 500, 'curmp' => 50, 'chance' => null,
            'info' => 'One of the more wonderus sights here is the Sand golem. A mainfestation of the sand and rocks combined <br />
            A monster with a higher defence because of these mutations but in exchange often obeserved to deal low damage to people passing by <br />
            They are also observed to rather by highly aggresive but known to back off when needed ']);
        DB::table('monster_types')->insert(['name' => 'Sand Wurm', 'image_url' => '../../img/monsters/sandWurm.jpg',  'attack' => 150, 
            'magical_attack' => 150, 'defense' => 10, 'magical_defense' => 10, 'gold' => 50, 'xp' => 200, 'curhp' => 500, 'curmp' => 50, 'chance' => null,
            'info' => 'One of the more smarter predators around these sandy ways. This wurm likes to suprise their vicitims. <br />
            Its observed to be rather smart. Using the sand to evade attacks and suprise attack its vicitims. Even killing thougher warriors. <br />
            On the other hand: if one know how to use the sand to its advantage. Then even this smarter predator wont stand a chance']);
        DB::table('monster_types')->insert(['name' => 'Mutated Sand Scropio', 'image_url' => '../../img/monsters/scoripo.png',  'attack' => 3500, 
            'magical_attack' => 3500, 'defense' => 3500, 'magical_defense' => 3500, 'gold' => 5000, 'xp' => 1500, 'curhp' => 5000, 'curmp' => 1500, 'chance' => null,
                'info' => 'This mutated scroipo now reins king in this dessert land as the top predator of the area. <br /> 
                Its not afraid to fight and has the highest attack and defence and hp for it in the area <br/ >
                However those claim to defeat it. Will be rewarded with item worth the while.. <br />
                But can you surive this deadly predator who wont back down for a fight?']);

        //Monsters possible to encounter in Area 2

    }
}
