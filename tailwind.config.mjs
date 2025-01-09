/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#FFC107', // Amarillo principal
					dark: '#FFA000', // Amarillo oscuro
					light: '#FFECB3', // Amarillo claro
				},
				secondary: {
					DEFAULT: '#D32F2F', // Rojo intenso
					dark: '#B71C1C', // Rojo más oscuro
					light: '#FFCDD2', // Rojo claro
				},
				accent: {
					DEFAULT: '#212121', // Negro sólido
					dark: '#000000', // Negro más profundo
					light: '#484848', // Gris oscuro para textos secundarios
				},
				neutral: {
					DEFAULT: '#E0E0E0', // Gris claro
					dark: '#172439', // Gris medio
					light: '#F5F5F5', // Gris más claro para fondos
				},
				base: {
					DEFAULT: '#FFFFFF', // Blanco puro
				},
			},
		},
	},
	plugins: [],
};
