// module.exports = function (gulp, p, s) {
// 	function getSubTask(task) {
// 	  return require(`sub-tasks/${subTask}`)(gulp, p, s);
// 	}
// 	return function () {
// 	  var buildCss = gulp.src([
// 			s.app + '/css/style.css',
// 			s.app + '/css/normalize.css'
// 		])
// 		.pipe(gulp.dest(s.build + '/css'));

// 		getSubTask('build__html');

// 		var buildImg = gulp.src(s.app + '/img/**/*')
// 			.pipe(p.imagemin([
// 	        p.imagemin.optipng({
// 	            optimizationlevel: 3
// 	        }),
// 	        p.imagemin.jpegtran({
// 	            progressive: true
// 	        })
// 	    	], {
// 	    		verbose: true
// 	    	}))
// 			.pipe(gulp.dest(s.build + '/img')); 

// 		var buildJs = gulp.src(s.app + '/js/script.js')
// 			.pipe(gulp.dest(s.build + '/js'));
// 	};
// };