// return должен быть внутри условия

module.exports = function (gulp, p, s) {
	if (s.oss === 'mts') {
		return function() {
			gulp.watch(s.app + '/sass/**/*.sass', ['sass']);
			gulp.watch(s.app + '/js/*.js', p.browserSync.reload);
			gulp.watch(s.app + '/html/**/*.html', ['html']);
		};
	} else {
		return function() {
			gulp.watch(s.app + '/sass/**/*.sass', ['sass']);	
			gulp.watch(s.app + '/html/**/*.html', ['html']);
		};
	};
};