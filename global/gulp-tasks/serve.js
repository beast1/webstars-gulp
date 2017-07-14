module.exports = function (gulp, p, s) {
	return function() {
		if (s.oss === 'mts') {
			var index = 'full-page.html';
		} else if (s.oss === 'megafon') {
			var index = 'sign-in.html';
		}
		p.browserSync({
			server: {
				baseDir: s.app,
				index: index
			},
			notify: false,
			// tunnel: true,
			// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
		});
	}
};