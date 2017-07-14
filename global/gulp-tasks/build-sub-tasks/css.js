module.exports = function (gulp, p, s) {
	if (s.oss === 'mts') {
		var buildCss = gulp.src([
				s.app + '/css/style.css',
				s.app + '/css/normalize.css'
			])
			.pipe(gulp.dest(s.build + '/css'));
	} else if (s.oss === 'megafon') {
		console.log(`---------- Соберем весь css в один файл`);
		var buildCss = gulp.src([
				s.app + '/css/style.css',
				s.app + '/css/normalize.css'
			])
			.pipe(p.replace('../img/', ''))
			.pipe(p.concat('style.css'))
			.pipe(gulp.dest(s.build));
	}
}