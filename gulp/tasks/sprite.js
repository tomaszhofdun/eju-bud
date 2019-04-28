var gulp = require("gulp"),
  rename = require("gulp-rename"),
  svg = require("gulp-svg-sprite");

config = {
  mode: {
    css: {
      render: {
        css: {
          template: "gulp/templates/sprite.css"
        }
      }
    }
  }
};

gulp.task("createSprite", function() {
  return gulp
    .src("app/assets/images/icons/**/*.svg")
    .pipe(svg(config))
    .pipe(gulp.dest("app/temp/sprite/"));
});

gulp.task("copySpriteCss", function() {
  return gulp
    .src("app/temp/sprite/css/*.css")
    .pipe(rename("_sprite.css"))
    .pipe(gulp.dest("app/assets/styles/modules/"));
});
