import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import autoPrefixer from "gulp-autoprefixer";
import cleanCss from 'gulp-clean-css';
import rename from 'gulp-rename';
import sassGlob from 'gulp-sass-glob';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import webpCss from 'gulp-webp-css';
import gulpIf from 'gulp-if';

const sass = gulpSass(dartSass);

export default () =>
	app.gulp.src(app.path.sass.src, { sourcemaps: app.plugins.isDev })
		.pipe(sassGlob())
		.pipe(sass(app.plugins.sass))
		.pipe(gulpIf(app.plugins.isProd, groupCssMediaQueries()))
		.pipe(webpCss())
		.pipe(autoPrefixer(app.plugins.autoPrefixer))
		.pipe(app.gulp.dest(app.path.sass.dist, { sourcemaps: app.plugins.isDev }))
		.pipe(rename(app.plugins.rename))
		.pipe(cleanCss())
		.pipe(app.gulp.dest(app.path.sass.dist, { sourcemaps: app.plugins.isDev }))