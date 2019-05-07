var gulp = require("gulp"),
  rename = require("gulp-rename"),
  svg = require("gulp-svg-sprite"),
  del = require("del"),
  svg2png = require("gulp-svg2png");

//   plik konfiguracyjny sprite ze scieżką do template
config = {
  mode: {
    css: {
      sprite: "sprite.svg",
      render: {
        css: {
          template: "gulp/templates/sprite.css"
        }
      }
    }
  }
};

gulp.task("deleteOldSpriteCss", function() {
  return del(["app/temp/sprite", "app/assets/images/icons/svg-compiled"]);
});

// sprite tworzy css-a z backgroundem i pozycją ikon oraz tworzy plik .svg ze wszystkimi ikonami
gulp.task("createSprite", ["deleteOldSpriteCss"], function() {
  return gulp
    .src("app/assets/images/icons/**/*.svg")
    .pipe(svg(config))
    .pipe(gulp.dest("app/temp/sprite"));
});

gulp.task("createPng", ["createSprite"], function() {
  return gulp
    .src("app/temp/sprite/css/*.svg")
    .pipe(svg2png())
    .pipe(gulp.dest("app/temp/sprite/css"));
});

// kopiujemy wygenerowany plik css tam gdzie mamy wszystkie style
gulp.task("copySpriteCss", function() {
  return gulp
    .src("app/temp/sprite/css/*.css")
    .pipe(rename("_sprite.css"))
    .pipe(gulp.dest("app/assets/styles/modules"));
});
gulp.task("copySpriteSvg", ["createPng"], function() {
  return gulp
    .src("app/temp/sprite/css/**/*.{svg,png}")
    .pipe(gulp.dest("app/assets/images/icons/svg-compiled"));
});
gulp.task("endCleaning", ["copySpriteCss", "copySpriteSvg"], function() {
  return del("app/temp/sprite");
});

gulp.task("icons", [
  "deleteOldSpriteCss",
  "copySpriteCss",
  "createPng",
  "copySpriteSvg",
  "endCleaning"
]);
