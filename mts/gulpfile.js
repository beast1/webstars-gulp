"use strict";

var gulp = require('gulp');
var p = require('gulp-load-plugins')({
	pattern: ['browser-sync', 'del', 'merge-stream', 'gulp-*', 'gulp.*', '@*/gulp{-,.}*'],
	lazy: false
});

var	oss            = "mts",
		globalConfig   = require('../global/config.json').global,
		localConfig 	 = require('../global/config.json').mts,
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

// gulp.task('watch', ['sass', 'html', 'serve'], function() {
// 	gulp.watch(s.app + '/sass/**/*.sass', ['sass']);
// 	gulp.watch(s.app + '/js/*.js', p.browserSync.reload);
// 	gulp.watch(s.app + '/html/**/*.html', ['html']);
// });

// gulp.task('sass', require('../global/gulp-tasks/sass')(gulp, p, s));
// gulp.task('zip', require('../global/gulp-tasks/zip')(gulp, p, s));
// gulp.task('serve', require('../global/gulp-tasks/serve')(gulp, p, s));
// gulp.task('watch', ['sass', 'html', 'serve'], require('../global/gulp-tasks/watch')(gulp, p, s));
// gulp.task('html', require('../global/gulp-tasks/html')(gulp, p, s));
// gulp.task('build', ['sass', 'html'], require('../global/gulp-tasks/build')(gulp, p, s));


