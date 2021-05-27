const mainColors = {
  blue: '#14B1F5', //biru
  blueLight: '#DDF4FD', //biru muda
  donker1: '#010080', //donker tua
  donker2: '#254CA7', //donker agak muda
  yellow: '#FFB900', //menu
  yellowLight: '#FEBF19', //kuning
  grey: '#A5A5A5', //Abu2
  greyLight: '#787878', //U-Tulisan, Abu1
  greylighter: '#BDBDBD',
  greyLightest: '#F2F2F2',
  greyLightBox: '#C4C4C4', //warna box shadow
  black: '#4D4D4D', //warna tulisan
  black2: '#2E2E2E', //warna tulisan
  white: '#ffffff', //white
  red: '#F84F31',
  green: '#23C552',
};

export const colors = {
  primary: mainColors.blue,
  secondBlue: mainColors.blueLight,
  secondary: mainColors.yellow,
  primaryWhite: mainColors.white,
  primaryBlack: mainColors.black,
  backgroundgrey: mainColors.greyLightest,
  primarygrey: mainColors.grey,

  text: {
    primary: mainColors.black, //warna tulisan
    title: mainColors.black2, //warna tulisan lebih bold
    primaryBlue: mainColors.blue,
    secondary: mainColors.grey,
    tertiary: mainColors.black, //tulisan abu
    quartenary: mainColors.yellowLight,
    primdonker1: mainColors.donker1,
    primdonker2: mainColors.donker2,
    grey: mainColors.greyLightest,
    white: mainColors.primaryWhite
  },
  boxShadow: {
    primary: mainColors.greyLightBox,
  },
  button: {
    primary: {
      background: mainColors.blue,
      text: mainColors.white,
    },
    primaryOutline: {
      background: mainColors.white,
      text: mainColors.blue,
      outline: mainColors.blue,
    },
    secondary: {
      background: mainColors.yellow,
      text: mainColors.white,
    },
    secondaryOutline: {
      background: mainColors.white,
      text: mainColors.black,
      outline: mainColors.yellowLight,
      blue: mainColors.blue,
    },
    dropdown: {
      background: mainColors.greyLightest,
      text: mainColors.greyLight,
      outline: mainColors.greylighter,
    },
  },
  input: {
    background: mainColors.white,
    text: mainColors.greyLight,
    outline: mainColors.greylighter,
  },
  notifications: {
    success: {
      background: mainColors.green,
      text: mainColors.white,
    },
    warning: {
      background: mainColors.yellow,
      text: mainColors.white,
    },
    error: {
      background: mainColors.red,
      text: mainColors.white,
    },
  },
};
