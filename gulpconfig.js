var builds = {
		build : ['build'],
		dev : ['assets']
	};

Config = {
	bundles : {
		js : ['bundle.js'],
		template : ['templates.js']
	},

	builds : {
		build : ['build'],
		dev : ['assets']
	},

	source : {
		html : ['*.html'],
		img : ['src/img/**/*'],
		js : ['libs/*.js', 'src/js/libs/*.js','src/js/*.js'],
		sass : ['libs/*.scss', 'src/sass/**/*.scss', 'src/sass/*.scss'],
		css : ['libs/*.css', 'src/css/libs/*.css', 'src/css/**/*.css', 'src/css/*.css'],
		font : ['src/fonts/*'],
		templates : ['src/templates/**/*.jsx', 'src/templates/*.jsx']
	},

	dest : { 
		
		build : {
			img : [builds.build+'/img'],
			js : [builds.build+'/js/'],
			css : [builds.build+'/css/'],
			font : [builds.build+'/fonts/'],
			templates : [builds.build+'/templates']
		},

		dev : {
			img : [builds.dev+'/img'],
			js : [builds.dev+'/js/'],
			css : [builds.dev+'/css/'],
			font : [builds.dev+'/fonts/'],
			templates : [builds.dev+'/templates']
		}
		
	}
}

module.exports = Config;

