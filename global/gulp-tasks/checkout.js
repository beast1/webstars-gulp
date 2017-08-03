/*
Перенести getFiles-tele2
Добавить два клона
Протестировать
*/
"use strict";

module.exports = function (gulp, p, s, m) {
	var isWap = s.project.isWap;
	var isProto = s.localConfig.controls.isProto;
	var styleExt = m.getStyleExt(s);
	if (s.oss === 'tele2') {
		if (isWap === 'false') {
			if (isProto === 'true') {
				var clone = s.project.clones[s.localConfig.controls.execClone];
				
				return function() {
					var appendVars = gulp.src([`${s.app}/clones/${clone}/_vars.${styleExt}`])
						.pipe(gulp.dest(`${s.app}/${styleExt}`));

					var appendImg = gulp.src([`${s.app}/clones/${clone}/img/*.{png,jpg,jpeg,svg,gif}`])
						.pipe(gulp.dest(`${s.app}/img`));

					var appendPreview = gulp.src([`${s.app}/clones/${clone}/preview/*.{png,jpg,jpeg}`])
						.pipe(gulp.dest(`${s.app}/preview`));
				}
			}
		}
	}
};