
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('css',
    function() {
        return gulp.src([
                'node_modules/bootstrap/dist/css/bootstrap.min.css'
            ])
            .pipe(sourcemaps.init())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('app/css'));
    });

gulp.task('scripts',
    function() {
        return gulp.src([
                'node_modules/bootstrap/dist/js/bootstrap.min.js',
                'node_modules/angular/angular.min.js'
            ])
            .pipe(sourcemaps.init())
            .pipe(sourcemaps.write('./'))
            .pipe(gulp.dest('app/scripts'));
    });


gulp.task('default', ['css', 'scripts']);