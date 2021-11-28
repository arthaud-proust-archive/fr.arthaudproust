let mix = require('laravel-mix');

mix.js('src/js/app.js', 'public/js/')
    .postCss('src/css/styles.css', 'public/css');