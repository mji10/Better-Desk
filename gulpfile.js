// ----------------------------------------------------------------------------------------------------------------------

// importing
import image from "gulp-image";
import webp from "gulp-webp";
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
  return sasscomplie;
});

// image optimization
gulp.task("image", function () {
  return gulp.src("assets/img/*").pipe(image()).pipe(gulp.dest("dist/img"));
});

// image convertion

gulp.task("webp", function () {
  return gulp
    .src("assets/img/*")
    .pipe(webp())
    .pipe(gulp.dest("assets/img"))
    .pipe(gulp.dest("dist/img"));
});

// Watch for changes
gulp.task("watch", function () {
  gulp.watch(["assets/sass/**/*.scss"], gulp.series("dev"));
});

// Default task - Development Mode
gulp.task("default", gulp.series("dev", "image", "webp", "watch"));
