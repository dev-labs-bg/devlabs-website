module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		imagemin: {
	      png: {
	        options: {
	          optimizationLevel: 7
	        },
	        files: [
	          {
	            expand: true,
	            cwd: 'img-uncompressed/',
	            src: ['**/*.png', 'favicons/*.ico', 'favicons/*.xml'],
	            dest: 'img/',
	            ext: '.png'
	          }
	        ]
	      },
	      jpg: {
	        options: {
	          progressive: true
	        },
	        files: [
	          {
	            expand: true,
	            cwd: 'img-uncompressed/',
	            src: ['**/*.jpg'],
	            dest: 'img/',
	            ext: '.jpg'
	          }
	        ]
	      },
	      svg: {
	        files: [
	          {
	            expand: true,
	            cwd: 'img-uncompressed/',
	            src: ['**/*.svg'],
	            dest: 'img/',
	            ext: '.svg'
	          }
	        ]
	      },
	      gif: {
	        files: [
	          {
	            expand: true,
	            cwd: 'img-uncompressed/',
	            src: ['**/*.gif'],
	            dest: 'img/',
	            ext: '.gif'
	          }
	        ]
	      }
	    },



	});

	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default', ['imagemin']);

};