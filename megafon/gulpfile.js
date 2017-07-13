// Как выполнять таски синхронно?
// Как использовать значения, введенные в консоль, в теле таска

var gulp = require('gulp');
var p = require('gulp-load-plugins')({
	pattern: ['browser-sync', 'gulp-*', 'gulp.*', '@*/gulp{-,.}*'],
	lazy: false
});

var	oss            = "megafon",
		globalConfig   = require('../global/config.json').global,
		localConfig 	 = require('../global/config.json').megafon,
		defaultConfig  = require('../global/config.json').default,
		project 			 = localConfig.projects[localConfig.exec],
		app 					 = project.name,
		build  				 = defaultConfig.dirs.build;

var s = {
	"oss": oss,
	"globalConfig": globalConfig,
	"localConfig": localConfig,
	"defaultConfig": defaultConfig,
	"project": project,
	"app": app,
	"build": build
}

function getTask(task) {
  return require('../global/gulp-tasks/' + task)(gulp, p, s);
}

gulp.task('sass', getTask('sass'));
gulp.task('zip', getTask('zip'));
gulp.task('serve', getTask('serve'));
gulp.task('watch', ['sass', 'html', 'serve'], getTask('watch'));
gulp.task('html', getTask('html'));
gulp.task('build', ['sass', 'html'], getTask('build'));

gulp.task('default', ['watch']);

gulp.task('build', ['sass'], function() {
	var buildCss = gulp.src([
			app + '/css/style.css',
			app + '/css/normalize.css'
		])
		.pipe(replace('../img/', ''))
		.pipe(gulp.dest(build + '/css'));

	var buildHtml = gulp.src([
			app + '/sign-in.html',
			app + '/subscribe.html',
			app + '/describe.html'
		])
		.pipe(replace('css/', ''))
		.pipe(replace('img/', ''))
		.pipe(gulp.dest(build));

	var buildImg = gulp.src(app + '/img/**/*')
		.pipe(cache(imagemin()))
		.pipe(gulp.dest(build + '/img')); 

	var buildJs = gulp.src(app + '/js/scripts.js')
		.pipe(gulp.dest(build + '/js'));
});

gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);
