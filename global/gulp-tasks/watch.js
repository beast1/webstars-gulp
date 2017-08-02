"use strict";

module.exports = function (gulp, p, s, m) {
	if (s.oss === 'mts') {
		return function() {
			console.log(`---------- Текущий проект: ${s.project.name}-mts.v${s.project.version}`);
			gulp.watch(m.getStyleSrc(s, 'watch'), ['sass']);
			gulp.watch(s.app + '/html/**/*.html', ['html']);
		}
	} else if (s.oss === 'beeline') {
		return function() {
			console.log(`---------- Текущий проект: ${s.project.name}-beeline.v${s.project.version}`);
			gulp.watch(m.getStyleSrc(s, 'watch'), ['sass']);
			gulp.watch(`${s.app}/html/**/*.html`, ['html']);
			gulp.watch(`const/fragments/*.html`, ['html']);
			gulp.watch(`const/required/**/*.html`, ['html']);
			// gulp.watch(`${s.app}/sass/**/*.sass`, function (event) {
			//   p.sequence('sass', 'html')(function (err) {
			//     if (err) console.log('---------- Ошибка в gulp-tasks.watch.beeline')
			//   });
			// });
		}
	} else if (s.oss === 'tele2' || s.oss === 'beeline') {
		return function() {
			console.log(`---------- Текущий проект: ${s.project.name}-tele2.v${s.project.version}`);
			gulp.watch(m.getStyleSrc(s, 'watch'), ['sass']);
			gulp.watch(`${s.app}/**/*.html`, ['html']);
		};
	} else {
		return function() {
			console.log(`---------- Текущий проект: ${s.project.name}.v${s.project.version}`);
			gulp.watch(m.getStyleSrc(s, 'watch'), ['sass']);	
			gulp.watch(s.app + '/html/**/*.html', ['html']);
		};
	};
};