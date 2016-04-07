var config      = require('../config');
if(!config.tasks.svgSprite) return;

var browserSync = require('browser-sync');
var gulp        = require('gulp');
var imagemin    = require('gulp-imagemin');
var svgstore    = require('gulp-svgstore');
var path        = require('path');
var inject      = require('gulp-inject');

var svgSpriteTask = function() {

  var paths = {
    src: path.join(config.root.src, config.tasks.svgSprite.src, '/*.svg'),
    dest: path.join(config.root.dest, config.tasks.html.dest)
  };

  var bundleSvg = gulp.src(paths.src)
    .pipe(imagemin())
    .pipe(svgstore());
  
  if( config.tasks.html) {
    return gulp
      .src(path.join(paths.dest, "**/*.html"))
      .pipe(inject(bundleSvg, {
        transform: function(filePath, file){
          return file.contents.toString();
        }
      }))
      .pipe(gulp.dest(paths.dest))
      .pipe(browserSync.stream());
  }
  else {
    return bundleSvg
      .pipe(gulp.dest(paths.dest))
      .pipe(browserSync.stream());
  }
};

gulp.task('svgSprite', svgSpriteTask);
module.exports = svgSpriteTask;
