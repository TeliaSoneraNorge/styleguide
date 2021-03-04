export const colorDefinitions = {
  // White
  white: '#FFFFFF',

  // Accent
  accent250: '#ebebeb',

  // Purple
  corePurple100: '#f9eefe',
  corePurple200: '#f2dbfd',
  corePurple300: '#c86af8',
  corePurple400: '#af3ce8',
  corePurple500: '#990ae3',
  corePurple600: '#7907b3',
  corePurple700: '#570580',
  corePurple800: '#380354',
  corePurple900: '#1f012f',

  // Grey
  grey100: '#fbfbfb',
  grey200: '#f2f2f2',
  grey300: '#cccccc',
  grey400: '#a0a0a0',
  grey500: '#6e6e6e',
  grey600: '#5e5e5e',
  grey700: '#4e4e4e',
  grey800: '#303030',
  grey900: '#222222',

  // Green
  green100: '#f3fff9',
  green200: '#d9ffeb',
  green300: '#40ff9f',
  green400: '#00f37a',
  green500: '#00d066',
  green600: '#00a552',
  green700: '#008641',
  green800: '#00592B',
  green900: '#002E16',

  // Red
  red100: '#fff5f9',
  red200: '#ffe0eb',
  red300: '#ff6699',
  red400: '#ff3377',
  red500: '#e4175c',
  red600: '#bf134d',
  red700: '#900030',
  red800: '#5E0020',
  red900: '#2E000F',

  // Orange
  orange100: '#fff7eb',
  orange200: '#ffedd0',
  orange300: '#ffd06b',
  orange400: '#ffb84d',
  orange500: '#ff9b00',
  orange600: '#dd8804',
  orange700: '#A86600',
  orange800: '#6B4100',
  orange900: '#2E1C00',

  // Blue
  blue100: '#edf8ff',
  blue200: '#d4eeff',
  blue300: '#73c7ff',
  blue400: '#40b2ff',
  blue500: '#0099ff',
  blue600: '#0082d9',
  blue700: '#005F9E',
  blue800: '#003D65',
  blue900: '#001C2E',
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
