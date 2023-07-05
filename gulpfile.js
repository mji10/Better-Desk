// ----------------------------------------------------------------------------------------------------------------------

// Just for DEVELOPMENT Mode
// const gulp = require('gulp');
// const sass = require("gulp-sass");
// const autoprefixer = require("gulp-autoprefixer");
// const imagemin = require("gulp-imagemin");

// importing
import imagemin from "gulp-imagemin";
import autoprefixer from "gulp-autoprefixer";
import gulp from "gulp";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import sourcemaps from "gulp-sourcemaps";
const sass = gulpSass(dartSass);

// Compile Sass to CSS
gulp.task("dev", function () {
  // Convert scss into css

  const sasscomplie = gulp
    .src("assets/sass/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("assets/css"));

  // Optimize image

  // const imageOptim = gulp
  //   .src("assets/img*.{png,jpg}")
  //   .pipe(imagemin())
  //   .pipe(gulp.dest("assets/css"));

  // console.log("div is running");

  return sasscomplie;
});

gulp.task("imagemin", function () {
  return gulp
    .src("assets/img*.{png,jpg}")
    .pipe(
      imagemin([
        imagemin.mozjpeg({ quality: 75, progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
      ])
    )
    .pipe(gulp.dest("assets/img"));
});

// Watch for changes
gulp.task("watch", function () {
  gulp.watch(["assets/sass/**/*.scss"], gulp.series("dev"));
});

// gulp.task("watch", function () {
//   gulp.watch("assets/sass/**/*.scss", gulp.series("dev"));
//   gulp.watch("assets/img*.{png,jpg}", gulp.series("dev"));
// });

// Default task - Development Mode
gulp.task("default", gulp.series("dev", "imagemin", "watch"));

// 2nd Method

// import imagemin from "gulp-imagemin";
// import autoprefixer from "gulp-autoprefixer";
// import gulp from "gulp";
// import dartSass from "sass";
// import gulpSass from "gulp-sass";
// const sass = gulpSass(dartSass);

// // Compile Sass to CSS
// gulp.task("dev", function () {
//   // Convert scss into css
//   return gulp
//     .src("assets/sass/**/*.scss")
//     .pipe(sass().on("error", sass.logError))
//     .pipe(autoprefixer())
//     .pipe(gulp.dest("assets/css"));
// });
// // Optimize image

// gulp.task("minifyImage", function () {
//   return gulp
//     .src("assets/img*.{png,jpg}")
//     .pipe(imagemin())
//     .pipe(gulp.dest("assets/css"));
// });
// // });

// // Watch for changes
// // gulp.task("watch", function () {
// //   gulp.watch(
// //     ["assets/sass/**/*.scss", "assets/img*.{png,jpg}"],
// //     gulp.series("dev")
// //   );
// // });

// gulp.task("watch", function () {
//   gulp.watch("assets/sass/**/*.scss", gulp.series("dev"));
//   gulp.watch("assets/img*.{png,jpg}", gulp.series("minifyImage"));
// });

// // Default task - Development Mode
// gulp.task("default", gulp.series("dev", "watch"));

// gulp.task("prod", gulp.series("minifyImage", "watch"));
