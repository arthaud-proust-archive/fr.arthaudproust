let mix = require('laravel-mix');

mix
    .js('js/app.js', '_site/js/')
    .css('_site/css/styles.css', '_site/css/')