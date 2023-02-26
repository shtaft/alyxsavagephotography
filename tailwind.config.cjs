/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    colors: {
      beige: '#c1b6a4',
      charcoal: '#2b2929',
    },
		extend: {
      fontFamily: {
        sans: ['"Gloock"', 'serif'],
      }
    },
	},
	plugins: [],
}
