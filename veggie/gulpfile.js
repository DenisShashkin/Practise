const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');


// const path = {
//     src: {
//         html: 'app/index.html',
//         styles: [
//             'app/css/*.css'
//         ],
//         js: [
//             'app/js/libs/*.js',
//             'app/js/bootstrap.js'
//         ],
//         fonts: 'app/fonts/**/*',
//         images: 'app/images/**'
        
//     },
//     build: {
//         html: 'build',
//         js: 'build/js/',
//         css: 'build/css/',
//         fonts: 'build/fonts/',
//         images: 'build/images/'
        
//     },
// }

gulp.task('sass', function () {
    return gulp.src('./css/main.scss')
     .pipe(sourcemaps.init())
     .pipe(sass.sync().on('error', sass.logError))
     .pipe(sourcemaps.write())
     .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./css/main.scss', ['sass']);
  });

  