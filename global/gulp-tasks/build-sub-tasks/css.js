module.exports = function (gulp, p, s) {
	if (s.oss === 'mts') {
		var buildCss = gulp.src([
				`${s.app}/css/style.css`,
				`${s.app}/css/normalize.css`,
				`${s.app}/css/bootstrap.min.css`
			])
			.pipe(gulp.dest(s.build + '/css'));
	} else if (s.oss === 'tele2') {
		console.log(s.preBuild);
		var buildCss = gulp.src([
				`${s.app}/css/common.css`
			])
			.pipe(gulp.dest(s.build));
	} else if (s.oss === 'megafon') {
		var buildCss = gulp.src([
				s.app + '/css/normalize.css',
				s.app + '/css/style.css'				
			])
			.pipe(p.replace('../img/', ''))
			.pipe(p.concat('style.css'))
			.pipe(gulp.dest(s.build));
	}
}