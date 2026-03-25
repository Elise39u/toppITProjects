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
        //Add later a row that depicts to which locations a player can go. So area 1 has 9 and (Still to add docks) with names.
        Schema::create('monster_areas', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('area_id');
            $table->integer('monster_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('monster_areas');
    }
};
