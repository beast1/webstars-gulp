module.exports = function (gulp, p, s) {
	return function() {
		p.browserSync({
			server: {
				baseDir: s.app,
				index: "full-page.html"
			},
			notify: false,
			// tunnel: true,
			// tunnel: "projectmane", //Demonstration page: http://projectmane.localtunnel.me
		});
	}
};