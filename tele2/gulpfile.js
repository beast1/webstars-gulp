"use strict";

var gulp = require('gulp');
var p = require('gulp-load-plugins')({
	// DEBUG: true,
	pattern: ['browser-sync', 'del', 'vinyl-ftp', 'merge-stream', 'gulp-*', 'gulp.*', '@*/gulp{-,.}*'],
	lazy: false
});

var m = require('../global/methods.js');

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
	"preBuild": preBuild,
	"zipBufer": "preZip"
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
gulp.task('del-zb', getStaffTask('del-zipBufer'));
gulp.task('zip-pre', ['del-release'], getStaffTask('zip-pre'));
gulp.task('zip-src', ['del-release'], getStaffTask('zip-src'));

// Main tasks
gulp.task('deploy', getTask('deploy'));
gulp.task('watch', getTask('watch'));
gulp.task('st', getTask('st'));

gulp.task('sass', getTask('sass'));
gulp.task('zip', getTask('zip'));
gulp.task('serve', getTask('serve'));
gulp.task('watch', ['sass', 'html', 'serve'], getTask('watch'));
gulp.task('html', getTask('html'));
gulp.task('build', ['del-zb', 'del-build', 'sass', 'html'], getTask('build'));

/*
* Нужно последовательно выполнить три таска: zip-pre(собрать в папку файлы для будущего архива(буфер)), gulp-zip(создать архив), del-zb(удалить буфер)
* Пример 1:
* zip-pre не дождется del-zb и zip сформирует пустой архив
* gulp.task('del-zb', getStaffTask('del-zipBufer'));
* gulp.task('zip-pre', ['del-zb'], getStaffTask('zip-pre'));
* Если gulp.task('zip', ['zip-pre'], getTask('zip'));
* Пример 2:
* то же самое
* gulp.task('createZip', ['zip-pre'], getTask('zip'));
* gulp.task('del-zipBufer', ['createZip'], getStaffTask('del-zipBufer'));
* gulp.task('zip', ['createZip', 'del-zipBufer']);
*/

gulp.task('default', ['watch']);