<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;    

use App\Models\Location;
use App\Http\Resources\LocationResource;
use App\Http\Resources\ChoicesResource;
use App\Models\Choices;
use App\Models\Areas;
use App\Http\Resources\AreasResource;

/*
    The idea in simple that there might be 4-5 pages in the end product
    / - homepage asking the user to login and start the game
    /Location/{id} - This would be the main page where the game plays and the goal is to make everything run through the /location tag
    where id changes correspending to location. And certain locations give certain results
    like a monster fight could change Location/15 into Location/15/1 and so on where /15/{id} is the id of the monster

    Would it be better to have Monster fights and shops as it seprated pages? 
    So you would get stuff like Location/15/{Id} which is a monster and for example Location/22/{id} which is a shop
    Or does it cagetorize under a location page since thehy share simmallariteis. 

    The reamning orignal idea pages are 
    /Register - so a user can register for the game 
    /Logout - so a user can logout of the game 
    /Patchnotes - A page so the user can keep track of changes made to the game and addtions added. 
*/

Route::get('/', function () {
    return Inertia::render('Homepage');
})->name('home');

Route::get('/location/{id}', function (string $id) {
    return Inertia::render('Location', [
        'location' => new LocationResource(Location::findorFail($id)->load('choices')->load('areas')),
    ]);
})->name('location');
Route::get('/monster', function () {
    return Inertia::render('Monster');
})->name('Monster');
Route::get('/npc', function () {
    return Inertia::render('Npc');
})->name('Npc');
Route::get('/shop', function () {
    return Inertia::render('Shops');
})->name('Shops');