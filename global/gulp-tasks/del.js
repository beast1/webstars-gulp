//getSubTask('html'); Всегда первый, потому что там удаляем папку build(пока только для теле2)
"use strict";

module.exports = function (gulp, p, s) {
	return function () {
		return gulp.src(s.build)
			.pipe(p.clean());
	};
};