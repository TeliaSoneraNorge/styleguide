import { colorDefinitions, colorAliases, colors } from '../../src/utils/colors';

function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) {
    return null;
  }
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
}

function convertToRgb(hex: string) {
  const rgb = hexToRgb(hex);
  return rgb ? `${rgb.r}, ${rgb.g}, ${rgb.b}` : null;
}

function textColor(hex: string) {
  const rgb = hexToRgb(hex);
  // https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
  if (rgb && rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114 > 186) {
    return colors.black;
  }
  return '#ffffff';
}

export default Object.keys(colorDefinitions).map(k => {
  return {
    // Convert from 'corePurple500' to 'Core Purple 500'
    name: k
      .replace(/[A-Z0-9]+/g, m => ` ${m}`)
      .replace(/\s./g, match => match.toUpperCase())
      .replace(/^./, m => m.toUpperCase())
      .trim(),

    // Hex representation: '#ff0000'
    hex: colorDefinitions[k],

    // RGB representation: '255, 0, 0'
    rgb: convertToRgb(colorDefinitions[k]),

    // Light or dark text color for best contrast
    textColor: textColor(colorDefinitions[k]),

    // Any aliases for this color
    alias: Object.keys(colorAliases)
      .filter(a => colorAliases[a] === colorDefinitions[k])
      .join(', '),
  };
});
