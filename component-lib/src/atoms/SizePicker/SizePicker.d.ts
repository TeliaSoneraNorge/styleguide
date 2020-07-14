import * as React from 'react';

export interface Size {
    id: string;
    name: string;
}

export interface SizePickerProps {
    selected?: Size | null;
    sizes: Size[];
    onSelect?: (...args: any[]) => any;
}

const SizePicker: React.FC<SizePickerProps>;

export default SizePicker;
