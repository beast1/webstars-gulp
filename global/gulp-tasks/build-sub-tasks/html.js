module.exports = function (gulp, p, s) {
		if (s.oss === 'mts') {
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

				var buildHtml = gulp.src(s.app + '/sign-in.html')
					.pipe(p.replace('css/', ''))
					.pipe(p.replace('img/', ''))
					.pipe(p.rename({
						basename: 'страница авторизации'
					}))
					.pipe(gulp.dest(s.build));

				var buildHtml2 = gulp.src(s.app + '/subscribe.html')
					.pipe(p.replace('css/', ''))
					.pipe(p.replace('img/', ''))
					.pipe(p.rename({
						basename: 'страница подписки'
					}))
					.pipe(gulp.dest(s.build));

				var buildHtml3 = gulp.src(s.app + '/describe.html')
					.pipe(p.replace('css/', ''))
					.pipe(p.replace('img/', ''))
					.pipe(p.rename({
						basename: 'страница отписки'
					}))
					.pipe(gulp.dest(s.build));
			}
}

// https://stackoverflow.com/questions/37043095/gulp-rename-multiple-files
// var data = ['name1','name2'];
// var streams = [];
// data.forEach(function(name) {
//   var stream = gulp.src('src/master.html')
//     .pipe(rename(function(path) {
//       path.basename = name;
//       path.extname = '.html';
//     }))
//     .pipe(gulp.dest('dist'));
//   streams.push(stream);
// });
// return merge(streams);