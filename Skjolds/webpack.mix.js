const mix = require('laravel-mix');
const fs = require('fs');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js');


// Automatically adds new scss files in resource/sass for compilation into public/css
const files = fs.readdirSync(path.resolve(__dirname, 'resources', 'sass'), 'utf-8')  

for (let file of files) {
   mix.sass(`resources/sass/${file}`, 'public/css');
}
