import * as React from 'react';

export interface Color {
    id: string;
    color: string;
    name: string;
}

export interface ColorPickerProps {
    selected?: Color | null;
    colors: Color[];
    onSelect?: (...args: any[]) => any;
}

const ColorPicker: React.FC<ColorPickerProps>;

export default ColorPicker;
