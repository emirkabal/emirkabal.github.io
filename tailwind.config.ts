import { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  darkMode: 'class',
  content: [],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Inter, ui-sans-serif, system-ui, -apple-system, Arial, Roboto, sans-serif'
      },
      colors: {
        klue: '#39A7F2'
      }
    }
  },
  plugins: [typography()]
} as Config
