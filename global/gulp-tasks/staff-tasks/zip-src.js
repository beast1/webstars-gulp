"use strict";

module.exports = function (gulp, p, s) {
	return function() {
		var buildArchiv = gulp.src(`${s.app}/**/*.*`)
			.pipe(p.zip(`SRC-${s.oss}-${s.app}.zip`))
			.pipe(gulp.dest(`${s.globalConfig.dirs.release}`));
	};
};