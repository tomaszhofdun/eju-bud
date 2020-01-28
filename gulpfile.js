var gulp = require('gulp'),
modernizr = require("gulp-modernizr"),
postcss = require("gulp-postcss"),
autoprefixer = require("autoprefixer"),
sourcemaps = require("gulp-sourcemaps"),
simpleVars = require("postcss-simple-vars"),
nested = require("postcss-nested"),
importCss = require("postcss-import"),
mixin = require("postcss-mixins"),
webpack = require("webpack"),
rename = require("gulp-rename"),
svg = require("gulp-svg-sprite"),
watch = require("gulp-watch"),
browserSync = require("browser-sync").create(),
del = require("del"),
imagemin = require("gulp-imagemin"),
usemin = require("gulp-usemin"),
rev = require("gulp-rev"),
cssnano = require("gulp-cssnano"),
uglify = require("gulp-uglify"),
svg2png = require("gulp-svg2png");

const { series, parallel } = require('gulp');




  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
    //   modernizr
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  // Add classes like "flexbox" to html tag
  
  gulp.task("setClasses2",function setClasses2(){
    return gulp
      .src(["./app/assets/styles/**/*.css", "./app/assets/scripts/**/*.js"])
      .pipe(
        modernizr({
          options: ["setClasses"]
        })
      )
      .pipe(gulp.dest("app/assets/scripts/modules"));
  })

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
    //   scripts
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  gulp.task("scripts", function scripts(callback) {
    webpack(require("./webpack.config.js"), function(err, stats) {
      if (err) {
        console.log(err.toString());
      }
      console.log(stats.toString());
      callback();
    });
  })
  
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
    //   styles
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  gulp.task("css", function css() {
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
  })

  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
    //sprite
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  //   plik konfiguracyjny sprite ze scieżką do template
config = {
    shape: {
      spacing: {
        padding: 1
      }
    },
    mode: {
      css: {
        variables: {
          replaceSvgWithPng: function() {
            return function(sprite, render) {
              return render(sprite)
                .split(".svg")
                .join(".png");
            };
          }
        },
        sprite: "sprite.svg",
        render: {
          css: {
            template: "gulp/templates/sprite.css"
          }
        }
      }
    }
  };
  gulp.task("deleteOldSpriteCss",function deleteOldSpriteCss() {
    return del(["app/temp/sprite", "app/assets/images/icons/svg-compiled"]);
  });
  
  
  // sprite tworzy css-a z backgroundem i pozycją ikon oraz tworzy plik .svg ze wszystkimi ikonami
  gulp.task("createSprite",function createSprite() {
    return gulp
      .src("./app/assets/images/icons/**/*.svg")
      .pipe(svg(config))
      .pipe(gulp.dest("./app/temp/sprite"));
  });
  
  
  gulp.task("createPng",function createPng() {
    return gulp
      .src("app/temp/sprite/css/*.svg")
      .pipe(svg2png())
      .pipe(gulp.dest("app/temp/sprite/css"));
  });
  
  
  // kopiujemy wygenerowany plik css z pozycją każej ikony tam gdzie mamy wszystkie style
  gulp.task("copySpriteCss",function copySpriteCss() {
    return gulp
      .src("app/temp/sprite/css/*.css")
      .pipe(rename("_sprite.css"))
      .pipe(gulp.dest("app/assets/styles/modules"));
  });
  
  
  // kopiujemy utworzony zbiorczy svg i png do folderu app/assets/images
  gulp.task("copySpriteSvg",function copySpriteSvg() {
    return gulp
      .src("app/temp/sprite/css/**/*.{svg,png}")
      .pipe(gulp.dest("app/assets/images/icons/svg-compiled"));
  });
  
  // kasujemy folder sprite w katalogu sprite
  gulp.task("endCleaning",function endCleaning() {
    return del("app/temp/sprite");
  });
  
  
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
    //   watch
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////


  gulp.task("monitor", function monitor() {
    browserSync.init({
      notify: true,
      server: {
        baseDir: "./app"
      }
    });
  
    watch("app/index.html", function () {
      browserSync.reload();
    })
    watch("app/assets/styles/**/*.css", gulp.series("css","cssInject"))
    watch("app/assets/scripts/**/*.js", gulp.series("setClasses2","scripts","refreshSite"))
  } ) 
  
  gulp.task("cssInject", function cssInject() {
    return gulp.src("app/temp/styles/styles.css").pipe(browserSync.stream());
  })
  
  gulp.task("refreshSite", function refreshSite() {
    browserSync.reload();
  })
  
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////
    //   build
  ////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////

  gulp.task("deleteDistFolder", function deleteDistFolder() {
    return del("./dist")
  });

  gulp.task("copyOtherFiles", function copyOtherFiles() {
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

  gulp.task("optimizeAndCopyImages", function optimizeAndCopyImages() {
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

  gulp.task("use_min", function use_min() {
    return gulp
      .src([
        "./app/index.html",
        "./app/cennik.html",
        "./app/failmail.html",
        "./app/successmail.html"
      ])
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

  gulp.task("scripts_with_modernizr", gulp.series("setClasses2", "scripts"))
  
  gulp.task("icons", gulp.series("deleteOldSpriteCss", "createSprite",  "copySpriteCss", "createPng", "copySpriteSvg", "endCleaning"))

  gulp.task("build", gulp.series("deleteDistFolder", "copyOtherFiles", "icons", "optimizeAndCopyImages", "css", "scripts_with_modernizr", "use_min"))
 