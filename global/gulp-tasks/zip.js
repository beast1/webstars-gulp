module.exports = function (gulp, p, s) {
	return function() {
		var getVersion = function() {
			var current = s.project.version;

			return +current + 1;
		}

		var buildArchiv = gulp.src(s.build + '/**/*.*')
			.pipe(p.zip(s.oss + '-' + s.app + '.v' + getVersion() + '.zip'))
			.pipe(gulp.dest(s.globalConfig.dirs.release))
			.pipe(gulp.dest(s.defaultConfig.dirs.history))
			.pipe(gulp.dest(s.globalConfig.dirs.history));

		switch (s.oss) {
			case "mts":
				return gulp.src("../global/config.json")
				  .pipe(p.jsonEditor(function(json) {
				    json.mts.projects[s.localConfig.exec].version = getVersion() + "";

				    return json
				  }))
				  .pipe(gulp.dest("../global"));
			case "megafon":
				return gulp.src("../global/config.json")
				  .pipe(p.jsonEditor(function(json) {
				    json.megafon.projects[s.localConfig.exec].version = getVersion() + "";

				    return json
				  }))
				  .pipe(gulp.dest("../global"));
			case "beeline":
				return gulp.src("../global/config.json")
				  .pipe(p.jsonEditor(function(json) {
				    json.mts.projects[s.localConfig.exec].version = getVersion() + "";

				    return json
				  }))
				  .pipe(gulp.dest("../global"));
			case "tele2":
				return gulp.src("../global/config.json")
				  .pipe(p.jsonEditor(function(json) {
				    json.mts.projects[s.localConfig.exec].version = getVersion() + "";

				    return json
				  }))
				  .pipe(gulp.dest("../global"));
		}
	};
};