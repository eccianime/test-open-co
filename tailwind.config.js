/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        poppins_light: ['Poppins_300Light'],
        poppins_medium: ['Poppins_500Medium'],
        poppins_semibold: ['Poppins_600SemiBold'],
        poppins_bold: ['Poppins_700Bold'],
      },
      colors: {
        primary: '#036c39',
        secondary: '#2fc94e',
        background: '#74b882',
      },
    },
  },
  plugins: [],
};
