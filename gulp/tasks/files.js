import newer from 'gulp-newer';

export default () =>
	app.gulp.src(app.path.files.src)
		.pipe(newer(app.path.files.dist))
		.pipe(app.gulp.dest(app.path.files.dist))