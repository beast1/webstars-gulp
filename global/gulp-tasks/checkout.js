"use strict";

module.exports = function (gulp, p, s, m) {
	var isWap = s.project.isWap;
	var isProto = s.localConfig.controls.isProto;
	var styleExt = m.getStyleExt(s);
	if (s.oss === 'tele2') {
		if (isWap === 'false') {
			if (isProto === 'true') {
				return function() {
					var clone = s.project.clones[s.localConfig.controls.execClone];

					console.log(`---------- Текущий прототип: ${s.project.name}[${s.project.ticket}].v${s.project.version}`);
					console.log(`---------- Текущий клон: ${clone.name}[${clone.ticket}]`);

					var appendVars = gulp.src([`${s.app}/clones/${clone.name}/_vars.${styleExt}`])
						.pipe(gulp.dest(`${s.app}/${styleExt}`));

					var appendImg = gulp.src([`${s.app}/clones/${clone.name}/img/*.{png,jpg,jpeg,svg,gif}`])
						.pipe(gulp.dest(`${s.app}/img`));

					var appendPreview = gulp.src([`${s.app}/clones/${clone.name}/preview/*.{png,jpg,jpeg}`])
						.pipe(gulp.dest(`${s.app}/preview`));

					var appendData = gulp.src([`${s.app}/clones/${clone.name}/privatData.json`])
						.pipe(gulp.dest(`${s.app}`));
				}
			}
		}
	}
}