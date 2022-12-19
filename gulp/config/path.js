const srcPath = './src';
const distPath = './dist';

export default {
	root: distPath,

	html: {
		src: `${srcPath}/html/*.html`,
		dist: distPath,
		watch: `${srcPath}/html/**/*.html`
	},

	sass: {
		src: `${srcPath}/sass/*.{sass,scss}`,
		dist: `${distPath}/css`,
		watch: `${srcPath}/sass/**/*.{sass,scss}`
	},

	js: {
		src: `${srcPath}/js/*.js`,
		dist: `${distPath}/js`,
		watch: `${srcPath}/js/**/*.js`
	},

	img: {
		src: `${srcPath}/img/**/*.{png,jpg,jpeg,gif,svg,ico}`,
		dist: `${distPath}/img`,
		watch: `${srcPath}/img/**/*.{png,jpg,jpeg,gif,svg,ico}`
	},

	fonts: {
		src: `${srcPath}/fonts/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}`,
		dist: `${distPath}/fonts`,
		watch: `${srcPath}/fonts/**/*.{eot,ttf,otf,otc,ttc,woff,woff2,svg}`
	},
}