var gulp = require('gulp'),
  path = require('path'),
  argv = require('minimist')(process.argv.slice(2)),
  chalk = require('chalk'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  sassyclean = require('gulp-sassyclean'),
  autoprefixer = require('autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  filter = require('gulp-filter');

/**
 * Normalize all paths to be plain, paths with no leading './',
 * relative to the process root, and with backslashes converted to
 * forward slashes. Should work regardless of how the path was
 * written. Accepts any number of parameters, and passes them along to
 * path.resolve().
 *
 * This is intended to avoid all known limitations of gulp.watch().
 *
 * @param {...string} pathFragment - A directory, filename, or glob.
*/
function normalizePath() {
  return path
    .relative(
      process.cwd(),
      path.resolve.apply(this, arguments)
    )
    .replace(/\\/g, "/");
}

// CSS generate and copy
gulp.task('pl-copy:css', function() {
    return gulp.src(path.resolve(paths().source.css + '/**/*.scss'))
        .pipe(sourcemaps.init())
        .pipe(sassyclean({
            directory: '.',
            remove: false
        }))
        .pipe(sass())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(path.resolve(paths().destination.css)))
        .pipe(filter('**/*.css'));
});

var config = require('./config.json');

function paths() {
  return config.paths;
}


gulp.task('default', gulp.series('pl-copy:css'));
