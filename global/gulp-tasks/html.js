module.exports = function (gulp, p, s) {
	if (s.oss === 'mts') {
		return function() {
			return gulp.src(s.app + '/html/full-page.html')
				.pipe(p.fileInclude({
		      prefix: '@@',
		      basepath: '@file'
		    }))
		    .pipe(gulp.dest(s.app))
		    .pipe(p.browserSync.reload({stream: true}));
		};
	} else if (s.oss === 'megafon') {
		return function() {
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
			};
	};
};