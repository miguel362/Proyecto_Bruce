<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\OthersController;
use App\Http\Controllers\FilmsController;
use App\Http\Controllers\AwardsController;
use App\Http\Controllers\AwardsRootController;
use App\Http\Controllers\FilmsRootController;
use App\Http\Controllers\HomeRootController;
use App\Http\Controllers\OthersRootController;
use App\Http\Controllers\UsuarioController;
use App\Http\Controllers\ApiController;

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

//usuarios conectados
Route::get('/', HomeController::class)->name('welcome');
//Route::get('films', ApiController::class)->name('apis');
Route::get('films', FilmsController::class)->name('films')->middleware("auth");
Route::get('awards', AwardsController::class)->name('awards')->middleware("auth");
Route::get('others', OthersController::class)->name('others')->middleware("auth");

//root
Route::get('filmsRoot', FilmsRootController::class)->name("filmsRoot")->middleware("auth");
Route::get('awardsRoot', AwardsRootController::class)->name("awardsRoot")->middleware("auth");
Route::get('othersRoot', OthersRootController::class)->name("othersRoot")->middleware("auth");
Route::get('welcomeRoot', HomeRootController::class)->name("welcomeRoot")->middleware("auth");

//controlador usuarios base de datos
/*Usuarios*/ 
Route::get('usuarios', [UsuarioController::class, "index"])->middleware("auth")->name("usuarios");
Route::get('usuario/create', [UsuarioController::class, "create"])->middleware("auth");
Route::post('usuario/store', [UsuarioController::class, "store"])->middleware("auth")->name("store");
Route::delete('usuario/{id}', [UsuarioController::class, "delete"])->middleware("auth");
Route::get('usuario/edit/{id}', [UsuarioController::class, "edit"])->middleware("auth");
Route::put('usuario/update/{id}', [UsuarioController::class, "update"])->middleware("auth")->name("update");

//Route::get('apis', ApiController::class)->name('apis');
//Route::get('getFilms', ApiController::class, "get_films")->name('getFilms');

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
