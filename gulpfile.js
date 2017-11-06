var gulp = require('gulp');
var bs = require('browser-sync').create();

gulp.task('browser-sync', function() {
  bs.init({
    server: {
      baseDir: ["./", "./src"]
    },
    // socket: {
    // domain: "localhost:3000"
    // }
  })
})


gulp.task('watch', ['browser-sync'], function () {
    gulp.watch("./**/*.{html,css,js}").on('change', bs.reload);
});

gulp.task('default', ['watch']);