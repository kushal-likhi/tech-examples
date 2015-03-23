module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    //Lets read the project package.json
    pkg: grunt.file.readJSON('package.json'),
    //Some other configs
    someKey: 'Some Value',
    author: 'Modulus.io',
    filePostfix: '-<%= pkg.name %>-<%= pkg.version %>',
    greetingMessage: 'Running Grunt for project: <%= pkg.name %>, Version: <%= pkg.version %>, Author: <%= author %>. ',

    //Configure Clean Module
    clean: {
      npm: 'npm-debug.log',
      temp: ['temp', '.tmp'],
      dist: ['dist', 'out/dist']
    }
  });

  // Load the plugin that provides the "clean" task.
  grunt.loadNpmTasks('grunt-contrib-clean');


  //Lets register a basic task.
  grunt.registerTask('print-info', 'Lets print some info about the project.', function() {
    grunt.log.write(grunt.config('greetingMessage')).ok();
  });

  //Specify a custom task which is combination of taks.
  grunt.registerTask('my-clean', ['print-info', 'clean:dist', 'clean:npm']);

  //Specify a default task
  grunt.registerTask('default', ['my-clean', 'clean:temp']);

};
