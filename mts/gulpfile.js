"use strict";

var gulp = require('gulp');
var p = require('gulp-load-plugins')({
	pattern: ['browser-sync', 'del', 'merge-stream', 'gulp-*', 'gulp.*', '@*/gulp{-,.}*'],
	lazy: false
});

var m = require('../global/methods.js');

var	oss            = "mts",
		globalConfig   = require('../global/config.json').global,
		localConfig 	 = require('../global/config.json').mts,
		defaultConfig  = require('../global/config.json').default,
		project 			 = localConfig.projects[localConfig.controls.exec],
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
  return require('../global/gulp-tasks/' + task)(gulp, p, s, m);
}

function getStaffTask(task) {
  return require(`../global/gulp-tasks/staff-tasks/${task}`)(gulp, p, s, m);
}

// Staff tasks
gulp.task('del-release', getStaffTask('del-release'));
gulp.task('del-build', getStaffTask('del-build'));
gulp.task('zip-src', ['del-release'], getStaffTask('zip-src'));

gulp.task('st', getTask('status'));
gulp.task('go', getTask('switch'));

gulp.task('sass', getTask('sass'));
gulp.task('zip', ['del-release'], getTask('zip'));
gulp.task('serve', getTask('serve'));
gulp.task('watch', ['sass', 'html', 'serve'], getTask('watch'));
gulp.task('html', getTask('html'));
gulp.task('build', ['del-build', 'sass', 'html'], getTask('build'));

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


