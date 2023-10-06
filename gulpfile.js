const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const watch = require("gulp-watch");

gulp.task("sass-compile", function () {
  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("./src/css/"));
});

gulp.task("watch", function () {
  gulp.watch("./src/scss/**/*.scss", gulp.series("sass-compile"));
});
