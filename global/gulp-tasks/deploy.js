module.exports = function (gulp, p, s) {
	if (s.oss === 'tele2') {
		return function() {
			console.log(`---------- Загружаем все файлы на сервер`);
			var conn = p.vinylFtp.create( {
	        host:     s.sequreConfig.host,
	        user:     s.sequreConfig.uname,
	        password: s.sequreConfig.password,
	        parallel: 10,
	        log:      p.util.log
	    } );
	 
	    var globs = [
	    	// `${s.app}/**/*.*`
	    	'index.jsp',
	    	'index3.jsp',
	    	'fail.jsp'
	    ];
 
	    // using base = '.' will transfer everything to /public_html correctly 
	    // turn off buffering in gulp.src for best performance 
	 
	    return gulp.src( globs, { base: '.', buffer: false } )
	        .pipe( conn.newer( './' ) ) // only upload newer files 
	        .pipe( conn.dest( './' ) );
		};
	} else if (s.oss === 'beeline') {
		return function() {
			console.log(`---------- Загружаем все файлы на сервер`);
			var conn = p.vinylFtp.create( {
	        host:     s.sequreConfig.host,
	        user:     s.sequreConfig.uname,
	        password: s.sequreConfig.password,
	        parallel: 10,
	        log:      p.util.log
	    } );
	 
	    var globs = [
	    	`${s.app}/**/*.*`
	    ];
 
	    // using base = '.' will transfer everything to /public_html correctly 
	    // turn off buffering in gulp.src for best performance 
	 
	    return gulp.src( globs, { base: '.', buffer: false } )
	        .pipe( conn.newer( './' ) ) // only upload newer files 
	        .pipe( conn.dest( './' ) );
		};
	}
};