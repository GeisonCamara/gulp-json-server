var gulp = require('gulp');
var jsonServer = require('gulp-json-srv');

var server = jsonServer.create();

gulp.task('srv', function(){
	return gulp.src("product.json")
		.pipe(server.pipe());
});

gulp.task('default', function () {
	gulp.start('srv');
});