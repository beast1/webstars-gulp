module.exports = function (gulp, p, s) {
	if (s.oss === 'mts') {
		var buildCss = gulp.src([
				`${s.app}/css/common.css`,
				`${s.app}/css/normalize.css`,
				`${s.app}/css/bootstrap.min.css`,
				// Обратная совместимость 02.08
				`${s.app}/css/style.css`
			])
			.pipe(gulp.dest(`${s.build}/css`));
	} else if (s.oss === 'megafon') {
		var buildCss = gulp.src([
				`${s.app}/css/normalize.css`,
				`${s.app}/css/bootstrap.min.css`,
				`${s.app}/css/common.css`,
				// Обратная совместимость 02.08
				`${s.app}/css/style.css`
			])
			.pipe(p.concat('style.css'))
			.pipe(p.replace('../img/', ''))
			.pipe(gulp.dest(s.build));
	}
}