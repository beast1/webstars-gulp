"use strict";

module.exports = function (gulp, p, s, methods) {
	var getStyleSrc = function() {
		var ext = '';

		if (s.project.style === 'scss') {
			ext = 'scss';
		} else if (s.project.style === 'sass') {
			ext = 'sass';
		} else if (s.project.style === 'css') {
			// пока нет модуля для css
			task = s.defaultConfig.style;
		} else {
			ext = s.defaultConfig.style;
		}

		return `${s.app}/${ext}/common.${ext}`
	}

	console.log(`Мажорный sass-файл переименован с main и style на common, из-за этого возможны баги в ЛП tele2/mts до 31.07`);

	if (s.oss === 'tele2' || s.oss === 'beeline') {
		return function () {
			gulp.src(getStyleSrc())
				.pipe(p.sass({outputStyle: 'expand'}).on("error", p.notify.onError()))
				.pipe(p.autoprefixer(['last 15 versions']))
				.pipe(p.base64({
					maxImageSize: 8000*102400
				}))
				.pipe(gulp.dest(`${s.app}/css`))
				.pipe(p.browserSync.reload({stream: true}));
		};

	} else {
		return function () {
			gulp.src(getStyleSrc())
				.pipe(p.sass({outputStyle: 'expand'}).on("error", p.notify.onError()))
				.pipe(p.autoprefixer(['last 15 versions']))
				.pipe(gulp.dest(`${s.app}/css`))
				.pipe(p.browserSync.reload({stream: true}));
		};
	};
};