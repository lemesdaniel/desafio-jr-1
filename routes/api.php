<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['prefix' => 'post'], function () {
    Route::post('/store', [PostController::class, 'store'])->name('post.store');
    Route::put('/update/{id}', [PostController::class, 'update']);
    Route::get('/show/{id}', [PostController::class, 'show']);
    Route::delete('/destroy/{id}', [PostController::class, 'destroy']);
});



Route::get('/my-posts', [postController::class, 'index'])->name('post.index');