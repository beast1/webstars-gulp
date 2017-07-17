"use strict";

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
	} else if (s.oss === 'tele2') {
		var cssLink = '<link href="css/common.css" rel="stylesheet">'
		console.log(`---------- Заменим пути к изображениям на base64(они должны быть уже минимизированны)`);
		console.log(`---------- Инлайново вставим стили в html`);
		console.log(`-ВАЖНО!- Подключать стили только так: ${cssLink}`);
		var buildHtml = gulp.src([
				`${s.app}/*.html`
			])
			.pipe(p.img64Html())
			.pipe(p.replace(cssLink, '<style>@@include("css/common.css")</style>'))
			.pipe(p.fileInclude({
			  prefix: '@@',
			  basepath: '@file'
			}))
			.pipe(p.rename({
				extname: '.jsp'
			}))
			//Таск по непонятным причинам генерирует закрывающие теги тегов типа "<%= %>". Мы это исправим
			.pipe(p.replace('%=""', '%'))
			.pipe(p.replace('</%=>', ''))
			.pipe(gulp.dest(s.build));
	} else if (s.oss === 'beeline') {
		var buildHtml = gulp.src([
				`${s.app}/auth.html`,
				`${s.app}/order.html`,
				`${s.app}/styles.html`
			])
			.pipe(gulp.dest(s.build));
		console.log(`---------- Подбрасываем фрагменты из ${s.localConfig.dirs.fragments}`);
		var buildFragments = gulp.src([
				`${s.localConfig.dirs.fragments}/*.html`
			])
			.pipe(gulp.dest(s.build));
	} else if (s.oss === 'megafon') {
		console.log(`---------- Корректируем пути к файлам и изображениям`);
		var data = require('D:/webstars/megafon/const/data.json');
		for (let i = 0; i < data.length; i++) {
			var buildHtml = gulp.src(`${s.app}/${data[i].page}.html`)
				.pipe(p.replace('href="css/', 'href="'))
				.pipe(p.replace('img/', ''))
				.pipe(p.rename({
					basename: `${data[i].rusPage}`
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