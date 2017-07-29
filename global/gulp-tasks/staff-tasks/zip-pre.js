"use strict";

module.exports = function (gulp, p, s) {
	return function() {
		var buildArchiv = gulp.src(`${s.build}/**/*.*`)
			.pipe(p.zip(`CODE-${s.app}-${s.oss}.war`))
			.pipe(gulp.dest(`${s.zipBufer}`));

		var buildPreview = gulp.src(`${s.app}/preview/*{.png,.jpeg,.jpg}`)
			.pipe(gulp.dest(`${s.zipBufer}`));
		};
};