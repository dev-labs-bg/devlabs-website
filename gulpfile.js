var elixir = require('laravel-elixir');

require('laravel-elixir-imagemin');

elixir.config.assetsPath = '.';
elixir.config.publicPath = '.';

elixir.config.images = {
    folder: 'img-uncompressed',
    outputFolder: 'img'
};

elixir(function(mix) {
    /**
     * Minify images with ImageMin: https://github.com/imagemin/imagemin
     *  - gifsicle — Compress GIF images
     *  - jpegtran — Compress JPEG images
     *  - optipng — Compress PNG images
     *  - svgo — Compress SVG images
     * Use a Laravel Elixir wrapper for ImageMin
     * https://github.com/nathanmac/laravel-elixir-imagemin
     */
    mix.imagemin({
        optimizationLevel: 3, progressive: true, interlaced: true
    });
});
