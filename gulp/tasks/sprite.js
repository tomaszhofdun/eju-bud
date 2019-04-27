var gulp = require("gulp"),
    svg = require("gulp-svg-sprite");

gulp.task("createSprite", function () {
    return src("app/assets/images/icons/**/*.svg")
        .pipe(gulp.dest("app/temp/sprite/"));
})