var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');
var htmlreplace = require('gulp-html-replace');
var babel = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var reactify = require('reactify');
var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream')
var buffer = require('vinyl-buffer');

gulp.task('build', function () {
    browserify({
        entries: ['./src/main.js'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true
    })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(react({sourceMap: true}))
        .pipe(babel({
            presets: ['es2015']
        }))
        //.pipe(concat("app.js"))
        .pipe(uglify())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest("dist"));

    //gulp.src('client/index.js')


    /*var bundler = browserify({
     entries: ['./src/components/sdf/sdf.js'], // Only need initial file, browserify finds the deps
     transform: [reactify], // We want to convert JSX to normal javascript
     debug: true, // Gives us sourcemapping
     cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
     });
     var watcher  = watchify(bundler);

     return watcher
     .on('update', function () { // When any files update
     /!*var updateStart = Date.now();
     console.log('Updating!');
     watcher.bundle() // Create new bundle that uses the cache for high performance
     .pipe(source('main.js'))
     // This is where you add uglifying etc.
     .pipe(gulp.dest('./build/'));
     console.log('Updated!', (Date.now() - updateStart) + 'ms');*!/
     })
     .bundle() // Create the initial bundle when starting the task
     .pipe(source('app.js'))
     .pipe(gulp.dest('dist'));*/
});

//From https://jonsuh.com/blog/integrating-react-with-gulp/
gulp.task('eslint', function () {
    return gulp.src(jsFiles.source)
        .pipe(eslint({
            baseConfig: {
                "ecmaFeatures": {
                    "jsx": true
                }
            }
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});
gulp.task('concat', ['copy-react', 'copy-react-dom', 'eslint'], function () {
    return gulp.src(jsFiles.vendor.concat(jsFiles.source))
        .pipe(sourcemaps.init())
        .pipe(babel({
            only: [
                'assets/js/src/components',
            ],
            compact: false
        }))
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('assets/js'));
});