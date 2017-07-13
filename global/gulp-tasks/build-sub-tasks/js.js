module.exports = function (gulp, p, s) {
	if (s.oss === 'mts') {
		var buildJs = gulp.src(s.app + '/js/script.js')
			.pipe(gulp.dest(s.build + '/js')); 
	}
}