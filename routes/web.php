<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Auth/Login');
});

Route::middleware('auth')->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    //users
    Route::resource('/users', UserController::class)->names(['index'=>'users','store'=>'users.store','update'=>'users.update','delete'=>'users.delete']);

    //Roles
    Route::resource('/roles', RoleController::class)->names(['index'=>'roles','store'=>'roles.store','update'=>'roles.update','delete'=>'roles.delete']);

});

require __DIR__.'/auth.php';
