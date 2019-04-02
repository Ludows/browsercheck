const gulp = require("gulp");
const sass = require("gulp-sass");
const aegean = require('gulp-aegean');
const requireFile = require('gulp-require-file');
const rename = require("gulp-rename");
const babel = require('gulp-babel');
const rollup = require('gulp-rollup');

// const umd = require('gulp-umd');

function devMode(done) {
    return gulp.src('./src/js/browsercheck.js')
        .pipe(rollup({
            format: "umd",
            moduleName: "BrowserCheck",
            entry: "./src/js/browsercheck.js"
        }))
        .pipe(rename("browsercheck.es2015.js"))
        .pipe(gulp.dest('dist'))   // --> writing rolledup
        // ----------- babelizing --------------
        .pipe(babel({
            "presets": [
                [
                  "@babel/preset-env", {
                      "modules" : false,
                    //   "useBuiltIns": "usage",
                      "targets": {
                        "browsers": "last 6 years"
                      },
                      "include" : [
                          "es6.array.some"
                      ],
                      "debug": true                  }
                  
                ]
            ],
            "plugins" : ["@babel/plugin-transform-classes", 
            "@babel/plugin-transform-object-assign", 
            "@babel/plugin-proposal-object-rest-spread",
            "@babel/plugin-transform-template-literals",
            "@babel/plugin-transform-shorthand-properties",
            "@babel/plugin-transform-parameters",
            "@babel/plugin-transform-arrow-functions",
            "transform-es2017-object-entries" ]
        }))
        .pipe(rename("browsercheck.js"))
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
