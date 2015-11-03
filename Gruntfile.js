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
		},
		bump: {
			options: {
				files: ['bower.json'],
				updateConfigs: [],
				commit: true,
				commitMessage: 'Release v%VERSION%',
				commitFiles: ['bower.json'],
				createTag: true,
				tagName: 'v%VERSION%',
				tagMessage: 'Version %VERSION%',
				push: true,
				pushTo: 'origin',
				gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
				globalReplace: false,
				prereleaseName: false,
				regExp: false
			}
		}
	});

	// load the tasks
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-bump');

	// define the tasks

	grunt.registerTask(
		'build',
		'Compiles all assets and minifies to dist',
		['clean:build', 'copy:build', 'uglify:build', 'copy:finishBuild']
	);
};