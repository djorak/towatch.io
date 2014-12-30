module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
        }
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['compass']);
}
