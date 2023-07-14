/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      textColor: theme => theme('colors'),
      textColor: {
        'primary': '#808291',
        'secondary': '#070B28',
        'heading' : '#1B1C31'

      },
      // backgroundColor: {
      //   theme: {
      //     backgroundColor: theme => ({
      //       'primaryGradient': 'linear-gradient(228deg, #FD9174 0%, #F9896B 100%);'
      //     })
      //   }
      // },
      fontFamily: {
        'google': ['"Plus Jakarta Sans"', 'sans-serif']
      },
      colors: {
        'primary': '#F9896B',
        'nav': '#FAFAFA',
        'logo': '#51459E',
      }
    },
  },
  plugins: [],
}
