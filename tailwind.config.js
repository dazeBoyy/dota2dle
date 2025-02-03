/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        swordpulse: {
          '0%, 100%': { opacity: '0.2' },
          '50%': { opacity: '0.55' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.2)' }
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-out',
        swordpulse: 'swordpulse 10s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
      }
    }
  }
};
