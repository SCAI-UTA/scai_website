/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{html,js,jsx,ts,tsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
    './sections/**/*.{html,js,jsx,ts,tsx}',
    './pages/**/*.{html,js,jsx,ts,tsx}',
    './styles/**/*.{html,js,jsx,ts,tsx}',
  ],
  mode: 'jit', // Enable Just-In-Time mode for faster builds
  theme: {
    extend: {
      // Extend the default color palette
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
        'accent-purple': '#A509FF',
        'accent-blue': '#34ACC7',
      },
      // Extend transition timing functions
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
        'in-out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      // Extend spacing utilities
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
        '128': '32rem',
      },
      // Extend border radius
      borderRadius: {
        'lg': '12px',
        'xl': '20px',
        '2xl': '40px',
      },
      // Add custom font families
      fontFamily: {
        sans: ['Eudoxus Sans', 'sans-serif'],
        heading: ['Roboto', 'sans-serif'],
      },
      // Add custom animations
      keyframes: {
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'spin-slow': 'spinSlow 8s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // For prose and text formatting
    require('@tailwindcss/forms'), // For styled form elements
    require('@tailwindcss/aspect-ratio'), // For maintaining aspect ratios
    require('@tailwindcss/line-clamp'), // For truncating text
  ],
};

