<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WisataController;
use App\Http\Controllers\UserController;

    Route::get('wisatas', [WisataController::class, 'index']);
    Route::post('wisatas', [WisataController::class, 'store']);
    Route::get('wisatas/{id}', [WisataController::class, 'show']);
    Route::get('wisatas/{id}/edit', [WisataController::class, 'edit']);
    Route::put('wisatas/{id}/edit', [WisataController::class, 'update']);
    Route::delete('wisatas/{id}/delete', [WisataController::class, 'destroy']);

    

