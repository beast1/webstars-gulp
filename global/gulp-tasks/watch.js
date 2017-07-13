module.exports = function (gulp, p, s) {
	return function() {
		if (s.oss === 'mts') {
			gulp.watch(s.app + '/sass/**/*.sass', ['sass']);
			gulp.watch(s.app + '/js/*.js', p.browserSync.reload);
			gulp.watch(s.app + '/html/**/*.html', ['html']);
		} else {
			gulp.watch(s.app + '/sass/**/*.sass', ['sass']);	
			gulp.watch(s.app + '/html/**/*.html', ['html']);
		};
	};
};