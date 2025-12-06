/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layouts/**/*.html',
    './content/**/*.md',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0d9488',
        'primary-hover': '#0f766e',
        accent: '#f59e0b',
        'accent-hover': '#d97706',
        foreground: '#f8fafc',
        muted: '#94a3b8',
        'muted-bg': '#1e293b',
        'card-bg': '#334155',
        background: '#0f172a',
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
