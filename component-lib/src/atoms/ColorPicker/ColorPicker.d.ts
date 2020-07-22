import * as React from 'react';

export interface Color {
    id: string;
    color: string;
    name: string;
}

export interface ColorPickerProps {
    selected?: Color;
    colors: Color[];
    onSelect?: (color: Color) => void;
}

const ColorPicker: React.FC<ColorPickerProps>;

export default ColorPicker;
