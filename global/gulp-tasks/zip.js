"use strict";

module.exports = function (gulp, p, s, m) {
	return function() {
		var getSrc = function() {
			if (s.oss === 'tele2') {
				return `${s.zipBufer}/**/*.*`
			} else {
				return s.build + '/**/*.*'
			}
		}

		var getTicket = function() {
            if (s.project.clones !== undefined) {
    		    if (s.project.clones[s.localConfig.controls.execClone].ticket == undefined || s.project.clones[s.localConfig.controls.execClone].ticket == '') {
    		        return ''
                } else {
    		        return `[${s.project.clones[s.localConfig.controls.execClone].ticket}]`
                }
            } else {
                if (s.localConfig.projects[s.localConfig.controls.exec].ticket == undefined || s.localConfig.projects[s.localConfig.controls.exec].ticket == '') {
                    return ''
                } else {
                    return `[${s.localConfig.projects[s.localConfig.controls.exec].ticket}]`
                }
            }
        }

        if (s.localConfig.controls.isProto !== 'true') {
            var buildArchiv = gulp.src(getSrc())
				.pipe(p.zip(`${s.app}-${s.oss}${getTicket()}.v${m.getVersion(s)}.zip`))
				.pipe(gulp.dest(s.defaultConfig.dirs.history))
				.pipe(gulp.dest(s.globalConfig.dirs.history))
				.pipe(gulp.dest(s.globalConfig.dirs.release));

            console.log(`---------- Релиз ${s.app}-${s.oss}${getTicket()}.v${m.getVersion(s)}.zip добавлен в config.json и историю.\n---------- История: ${s.globalConfig.dirs.history}\n---------- Последний релиз: ${s.globalConfig.dirs.release}`);
            if (s.oss === 'mts') {
                return gulp.src("../global/config.json")
                    .pipe(p.jsonEditor(function (json) {
                        json.mts.projects[s.localConfig.controls.exec].version = m.getVersion(s) + "";

                        return json
                    }))
                    .pipe(gulp.dest("../global"));

            } else if (s.oss === 'megafon') {
                return gulp.src("../global/config.json")
                    .pipe(p.jsonEditor(function (json) {
                        json.megafon.projects[s.localConfig.controls.exec].version = m.getVersion(s) + "";

                        return json
                    }))
                    .pipe(gulp.dest("../global"));

            } else if (s.oss === 'beeline') {
                return gulp.src("../global/config.json")
                    .pipe(p.jsonEditor(function (json) {
                        json.beeline.projects[s.localConfig.controls.exec].version = m.getVersion(s) + "";

                        return json
                    }))
                    .pipe(gulp.dest("../global"));

            } else if (s.oss === 'tele2') {
                return gulp.src("../global/config.json")
                    .pipe(p.jsonEditor(function (json) {
                        json.tele2.projects[s.localConfig.controls.exec].version = m.getVersion(s) + "";

                        return json
                    }))
                    .pipe(gulp.dest("../global"));
            }
        } else {
            console.log(`---------- Релиз ${s.project.clones[s.localConfig.controls.execClone].name}-${s.oss}${getTicket()}.v${s.project.version}.zip добавлен в историю.\n---------- История: ${s.globalConfig.dirs.history}\n---------- Последний релиз: ${s.globalConfig.dirs.release}`);

            var buildArchiv = gulp.src(getSrc())
                .pipe(p.zip(`${s.project.clones[s.localConfig.controls.execClone].name}-${s.oss}${getTicket()}.v${s.project.version}.zip`))
                .pipe(gulp.dest(s.defaultConfig.dirs.history))
                .pipe(gulp.dest(s.globalConfig.dirs.history))
                .pipe(gulp.dest(s.globalConfig.dirs.release));
		}
	}
}