// module.exports = function (gulp, p, s) {
// 	switch (s.oss) {
// 		default:
// 		  return function() {
// 		  	var dir = "../global/new-packs/mts";

// 				var rename = gulp.src(dir)
// 					.pipe(p.prompt.prompt({
// 				      type: 'input',
// 				      name: 'name',
// 				      message: 'project name:'
// 				  }, function(res){
				       

// 				       // var cloneFill = gulp.src('../global/new-packs/mts/**/*.*')
// 				       // 	 .pipe(gulp.dest('new-project'));

// 				       var setName = gulp.src('new-project')
// 				       	 .pipe(p.rename({
// 				       		 basename: res.name
// 				       	 }))
// 				       	 .pipe(gulp.dest('./'));

// 				       var cloneFill = gulp.src('../global/new-packs/mts/**/*.*')
// 				       	 .pipe(gulp.dest(res.name));
// 						 }));
// 		  };
// 	}
// };