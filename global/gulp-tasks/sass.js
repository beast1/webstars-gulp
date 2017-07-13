module.exports = function (gulp, p, s) {
	switch (s.oss) {
		default:
		  return function () {
		    gulp.src(s.app + '/sass/**/*.sass')
					.pipe(p.sass({outputStyle: 'expand'}).on("error", p.notify.onError()))
					.pipe(p.rename({
						basename: 'style'
					}))
					.pipe(p.autoprefixer(['last 15 versions']))
					.pipe(gulp.dest(s.app + '/css'))
					.pipe(p.browserSync.reload({stream: true}));
		  };
	}
};