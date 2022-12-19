import gulp from 'gulp';
import browserSync from 'browser-sync';
import path from './gulp/config/path.js';
import plugins from './gulp/config/plugins.js';

global.app = {
	gulp: gulp,
	path: path,
	plugins: plugins,
}

import clear from './gulp/tasks/clear.js';
import html from './gulp/tasks/html.js';
import sass from './gulp/tasks/sass.js';
import js from './gulp/tasks/js.js';
import img from './gulp/tasks/img.js';
import fonts from './gulp/tasks/fonts.js';

const server = () => {
	browserSync.init({
		server: {
			baseDir: app.path.root
		}
	})
}

const watching = () => {
	gulp.watch(path.html.watch, html).on('all', browserSync.reload)
	gulp.watch(path.sass.watch, sass).on('all', browserSync.reload)
	gulp.watch(path.js.watch, js).on('all', browserSync.reload)
	gulp.watch(path.img.watch, img).on('all', browserSync.reload)
	gulp.watch(path.fonts.watch, fonts).on('all', browserSync.reload)
}

const build = gulp.series(
	clear,
	gulp.parallel(html, sass, js, img, fonts)
)

const dev = gulp.series(
	gulp.parallel(html, sass, js, img, fonts),
	gulp.parallel(server, watching)
)

export { html }
export { sass }
export { clear }
export { js }
export { img }
export { fonts }
export { watching }
export { server }

export default plugins.isProd
	? build //gulp --production
	: dev   //gulp