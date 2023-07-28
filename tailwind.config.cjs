const { fontFamily } = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: ['class'],
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				theme: {
					50: 'hsl(239, 94%, 19%)',
					100: 'hsl(214, 97%, 27%)',
					200: 'hsl(201, 100%, 36%)',
					300: 'hsl(195, 100%, 39%)',
					400: 'hsl(190, 100%, 42%)',
					500: 'hsl(190, 74%, 59%)',
					600: 'hsl(189, 75%, 75%)',
					700: 'hsl(190, 76%, 82%)',
					800: 'hsl(190, 77%, 88%)',
					900: 'hsl(190, 87%, 100%)'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				sans: [...fontFamily.sans]
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
};
