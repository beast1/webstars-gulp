module.exports = function (gulp, p, s) {
	if (s.oss === 'mts') {
		var buildCss = gulp.src([
				s.app + '/css/style.css',
				s.app + '/css/normalize.css'
			])
			.pipe(gulp.dest(s.build + '/css'));
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