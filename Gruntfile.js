module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /* == JS TASKS == */
        jshint: {
            all: ['public/src/js/**/*.js']
        },
        uglify: {
            build: {
                files: {
                    'public/dist/js/app.min.js': ['public/src/js/**/*.js', 'public/src/js/*.js']
                }
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
            build: {
                files: {
                    'public/dist/css/app.min.css': 'public/dist/css/app.css'
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
