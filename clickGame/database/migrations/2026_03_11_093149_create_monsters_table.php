<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('monsters', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('monster_type_id');
            $table->integer('inventory_id')->nullable();
            $table->integer('aggressionLvL'); // used on a scale of 1 to 100. How higher how likey the monster is to attack instead of fleeing or tauning. Excpetion is a boss monster
            $table->string('type'); // Aimed to use later for spells. Like sand monster have more likey blinding spelles and water tick damage spells
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('monsters');
    }
};
