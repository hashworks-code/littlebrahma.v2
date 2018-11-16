module.exports = function () {

var root = './';
 var nodeModules = 'node_modules';
var source='src';
var assets='_assets';
var temp='tmp';
 var config = {
     temp:temp,
     build: './assets',
     source: source,
     css: assets + '/css/',
     fonts: assets + '/fonts/*.*',
     html: source + '/**/*.html',
     images: assets + '/images/**/**/**/*.*',
     index: source + '/index.html',
     sass: assets + '/css/pages/_sass/*.scss',
     js:assets + '/js',
    /**
     * browser sync
     */
    browserReloadDelay: 1000,
      packages: [
      './package.json'
    ],
    deploy:'./_site'
 }

 return config;

}
