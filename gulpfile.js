const gulp = require("gulp");
const sass = require("gulp-sass");
const aegean = require('gulp-aegean');
const requireFile = require('gulp-require-file');
const babel = require('gulp-babel');
// const umd = require('gulp-umd');

function devMode(done) {
    return gulp.src('./src/js/browsercheck.js')
        .pipe(babel({
            "presets": [
                [
                  "@babel/preset-env",
                  {
                    "useBuiltIns": "entry",
                    "modules": "umd",
                    "loose": true,
                    // "esmodules": false
                    "targets": {
                        "esmodules": true
                      }
                  }
                ]
            ]
            // plugins: ["@babel/plugin-transform-modules-umd"]
        }))
        .pipe(gulp.dest('dist'))
        done()
}

function productionMode() {
    return gulp;
}

function watchFiles() {
    gulp.watch("./src/js/*", devMode);
}

const devTask = gulp.series(devMode)
const prodTask = gulp.series(productionMode)
const watchTask = gulp.parallel(watchFiles)

exports.dev = devTask
exports.prod = prodTask
exports.watch = watchTask
exports.default = watchTask
