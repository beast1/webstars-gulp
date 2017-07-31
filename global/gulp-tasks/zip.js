"use strict";

module.exports = function (gulp, p, s, m) {
	return function() {
		// var getVersion = function() {
		// 	var current = s.project.version;

		// 	return +current + 1;
		// }
		var getSrc = function() {
			if (s.oss === 'tele2') {
				return `${s.zipBufer}/**/*.*`
			} else {
				return s.build + '/**/*.*'
			}
		}

		var buildArchiv = gulp.src(getSrc())
			.pipe(p.zip(`${s.app}-${s.oss}.v${m.getVersion(s)}.zip`))
			.pipe(gulp.dest(s.defaultConfig.dirs.history))
			.pipe(gulp.dest(s.globalConfig.dirs.history))
			.pipe(gulp.dest(s.globalConfig.dirs.release));

		console.log(`---------- Релиз ${s.app}-${s.oss}.v${m.getVersion(s)}.zip добавлен в config.json и историю.\n---------- История: ${s.globalConfig.dirs.history}\n---------- Последний релиз: ${s.globalConfig.dirs.release}`);

		if (s.oss === 'mts') {
			return gulp.src("../global/config.json")
			  .pipe(p.jsonEditor(function(json) {
			    json.mts.projects[s.localConfig.exec].version = m.getVersion(s) + "";

			    return json
			  }))
			  .pipe(gulp.dest("../global"));

		} else if (s.oss === 'megafon') {
			return gulp.src("../global/config.json")
			  .pipe(p.jsonEditor(function(json) {
			    json.megafon.projects[s.localConfig.exec].version = m.getVersion(s) + "";

			    return json
			  }))
			  .pipe(gulp.dest("../global"));

		} else if (s.oss === 'beeline') {
			return gulp.src("../global/config.json")
			  .pipe(p.jsonEditor(function(json) {
			    json.beeline.projects[s.localConfig.exec].version = m.getVersion(s) + "";

			    return json
			  }))
			  .pipe(gulp.dest("../global"));

		} else if (s.oss === 'tele2') {
			return gulp.src("../global/config.json")
			  .pipe(p.jsonEditor(function(json) {
			    json.tele2.projects[s.localConfig.exec].version = m.getVersion(s) + "";

			    return json
			  }))
			  .pipe(gulp.dest("../global"));
		};
	};
};