var gulp = require("gulp"),
  watch = require("gulp-watch"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  sourcemaps = require("gulp-sourcemaps"),
  simpleVars = require("postcss-simple-vars"),
  nested = require("postcss-nested"),
  importCss = require("postcss-import");

gulp.task("watch", function() {
  watch("app/index.html", function() {
    gulp.start("html");
  });
  watch("app/assets/styles/**/*.css", function() {
    gulp.start("css");
  });
});

gulp.task("html", function() {});

//przerwa tymczasowa
gulp.task("css", function() {
  return gulp
    .src("app/assets/styles/styles.css")
    .pipe(sourcemaps.init())
    .pipe(postcss([importCss(), autoprefixer(), simpleVars(), nested()]))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("app/temp/styles/"));
});
