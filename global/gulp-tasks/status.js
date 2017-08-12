"use strict";

module.exports = function (gulp, p, s) {
	return function() {
		var projectsList = '';

		for (let i = 0; i < s.localConfig.projects.length; i++) {
			let style = s.localConfig.projects[i].style === undefined ? s.defaultConfig.style : s.localConfig.projects[i].style;

			projectsList = projectsList + `---------- | ${style} | ${s.localConfig.projects[i].name}.v${s.localConfig.projects[i].version} \n`;
		}
	
		console.log(`---------- Текущий проект: ${s.project.name}-${s.oss}.v${s.project.version}`);
		console.log(`---------- Все проекты:\n${projectsList}`);
	}
};