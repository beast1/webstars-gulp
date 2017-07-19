"use strict";

module.exports = function (gulp, p, s) {
	return function () {
		return gulp.src(s.globalConfig.dirs.release)
			.pipe(p.clean({force: true}));
	};
};