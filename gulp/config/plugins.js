const isProd = process.argv.includes('--production');
const isDev = !isProd;

export default {
	isProd: isProd,
	isDev: isDev,

	htmlmin: {
		collapseWhitespace: isProd
	},

	autoPrefixer: {
		grid: true,
		overrideBrowserslist: 'last 5 versions',
	},

	sass: {
		outputStyle: 'expanded'
	},

	rename: {
		suffix: '.min'
	},

	babel: {
		presets: ['@babel/env']
	},

	fonter: {
		formats: ['ttf', 'woff', 'eot', 'svg']
	}
}