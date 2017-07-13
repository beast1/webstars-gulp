module.exports = function (gulp, p, s) {
	switch (s.oss) {
		default:
		  return function() {
				gulp.watch(s.app + '/sass/**/*.sass', ['sass']);
				gulp.watch(s.app + '/html/**/*.html', ['html']);
			};
		case "mts":
		  return function() {
				gulp.watch(s.app + '/sass/**/*.sass', ['sass']);
				gulp.watch(s.app + '/js/*.js', p.browserSync.reload);
				gulp.watch(s.app + '/html/**/*.html', ['html']);
			};
	}
};