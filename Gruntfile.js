// Generated on 2014-11-10 using generator-jekyllrb 1.2.1
'use strict';

// Directory reference:
//   css: dist/_css
//   sass: styles/_scss
//   javascript: dist/_js
//   images: dist/_img
//   fonts: dist/_fonts

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Configurable paths
    yeoman: {
      app: 'app',
      dist: 'dist'
    },
    watch: {
      //sass: {
      //  files: ['<%= yeoman.app %>/styles/_scss/**/*.{scss,sass}'],
      //  tasks: ['sass:server', 'autoprefixer:server']
      //},
      less: {
        //files: ['<%= yeoman.app %>/styles/_less/**/*.less'],
        files: [
          //'<%= yeoman.app %>/_**/*.less',
          '<%= yeoman.app %>/_includes/**/*.less',
          '<%= yeoman.app %>/_shared/**/*.less',
          //'!<%= yeoman.app %>/_bower_components/**/*.less',
          '<%= yeoman.app %>/styles/**/*.less'
        ],
        tasks: ['less:server', 'autoprefixer:server']
      },
      autoprefixer: {
        files: ['<%= yeoman.app %>/dist/_css/**/*.css'],
        tasks: ['copy:stageCss', 'autoprefixer:server']
      },
      jekyll: {
        files: [
          '<%= yeoman.app %>/**/*.{html,yml}',
          '!<%= yeoman.app %>/_bower_components/**/*'
        ],
        tasks: ['jekyll:server']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '.jekyll/**/*.html',
          '.tmp/dist/_css/**/*.css',
          '{.tmp,<%= yeoman.app %>}/<%= js %>/**/*.js',
          '<%= yeoman.app %>/dist/_img/**/*.{gif,jpg,jpeg,png,svg,webp}'
        ]
      }
    },
    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            '.jekyll',
            '<%= yeoman.app %>'
          ]
        }
      },
      dist: {
        options: {
          open: true,
          base: [
            '<%= yeoman.dist %>'
          ]
        }
      },
      test: {
        options: {
          base: [
            '.tmp',
            '.jekyll',
            'test',
            '<%= yeoman.app %>'
          ]
        }
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '<%= yeoman.dist %>/*',
            // Running Jekyll also cleans the target directory.  Exclude any
            // non-standard `keep_files` here (e.g., the generated files
            // directory from Jekyll Picture Tag).
            '!<%= yeoman.dist %>/.git*'
          ]
        }]
      },
      server: [
        '.tmp',
        '.jekyll'
      ]
    },
    //sass: {
    //  options: {
    //    bundleExec: true,
    //    debugInfo: false,
    //    lineNumbers: false,
    //    loadPath: 'app/_bower_components'
    //  },
    //  dist: {
    //    files: [{
    //      expand: true,
    //      cwd: '<%= yeoman.app %>/styles/_scss',
    //      src: '**/*.{scss,sass}',
    //      dest: '.tmp/dist/_css',
    //      ext: '.css'
    //    }]
    //  },
    //  server: {
    //    options: {
    //      debugInfo: true,
    //      lineNumbers: true
    //    },
    //    files: [{
    //      expand: true,
    //      cwd: '<%= yeoman.app %>/styles/_scss',
    //      src: '**/*.{scss,sass}',
    //      dest: '.tmp/dist/_css',
    //      ext: '.css'
    //    }]
    //  }
    //},
    less: {
      //options: {
      //  strictImports: true
      //},
      dist: {
        options: {
          strictImports: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/styles/',
          src: '**/*.less',
          //src: 'main.less',
          dest: '.tmp/dist/_css',
          ext: '.css'
        }]
        //files: {
        //  '.tmp/dist/_css/main.css': ['<%= yeoman.app %>/styles//main.less']
        //}
      },
      server: {
        options: {
          //dumpLineNumbers: 'all'
          strictImports: false
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/styles/',
          src: '**/*.less',
          //src: 'main.less',
          dest: '.tmp/dist/_css',
          ext: '.css'
        }]
        //files: {
        //  '.tmp/dist/_css/main.css': ['<%= yeoman.app %>/styles//main.less']
        //}
      }
    },
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>/dist/_css',
          src: '**/*.css',
          dest: '<%= yeoman.dist %>/dist/_css'
        }]
      },
      server: {
        files: [{
          expand: true,
          cwd: '.tmp/dist/_css',
          src: '**/*.css',
          dest: '.tmp/dist/_css'
        }]
      }
    },
    jekyll: {
      options: {
        bundleExec: true,
        config: '_config.yml,_config.build.yml',
        src: '<%= yeoman.app %>'
      },
      dist: {
        options: {
          dest: '<%= yeoman.dist %>'
        }
      },
      server: {
        options: {
          config: '_config.yml',
          dest: '.jekyll'
        }
      },
      check: {
        options: {
          doctor: true
        }
      }
    },
    useminPrepare: {
      options: {
        dest: '<%= yeoman.dist %>'
      },
      html: '<%= yeoman.dist %>/index.html'
    },
    usemin: {
      options: {
        assetsDirs: '<%= yeoman.dist %>'
      },
      html: ['<%= yeoman.dist %>/**/*.html'],
      css: ['<%= yeoman.dist %>/dist/_css/**/*.css']
    },
    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.html',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    // Usemin adds files to concat
    concat: {},
    // Usemin adds files to uglify
    uglify: {},
    // Usemin adds files to cssmin
    cssmin: {
      dist: {
        options: {
          check: 'gzip'
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          progressive: true
        },
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.{jpg,jpeg,png}',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.dist %>',
          src: '**/*.svg',
          dest: '<%= yeoman.dist %>'
        }]
      }
    },
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          src: [
            // Jekyll processes and moves HTML and text files.
            // Usemin moves CSS and javascript inside of Usemin blocks.
            // Copy moves asset files and directories.
            'dist/_img/**/*',
            'dist/_fonts/**/*',
            // Like Jekyll, exclude files & folders prefixed with an underscore.
            '!**/_*{,/**}',
            // Explicitly add any files your site needs for distribution here.
            '_bower_components/jquery/jquery.js',
            'favicon.ico',
            'apple-touch*.png'
          ],
          dest: '<%= yeoman.dist %>'
        }]
      },
      // Copy CSS into .tmp directory for Autoprefixer processing
      stageCss: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/dist/_css',
          src: '**/*.css',
          dest: '.tmp/dist/_css'
        }]
      }
    },
    filerev: {
      options: {
        length: 4
      },
      dist: {
        files: [{
          src: [
            '<%= yeoman.dist %>/dist/_js/**/*.js',
            '<%= yeoman.dist %>/dist/_css/**/*.css',
            '<%= yeoman.dist %>/dist/_img/**/*.{gif,jpg,jpeg,png,svg,webp}',
            '<%= yeoman.dist %>/dist/_fonts/**/*.{eot*,otf,svg,ttf,woff}'
          ]
        }]
      }
    },
    buildcontrol: {
      dist: {
        options: {
          remote: '../',
          branch: 'gh-pages',
          commit: true,
          push: true
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/dist/_js/**/*.js',
        'test/spec/**/*.js'
      ]
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      //check: {
      //  src: [
      //    '<%= yeoman.app %>/dist/_css/**/*.css',
      //    '<%= yeoman.app %>/styles/_scss/**/*.scss'
      //  ]
      //}
      check: {
        src: [
          '<%= yeoman.app %>/dist/_css/**/*.css',
          '<%= yeoman.app %>/styles/**/*.less'
        ]
      }
    },
    concurrent: {
      server: [
        //'sass:server',
        'less:server',
        'copy:stageCss',
        'jekyll:server'
      ],
      dist: [
        //'sass:dist',
        'less:dist',
        'copy:dist'
      ]
    }
  });

  // Define Tasks
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  // No real tests yet. Add your own.
  grunt.registerTask('test', [
  //   'clean:server',
  //   'concurrent:test',
  //   'connect:test'
  ]);

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    //'sass:server',
    'less:server',
    'jshint:all',
    'csslint:check'
  ]);

  grunt.registerTask('build', [
    'clean',
    // Jekyll cleans files from the target directory, so must run first
    'jekyll:dist',
    'concurrent:dist',
    'useminPrepare',
    'concat',
    'autoprefixer:dist',
    'cssmin',
    'uglify',
    'imagemin',
    'svgmin',
    'filerev',
    'usemin',
    'htmlmin'
    ]);

  grunt.registerTask('deploy', [
    'check',
    'test',
    'build',
    'buildcontrol'
    ]);

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};
