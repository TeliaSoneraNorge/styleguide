import React from 'react';

import Heading from '../../components/atoms/Heading/Heading';

const TypographySection = () =>
    <div>
        <Heading level={2} text="Typography" />
        <p>TODO: explain the rules for when to use each font (Pebble, Helvetica Neue), etc.</p>
        <div className="sg-component__example-rendered">
            {_.map([1, 2, 3, 4], (level) =>
                <Heading key={level} level={level} text={`h${level}. Heading level ${level}`} />
            )}
        </div>
    </div>;

export default TypographySection;