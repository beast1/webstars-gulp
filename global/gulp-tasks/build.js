"use strict";

module.exports = function (gulp, p, s) {
	return function () {
		function getSubTask(task) {
		  return require('D:/webstars/global/gulp-tasks/build-sub-tasks/' + task)(gulp, p, s);
		}
		switch (s.oss) {
			default:
				getSubTask('css');
				require('D:/webstars/global/gulp-tasks/build-sub-tasks/html.js')(gulp, p, s);
				console.log('it work');
				getSubTask('html');
				getSubTask('img');		
			case 'mts': 
				getSubTask('css');
				console.log('it wo2rk');
				getSubTask('html');
				getSubTask('img');		
				getSubTask('js');
		}	
	};
};