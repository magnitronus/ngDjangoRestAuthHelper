module.exports = function (grunt) {

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-html2js');

  grunt.initConfig({
    'pkg': grunt.file.readJSON('package.json'),

    'meta': {
      'jsFilesForTesting': [
          'lib/angular/angular.js',
          'lib/angular-mocks/angular-mocks.js',
          'test/**/*Spec.js'
      ]
    },

    'karma': {
      'development': {
        'configFile': 'karma.conf.js',
        'options': {
          'files': [
            '<%= meta.jsFilesForTesting %>',
            'src/**/*.js'
          ],
        }
      },
    
    'dist': {
        'options': {
          'configFile': 'karma.conf.js',
          'files': [
            '<%= meta.jsFilesForTesting %>',
            'dist/<%= pkg.name %>.js'
          ],
        }
      },
      
    'minified': {
        'options': {
          'configFile': 'karma.conf.js',
          'files': [
            '<%= meta.jsFilesForTesting %>',
            'dist/<%= pkg.name %>.min.js'
          ],
        }
      }
    },
    'jshint': {
      'beforeconcat': ['src/**/*.js'],
    },
    'concat': {
      'dist': {
        'src': ['src/**/*.js'],
        'dest': 'dist/<%= pkg.name %>.js'
      }
    },

    'uglify': {
      'options': {
        'mangle': false
      },  
      'dist': {
        'files': {
          'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js']
        }
      }
    },
    
    'jsdoc': {
      'src': ['src/**/*.js'],
      'options': {
        'destination': 'doc'
      }
    }
  });

  grunt.registerTask('test', ['jshint', 'karma:development']);
  grunt.registerTask('build',
    [
      'jshint',
      'karma:development',
      'concat',
      'karma:dist',
      'uglify',
      'karma:minified',
      'jsdoc'
    ]);

};