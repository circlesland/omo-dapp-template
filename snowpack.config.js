const development = process.env.NODE_ENV === 'development';

module.exports = {
    mount: {
		public: '/',
		src: '/dist',
    },
    plugins: [
		'@snowpack/plugin-svelte',
		'@snowpack/plugin-dotenv',
		"@snowpack/plugin-webpack",
		'@snowpack/plugin-babel',
    '@snowpack/plugin-postcss',
    '@snowpack/plugin-typescript',
    ]
};