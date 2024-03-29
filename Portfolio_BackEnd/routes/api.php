<?php

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

Route::apiResource(
    'people',
    'PersonController'
);

Route::get('people/{person}/projects', 'PersonController@projects');

Route::apiResource(
    'projects',
    'ProjectController'
);

Route::get('projects/{project}/images', 'ProjectController@images');

Route::apiResource(
    'technologies',
    'TechnologyController'
);

Route::apiResource(
    'images',
    'ImageController'
);

Route::post('/contact', 'ContactController@sendMail');

Route::apiResource('social-networks', 'SocialNetworkController');
Route::get('social-networks/person/{person_id}', 'SocialNetworkController@getByPersonId');
