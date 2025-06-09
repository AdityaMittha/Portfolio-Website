
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
			},
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
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Custom color palette for gradients
				'cool-gray': {
					50: 'hsl(var(--cool-gray-50))',
					100: 'hsl(var(--cool-gray-100))',
					200: 'hsl(var(--cool-gray-200))',
					300: 'hsl(var(--cool-gray-300))',
					400: 'hsl(var(--cool-gray-400))',
					500: 'hsl(var(--cool-gray-500))',
					600: 'hsl(var(--cool-gray-600))',
					700: 'hsl(var(--cool-gray-700))',
					800: 'hsl(var(--cool-gray-800))',
					900: 'hsl(var(--cool-gray-900))',
				},
				azure: {
					50: 'hsl(var(--azure-50))',
					100: 'hsl(var(--azure-100))',
					200: 'hsl(var(--azure-200))',
					300: 'hsl(var(--azure-300))',
					400: 'hsl(var(--azure-400))',
					500: 'hsl(var(--azure-500))',
					600: 'hsl(var(--azure-600))',
					700: 'hsl(var(--azure-700))',
					800: 'hsl(var(--azure-800))',
					900: 'hsl(var(--azure-900))',
				},
				mint: {
					50: 'hsl(var(--mint-50))',
					100: 'hsl(var(--mint-100))',
					200: 'hsl(var(--mint-200))',
					300: 'hsl(var(--mint-300))',
					400: 'hsl(var(--mint-400))',
					500: 'hsl(var(--mint-500))',
					600: 'hsl(var(--mint-600))',
					700: 'hsl(var(--mint-700))',
					800: 'hsl(var(--mint-800))',
					900: 'hsl(var(--mint-900))',
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
