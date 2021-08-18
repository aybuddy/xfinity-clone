module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        linkColor: '#b1b9bf',
        buttonColor: 'rgba(35,35,40,.15)',
      },
      fontSize: {
        head2: [
          'clamp(1.625rem,1.2623456790123457rem + 1.5432098765432098vw,2.25rem)',
          'clamp(2.125rem,1.7623456790123457rem + 1.5432098765432098vw,2.75rem)',
        ],
        biggest: '100px',
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
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
      },
      fontSize: {
        18: '18px',
      },
      borderTop: {
        smallTop: '.063rem solid #44484c',
      },
      minHeight: {
        '80h': '80vw',
        '40h': '40vw',
      },
      backgroundColor: {
        grey05: 'rgba(246,246,249,1)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
