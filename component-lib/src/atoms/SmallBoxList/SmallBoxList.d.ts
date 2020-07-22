import * as React from 'react';

export interface SmallBox {
    id: string;
    name: string;
}

export interface SmallBoxListProps {
    selected?: SmallBox;
    boxes: SmallBox[];
    onSelect?: (smallBox: SmallBox) => void;
}

const SmallBoxList: React.FC<SmallBoxListProps>;

export default SmallBoxList;
