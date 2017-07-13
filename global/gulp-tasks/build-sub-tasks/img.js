module.exports = function (gulp, p, s) {
	return function() {
		switch (s.oss) {
			case 'mts': 
				var buildImg = gulp.src(s.app + '/img/**/*')
					.pipe(p.imagemin([
			        p.imagemin.optipng({
			            optimizationlevel: 3
			        }),
			        p.imagemin.jpegtran({
			            progressive: true
			        })
			    	], {
			    		verbose: true
			    	}))
					.pipe(gulp.dest(s.build + '/img'));
			case 'megafon':
				var buildImg = gulp.src(s.app + '/img/**/*')
					.pipe(p.imagemin([
			        p.imagemin.optipng({
			            optimizationlevel: 3
			        }),
			        p.imagemin.jpegtran({
			            progressive: true
			        })
			    	], {
			    		verbose: true
			    	}))
					.pipe(gulp.dest(s.build));
		}
	}
}