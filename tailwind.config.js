/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        checked: 'hsl(280, 87%, 65%)',
        checked1: 'hsl(192, 100%, 67%)',
        'Very-Light-Gray': 'hsl(0, 0%, 98%)',
        'Very-Light-Grayish-Blue': 'hsl(236, 33%, 92%)',
        'Light-Grayish-Blue': 'hsl(233, 11%, 84%)',
        'Dark-Grayish Blue': 'hsl(236, 9%, 61%)',
        'Very-Dark-Grayish-Blue': 'hsl(235, 19%, 35%)',
        'Very-Dark-Blue': 'hsl(235, 21%, 11%)',
        'Very-Dark-Desaturated-Blue': 'hsl(235, 24%, 19%)',
        'Light-Grayish-Blue1': 'hsl(234, 39%, 85%)',
        'Light-Grayish-Blue-(hover)': 'hsl(236, 33%, 92%)',
        'Dark-Grayish-Blue': 'hsl(234, 11%, 52%)',
        'Very-Dark-Grayish-Blue2': 'hsl(233, 14%, 35%)',
        'Very-Dark-Grayish-Blue3': 'hsl(237, 14%, 26%)',
      },
    },
  },
  plugins: [],
};
