export const colorDefinitions = {
  // White
  white: '#FFFFFF',

  // Accent
  accent250: '#ebebeb',

  // Purple
  corePurple100: '#fbf4ff',
  corePurple200: '#edc8ff',
  corePurple300: '#de99ff',
  corePurple400: '#c158f8',
  corePurple500: '#990ae3',
  corePurple600: '#7d00bd',
  corePurple700: '#5f008f',
  corePurple800: '#3f005e',
  corePurple900: '#1f002e',

  // Grey
  grey100: '#f2f2f2',
  grey200: '#dbdbdb',
  grey300: '#bdbdbd',
  grey400: '#9c9c9c',
  grey500: '#7a7a7a',
  grey600: '#646464',
  grey700: '#4e4e4e',
  grey800: '#383838',
  grey900: '#222222',

  // Green
  green100: '#ccefdd',
  green200: '#a6e3c4',
  green300: '#73d3a2',
  green400: '#4cc789',
  green500: '#26bb6f',
  green600: '#00af56',
  green700: '#008641',
  green800: '#00572a',
  green900: '#00361a',

  // Red
  red100: '#fad1de',
  red200: '#f6aec6',
  red300: '#f07fa5',
  red400: '#eb5185',
  red500: '#e4175c',
  red600: '#be0040',
  red700: '#890e37',
  red800: '#5b0925',
  red900: '#390617',

  // Orange
  orange100: '#ffebcc',
  orange200: '#ffdca6',
  orange300: '#ffc366',
  orange400: '#ffaf33',
  orange500: '#ff9b00',
  orange600: '#cc7c00',
  orange700: '#995d00',
  orange800: '#663e00',
  orange900: '#402700',

  // Blue
  blue100: '#ccebff',
  blue200: '#a6dbff',
  blue300: '#66c2ff',
  blue400: '#33adff',
  blue500: '#0099ff',
  blue600: '#007acc',
  blue700: '#00558f',
  blue800: '#003d66',
  blue900: '#00253d',
};

export const colorAliases = {
  corePurple: colorDefinitions.corePurple500,
  deepPurple: colorDefinitions.corePurple800,
  blackPurple: colorDefinitions.corePurple900,
  lightGrey: colorDefinitions.grey200,
  darkGrey: colorDefinitions.grey400,
  black: colorDefinitions.grey900,
  green: colorDefinitions.green500,
  red: colorDefinitions.red500,
  orange: colorDefinitions.orange500,
  blue: colorDefinitions.blue500,
};

export const colors = {
  ...colorDefinitions,
  ...colorAliases,
};
