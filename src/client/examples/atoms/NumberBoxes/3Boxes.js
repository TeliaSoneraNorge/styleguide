import React from 'react';
import { NumberBoxes } from '@telia/styleguide';

const { NumberBox } = NumberBoxes;

const DefaultNumberBoxes = () => (
    <NumberBoxes>
        <NumberBox
            title="A small title"
            number={45.609}
            unit="Unit"
            text="A short descriptive text" />
        <NumberBox
            title="A small title"
            number={45}
            unit="Nasjonaliteter"
            text="A short descriptive text" />
        <NumberBox
            title="A small title"
            number={123}
            unit="Unit"
            text="A short descriptive text" />
    </NumberBoxes>
);

export default DefaultNumberBoxes;