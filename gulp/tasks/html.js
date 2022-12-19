import fileInclude from 'gulp-file-include';
import htmlmin from 'gulp-htmlmin';
import webpHtml from 'gulp-webp-html';

export default () =>
	app.gulp.src(app.path.html.src)
		.pipe(fileInclude())
		.pipe(webpHtml())
		.pipe(htmlmin(app.plugins.htmlmin))
		.pipe(app.gulp.dest(app.path.html.dist))
