"use strict";

module.exports = function (gulp, p, s) {
	if (s.oss === 'mts') {
		return function() {
			return gulp.src(s.app + '/html/full-page.html')
				.pipe(p.fileInclude({
		      prefix: '@@',
		      basepath: '@file'
		    }))
		    .pipe(gulp.dest(s.app))
		    .pipe(p.browserSync.reload({stream: true}));
		};
	} else if (s.oss === 'megafon') {
			console.log(`---------- Сборка блоков из D:/webstars/megafon/${s.app}/html/blocks`);
			console.log(`---------- Подстановка значений из D:/webstars/megafon/const/data.json`);
			var data = require('D:/webstars/megafon/const/data.json');

			for (let i = 0; i < data.length; i++) {
				let html = gulp.src(`${s.app}/html/${data[i].page}.html`)
				.pipe(p.fileInclude({
			     prefix: '@@',
			     basepath: '@file'
			   }))
				 .pipe(p.replace(`%title`, `${data[i].title}`))
				 .pipe(p.replace(`%footer`, `${data[i].footer}`))
				 .pipe(p.replace(`%p.text`, `${data[i].inputs.phone.label}`))
				 .pipe(p.replace(`%p.id`, `${data[i].inputs.phone.id}`))
				 .pipe(p.replace(`%p.class`, `${data[i].inputs.phone.class}`))

				 .pipe(p.replace(`%c.text`, `${data[i].inputs.captcha.label}`))
				 .pipe(p.replace(`%c.id`, `${data[i].inputs.captcha.id}`))
				 .pipe(p.replace(`%c.class`, `${data[i].inputs.captcha.class}`))
				 .pipe(p.replace(`%c.src`, `${data[i].inputs.captcha.src}`))
				 .pipe(p.replace(`%c.reload`, `${data[i].inputs.captcha.reload}`))

				 .pipe(p.replace(`%s.text`, `${data[i].inputs.sms.label}`))
				 .pipe(p.replace(`%s.id`, `${data[i].inputs.sms.id}`))
				 .pipe(p.replace(`%s.class`, `${data[i].inputs.sms.class}`))

				 .pipe(p.replace(`%b.submit`, `${data[i].buttons.submit}`))
				 .pipe(p.replace(`%b.cencel`, `${data[i].buttons.cencel}`))
				 .pipe(p.htmlBeautify())
			   .pipe(gulp.dest(s.app))
			   .pipe(p.browserSync.reload({stream: true}));
			}
	};
};