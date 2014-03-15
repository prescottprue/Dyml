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
            target: 'http://localhost:2009/src',
            srcName: 'Google Chrome',
          }
      }
    }
    },
    less:{
      style:{
        files:{
          "src/css/styles.css": "./src/less/styles.less"
        },
      }
    },
    
    watch:{
      css:{
        files: ["src/less/*.less", "src/css/*.css"],
        tasks: ["less:style"],
        options:{
          livereload:true
        }
      },
      html:{
        files: ['src/index.html', 'src/css/*.css'],
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