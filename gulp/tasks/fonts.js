import newer from 'gulp-newer';
import fonter from 'gulp-fonter';
import ttf2woff2 from 'gulp-ttf2woff2';

export default () =>
	app.gulp.src(app.path.fonts.src)
		.pipe(newer(app.path.fonts.dist))
		.pipe(fonter(app.plugins.fonter))
		.pipe(app.gulp.dest(app.path.fonts.dist))
		.pipe(ttf2woff2())
		.pipe(app.gulp.dest(app.path.fonts.dist))
