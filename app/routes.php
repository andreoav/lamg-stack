<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

Route::get('partials/{view}', function($view)
{
	// Set the path depending on the application environment
	$partialFile = 'partials.' . (App::environment('production') ? 'dist.' . $view : $view);

	if (View::exists($partialFile))
	{
		return View::make($partialFile)->render();
	}

	return Response::make($partialFile . ' - Not found - ' . App::environment(), 404);
});

// Loads our SPA file
Route::get('/', function()
{
	return View::make('index');
});