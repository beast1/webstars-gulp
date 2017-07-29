module.exports = function (gulp, p, s) {
	return function() {
		console.log(`---------- Текущий проект: ${s.project.name}-${s.oss}.v${s.project.version}`);
		console.log(`---------- Все проекты:\n---------- ${s.localConfig.projects}`);
	}
};