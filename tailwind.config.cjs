const config = {
	content: ['./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}'),
		require('@skeletonlabs/skeleton/tailwind/theme.cjs')
	],

	theme: {
		extend: {}
	},
	darkMode: 'class',

	plugins: []
};

module.exports = config;
