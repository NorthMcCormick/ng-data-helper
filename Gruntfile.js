module.exports = function(grunt) {

	// configure the tasks
	grunt.initConfig({

		copy: {
			build: {
				cwd: 'src',
				src: [ '**' ],
				dest: 'build',
				expand: true
			},
			finishBuild: {
				cwd: 'build',
				src: [ '**' ],
				dest: 'dist',
				expand: true
			}
		},
		clean: {
			build: {
				src: [ 'build' ]
			},
		},
		uglify: {
			build: {
				options: {
					mangle: true
				},
				files: {
					'build/ngdatahelper.js': ['build/**/*.js']
				}
			}
		}
	});

	// load the tasks
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	// define the tasks

	grunt.registerTask(
		'build',
		'Compiles all assets and minifies to dist',
		['clean:build', 'copy:build', 'uglify:build', 'copy:finishBuild']
	);
};