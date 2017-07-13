// module.exports = function (gulp, p, s) {
// 	return function() {
// 		switch (s.oss) {
// 			case "mts": 
// 				var buildHtml = gulp.src([
// 						s.app + '/full-page.html',
// 						s.app + '/html/blocks/*.html'
// 					])
// 					.pipe(gulp.dest(s.build));

// 				if (s.project.wap === false) {
// 					var copyHtml = gulp.src([
// 						s.build + '/header.html',
// 						s.build + '/footer.html'
// 					])
// 					.pipe(p.rename({
// 						suffix: '.phone'
// 					}))
// 					.pipe(gulp.dest(s.build));
// 				}
// 		}
// 	}
// }