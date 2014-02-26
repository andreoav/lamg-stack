'use strict';

module.exports = function (grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    app: {
      dev: 'public',
      dist: 'public/dist'
    },

    laravel: {
      path: 'app',
      options: {
        port: process.env.PORT || 8000
      },
      development: {
        options: {
        }
      },
      production: {
        options: {

        }
      }
    },

    open: {
      server: {
        url: 'http://localhost:<%= laravel.options.port %>'
      }
    },

    watch: {
      js: {
        files: ['<%= app.dev %>/scripts/{,*/}*.js'],
        tasks: ['newer:jshint:all'],
        options: {
          livereload: true
        }
      },
      jsTest: {
        files: ['<%= app.dev %>/test/spec/{,*/}*.js'],
        tasks: ['newer:jshint:test', 'karma']
      },
      styles: {
        files: ['<%= app.dev %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      livereload: {
        files: [
          '<%= laravel.path %>/views/{,*//*}*.{php,blade.php}',
          '{.tmp,<%= app.dev %>}/styles/{,*//*}*.css',
          '{.tmp,<%= app.dev %>}/scripts/{,*//*}*.js',
          '<%= app.dev %>/images/{,*//*}*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        options: {
          livereload: true
        },
        laravel: {
          files: [
            '<%= laravel.path %>/**/*.{php,blade.php}'
          ],
          tasks: [],
          options: {
            livereload: true,
            nospawn: true
          }
        }
      }
    },
    
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        '<%= app.dev %>/scripts/{,*/}*.js'
      ],
      test: {
        options: {
          jshintrc: '<%= app.dev %>/test/.jshintrc'
        },
        src: ['<%= app.dev %>/test/spec/{,*/}*.js']
      }
    },

    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= laravel.path %>/views/dist',
            '<%= app.dist %>/*',
            '!<%= app.dist %>/.git'
          ]
        }]
      },
      server: '.tmp'
    },

    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles',
          src: '{,*/}*.css',
          dest: '.tmp/styles'
        }]
      }
    },

    bowerInstall: {
      target: {
        src: [
          '<%= laravel.path %>/views/index.{php,blade.php}'
        ],
        ignorePath: '<%= app.dev %>/'
      }
    },

    rev: {
      dist: {
        files: {
          src: [
            '<%= app.dist %>/scripts/{,*/}*.js',
            '<%= app.dist %>/styles/{,*/}*.css',
            '<%= app.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%= app.dist %>/styles/fonts/*'
          ]
        }
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: ['<%= laravel.path %>/views/index.{php,blade.php}'],
      options: {
        dest: '<%= app.dist %>'
      }
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      html: ['<%= laravel.path %>/views/dist/{,*/}*.{php,blade.php}'],
      css: ['<%= app.dist %>/public/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= app.dist %>/public']
      }
    },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= app.dev %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= app.dist %>/images'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= app.dev %>/images',
          src: '{,*/}*.svg',
          dest: '<%= app.dist %>/images'
        }]
      }
    },

    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/concat/scripts',
          src: '*.js',
          dest: '.tmp/concat/scripts'
        }]
      }
    },

    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= app.dev %>',
          dest: '<%= app.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            'bower_components/**/*',
            'images/{,*/}*.{webp}',
            'fonts/**/*'
          ]
        },{
          expand: true,
          dot: true,
          cwd: '<%= laravel.path %>/views',
          dest: '<%= laravel.path %>/views/dist',
          src: [
            '**/*.{php,blade.php}'
          ]
        }, {
          expand:true,
          cwd: '.tmp/images',
          dest: '<%= app.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          dest: '<%= app.dist %>',
          src: [
            'package.json'
          ]
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= app.dev %>/styles',
        dest: '.tmp/styles',
        src: '{,*/}*.css'
      }
    },

    concurrent: {
      server: [
        'copy:styles'
      ],
      test: [
        'copy:styles'
      ],
      dist: [
        'copy:styles',
        'imagemin',
        'svgmin'
      ]
    },

    shell: {
      laravel: {
        command: 'php artisan serve --port=<%= laravel.options.port %>',
        options: {
          stdout: true
        }
      }
    }

  });

  grunt.registerTask('serve', [
    'clean:server',
    'bowerInstall',
    'concurrent:server',
    'autoprefixer',
    //'shell:laravel',
    'open',
    'watch'
  ]);

  grunt.registerTask('test', function() {
    grunt.log.ok('Running tests');
  });

  grunt.registerTask('build', [
    'clean:dist',
    'bowerInstall',
    'useminPrepare',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'ngmin',
    'copy:dist',
    'uglify',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);

};