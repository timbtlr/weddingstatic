module.exports = function(grunt) {

  // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        ngconstant: {
            // Options for all targets
            options: {
                space: '  ',
                wrap: '"use strict";\n\n {%= __ngModule %}',
                name: 'envConfig',
            },
            build: {
                options: {
                    dest: 'js/envConfig.js'
                },
                constants: {
                    ENV: {
                        name: 'prod',
                        weddingApiUrl: process.env.WEDDING_API_URL,
                        weddingApiKey: process.env.WEDDING_API_KEY
                    }
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-serve');
    grunt.loadNpmTasks('grunt-ng-constant');

    grunt.registerTask('default', ['ngconstant:build','serve']);
    grunt.registerTask('build', ['ngconstant:build']);
};