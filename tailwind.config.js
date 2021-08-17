module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        linkColor: '#b1b9bf',
      },
      flex: {
        2: '2 1 auto',
        '1auto': '1 0 auto',
        '0auto': '0 0 auto',
        75: '1 1 75%',
        half: '0.5 0.5 100%',
      },
      minWidth: {
        110: '110px',
      },
      maxWidth: {
        hXl: '50%',
      },
      fontSize: {
        18: '18px',
      },
      borderTop: {
        smallTop: '.063rem solid #44484c',
      },
      minHeight: {
        full: '80vw',
        half: '40vw',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
