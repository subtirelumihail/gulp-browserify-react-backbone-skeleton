var buildFolder = 'build';
var srcFolder = 'src';

Config = {
	bundles : { //Bundle names
		js : 'bundle.js',
		template : 'components.js',
		css : 'styles.css'
	},

	appEntry : './'+srcFolder+'/js/start.js',

	build : buildFolder,
	src : srcFolder,

	source : {
		html : [srcFolder+'/*.html'],
		img : [srcFolder+'/img/**/*'],
		sass : ['libs/*.scss', srcFolder+'/sass/**/*.scss', srcFolder+'/sass/*.scss'],
		css : ['libs/*.css', srcFolder+'/css/libs/*.css', srcFolder+'/css/**/*.css', srcFolder+'/css/*.css'],
		font : [srcFolder+'/fonts/*'],
		jshint : [srcFolder+'/js/*.js',srcFolder+'/js/**/*.js'],
		react : [srcFolder+'/js/*.js', srcFolder+'/js/components/**/*.jsx', srcFolder+'/js/components/*.jsx']
	},

	dest : { 
		defaults : {
			css : srcFolder+'/css',
			sass : srcFolder+'/sass'
		},

		img : buildFolder + '/img/',
		js : buildFolder + '/js/',
		css : buildFolder + '/css/',
		font : buildFolder + '/fonts/',
		html : buildFolder + '/'
	}
}

module.exports = Config;


