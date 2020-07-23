import React, { useState } from 'react';
import SmallBoxList, { SmallBox } from './SmallBoxList';

export default {
  title: 'Component library|Atoms/SmallBoxList',
  component: SmallBoxList,
};

const boxes = [
    { name: "64 GB",  id: "64-gb" },
    { name: "128 GB", id: "128-gb" },
    { name: "256 GB", id: "256-gb" }
];

export const Default = () => {
    const [selected, setSelected] = useState<SmallBox>();
    return (
        <SmallBoxList selected={selected} onSelect={setSelected} boxes={boxes} />
    )
}