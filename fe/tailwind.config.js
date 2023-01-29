/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        abrilfatface: ['Abril Fatface', 'cursive'],
        merriweather: ['Merriweather', 'serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
        paytoneone: ['Paytone One', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        rubik: ['Rubik', 'sans-serif'],
        rubikmaze: ['Rubik Maze', 'cursive'],
        tinos: ['Tinos', 'serif'],
        cormorant: ['Cormorant', 'serif'],
      },
    },
  },
  plugins: [],
};
