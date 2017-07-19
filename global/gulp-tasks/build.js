"use strict";

module.exports = function (gulp, p, s) {
	return function () {
		function getSubTask(task) {
		  return require('D:/webstars/global/gulp-tasks/build-sub-tasks/' + task)(gulp, p, s);
		}

		if (s.oss === 'mts') {
			// getSubTask('del');
			getSubTask('css');
			getSubTask('html');
			getSubTask('img');		
			getSubTask('js');
		} else if (s.oss === 'tele2') {
			getSubTask('html');

			console.log(`-ВАЖНО!- В ${s.app}/preview должны лежать скриншоты каждой страницы на сервере: http://mobalfa.net:8080/tele2/setValues.jsp`);
			var buildPreview = gulp.src(`${s.app}/preview/*`)
				.pipe(gulp.dest(s.build));

		} else if (s.oss === 'beeline') {
			// getSubTask('del');
			getSubTask('css');
			getSubTask('img');
			getSubTask('html');
		} else {
			// getSubTask('del');
			getSubTask('css');
			getSubTask('img');
			getSubTask('html');
		}	
	};
};