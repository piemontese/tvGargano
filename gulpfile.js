const gulp = require('gulp');
//const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');

//gulp.task('default', function () {});

/*
gulp.task('clean-images', function () {
  gulp.src('src/images/minified', {read: false})
    .pipe(clean())
});
*/

gulp.task('default', () =>
    gulp.src('dist/app/images/*')
        .pipe(imagemin([
                imagemin.gifsicle({interlaced: true}),
                imagemin.jpegtran({progressive: true}),
                imagemin.optipng({optimizationLevel: 20}),
                imagemin.svgo({
                    plugins: [
                        {removeViewBox: true},
                        {cleanupIDs: false}
                    ]
                })], {
                    verbose: true }
                ))
        .pipe(gulp.dest('dist/app/images'))
);
