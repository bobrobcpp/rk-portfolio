var gulp = require('gulp');
var bs = require('browser-sync').create();
var responsive = require('gulp-responsive');
var $ = require('gulp-load-plugins')();

gulp.task('images', function() {
  return gulp
    .src('testimg/*.jpg')
    .pipe(
      $.responsive(
        {
          // Resize all JPG images to three different sizes: 200, 500, and 630 pixels
          '*.jpg': [
            {
              width: 1260,
              rename: { suffix: '-1260px' }
              // withoutEnlargement: false
            },
            {
              width: 420,
              rename: { suffix: '-420px' }
            },
            {
              // Compress, strip metadata, and rename original image
              rename: { suffix: '-original' }
            }
          ]
        },
        {
          // Global configuration for all images
          // The output quality for JPEG, WebP and TIFF output formats
          quality: 70,
          // Use progressive (interlace) scan for JPEG and PNG output
          progressive: true,
          // Strip all metadata
          withMetadata: false
        }
      )
    )
    .pipe(gulp.dest('dist'));
});

gulp.task('browser-sync', function() {
  bs.init({
    server: {
      baseDir: ['./', './src']
    },
    port: 8080
  });
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('./**/*.{html,css,js}').on('change', bs.reload);
});

gulp.task('default', ['watch']);
