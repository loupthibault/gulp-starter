var gulp            = require('gulp');
var gulpSequence    = require('gulp-sequence');
var getEnabledTasks = require('../lib/getEnabledTasks');

var defaultTask = function(cb) {
  var tasks = getEnabledTasks('watch');
  gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, tasks.preCodeTasks, 'watch', cb);
};

var productionTask = function(cb) {
  global.production = true;
  var tasks = getEnabledTasks('production');
  gulpSequence('clean', tasks.assetTasks, tasks.codeTasks, 'size-report', 'static', cb);
};

gulp.task('default', defaultTask);
gulp.task('production', productionTask);
