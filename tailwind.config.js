/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_layouts/**/*.html',
    './_includes/**/*.html',
    './_posts/**/*.md',
    './_pages/**/*.md',
    './index.html',
    './en/index.html',
    './**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        'trailmark': {
          'blue': '#3B82F6',
          'green': '#10B981', 
          'orange': '#F59E0B',
          'stone': '#78716C',
          'earth': '#92400E'
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Poppins', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}