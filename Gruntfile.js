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

	    critical: {
		    test: {
		        options: {
		            base: './',
		            css: [
		                'css/style.css'
		            ],
		            width: 2000,
		            height: 900
		        },
		        src: 'index.html',
		        dest: 'css/critical.css'
		    }
		}



	});

	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.registerTask('default', ['imagemin']);
	grunt.loadNpmTasks('grunt-critical');

};