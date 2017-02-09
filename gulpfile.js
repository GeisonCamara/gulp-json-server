var gulp = require('gulp');
var jsonServer = require('gulp-json-srv');

var server = jsonServer.create();

gulp.task('db', function(){
	return gulp.src("product.json")
		.pipe(server.pipe());
});

gulp.task("watch", function(){
	gulp.watch(["product.json"], ['db']);
})

gulp.task('default', ['db', 'watch']);