import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'
import plugin from 'tailwindcss/plugin'

export default {
  darkMode: 'class',
  content: ['./src/**/*.vue'],
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
  plugins: [
    typography(),
    plugin(({ addComponents, theme }) => {
      addComponents({
        '.card': {
          display: 'block',
          width: '100%',
          cursor: 'pointer',
          borderRadius: theme('borderRadius.xl'),
          borderWidth: theme('borderWidth.DEFAULT'),
          borderColor: theme('colors.gray.300'),
          backgroundColor: theme('colors.gray.50/40'),
          padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
          color: theme('colors.gray.600'),
          '&:hover': {
            borderColor: theme('colors.gray.400'),
            color: theme('colors.black')
          },
          '@apply transition-colors dark:border-neutral-800 dark:bg-neutral-800/40 dark:text-gray-300 dark:hover:border-neutral-700 dark:hover:text-white':
            {}
        }
      })
    })
  ]
} as Config
