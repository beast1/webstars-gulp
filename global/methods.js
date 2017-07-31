"use strict";

module.exports = (function() {
	var methods = {};

	methods.getStyleSrc = function(s) {
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

		return `${s.app}/${ext}/common.${ext}`
	}

	methods.getStyleTask = function() {
		var task = '';

		if (s.project.style === 'scss') {
			task = 'scss';
		} else if (s.project.style === 'sass') {
			task = 'sass';
		} else if (s.project.style === 'css') {
			// пока нет модуля для css
			task = s.defaultConfig.style;
		} else {
			task = s.defaultConfig.style;
		}

		return task
	}

	methods.getVersion = function(s) {
		var current = s.project.version;

		return +current + 1;
	}

	return methods
}());