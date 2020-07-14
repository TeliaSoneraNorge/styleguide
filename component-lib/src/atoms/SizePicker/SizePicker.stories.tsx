import React, { useState } from 'react';
import SizePicker from './SizePicker';

export default {
  title: 'Component library|Atoms/SizePicker',
  component: SizePicker,
};

const sizes = [
    { name: "64 GB",  id: "64-gb" },
    { name: "128 GB", id: "128-gb" },
    { name: "256 GB", id: "256-gb" }
];

export const Default = () => {
    const [selected, setSelected] = useState(null);
    return (
        <SizePicker selected={selected} onSelect={setSelected} sizes={sizes} />
    )
}