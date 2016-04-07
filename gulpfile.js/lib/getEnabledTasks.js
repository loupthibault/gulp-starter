var config  = require('../config');
var compact = require('lodash/compact');
var forEach = require('lodash/forEach');

// Grouped by what can run in parallel
var assetTasks = ['fonts', 'iconFont', 'images'];
var codeTasks = ['html', 'css', 'js'];
var preCodeTasks = ['svgSprite'];

module.exports = function(env) {

  function matchFilter(task) {
    if(config.tasks[task]) {
      if(task === 'js') {
        task = env === 'production' ? 'webpack:production' : false;
      }
      return task;
    }
  }

  function exists(value) {
    return !!value;
  }

  function checkTasks(tasks, index, array) {
    tasks = compact(tasks.map(matchFilter).filter(exists));
    tasks = tasks.length ? tasks : false;
    array[index] = tasks;
  }

  return forEach({
    assetTasks: assetTasks,
    codeTasks: codeTasks,
    preCodeTasks: preCodeTasks
  },
  checkTasks);
};
