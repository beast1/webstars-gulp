// return должен быть внутри условия

module.exports = function (gulp, p, s) {
	if (s.oss === 'mts') {
		return function() {
			console.log(`---------- Текущий проект: mts-${s.project.name}.v${s.project.version}`);
			gulp.watch(s.app + '/sass/**/*.sass', ['sass']);
			gulp.watch(s.app + '/js/*.js', p.browserSync.reload);
			gulp.watch(s.app + '/html/**/*.html', ['html']);
		};
	} else if (s.oss === 'beeline') {
		return function() {
			console.log(`---------- Текущий проект: beeline-${s.project.name}.v${s.project.version}`);
			gulp.watch(s.app + '/sass/**/*.sass', ['style']);	
			// gulp.watch(`${s.app}/sass/**/*.sass`, function (event) {
			//   p.sequence('sass', 'html')(function (err) {
			//     if (err) console.log('---------- Ошибка в gulp-tasks.watch.beeline')
			//   });
			// });
			gulp.watch(s.app + '/html/**/*.html', ['style']);
		}
	} else if (s.oss === 'tele2' || s.oss === 'beeline') {
		return function() {
			console.log(`---------- Текущий проект: tele2-${s.project.name}.v${s.project.version}`);
			gulp.watch(`${s.app}/sass/**/*.sass`, ['sass']);
			gulp.watch(`${s.app}/**/*.html`, ['html']);
		};
	} else {
		return function() {
			console.log(`---------- Текущий проект: ${s.project.name}.v${s.project.version}`);
			gulp.watch(s.app + '/sass/**/*.sass', ['sass']);	
			gulp.watch(s.app + '/html/**/*.html', ['html']);
		};
	};
};