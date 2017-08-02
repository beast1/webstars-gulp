"use strict";

module.exports = function (gulp, p, s, m) {
	if (s.oss === 'tele2' || s.oss === 'beeline') {
		return function () {
			gulp.src(m.getStyleSrc(s, 'sass'))
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
			console.log(`Мажорный sass-файл переименован с main и style на common, из-за этого возможны баги в ЛП mf/mts до 31.07`);

			gulp.src(m.getStyleSrc(s, 'sass'))
				.pipe(p.sass({outputStyle: 'expand'}).on("error", p.notify.onError()))
				.pipe(p.autoprefixer(['last 15 versions']))
				.pipe(gulp.dest(`${s.app}/css`))
				.pipe(p.browserSync.reload({stream: true}));
		};
	};
};