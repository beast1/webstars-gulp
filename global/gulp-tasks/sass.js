"use strict";

module.exports = function (gulp, p, s) {
	return function () {
		if (s.oss === 'beeline' && s.project.cssSeparate === 'true') {
			if (s.project.cssSeparate === 'true') {
				gulp.src([
						`${s.app}/sass/auth.sass`,
						`${s.app}/sass/order.sass`
					])
					.pipe(p.sass({outputStyle: 'expand'}).on("error", p.notify.onError()))
					.pipe(p.rename({
						basename: 'style'
					}))
					.pipe(p.autoprefixer(['last 15 versions']))
					.pipe(gulp.dest(s.app + '/css'))
					.pipe(p.browserSync.reload({stream: true}));
			} else {
				gulp.src(s.app + '/sass/main.sass')
					.pipe(p.sass({outputStyle: 'expand'}).on("error", p.notify.onError()))
					.pipe(p.rename({
						basename: 'style'
					}))
					.pipe(p.autoprefixer(['last 15 versions']))
					.pipe(gulp.dest(s.app + '/css'))
					.pipe(p.browserSync.reload({stream: true}));
			}
		} else if (s.oss === 'tele2') {
			gulp.src(`${s.app}/sass/common.sass`)
				.pipe(p.sass({outputStyle: 'expand'}).on("error", p.notify.onError()))
				.pipe(p.autoprefixer(['last 15 versions']))
				.pipe(p.base64({
					maxImageSize: 8000*102400
				}))
				.pipe(gulp.dest(`${s.app}/css`))
				.pipe(p.browserSync.reload({stream: true}));
		} else {
			gulp.src(s.app + '/sass/main.sass')
				.pipe(p.sass({outputStyle: 'expand'}).on("error", p.notify.onError()))
				.pipe(p.rename({
					basename: 'style'
				}))
				.pipe(p.autoprefixer(['last 15 versions']))
				.pipe(gulp.dest(s.app + '/css'))
				.pipe(p.browserSync.reload({stream: true}));
		};
	};
};