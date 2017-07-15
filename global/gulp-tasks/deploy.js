module.exports = function (gulp, p, s) {
	if (s.oss === 'tele2') {
		return function() {
			var conn = p.vinylFtp.create( {
	        host:     'mywebsite.tld',
	        user:     'me',
	        password: 'mypass',
	        parallel: 10,
	        log:      p.util.log
	    } );
	 
	    var globs = [
	        'src/**',
	        'css/**',
	        'js/**',
	        'fonts/**',
	        'index.html'
	    ];
 
	    // using base = '.' will transfer everything to /public_html correctly 
	    // turn off buffering in gulp.src for best performance 
	 
	    return gulp.src( globs, { base: '.', buffer: false } )
	        .pipe( conn.newer( '/public_html' ) ) // only upload newer files 
	        .pipe( conn.dest( '/public_html' ) );
		};
	};
};