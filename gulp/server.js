/**
 * Created by harshavardhan on 15-02-17.
 */
var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('dev:server', function() {
	nodemon({
		script : 'server.js',
		ext:'js',
		ignore:['ng*','gulp*','assets*']
	})
})