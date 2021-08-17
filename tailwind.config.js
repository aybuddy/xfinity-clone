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
      },
      minWidth: {
        110: '110px',
      },
      fontSize: {
        18: '18px',
      },
      borderTop: {
        smallTop: '.063rem solid #44484c',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
