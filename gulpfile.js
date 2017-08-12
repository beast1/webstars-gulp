"use strict";
var gulp = require('gulp');

var p = {};

// gulp = require('gulp');
console.time('loadModules');
p.browserSync = require('browser-sync');
// p.del = require('del');
p.autoprefixer = require('gulp-autoprefixer');
p.base64 = require('gulp-base64');
// p.cache = require('gulp-cache');
p.clean = require('gulp-clean');
// p.cleanCss = require('gulp-clean-css');
p.concat = require('gulp-concat');
// p.copy = require('gulp-copy');
p.fileInclude = require('gulp-file-include');
// p.imagemin = require('gulp-imagemin');
// p.img64Html = require('gulp-img64-html');
// p.inlineImageHtml = require('gulp-inline-image-html');
p.jsonEditor = require('gulp-json-editor');
p.notify = require('gulp-notify');
// p.prompt = require('gulp-prompt');
p.rename = require('gulp-rename');
p.replace = require('gulp-replace');
// p.rsync = require('gulp-rsync');
p.sass = require('gulp-sass');
// p.uglify = require('gulp-uglify');
// p.util = require('gulp-util');
p.zip = require('gulp-zip');
// p.vinylFtp = require('vinyl-ftp');
console.timeEnd('loadModules');
var m = require('../global/methods.js');

var s = {};

s.oss 					= 'tele2';
s.globalConfig  = require('D:/webstars/config.json').global;
s.localConfig 	= require('D:/webstars/config.json').tele2;
s.defaultConfig = require('D:/webstars/config.json').default;
s.sequreConfig  = require('D:/sequre.json').tele2;
s.project 			= s.localConfig.projects[s.localConfig.controls.exec];
s.app 					= project.name;
s.build  				= defaultConfig.dirs.build;
s.preBuild      = defaultConfig.dirs.preBuild;
s.zipBufer 			= 'preZip';

// var s = {
// 	"oss": oss,
// 	"globalConfig": globalConfig,
// 	"localConfig": localConfig,
// 	"defaultConfig": defaultConfig,
// 	"sequreConfig": sequreConfig,
// 	"project": project,
// 	"app": app,
// 	"build": build,
// 	"preBuild": preBuild,
// 	"zipBufer": "preZip"
// }

// function getTask(task) {
//   return require('../global/gulp-tasks/' + task)(gulp, p, s, m);
// }

// function getStaffTask(task) {
//   return require(`../global/gulp-tasks/staff-tasks/${task}`)(gulp, p, s, m);
// }

// // Staff tasks
// gulp.task('del-release', getStaffTask('del-release'));
// gulp.task('del-build', getStaffTask('del-build'));
// gulp.task('del-zb', getStaffTask('del-zipBufer'));
// gulp.task('zip-pre', ['del-release'], getStaffTask('zip-pre'));
// gulp.task('zip-src', ['del-release'], getStaffTask('zip-src'));

// // Main tasks
// gulp.task('deploy', getTask('deploy'));
// gulp.task('watch', getTask('watch'));
// gulp.task('st', getTask('status'));
// gulp.task('co', getTask('checkout'));
// gulp.task('go', getTask('switch'));

// gulp.task('sass', getTask('sass'));
// gulp.task('zip', getTask('zip'));
// gulp.task('serve', getTask('serve'));
// gulp.task('watch', ['sass', 'html', 'serve'], getTask('watch'));
// gulp.task('html', getTask('html'));
// gulp.task('build', ['del-zb', 'del-build', 'sass', 'html'], getTask('build'));

// gulp.task('default', ['watch']);