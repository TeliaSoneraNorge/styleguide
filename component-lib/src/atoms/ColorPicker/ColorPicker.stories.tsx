import React, { useState } from 'react';
import ColorPicker from './ColorPicker';

export default {
  title: 'Component library|Atoms/ColorPicker',
  component: ColorPicker,
};

const colors = [
    { name: "Grey", color: "grey", id: "grey" },
    { name: "Light", color: "#FFDAAF", id: "light" },
    { name: "Black", color: "#000", id: "black" }
]

export const Default = () => {
    const [selected, setSelected] = useState(null);
    return (
        <ColorPicker selected={selected} onSelect={setSelected} colors={colors} />
    )
}