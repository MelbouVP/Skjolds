<?php

use App\Http\Controllers\ProductController;
use App\Http\Controllers\AuthController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});


// Protected routes
// *See Kernel.php route priority for middleware explanation

Route::group(['middleware' => ['passAuthToken','auth:sanctum',]], function () {
    Route::post('/product/create', [ProductController::class, 'store']);
    Route::put('/product/{product:id}', [ProductController::class, 'update']);
    Route::delete('/product/{product:id}', [ProductController::class, 'destroy']);
    Route::get('/products', [ProductController::class, 'index']);
    Route::post('/logout', [AuthController::class, 'logout']);
});


// Public routes
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::get('/product/{product:id}', [ProductController::class, 'show']);
Route::get('/product/search/{name}', [ProductController::class, 'search']);
