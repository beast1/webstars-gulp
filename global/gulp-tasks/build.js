//getSubTask('html'); Всегда первый, потому что там удаляем папку build(пока только для теле2)
"use strict";

module.exports = function (gulp, p, s, m) {
	return function () {
		function getSubTask(task) {
		  return require('D:/webstars/global/gulp-tasks/build-sub-tasks/' + task)(gulp, p, s, m);
		}

		if (s.oss === 'mts') {
			getSubTask('html');
			// getSubTask('del');
			getSubTask('css');
			getSubTask('img');		
			// getSubTask('js');
		} else if (s.oss === 'tele2') {
			getSubTask('html');

			// var buildPreview = gulp.src([
			// 	`${s.app}/preview/*.jpg`,
			// 	`${s.app}/preview/*.png`,
			// 	`${s.app}/preview/*.jpeg`
			// 	])
			// 	.pipe(gulp.dest(s.build));

		} else if (s.oss === 'beeline') {
			getSubTask('html');
		} else {
			getSubTask('html');
			// getSubTask('del');
			getSubTask('css');
			getSubTask('img');
		}	
	};
};