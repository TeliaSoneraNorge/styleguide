import { colorDefinitions, colorAliases, colors } from '../../utils/colors';

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

export default Object.keys(colorDefinitions).map(key => {
  // We know that `key` is only ever one of the valid keys.
  const definition = colorDefinitions[key as keyof typeof colorDefinitions];
  return {
    // Convert from 'corePurple500' to 'Core Purple 500'
    name: key
      .replace(/[A-Z0-9]+/g, m => ` ${m}`)
      .replace(/\s./g, match => match.toUpperCase())
      .replace(/^./, m => m.toUpperCase())
      .trim(),

    // Hex representation: '#ff0000'
    hex: definition,

    // RGB representation: '255, 0, 0'
    rgb: convertToRgb(definition),

    // Light or dark text color for best contrast
    textColor: textColor(definition),

    // Any aliases for this color
    alias: Object.keys(colorAliases)
      .filter(a => colorAliases[a as keyof typeof colorAliases] === definition)
      .join(', '),
  };
});
