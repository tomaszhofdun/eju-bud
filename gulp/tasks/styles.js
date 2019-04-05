var gulp = require("gulp"),
  postcss = require("gulp-postcss"),
  autoprefixer = require("autoprefixer"),
  sourcemaps = require("gulp-sourcemaps"),
  simpleVars = require("postcss-simple-vars"),
  nested = require("postcss-nested"),
  importCss = require("postcss-import"),
  mixin = require("postcss-mixins");

gulp.task("css", function() {
  return gulp
    .src("app/assets/styles/styles.css")
    .pipe(sourcemaps.init())
    .pipe(
      postcss([importCss(), mixin(), simpleVars(), autoprefixer(), nested()])
    )
    .on("error", function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit("end");
    })
    .pipe(sourcemaps.write())

    .pipe(gulp.dest("app/temp/styles/"));
});
