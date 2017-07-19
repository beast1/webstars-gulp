"use strict";

module.exports = function (gulp, p, s) {
	return function() {
		var getVersion = function() {
			var current = s.project.version;

			return +current + 1;
		}

		var getExtension = function() {
			if (s.oss === 'tele2') {
				return 'war'
			} else {
				return 'zip'
			}
		}

		var buildArchiv = gulp.src(s.build + '/**/*.*')
			.pipe(p.zip(`${s.oss}-${s.app}.v${getVersion()}.${getExtension()}`))
			.pipe(gulp.dest(s.defaultConfig.dirs.history))
			.pipe(gulp.dest(s.globalConfig.dirs.history))
			.pipe(gulp.dest(s.globalConfig.dirs.release));

		console.log(`---------- Релиз ${s.oss}-${s.app}.v${getVersion()}.${getExtension()} добавлен в config.json и историю.\n---------- Доступен в ${s.globalConfig.dirs.history}`);

		if (s.oss === 'mts') {
			return gulp.src("../global/config.json")
			  .pipe(p.jsonEditor(function(json) {
			    json.mts.projects[s.localConfig.exec].version = getVersion() + "";

			    return json
			  }))
			  .pipe(gulp.dest("../global"));

		} else if (s.oss === 'megafon') {
			return gulp.src("../global/config.json")
			  .pipe(p.jsonEditor(function(json) {
			    json.megafon.projects[s.localConfig.exec].version = getVersion() + "";

			    return json
			  }))
			  .pipe(gulp.dest("../global"));

		} else if (s.oss === 'beeline') {
			return gulp.src("../global/config.json")
			  .pipe(p.jsonEditor(function(json) {
			    json.beeline.projects[s.localConfig.exec].version = getVersion() + "";

			    return json
			  }))
			  .pipe(gulp.dest("../global"));

		} else if (s.oss === 'tele2') {
			return gulp.src("../global/config.json")
			  .pipe(p.jsonEditor(function(json) {
			    json.tele2.projects[s.localConfig.exec].version = getVersion() + "";

			    return json
			  }))
			  .pipe(gulp.dest("../global"));
		}
	};
};