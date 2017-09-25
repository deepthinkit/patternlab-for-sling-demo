const gulp        = require('gulp');
const sass        = require('gulp-sass');
const minifyCss   = require('gulp-minify-css');
const sourceMaps  = require('gulp-sourcemaps');
const concat      = require('gulp-concat');
const uglify      = require('gulp-uglify');
const slang       = require('gulp-slang');
const argv        = require('yargs').argv;

const slingHost = argv.slingHost ? argv.slingHost : 'localhost';
const slingPort = argv.slingPort ? argv.slingPort : 8080;
const slingPass = argv.slingPass ? argv.slingPass : 'admin';
const slingUser = argv.slingUser ? argv.slingUser : 'admin';

const designs = 'src/main/resources/jcr_root/etc/designs/patternlab-demo/clientlib';
const jcr_root = 'src/main/resources/jcr_root/**/*.*'

gulp.task('css', function() {
    return gulp.src(designs + '/css/**/*.scss')
        .pipe(sourceMaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCss())
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest(designs + '/css'));
});

gulp.task('js', function ()
{
    return gulp.src(designs + '/js/scripts/*.js')
        .pipe(sourceMaps.init())
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest(designs + '/js'));
});

gulp.task('default',function() {
    gulp.watch(designs + '/css/**/*.scss',['styles']);
    gulp.watch(designs + '/js/scripts/*.js',['js']);
    gulp.watch(jcr_root, function(event) {
        return gulp.src(event.path).pipe(slang({ host: slingHost, port: slingPort, username: slingUser, password: slingPass }));
    });
});

gulp.task('build', ['css','js'], function() {});