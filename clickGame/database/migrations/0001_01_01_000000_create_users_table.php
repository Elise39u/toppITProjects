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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
            $table->integer('current_location_id')->nullable()->default(1); // Remeber the location of the player so they can start from there. Also set it on creation to the start location
            $table->integer('inventory_id')->nullable(); // Used to track the inventory of the player 

            // Stats of the player
            $table->integer('attack')->default(50);
            $table->integer('magical_attack')->default(10);
            $table->integer('defense')->default(80);
            $table->integer('magical_defense')->default(20);
            $table->integer('gold')->default(250);
            $table->integer('inbank')->default(0);
            $table->integer('curhp')->default(150);
            $table->integer('maxhp')->default(200);
            $table->integer('curmp')->default(50);
            $table->integer('maxmp')->default(100);
            $table->integer('current_exp')->default(0);
            $table->integer('exp_to_next_level')->default(100);
            $table->integer('level')->default(1);
            $table->string('primary_hand')->nullable()->default('');
            $table->string('secondary_hand')->nullable()->default(''); 
        });

        Schema::create('password_reset_tokens', function (Blueprint $table) {
            $table->string('email')->primary();
            $table->string('token');
            $table->timestamp('created_at')->nullable();
        });

        Schema::create('sessions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->foreignId('user_id')->nullable()->index();
            $table->string('ip_address', 45)->nullable();
            $table->text('user_agent')->nullable();
            $table->longText('payload');
            $table->integer('last_activity')->index();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
        Schema::dropIfExists('password_reset_tokens');
        Schema::dropIfExists('sessions');
    }
};
