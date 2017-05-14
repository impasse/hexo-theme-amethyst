const gulp = require('gulp');
const stylus = require('gulp-stylus');
const autoprefixer = require('autoprefixer-stylus');
const clean = require('gulp-clean-css');


gulp.task('build', function() {
    return gulp.src('./source/_styl/app.styl')
    .pipe(stylus({
        'include css': true,
        use: [autoprefixer('last 2 versions')]
    }))
    .pipe(clean())
    .pipe(gulp.dest('./source/css/'));
});

gulp.task('watch', function(cb) {
    gulp.watch('./source/_styl/**/*.styl', ['build'], function() {
        console.info('Build complete');
    });
})