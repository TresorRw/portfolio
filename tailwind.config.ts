import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            background: {
              DEFAULT: "#0A2647",
              foreground: "#000000",
            },
            primary: {
              DEFAULT: '#005275',
            },
            secondary: {
              DEFAULT: '#00818F'
            },
            success: {
              DEFAULT: '#84D87C',
              foreground: '#000000'
            },
            warning: {
              DEFAULT: '#F9F871',
              foreground: '#000000'
            }
          },
        },
      },
    }),
  ],
}
export default config
