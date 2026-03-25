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
        Schema::create('monster_types', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('image_url');
            $table->integer('attack');
            $table->integer('magical_attack');
            $table->integer('defense');
            $table->integer('magical_defense');
            $table->integer('gold');
            $table->integer('xp');
            $table->integer('curhp');
            $table->integer('curmp');
            $table->integer('chance')->nullable();
            $table->string('info', 7156);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('monster_types');
    }
};
