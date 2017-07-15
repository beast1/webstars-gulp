module.exports = function (gulp, p, s) {
	console.log(`---------- Оптимизируем изображения`);
	if (s.oss === 'mts') { 
		var buildImg = gulp.src(s.app + '/img/**/*')
			.pipe(p.imagemin([
	        p.imagemin.optipng({
	            optimizationlevel: 7
	        }),
	        p.imagemin.jpegtran({
	            progressive: true
	        })
	    	], {
	    		verbose: true
	    	}))
			.pipe(gulp.dest(s.build + '/img'));
	} else if (s.oss === 'megafon') {
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
	} else {
		console.log(`---------- Для билайн и теле2 пока вручную`);
	}
}