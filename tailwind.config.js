module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        columnSize: "300px"
      },
      backgroundColor: {
        primary: '#19052b',
        primaryHover: '#795599'
      },
      textColor: {
        primary: '#fff'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
