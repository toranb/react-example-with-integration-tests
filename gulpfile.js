var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var concat = require('gulp-concat');
var karma = require('gulp-karma');
var generateSuite = require('gulp-mocha-browserify-sweet');

gulp.task('default', function() {
    var bundle = browserify({entries: './src/main.js'})
        .transform('reactify')
        .bundle({ debug: true })
        .pipe(source('deps.min.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('test', ['test-suite'], function() {
    browserify({entries: './dist/suite.js'})
        .transform('reactify')
        .bundle({ debug: true })
        .pipe(source('deps.min.js'))
        .pipe(gulp.dest('dist'))
        .pipe(karma({
            configFile: 'karma.conf.js',
            action: 'run'
        }));
});

gulp.task('test-suite', function() {
    return gulp.src('test/**/*spec.js')
        .pipe(generateSuite({addPrefix: '../test'}))
        .pipe(concat('suite.js'))
        .pipe(gulp.dest('dist'));
});
