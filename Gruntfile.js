'use strict';

module.exports = function (grunt)
{
  require('load-grunt-tasks')(grunt);

  require('time-grunt')(grunt);

  var appConfig = {
    app: require('./bower.json').appPath || 'web',
    dist: './dist',
	vendor: './bower_components',
	tmp: './.tmp',
    phonegap: './phonegap/www',
    release: grunt.template.today('yyyy_mm_dd_hh_MM_ss')
  };

    var gruntConfig = {
        yeoman: appConfig,
        pkg: grunt.file.readJSON('package.json')
    };

    grunt.util._.extend(gruntConfig, loadConfig('./grunt/'));

    grunt.initConfig(gruntConfig);

  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
	  'concat',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('build:phonegap', [
    'clean:dist',
    'compass:dist',
    'autoprefixer',
    'concat',
    'ngmin',
      'cssmin:phonegap',
    'copy:phonegap',
      'string-replace:phonegap',
      'exec:run_phonegap_android'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
      'compass:dist',
    'autoprefixer',
    'concat',
    'ngmin',
    'copy:dist',
      'concurrent:dist',
    'filerev',
    'usemin',
    'htmlmin'
  ]);
  
  grunt.registerTask('deploy', [
	  'build',
	  'exec:deploy',
      'exec:slack'
  ]);

  grunt.registerTask('default', [
    'test',
    'build'
  ]);
};

function loadConfig(path) {
    var glob = require('glob');
    var object = {};
    var key;

    glob.sync('*', {cwd: path}).forEach(function(option) {
        key = option.replace(/\.js$/,'');
        object[key] = require(path + option);
    });

    return object;
}
