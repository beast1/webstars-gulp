 "use strict";

module.exports = (function() {
	var methods = {};

	methods.getStyleSrc = function(s, task) {
		var ext = '';

		if (s.project.style === 'scss') {
			ext = 'scss';
		} else if (s.project.style === 'sass') {
			ext = 'sass';
		} else if (s.project.style === 'css') {
			// пока нет модуля для css
			ext = s.defaultConfig.style;
		} else {
			ext = s.defaultConfig.style;
		}

		if (task === 'watch') {
			return `${s.app}/${ext}/**/*.${ext}`
		} else if (task === 'sass') {
			return `${s.app}/${ext}/common.${ext}`
		}
	}

	methods.getVersion = function(s) {
		var current = s.project.version;

		return +current + 1;
	}

	methods.validateData = function(params) {
		var errorsCount = 0;
		for (let i = 0; i < params.length; i++) {
			if (params[i] === '') {
				
			}
		}

		if (errorsCount !== 0) {
			console.log(`---------- Кол-во незаполненных полей: ${errorsCount}`);
		}
	}

	return methods
}());