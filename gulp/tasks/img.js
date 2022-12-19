import imagemin from 'gulp-imagemin';
import newer from 'gulp-newer';
import webp from 'gulp-webp';
import gulpIf from 'gulp-if';

export default () =>
	app.gulp.src(app.path.img.src)
		.pipe(newer(app.path.img.dist))
		.pipe(webp())
		.pipe(app.gulp.dest(app.path.img.dist))
		.pipe(app.gulp.src(app.path.img.src))
		.pipe(newer(app.path.img.dist))
		.pipe(gulpIf(app.plugins.isProd, imagemin()))
		.pipe(app.gulp.dest(app.path.img.dist))