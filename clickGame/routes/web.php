<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Homepage');
})->name('home');

Route::get('/location', function () {
    return Inertia::render('Location');
})->name('location');