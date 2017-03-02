module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    babel: {
      options: {
        sourceMap: true,
        presets: ['es2015']
      },
      dist: {
        files: {
          'dist/app.js': 'js/script.js' 
        }
      }
    }
  });


grunt.registerTask('default', ['babel']);
}
