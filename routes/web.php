<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('treninzi','App\Http\Controllers\Api\TreningController@index');
Route::post('treninzi/store','App\Http\Controllers\Api\TreningController@store');
Route::delete('treninzi/delete/{id}','App\Http\Controllers\Api\TreningController@destroy');
Route::get('treninzi/edit/{id}','App\Http\Controllers\Api\TreningController@edit');
Route::put('treninzi/update/{id}','App\Http\Controllers\Api\TreningController@update');