const mix = require('laravel-mix');

mix.js('src/js/index.js', 'assets')
   .sass('src/scss/main.scss', 'assets')
   .setPublicPath('assets');