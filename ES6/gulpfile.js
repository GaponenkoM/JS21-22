const gulp = require('gulp');
const babel = require('gulp-babel');
 
gulp.task('default', () => {
	return gulp.src('js/src/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('js/dist'));
});