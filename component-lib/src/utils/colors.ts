interface colors {
  corePurple100: '#F9EEFE';
  corePurple200: '#F2DBFD';
  corePurple300: '#C86AF8';
  corePurple400: '#AF3CE8';
  corePurple500: '#990AE3';
  corePurple600: '#7907B3';
  corePurple700: '#570580';
  corePurple800: '#380354';
  corePurple900: '#1F012F'; 

  grey100: '#FBFBFB';
  grey200: '#F2F2F2';
  grey300: '#CCCCCC';
  grey400: '#A0A0A0';
  grey500: '#6E6E6E';
  grey600: '#5E5E5E';
  grey700: '#4E4E4E';
  grey800: '#303030';
  grey900: '#222222'; 

  green100: '#F3FFF9';
  green200: '#D9FFEB';
  green300: '#40FF9F';
  green400: '#00F37A';
  green500: '#00D066';
  green600: '#00A552';

  red100: '#FFF5F9';
  red200: '#FFE0EB';
  red300: '#FF6699';
  red400: '#FF3377';
  red500: '#E4175C';
  red600: '#BF134D';

  orange100: '#FFF7EB';
  orange200: '#FFEDD0';
  orange300: '#FFD06B';
  orange400: '#FFB84D';
  orange500: '#FF9B00';
  orange600: '#DD8804';

  blue100: '#EDF8FF';
  blue200: '#D4EEFF';
  blue300: '#73C7FF';
  blue400: '#40B2FF';
  blue500: '#0099FF';
  blue600: '#0082D9';
}

interface alias {
  corePurple: colors["corePurple500"];
  deepPurple: colors["corePurple800"];
  blackPurple: colors["corePurple900"];

  lightGrey: colors["grey200"];
  darkGrey: colors["grey400"];
  black: colors["grey900"];

  green: colors["green500"];
  red: colors["red500"];
  orange: colors["orange500"];
  blue: colors["blue500"];
}

export type colorTypes =  colors & alias;



export const colors: colorTypes = {
  
  // PURPLE
  corePurple100: '#F9EEFE',
  corePurple200: '#F2DBFD',
  corePurple300: '#C86AF8',
  corePurple400: '#AF3CE8',
  corePurple500: '#990AE3',
  corePurple600: '#7907B3',
  corePurple700: '#570580',
  corePurple800: '#380354',
  corePurple900: '#1F012F',
  corePurple: '#990AE3',
  deepPurple: '#380354',
  blackPurple: '#1F012F',

  // GREY
  grey100: '#FBFBFB',
  grey200: '#F2F2F2',
  grey300: '#CCCCCC',
  grey400: '#A0A0A0',
  grey500: '#6E6E6E',
  grey600: '#5E5E5E',
  grey700: '#4E4E4E',
  grey800: '#303030',
  grey900: '#222222',
  lightGrey: '#F2F2F2',
  darkGrey: '#A0A0A0',
  black: '#222222',

  // GREEN
  green100: '#F3FFF9',
  green200: '#D9FFEB',
  green300: '#40FF9F',
  green400: '#00F37A',
  green500: '#00D066',
  green600: '#00A552',
  green: '#00D066',

  // RED
  red100: '#FFF5F9',
  red200: '#FFE0EB',
  red300: '#FF6699',
  red400: '#FF3377',
  red500: '#E4175C',
  red600: '#BF134D',
  red: '#E4175C',

  // ORANGE
  orange100: '#FFF7EB',
  orange200: '#FFEDD0',
  orange300: '#FFD06B',
  orange400: '#FFB84D',
  orange500: '#FF9B00',
  orange600: '#DD8804',
  orange: '#FF9B00',

  // BLUE
  blue100: '#EDF8FF',
  blue200: '#D4EEFF',
  blue300: '#73C7FF',
  blue400: '#40B2FF',
  blue500: '#0099FF',
  blue600: '#0082D9',
  blue: '#0099FF',
}
