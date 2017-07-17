"use strict";

var gulp = require('gulp');
var p = require('gulp-load-plugins')({
	DEBUG: true,
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

// gulp.task('deploy', getTask('deploy'));
gulp.task('watch', getTask('watch'));

gulp.task('sass', getTask('sass'));
gulp.task('zip', getTask('zip'));
gulp.task('serve', getTask('serve'));
gulp.task('watch', ['sass', 'html', 'serve'], getTask('watch'));
gulp.task('html', getTask('html'));
gulp.task('build', ['sass', 'html'], getTask('build'));

gulp.task('default', ['watch']);

// // gulp.task('watch', ['sass', 'html', 'serve'], function() {
// // 	gulp.watch(s.app + '/sass/**/*.sass', ['sass']);
// // 	gulp.watch(s.app + '/js/*.js', p.browserSync.reload);
// // 	gulp.watch(s.app + '/html/**/*.html', ['html']);
// // });

// // gulp.task('sass', require('../global/gulp-tasks/sass')(gulp, p, s));
// // gulp.task('zip', require('../global/gulp-tasks/zip')(gulp, p, s));
// // gulp.task('serve', require('../global/gulp-tasks/serve')(gulp, p, s));
// // gulp.task('watch', ['sass', 'html', 'serve'], require('../global/gulp-tasks/watch')(gulp, p, s));
// // gulp.task('html', require('../global/gulp-tasks/html')(gulp, p, s));
// // gulp.task('build', ['sass', 'html'], require('../global/gulp-tasks/build')(gulp, p, s));


// var gulp           = require('gulp'),
// 		gutil          = require('gulp-util' ),
// 		sass           = require('gulp-sass'),
// 		browserSync    = require('browser-sync'),
// 		concat         = require('gulp-concat'),
// 		uglify         = require('gulp-uglify'),
// 		cleanCSS       = require('gulp-clean-css'),
// 		rename         = require('gulp-rename'),
// 		del            = require('del'),
// 		imagemin       = require('gulp-imagemin'),
// 		cache          = require('gulp-cache'),
// 		autoprefixer   = require('gulp-autoprefixer'),
// 		ftp            = require('vinyl-ftp'),
// 		notify         = require("gulp-notify"),
// 		rsync          = require('gulp-rsync');

// gulp.task('browser-sync', function() {
// 	browserSync({
// 		server: {
// 			baseDir: s.app
// 		},
// 		notify: false,
// 		// tunnel: true,
// 		// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
// 	});
// });

// gulp.task('sass', function() {
// 	return gulp.src([
// 		`${s.app}/sass/index.sass`,
// 		`${s.app}/sass/index3.sass`,
// 		`${s.app}/sass/fail.sass`,
// 		`${s.app}/sass/common.sass`
// 		])
// 	.pipe(sass({outputStyle: 'expand'}).on("error", notify.onError()))
// 	.pipe(autoprefixer(['last 15 versions']))
// 	.pipe(gulp.dest(`${s.app}/css`))
// 	.pipe(browserSync.reload({stream: true}));
// });

// gulp.task('watch', ['sass', 'browser-sync'], function() {
// 	gulp.watch(`${s.app}/sass/**/*.sass`, ['sass']);
// 	gulp.watch(`${s.app}/*.html`, browserSync.reload);
// });

// gulp.task('build', ['removedist', 'imagemin', 'sass', 'js'], function() {

// 	var buildFiles = gulp.src([
// 		'app/*.html',
// 		'app/.htaccess',
// 		]).pipe(gulp.dest('dist'));

// 	var buildCss = gulp.src([
// 		'app/css/main.min.css',
// 		]).pipe(gulp.dest('dist/css'));

// 	var buildJs = gulp.src([
// 		'app/js/scripts.min.js',
// 		]).pipe(gulp.dest('dist/js'));

// 	var buildFonts = gulp.src([
// 		'app/fonts/**/*',
// 		]).pipe(gulp.dest('dist/fonts'));

// });

// gulp.task('deploy', function() {

// 	var conn = ftp.create({
// 		host:      'hostname.com',
// 		user:      'username',
// 		password:  'userpassword',
// 		parallel:  10,
// 		log: gutil.log
// 	});

// 	var globs = [
// 	'dist/**',
// 	'dist/.htaccess',
// 	];
// 	return gulp.src(globs, {buffer: false})
// 	.pipe(conn.dest('/path/to/folder/on/server'));

// });

// gulp.task('rsync', function() {
// 	return gulp.src('dist/**')
// 	.pipe(rsync({
// 		root: 'dist/',
// 		hostname: 'username@yousite.com',
// 		destination: 'yousite/public_html/',
// 		archive: true,
// 		silent: false,
// 		compress: true
// 	}));
// });

// gulp.task('removedist', function() { return del.sync('dist'); });
// gulp.task('clearcache', function () { return cache.clearAll(); });

// gulp.task('default', ['watch']);
