var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass([
    	'app.scss',
    	'icons.scss'
    	]);
});

elixir(function(mix) {
	mix.copy('node_modules/font-awesome/fonts', 'public/fonts'); 
}); 