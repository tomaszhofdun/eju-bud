var gulp = require("gulp"),
  webpack = require("webpack");

// odpalamy webpacka i podajemy webpackowi plik konfiguracyjny

gulp.task("scripts", ["modernizr"], function(callback) {
  webpack(require("../../webpack.config.js"), function(err, stats) {
    if (err) {
      console.log(err.toString());
    }
    console.log(stats.toString());
    callback();
  });
});
