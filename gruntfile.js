module.exports = function(grunt) {
  // Project Configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      html: {
        files: ['public/views/**'],
        options: {
          livereload: true
        },
      },
      css: {
        files: ['app/assets/sass/**'],
        tasks: ['compass'],
        options: {
          livereload: true,
          force: true
        }
      },
      ember: {
        files: [ 'public/javascripts/**/*', '!public/javascripts/*.js' ],
        tasks: [ 'shell:ember' ],
        options: {
          livereload: true
        }
      }
    },
    jshint: {
      all: ['gruntfile.js']
    },
    compass: { //Task
      dist: { //Target
        options: { //Target options
          sassDir: 'app/assets/sass',
          cssDir: 'public/stylesheets',
          environment: 'production'
        }
      },
      dev: { //Another target
        options: {
          sassDir: 'app/assets/sass',
          cssDir: 'public/stylesheets'
        }
      }
    },
    nodemon: {
      dev: {
        options: {
          file: 'server.js',
          args: [],
          ignoredFiles: ['README.md', 'node_modules/**', '.DS_Store'],
          watchedExtensions: ['js'],
          watchedFolders: ['app', 'config'],
          debug: true,
          delayTime: 1,
          env: {
            PORT: 3000
          },
          cwd: __dirname
        }
      }
    },
    shell: {
      ember: {
        command: 'ember build'
      }
    },
    concurrent: {
      target: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true
        }
      }
    }
  });

  //Load NPM tasks 
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-concurrent');

  //Making grunt default to force in order not to break the project.
  grunt.option('force', true);

  //Default task(s).
  grunt.registerTask('default', ['jshint', 'compass', 'concurrent:target']);
};
