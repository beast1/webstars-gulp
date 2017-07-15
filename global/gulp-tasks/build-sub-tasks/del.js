module.exports = function (gulp, p, s) {
	var buildCss = gulp.src(s.build)
		.pipe(p.clean());
}