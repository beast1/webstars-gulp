"use strict";

module.exports = function (gulp, p, s, m) {
	if (s.oss === 'mts') {
			var privatData = require(`D:/webstars/${s.oss}/${s.app}/privatData.json`);

			m.validateData([privatData.serviceLink]);

			var buildHtml = gulp.src([
					'const/build/offer.html',
					'const/build/offer.mobile.html',
					`${s.app}/html/blocks/*.html`
				])
				.pipe(p.replace('%serviceURL', `http://${privatData.serviceURL}`))
				// Сохранено для обратной совместимости лп мтс до 02.08.17
				.pipe(p.replace('%serviceLink', `${privatData.serviceLink}`))
				.pipe(gulp.dest(s.build));

			if (s.project.platform !== 'mixed') {
				var copyHtml = gulp.src(`${s.app}/html/blocks/*.html`)
				.pipe(p.replace('%serviceLink', `${privatData.serviceLink}`))
				.pipe(p.rename({
					suffix: '.mobile'
				}))
				.pipe(gulp.dest(s.build));
			}

	} else if (s.oss === 'tele2') {
		var cssLink = '<link href="css/common.css" rel="stylesheet">';
		console.log(`-ВАЖНО!- Перед тем как создать архив проекта("gulp zip-pre, а потом gulp zip"), убедись что:\
						 \n---------- Изображения сжаты: https://tinypng.com/\
						 \n---------- Изображения в html подключены в виде base64. Читай README.md в ${s.app}/html/base64 для понимания\
						 \n---------- Скроллов нет на всех страницах: http://mobalfa.net:8080/tele2/setValues.jsp\
						 \n---------- index: http://mobalfa.net:8080/tele2/egor/${s.app}/index.jsp\
						 \n---------- index3: http://mobalfa.net:8080/tele2/egor/${s.app}/index3.jsp\
						 \n---------- fail: http://mobalfa.net:8080/tele2/egor/${s.app}/fail.jsp\
						 \n---------- Скриншоты сделаны: http://mobalfa.net:8080/tele2/setValues.jsp\
						 \n---------- Если по какому-то пункту не проходишь, исправь и перезапусти "gulp build"\
		`);
		// console.log(`---------- Заменим пути к изображениям на base64 в css-файлах(они должны быть уже минимизированны)`);
		// console.log(`---------- В html подставлять base64 придется вручную. Читай README.md в ${s.app}/html/base64`);
		// console.log(`---------- Инлайново вставим стили в html`);
		// console.log(`-ВАЖНО!- Подключать стили только так: ${cssLink}`);

		var getPrivatData = function() {
			if (s.project.data === undefined) {
				return require(`D:/webstars/${s.oss}/${s.app}/privatData.json`)
			} else {
				return s.project.data
			}
		}
 
		// var privatData = require(`D:/webstars/${s.oss}/${s.app}/privatData.json`);
		var privatData = getPrivatData();

		var buildHtml = gulp.src([
				`${s.app}/*.html`
			])
			.pipe(p.replace(cssLink, '<style>@@include("css/common.css")</style>'))
			.pipe(p.fileInclude({
			  prefix: '@@',
			  basepath: '@file'
			}))
			.pipe(p.rename({
				extname: '.jsp'
			}))
			// Подставим приват-параметры
			.pipe(p.replace('%serviceURL', `${privatData.serviceURL}`))
			.pipe(p.replace('%btnText', `${privatData.btnText}`))
			// Обратная совместимость до 08.08
			// .pipe(p.replace('%serviceURL', `${privatData.serviceName}`))
			.pipe(p.replace('%offer', `${privatData.offer}`))
			// Убираем комментарии
			.pipe(p.replace('<!--D', ''))
			.pipe(p.replace('D-->', ''))
			// Убираем комментарии (обратная совместимость)
			.pipe(p.replace('<!-- DEV -->', ''))
			.pipe(p.replace('<!-- <%', '<%'))
			.pipe(p.replace('%> -->', '%>'))
			.pipe(gulp.dest(s.build));

		if (s.project.isWap === 'false') {
			var copyHtml = gulp.src(`const/build/web/**/*.*`)
				.pipe(gulp.dest(s.build));
		} else {
			var copyHtml = gulp.src(`const/build/wap/**/*.*`)
				.pipe(gulp.dest(s.build));
		}

	} else if (s.oss === 'beeline') {
		var cssLink = '<link href="css/common.css" rel="stylesheet">';

		var buildHtml = gulp.src([
				`${s.app}/html/*.html`
			])
			// Уберем инклуды фрагментов
			.pipe(p.replace('@@include("../../const/fragments/errors.html")', '<div th:replace="fragment/errors"></div>'))
			.pipe(p.replace('@@include("../../const/fragments/captcha.html")', '<div th:replace="fragment/captcha"></div>'))
			.pipe(p.replace('@@include("../../const/fragments/activation_code.html")', '<div th:replace="fragment/activation_code"></div>'))

			.pipe(p.replace('@@include("../../const/fragments/subscription_info.html")', '<tr th:if="${evalRequestType == \'subscription-request\'}" th:include="fragment/subscription_info" th:remove="tag"></tr>'))
			.pipe(p.replace('@@include("../../const/fragments/tnb_subscription_info.html")', '<tr th:if="${evalRequestType == \'tnb-subscription-request\'}" th:include="fragment/tnb_subscription_info" th:remove="tag"></tr>'))
			.pipe(p.replace('@@include("../../const/fragments/single_request_info.html")', '<tr th:if="${evalRequestType == \'single-request\'}" th:include="fragment/single_request_info" th:remove="tag"></tr>'))
			// Подставим обязательные поля из const/required
			.pipe(p.fileInclude({
			  prefix: '@@',
			  basepath: '@file'
			}))
			// Заменим ссылку на инлайн стили
			.pipe(p.replace(cssLink, '<style>@@include("../css/common.css")</style>'))
			// Подставим инлайн стили
			.pipe(p.fileInclude({
			  prefix: '@@',
			  basepath: '@file'
			}))
			// Уберем "DEV" комментарии
			.pipe(p.replace('<!--D', ''))
			.pipe(p.replace('D-->', ''))

			.pipe(gulp.dest(s.build));

		var copyHtml = gulp.src(`const/fragments/*.html`)
			.pipe(gulp.dest(s.build));

	} else if (s.oss === 'megafon') {
		console.log(`---------- Корректируем пути к файлам и изображениям`);
		var data = require('D:/webstars/megafon/const/data.json');
		for (let i = 0; i < data.length; i++) {
			var buildHtml = gulp.src(`${s.app}/${data[i].page}.html`)
				.pipe(p.replace('href="css/common.css', 'href="style.css'))
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