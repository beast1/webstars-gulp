"use strict";

module.exports = function (gulp, p, s) {
	return function () {
		function getSubTask(task) {
		  return require('D:/webstars/global/gulp-tasks/build-sub-tasks/' + task)(gulp, p, s);
		}
		if (s.oss === 'mts') {
			console.log('Start build for 3' + s.oss);
			getSubTask('css');
			getSubTask('html');
			getSubTask('img');		
			getSubTask('js');
		} else {
			console.log('Start build for 2' + s.oss);
			getSubTask('css');
			getSubTask('html');
			getSubTask('img');	
		}	
	};
};