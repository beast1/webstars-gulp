module.exports = function (gulp, p, s) {
		switch (s.oss) {
			case "mts": 
				var buildCss = gulp.src([
						s.app + '/css/style.css',
						s.app + '/css/normalize.css'
					])
					.pipe(gulp.dest(s.build + '/css'));
			break
			case "megafon": 
				var buildCss = gulp.src([
						s.app + '/css/style.css',
						s.app + '/css/normalize.css'
					])
					.pipe(p.replace('../img/', ''))
					.pipe(gulp.dest(s.build));
			break
		}
}