const mix = require('laravel-mix');

mix.webpackConfig({
   resolve: {
      alias: {
         '@': path.resolve(__dirname, 'resources/js'),
         '@tim': path.resolve(__dirname, 'services/tim'),
         '@trax': path.resolve(__dirname, 'services/trax/framework/front'),
         '@lrs': path.resolve(__dirname, 'services/trax/lrs/resources'),
      }
   }
});

mix.options({
      processCssUrls: false,
      terser: {
         extractComments: false,
      }
   })

   // LRS.
   .js('services/trax/lrs/resources/js/app.js', 'public/js/lrs.js')
   .sass('services/trax/lrs/resources/sass/app.scss', 'public/css/lrs.css')
   
   .sourceMaps()
;

if (mix.inProduction()) {
   mix.minify([

      'public/js/lrs.js',
      'public/css/lrs.css',

   ]).version();
}
