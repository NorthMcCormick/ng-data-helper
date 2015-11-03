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
		},

	});

	// load the tasks
	grunt.loadNpmTasks('grunt-contrib-copy');

	// define the tasks
};