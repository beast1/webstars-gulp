// Как выполнять таски синхронно?
// Как использовать значения, введенные в консоль, в теле таска

var gulp = require('gulp');
var p = require('gulp-load-plugins')({
	pattern: ['browser-sync', 'del', 'merge-stream', 'gulp-*', 'gulp.*', '@*/gulp{-,.}*'],
	lazy: false
});

var	oss            = "beeline",
		globalConfig   = require('../global/config.json').global,
		localConfig 	 = require('../global/config.json').beeline,
		defaultConfig  = require('../global/config.json').default,
		sequreConfig   = require('D:/sequre.json').tele2,
		project 			 = localConfig.projects[localConfig.exec],
		app 					 = project.name,
		build  				 = defaultConfig.dirs.build;

var s = {
	"oss": oss,
	"globalConfig": globalConfig,
	"localConfig": localConfig,
	"defaultConfig": defaultConfig,
	"sequreConfig": sequreConfig,
	"project": project,
	"app": app,
	"build": build
}

function getTask(task) {
  return require('../global/gulp-tasks/' + task)(gulp, p, s);
}
gulp.task('sass', getTask('sass'));
gulp.task('html', ['sass'], getTask('html'));
gulp.task('style', ['sass', 'html'], function() {
	// gulp.src(`${s.app}/*.html`)
	// 	.pipe(p.wait(1000))
	// 	.pipe(gulp.dest(s.app))
	// 	.pipe(p.browserSync.reload());
});


gulp.task('zip', getTask('zip'));
gulp.task('serve', getTask('serve'));
gulp.task('watch', ['style', 'html', 'serve'], getTask('watch'));
gulp.task('build', ['style', 'html'], getTask('build'));


gulp.task('default', ['watch']);

// gulp.task('sass', require('../global/gulp-tasks/sass')(gulp, p, s));
// gulp.task('zip', require('../global/gulp-tasks/zip')(gulp, p, s));
// gulp.task('serve', require('../global/gulp-tasks/serve')(gulp, p, s));
// gulp.task('watch', ['sass', 'html', 'serve'], require('../global/gulp-tasks/watch')(gulp, p, s));
// gulp.task('html', require('../global/gulp-tasks/html')(gulp, p, s));
// gulp.task('build', ['sass', 'html'], require('../global/gulp-tasks/build')(gulp, p, s));

gulp.task('clearcache', function () { return cache.clearAll(); });

gulp.task('default', ['watch']);
