import React from 'react';

import Color from './Color';
import Heading from '../../components/atoms/Heading/Heading';

const ColorsSection = ({ colors }) =>
    <div>
        <Heading level={2} text="Colors" />
        {_.map(colors, (color, name) =>
            <Color name={name} {...color} />
        )}
    </div>;

export default ColorsSection;