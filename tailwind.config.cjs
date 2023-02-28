/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
      colors: {
        beige: '#c1b6a4',
        charcoal: '#2b2929',
        white: '#fafafa',
        'regal-blue': '#c1b6a4',
      },
      fontSize: {
        '10xl': '12rem',
      },
      fontFamily: {
        sans: ['"Gloock"', 'serif'],
      }
    },
	},
	plugins: [],
}
