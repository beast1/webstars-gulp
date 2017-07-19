"use strict";

var gulp = require('gulp');
var p = require('gulp-load-plugins')({
	// DEBUG: true,
	pattern: ['browser-sync', 'del', 'vinyl-ftp', 'merge-stream', 'gulp-*', 'gulp.*', '@*/gulp{-,.}*'],
	lazy: false
});

var	oss            = "tele2",
		globalConfig   = require('../global/config.json').global,
		localConfig 	 = require('../global/config.json').tele2,
		defaultConfig  = require('../global/config.json').default,
		sequreConfig   = require('D:/sequre.json').tele2,
		project 			 = localConfig.projects[localConfig.exec],
		app 					 = project.name,
		build  				 = defaultConfig.dirs.build,
		preBuild       = defaultConfig.dirs.preBuild;

var s = {
	"oss": oss,
	"globalConfig": globalConfig,
	"localConfig": localConfig,
	"defaultConfig": defaultConfig,
	"sequreConfig": sequreConfig,
	"project": project,
	"app": app,
	"build": build,
	"preBuild": preBuild
}

function getTask(task) {
  return require('../global/gulp-tasks/' + task)(gulp, p, s);
}

gulp.task('deploy', getTask('deploy'));
gulp.task('watch', getTask('watch'));
gulp.task('del', getTask('del'));

gulp.task('sass', getTask('sass'));
gulp.task('zip', getTask('zip'));
gulp.task('serve', getTask('serve'));
gulp.task('watch', ['sass', 'html', 'serve'], getTask('watch'));
gulp.task('html', getTask('html'));
gulp.task('build', ['del', 'sass', 'html'], getTask('build'));

gulp.task('default', ['watch']);