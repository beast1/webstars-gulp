"use strict";

module.exports = function (gulp, p, s) {
	function getSubTask(task) {
	  return require('D:/webstars/global/gulp-tasks/build-sub-tasks/' + task)(gulp, p, s);
	}

	return function () {
		switch (s.oss) {
			default:
				getSubTask('css');
				getSubTask('html');
				getSubTask('img');		
			case 'mts': 
				getSubTask('css');
				getSubTask('html');
				getSubTask('img');		
				getSubTask('js');
		}	
	};
};