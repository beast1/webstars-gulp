// return должен быть внутри условия

module.exports = function (gulp, p, s) {
	var getStyleSrc = function() {
		var ext = '';

		if (s.project.style === 'scss') {
			ext = 'scss';
		} else if (s.project.style === 'sass') {
			ext = 'sass';
		} else if (s.project.style === 'css') {
		// пока нет модуля для css{
			ext = s.defaultConfig.style;
		} else {
			ext = s.defaultConfig.style;
		}

		return `${s.app}/${ext}/common.${ext}`
	}

	var getStyleTask = function() {
		var task = '';

		if (s.project.style === 'scss') {
			task = 'scss';
		} else if (s.project.style === 'sass') {
			task = 'sass';
		} else if (s.project.style === 'css') {
			// пока нет модуля для css
			task = s.defaultConfig.style;
		} else {
			task = s.defaultConfig.style;
		}

		return task
	}

	if (s.oss === 'mts') {
		return function() {
			console.log(`---------- Текущий проект: ${s.project.name}-mts.v${s.project.version}`);
			gulp.watch(getStyleSrc(), [getStyleTask()]);
			gulp.watch(s.app + '/html/**/*.html', ['html']);
		}
	} else if (s.oss === 'beeline') {
		return function() {
			console.log(`---------- Текущий проект: ${s.project.name}-beeline.v${s.project.version}`);
			gulp.watch(getStyleSrc(), [getStyleTask()]);
			gulp.watch(`${s.app}/html/**/*.html`, ['html']);
			gulp.watch(`const/fragments/*.html`, ['html']);
			gulp.watch(`const/required/**/*.html`, ['html']);
			// gulp.watch(`${s.app}/sass/**/*.sass`, function (event) {
			//   p.sequence('sass', 'html')(function (err) {
			//     if (err) console.log('---------- Ошибка в gulp-tasks.watch.beeline')
			//   });
			// });
		}
	} else if (s.oss === 'tele2' || s.oss === 'beeline') {
		return function() {
			console.log(`---------- Текущий проект: ${s.project.name}-tele2.v${s.project.version}`);
			gulp.watch(getStyleSrc(), [getStyleTask()]);
			gulp.watch(`${s.app}/**/*.html`, ['html']);
		};
	} else {
		return function() {
			console.log(`---------- Текущий проект: ${s.project.name}.v${s.project.version}`);
			gulp.watch(getStyleSrc(), [getStyleTask()]);	
			gulp.watch(s.app + '/html/**/*.html', ['html']);
		};
	};
};