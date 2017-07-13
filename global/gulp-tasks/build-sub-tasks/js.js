module.exports = function (gulp, p, s) {
	return function() {
		switch (s.oss) {
			case "mts": 
				var buildJs = gulp.src(s.app + '/js/script.js')
					.pipe(gulp.dest(s.build + '/js')); 
		}
	}
}