"use strict";

module.exports = function (gulp, p, s, m) {
  return function() {
    var prompt = require('../../node_modules/prompt');

    var projects = s.localConfig.projects;
    var isFounded = false;

    prompt.start();

    prompt.get(['nextProject'], function (err, result) {
      for (let i = 0; i < projects.length; i++) {
        if (projects[i].name === result.nextProject) {
          console.log(`---------- Проект изменен на '${projects[i].name}'`);

          return gulp.src("../global/config.json")
            .pipe(p.jsonEditor(function (json) {
                if (s.oss === 'mts') {
                  json.mts.controls.exec = String(i);
                } else if (s.oss === 'tele2') {
                  json.tele2.controls.exec = String(i);
                } else if (s.oss === 'beeline') {
                  json.beeline.controls.exec = String(i);
                } else if (s.oss === 'megafon') {
                  json.megafon.controls.exec = String(i);
                }

                return json
            }))
            .pipe(gulp.dest("../global"));
        }
      }

      if (isFounded === false) {
        console.log(`---------- Проект '${result.nextProject}' не найден`);
      }
    });
  }
};

// module.exports = function (gulp, p, s, m) {
// 	return function() {
// 		var projects = s.localConfig.projects;
// 		var newProject = s.localConfig.controls.execProject;
// 		var isFounded = false;

// 		for (let i = 0; i < projects.length; i++) {
// 			if (projects[i].name === newProject) {
// 				return gulp.src("../global/config.json")
//           .pipe(p.jsonEditor(function (json) {
//           		if (s.oss === 'mts') {
//               	json.mts.controls.exec = String(i);
//             	} else if (s.oss === 'tele2') {
//               	json.tele2.controls.exec = String(i);
//             	} else if (s.oss === 'beeline') {
//               	json.beeline.controls.exec = String(i);
//             	} else if (s.oss === 'megafon') {
//               	json.megafon.controls.exec = String(i);
//             	}

//               return json
//           }))
//           .pipe(gulp.dest("../global"));

//           isFounded = true;

//           console.log(`---------- Проект изменен на '${projects[i].name}'`);
// 			}
// 		}

// 		if (isFounded === false) {
// 			console.log(`---------- Проект '${newProject}' не найден`);
// 		}
// 	}
// };