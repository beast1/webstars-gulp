module.exports = function (gulp, p, s) {
	return function() {
		switch (s.oss) {
			case "mts": 
				var buildCss = gulp.src([
						s.app + '/css/style.css',
						s.app + '/css/normalize.css'
					])
					.pipe(gulp.dest(s.build + '/css'));
				  }
	}
}