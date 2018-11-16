  var args = require('yargs').argv;
  var browserSync = require('browser-sync');
  var config = require('./gulp.config')();
  var gulp = require('gulp');
  var path = require('path');
  var del = require('del');
  var gh_deploy = require('gulp-gh-pages');

  var $ = require('gulp-load-plugins')({
      lazy: true
  });

  var colors = $.util.colors;
  /**
   * Push build to gh-pages
   */
  gulp.task('deploy', function() {
      return gulp.src("./dist/**/*")
          .pipe(gh_deploy())
  });

  var deploy = config.deploy;
  /**
   * vet the code and create coverage report
   * @return {Stream}
   */
  gulp.task('vet', function() {
      log('Analyzing source with JSHint and JSCS');

      return gulp
          .src(config.alljs)
          .pipe($.if(args.verbose, $.print()))
          .pipe($.jshint())
          .pipe($.jshint.reporter('jshint-stylish', {
              verbose: true
          }))
          .pipe($.jshint.reporter('fail'));
      //.pipe($.jscs());
  });





  /**
   * Compile sass to css
   * @return {Stream} ['clean-styles']
   */

  gulp.task('page-styles', function() {
      log('Compiling Sass --> CSS');

      return gulp
          .src(config.sass)
          .pipe($.plumber()) // exit gracefully if something fails after this
          .pipe($.sass().on('error', $.sass.logError))
          // more verbose and dupe output. requires emit.
          .pipe($.autoprefixer({
              browsers: ['last 2 version', '> 5%']
          }))
          .pipe(gulp.dest(config.temp + '/css/'));
  });

  gulp.task('vendor-styles', function() {
      log('Compiling vendor styles');

      return gulp
          .src(config.css + '/vendor/**/*.css')
          .pipe($.concat('vendor.min.css'))
          .pipe(gulp.dest(config.temp + '/css/'));
  });


  gulp.task('temp-styles', ['page-styles', 'vendor-styles']);

  gulp.task('dev-styles', ['temp-styles'], function() {

      return gulp
          .src(config.temp + '/css/**/*.css')
          .pipe(gulp.dest(config.build + '/css'))
          // .pipe(browserSync.reload({stream:true, once: true}));;  


  })


  /**
   * Compile sass to css
   * @return {Stream} ['clean-styles']
   */

  gulp.task('page-scripts', function() {
      log('assets js --> temp js');

      return gulp
          .src(config.js + '/pages/*.js')
          .pipe(gulp.dest(config.temp + '/js/pages/'));
  });

  gulp.task('vendor-scripts', function() {
      log('assets vendor js --> temp vendor js');

      return gulp
          .src(config.js + '/vendor/*.js')
          .pipe($.concat('vendor.js'))
          .pipe(gulp.dest(config.temp + '/js/vendor/'));
  });


  gulp.task('temp-scripts', ['page-scripts', 'vendor-scripts']);


  gulp.task('dev-scripts', ['temp-scripts'], function() {

      return gulp
          .src(config.temp + '/js/**/*.js')
          .pipe(gulp.dest(config.build + '/js'))
          //.pipe(browserSync.reload({stream:true, once: true}));;  


  })


  /**
   * Copy fonts
   * @return {Stream}
   */
  gulp.task('fonts', function() {
      log('Copying fonts');

      return gulp
          .src(config.fonts)
          .pipe(gulp.dest(config.build + '/font/'));
  });


  /**
   * Compress images
   * @return {Stream}
   */
  gulp.task('images', function() {
      log('Compressing and copying images');

      return gulp
          .src(config.images)
          // .pipe($.imagemin({
          //   optimizationLevel: 4
          // }))
          .pipe(gulp.dest(config.build + '/img/'));
  });



  /**
   * Build everything
   * This is separate so we can run tests on
   * optimize before handling image or fonts
   */
  gulp.task('build', ['build-css', 'build-js', 'fonts', 'images'], function() { 
      log('Building everything');

      var msg = {
          title: 'gulp build',
          subtitle: 'Deployed to the build folder',
          message: 'Running `gulp serve-build`'
      };
      del(config.temp);
      log(msg);
      // notify(msg);
  });




  /**
   * Remove all fonts from the build folder
   * @param  {Function} done - callback when complete
   */
  gulp.task('clean-fonts', function(done) {
      clean(config.build + '/font/**/*.*', done);
  });

  /**
   * Remove all images from the build folder
   * @param  {Function} done - callback when complete
   */
  gulp.task('clean-images', function(done) {
      clean(config.build + '/images/**/*.*', done);
  });

  /**
   * Remove all styles from the build and temp folders
   * @param  {Function} done - callback when complete
   */
  gulp.task('clean-page-styles', function(done) {

      var files = [].concat(
          config.temp + '/css/pages/**/*.css',
          config.build + '/css/pages/**/*.css'
      );
      clean(files, done);
  });

  gulp.task('clean-vendor-styles', function(done) {

      var files = [].concat(
          config.temp + '/css/vendor/**/*.css',
          config.build + '/css/vendor/**/*.css'
      );
      clean(files, done);
  });


  gulp.task('clean-page-scripts', function(done) {

      var files = [].concat(
          config.temp + '/js/pages/*.js',
          config.build + '/js/pages/*.js'
      );
      clean(files, done);
  });


  gulp.task('clean-vendor-scripts', function(done) {

      var files = [].concat(
          config.temp + '/js/vendor/*.js',
          config.build + '/js/vendor/*.js'
      );
      clean(files, done);
  });



  /**
   * Delete all files in a given path
   * @param  {Array}   path - array of paths to delete
   * @param  {Function} done - callback when complete
   */
  function clean(path, done) {
      log('Cleaning: ' + $.util.colors.blue(path));
      del(path, done);
  }


  /**
   * Log a message or series of messages using chalk's blue color.
   * Can pass in a string, object or array.
   */
  function log(msg) {
      if (typeof(msg) === 'object') {
          for (var item in msg) {
              if (msg.hasOwnProperty(item)) {
                  $.util.log($.util.colors.blue(msg[item]));
              }
          }
      } else {
          $.util.log($.util.colors.blue(msg));
      }
  }




  /**
   * Optimize all files, move to a build folder,
   * and inject them into the new index.html
   * @return {Stream}
   */
  gulp.task('optimize-css', ['page-styles'], function() {
      log('Optimizing css');
      return gulp
          .src(config.temp + '/css/*.css')
          .pipe($.cleanCss())
          .pipe(gulp.dest(config.build + '/css'));
  });

  gulp.task('optimize-vendor-css', ['vendor-styles'], function() {
      log('Optimizing vendor css');
      return gulp
          .src(config.temp + '/vendor/*.css')
          .pipe($.concat('vendor.min.css'))
          .pipe($.cleanCss())
          .pipe(gulp.dest(config.build + '/css'));
  });

  gulp.task('build-css', ['optimize-css', 'optimize-vendor-css']);


  gulp.task('optimize-vendor-js', ['vendor-scripts'], function() {
      log('Optimizing js');
      return gulp
          .src(config.temp + '/js/vendor/*.js')
          .pipe($.concat('vendor.js'))
          .pipe($.uglify())
          .pipe(gulp.dest(config.build + '/js/vendor'));

  });
  gulp.task('optimize-page-js', ['page-scripts'], function() {
    var gutil = require('gulp-util');
      log('Optimizing js');
      return gulp
          .src(config.temp + '/js/pages/*.js')
          .pipe($.uglify())
          .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
          
          .pipe(gulp.dest(config.build + '/js/pages'));

  });

  gulp.task('build-js', ['optimize-page-js', 'optimize-vendor-js']);




  gulp.task('serve-dev-assets', ['dev-styles', 'dev-scripts', 'fonts', 'images'], function() {
      log('Building everything for development');

      var msg = {
          title: 'gulp dev-assets',
          subtitle: 'Assets  build  for development',
          message: 'Running `gulp serve-dev`'
      };
      del(config.temp);
      log(msg);
      // notify(msg);
  });






  gulp.task('clean', ['clean-fonts', 'clean-page-styles', 'clean-vendor-styles', 'clean-page-scripts', 'clean-vendor-scripts', 'clean-fonts', 'clean-images'])
  gulp.task('serve-dev', ['jekyll-build'], function() {

      //gulp.start('clean');
      gulp.start('browser-sync');


  });


  var exec = require('child_process').exec;
  gulp.task('jekyll-build', ['serve-dev-assets'], function(cb) {
      // build Jekyll
      exec('bundle exec jekyll build', function(err) {
          if (err) return cb(err); // return error
          cb(); // finished task
      });
  });


// -->
// Browser Sync
// <--
gulp.task('browser-sync',['jekyll-build'], function() {
    browserSync.init(null, {
        server: {
            baseDir: "./" + deploy
        }
    });
     gulp.watch(config.js+"/**/*.js", ['rebuild']);
     gulp.watch(config.css+"/**/*.scss", ['rebuild']);
      gulp.watch("./**/*.html", ['rebuild']);
});



  // -->
  // Browser Sync
  // <--
  gulp.task('browser-sync', ['jekyll-build'], function() {
      browserSync.init(null, {
          server: {
              baseDir: "./" + deploy
          }
      });
      gulp.watch(config.js + "/**/*.js", ['rebuild']);
      gulp.watch(config.css + "/**/*.scss", ['rebuild']);
      gulp.watch('./_layouts/**/*.html', ['rebuild']);
      gulp.watch('./**/*.md', ['rebuild']);
  });


  gulp.task('rebuild', ['jekyll-build'], function() {

      browserSync.reload();

  });


  // -->
  // Default task
  // <--

  gulp.task('default', ['serve-dev']);

 

  /**
   * Compress images
   * @return {Stream}
   */
  gulp.task('compress-images', function() {
      log('Compressing and copying images');

      return gulp
          .src(config.images)
          .pipe($.imagemin({
            optimizationLevel: 5,
            verbose:true
          }))
          .pipe(gulp.dest('_assets/op-img/'));
  });

   gulp.task('compress-data-images', function() {
      log('Compressing and copying images');

      return gulp
          .src('./_assets/**/**/*.*')
          .pipe($.imagemin({
            optimizationLevel: 5,
            verbose:true
          }))
          .pipe(gulp.dest('_assets/'));
  });