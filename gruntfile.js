module.exports = function (grunt) {

    // Configuração do Projeto.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Configuração do LESS
        less: {
            development: {
                options: {
                    compress: true,
                    yuicompress: true,
                    optimization: 2
                },
                files: {
                    'build/style.css': 'src/style.less' // Compila style.less para build/styles.css
                }
            }
        },

        // Configuração do Uglify
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: {
                    'build/main.min.js': ['src/*.js'] // Minifica todos os arquivos JS da pasta src
                }
            }
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'build/index.html': 'src/index.html' // Minifica index.html
                }
            }
        }
    });

    // Carrega os plugins
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    // Executa a Tarefa default
    grunt.registerTask('default', ['less', 'uglify', 'htmlmin']);
};