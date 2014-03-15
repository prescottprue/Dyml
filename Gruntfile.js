module.exports = function(grunt) {
  grunt.registerTask('watch', [ 'watch' ]);
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    //config: grunt.file.readJSON('config.json'),Trying for storing variables else where,
    connect: {
      server: {
        options: {
          port: 2009,
          //keepalive: true, keeping grunt running
          //livereload:true,
          open:{
            target: 'http://localhost:2009/app',
            appName: 'Google Chrome',
          }
      }
    }
    },
    less:{
      style:{
        files:{
          "app/css/styles.css": "./app/less/styles.less"
        },
      }
    },
    
    watch:{
      css:{
        files: ["app/less/*.less", "app/css/*.css"],
        tasks: ["less:style"],
        options:{
          livereload:true
        }
      },
      html:{
        files: ['app/index.html', 'app/css/*.css'],
        options: {
          livereload: true
        }
      }
    }
  });

  //Plugin for "watch"
  grunt.loadNpmTasks('grunt-contrib-watch');

  //Connect plugin
  grunt.loadNpmTasks('grunt-contrib-connect');

  //Open plugin
  grunt.loadNpmTasks('grunt-open');

  //Watch files for reload
  grunt.loadNpmTasks('grunt-contrib-watch');

  //Less Plugin
  grunt.loadNpmTasks('grunt-contrib-less');

  
  // Default task(s).
  grunt.registerTask('default', ['connect','less','watch']);

  grunt.registerTask('serve', ['connect'], function(){
    grunt.task.run('connect');
  });
};