var gulp = require("gulp"),
  imagemin = require("gulp-imagemin"),
  del = require("del"),
  usemin = require("gulp-usemin"),
  rev = require("gulp-rev"),
  cssnano = require("gulp-cssnano"),
  uglify = require("gulp-uglify");

gulp.task("deleteDistFolder", function() {
  return del("./dist");
});

gulp.task("copyOtherFiles", ["deleteDistFolder"], function() {
  var pathToCopy = [
    "./app/**/*",
    "!./app/index.html",
    "!./app/assets/images/**",
    "!./app/assets/styles/**",
    "!./app/assets/scripts/**",
    "!./app/temp",
    "!./app/temp/**"
  ];
  return gulp.src(pathToCopy).pipe(gulp.dest("./dist"));
});

gulp.task("optimizeImages", ["deleteDistFolder", "icons"], function() {
  return gulp
    .src([
      "./app/assets/images/**/*",
      "!./app/assets/images/icons/svg",
      "!./app/assets/images/icons/svg/**/*",
      "!./app/assets/images/temp",
      "!./app/assets/images/temp/**/*"
    ])
    .pipe(
      imagemin({
        progressive: true,
        interlaced: true,
        multipass: true
      })
    )
    .pipe(gulp.dest("./dist/assets/images"));
});

gulp.task("usemin", ["deleteDistFolder", "css", "scripts"], function() {
  return gulp
    .src(["./app/index.html", "./app/cennik.html"])
    .pipe(
      usemin({
        css: [
          function() {
            return rev();
          },
          function() {
            return cssnano();
          }
        ],
        js: [
          function() {
            return rev();
          },
          function() {
            return uglify();
          }
        ]
      })
    )
    .pipe(gulp.dest("./dist"));
});

gulp.task("build", [
  "deleteDistFolder",
  "copyOtherFiles",
  "optimizeImages",
  "usemin"
]);
