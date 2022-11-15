/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: '#0FCFEC',
          secondary: '#19D3AE',
          neutral: '#3D4451',
          accent: '#3A4256',
          'base-100': '#FFFFFF'
        }
      },
      {
        dark: {

          "primary": "#16aa8d",
          "secondary": "#20ea24",
          "accent": "#2ac1ad",
          "neutral": "#1E1726",
          "base-100": "#344450",
          "info": "#5B81EC",
          "success": "#54D999",
          "warning": "#C57111",
          "error": "#E66C65",
        }
      }],
  },
}
