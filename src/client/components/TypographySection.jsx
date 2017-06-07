import React from 'react';

import Heading from '../../components/atoms/Heading/Heading';

const TypographySection = () =>
    <div>
        <Heading level={2} text="Typography" />
        <p>Our fonts, sizes and weights should be consistent across the page. The Pebble font should only be used in (TODO) scenarios because (TODO).</p>
        <div className="sg-component__example-rendered">
            {_.map([1, 2, 3, 4, 5, 6], (level) =>
                <Heading key={level} level={level} text={`h${level}. Heading level ${level}`} />
            )}
        </div>
    </div>;

export default TypographySection;