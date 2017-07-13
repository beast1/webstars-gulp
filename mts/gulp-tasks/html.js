module.exports = function (gulp, p, s) {
	switch (s.oss) {
		case "mts":
		  return function() {
				return gulp.src(s.app + '/html/full-page.html')
					.pipe(p.fileInclude({
			      prefix: '@@',
			      basepath: '@file'
			    }))
			    .pipe(gulp.dest(s.app))
			    .pipe(p.browserSync.reload({stream: true}));
			};
		case "megafon":
			return function() {
				gulp.task('html', function() {
					return gulp.src([
							s.app + '/html/sign-in.html',
							s.app + '/html/subscribe.html',
							s.app + '/html/describe.html'
						])
						.pipe(p.fileInclude({
				      prefix: '@@',
				      basepath: '@file'
				    }))
				    .pipe(gulp.dest(s.app))
				    .pipe(p.browserSync.reload({stream: true}));
				});
			};
	}
};