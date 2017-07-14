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
		console.log(`---------- Корректируем пути к файлам и изображениям`);
		var data = require('D:/webstars/megafon/const/data.json');
		for (let i = 0; i < data.length; i++) {
			var buildHtml = gulp.src(`${s.app} + '/${data[i].page}.html'`)
				.pipe(p.replace('href="css/', 'href="'))
				.pipe(p.replace('img/', ''))
				.pipe(p.rename({
					basename: `${data[i].name}`
				}))
				.pipe(gulp.dest(s.build));
		}
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