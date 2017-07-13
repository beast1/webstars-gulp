module.exports = function (gulp, p, s) {
		if (s.oss === 'mts') {
				console.log(s.oss);
				var buildHtml = gulp.src([
						s.app + '/full-page.html',
						s.app + '/html/blocks/*.html'
					])
					.pipe(gulp.dest(s.build));

				if (s.project.wap === false) {
					var copyHtml = gulp.src([
						s.build + '/header.html',
						s.build + '/footer.html'
					])
					.pipe(p.rename({
						suffix: '.phone'
					}))
					.pipe(gulp.dest(s.build));
				}
			} else if (s.oss === 'megafon') {
				console.log(s.oss);
				var buildHtml = gulp.src([
						s.app + '/sign-in.html',
						s.app + '/subscribe.html',
						s.app + '/describe.html'
					])
					.pipe(p.replace('css/', ''))
					.pipe(p.replace('img/', ''))
					.pipe(gulp.dest(s.build));
			}
}

// module.exports = function (gulp, p, s) {
// 		switch (s.oss) {
// 			case 'mts': 
// 				console.log(s.oss);
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
// 			break 
// 			case 'megafon':
// 				console.log(s.oss);
// 				var buildHtml = gulp.src([
// 						s.app + '/sign-in.html',
// 						s.app + '/subscribe.html',
// 						s.app + '/describe.html'
// 					])
// 					.pipe(p.replace('css/', ''))
// 					.pipe(p.replace('img/', ''))
// 					.pipe(gulp.dest(s.build));
// 			break
// 		}
// }