"use strict";

module.exports = function (gulp, p, s) {
	return function () {
		return gulp.src(s.build)
			.pipe(p.clean({force: true}));
	};
};