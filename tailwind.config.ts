import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0e434b',
        secondary: '#c05124',
        textClr: '#323c4f',
        BgClr: '#eae3c9'
      },
    },
  },
} satisfies Config