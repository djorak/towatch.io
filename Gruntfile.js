'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        assets: grunt.file.readJSON('config/assets.json'),
        /* == JS TASKS == */
        jshint: {
            all: ['public/src/js/**/*.js']
        },
        uglify: {
            dist: {
                options: {
                    mangle: true,
                    compress: true
                },
                files: '<%= assets.main.js %>'
            }
        },
        /* == CSS TASKS == */
        compass: {
            dist: {
                options: {
                    config: 'config/config.rb',
                    environment: 'production',
                    sourcemap: false
                }
            },
            dev: {
                options: {
                    config: 'config/config.rb',
                    outputStyle: 'expanded',
                    sourcemap: true
                }
            }
        },
        scsslint: {
            allFiles: [
                'public/src/assets/styles/**/*.scss'
            ],
            options: {
                config: '.scss-lint.yml',
                colorizeOutput: true,
            }
        },
        cssmin: {
            dist: {
                files: {
                    files: '<%= assets.main.css %>'
                }
            }
        },
        /* == MAGIC TASKS == */
        watch: {
            css: {
                files: ['public/src/assets/styles/**/*.scss'],
                tasks: ['scsslint', 'compass:dev', 'cssmin']
            },
            js: {
                files: ['public/src/js/**/*.js'],
                tasks: ['jshint', 'uglify']
            }
        },
        nodemon: {
            dev: {
                script: 'server.js'
            }
        },
        concurrent: {
            options: {
                logConcurrentOutput: true
            },
            tasks: ['nodemon', 'watch']
        }
    });

    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.registerTask('default', ['scsslint', 'compass:dev', 'cssmin', 'jshint', 'uglify', 'concurrent']);
};
